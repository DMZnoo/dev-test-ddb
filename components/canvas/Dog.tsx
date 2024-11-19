'use client';
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

useGLTF.preload('/dog.glb');

export default function Dog() {
    const { scene, animations } = useGLTF('/dog.glb')
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        const animation = actions['Animation'];
        if (animation) {
            animation.play();
        }
    }, [])

    return (
        <primitive object={scene} />
    )
}