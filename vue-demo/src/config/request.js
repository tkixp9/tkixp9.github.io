import {
	ajax
} from 'util/';

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
module.exports = {
  statistics: {
      overview(data, succesfn) {
        if(window.location.host.indexOf('localhost') >= 0) {
            succesfn(getTestJson());
        } else {
          ajax.call(this, 'get', '/wyzs/statistics/total', data, succesfn);
        }

        function getTestJson() {
          return {
            data: {
              dates: [
                "04-05",
                "04-06",
                "04-07",
                "04-08",
                "04-09",
                "04-10",
                "04-11"
              ],
              group: {
                active_groups: [
                  14986,
                  15163,
                  15455,
                  15269,
                  15195,
                  15882,
                  16223
                ],
                active_groups_chg: [
                  1852,
                  177,
                  292,
                  -186,
                  -74,
                  687,
                  341
                ],
                data_groups: [
                  87324,
                  87822,
                  88290,
                  88888,
                  89417,
                  89721,
                  90362
                ],
                data_groups_chg: [
                  581,
                  498,
                  468,
                  598,
                  529,
                  304,
                  641
                ],
                data_online_groups: [
                  11708,
                  11899,
                  11842,
                  11802,
                  11576,
                  11684,
                  12084
                ],
                data_online_groups_chg: [
                  547,
                  191,
                  -57,
                  -40,
                  -226,
                  108,
                  400
                ],
                setting_groups: [
                  85755,
                  86259,
                  86733,
                  87335,
                  87854,
                  88167,
                  88963
                ],
                setting_groups_chg: [
                  594,
                  504,
                  474,
                  602,
                  519,
                  313,
                  796
                ],
                setting_online_groups: [
                  10139,
                  10336,
                  10285,
                  10249,
                  10013,
                  10130,
                  10685
                ],
                setting_online_groups_chg: [
                  560,
                  197,
                  -51,
                  -36,
                  -236,
                  117,
                  555
                ],
                total_groups: [
                  482228,
                  488070,
                  491024,
                  495240,
                  498175,
                  501393,
                  505245
                ],
                total_groups_chg: [
                  4149,
                  5842,
                  2954,
                  4216,
                  2935,
                  3218,
                  3852
                ]
              },
              members: {
                data_members: [
                  12131098,
                  12170157,
                  12209797,
                  12297744,
                  12362917,
                  12414776,
                  12477685
                ],
                data_members_chg: [
                  28455,
                  39059,
                  39640,
                  87947,
                  65173,
                  51859,
                  62909
                ],
                data_online_members: [
                  1418244,
                  1438280,
                  1448752,
                  1468603,
                  1441296,
                  1457798,
                  1488182
                ],
                data_online_members_chg: [
                  49054,
                  20036,
                  10472,
                  19851,
                  -27307,
                  16502,
                  30384
                ],
                setting_members: [
                  12036739,
                  12076146,
                  12115680,
                  12203722,
                  12269103,
                  12321211,
                  12394653
                ],
                setting_members_chg: [
                  28048,
                  39407,
                  39534,
                  88042,
                  65381,
                  52108,
                  73442
                ],
                setting_online_members: [
                  1323885,
                  1344269,
                  1354635,
                  1374581,
                  1347482,
                  1364233,
                  1405150
                ],
                setting_online_members_chg: [
                  48647,
                  20384,
                  10366,
                  19946,
                  -27099,
                  16751,
                  40917
                ],
                total_members: [
                  71795999,
                  72417561,
                  72862717,
                  73313525,
                  73653524,
                  73982987,
                  74464629
                ],
                total_members_chg: [
                  459914,
                  621562,
                  445156,
                  450808,
                  339999,
                  329463,
                  481642
                ]
              },
              user: {
                manage_groups_users: [
                  29950,
                  30155,
                  30329,
                  30497,
                  30631,
                  30794,
                  30959
                ],
                manage_groups_users_chg: [
                  140,
                  205,
                  174,
                  168,
                  134,
                  163,
                  165
                ],
                manage_groups_users_online: [
                  3179,
                  3226,
                  3283,
                  3296,
                  3280,
                  3331,
                  3370
                ],
                manage_groups_users_online_chg: [
                  85,
                  47,
                  57,
                  13,
                  -16,
                  51,
                  39
                ],
                payed_orders: [
                  5470,
                  5572,
                  5659,
                  5727,
                  5800,
                  5889,
                  5992
                ],
                payed_orders_chg: [
                  72,
                  102,
                  87,
                  68,
                  73,
                  89,
                  103
                ],
                payed_users: [
                  3621,
                  3688,
                  3747,
                  3791,
                  3837,
                  3893,
                  3959
                ],
                payed_users_chg: [
                  49,
                  67,
                  59,
                  44,
                  46,
                  56,
                  66
                ],
                regist_users: [
                  119799,
                  120317,
                  120755,
                  121172,
                  121545,
                  121993,
                  122482
                ],
                regist_users_chg: [
                  426,
                  518,
                  438,
                  417,
                  373,
                  448,
                  489
                ],
                subscribe_owners: [
                  31741,
                  31976,
                  32184,
                  32372,
                  32529,
                  32724,
                  32915
                ],
                subscribe_owners_chg: [
                  178,
                  235,
                  208,
                  188,
                  157,
                  195,
                  191
                ],
                subscribe_users: [
                  37729,
                  37964,
                  38172,
                  38362,
                  38519,
                  38713,
                  38919
                ],
                subscribe_users_chg: [
                  179,
                  235,
                  208,
                  190,
                  157,
                  194,
                  206
                ],
                total_revenue: [
                  254864.15,
                  259194.15,
                  262560.15,
                  265513.15,
                  268287.15,
                  281636.15,
                  291919.15
                ],
                total_revenue_chg: [
                  3003,
                  4330,
                  3366.000000000029,
                  2953,
                  2774,
                  13349,
                  10283
                ]
              }
            },
            msg: "ok",
            sta: 0
          }
        }

      },
    officialrobot(data, succesfn) {
      if (window.location.host.indexOf('localhost') >= 0) {
        succesfn(getTestJson());
      } else {
        ajax.call(this, 'get', '/wyzs/statistics/official', data, succesfn);
      }

      function getTestJson() {
        return {
          data: {
            dates: [
              "04-06",
              "04-07",
              "04-08",
              "04-09",
              "04-10",
              "04-11",
              "04-12"
            ],
            group: {
              active_groups: [
                692,
                752,
                687,
                639,
                659,
                687,
                684
              ],
              subscribe_groups: [
                3033,
                3029,
                3027,
                3025,
                3024,
                2983,
                2985
              ],
              subscribe_owners: [
                1891,
                1889,
                1887,
                1885,
                1885,
                1870,
                1872
              ],
              total_groups: [
                7658,
                7658,
                7658,
                7658,
                7659,
                7634,
                7636
              ]
            },
            members: {
              manage_members: [
                185694,
                185804,
                185281,
                185006,
                185232,
                195735,
                195880
              ],
              total_members: [
                279705,
                279921,
                279303,
                278820,
                278797,
                278767,
                278652
              ]
            },
            robot: [
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "total-robot-id",
                nickname: "合计",
                subscribe_groups: [
                  3033,
                  3029,
                  3027,
                  3025,
                  3024,
                  2983,
                  2985
                ],
                subscribe_members: [
                  7879,
                  7877,
                  7877,
                  7875,
                  7874,
                  7874,
                  7875
                ],
                subscribe_owners: [
                  1891,
                  1889,
                  1887,
                  1885,
                  1885,
                  1870,
                  1872
                ],
                total_groups: [
                  2497,
                  2506,
                  2507,
                  2489,
                  2499,
                  2506,
                  2515
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "56613d26a3b81f1b15880696",
                nickname: "小右",
                subscribe_groups: [
                  1118,
                  1117,
                  1115,
                  1115,
                  1115,
                  1115,
                  1115
                ],
                subscribe_members: [
                  1564,
                  1563,
                  1561,
                  1561,
                  1560,
                  1560,
                  1560
                ],
                subscribe_owners: [
                  629,
                  628,
                  626,
                  626,
                  626,
                  626,
                  626
                ],
                total_groups: [
                  657,
                  658,
                  656,
                  656,
                  656,
                  656,
                  658
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "5773aac4a2d3ad56d7e28412",
                nickname: "小守",
                subscribe_groups: [
                  270,
                  270,
                  270,
                  270,
                  270,
                  270,
                  270
                ],
                subscribe_members: [
                  333,
                  333,
                  333,
                  333,
                  333,
                  333,
                  333
                ],
                subscribe_owners: [
                  140,
                  140,
                  140,
                  140,
                  140,
                  140,
                  140
                ],
                total_groups: [
                  244,
                  246,
                  247,
                  247,
                  248,
                  248,
                  250
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "57a033bbc4fc443154b900b5",
                nickname: "小凡",
                subscribe_groups: [
                  512,
                  512,
                  512,
                  512,
                  512,
                  512,
                  512
                ],
                subscribe_members: [
                  590,
                  590,
                  590,
                  590,
                  590,
                  590,
                  590
                ],
                subscribe_owners: [
                  311,
                  311,
                  311,
                  311,
                  311,
                  311,
                  311
                ],
                total_groups: [
                  423,
                  424,
                  427,
                  425,
                  427,
                  429,
                  430
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "57c0142c69da8b7183e29f2e",
                nickname: "小言",
                subscribe_groups: [
                  337,
                  337,
                  337,
                  337,
                  336,
                  335,
                  335
                ],
                subscribe_members: [
                  369,
                  369,
                  369,
                  369,
                  368,
                  367,
                  367
                ],
                subscribe_owners: [
                  221,
                  221,
                  221,
                  221,
                  221,
                  220,
                  220
                ],
                total_groups: [
                  239,
                  245,
                  247,
                  250,
                  252,
                  256,
                  257
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "57c83dba92b830c8eaa581e4",
                nickname: "小美",
                subscribe_groups: [
                  179,
                  177,
                  177,
                  177,
                  177,
                  177,
                  178
                ],
                subscribe_members: [
                  191,
                  189,
                  189,
                  189,
                  189,
                  189,
                  190
                ],
                subscribe_owners: [
                  126,
                  126,
                  126,
                  126,
                  126,
                  126,
                  127
                ],
                total_groups: [
                  194,
                  193,
                  193,
                  193,
                  194,
                  194,
                  194
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "57ee4cc4b6fe631226a070ac",
                nickname: "小颖",
                subscribe_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  188,
                  188
                ],
                subscribe_members: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  198,
                  198
                ],
                subscribe_owners: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  146,
                  146
                ],
                total_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  292,
                  292
                ]
              },
              {
                active_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                bubble_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                dead_groups: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                id: "580dfafeb6fe633eca97a889",
                nickname: "小勇",
                subscribe_groups: [
                  94,
                  94,
                  94,
                  93,
                  93,
                  93,
                  94
                ],
                subscribe_members: [
                  96,
                  96,
                  96,
                  95,
                  95,
                  95,
                  96
                ],
                subscribe_owners: [
                  76,
                  76,
                  76,
                  75,
                  75,
                  75,
                  76
                ],
                total_groups: [
                  92,
                  93,
                  93,
                  72,
                  75,
                  77,
                  79
                ]
              }
            ],
            user: {
              subscribe_members: [
                7879,
                7877,
                7877,
                7875,
                7874,
                7874,
                7875
              ],
              subscribe_owners: [
                1891,
                1889,
                1887,
                1885,
                1885,
                1870,
                1872
              ]
            }
          },
          msg: "ok",
          sta: 0
        };
      }
    },
    personalrobot(data, succesfn) {
      if (window.location.host.indexOf('localhost') >= 0) {
        succesfn(getTestJson());
      } else {
        ajax.call(this, 'get', '/wyzs/statistics/custom', data, succesfn);
      }

      function getTestJson() {
        return {
          data: {
            dates: [
              "04-07",
              "04-08",
              "04-09",
              "04-10",
              "04-11",
              "04-12"
            ],
            group: {
              manage_groups: [
                36255,
                37402,
                37809,
                35738,
                36756,
                37474
              ],
              total_groups: [
                30295,
                30485,
                30644,
                30839,
                31045,
                31226
              ]
            },
            members: {
              manage_members: [
                1168831,
                1189300,
                1162476,
                1179001,
                1209415,
                1278714
              ],
              total_members: [
                4563910,
                4708620,
                4755971,
                4743313,
                4865302,
                5013010
              ]
            },
            robot: {
              login_robots: [
                30295,
                30485,
                30644,
                30839,
                31045,
                31226
              ],
              offline_robots: [
                63367,
                63743,
                64113,
                64468,
                64865,
                65298
              ],
              online_robots: [
                2091,
                2097,
                2078,
                2125,
                2172,
                2165
              ],
              total_robots: [
                65458,
                65840,
                66191,
                66593,
                67037,
                67463
              ]
            },
            user: {
              login_users: [
                30295,
                30485,
                30644,
                30839,
                31045,
                31226
              ],
              online_users: [
                2091,
                2097,
                2078,
                2125,
                2172,
                2165
              ]
            }
          },
          msg: "ok",
          sta: 0
        };
      }
    },
    features(data, succesfn) {
      if (window.location.host.indexOf('localhost') >= 0) {
        succesfn(getTestJson());
      } else {
        ajax.call(this, 'get', '/wyzs/statistics/function', data, succesfn);
      }

      function getTestJson() {
        return {
          data: {
            autonews: {
              name: "智能资讯",
              rates: [
                32,
                32,
                33,
                36,
                34,
                34
              ],
              usage_nums: [
                3308,
                3319,
                3343,
                3652,
                3729,
                3822
              ]
            },
            checkin: {
              name: "群签到",
              rates: [
                14,
                14,
                15,
                15,
                14,
                14
              ],
              usage_nums: [
                1483,
                1503,
                1516,
                1591,
                1595,
                1568
              ]
            },
            complaint: {
              name: "投诉",
              rates: [
                98,
                98,
                98,
                95,
                93,
                94
              ],
              usage_nums: [
                10106,
                10065,
                9832,
                9686,
                10042,
                10369
              ]
            },
            dates: [
              "04-07",
              "04-08",
              "04-09",
              "04-10",
              "04-11",
              "04-12"
            ],
            groupfile: {
              name: "群文件",
              rates: [
                8,
                8,
                9,
                9,
                8,
                8
              ],
              usage_nums: [
                901,
                906,
                925,
                950,
                948,
                966
              ]
            },
            keywords: {
              name: "关键词回复",
              rates: [
                20,
                20,
                20,
                20,
                20,
                19
              ],
              usage_nums: [
                2074,
                2118,
                2091,
                2086,
                2140,
                2125
              ]
            },
            kickout: {
              name: "自动踢人",
              rates: [
                9,
                9,
                10,
                10,
                10,
                9
              ],
              usage_nums: [
                997,
                1005,
                1005,
                1076,
                1123,
                1066
              ]
            },
            link: {
              name: "链接提醒",
              rates: [
                12,
                12,
                12,
                13,
                13,
                12
              ],
              usage_nums: [
                1284,
                1282,
                1299,
                1319,
                1401,
                1395
              ]
            },
            morning: {
              name: "早报提醒",
              rates: [
                61,
                61,
                63,
                62,
                60,
                60
              ],
              usage_nums: [
                6284,
                6296,
                6314,
                6320,
                6469,
                6685
              ]
            },
            redbag: {
              name: "红包提醒",
              rates: [
                56,
                56,
                58,
                58,
                55,
                56
              ],
              usage_nums: [
                5844,
                5835,
                5832,
                5913,
                5961,
                6174
              ]
            },
            welcome: {
              name: "欢迎提醒",
              rates: [
                61,
                61,
                62,
                63,
                61,
                61
              ],
              usage_nums: [
                6344,
                6326,
                6305,
                6407,
                6518,
                6728
              ]
            }
          },
          msg: "ok",
          sta: 0
        };
      }
    },
    active(data, succesfn) {
      if (window.location.host.indexOf('localhost') >= 0) {
        succesfn(getTestJson());
      } else {
        ajax.call(this, 'get', '/wyzs/statistics/active', data, succesfn);
      }

      function getTestJson() {
        return {
          data: {
            dates: [
              "04-07",
              "04-08",
              "04-09",
              "04-10",
              "04-11",
              "04-12",
              "04-13"
            ],
            new_active_users: [
              187,
              171,
              162,
              170,
              179,
              159,
              175,
              0
            ],
            retention: [
              [
                0.5668,
                0.4973,
                0.4439,
                0.3797,
                0.3476,
                0.3262,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0.4327,
                0.3392,
                0.3216,
                0.2515,
                0.2339,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0.537,
                0.4259,
                0.3827,
                0.3395,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0.5118,
                0.4235,
                0.3412,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0.5587,
                0.4972,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0.5472,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            ],
            retention_dates: [
              "04-07",
              "04-08",
              "04-09",
              "04-10",
              "04-11",
              "04-12",
              "04-13",
              "04-14"
            ],
            user: {
              active_payed_users: [
                1663,
                1665,
                1696,
                1740,
                1786,
                1807,
                1806
              ],
              active_payed_users_chg: [
                33,
                2,
                31,
                44,
                46,
                21,
                -1
              ],
              active_users: [
                3534,
                3551,
                3663,
                3599,
                3752,
                3644,
                3653
              ],
              active_users_chg: [
                22,
                17,
                112,
                -64,
                153,
                -108,
                9
              ],
              logged_out: [
                11,
                20,
                17,
                10,
                22,
                24,
                12
              ],
              logged_out_new: [
                4,
                9,
                6,
                1,
                7,
                8,
                3
              ],
              long_time_1102: [
                55,
                66,
                76,
                43,
                54,
                60,
                57
              ],
              long_time_1102_new: [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              manually_offline: [
                26,
                16,
                15,
                18,
                23,
                19,
                15
              ],
              manually_offline_new: [
                10,
                8,
                7,
                6,
                11,
                7,
                4
              ],
              offline_new: [
                68,
                89,
                65,
                78,
                75,
                67,
                69
              ],
              offline_ratio: [
                0.073,
                0.0741,
                0.0718,
                0.0722,
                0.0677,
                0.0766,
                0.066
              ],
              offline_users: [
                258,
                263,
                263,
                260,
                254,
                279,
                241
              ],
              other_client_login: [
                166,
                161,
                155,
                189,
                155,
                176,
                157
              ],
              other_client_login_new: [
                54,
                72,
                52,
                71,
                57,
                52,
                62
              ],
              payed_ratio: [
                0.4706,
                0.4689,
                0.463,
                0.4835,
                0.476,
                0.4959,
                0.4944
              ]
            }
          },
          msg: "ok",
          sta: 0
        };
      }
    },
  },
	//用户模块
	user: {
		/**
		 * 登录
		 * @param {object} data 参数
		 * @param {string} data.username 登陆用户名
		 * @param {string} data.password 登陆密码
		 * @param {function} fn 成功回调
		 */
		login(data, fn, errFn) {
			ajax.call(this, 'post', '/Login/login', data, fn, true, errFn);
		},

		/**
		 * 获取用户列表
		 * @param  	{object}   	data 			参数
		 * @param 	{string} 	data.username 	用户名-搜索
		 * @param 	{string} 	data.email 		邮箱-搜索
		 * @param  	{Function} 	fn   			成功回的回调
		 */
		selectUser(data, fn) {
			ajax.call(this, 'get', '/User/selectUser', data, fn);
		},

		/**
		 * 添加修改用户公用接口
		 * @param {object}   data 参数
		 * @param {string} data.id 用户ID-修改时必须
		 * @param {string} data.username 用户名
		 * @param {string} data.email 邮箱
		 * @param {string} data.sex 性别
		 * @param {string} data.birthday 生日
		 * @param {string} data.address 住址
		 * @param {string} data.status 状态
		 * @param {function} fn   成功回调
		 */
		saveUser(data, fn) {
			ajax.call(this, 'post', '/User/saveUser', data, fn);
		},

		/**
		 * 删除用户
		 * @param  {object}   data 参数
		 * @param {string} data.id 需要删除的用户ID，批量删除时，值为以逗号分开的ID字符串
		 * @param  {Function} fn   成功回调
		 */
		deleteUser(data, fn) {
			ajax.call(this, 'post', '/User/deleteUser', data, fn);
		},

		/**
		 * 获取用户信息
		 * @param  {string}   id 用户ID
		 * @param  {Function} fn 成功回调
		 */
		findUser(id, fn) {
			ajax.call(this, 'get', '/User/findUser', {
				id: id
			}, fn);
		},


		/**
		 * 修改密码
		 * @param  {object}   data 参数
		 * @param {string} data.old_password 旧密码
		 * @param {string} data.password 新密码
		 * @param {string} data.password_confirm 确认密码
		 * @param  {Function} fn   成功回调
		 */
		updPass(data, fn) {
			ajax.call(this, 'post', '/User/updatePass', data, fn);
		},

		/**
		 * 设置权限
		 * @param  {object}   data 参数
		 * @param {string} data.id 数据ID
		 * @param {string} data.login_style 登录方式，1：单点登录；2：多点登录
		 * @param {string} data.disabled_update_pass 不允许修改密码的用户ID，以逗号隔开
		 * @param  {Function} fn   成功回调
		 */
		accessUser(data, fn) {
			ajax.call(this, 'post', '/User/accessUser', data, fn);
		}
	},

	/**
	 * 文章管理
	 * @type {Object}
	 */
	article: {
		/**
		 * 查看用户列表
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		selectArticle(data, fn) {
      ajax.call(this, 'get', '/Article/selectArticle', data, fn);
		},

		/**
		 * 添加修改公用接口
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveArticle(data, fn) {
			ajax.call(this, 'post', '/Article/saveArticle', data, fn);
		},

		/**
		 * 删除文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		deleteArticle(data, fn) {
			ajax.call(this, 'post', '/Article/deleteArticle', data, fn);
		},

		/**
		 * 获取文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		findArticle(data, fn) {
			ajax.call(this, 'get', '/Article/findArticle', data, fn);
		},
	},


	/**
	 * 订单管理
	 * @type {Object}
	 */
	order: {
		/**
		 * 统计订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		statisOrder(data, fn) {
			ajax.call(this, 'get', '/Order/statisOrder', data, fn);
		},

		/**
		 * 获取订单列表
		 * @param  {object}   data 获取订单列表
		 * @param  {Function} fn   成功回调
		 */
		selectOrder(data, fn) {
			ajax.call(this, 'get', '/Order/selectOrder', data, fn);
		},

		/**
		 * 添加订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveOrder(data, fn) {
			ajax.call(this, 'post', '/Order/saveOrder', data, fn);
		},
	},

	/**
	 * 系统设置
	 * @type {Object}
	 */
	system: {
		/**
		 * 获取系统设置信息
		 * @param  {Function} fn 成功回调
		 */
		getSetting(fn) {
			ajax.call(this, 'get', '/System/getSetting', {}, fn);
		},

		/**
		 * 修改系统设置信息
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		updateSetting(data, fn) {
			ajax.call(this, 'post', '/System/updateSetting', data, fn);
		}
	}
};
