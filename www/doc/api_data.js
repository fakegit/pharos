define({ "api": [  {    "type": "DELETE",    "url": "/metric/:site_id",    "title": "删除监控项信息",    "group": "Metric",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>监控项的id</p>"          }        ]      }    },    "filename": "src/logic/api/metric.js",    "groupTitle": "Metric",    "name": "DeleteMetricSite_id"  },  {    "type": "GET",    "url": "/metric/dashboard",    "title": "获取Dashboard的监控数据",    "group": "Metric",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "metric_ids",            "description": "<p>监控项ID，以逗号隔开</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "metric",            "description": "<p>{k1,k2,k3,k4,k5}  类型</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<p>{mins, day}  时间类型</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "成功返回",          "content": "{\n  errno: 0,\n  data: [{\n      category: [\"05-24 00:00\", \"05-24 00:05\",],\n      series: [\n        {\n          name: 'Chrome',\n          data: [50, 20]\n        }\n      ],\n      factors: [{\n          \"type\": \"k1\",\n          \"name\": \"chrome\",\n          \"display_name\": \"谷歌\"\n      }],\n      metric_id: 11\n  }],\n  errmsg: ''\n}",          "type": "json"        }      ]    },    "filename": "src/logic/api/metric/dashboard.js",    "groupTitle": "Metric",    "name": "GetMetricDashboard"  },  {    "type": "GET",    "url": "/metric/dishb",    "title": "获取某段时间自定义监控的数据",    "group": "Metric",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "site_id",            "description": "<p>网站ID</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "metric_id",            "description": "<p>监控项ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start_time",            "description": "<p>起始时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "end_time",            "description": "<p>终止时间</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "metric",            "description": "<p>{k1,k2,k3,k4,k5}  类型</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<p>{mins, day}  时间类型</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "成功返回",          "content": "{\n  errno: 0,\n  data: [{\n      category: [\"05-24 00:00\", \"05-24 00:05\",],\n      series: [\n        {\n          name: 'Chrome',\n          data: [50, 20]\n        }\n      ],\n      factors: [{\n          \"type\": \"k1\",\n          \"name\": \"chrome\",\n          \"display_name\": \"谷歌\"\n      }],\n      metric_id: 11\n  }],\n  errmsg: ''\n}",          "type": "json"        }      ]    },    "filename": "src/logic/api/metric/custom_time.js",    "groupTitle": "Metric",    "name": "GetMetricDishb"  },  {    "type": "GET",    "url": "/metric/:site_id",    "title": "获取监控项列表",    "group": "Metric",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "keywords",            "description": "<p>display_name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/metric.js",    "groupTitle": "Metric",    "name": "GetMetricSite_id"  },  {    "type": "POST",    "url": "/metric/:site_id",    "title": "添加监控项",    "group": "Metric",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>描述</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k1",            "description": "<p>k1英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k1_display_name",            "description": "<p>k1中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k2",            "description": "<p>k2英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k2_display_name",            "description": "<p>k2中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k3",            "description": "<p>k3英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k3_display_name",            "description": "<p>k3中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k4",            "description": "<p>k4英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k4_display_name",            "description": "<p>k4中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k5",            "description": "<p>k5英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k5_display_name",            "description": "<p>k5中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "type",            "description": "<p>类型</p>"          }        ]      }    },    "filename": "src/logic/api/metric.js",    "groupTitle": "Metric",    "name": "PostMetricSite_id"  },  {    "type": "PUT",    "url": "/metric/:site_id",    "title": "修改监控项信息",    "group": "Metric",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>监控项的id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "display_name",            "description": "<p>中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>描述</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k1",            "description": "<p>k1英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k1_display_name",            "description": "<p>k1中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k2",            "description": "<p>k2英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k2_display_name",            "description": "<p>k2中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k3",            "description": "<p>k3英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k3_display_name",            "description": "<p>k3中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k4",            "description": "<p>k4英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k4_display_name",            "description": "<p>k4中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k5",            "description": "<p>k5英文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "k5_display_name",            "description": "<p>k5中文名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "type",            "description": "<p>类型</p>"          }        ]      }    },    "filename": "src/logic/api/metric.js",    "groupTitle": "Metric",    "name": "PutMetricSite_id"  },  {    "type": "DELETE",    "url": "/site/:id",    "title": "删除网站",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "DeleteSiteId"  },  {    "type": "DELETE",    "url": "/site/:id/alarm/:alarm_id",    "title": "为网站删除报警",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/alarm.js",    "groupTitle": "Site",    "name": "DeleteSiteIdAlarmAlarm_id"  },  {    "type": "DELETE",    "url": "/site/:id/user/:user_id",    "title": "为网站删除成员",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "DeleteSiteIdUserUser_id"  },  {    "type": "GET",    "url": "/site",    "title": "获取网站列表",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "keywords",            "description": "<p>url 或 name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "GetSite"  },  {    "type": "GET",    "url": "/site/:id",    "title": "获取网站信息",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "GetSiteId"  },  {    "type": "GET",    "url": "/site/:id/alarm",    "title": "获取网站已有报警列表",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/site/alarm.js",    "groupTitle": "Site",    "name": "GetSiteIdAlarm"  },  {    "type": "GET",    "url": "/site/:id/user",    "title": "获取网站成员",    "group": "Site",    "version": "0.0.1",    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "GetSiteIdUser"  },  {    "type": "POST",    "url": "/site",    "title": "添加网站",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>网站地址</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>网站名称</p>"          }        ]      }    },    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "PostSite"  },  {    "type": "POST",    "url": "/site/:id/alarm",    "title": "为网站添加报警",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "metric_id",            "description": "<p>监控项ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>报警名称</p>"          },          {            "group": "Parameter",            "type": "JSON",            "optional": false,            "field": "conditions",            "description": "<p>报警规则</p>"          }        ]      }    },    "filename": "src/logic/api/site/alarm.js",    "groupTitle": "Site",    "name": "PostSiteIdAlarm"  },  {    "type": "POST",    "url": "/site/:id/user/:user_id",    "title": "为网站添加成员",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "status",            "description": "<p>角色代号</p>"          }        ]      }    },    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "PostSiteIdUserUser_id"  },  {    "type": "PUT",    "url": "/site/:id",    "title": "修改网站信息",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>网站名称</p>"          }        ]      }    },    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "PutSiteId"  },  {    "type": "PUT",    "url": "/site/:id/alarm/:alarm_id",    "title": "修改网站报警",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": true,            "field": "metric_id",            "description": "<p>监控项ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>报警名称</p>"          },          {            "group": "Parameter",            "type": "JSON",            "optional": true,            "field": "conditions",            "description": "<p>报警规则</p>"          }        ]      }    },    "filename": "src/logic/api/site/alarm.js",    "groupTitle": "Site",    "name": "PutSiteIdAlarmAlarm_id"  },  {    "type": "PUT",    "url": "/site/:id/user/:user_id",    "title": "修改网站成员角色",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "allowedValues": [              "0",              "1"            ],            "optional": false,            "field": "status",            "description": "<p>角色代号</p>"          }        ]      }    },    "filename": "src/logic/api/site/user.js",    "groupTitle": "Site",    "name": "PutSiteIdUserUser_id"  },  {    "type": "DELETE",    "url": "/token",    "title": "用户登出",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "DeleteToken"  },  {    "type": "DELETE",    "url": "/user/:id",    "title": "用户删除",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "DeleteUserId"  },  {    "type": "GET",    "url": "/token",    "title": "获取验证码",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "GetToken"  },  {    "type": "GET",    "url": "/token/intranet",    "title": "内网登录",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/token/intranet.js",    "groupTitle": "User",    "name": "GetTokenIntranet"  },  {    "type": "GET",    "url": "/user",    "title": "获取用户列表",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "keyword",            "description": "<p>搜索关键词</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "GetUser"  },  {    "type": "POST",    "url": "/token",    "title": "用户登录",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "credential",            "description": "<p>用户名或者密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "captcha",            "description": "<p>验证码</p>"          }        ]      }    },    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "PostToken"  },  {    "type": "POST",    "url": "/user",    "title": "用户注册",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户 ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>用户邮箱</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "PostUser"  },  {    "type": "PUT",    "url": "/user/:id",    "title": "更新用户信息",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>用户状态</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "PutUserId"  }] });
