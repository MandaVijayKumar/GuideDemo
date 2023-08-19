import React, { useState, useEffect, useRef } from 'react';
// import * as faceapi from 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.5.0/face-api.js';
import * as faceapi from 'face-api.js';

const Webcam = () => {
  const [countdown, setCountdown] = useState(5);
  const [emotions, setEmotions] = useState([]);

  const webcamRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.5.0/weights');
      await faceapi.nets.faceExpressionNet.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.5.0/weights');
    };

    loadModels();
  }, []);

  useEffect(() => {
    let interval = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      capture();
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const capture = async () => {
    const image = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = image;
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
      const detections = await faceapi.detectAllFaces(canvas, new faceapi.SsdMobilenetv1Options()).withFaceExpressions();
      setEmotions(detections);
      setCountdown(5);
    };
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', paddingBottom: '75%' }}>
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {countdown > 0 && <h1>{countdown}</h1>}
          <video style={{ display: countdown > 0 ? 'none' : 'block', width: '100%', height: '100%', objectFit: 'cover' }} ref={webcamRef} autoPlay={true} />
        </div>
      </div>
      {emotions.map((detection, i) => (
        <div key={i} style={{ position: 'absolute', top: detection.box.top + 'px', left: detection.box.left + 'px', width: detection.box.width + 'px', height: detection.box.height + 'px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          {Object.keys(detection.expressions).map((expression, j) => (
            <div key={j}>{expression}: {detection.expressions[expression]}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Webcam;
