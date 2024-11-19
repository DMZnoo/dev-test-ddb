import gsap from "gsap";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const Cursor = () => {
    const $follower = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const xTo = gsap.quickTo($follower.current, "x", {
                duration: 0.6,
                ease: "power3",
            })

            const yTo = gsap.quickTo($follower.current, "y", {
                duration: 0.6,
                ease: "power3",
            })

            window.addEventListener("mousemove", (e) => {
                xTo(e.clientX)
                yTo(e.clientY)
            })

            return () =>
                window.removeEventListener("mousemove", (e) => {
                    xTo(e.clientX)
                    yTo(e.clientY)
                })
        })

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <div
            ref={$follower}
            className="pointer-events-none fixed left-0 top-0 aspect-square w-[50vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform"
        >
            <div className="h-full w-full animate-spin-slow bg-gradient-to-r from-cyan-700 to-amber-600"></div>
        </div>
    );
}

export default Cursor;