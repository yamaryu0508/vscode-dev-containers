(function(PLUGIN_ID) {

  'use strict';

  var formEl = document.querySelector('.js-submit-settings');
  var cancelButtonEl = document.querySelector('.js-cancel-button');
  var messageEl = document.querySelector('.js-text-message');
  var config = kintone.plugin.app.getConfig(PLUGIN_ID);

  if (config.message) {
    messageEl.value = config.message;
  }

  formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    kintone.plugin.app.setConfig({message: messageEl.value}, function() {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });

  cancelButtonEl.addEventListener('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });

})(kintone.$PLUGIN_ID);
