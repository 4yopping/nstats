'use strict';
var assert = require('assert'),
  JNsolve = require('../index'),
  data, stats
Number.prototype.truncate = function(n) {
  return Math.floor(this * Math.pow(10, n)) / Math.pow(10, n);
};

describe('Stats module test', function() {
  before(function() {
    // create a instance of stats object
    data = [
      [3, 4, 5, 2, 1, 5, 6],
      [1, 4, 0, 4, 1, 5, 6],
      [6, 4, 5, 2, 1, 5, 1],
      [3, 4, 5, 5, 0, 5, 4],
      [4, 4, 5, 2, 1, 5, 12],
      [0, 4, 0, 9, 1, 5, 3],
      [6, 4, 3, 2, 0, 5, 6]
    ]
    stats = new JNsolve(data)
  });
  it('the data property is the array passed to class Stats ', function() {
    assert.equal(stats.data.length, data.length);
    assert.equal(stats.data[0][0], data[0][0]); /// should returns true
  });
  it(
    'the media of datas given is [ [ 3.2857142857142856 ],[ 4 ],[ 3.2857142857142856 ],[ 3.714285714285714 ],[ 0.7142857142857142 ],[ 5 ],[ 5.428571428571428 ] ] ',
    function() {
      assert.equal(stats.media()._(1, 1), 3.2857142857142856);
      assert.equal(stats.media()._(2, 1), 4);
      assert.equal(stats.media()._(3, 1), 3.2857142857142856);
      assert.equal(stats.media()._(4, 1), 3.714285714285714);
      assert.equal(stats.media()._(5, 1), 0.7142857142857142);
      assert.equal(stats.media()._(6, 1), 5);
      assert.equal(stats.media()._(7, 1), 5.428571428571428);
      /// should returns true
    });
  it('the matrix correlation is given by:', function() {
    assert.equal(stats.std().diagonal()._(1, 1), 2.288688541085317);
    assert.equal(stats.std().diagonal()._(2, 1), 0);
    assert.equal(stats.std().diagonal()._(3, 1),
      2.3603873774083293);
    assert.equal(stats.std().diagonal()._(4, 1), 2.627691364061218);
    assert.equal(stats.std().diagonal()._(5, 1),
      0.48795003647426666);
    assert.equal(stats.std().diagonal()._(6, 1), 0);
    assert.equal(stats.std().diagonal()._(7, 1),
      3.4572215654165053);
    /// should returns true
  });
  it(
    'the matrix correlation is given by:[ [ 0.4369314487526515 ],[ NaN ],[ 0.42365927286816174 ],[ 0.38056219755369364 ],[ 2.0493901531919194 ],[ NaN ], [ 0.2892496130428152 ] ]',
    function() {
      assert.equal(stats.covariance().diagonal()._(1, 1),
        0.4369314487526515);
      assert.equal(stats.covariance().diagonal()._(3, 1),
        0.42365927286816174);
      assert.equal(stats.covariance().diagonal()._(4, 1),
        0.38056219755369364);
      assert.equal(stats.covariance().diagonal()._(5, 1),
        2.0493901531919194);
      assert.equal(stats.covariance().diagonal()._(7, 1),
        0.2892496130428152);
      /// should returns true
    });
});
