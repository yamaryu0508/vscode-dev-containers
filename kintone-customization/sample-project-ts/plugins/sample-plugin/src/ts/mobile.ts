import '../css/mobile.css';

((PLUGIN_ID: string): void => {

  kintone.events.on('mobile.app.record.index.show', event => {
    const config = kintone.plugin.app.getConfig(PLUGIN_ID);

    const spaceElement = kintone.mobile.app.getHeaderSpaceElement();
    const fragment = document.createDocumentFragment();
    const headingEl = document.createElement('h3');
    const messageEl = document.createElement('p');

    messageEl.classList.add('plugin-space-message');
    messageEl.textContent = config.message;
    headingEl.classList.add('plugin-space-heading');
    headingEl.textContent = 'Hello kintone plugin!';

    fragment.appendChild(headingEl);
    fragment.appendChild(messageEl);
    if (spaceElement !== null) {
      spaceElement.appendChild(fragment);
    }
    return event;
  });

})(kintone.$PLUGIN_ID);
