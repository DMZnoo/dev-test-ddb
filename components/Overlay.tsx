import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const Section = (props: any) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 items-start`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className={clsx('bg-gradient-to-r from-primary-400 to-blue-500 rounded-lg px-8 py-12', props.className)}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 5));
    setOpacitySecondSection(scroll.curve(1 / 5, 1 / 5));
    setOpacityLastSection(scroll.range(2 / 5, 1 / 5));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl mb-4">
            Films
          </h1>
          <Link className="bg-indigo-500 p-2" href="/movies">Explore</Link>
        </Section>
        <Section className="bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600" opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl mb-4">
            Countries
          </h1>
          <Link className="bg-primary-600 p-2" href="/countries">Explore</Link>
        </Section>
        <div className="p-64" />
        <Section className="bg-gradient-to-tr from-indigo-600  to-purple-500" opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl mb-4">
            Dogs
          </h1>
          <Link className="bg-primary-600 p-2" href="/dogs">
            Explore
          </Link>
        </Section>
      </div>
    </Scroll>
  );
};
