import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import * as faceExpressionDetection from '@tensorflow-models/face-emotion-2021';
import Webcam from 'react-webcam';

const EmotionDetection = () => {
  const [model, setModel] = useState(null);
  const [emotion, setEmotion] = useState('');
  const webcamRef = useRef(null);
  const emotions = ['neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'];

  const loadModels = async () => {
    await tf.ready();
    const landmarkModel = await faceLandmarksDetection.load(
      faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
      { shouldLoadIrisModel: false }
    );
    const emotionModel = await faceExpressionDetection.load(
      faceExpressionDetection.SupportedPackages.Emotion
    );
    setModel({ landmarkModel, emotionModel });
  };

  const detectEmotion = async () => {
    const imgTensor = tf.browser.fromPixels(webcamRef.current.video);
    const resizeImgTensor = tf.image.resizeBilinear(imgTensor, [512, 512]);
    const face = await model.landmarkModel.estimateFaces({
      input: resizeImgTensor,
      predictIrises: false,
    });
    const predictions = await model.emotionModel.predict({
      input: tf.cast(
        tf.expandDims(
          tf.image.cropAndResize(
            imgTensor,
            [face[0].boundingBox],
            [0],
            [64, 64]
          )
        ),
        'float32'
      )
    });
    const sortedPredictions = Array.from(predictions.dataSync())
      .map((score, index) => ({ score, emotion: emotions[index] }))
      .sort((a, b) => b.score - a.score);
    setEmotion(sortedPredictions[0].emotion);
  };

  useEffect(() => {
    loadModels();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      detectEmotion();
    }, 60000);
    return () => clearInterval(timer);
  }, [model]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>{`Detected emotion: ${emotion}`}</p>
    </div>
  );
};

export default EmotionDetection;
