export default {
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
      isUploadingFiles: false,

      tableItems: [],
      tablePageSize: 20,
      tableToatalSize: 0,
      currentPageIndex: 1,
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
        this.resolveDataRequest();
      }, 400);
    },

    submitNewApk: function () {
      this.isUploadingFiles = true;
      var fd = new FormData();
      fd.append('file', this.fileDatas);
      fd.append('force', this.forceSelected);
      fd.append('title', this.updateTitle);
      fd.append('des', this.updateDes);

      this.$$apkupload(fd, data => {
        this.isUploadingFiles = false;
        if (data.sta != 0) {
          this.$message.error(data.msg ? data.msg : '上传错误！');
          return;
        }
        this.$message({message: '上传成功！', type: 'success'});
        this.reloadPage();
      }, data => {
        this.$message.error('上传错误！');
        this.isUploadingFiles = false;
      });
    },

    handlerFileChange: function (element) {
      var files = this.$refs.fileInputer.files;
      if (files && files.length > 0) {
        this.fileDatas = files[0];
      }
      // 通过DOM取文件数据
      console.log('tkyj+++++' + JSON.stringify(this.fileDatas.length));
    },

    confirmDelete: function (index) {
      if (index >= 0) {
        this.$$apkdelete({versionCode: this.tableItems[index].versionCode}, data => {
          if (data.sta != 0) {
            return;
          }
          this.tableItems.splice(index, 1);
        });
      }

    },
    deleteItem: function (index) {
      this.$confirm('确定要删除这个APK吗?', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.confirmDelete(index);
      }).catch(() => {
      });
    },
    downloadItemApk: function (index) {
      window.open(this.tableItems[index].downloadUrl);
    },
    resolveDataRequest: function () {

      var index = (this.currentPageIndex - 1) * this.tablePageSize;
      if (index >= this.tableToatalSize) {
        index = 0;
        this.currentPageIndex = 1;
      }
      var params = {index: index, count: this.tablePageSize};
      this.$$apklist(params, data => {
        if (data.sta != 0) {
          return;
        }
        this.tableItems = updateTables( data.data);
        this.tableToatalSize = data.data.total;

      });
      function updateTables(data) {
        return data.items;
      }
    },
    handleCurrentPageChange: function (index) {
      this.currentPageIndex = index;
      this.resolveDataRequest();
    },
    handlePageSizeChange: function (size) {
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
