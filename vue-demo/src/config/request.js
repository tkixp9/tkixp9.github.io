import {
	ajax
} from 'util/';

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
module.exports = {
  statistics: {
      overview(data, succesfn) {
        if(window.location.host.indexOf('localhost') >= 0) {
            succesfn(getTestJson());
        } else {
          ajax.call(this, 'get', '/wyzs/statistics/total', data, succesfn);
        }

        function getTestJson() {
          return {
            data: {
              dates: [
                "04-05",
                "04-06",
                "04-07",
                "04-08",
                "04-09",
                "04-10",
                "04-11"
              ],
              group: {
                active_groups: [
                  14986,
                  15163,
                  15455,
                  15269,
                  15195,
                  15882,
                  16223
                ],
                active_groups_chg: [
                  1852,
                  177,
                  292,
                  -186,
                  -74,
                  687,
                  341
                ],
                data_groups: [
                  87324,
                  87822,
                  88290,
                  88888,
                  89417,
                  89721,
                  90362
                ],
                data_groups_chg: [
                  581,
                  498,
                  468,
                  598,
                  529,
                  304,
                  641
                ],
                data_online_groups: [
                  11708,
                  11899,
                  11842,
                  11802,
                  11576,
                  11684,
                  12084
                ],
                data_online_groups_chg: [
                  547,
                  191,
                  -57,
                  -40,
                  -226,
                  108,
                  400
                ],
                setting_groups: [
                  85755,
                  86259,
                  86733,
                  87335,
                  87854,
                  88167,
                  88963
                ],
                setting_groups_chg: [
                  594,
                  504,
                  474,
                  602,
                  519,
                  313,
                  796
                ],
                setting_online_groups: [
                  10139,
                  10336,
                  10285,
                  10249,
                  10013,
                  10130,
                  10685
                ],
                setting_online_groups_chg: [
                  560,
                  197,
                  -51,
                  -36,
                  -236,
                  117,
                  555
                ],
                total_groups: [
                  482228,
                  488070,
                  491024,
                  495240,
                  498175,
                  501393,
                  505245
                ],
                total_groups_chg: [
                  4149,
                  5842,
                  2954,
                  4216,
                  2935,
                  3218,
                  3852
                ]
              },
              members: {
                data_members: [
                  12131098,
                  12170157,
                  12209797,
                  12297744,
                  12362917,
                  12414776,
                  12477685
                ],
                data_members_chg: [
                  28455,
                  39059,
                  39640,
                  87947,
                  65173,
                  51859,
                  62909
                ],
                data_online_members: [
                  1418244,
                  1438280,
                  1448752,
                  1468603,
                  1441296,
                  1457798,
                  1488182
                ],
                data_online_members_chg: [
                  49054,
                  20036,
                  10472,
                  19851,
                  -27307,
                  16502,
                  30384
                ],
                setting_members: [
                  12036739,
                  12076146,
                  12115680,
                  12203722,
                  12269103,
                  12321211,
                  12394653
                ],
                setting_members_chg: [
                  28048,
                  39407,
                  39534,
                  88042,
                  65381,
                  52108,
                  73442
                ],
                setting_online_members: [
                  1323885,
                  1344269,
                  1354635,
                  1374581,
                  1347482,
                  1364233,
                  1405150
                ],
                setting_online_members_chg: [
                  48647,
                  20384,
                  10366,
                  19946,
                  -27099,
                  16751,
                  40917
                ],
                total_members: [
                  71795999,
                  72417561,
                  72862717,
                  73313525,
                  73653524,
                  73982987,
                  74464629
                ],
                total_members_chg: [
                  459914,
                  621562,
                  445156,
                  450808,
                  339999,
                  329463,
                  481642
                ]
              },
              user: {
                manage_groups_users: [
                  29950,
                  30155,
                  30329,
                  30497,
                  30631,
                  30794,
                  30959
                ],
                manage_groups_users_chg: [
                  140,
                  205,
                  174,
                  168,
                  134,
                  163,
                  165
                ],
                manage_groups_users_online: [
                  3179,
                  3226,
                  3283,
                  3296,
                  3280,
                  3331,
                  3370
                ],
                manage_groups_users_online_chg: [
                  85,
                  47,
                  57,
                  13,
                  -16,
                  51,
                  39
                ],
                payed_orders: [
                  5470,
                  5572,
                  5659,
                  5727,
                  5800,
                  5889,
                  5992
                ],
                payed_orders_chg: [
                  72,
                  102,
                  87,
                  68,
                  73,
                  89,
                  103
                ],
                payed_users: [
                  3621,
                  3688,
                  3747,
                  3791,
                  3837,
                  3893,
                  3959
                ],
                payed_users_chg: [
                  49,
                  67,
                  59,
                  44,
                  46,
                  56,
                  66
                ],
                regist_users: [
                  119799,
                  120317,
                  120755,
                  121172,
                  121545,
                  121993,
                  122482
                ],
                regist_users_chg: [
                  426,
                  518,
                  438,
                  417,
                  373,
                  448,
                  489
                ],
                subscribe_owners: [
                  31741,
                  31976,
                  32184,
                  32372,
                  32529,
                  32724,
                  32915
                ],
                subscribe_owners_chg: [
                  178,
                  235,
                  208,
                  188,
                  157,
                  195,
                  191
                ],
                subscribe_users: [
                  37729,
                  37964,
                  38172,
                  38362,
                  38519,
                  38713,
                  38919
                ],
                subscribe_users_chg: [
                  179,
                  235,
                  208,
                  190,
                  157,
                  194,
                  206
                ],
                total_revenue: [
                  254864.15,
                  259194.15,
                  262560.15,
                  265513.15,
                  268287.15,
                  281636.15,
                  291919.15
                ],
                total_revenue_chg: [
                  3003,
                  4330,
                  3366.000000000029,
                  2953,
                  2774,
                  13349,
                  10283
                ]
              }
            },
            msg: "ok",
            sta: 0
          }
        }

      }
  },
	//用户模块
	user: {
		/**
		 * 登录
		 * @param {object} data 参数
		 * @param {string} data.username 登陆用户名
		 * @param {string} data.password 登陆密码
		 * @param {function} fn 成功回调
		 */
		login(data, fn, errFn) {
			ajax.call(this, 'post', '/Login/login', data, fn, true, errFn);
		},

		/**
		 * 获取用户列表
		 * @param  	{object}   	data 			参数
		 * @param 	{string} 	data.username 	用户名-搜索
		 * @param 	{string} 	data.email 		邮箱-搜索
		 * @param  	{Function} 	fn   			成功回的回调
		 */
		selectUser(data, fn) {
			ajax.call(this, 'get', '/User/selectUser', data, fn);
		},

		/**
		 * 添加修改用户公用接口
		 * @param {object}   data 参数
		 * @param {string} data.id 用户ID-修改时必须
		 * @param {string} data.username 用户名
		 * @param {string} data.email 邮箱
		 * @param {string} data.sex 性别
		 * @param {string} data.birthday 生日
		 * @param {string} data.address 住址
		 * @param {string} data.status 状态
		 * @param {function} fn   成功回调
		 */
		saveUser(data, fn) {
			ajax.call(this, 'post', '/User/saveUser', data, fn);
		},

		/**
		 * 删除用户
		 * @param  {object}   data 参数
		 * @param {string} data.id 需要删除的用户ID，批量删除时，值为以逗号分开的ID字符串
		 * @param  {Function} fn   成功回调
		 */
		deleteUser(data, fn) {
			ajax.call(this, 'post', '/User/deleteUser', data, fn);
		},

		/**
		 * 获取用户信息
		 * @param  {string}   id 用户ID
		 * @param  {Function} fn 成功回调
		 */
		findUser(id, fn) {
			ajax.call(this, 'get', '/User/findUser', {
				id: id
			}, fn);
		},


		/**
		 * 修改密码
		 * @param  {object}   data 参数
		 * @param {string} data.old_password 旧密码
		 * @param {string} data.password 新密码
		 * @param {string} data.password_confirm 确认密码
		 * @param  {Function} fn   成功回调
		 */
		updPass(data, fn) {
			ajax.call(this, 'post', '/User/updatePass', data, fn);
		},

		/**
		 * 设置权限
		 * @param  {object}   data 参数
		 * @param {string} data.id 数据ID
		 * @param {string} data.login_style 登录方式，1：单点登录；2：多点登录
		 * @param {string} data.disabled_update_pass 不允许修改密码的用户ID，以逗号隔开
		 * @param  {Function} fn   成功回调
		 */
		accessUser(data, fn) {
			ajax.call(this, 'post', '/User/accessUser', data, fn);
		}
	},

	/**
	 * 文章管理
	 * @type {Object}
	 */
	article: {
		/**
		 * 查看用户列表
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		selectArticle(data, fn) {
      ajax.call(this, 'get', '/Article/selectArticle', data, fn);
		},

		/**
		 * 添加修改公用接口
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveArticle(data, fn) {
			ajax.call(this, 'post', '/Article/saveArticle', data, fn);
		},

		/**
		 * 删除文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		deleteArticle(data, fn) {
			ajax.call(this, 'post', '/Article/deleteArticle', data, fn);
		},

		/**
		 * 获取文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		findArticle(data, fn) {
			ajax.call(this, 'get', '/Article/findArticle', data, fn);
		},
	},


	/**
	 * 订单管理
	 * @type {Object}
	 */
	order: {
		/**
		 * 统计订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		statisOrder(data, fn) {
			ajax.call(this, 'get', '/Order/statisOrder', data, fn);
		},

		/**
		 * 获取订单列表
		 * @param  {object}   data 获取订单列表
		 * @param  {Function} fn   成功回调
		 */
		selectOrder(data, fn) {
			ajax.call(this, 'get', '/Order/selectOrder', data, fn);
		},

		/**
		 * 添加订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveOrder(data, fn) {
			ajax.call(this, 'post', '/Order/saveOrder', data, fn);
		},
	},

	/**
	 * 系统设置
	 * @type {Object}
	 */
	system: {
		/**
		 * 获取系统设置信息
		 * @param  {Function} fn 成功回调
		 */
		getSetting(fn) {
			ajax.call(this, 'get', '/System/getSetting', {}, fn);
		},

		/**
		 * 修改系统设置信息
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		updateSetting(data, fn) {
			ajax.call(this, 'post', '/System/updateSetting', data, fn);
		}
	}
};
