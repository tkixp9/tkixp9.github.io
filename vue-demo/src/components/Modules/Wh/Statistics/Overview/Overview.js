import {
  statistics as StatisticsApi
} from '../../../../../config/request.js';
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

      tableItems: [],

      isLoading: false,

      activeNames: ['1'],

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
    changeDate: function () {
      this.resolveDataRequest();
    },
    resolveDataRequest: function () {

      this.isLoading = true;
      var params = {start: formatDate(this.dateSelected[0]),end: formatDate(this.dateSelected[1])};
      console.log('tkyj++++params++++'+JSON.stringify(params));
      this.$$overview(params, data => {
        this.isLoading = false;
        if (data.sta != 0) {
          return;
        }
        var result = data.data;
        updateCharts(result);
        this.tableItems = updateTables(result);
      });

      /*StatisticsApi.overview(params, data => {
        this.isLoading = false;
        if (data.sta != 0) {
          return;
        }
        var result = data.data;
        updateCharts(result);
        this.tableItems = updateTables(result);
      });*/

      function updateTables(items) {
        var tableItems = [];
        for (var i = 0, length = items.dates.length; i < length; i++) {
          tableItems[i] = {dates: items.dates[i]};
          tableItems[i].user = {
            regist_users: formatNum(items.user.regist_users[i]) + ' / ' + formatNum(items.user.regist_users_chg[i]),
            subscribe_owners: formatNum(items.user.subscribe_owners[i]) + ' / ' + formatNum(items.user.subscribe_owners_chg[i]),
            subscribe_users: formatNum(items.user.subscribe_users[i]) + ' / ' + formatNum(items.user.subscribe_users_chg[i]),
            payed_users: formatNum(items.user.payed_users[i]) + ' / ' + formatNum(items.user.payed_users_chg[i]),
            payed_orders: formatNum(items.user.payed_orders[i]) + ' / ' + formatNum(items.user.payed_orders_chg[i]),
            total_revenue: formatNum(items.user.total_revenue[i]) + ' / ' + formatNum(items.user.total_revenue_chg[i]),
          };
          tableItems[i].group = {
            active_groups: formatNum(items.group.active_groups[i]) + ' / ' + formatNum(items.group.active_groups_chg[i]),
            data_groups: formatNum(items.group.data_groups[i]) + ' / ' + formatNum(items.group.data_groups_chg[i]),
            data_online_groups: formatNum(items.group.data_online_groups[i]) + ' / ' + formatNum(items.group.data_online_groups_chg[i]),
            setting_groups: formatNum(items.group.setting_groups[i]) + ' / ' + formatNum(items.group.setting_groups_chg[i]),
            setting_online_groups: formatNum(items.group.setting_online_groups[i]) + ' / ' + formatNum(items.group.setting_online_groups_chg[i]),
            total_groups: formatNum(items.group.total_groups[i]) + ' / ' + formatNum(items.group.total_groups_chg[i]),
          };
          tableItems[i].members = {
            data_members: formatNum(items.members.data_members[i]) + ' / ' + formatNum(items.members.data_members_chg[i]),
            data_online_members: formatNum(items.members.data_online_members[i]) + ' / ' + formatNum(items.members.data_online_members_chg[i]),
            setting_members: formatNum(items.members.setting_members[i]) + ' / ' + formatNum(items.members.setting_members_chg[i]),
            setting_online_members: formatNum(items.members.setting_online_members[i]) + ' / ' + formatNum(items.members.setting_online_members_chg[i]),
            total_members: formatNum(items.members.total_members[i]) + ' / ' + formatNum(items.members.total_members_chg[i]),
          };
        }
        return tableItems;
      }

      function updateCharts(items) {

        updateChart('#overview-user-count', items.dates,
          [
            {
              name: '-- regist_users：注册用户数',
              data: items.user.regist_users
            },
            {
              name: '-- subscribe_users：管理群的人数（官方＋专属）',
              data: items.user.subscribe_users
            },
            {
              name: '-- subscribe_owners：管理群的群主数（官方＋专属）',
              data: items.user.subscribe_owners
            },
            {
              name: '-- payed_users：付费用户数',
              data: items.user.payed_users
            },
            {
              name: '-- payed_orders：订单数',
              data: items.user.payed_orders
            },
            {
              name: '-- total_revenue：收益',
              data: items.user.total_revenue
            }
          ]
        );

        updateChart('#overview-user-count-changed', items.dates,
          [
            {
              name: '-- regist_users_chg：注册用户数变化',
              data: items.user.regist_users_chg
            },
            {
              name: '-- subscribe_users_chg：管理群的人数（官方＋专属）change',
              data: items.user.subscribe_users_chg
            },
            {
              name: '-- subscribe_owners_chg：管理群的群主数增量（官方＋专属）change',
              data: items.user.subscribe_owners_chg
            },
            {
              name: '-- payed_users_chg：付费用户数change',
              data: items.user.payed_users_chg
            },
            {
              name: '-- payed_orders：订单数change',
              data: items.user.payed_orders_chg
            },
            {
              name: '-- total_revenue：收益change',
              data: items.user.total_revenue_chg
            }
          ]
        );

        updateChart('#overview-group-managed', items.dates,
          [
            {
              name: ' --total_groups：群总数（所有机器人在的群）',
              data: items.group.total_groups
            },
            {
              name: '-- active_groups：活跃群数（最近一周消息超过10条）',
              data: items.group.active_groups
            },
            {
              name: '--data_groups：可查看的群数（官方被订阅+专属被勾选的群）',
              data: items.group.data_groups
            },
            {
              name: '--data_online_groups：可查看且在线的群数（官方被订阅+专属被勾选）',
              data: items.group.data_online_groups
            },
            {
              name: '--setting_groups：可修改设置的群数（官方被群主订阅+专属被勾选）',
              data: items.group.setting_groups
            },
            {
              name: '--setting_online_groups：可修改设置且在线的群数（官方被群主订阅+专属被勾选）',
              data: items.group.setting_online_groups
            }
          ]
        );

        updateChart('#overview-group-managed-changed', items.dates,
          [
            {
              name: ' --total_groups_chg：群总数（所有机器人在的群）change',
              data: items.group.total_groups_chg
            },
            {
              name: '-- active_groups_chg：活跃群数（最近一周消息超过10条）change',
              data: items.group.active_groups_chg
            },
            {
              name: '--data_groups_chg：可查看的群数（官方被订阅+专属被勾选的群）change',
              data: items.group.data_groups_chg
            },
            {
              name: '--data_online_groups_chg：可查看且在线的群数（官方被订阅+专属被勾选）change',
              data: items.group.data_online_groups_chg
            },
            {
              name: '--setting_groups_chg：可修改设置的群数（官方被群主订阅+专属被勾选）change',
              data: items.group.setting_groups_chg
            },
            {
              name: '--setting_online_groups_chg：可修改设置且在线的群数（官方被群主订阅+专属被勾选）change',
              data: items.group.setting_online_groups_chg
            }
          ]
        );

        updateChart('#overview-members-count', items.dates,
          [
            {
              name: '--total_members：群友总数',
              data: items.members.total_members
            },
            {
              name: '--data_members：可查看的群的群友数（官方被订阅+专属被勾选）',
              data: items.members.data_members
            },
            {
              name: '--data_online_members：可查看且在线的群数（官方被订阅+专属被勾选）',
              data: items.members.data_online_members
            },
            {
              name: '--setting_members：可修改设置的群的群友数（官方被群主订阅+专属被勾选）',
              data: items.members.setting_members
            },
            {
              name: '--setting_online_members：可修改设置且在线的群数（官方被群主订阅+专属被勾选）',
              data: items.members.setting_online_members
            }
          ]
        );

        updateChart('#overview-members-count-changed', items.dates,
          [
            {
              name: '--data_members_chg：群友总数change',
              data: items.members.total_members_chg
            },
            {
              name: '--data_members_chg：可查看的群的群友数（官方被订阅+专属被勾选）change',
              data: items.members.data_members_chg
            },
            {
              name: '--data_online_members_chg：可查看且在线的群数（官方被订阅+专属被勾选）change',
              data: items.members.data_online_members_chg
            },
            {
              name: '--setting_members_chg：可修改设置的群的群友数（官方被群主订阅+专属被勾选）change',
              data: items.members.setting_members_chg
            },
            {
              name: '--setting_online_members_chg：可修改设置且在线的群数（官方被群主订阅+专属被勾选）change',
              data: items.members.setting_online_members_chg
            }
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
