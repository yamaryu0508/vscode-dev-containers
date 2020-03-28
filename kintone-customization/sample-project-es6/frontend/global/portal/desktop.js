import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './51-modern-default.css';

kintone.events.on('portal.show', async event => {

  const message = `Hello, ${kintone.getLoginUser().name}!`;

  const spaceElement = kintone.portal.getContentSpaceElement();
  const fragment = document.createDocumentFragment();
  const divEl = document.createElement('div');
  const messageEl = document.createElement('p');

  divEl.classList.add('kintoneplugin-alert');
  messageEl.textContent = message;

  fragment.appendChild(divEl);
  divEl.appendChild(messageEl);
  spaceElement.appendChild(fragment);

  return event;
});