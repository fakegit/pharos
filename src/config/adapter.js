const fileCache = require('think-cache-file');
const nunjucks = require('think-view-nunjucks');
const fileSession = require('think-session-file');
const mysql = require('think-model-mysql');
const path = require('path');
const { DateFile } = require('think-logger3');
const isDev = think.env === 'development';

/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: 'file',
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'), // absolute path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  }
};

/**
 * model adapter config
 * @type {Object}
 */
exports.model = {
  type: 'mysql',
  common: {
    logConnect: isDev,
    logSql: isDev,
    logger: msg => think.logger.info(msg)
  },
  mysql: {
    handle: mysql,
    database: process.env.PH_MYSQL_DATABASE || 'monitor',
    prefix: process.env.PH_MYSQL_PREFIX || 'ph_',
    encoding: process.env.PH_MYSQL_ENCODING || 'utf8mb4',
    host: process.env.PH_MYSQL_HOST || '127.0.0.1',
    port: process.env.PH_MYSQL_PORT || '',
    user: process.env.PH_MYSQL_USER || 'root',
    password: process.env.PH_MYSQL_PASSWORD || '123456',
    dateStrings: true
  }
};

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: 'file',
  common: {
    cookie: {
      name: 'thinkjs',
      // keys: ['werwer', 'werwer'],
      // signed: true
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, 'runtime/session')
  }
};

/**
 * view adapter config
 * @type {Object}
 */
exports.view = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  nunjucks: {
    handle: nunjucks
  }
};

exports.logger = {
  type: isDev ? 'console' : 'dateFile',
  dateFile: {
    handle: DateFile,
    absolute: true,
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: true,
    filename: path.join(think.ROOT_PATH, 'logs/xx.log'),
    layout: {
      type: 'pattern',
      pattern: '%[[%d] [%z] [%p]%] - %m'
    }
  }
};
