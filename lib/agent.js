const { dirname } = require('path');
const egg = require('egg');
const EGG_PATH = Symbol.for('egg#eggPath');

module.exports = class Agent extends egg.Agent {
  get [EGG_PATH]() {
    return dirname(__dirname);
  }
};
