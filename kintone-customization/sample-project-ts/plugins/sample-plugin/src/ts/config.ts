import '../css/51-modern-default.css';
import '../css/config.css';

((PLUGIN_ID: string): void => {

  const formEl = document.querySelector('.js-submit-settings');
  const cancelButtonEl = document.querySelector('.js-cancel-button');
  const messageEl = document.querySelector('.js-text-message');
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);

  if (config.message) {
    // eslint-disable-next-line @typescript-eslint/no-angle-bracket-type-assertion
    (< HTMLInputElement > messageEl).value = config.message;
  }

  formEl!.addEventListener('submit', e => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-angle-bracket-type-assertion
    kintone.plugin.app.setConfig({message: (< HTMLInputElement > messageEl).value}, () => {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });

  cancelButtonEl!.addEventListener('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });

})(kintone.$PLUGIN_ID);
