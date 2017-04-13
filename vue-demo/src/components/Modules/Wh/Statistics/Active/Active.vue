<template>
  <div class="">
    <div class="block statistics-date-picker-container">
      <span class="demonstration">选择日期：</span>
      <el-date-picker
        v-model="dateSelected"
        type="daterange"
        align="right"
        placeholder="选择日期范围"
        @change="changeDate"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 数据总览</span>
      </div>
      <div id="active-overview-count">
      </div>

      <el-table :data="tableItemsOverview" border style="width: 100%;">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="user.active_users" label="活跃用户"></el-table-column>
        <el-table-column prop="user.active_payed_users" label="已付费活跃用户"></el-table-column>
        <el-table-column prop="user.payed_ratio" label="付费活跃用户占比"></el-table-column>
        <el-table-column prop="user.offline_users" label="掉线用户数（/新）"></el-table-column>
        <el-table-column prop="user.offline_ratio" label="掉线率"></el-table-column>
        <el-table-column prop="user.manually_offline" label="手动掉线（/新）"></el-table-column>
        <el-table-column prop="user.logged_out" label="登出微信（/新）"></el-table-column>
        <el-table-column prop="user.long_time_1102" label="长时间（/新）"></el-table-column>
        <el-table-column prop="user.other_client_login" label="另行登录（/新）"></el-table-column>
      </el-table>

    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 日留存率</span>
      </div>
      <div id="active-date-count">
      </div>

      <el-table :data="activeTableData" border style="width: 100%">
        <el-table-column v-for="item in activeThItems" :prop="item.attr" :label="item.name"></el-table-column>

      </el-table>
    </el-card>

  </div>

</template>

<script>
  import ActiveJs from './Active.js';
  module.exports = ActiveJs;
</script>
<style lang='less'>
  .el-table th {
    text-align: center;
  }

  table {
    text-align: center;
  }

  .statistics-date-picker-container {
    margin-bottom: 1rem;
  }

  .el-date-range-picker {
    margin-left: 200px;
  }

  .box-card {
    margin-top: 1rem;
  }

  .box-card .el-card__header {
    background: rgba(18, 183, 245, 0.2);
  }
  .el-table .cell, .el-table th>div {
    padding-left: 8px;
    padding-right: 8px;
  }
</style>
