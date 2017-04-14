import {updateChart} from '../../utils';
import {
  formatDate,
  formatNum,
  formatNumRate
} from '../../../../../util/utils';


module.exports = {
  name: 'list',
  data() {
    return {

      dateSelected: (() => {
        var end = new Date();
        return [new Date(end.getTime() - 7 * 24 * 3600 * 1000), end];
      })(),

      tableItemsActive: [],
      activeThItems: [
        {
          attr: 'date',
          name: '日期'
        },
        {
          attr: 'active_new',
          name: '新增活跃用户'
        },
        {
          attr: 'active_1',
          name: '+1'
        },
        {
          attr: 'active_2',
          name: '+2'
        },
        {
          attr: 'active_3',
          name: '+3'
        },
        {
          attr: 'active_4',
          name: '+4'
        },
        {
          attr: 'active_5',
          name: '+5'
        },
        {
          attr: 'active_6',
          name: '+6'
        },
        {
          attr: 'active_7',
          name: '+7'
        },
        {
          attr: 'active_10',
          name: '+10'
        },
        {
          attr: 'active_15',
          name: '+15'
        },
        {
          attr: 'active_20',
          name: '+20'
        },
        {
          attr: 'active_25',
          name: '+25'
        },
        {
          attr: 'active_30',
          name: '+30'
        }
      ],//['日期', '新增活跃用户', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+10', '+15', '+20', '+25', '+30'],
      activeTableData: [],

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
    },
    changeDate: function () {
      this.resetData();
      this.resolveDataRequest();
    },
    resolveDataRequest: function () {

      this.isLoading = true;
      var params = {start: formatDate(this.dateSelected[0]), end: formatDate(this.dateSelected[1])};
      this.$$active(params, data => {
        this.isLoading = false;
        if (data.sta != 0) {
          return;
        }
        var result = data.data;
        updateCharts(result);
        this.tableItemsActive = updateActiveTables(result);

        //this.activeThItems = ['日期', '新增活跃用户', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+10', '+15', '+20', '+25', '+30'];
        this.activeTableData = updateTables(result);
      });

      function updateActiveTables(items) {
        var tableItemsActive = [];
        for (var i = 0, length = items.dates.length; i < length; i++) {
          tableItemsActive[i] = {dates: items.dates[i]};
          tableItemsActive[i].user = {
            active_users: formatNum(items.user.active_users[i]) + ' / ' + formatNum(items.user.active_users_chg[i]),
            active_payed_users: formatNum(items.user.active_payed_users[i]) + ' / ' + formatNum(items.user.active_payed_users_chg[i]),
            payed_ratio: formatNumRate(items.user.payed_ratio[i]),
            offline_users: formatNum(items.user.offline_users[i]) + ' / ' + formatNum(items.user.offline_new[i]),
            offline_ratio: formatNumRate(items.user.offline_ratio[i]),
            manually_offline: formatNum(items.user.manually_offline[i]) + ' / ' + formatNum(items.user.manually_offline_new[i]),
            logged_out: formatNum(items.user.logged_out[i]) + ' / ' + formatNum(items.user.logged_out_new[i]),
            long_time_1102: formatNum(items.user.long_time_1102[i]) + ' / ' + formatNum(items.user.long_time_1102_new[i]),
            other_client_login: formatNum(items.user.other_client_login[i]) + ' / ' + formatNum(items.user.other_client_login_new[i]),
          };
        }
        return tableItemsActive;
      }

      function updateTables(items) {

        var tableItemsRetention = [];
        for (var i = 0, length = items.retention_dates.length; i < length; i++) {
       /*   tableItemsRetention[i] = {
            retention_dates: items.retention_dates[i],
            new_active_users: items.new_active_users[i]
          };*/

          tableItemsRetention[i] = {
            date: items.retention_dates[i],
            active_new: items.new_active_users[i],
            active_1: formatNumRate(items.retention[i][0]),
            active_2: formatNumRate(items.retention[i][1]),
            active_3: formatNumRate(items.retention[i][2]),
            active_4: formatNumRate(items.retention[i][3]),
            active_5: formatNumRate(items.retention[i][4]),
            active_6: formatNumRate(items.retention[i][5]),
            active_7: formatNumRate(items.retention[i][6]),
            active_10: formatNumRate(items.retention[i][9]),
            active_15: formatNumRate(items.retention[i][14]),
            active_20: formatNumRate(items.retention[i][19]),
            active_25: formatNumRate(items.retention[i][24]),
            active_30: formatNumRate(items.retention[i][29]),

        };
        }
        return tableItemsRetention;
      }

      function updateCharts(items) {

        updateChart('#active-active-count', items.dates,
          [
            {
              name: '-- active_users：活跃用户',
              data: items.user.active_users
            },
            {
              name: '-- active_payed_users：已付费活跃用户数',
              data: items.user.active_payed_users
            },
            {
              name: '-- payed_ratio：付费活跃用户占比',
              data: items.user.payed_ratio
            },
            {
              name: '-- offline_users：掉线用户',
              data: items.user.offline_users
            },
            {
              name: '-- offline_ratio：掉线率',
              data: items.user.offline_ratio
            },
            {
              name: '-- active_users_chg：活跃用户 chg',
              data: items.user.active_users_chg
            },
            {
              name: '-- active_payed_users_chg：已付费活跃用户数 chg',
              data: items.user.active_payed_users_chg
            }
          ]
        );
        var itemsRetention = [];
        for (var i = 0; i < 12; i++) {
          var item = [];
          for (var j = 0, length = items.retention_dates.length; j < length; j++) {
            item[j] = items.retention[j][i];
          }
          itemsRetention[i] = item;
        }
        updateChart('#active-date-count', items.retention_dates,
          [
            {
              name: ' --Day+1',
              data: itemsRetention[0]
            },
            {
              name: ' --Day+2',
              data: itemsRetention[1]
            },
            {
              name: ' --Day+3',
              data: itemsRetention[2]
            },
            {
              name: ' --Day+4',
              data: itemsRetention[3]
            },
            {
              name: ' --Day+5',
              data: itemsRetention[4]
            },
            {
              name: ' --Day+6',
              data: itemsRetention[5]
            },
            {
              name: ' --Day+7',
              data: itemsRetention[6]
            },
            {
              name: ' --Day+10',
              data: itemsRetention[7]
            },
            {
              name: ' --Day+15',
              data: itemsRetention[8]
            },
            {
              name: ' --Day+20',
              data: itemsRetention[9]
            },
            {
              name: ' --Day+25',
              data: itemsRetention[10]
            },
            {
              name: ' --Day+30',
              data: itemsRetention[11]
            },

          ]
        );

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
