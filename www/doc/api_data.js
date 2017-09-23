define({ "api": [  {    "type": "GET",    "url": "/performance",    "title": "添加监控数据",    "group": "Performance",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>网站标题</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "screen",            "description": "<p>屏幕分辨率</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "info",            "description": "<p>performance 接口数据</p>"          }        ]      }    },    "filename": "src/logic/api/performance.js",    "groupTitle": "Performance",    "name": "GetPerformance",    "sampleRequest": [      {        "url": "/api/performance"      }    ]  },  {    "type": "GET",    "url": "/site",    "title": "获取网站列表",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "page",            "description": "<p>页数</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "pagesize",            "description": "<p>分页大小</p>"          }        ]      }    },    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "GetSite",    "sampleRequest": [      {        "url": "/api/site"      }    ]  },  {    "type": "POST",    "url": "/site",    "title": "添加网站",    "group": "Site",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>网站地址</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>网站名称</p>"          }        ]      }    },    "filename": "src/logic/api/site.js",    "groupTitle": "Site",    "name": "PostSite",    "sampleRequest": [      {        "url": "/api/site"      }    ]  },  {    "type": "DELETE",    "url": "/token",    "title": "用户登出",    "group": "User",    "version": "0.0.1",    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "DeleteToken",    "sampleRequest": [      {        "url": "/api/token"      }    ]  },  {    "type": "POST",    "url": "/token",    "title": "用户登录",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "credential",            "description": "<p>用户名或者密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "filename": "src/logic/api/token.js",    "groupTitle": "User",    "name": "PostToken",    "sampleRequest": [      {        "url": "/api/token"      }    ]  },  {    "type": "POST",    "url": "/user",    "title": "用户注册",    "group": "User",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户 ID</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "display_name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>用户邮箱</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户密码</p>"          }        ]      }    },    "filename": "src/logic/api/user.js",    "groupTitle": "User",    "name": "PostUser",    "sampleRequest": [      {        "url": "/api/user"      }    ]  }] });
