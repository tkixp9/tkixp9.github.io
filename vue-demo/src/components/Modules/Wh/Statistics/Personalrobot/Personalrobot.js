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
    resetData : function () {
      this.tableItems = [];
    },
    changeDate: function () {

      this.resetData();
      this.resolveDataRequest();
    },
    resolveDataRequest: function () {

      this.isLoading = true;
      this.dateSingle = formatDate(this.dateSelected[1]);
      var params = {start: formatDate(this.dateSelected[0]),end: this.dateSingle};
      this.$$personalrobot(params, data => {
        this.isLoading = false;
        if (data.sta != 0) {
          return;
        }
        var result = data.data;
        updateCharts(result);
        this.tableItems = updateTables(result);
      });

      function updateTables(items) {
        var tableItems = [];
        for (var i = 0, length = items.dates.length; i < length; i++) {
          tableItems[i] = {dates: items.dates[i]};
          tableItems[i].user = {
            login_users: formatNum(items.user.login_users[i]),
            online_users: formatNum(items.user.online_users[i]),
          };
          tableItems[i].group = {
            manage_groups: formatNum(items.group.manage_groups[i]),
            total_groups: formatNum(items.group.total_groups[i]),
          };
          tableItems[i].members = {
            manage_members: formatNum(items.members.manage_members[i]),
            total_members: formatNum(items.members.total_members[i]),
          };
          tableItems[i].robot = {
            login_robots: formatNum(items.robot.login_robots[i]),
            offline_robots: formatNum(items.robot.offline_robots[i]),
            online_robots: formatNum(items.robot.online_robots[i]),
            total_robots: formatNum(items.robot.total_robots[i]),
          };
        }
        return tableItems;
      }

      function updateCharts(items) {

        updateChart('#personal-robot-user-count', items.dates,
          [
            {
              name: '--login_users：使用专属机器人的人数（至少成功登陆过一次专属机器人）',
              data: items.user.login_users
            },
            {
              name: '--online_users：保持专属机器人在线的人数',
              data: items.user.online_users
            }
          ]
        );

        updateChart('#personal-robot-group-managed', items.dates,
          [
            {
              name: '--total_groups：专属机器人所在的群数',
              data: items.group.total_groups
            },
            {
              name: '--manage_groups：专属机器人被管理的群数',
              data: items.group.manage_groups
            }
          ]
        );

        updateChart('#personal-robot-members-count', items.dates,
          [
            {
              name: '--total_members：专属机器人群友总数',
              data: items.members.total_members
            },
            {
              name: '--manage_members：专属机器人被管理的群的群友数',
              data: items.members.manage_members
            }
          ]
        );

        updateChart('#personal-robot-robot-detail', items.dates,
          [
            {
              name: '--login_robots：使用的专属机器人数',
              data: items.robot.login_robots
            },
            {
              name: '--total_robots：专属机器人总数',
              data: items.robot.total_robots
            },
            {
              name: '--online_robots：在线的专属机器人数',
              data: items.robot.online_robots
            },
            {
              name: '--offline_robots：离线的专属机器人数',
              data: items.robot.offline_robots
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
