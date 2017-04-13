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

      originAjaxData: {},
      tableItems: [],
      tableItemsRobot: [],
      robotsData:[],
      dateSingle: '',
      robotSelected: 0,

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
      this.originAjaxData = {};
      this.tableItems = [];
      this.tableItemsRobot = [];
      this.robotsData = [];
      this.dateSingle = '';
      this.robotSelected = 0;
    },
    changeDate: function () {

      this.resetData();
      this.resolveDataRequest();
    },
    changeRobot: function () {
      this.updateRobotsChart(this.originAjaxData, this.robotSelected);
    },
    updateRobotsChart: function updateRobotsChart(items, index) {
      if (!items) {
        return;
      }
      updateChart('#official-robot-single-detail', items.dates,
        [
          {
            name: '--total_groups：所在群数',
            data: items.robot[index].total_groups
          },
          {
            name: '--subscribe_groups：被订阅的群数',
            data: items.robot[index].subscribe_groups
          },
          {
            name: '--subscribe_owners：被群主订阅的群数',
            data: items.robot[index].subscribe_owners
          },
          {
            name: '--subscribe_members：活跃群（近一周消息超过10条）',
            data: items.robot[index].active_groups
          },
          {
            name: '--bubble_groups：冒泡群（近一周消息1—10条）',
            data: items.robot[index].bubble_groups
          },
          {
            name: '--dead_groups：死群（连续一周没有消息）',
            data: items.robot[index].dead_groups
          }
        ]
      );
    },
    resolveDataRequest: function () {

      this.isLoading = true;
      this.dateSingle = formatDate(this.dateSelected[1]);
      var params = {start: formatDate(this.dateSelected[0]),end: this.dateSingle};
      this.$$officialrobot(params, data => {
        this.isLoading = false;
        if (data.sta != 0) {
          return;
        }
        var result = this.originAjaxData = data.data;
        updateCharts(result);
        this.tableItems = updateTables(result);

        this.updateRobotsChart(result, this.robotSelected);
        this.tableItemsRobot = updateRobotsTable(result);

        this.robotsData = updateAllRobotsData(result.robot);
      });

      function updateAllRobotsData(items) {
        var index = items[0].total_groups.length - 1;
        for (var i = 0, length = items.length; i < length; i++) {
          items[i].value = i;
          var tempName = items[i].nickname.split('-');
          items[i].petName = tempName[tempName.length - 1];
          items[i].total_groups_single = formatNum(items[i].total_groups[index]);
          items[i].subscribe_groups_single = formatNum(items[i].subscribe_groups[index]);
          items[i].subscribe_owners_single = formatNum(items[i].subscribe_owners[index]);
          items[i].subscribe_members_single = formatNum(items[i].subscribe_members[index]);
          items[i].active_groups_single = formatNum(items[i].active_groups[index]);
          items[i].bubble_groups_single = formatNum(items[i].bubble_groups[index]);
          items[i].dead_groups_single = formatNum(items[i].dead_groups[index]);
         /* if (field.robotSelected && field.robotSelected.id == items[i].id) {
            field.robotSelected = items[i];
          }*/
        }
        return items;
        // $scope.robotSelected = field.robotSelected ?field.robotSelected.value : 0;
      }

      function updateTables(items) {
        var tableItems = [];
        for (var i = 0, length = items.dates.length; i < length; i++) {
          tableItems[i] = {dates: items.dates[i]};
          tableItems[i].user = {
            subscribe_members: formatNum(items.user.subscribe_members[i]),
            subscribe_owners: formatNum(items.user.subscribe_owners[i]),
          };
          tableItems[i].group = {
            total_groups: formatNum(items.group.total_groups[i]),
            subscribe_groups: formatNum(items.group.subscribe_groups[i]),
            subscribe_owners: formatNum(items.group.subscribe_owners[i]),
            active_groups: formatNum(items.group.active_groups[i]),
          };
          tableItems[i].members = {
            manage_members: formatNum(items.members.manage_members[i]),
            total_members: formatNum(items.members.total_members[i]),
          };
        }
        return tableItems;
      }

      function updateRobotsTable(items) {
        var tableItemsRobots = [];
        for (var j = 0, jLength = items.robot.length; j < jLength; j++) {
          tableItemsRobots[j] = {data: []};
          for (var i = 0, length = items.dates.length; i < length; i++) {
            tableItemsRobots[j].data[i] = {
              dates: items.dates[i],
              total_groups: formatNum(items.robot[j].total_groups[i]),
              subscribe_groups: formatNum(items.robot[j].subscribe_groups[i]),
              subscribe_owners: formatNum(items.robot[j].subscribe_owners[i]),
              active_groups: formatNum(items.robot[j].active_groups[i]),
              bubble_groups: formatNum(items.robot[j].bubble_groups[i]),
              dead_groups: formatNum(items.robot[j].dead_groups[i]),
            };
          }
        }
        return tableItemsRobots;
        // field.tableItemsRobots = tableItemsRobots;
        // $scope.tableItemsRobot = tableItemsRobots[field.robotSelected ? field.robotSelected.value : 0].data;
        // $scope.dateSingle = _dateFormat(field.endDate);
      }

      function updateCharts(items) {

        updateChart('#official-robot-user-count', items.dates,
          [
            {
              name: '--subscribe_members：订阅官方机器人的人数',
              data: items.user.subscribe_members
            },
            {
              name: '--subscribe_owners：订阅官方机器人的群主数',
              data: items.user.subscribe_owners
            }
          ]
        );

        updateChart('#official-robot-group-managed', items.dates,
          [
            {
              name: '--total_groups：官方机器人所在的群数',
              data: items.group.total_groups
            },
            {
              name: '--active_groups：官方机器人活跃群数（近一周消息超过10条）',
              data: items.group.active_groups
            },
            {
              name: '--subscribe_groups：官方机器人被订阅的群数',
              data: items.group.subscribe_groups
            },
            {
              name: '--subscribe_owners：官方机器人被群主订阅的群数',
              data: items.group.subscribe_owners
            }
          ]
        );

        updateChart('#official-robot-members-count', items.dates,
          [
            {
              name: '--total_members：官方机器人群友总数',
              data: items.members.total_members
            },
            {
              name: '--manage_members：官方机器人被管理的群的群友数',
              data: items.members.manage_members
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
