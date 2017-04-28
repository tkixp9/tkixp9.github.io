<template>
  <div class="container">
    <el-button v-show="!isEditNewItem" @click="isEditNewItem = !isEditNewItem" size="large" type="primary">创建新公告</el-button>

    <el-card v-show="isEditNewItem" class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 编辑新公告</span>
      </div>
      <el-row>
        <el-col class="el-col-label-mine" :span="3">
          <el-button style="margin-right: 9px" @click="refreshEditExample" size="small" type="primary">
            {{itemContentConvert ? '刷新预览' : '生成预览'}}
          </el-button>
        </el-col>
        <el-col :span="21">
          <el-card v-show="itemContentConvert && itemTitle">
            <p class="item_title">{{itemTitle}}</p>
            <p class="item_row" v-html="itemContentConvert"></p>
          </el-card>
        </el-col>
      </el-row>
      <div style="margin: 20px 0;height: 1px;background: #12b7f5;"></div>
      <el-row>
        <el-col class="el-col-label-mine" :span="3">标题：</el-col>
        <el-col :span="21">
          <el-input placeholder="" v-model="itemTitle"></el-input>
        </el-col>
      </el-row>

      <el-row style="margin: 20px 0">
        <el-col class="el-col-label-mine" :span="3">正文：</el-col>
        <el-col :span="21">
          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder=""
                    v-model="itemContent"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="el-col-label-mine" :span="3">客户端：</el-col>

        <el-col :span="21" style="line-height: 36px">
          <el-checkbox v-model="checkWeb">WEB</el-checkbox>
          <el-checkbox v-model="checkApp">APP</el-checkbox>
        </el-col>
      </el-row>

      <el-row style="margin: 20px 0">
        <el-col class="el-col-label-mine" :span="3">说明：</el-col>
        <el-col :span="21" style="line-height: 36px">
          <p>我是<span style="color: #12b7f5;">蓝色</span>的，很显眼 <===> 我是&lt;#-blue&gt;蓝色的&lt;blue-#&gt;，很显眼</p>
          <p>我是<a target="_blank" style="color: #12b7f5;text-decoration: none" href="https://weiyoubot.com">链接</a>，快点点击我
            <===> 我是&lt;#-link "https://weiyoubot.com"&gt;链接&lt;link-#&gt;快点点击我</p>
        </el-col>
      </el-row>

      <el-row>
        <el-button :disabled="!itemTitle || !itemContent || (!checkWeb && !checkApp)" @click="showSubmitDialog"
                   size="large" type="primary">上线
        </el-button>
        <el-button @click="cancelNewItem" size="large" type="">取消</el-button>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 线上公告</span>
      </div>
      <el-card v-for="item in currentList" class="box-card">
        <p class="item_title">{{item.title}}
          <el-button @click="rolloffItem(item.id)" type="text" class="push-out"><i class="fa fa-arrow-down"></i>下线
          </el-button>
          <el-button @click="stickItem(item.id)" type="text" class="push-to-first"><i class="fa fa-arrow-up"></i>置顶
          </el-button>
        </p>
        <p class="item_row" v-html="item.content"></p>
        <p class="client_flag item_row">
          <el-tag type="success" v-show="item.web">WEB</el-tag>
          <el-tag type="warning" v-show="item.app">APP</el-tag>
        </p>
      </el-card>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 历史记录</span>
      </div>
      <el-card v-for="item in historyList" class="box-card">
        <p class="item_title">{{item.title}}
          <el-button @click="deleteItem(item.id)" type="text" class="push-out"><i class="fa fa-trash"></i>删除</el-button>
        </p>
        <p class="item_row" v-html="item.content"></p>
        <p class="client_flag item_row">
          <el-tag type="success" v-show="item.web">WEB</el-tag>
          <el-tag type="warning" v-show="item.app">APP</el-tag>
        </p>
      </el-card>
    </el-card>
  </div>

</template>

<script>
  export {default} from  './Noticemanager.js';
</script>
<style>
  .el-col-label-mine {
    text-align: right;
    line-height: 36px;
    padding-right: 10px;
  }

  .item_title {
    font-size: 1.2rem;
    color: #12b7f5;
    margin-bottom: 0.5rem;;
  }

  .row_container {
    font-size: 1rem;
    margin-top: .5rem;
    line-height: 1.5rem;
  }

  .item_row a {
    text-decoration: none;
  }

  .focus_color {
    color: #12b7f5;
  }

  .push-to-first {
    float: right;
    margin-right: 1rem;
  }

  .push-out {
    float: right;
  }

  .client_flag {
    text-align: right;
  }
</style>
