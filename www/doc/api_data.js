define({ "api": [  {    "type": "GET",    "url": "/disp",    "title": "添加监控数据",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "screen",            "description": "<p>屏幕分辨率</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "info",            "description": "<p>接口数据</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          }        ]      }    },    "filename": "src/logic/api/disp.js",    "groupTitle": "Performance",    "name": "GetDisp",    "sampleRequest": [      {        "url": "/api/disp"      }    ]  },  {    "type": "GET",    "url": "/metric/browser_time",    "title": "获取某指标不同浏览器下的耗时分布",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "\"loadPage\"",              "\"domReady\"",              "\"redirect\"",              "\"lookupDomain\"",              "\"ttfb\"",              "\"request\"",              "\"loadEvent\"",              "\"appcache\"",              "\"unloadEvent\"",              "\"connect\""            ],            "optional": false,            "field": "perf",            "description": "<p>性能名称</p>"          }        ]      }    },    "filename": "src/logic/api/metric/browser_time.js",    "groupTitle": "Performance",    "name": "GetMetricBrowser_time",    "sampleRequest": [      {        "url": "/api/metric/browser_time"      }    ]  },  {    "type": "GET",    "url": "/metric/consume_time",    "title": "获取某段时间所有指标的平均值",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          }        ]      }    },    "filename": "src/logic/api/metric/consume_time.js",    "groupTitle": "Performance",    "name": "GetMetricConsume_time",    "sampleRequest": [      {        "url": "/api/metric/consume_time"      }    ]  },  {    "type": "GET",    "url": "/metric/consume_time?type=day",    "title": "性能耗时按照日期分布",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          }        ]      }    },    "filename": "src/logic/api/metric/consume_time.js",    "groupTitle": "Performance",    "name": "GetMetricConsume_timeTypeDay",    "sampleRequest": [      {        "url": "/api/metric/consume_time?type=day"      }    ]  },  {    "type": "GET",    "url": "/metric/consume_time?type=hour",    "title": "性能耗时按照小时分布",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          }        ]      }    },    "filename": "src/logic/api/metric/consume_time.js",    "groupTitle": "Performance",    "name": "GetMetricConsume_timeTypeHour",    "sampleRequest": [      {        "url": "/api/metric/consume_time?type=hour"      }    ]  },  {    "type": "GET",    "url": "/metric/consume_time?type=interval",    "title": "性能耗时按照耗时区间分布",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          }        ]      }    },    "filename": "src/logic/api/metric/consume_time.js",    "groupTitle": "Performance",    "name": "GetMetricConsume_timeTypeInterval",    "sampleRequest": [      {        "url": "/api/metric/consume_time?type=interval"      }    ]  },  {    "type": "GET",    "url": "/metric/os_time",    "title": "获取某指标不同操作系统下的耗时分布",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "\"loadPage\"",              "\"domReady\"",              "\"redirect\"",              "\"lookupDomain\"",              "\"ttfb\"",              "\"request\"",              "\"loadEvent\"",              "\"appcache\"",              "\"unloadEvent\"",              "\"connect\""            ],            "optional": false,            "field": "perf",            "description": "<p>性能名称</p>"          }        ]      }    },    "filename": "src/logic/api/metric/os_time.js",    "groupTitle": "Performance",    "name": "GetMetricOs_time",    "sampleRequest": [      {        "url": "/api/metric/os_time"      }    ]  },  {    "type": "GET",    "url": "/metric/region_time",    "title": "获取某指标不同地域下的耗时分布",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_page_id",            "description": "<p>网页ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          },          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "\"loadPage\"",              "\"domReady\"",              "\"redirect\"",              "\"lookupDomain\"",              "\"ttfb\"",              "\"request\"",              "\"loadEvent\"",              "\"appcache\"",              "\"unloadEvent\"",              "\"connect\""            ],            "optional": false,            "field": "perf",            "description": "<p>性能名称</p>"          }        ]      }    },    "filename": "src/logic/api/metric/region_time.js",    "groupTitle": "Performance",    "name": "GetMetricRegion_time",    "sampleRequest": [      {        "url": "/api/metric/region_time"      }    ]  },  {    "type": "DELETE",    "url": "/site/:id",    "title": "删除网站",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/index.js",    "groupTitle": "Site",    "name": "DeleteSiteId",    "sampleRequest": [      {        "url": "/api/site/:id"      }    ]  },  {    "type": "DELETE",    "url": "/site/:id/perf/:id",    "title": "为网站删除性能指标字段",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/perf.js",    "groupTitle": "Site",    "name": "DeleteSiteIdPerfId",    "sampleRequest": [      {        "url": "/api/site/:id/perf/:id"      }    ]  },  {    "type": "DELETE",    "url": "/site/:id/user/:user_id",    "title": "为网站删除成员",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "DeleteSiteIdUserUser_id",    "sampleRequest": [      {        "url": "/api/site/:id/user/:user_id"      }    ]  },  {    "type": "GET",    "url": "/site",    "title": "获取网站列表",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/site/index.js",    "groupTitle": "Site",    "name": "GetSite",    "sampleRequest": [      {        "url": "/api/site"      }    ]  },  {    "type": "GET",    "url": "/site/:id",    "title": "获取网站信息",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/index.js",    "groupTitle": "Site",    "name": "GetSiteId",    "sampleRequest": [      {        "url": "/api/site/:id"      }    ]  },  {    "type": "GET",    "url": "/site/:id/perf",    "title": "获取网站性能指标列表",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/perf.js",    "groupTitle": "Site",    "name": "GetSiteIdPerf",    "sampleRequest": [      {        "url": "/api/site/:id/perf"      }    ]  },  {    "type": "GET",    "url": "/site/:id/user",    "title": "获取网站成员",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "GetSiteIdUser",    "sampleRequest": [      {        "url": "/api/site/:id/user"      }    ]  },  {    "type": "POST",    "url": "/site",    "title": "添加网站",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>网站地址</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>网站名称</p>"          }        ]      }    },    "filename": "src/logic/api/site/index.js",    "groupTitle": "Site",    "name": "PostSite",    "sampleRequest": [      {        "url": "/api/site"      }    ]  },  {    "type": "POST",    "url": "/site/:id/perf",    "title": "为网站添加性能指标字段",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>性能指标名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>性能指标描述</p>"          }        ]      }    },    "filename": "src/logic/api/site/perf.js",    "groupTitle": "Site",    "name": "PostSiteIdPerf",    "sampleRequest": [      {        "url": "/api/site/:id/perf"      }    ]  },  {    "type": "POST",    "url": "/site/:id/user/:user_id",    "title": "为网站添加成员",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "PostSiteIdUserUser_id",    "sampleRequest": [      {        "url": "/api/site/:id/user/:user_id"      }    ]  },  {    "type": "PUT",    "url": "/site/:id",    "title": "修改网站信息",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>网站名称</p>"          }        ]      }    },    "filename": "src/logic/api/site/index.js",    "groupTitle": "Site",    "name": "PutSiteId",    "sampleRequest": [      {        "url": "/api/site/:id"      }    ]  },  {    "type": "PUT",    "url": "/site/:id/perf/:id",    "title": "修改性能指标字段",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>性能指标名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>性能指标描述</p>"          }        ]      }    },    "filename": "src/logic/api/site/perf.js",    "groupTitle": "Site",    "name": "PutSiteIdPerfId",    "sampleRequest": [      {        "url": "/api/site/:id/perf/:id"      }    ]  },  {    "type": "PUT",    "url": "/site/:id/user/:user_id",    "title": "修改网站成员角色",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "status",            "description": "<p>角色代号</p>"          }        ]      }    },    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "PutSiteIdUserUser_id",    "sampleRequest": [      {        "url": "/api/site/:id/user/:user_id"      }    ]  },  {    "type": "GET",    "url": "/system",    "title": "查看系统信息",    "group": "System",    "version": "0.0.1",    "filename": "src/logic/api/system.js",    "groupTitle": "System",    "name": "GetSystem",    "sampleRequest": [      {        "url": "/api/system"      }    ]  },  {    "type": "PUT",    "url": "/system",    "title": "更新系统",    "group": "System",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "allowedValues": [              "1",              "2",              "3"            ],            "optional": false,            "field": "step",            "description": "<p>更新步骤</p>"          }        ]      }    },    "filename": "src/logic/api/system.js",    "groupTitle": "System",    "name": "PutSystem",    "sampleRequest": [      {        "url": "/api/system"      }    ]  },  {    "type": "DELETE",    "url": "/token",    "title": "用户登出",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "DeleteToken",    "sampleRequest": [      {        "url": "/api/token"      }    ]  },  {    "type": "DELETE",    "url": "/user/:id",    "title": "用户删除",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "DeleteUserId",    "sampleRequest": [      {        "url": "/api/user/:id"      }    ]  },  {    "type": "GET",    "url": "/user",    "title": "获取用户列表",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "keyword",            "description": "<p>搜索关键词</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "GetUser",    "sampleRequest": [      {        "url": "/api/user"      }    ]  },  {    "type": "POST",    "url": "/token",    "title": "用户登录",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "credential",            "description": "<p>用户名或者密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "PostToken",    "sampleRequest": [      {        "url": "/api/token"      }    ]  },  {    "type": "POST",    "url": "/user",    "title": "用户注册",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户 ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>用户邮箱</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "PostUser",    "sampleRequest": [      {        "url": "/api/user"      }    ]  },  {    "type": "PUT",    "url": "/user/:id",    "title": "更新用户信息",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>用户状态</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "PutUserId",    "sampleRequest": [      {        "url": "/api/user/:id"      }    ]  }] });
