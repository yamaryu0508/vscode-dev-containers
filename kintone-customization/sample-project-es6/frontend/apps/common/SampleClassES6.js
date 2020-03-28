export default class SampleClassES6 {
  constructor(app = kintone.app.getId()) {
    this.app = app;
  }

  async doSomethingAsync() {
    const response = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
      app: this.app
    });
    return response;
  }

}