"use client";
import videoImg from "@/public/images/parking-aparcamiento.png";
import Image from "next/image";
import { useState } from "react";

export default function VideoArea() {
  let [isVideo, setIsVideo] = useState(false);
  return (
    <section className="relative min-h-[590px] lg:min-h-screen">
      {isVideo ? (
        <iframe
          className="w-full lg:h-screen"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iWOoJqfbcss?si=dTGczmjEoAGsybPL"
        ></iframe>
      ) : (
        <>
          <Image
            src={videoImg}
            className="object-cover object-center"
            alt={"video imag"}
            fill
          />
          <div className="absolute inset-0 max-sm:bg-black/20">
            <div className="w-40 absolute top-10 max-sm:left-8 sm:right-20">
              <h2 className="text-3xl font-bold text-white">
                SERVICIOS PRODUCTOS
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsVideo(true)}
            type="button"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
          >
            <svg
              className="w-[190px] lg:w-auto h-[190px] lg:h-auto"
              width="305"
              height="305"
              viewBox="0 0 305 305"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M152.5 0C68.2438 0 0 68.2438 0 152.5C0 236.756 68.2438 305 152.5 305C236.756 305 305 236.756 305 152.5C305 68.2438 236.756 0 152.5 0ZM114.375 76.25L228.75 152.5L114.375 228.75V76.25Z"
                fill="#EB6332"
              />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
