'use client';

import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Loading } from "./Loading";

export const Common = () => (
    <Suspense fallback={<Loading />}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
    </Suspense>
)