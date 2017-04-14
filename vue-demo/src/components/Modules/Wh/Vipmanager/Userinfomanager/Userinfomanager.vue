<template>
  <div class="">
    <div class="block overview-date-picker-container">
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
        <span style="">>> 使用人的维度</span>
      </div>
      <div id="overview-user-count">
      </div>
      <div id="overview-user-count-changed">
      </div>

      <el-table :data="tableItems" border style="width: 100%;">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="user.regist_users" label="注册用户数"></el-table-column>
        <el-table-column prop="user.subscribe_users" label="管理群的人数（官方＋专属）"></el-table-column>
        <el-table-column prop="user.subscribe_owners" label="管理群的群主数（官方＋专属）"></el-table-column>
        <el-table-column prop="user.payed_users" label="付费用户数"></el-table-column>
        <el-table-column prop="user.payed_orders" label="订单数"></el-table-column>
        <el-table-column prop="user.total_revenue" label="收益"></el-table-column>
      </el-table>

    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 群的维度</span>
      </div>
      <div id="overview-group-managed">
      </div>
      <div id="overview-group-managed-changed">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="group.total_groups" label="群总数（所有机器人在的群）"></el-table-column>
        <el-table-column prop="group.active_groups" label="活跃群数（最近一周消息超过10条）"></el-table-column>
        <el-table-column prop="group.data_groups" label="可查看的群数（官方被订阅+专属被勾选）"></el-table-column>
        <el-table-column prop="group.data_online_groups" label="可查看且在线的群数（官方被订阅+专属被勾选）"></el-table-column>
        <el-table-column prop="group.setting_groups" label="可修改设置的群数（官方被群主订阅+专属被勾选）"></el-table-column>
        <el-table-column prop="group.setting_online_groups" label="可修改设置且在线的群数（官方被群主订阅+专属被勾选）"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 群友的维度</span>
      </div>
      <div id="overview-members-count">
      </div>
      <div id="overview-members-count-changed">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="members.total_members" label="群友总数"></el-table-column>
        <el-table-column prop="members.data_members" label="可查看的群的群友数（官方被订阅+专属被勾选）"></el-table-column>
        <el-table-column prop="members.data_online_members" label="可查看且在线的群数（官方被订阅+专属被勾选）"></el-table-column>
        <el-table-column prop="members.setting_members" label="可修改设置的群的群友数（官方被群主订阅+专属被勾选）"></el-table-column>
        <el-table-column prop="members.setting_online_members" label="可修改设置且在线的群数（官方被群主订阅+专属被勾选）"></el-table-column>
      </el-table>
    </el-card>
  </div>

</template>

<script>
  import UserinfomanagerJs from './Userinfomanager.js';
  module.exports = UserinfomanagerJs;
</script>
