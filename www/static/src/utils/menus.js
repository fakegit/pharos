const menus = [
  {
    name:'项目管理',
    icon:'credit-card',
    url:'/site'
  },
  {
    name:'性能分析',
    icon:'line-chart',
    children:[
      {
        name:'概览',
        url:'/perf/overview',
      },
      {
        name:'数据分析',
        children:[
          {
            name:'按时段',
            url:'/perf/specific/hour',
          },
          {
            name:'按日期',
            url:'/perf/specific/day'
          },
          {
            name:'按耗时区间',
            url:'/perf/specific/interval'
          }
        ]
      }
    ]
  },
  {
    name:'基础设置',
    icon:'user',
    children:[
      {
        name:'用户管理',
        url:'/setting/user'
      }
    ]
  },
];

export default menus;
