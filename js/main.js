// 每日流量统计
var flux = {
    // backgroundColor:'#f4ede3',
    title: {
        text: '每日流量统计研究',
        // show:false,
        textStyle: {
           
        },
        x:'center',
        padding: [12 , 0 , 0 , 0],
        shadowColor: 'rgba(0, 0, 0, 0.5)',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data:['维族','非维族'],
        bottom: "9%",
        // y:'bottom',
        // left:0,
        // orient:'vertical',
        selectedMode:'multiple',
    },
    xAxis: {
        type: 'category',
        data: ["2018/1","2018/2","2018/3","2018/4","2018/5","2018/6","2018/7","2018/8",
        "2018/9","2018/10","2018/11","2018/12","2019/1","2019/2"],
        axisLabel: {
            rotate: 90,
        },
    },
    grid: {
        y2:120,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
            }
    },
    series: [
        {
        name:'维族',
        data: [820, 932, 0, 934, 333, 1330, 1400,820, 932, 901, 934, 333, 1330, 1400],
        type: 'line',
        itemStyle: {
            // normal: {
                color: "#5b9bd5",
            // }
        }
    },{
        name:'非维族',
        data: [1290, 1330, 1320, 934, 666, 934, 900,1290, 1330, 1320, 934, 666, 934, 900],
        type: 'line',
        itemStyle: {
            normal: {
                color: "#ed7d31",
            }
        }
    },
    ],
    dataZoom:[
        {
            realtime: true,
            // start: 30,
            // end: 70,
        },{
            type: 'inside',
        }
    ],
};

// 每月申请人数统计
var month_p = {
        title: {
            text: '每月申请人数统计',
            x:'center',
            top:"12px",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data:['民族 其他','民族 维族'],
            top: "380px",
        },
        xAxis: {
            data: ["2018/1","2018/2","2018/3","2018/4","2018/5","2018/6","2018/7","2018/8",
            "2018/9","2018/10","2018/11","2018/12","2019/1","2019/2"],
            type:'category',
            name:'bbc',
            nameLocation: 'end',
            // boundaryGap:true,
            axisLabel: {
                rotate: 50,
                margin: 22,
                align:'center', 
            },
            
            offset:10,
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLine: {show:false},
            axisTick: {show: false},
        },
        grid: {
            y2:120,
        },
        series: [
            {
            name: '民族 其他',
            type: 'bar',
            data: [36, 10, 10, 20,10, 20,20,5, 20, 36, 10, 10, 20,10],
            itemStyle:{
                normal:{
                    color:'#5b9bd5'
                 }
            },
        },
        {
            name: '民族 维族',
            type: 'bar',
            data: [36, 10, 10, 20,10, 20,20,5, 20, 36, 10, 10, 20,10],
            itemStyle:{
                normal:{
                    color:'#ed7d31'
                }
            },
        },
    ],    
};

// 每月申请人生活区域统计
var month_a = {
         title: {
             text: '每月申请人生活区域统计',
             x:'center',
             top:"12px",
         },
         tooltip: {
            trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
         },
         legend: {
             data:['生活省份 新疆','生活省份 其他'],
             top: "380px",
         },
         xAxis: {
             data: ["2018/1","2018/2","2018/3","2018/4","2018/5","2018/6","2018/7","2018/8",
             "2018/9","2018/10","2018/11","2018/12","2019/1","2019/2"],
             type:'category',
             axisLabel: {
                 rotate: 50,
             },
             offset:10,
         },
         yAxis: {
             splitLine: {
                 show: false
                 },
             axisLine: {show:false},
             axisTick: {show: false},
         },
         grid: {
             y2:120,
         },
         series: [
             {
             name: '生活省份 新疆',
             type: 'bar',
             data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,10, 20],
             itemStyle:{
                 normal:{
                     color:'#5b9bd5'
                 }
             },
         },
         {
             name: '生活省份 其他',
             type: 'bar',
             data: [36, 10, 10, 20,10, 20,20,5, 20, 36, 10, 10, 20,10],
             itemStyle:{
                 normal:{
                     color:'#ed7d31'
                 }
             },
         },
     ],
 };

