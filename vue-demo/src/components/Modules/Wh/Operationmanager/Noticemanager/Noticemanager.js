export default {
  name: 'list',
  data() {
    return {
      isEditNewItem: false,
      itemTitle: '',
      itemContent: '',
      checkWeb: false,
      checkApp: false,

      itemContentConvert: undefined,

      currentList: [],
      historyList: [],
    }
  },
  methods: {

    refreshEditExample: function () {
      var result = this.convertData([{content: this.itemContent, title: this.itemTitle}]);
      this.itemContentConvert = result[0].content;
      console.log('tkyj++++this.itemContentConvert++'+this.itemContentConvert)
      console.log('tkyj++++this.itemContent++'+this.itemContent)
    },

    resetEditStatus: function () {
      this.isEditNewItem = false;
      this.itemTitle = '';
      this.itemContent = '';
      this.itemContentConvert = undefined;
      this.checkWeb = false;
      this.checkApp = false;
    },
    cancelNewItem: function () {
      this.resetEditStatus();
    },
    showSubmitDialog: function () {
      if (!this.itemContentConvert) {
        this.$message('请点击生成预览，确认显示效果后再上线！');
        return;
      }
      this.$confirm('确认要上线这条公告吗?', '上线确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.submitNewItem();
      }).catch(() => {
      });
    },
    submitNewItem: function () {
      console.log('tkyj+++111111+++')
      var params = {title: this.itemTitle, content: this.itemContent, web: this.checkWeb ? 1 : 0, app: this.checkApp ? 1 : 0};
      this.$$noticecreate(params, data => {
        if (data.sta != 0) {
          return;
        }
        this.resetEditStatus();
        this.loadNotice({type:1});
      });
    },

    loadNotice: function (params) {
      this.$$noticelist(params, data => {
        if (data.sta != 0) {
          return;
        }
        this[params.type == 1 ? 'currentList' : 'historyList'] = this.convertData(data.data);
      });
    },
    convertData: function (result) {
      console.log('tkyj+++++++++22222++++++' + JSON.stringify(result));
      for (let i = result.length - 1; i >= 0; i--) {
        var item = result[i];
        if (!item.title || !item.content) {
          result.splice(i, 1);
          continue;
        }
        console.log('tkyj+++++++++333333++++++' + JSON.stringify(result));
        var content = item.content.replace(/#-blue/g, 'span class="focus_color"');
        console.log('tkyj+++++++++aaaa++++++' + JSON.stringify(content));

        content = content.replace(/blue-#/g, '/span');
        console.log('tkyj+++++++++bbbb++++++' + JSON.stringify(content));

        content = content.replace(/#-link/g, 'a class="focus_color" target="_blank" href=');
        content = content.replace(/link-#/g, '/a');
        console.log('tkyj+++++++++ccccc++++++' + JSON.stringify(content));

        content = content.replace(/^\n+|\n+$/g, '').replace(/\n/g, '</p><p class="row_container">');
        content = '<p class="row_container">' + content + '</p>';
        item.content = content;
        console.log('tkyj+++++++++ddddd++++++' + JSON.stringify(content));
        console.log('tkyj+++++++++11111++++++' + JSON.stringify(item.content));
      }
      return result;
    },

    stickItem: function (id) {
      this.$$noticestick({id: id}, data => {
        if (data.sta != 0) {
          return;
        }
        this.loadNotice({type: 1});
      });
    },

    rolloffItem: function (id) {
      this.$$noticeoff({id: id}, data => {
        if (data.sta != 0) {
          return;
        }
        this.loadNotice({type: 1});
        this.loadNotice({type: 0});
      });
    },
    deleteItem: function (id) {
      this.$confirm('确认要删除该条公告记录吗?', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.confirmDelete(id);
      }).catch(() => {
      });
    },

    confirmDelete: function (id) {
      if (id) {
        this.$$noticeremove({id: id}, data => {
          if (data.sta != 0) {
            return;
          }
          this.loadNotice({type: 0});
        });
      }

    },
  },
  watch: {
    '$route' (to, from) {
    }
  },
  mounted() {
    this.loadNotice({type: 1});
    this.loadNotice({type: 0});
  }
};
