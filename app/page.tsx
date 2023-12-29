"use client";

import Hero from "./hero/Hero";
import useBlobity from "blobity/lib/useBlobity";
import { useEffect } from "react";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import PreLoader from "./animations/Preloader/Preloader";
import Navbar from "./navbar/Navbar";
import consoleMessage from "./utils/console-msg";
consoleMessage();

import dynamic from "next/dynamic";
const Bio = dynamic(() => import("./bio/Bio"));
const LinkedIn = dynamic(() => import("./linkedin/Linkedin"));
const Projects = dynamic(() => import("./projects/Projects"));
const Snippets = dynamic(() => import("./Snippets/Snippets"));
const Contact = dynamic(() => import("./contact/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <>
    <PreLoader />
    <Navbar />
    <main className="flex flex-col items-center justify-center">
        <Hero />
        <Bio />
        <LinkedIn />
        <Projects />
        <Snippets />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
