module.exports = {
  name: 'list',
  data() {
    return {
      updateTitle: '',
      updateDes: '',
      forceData: [
        {
          value: 0,
          name: '否'
        },
        {
          value: 1,
          name: '是'
        }
      ],
      forceSelected: 0,
      fileDatas: undefined,
      fileName: '',
      resetInputFileElement: false,

      tableItems: [],
      tablePageSize: 20,
      tableToatalSize: 100,
      currentPageIndex: 1,
      dialogVisible: false,
    }
  },
  methods: {

    reloadPage: function () {
      this.resetInputFileElement = true;
      this.updateTitle = '';
      this.updateDes = '';
      this.forceSelected = 0;
      this.fileDatas = undefined;
      this.fileName = '';
      setTimeout(() => {
        this.resetInputFileElement = false;
      }, 400);
    },

    submitNewApk: function () {
      var fd = new FormData();
      fd.append('file', this.fileDatas);
      fd.append('force', this.forceSelected);
      fd.append('title', this.updateTitle);
      fd.append('des', this.updateDes);

      this.$$apkupload({}, data => {
        console.log('tkyj+++++++' + data);
        if (data.sta != 0) {
          return;
        }
        this.reloadPage();
      });
    },

    handlerFileChange: function (element) {
      console.log('tkyj+++++' + (element));
      var files = this.$refs.fileInputer.files;
      if (files && files.length > 0) {
        this.fileDatas = files[0];
      }
      // 通过DOM取文件数据
      console.log('tkyj+++++' + JSON.stringify(this.fileDatas.length));
      /*for (var i in element) {
       console.log(i+'tkyj+++++'+(element[i]));
       }
       if (!element || !element.currentTarget.files || !element.currentTarget.files[0]) {
       return;
       }
       this.fileDatas = element.currentTarget.files[0];
       console.log('tkyj+xxxxxx++++'+JSON.stringify(this.fileDatas));*/
    },

    confirmDelete: function () {
      this.dialogVisible = false;
      var index = this.indexBeingDeleted;
      this.indexBeingDeleted = undefined;
      if (index >= 0) {
        this.$$apkdelete({}, data => {
          if (data.sta != 0) {
            return;
          }
          this.tableItems.splice(index, 1);
        });
      }

    },
    cancelDelete: function () {
      this.dialogVisible = false;
      this.indexBeingDeleted = undefined;
    },
    deleteItem: function (index) {
      this.dialogVisible = true;
      this.indexBeingDeleted = index;
    },
    downloadItemApk: function (index) {
      window.open(this.tableItems[index].downloadUrl);
    },
    resolveDataRequest: function () {

      var params = {index: this.currentPageIndex - 1, count: this.tablePageSize};
      this.$$apklist(params, data => {
        if (data.sta != 0) {
          return;
        }
        this.tableItems = updateTables( data.data);

      });
      function updateTables(data) {
        return data.items;
      }
    },
    handleCurrentPageChange: function (index) {
      console.log('tkyj++++++index+'+index);;
      console.log('tkyj++++++currentPageIndex+'+this.currentPageIndex);;
      this.currentPageIndex = index;
      this.resolveDataRequest();
    },
    handlePageSizeChange: function (size) {
      console.log('tkyj++++++index+'+size);;
      console.log('tkyj++++++tablePageSize+'+this.tablePageSize);;
      this.tablePageSize = size;
      this.resolveDataRequest();
    }
  },
  watch: {
    '$route' (to, from) {
    }
  },
  mounted() {
    this.resolveDataRequest();
  }
};
