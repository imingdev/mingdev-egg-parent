const { dirname } = require('path');
const egg = require('egg');
const EGG_PATH = Symbol.for('egg#eggPath');

module.exports = class Application extends egg.Application {
  get [EGG_PATH]() {
    return dirname(__dirname);
  }
};
