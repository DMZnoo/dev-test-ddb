'use client';
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/film.glb');

export default function Film() {
    const { scene } = useGLTF('/film.glb')

    return (
        <>
            <primitive object={scene} />
        </>
    )
}