//维族申请人申请人生活区域分布(2月)
 var pie_w = {
     title : {
         text: '维族申请人申请人生活区域分布(2月)',
         x:'center',
         top:"12px",
     },
     tooltip : {
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
     },
     legend: {
         top: "380px",
         data: ['新疆','北京','广东','江苏','上海','湖北','其他']
     },
     series : [
         {
             name: '维族申请人申请人生活区域分布',
             type: 'pie',
             radius : '55%',
             center: ['50%', '55%'],
             data:[
                {value:8905, name:'新疆',itemStyle:{color:'#5b9bd4'}},
                {value:3130, name:'北京',itemStyle:{color:'#eb7423'}},
                {value:2544, name:'广东',itemStyle:{color:'#a0a0a0'}},
                {value:1335, name:'江苏',itemStyle:{color:'#ffbb00'}},
                {value:5000, name:'上海',itemStyle:{color:'#3466bf'}},
                {value:1235, name:'湖北',itemStyle:{color:'#67a83d'}},
                {value:1548, name:'其他',itemStyle:{color:'#245d90'}}
            ],
             itemStyle: {
                 emphasis: {
                     shadowBlur: 10,
                     shadowOffsetX: 0,
                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                 }
             }
         }
     ]
 };

// 非维族申请人申请人生活区域分布(2月)
 var pie = {
     title : {
         text: '非维族申请人申请人生活区域分布(2月)',
         x:'center',
         top:"12px",
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
     },
     legend: {
         top: "380px",
         data: ['新疆','北京','广东','江苏','上海','湖北','其他']
     },
     series : [
         {
             name: '非维族申请人申请人生活区域分布',
             type: 'pie',
             radius : '55%',
             center: ['50%', '55%'],
             data:[
                 {value:89905, name:'新疆',itemStyle:{color:'#5b9bd4'}},
                 {value:3322, name:'北京',itemStyle:{color:'#eb7423'}},
                 {value:24434, name:'广东',itemStyle:{color:'#a0a0a0'}},
                 {value:13525, name:'江苏',itemStyle:{color:'#ffbb00'}},
                 {value:5000, name:'上海',itemStyle:{color:'#3466bf'}},
                 {value:14535, name:'湖北',itemStyle:{color:'#67a83d'}},
                 {value:1553, name:'其他',itemStyle:{color:'#245d90'}}
             ],
             itemStyle: {
                 emphasis: {
                     shadowBlur: 10,
                     shadowOffsetX: 0,
                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                 }
             }
         }
     ]
 };

//  90天平均申请次数对比(2月)
var time = {
         title: {
             text: '90天平均申请次数对比(2月)',
             x:'center',
             top:"12",
         },
         tooltip: {
            trigger: 'axis'
         },
         grid: {
            y2:80,
        },
         legend: {
             data:['申请人数','平均申请次数'],
             top: "380",
         },
         xAxis: {
             data: ["新疆非维族","新疆维族","其他地区非维族","其他地区维族"],
             offset:10,
             axisTick: {show: false},
         },
         yAxis: [
             {
                type:'value',
                name:'',
                axisLine: {show:false},
                axisTick: {show: false},
                splitLine: {
                    show: false
                    }
         },{
            type:'value',
            name:'',
            axisLine: {show:false},
            axisTick: {show: false},
            splitLine: {
                show: false
                }
         },
        ],
         series: [
             {
             name: '申请人数',
             type: 'bar',
             data: [84000, 70000, 22000, 5555],
             itemStyle:{
                color:'#5b9bd5'
            },
            barWidth:"60",
         },
         {
             name: '平均申请次数',
             type: 'line',
             yAxisIndex:1,
             data: [7, 4, 8.1,5],
             itemStyle: {
                normal: {
                    color: "#ed7d31",
                }
            }
         }
     ],
 };

