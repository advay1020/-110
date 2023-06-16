
const videoElement = document.getElementById('video'); 

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      videoElement.srcObject = stream;
    })
    .catch(function (error) {
      console.error('Error accessing the webcam:', error);
    });
}

function startWebcam() {
  videoElement.play();
}

function takeSnapshot() {
  const canvasElement = document.createElement('canvas');
  const context = canvasElement.getContext('2d');
  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;
  context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
  
  const snapshotURL = canvasElement.toDataURL('image/png');
  console.log('Snapshot taken:', snapshotURL);
}

console.log('ml5 version:', ml5.version);

const modelURL = 'paste_your_model_link_here/model.json'; 
const classifier = ml5.imageClassifier(modelURL, modelLoaded);

function modelLoaded() {
  console.log('Model loaded successfully!')
}
