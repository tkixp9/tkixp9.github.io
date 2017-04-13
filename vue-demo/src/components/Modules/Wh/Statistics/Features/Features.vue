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
        <span style="">>> 功能分析</span>
      </div>
      <div style="margin-bottom: 1rem;">
        <span>选择机器人：</span>
        <el-select @change="changeItem" v-model="itemSelected" placeholder="请选择">
          <el-option
            v-for="item in featuresData"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div id="feature-single-detail">
      </div>

      <el-table :data="tableItems[itemSelected] ? tableItems[itemSelected].data : []" border style="width: 100%;">
        <el-table-column prop="dates" label="日期" width="80"></el-table-column>
        <el-table-column prop="rates" label="百分比"></el-table-column>
        <el-table-column prop="usage_nums" label="使用群数"></el-table-column>
      </el-table>

    </el-card>

  </div>

</template>

<script>
  import FeaturesJs from './Features.js';
  module.exports = FeaturesJs;
</script>
