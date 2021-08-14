const hashSum = require('hash-sum');

module.exports = app => ({
  keys: app.name,
  security: {
    csrf: {
      cookieName: 'SESSIONID', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'SESSIONID', // Session 中的字段名，默认为 csrfToken
    },
  },
  sequelize: {
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    hooks: {
      beforeValidate: obj => {
        // 自动生成主键id
        if (obj.isNewRecord && !obj.dataValues.id) obj.id = hashSum(Date.now());
      },
    },
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+08:00',
  },
});
