<template>
  <div class="container">
    <el-card class="box-card" v-loading="isUploadingFiles" element-loading-text="正在上传...">
      <div slot="header" class="clearfix">
        <span style="">>> Apk更新</span>
      </div>
      <el-row>
        <el-col class="el-col-label-mine" :span="3">更新标题：</el-col>
        <el-col :span="21">
          <el-input type="textarea" :rows="2" placeholder="" v-model="updateTitle"></el-input>
        </el-col>
      </el-row>

      <el-row style="margin: 20px 0">
        <el-col class="el-col-label-mine" :span="3">更新描述：</el-col>
        <el-col :span="21">
          <el-input type="textarea" :rows="4" placeholder="" v-model="updateDes"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="el-col-label-mine" :span="3">强制更新：</el-col>

        <el-col :span="21">
          <el-select v-model="forceSelected" placeholder="请选择">
            <el-option v-for="item in forceData" :label="item.name" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <el-row style="margin: 20px 0">
        <el-col class="el-col-label-mine" :span="3">上传apk：</el-col>
        <el-col :span="21">

          <div>
            <el-button size="large">选择文件</el-button>
            <span style="margin-left: 15px">{{fileDatas ? fileDatas.name : ''}}</span>
            <form style="opacity: 0;position: absolute;top: 0;font-size: 1.8rem;" action="/" method="POST"
                  enctype="multipart/form-data">
              <input style="position: absolute;height: 40px;cursor: pointer;width: 108px;" v-if="!resetInputFileElement" type="file" name="file" ref="fileInputer" id="file"
                     @change="handlerFileChange"/>
            </form>
          </div>

        </el-col>
      </el-row>

      <el-row>
        <el-button :disabled="!updateTitle || !updateDes || !fileDatas" @click="submitNewApk" size="large"
                   type="primary">确认提交
        </el-button>

      </el-row>

    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> Apk列表</span>
      </div>

      <el-table :data="tableItems" border style="width: 100%;">
        <el-table-column prop="versionName" label="版本名" width="60"></el-table-column>
        <el-table-column prop="versionCode" label="版本号" width="60"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="des" label="描述"></el-table-column>
        <el-table-column width="100" prop="date" label="上传日期"></el-table-column>
        <el-table-column label="强制更新" width="80">
          <template scope="scope">{{ scope.row.force ? '是' : '否' }}</template>
        </el-table-column>

        <el-table-column label="操作" width="100">
          <template scope="scope">
            <el-button @click="downloadItemApk(scope.$index)" type="text" size="small">下载</el-button>
            <el-button @click="deleteItem(scope.$index)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination v-show="tablePageSize < tableToatalSize" style="margin-top: 16px; text-align: right"
                     @size-change="handlePageSizeChange"
                     @current-change="handleCurrentPageChange" :current-page="currentPageIndex"
                     :page-sizes="[20, 50, 100, 9999]" :page-size="tablePageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="tableToatalSize">
      </el-pagination>
    </el-card>
  </div>

</template>

<script>
  import ApkmanagerJs from './Apkmanager.js';
  module.exports = ApkmanagerJs;
</script>
<style scoped>
  .el-col-label-mine {
    text-align: right;
    line-height: 36px;
  }
</style>
