'use client';
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/earth.glb');

export default function Earth() {
    const { scene } = useGLTF('/earth.glb')

    return (
        <primitive object={scene} />
    )
}