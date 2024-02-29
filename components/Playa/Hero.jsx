"use client"
import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative w-full h-[60vh] sm:h-[92vh]" >
      <Image
          alt="Playa"
          src={"/playa/hero-playa.png"}
          layout="cover"
          className="hidden sm:block object-cover w-full h-full"
          width={1355}
          height={738}
        />
        <Image
          alt="Playa"
          src={"/playa/hero-playa-mobile.png"}
          layout="cover"
          className="block sm:hidden object-cover w-full h-full"
          width={418}
          height={534}
        />
        <button onClick={() => setOpen(true)}>
        <Image
            alt="play"
            src={"/icons/play.svg"}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[196px] w-[196px] sm:h-[305px] sm:w-[305px]"
            width={305}
            height={305}
          />
        </button>
      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId={"904049593"}
        onClose={() => setOpen(false)}
      />
    </section>
  )
}
