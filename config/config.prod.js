/**
 * 正式环境配置
 */

module.exports = (appInfo) => {
  const config = {};

  // should change to your own
  config.keys = `${appInfo.name}_prod_1502874753953_2868`;

  config.nunjucks = {
    cache: true // local env is false
  };

  config.session = {
    key: 'TRACKER_PROD_SESS'
  };

  config.sequelize = {
    database: 'fe_tracker',
    host: '172.16.1.13',
    username: 'jiayoubao',
    password: 'root1234',
  };

  return config;
};
