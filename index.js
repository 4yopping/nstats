  'use strict';
  /**@module
   * nstats module, with all the properties defined into the proyect.
   */
  var stats = require('./stats/stats')
  stats.utils = require('./utils/utils');
  process.on('uncaughtException', function(error) {
    console.log('A error was not catched:');
  })
  module.exports = stats
