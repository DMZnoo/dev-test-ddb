'use client';
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/earth.glb")

export default function Model() {
    const group = useRef<Group>(null);
    const { scene } = useGLTF('/earth.glb')

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}