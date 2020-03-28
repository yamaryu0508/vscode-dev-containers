(function() {
  'use strict';

  // eslint-disable-next-line no-undef
  var instance = new SampleClassES5();

  kintone.events.on('app.record.index.show', function(event) {
    return instance.doSomethingPromise().then(function(response) {
      var records = response.records;
      console.log(records);
      return event;
    }).catch(function(error) {
      event.error = error.message;
      return event;
    });
  });

})();