import React, { useRef, useEffect} from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const {scene, animations} = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({clock, camera}) => {
        // Update the Y position simulate the flight moving in a sin wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird reached a certain endpoint relative to the camera
        if(birdRef.current.position.x > camera.position.x + 10){
            birdRef.current.rotation.y = Math.PI;
        }else if(birdRef.current.position.x < camera.position.x - 10){
            birdRef.current.rotation.y = 0;
        }

        // Update the x and z values based on direction
        if(birdRef.current.rotation.y === 0) {
            // Moving forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        }else {
            // Moving backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })

  return (
    <mesh 
        position={[-5, 2, 1]} 
        scale={[0.003, 0.003, 0.003]}  
        ref={birdRef} 
    > 
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird;