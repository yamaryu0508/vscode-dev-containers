(function() {
  'use strict';

  kintone.events.on('portal.show', function(event) {

    var message = 'Hello, ' + kintone.getLoginUser().name + '!';

    var spaceElement = kintone.portal.getContentSpaceElement();
    var fragment = document.createDocumentFragment();
    var divEl = document.createElement('div');
    var messageEl = document.createElement('p');

    divEl.classList.add('kintoneplugin-alert');
    messageEl.textContent = message;

    fragment.appendChild(divEl);
    divEl.appendChild(messageEl);
    spaceElement.appendChild(fragment);

    return event;
  });
})();