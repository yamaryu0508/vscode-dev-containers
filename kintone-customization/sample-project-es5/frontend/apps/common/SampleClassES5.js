// eslint-disable-next-line no-unused-vars
var SampleClassES5 = (function() {
  'use strict';
  // constructor
  // eslint-disable-next-line no-shadow
  var SampleClassES5 = function(app) {
    this.app = app || kintone.app.getId();
  };

  var p = SampleClassES5.prototype;

  p.doSomethingPromise = function() {
    return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
      app: this.app
    });
  };

  return SampleClassES5;
})();