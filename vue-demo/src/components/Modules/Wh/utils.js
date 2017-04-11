import highcharts from 'highcharts';

export const updateChart = function (idString, categoriesData, countsData) {
   var cartsOptions = {
     chart: {
       type: 'line',
       spacingTop: 30,
     },
     title: null,
     subtitle: null,
     colors: ['#12b7f5', '#fcd240', '#fea356', '#00d424', '#f25d5d', '#5262fe', '#ff69e8'],
     xAxis: {
       gridLineColor: '#efefef',
       lineColor: '#d9d9d9',
       tickColor: '#d9d9d9',
       tickmarkPlacement: 'on',
       title: {
         enabled: false
       },
       labels: {
         style: {
           color: '#888888',
           fontWeight: 'normal',
           fontSize: 10,
         }
       }
     },
     credits: false,
     yAxis: {
       title: null,
       gridLineColor: '#efefef',
       labels: {
         formatter: function () {
           return this.value;
         },
         style: {
           color: '#888888',
           fontWeight: 'normal',
           fontSize: 10,
         }
       }
     },
     /*exporting: {enable: false},*/
     tooltip: {
       enabled: true,
     },
     plotOptions: {
       area: {
         stacking: 'normal',
         lineColor: '#888888',
         lineWidth: 1,
         marker: {
           lineWidth: 1,
           lineColor: '#666666'
         }
       }
     },
   };
   $(idString).highcharts(highcharts.merge(cartsOptions, {
     xAxis: {
       categories: categoriesData
     },
     series: countsData
   }));
};
