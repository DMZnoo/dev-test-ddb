
'use client'

import { Overlay } from '@/components/Overlay';
import { Loading } from '@/components/canvas/Loading';
import Cursor from '@/components/cursor/Cursor';
import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import dynamic from "next/dynamic";
import { Suspense } from 'react';

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false })
const Common = dynamic(() => import("@/components/canvas/Common").then((mod) => mod.Common), { ssr: false })

export default function Home() {

  return (
    <main>
      <Cursor />
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      <div className='h-screen'
      >
        <Canvas>
          <Suspense fallback={<Loading />}>
            <ScrollControls pages={5} damping={0.2}>
              <Overlay />
              <Scene />
            </ScrollControls>
            <Common />
          </Suspense>
        </Canvas>
      </div>

    </main>
  );
}
