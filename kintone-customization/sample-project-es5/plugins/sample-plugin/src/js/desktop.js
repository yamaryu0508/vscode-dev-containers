(function(PLUGIN_ID) {

  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    var spaceElement = kintone.app.getHeaderSpaceElement();
    var fragment = document.createDocumentFragment();
    var headingEl = document.createElement('h3');
    var messageEl = document.createElement('p');

    messageEl.classList.add('plugin-space-message');
    messageEl.textContent = config.message;
    headingEl.classList.add('plugin-space-heading');
    headingEl.textContent = 'Hello kintone plugin!';

    fragment.appendChild(headingEl);
    fragment.appendChild(messageEl);
    spaceElement.appendChild(fragment);

    return event;
  });

})(kintone.$PLUGIN_ID);
