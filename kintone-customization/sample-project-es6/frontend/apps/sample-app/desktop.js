import 'core-js/stable';
import 'regenerator-runtime/runtime';

import SampleClassES6 from '../common/SampleClassES6';
const instance = new SampleClassES6();

kintone.events.on('app.record.index.show', async event => {

  try {
    const {records} = await instance.doSomethingAsync();
    console.log(records);
  } catch (error) {
    event.error = error.message;
  }
  return event;

});