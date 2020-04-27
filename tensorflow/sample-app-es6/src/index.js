import 'core-js/stable';
import 'regenerator-runtime/runtime';

(() => {

  const VIDEO_ELEMENT = document.querySelector('#video');
  const CANVAS_ELEMENT = document.querySelector('#canvas');

  const initializeCameraAndModel = () => {
    if (navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia) {
      const webCamera = navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false,
        })
        .then(stream => {
          VIDEO_ELEMENT.srcObject = stream;
  
          return new Promise(resolve => {
            VIDEO_ELEMENT.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const loadModel = cocoSsd.load();
      return Promise.all([loadModel, webCamera]).then(([model]) => model);
    } else {
      return Promise.reject(`Can't use a web camera on your device.`);
    }
  };

  const renderPredictions = predictions => {
    const ctx = CANVAS_ELEMENT.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = '24px Raleway';
    ctx.font = font;
    ctx.textBaseline = 'top';

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = '#2fff00';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = '#2fff00';
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10);
      // draw top left rectangle
      ctx.fillRect(x, y, textWidth + 10, textHeight + 10);
      // draw bottom left rectangle
      ctx.fillRect(x, y + height - textHeight, textWidth + 15, textHeight + 10);

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000';
      ctx.fillText(prediction.class, x, y);
      ctx.fillText(`${prediction.score.toFixed(2) * 100}%`, x, y + height - textHeight);
    });
  };

  const detectFromVideo = (model) => {
    return model.detect(VIDEO_ELEMENT).then(predictions => {
      renderPredictions(predictions);
      requestAnimationFrame(() => {
        detectFromVideo(model);
      });
    });
  };

  initializeCameraAndModel().then(model => {
    document.querySelector('span#loading').style.display = 'none';
    detectFromVideo(model);
  }).catch(() => {
    console.log('Error occurred.');
  });

})();
