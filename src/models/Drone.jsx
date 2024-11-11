import React, { useRef, useEffect } from 'react';
import droneScene from '../assets/3d/drone.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Drone = ({ isRotating, setIsRotating, ...props }) => {
  const ref = useRef();
  const { scene } = useGLTF(droneScene);

  const tiltAngle = useRef(0); // Aktuální úhel náklonu
  const targetTilt = useRef(0); // Cíl úhlu náklonu

  useFrame(() => {
    if (!isRotating) {
      targetTilt.current = 25; // Nakloní se dopředu, když není stisknuta myš
    } else {
      targetTilt.current = 0; // Vraťte se do výchozí polohy, když je stisknuta myš
    }

    // Plynulé naklonění
    tiltAngle.current += (targetTilt.current - tiltAngle.current) * 0.1;

    // Aplikace úhlu na rotaci dronu
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.degToRad(tiltAngle.current); // Převod na radiány
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true); // Nastavte isRotating na true při stisknutí
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false); // Nastavte isRotating na false při uvolnění
  };

  useEffect(() => {
    const canvas = document.querySelector('canvas'); // Získání referencí na plátno
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  useEffect(() => {
    // Ujistíme se, že materiály jsou aktualizovány
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          if (child.material) {
            child.material.needsUpdate = true; // Obnovíme materiál
          }
        }
      });
    }
  }, [scene]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Drone;