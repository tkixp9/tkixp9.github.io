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
      <div id="official-robot-user-count">
      </div>

      <el-table :data="tableItems" border style="width: 100%;">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="user.subscribe_members" label="订阅官方机器人的人数"></el-table-column>
        <el-table-column prop="user.subscribe_owners" label="订阅官方机器人的群主数"></el-table-column>
      </el-table>

    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 群的维度</span>
      </div>
      <div id="official-robot-group-managed">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="group.total_groups" label="官方机器人所在群数"></el-table-column>
        <el-table-column prop="group.active_groups" label="官方机器人活跃群数（近一周消息超过10条）"></el-table-column>
        <el-table-column prop="group.subscribe_groups" label="官方机器人被订阅群数"></el-table-column>
        <el-table-column prop="group.subscribe_owners" label="官方机器人被群主订阅群数"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 群友的维度</span>
      </div>
      <div id="official-robot-members-count">
      </div>

      <el-table :data="tableItems" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="members.total_members" label="官方机器人群友总数"></el-table-column>
        <el-table-column prop="members.manage_members" label="官方机器人被管理的群的群友数"></el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 官方机器人管理的群</span>
      </div>
      <div style="margin-bottom: 1rem;">
        <span>选择机器人：</span>
        <el-select @change="changeRobot" v-model="robotSelected" placeholder="请选择">
          <el-option
            v-for="item in robotsData"
            :label="item.petName"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div id="official-robot-single-detail">
      </div>

      <el-table :data="tableItemsRobot[robotSelected] ? tableItemsRobot[robotSelected].data : []" border style="width: 100%">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="total_groups" label="所在群数"></el-table-column>
        <el-table-column prop="subscribe_groups" label="被订阅群数"></el-table-column>
        <el-table-column prop="subscribe_owners" label="被群主订阅群数"></el-table-column>
        <el-table-column prop="active_groups" label="活跃群（近一周消息超过10条）"></el-table-column>
        <el-table-column prop="bubble_groups" label="冒泡群（近一周消息1—10条）"></el-table-column>
        <el-table-column prop="dead_groups" label="死群（连续一周没有消息）"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="">>> 官方机器人{{dateSingle}}数据——所选日期的最后一天</span>
      </div>

      <el-table :data="robotsData" border style="width: 100%">
        <el-table-column prop="petName" label="机器人"></el-table-column>
        <el-table-column prop="total_groups_single" label="所在群数"></el-table-column>
        <el-table-column prop="subscribe_groups_single" label="被订阅群数"></el-table-column>
        <el-table-column prop="subscribe_owners_single" label="被群主订阅群数"></el-table-column>
        <el-table-column prop="active_groups_single" label="活跃群（近一周消息超过10条）"></el-table-column>
        <el-table-column prop="bubble_groups_single" label="冒泡群（近一周消息1—10条）"></el-table-column>
        <el-table-column prop="dead_groups_single" label="死群（连续一周没有消息）"></el-table-column>
      </el-table>
    </el-card>

  </div>

</template>

<script>
  import OfficalrobotJs from './Officalrobot.js';
  module.exports = OfficalrobotJs;
</script>
