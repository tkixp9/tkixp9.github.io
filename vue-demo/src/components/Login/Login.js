import {
    user as UserApi
} from '../../config/request.js';

import Md5 from '../../libs/MD5';

export default {
    name: 'login',
    data() {
        return {
            winSize: {
                width: '',
                height: ''
            },

            formOffset: {
                position: 'absolute',
                left: '',
                top: ''
            },

            remumber: this.$store.state.user.remumber,

            login_actions: {
                disabled: false
            },

            data: {
                username: '',
                password: '',
                // token: ''
            },

            rule_data: {
                username: [{
                    required: true,
                    message: '用户名不能为空！',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '密码不能为空！',
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        setSize() {
            this.winSize.width = $(window).width() + "px";
            this.winSize.height = $(window).height() + "px";

            console.log('tkyj++++'+JSON.stringify(this.formOffset));
            this.formOffset.left = (parseInt(this.winSize.width) / 2 - 250) + 'px';
            this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
        },

        login(ref) {
            this.$refs[ref].validate((valid) => {
                if (valid) {
                    this.login_actions.disabled = true;
                  var localUser = {username:"robot@wechatGroup", password:"5fb76c577d4e7573030e62b9cf117bf3"};
                  //{username:"1", password:"c4ca4238a0b923820dcc509a6f75849b"};
                  var current = this[ref];
                  var mdPassword = Md5.hex_md5(current.password);
                  var data = {
                    username: current.username,
                    password: mdPassword,
                    token: new Date().getTime()
                  };
                  if (localUser.username == current.username && localUser.password == mdPassword) {

                    if (this.remumber.remumber_flag === true) {
                      this.$store.dispatch('update_remumber', {
                        remumber_flag: this.remumber.remumber_flag,
                      });
                    } else {
                      this.$store.dispatch('remove_remumber');
                    }

                    this.$store.dispatch('update_userinfo', {
                      userinfo: data
                    }).then(() => {
                      this.$router.push('/demo/user/list');
                    });

                  } else {
                    this.$store.state.user.userinfo.token = undefined;
                    this.$alert('请输入正确的用户名和密码！', {confirmButtonText: '确定'});
                  }
                  this.login_actions.disabled = false;
                }
            });
        },

        resetForm(ref) {
            this.$refs[ref].resetFields();
        }
    },
    created() {
        this.setSize();
        $(window).resize(() => {
            this.setSize();
        });
    },
    mounted() {
        // console.log(this.remumber);

        //如果上次登录选择的是记住密码并登录成功，则会保存状态，用户名以及token
        if (this.remumber.remumber_flag === true) {
            this.data.username = this.remumber.remumber_login_info.username;
            this.data.password = this.remumber.remumber_login_info.token.substring(0, 16);
            this.$set(this.data, 'token', this.remumber.remumber_login_info.token);
        }
    }
}
