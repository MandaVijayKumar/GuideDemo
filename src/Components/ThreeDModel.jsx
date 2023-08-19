import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MeshText2D } from 'three-text2d';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const ThreeDModel = () => {
  const containerRef = useRef(null);
  let scene, camera, renderer, mesh, textMesh;
  const messages = ["Stay Positive", "You're Strong", "Believe in Yourself", "You Can Do It"]; // Array of messages

  useEffect(() => {
    // Set up the scene
    scene = new THREE.Scene();

    // Set up the camera
    const aspectRatio = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 2;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Set up the geometry and material for the 3D model
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x00ff00,
      metalness: 0.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    mesh = new THREE.Mesh(geometry, material);

    // Set up the geometry and material for the text
    const fontLoader = new FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const textMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xff0000,
        metalness: 0.1,
        roughness: 0.1,
        transparent: true,
        opacity: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      });
      textMesh = new MeshText2D('', {
        font: font,
        size: 0.1,
        height: 0.05,
        material: textMaterial,
      });
      textMesh.position.y = 0.5;

      // Add the 3D model and text to the scene
      scene.add(mesh);
      scene.add(textMesh);

      let messageIndex = 0; // Index to cycle through messages

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the 3D model
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        // Update the text with the current message
        textMesh.text = messages[messageIndex];
        textMesh.sync();

        messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages

        // Render the scene with the camera
        renderer.render(scene, camera);
      };

      animate();
    });

    // Clean up
    return () => {
      containerRef.current.removeChild(renderer.domElement);
      scene.remove(mesh);
      scene.remove(textMesh);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      const aspectRatio = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return <div style={{ position: 'relative', width: '200px', height: '200px' }} ref={containerRef} />;
};

export default ThreeDModel;
