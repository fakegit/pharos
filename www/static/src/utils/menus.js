const menus = [
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
          },
          {
            name:'按操作系统',
            url:'/perf/specific/os'
          },
          {
            name:'按浏览器',
            url:'/perf/specific/browser'
          },
          {
            name:'按地区',
            url:'/perf/specific/region'
          },
        ]
      }
    ]
  },
  {
    name:'项目管理',
    icon:'credit-card',
    children:[
      {
        name:'项目列表',
        url:'/site/list'
      },
      {
        name:'性能指标',
        url:'/site/field'
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
