'use client';

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Group } from "three";
import Dog from "./Dog";
import Earth from "./Earth";
import Film from "./Film";

export const FLOOR_HEIGHT = 3;
export const NB_FLOORS = -3;


export default function Scene() {
  const ref = useRef<Group>(null);
  const tl = useRef<GSAPTimeline>(null);
  const ref2 = useRef<Group>(null);
  const ref3 = useRef<Group>(null);

  const scroll = useScroll();

  useFrame(() => {
    if (tl.current)
      tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    (tl as any).current = gsap.timeline();
    if (tl.current)
      tl.current.to(
        ref.current && ref.current.position,
        {
          duration: 2,
          y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
        },
        0
      );

  }, []);

  return (
    <group
      dispose={null}
      ref={ref}
      position={[0, 0, -2]}
    >
      <group position={[2, -1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Film />
      </group>
      <group position={[1.3, -5, 2.5]}>
        <group ref={ref2}>
          <Earth />
        </group>
      </group>
      <group position={[1.3, -12, 2]} rotation={[0, -0.25, 0]}>
        <group ref={ref3}>
          <Dog />
        </group>
      </group>
    </group>
  );
}