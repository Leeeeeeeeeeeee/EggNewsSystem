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
  config.keys = appInfo.name + '_1640061559497_9837';

  //配置中间件
  config.middleware = ['printdate'];

  //给printdate中间件传入参数
  config.printdate = {
    msg: '日期: ',
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  }
  //配置公共api地址
  config.api = 'http://www.phonegap100.com/';

  return {
    ...config,
    ...userConfig,
  };
};
