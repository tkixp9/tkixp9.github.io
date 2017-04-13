import { updateChart } from '../../utils';
import {
  formatDate,
  formatNum
} from '../../../../../util/utils';


module.exports = {
  name: 'list',
  data() {
    return {

      dateSelected: (() => {
        var end = new Date();
        return [new Date(end.getTime() - 7 * 24 * 3600 * 1000), end];
      })(),

      originAjaxData: [],
      tableItems: [],
      featuresData: [],
      itemSelected: 0,

      isLoading: false,

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }],
      },
    }
  },
  methods: {
    resetData: function () {
      this.tableItems = [];
      this.originAjaxData = [];
      this.tableItems = [];
      this.featuresData = [];
      this.itemSelected = 0;
    },
    changeDate: function () {

      this.resetData();
      this.resolveDataRequest();
    },
    changeItem: function () {
      this.updateCharts(this.originAjaxData);

    },
    updateCharts: function (items) {

      if (!items) {
        return;
      }
      updateChart('#feature-single-detail', items.dates,
        [
          {
            name: '--rate：百分比',
            data: items.features[this.itemSelected].rates
          }
        ]
      );
    },
    resolveDataRequest: function () {

      this.isLoading = true;
      this.dateSingle = formatDate(this.dateSelected[1]);
      var params = {start: formatDate(this.dateSelected[0]),end: this.dateSingle};
      this.$$features(params, data => {
        this.isLoading = false;
        if (data.sta != 0) {
          return;
        }
        var result = this.originAjaxData = data.data;
        this.featuresData =  resetJsonData(result)
        this.updateCharts(result);
        this.tableItems = updateTables(result);
      });

      function resetJsonData(items) {
        items.features = [];
        var i = 0;
        for (var pro in items) {
          if (items[pro] && items[pro].name) {
            items.features[i] = items[pro];
            items.features[i].value = i;
            i++;
          }
        }
        return items.features;
      }

      function updateTables(items) {
        var tableItemsFeature = [];
        for (var j = 0, jLength = items.features.length; j < jLength; j++) {
          tableItemsFeature[j] = {data: []};
          for (var i = 0, length = items.dates.length; i < length; i++) {
            tableItemsFeature[j].data[i] = {
              dates: items.dates[i],
              rates: items.features[j].rates[i],
              usage_nums: formatNum(items.features[j].usage_nums[i]),
            };
          }
        }
        return tableItemsFeature;
      }

    }
  },
  watch: {
    '$route' (to, from) {
    }
  },
  mounted() {
    this.changeDate();
  }
};
