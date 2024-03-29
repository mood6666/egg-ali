/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562686659002_8043';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {  // mongoose的配置
    url: 'mongodb://127.0.0.1/blog',  // 27017端口, 
    options: {},
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  }
  config.alinode = {
    appid:'82757',
    secret: 'dee9b768fded1da37de06893b92d5d8e52e81368',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