// 90天平均申请次数对比(近12个月)
var time_year = {
    title: {
        text: '90天平均申请次数对比(近12个月)',
        x:'center',
        top:"12",
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新疆非维族','新疆维族','其他地区非维族','其他地区维族'],
        top: "380",
    },
    xAxis: {
        type: 'category',
        data: ["2018/1","2018/2","2018/3","2018/4","2018/5","2018/6","2018/7","2018/8",
        "2018/9","2018/10","2018/11","2018/12","2019/1","2019/2"],
        axisLabel: {
            rotate: 50,
        },
        offset:10,
    },
    grid: {
        y2:"120",
    },
    yAxis: {
        type: 'value',
        axisLine: {show:false},
        axisTick: {show: false},
        splitLine: {
            show: false
            }
    },
    series: [
        {
        name:'新疆非维族',
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        type: 'line',
        itemStyle: {
            normal: {
                color: "#5b9bd5",
            }
        }
    },{
        name:'新疆维族',
        data: [2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        type: 'line',
        itemStyle: {
            normal: {
                color: "#ed7d31",
            }
        }
    },{
        name:'其他地区非维族',
        data: [3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        type: 'line',
        itemStyle: {
            normal: {
                color: "#919191",
            }
        }
    },{
        name:'其他地区维族',
        data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        type: 'line',
        itemStyle: {
            normal: {
                color: "#ffb200",
            }
        }
    }
    ]
};

// 90天内申请次数分布(维族)
var percentage_w = {
    title: {
        text: '90天内申请次数分布(维族)',
        x:'center',
        top:"12px",
    },
    tooltip: {
        formatter:
            function(param){
            return param.seriesName +"<br>"
            + param.marker + param.name+"："+ param.value + "%";
        }
    },
    legend: {
        data:['0次','1-5次','6-10次','11-20次','20次以上'],
        top: "380px",
    },
    grid: {
        y2:120,
    },
    xAxis : [
        {
            type : 'category',
            data : ["2018/1","2018/2","2018/3","2018/4","2018/5","2018/6","2018/7","2018/8",
            "2018/9","2018/10","2018/11","2018/12","2019/1","2019/2"],
            axisLabel: {
                rotate: 50,
            },
            offset:10,
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            },
            axisLine: {show:false},
            axisTick: {show: false},
            axisLabel: {
                formatter: '{value} %' 
            }
        }
    ],
    series : [
        {
            name:'0次',
            type:'bar',
            stack: '次数',
            data:[50, 50, 50, 50, 50, 50, 50,50, 50, 50, 50, 50, 50, 50],
            itemStyle:{color:'#5b9bd5'},
            barWidth:"20",
        },
        {
            name:'1-5次',
            type:'bar',
            stack: '次数',
            data:[20, 20, 20, 20, 20, 20, 20,20, 20, 20, 20, 20, 20, 20],
            itemStyle:{color:'#ed7f34'}
        },
        {
            name:'6-10次',
            type:'bar',
            stack: '次数',
            data:[20, 20, 20, 20, 20, 20, 20,20, 20, 20, 20, 20, 20, 20],
            itemStyle:{color:'#a5a5a5'}
        },
        {
            name:'11-20次',
            type:'bar',
            stack: '次数',
            data:[5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5],
            itemStyle:{color:'#ffc105'}
        },
        {
            name:'20次以上',
            type:'bar',
            stack: '次数',
            data:[5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5],
            itemStyle:{color:'#4472c4'}
        },
    ]
};

// 90天内申请次数分布(非维族)
var percentage = {
    title: {
        text: '90天内申请次数分布(非维族)',
        x:'center',
        top:"12px",
    },
    tooltip: {
        formatter:
            function(param){
                return param.seriesName +"<br>"
                + param.marker + param.name+"："+ param.value + "%";
        }
    },
    legend: {
        data:['0次','1-5次','6-10次','11-20次','20次以上'],
        top: "380px",
    },
    grid: {
        y2:120,
    },
    xAxis : [
        {
            type : 'category',
            data : ["2018/1","2018/2","2018/3","2018/4","2018/5","2018/6","2018/7","2018/8",
            "2018/9","2018/10","2018/11","2018/12","2019/1","2019/2"],
            axisLabel: {
                rotate: 50,
            },
            offset:10,
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            },
            axisLine: {show:false},
            axisTick: {show: false},
            axisLabel: {
                formatter: '{value} %' 
            }
        }
    ],
    series : [
        {
            name:'0次',
            type:'bar',
            stack: '次数',
            data:[50, 50, 50, 50, 50, 50, 50,50, 50, 50, 50, 50, 50, 50],
            itemStyle:{color:'#5b9bd5'},
            barWidth:"20",
        },
        {
            name:'1-5次',
            type:'bar',
            stack: '次数',
            data:[20, 20, 20, 20, 20, 20, 20,20, 20, 20, 20, 20, 20, 20],
            itemStyle:{color:'#ed7f34'}
        },
        {
            name:'6-10次',
            type:'bar',
            stack: '次数',
            data:[20, 20, 20, 20, 20, 20, 20,20, 20, 20, 20, 20, 20, 20],
            itemStyle:{color:'#a5a5a5'}
        },
        {
            name:'11-20次',
            type:'bar',
            stack: '次数',
            data:[5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5],
            itemStyle:{color:'#ffc105'}
        },
        {
            name:'20次以上',
            type:'bar',
            stack: '次数',
            data:[5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5],
            itemStyle:{color:'#4472c4'}
        },
    ]
};

// 申请人年龄分布(维族)
var age_w = {
         title: {
             text: '申请人年龄分布(维族)',
             x:'center',
             top:"12",
         },
         tooltip: {
            trigger: 'axis'
         },
         grid: {
            y2:80,
        },
         legend: {
             data:['申请人数','平均申请次数'],
             top: "380",
         },
         xAxis: {
             data: ["<=20岁","21-30岁","31-40岁","40岁以上"],
             offset:10,
             axisTick: {show: false},
         },
         yAxis: [
             {
                type:'value',
                name:'',
                axisLine: {show:false},
                axisTick: {show: false},
                splitLine: {
                    show: false
                    }
         },{
            type:'value',
            name:'',
            axisLine: {show:false},
            axisTick: {show: false},
            splitLine: {
                show: false
                }
         },
        ],
         series: [
             {
             name: '申请人数',
             type: 'bar',
             data: [10000, 51000, 24000, 8888],
             itemStyle:{
                color:'#5b9bd5'
            },
            barWidth:"60",
         },
         {
             name: '平均申请次数',
             type: 'line',
             yAxisIndex:1,
             data: [1, 2.5, 2.6, 1.3],
             itemStyle: {
                normal: {
                    color: "#ed7d31",
                }
            }
         }
     ],
 };

