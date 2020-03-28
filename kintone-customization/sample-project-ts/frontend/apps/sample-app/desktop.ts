import SampleClassTS from '../common/SampleClassTS';
const instance = new SampleClassTS();

interface KintoneEvent {
  record: kintone.types.SavedFields;
  error: string;
}

kintone.events.on([`app.record.index.show`], async (event: KintoneEvent) => {

  try {
    const {records} = await instance.doSomethingAsync();
    console.log(records);
  } catch (error) {
    event.error = error.message;
  }
  return event;

});