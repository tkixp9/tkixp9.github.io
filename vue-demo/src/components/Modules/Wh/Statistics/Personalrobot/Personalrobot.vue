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
        <span style="">>> 使用人的维度</span>
      </div>
      <div id="personal-robot-user-count">
      </div>

      <el-table :data="tableItems" border style="width: 100%;">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="user.login_users" label="使用专属机器人的人数（至少成功登陆过一次专属机器人）"></el-table-column>
        <el-table-column prop="user.online_users" label="保持专属机器人在线的人数"></el-table-column>
      </el-table>

    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 群的维度</span>
      </div>
      <div id="personal-robot-group-managed">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="group.total_groups" label="专属机器人所在的群数"></el-table-column>
        <el-table-column prop="group.manage_groups" label="专属机器人被管理的群数"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 群友的维度</span>
      </div>
      <div id="personal-robot-members-count">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="members.total_members" label="专属机器人群友总数"></el-table-column>
        <el-table-column prop="members.manage_members" label="专属机器人被管理的群的群友数"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 官方机器人管理的群</span>
      </div>
      <div id="personal-robot-robot-detail">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="robot.total_robots" label="专属机器人总数"></el-table-column>
        <el-table-column prop="robot.login_robots" label="使用的专属机器人数"></el-table-column>
        <el-table-column prop="robot.online_robots" label="在线的专属机器人数"></el-table-column>
        <el-table-column prop="robot.offline_robots" label="离线的专属机器人数"></el-table-column>
      </el-table>
    </el-card>

  </div>

</template>

<script>
  import PersonalrobotJs from './Personalrobot.js';
  module.exports = PersonalrobotJs;
</script>