// 申请人年龄分布(非维族)
var age = {
         title: {
             text: '申请人年龄分布(非维族)',
             x:'center',
             top:"12",
         },
         tooltip: {
            trigger: 'axis'
         },
         grid: {
            y2:80,
        },
         legend: {
             data:['申请人数','平均申请次数'],
             top: "380",
         },
         xAxis: {
             data: ["<=20岁","21-30岁","31-40岁","40岁以上"],
             offset:10,
             axisTick: {show: false},
         },
         yAxis: [
             {
                type:'value',
                name:'',
                axisLine: {show:false},
                axisTick: {show: false},
                splitLine: {
                    show: false
                    }
         },{
            type:'value',
            name:'',
            axisLine: {show:false},
            axisTick: {show: false},
            splitLine: {
                show: false
                }
         },
        ],
         series: [
             {
             name: '申请人数',
             type: 'bar',
             data: [10000, 51000, 24000, 8888],
             itemStyle:{
                color:'#5b9bd5'
            },
            barWidth:"60",
         },
         {
             name: '平均申请次数',
             type: 'line',
             yAxisIndex:1,
             data: [1, 4, 4.1, 2.3],
             itemStyle: {
                normal: {
                    color: "#ed7d31",
                }
            }
         }
     ],
 };

// 申请人性别分析(维族)
 var sex_w = {
          title: {
              text: '申请人性别分析(维族)',
              x:'center',
              top:"12",
          },
          tooltip: {
            trigger: 'axis'
         },
          legend: {
              data:['申请人数','平均申请次数'],
              top: "380",
          },
          grid: {
             y2:80,
         },
          xAxis: {
              data: ["女","男"],
              offset:10,
          },
          yAxis: [
             {
             type:'value',
             name:'',
             axisLine: {show:false},
             axisTick: {show: false},
             splitLine: {
                 show: false
                 }
             },{
             type:'value',
             name:'',
             axisLine: {show:false},
             axisTick: {show: false},
             splitLine: {
                 show: false
                 }
             },
         ],
          series: [
              {
              name: '申请人数',
              type: 'bar',
              data: [100000, 550000],
              itemStyle:{
                 color:'#5b9bd5',
             },
             barWidth:"100",
          },
          {
              name: '平均申请次数',
              type: 'line',
              yAxisIndex:1,
              data: [1, 2.6],
              itemStyle: {
                 color: "#ed7d31",
             }
          }
      ],
  };

// 申请人性别分析(非维族)
var sex = {
         title: {
             text: '申请人性别分析(非维族)',
             x:'center',
             top:"12",
         },
         tooltip: {
            trigger: 'axis'
         },
         legend: {
             data:['申请人数','平均申请次数'],
             top: "380",
         },
         grid: {
            y2:80,
        },
         xAxis: {
             data: ["女","男"],
             offset:10,
         },
         yAxis: [
            {
            type:'value',
            name:'',
            axisLine: {show:false},
            axisTick: {show: false},
            splitLine: {
                show: false
                }
            },{
            type:'value',
            name:'',
            axisLine: {show:false},
            axisTick: {show: false},
            splitLine: {
                show: false
                }
            },
        ],
         series: [
             {
             name: '申请人数',
             type: 'bar',
             data: [100000, 550000],
             itemStyle:{
                color:'#5b9bd5',
            },
            barWidth:"100",
         },
         {
             name: '平均申请次数',
             type: 'line',
             yAxisIndex:1,
             data: [1, 4.2],
             itemStyle: {
                color: "#ed7d31",
            }
         }
     ],
 };
 

 window.addEventListener("resize", () => { 
    this.myChart.resize();  
    this.myChart2.resize();  
    this.myChart3.resize();
    this.myChart4.resize();
    this.myChart5.resize();
    this.myChart6.resize();
    this.myChart7.resize();
    this.myChart8.resize();
    this.myChart9.resize();
    this.myChart10.resize();
    this.myChart11.resize();
    this.myChart12.resize();
    this.myChart13.resize();
});

// $(window).resize(function() {
//     alert($(window).height());
//   });