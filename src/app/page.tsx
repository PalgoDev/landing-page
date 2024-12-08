"use client";

import WordPullUp from "../components/ui/word-pull-up";
import Globe from "../components/ui/globe";
import RetroGrid from "@/components/ui/retro-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "../components/ui/animated-shiny-text";
import TextReveal from "@/components/ui/text-reveal";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen">
        <div className="flex flex-col items-center justify-center mt-[12vh]">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-purple-200 text-black  transition-all ease-in hover:cursor-pointer hover:bg-purple-300 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-2 cursor-pointer"
            )}
            onClick={() => {
              window.open("https://play.palgo.live", "_blank");
            }}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Get Started</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <span className="text-6xl font-bold tracking-[-0.02em] text-purple-900 md:text-7xl md:leading-[5rem] mb-0">
            Palgo.
          </span>
          <span className="text-xl font-bold tracking-[-0.02em] text-black md:text-3xl md:leading-[5rem]">
            Hunt, Trade, and Play on the Go
          </span>
        </div>
        <Globe
          className="top-60 md:top-55 opacity-100"
          config={{
            opacity: 1,
            scale: 1,
            mapSamples: 16000,
            mapBrightness: 6,
            width: 400,
            height: 400,
            phi: 0,
            theta: 0,
            devicePixelRatio: 2,
            markers: [],
            onRender: () => {},
            baseColor: [1, 1, 1],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            dark: 0,
            diffuse: 0,
          }}
        />
        <RetroGrid className="mt-10 text-purple-900 fixed bottom-0 left-0 w-full" />
      </div>
      <div className="flex items-center justify-around w-full mt-[30vh]">
        <div className="z-10 flex min-h-[150vh] items-center justify-center w-[100%]">
          <TextReveal
            text="Just a step outside, the adventure awaits."
            className="text-purple-900 text-4xl"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-[30vh] px-10 border-none outline-none bg-transparent">
        <Testimonials />
      </div>
      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-gradient-to-b from-transparent to-purple-600"></div>
    </>
  );
}
