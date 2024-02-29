import imageOne from "@/public/images/Gran-Canaria-Arguineguin.png";
import car from "@/public/images/electric-car.svg";
import onboarding from "@/public/images/video-onboarding.png";
import Image from "next/image";

export default function Recharge() {
  return (
    <section className="md:pt-4">
      <div className="bg-[#30AF7E] flex-col-reverse flex   relative md:pr-4">
        <Image
          src={car}
          alt={"icon one"}
          className="absolute right-0 max-md:bottom-4 md:top-4 max-sm:size-72"
        />
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12">
            <div className="col-span-6 lg:col-span-5 md:col-start-7  lg:col-start-7 space-y-5 max-[350px]:px-4 max-lg:pl-8 max-md:pr-8 py-8 md:h-[490px] flex flex-col justify-center xl:pr-20">
              <h2 className="text-2xl lg:text-[32px] font-extrabold text-white leading-relaxed">
                Recárgalo de energía <br /> en
                <Image
                  src={onboarding}
                  alt={"icon one"}
                  className="inline lg:h-auto h-10 w-auto sm:h-[48px]"
                />
              </h2>
              <p className="text-sm  text-white pb-2">
                Un coche eléctrico necesita dos cosas: un sitio dónde aparcar y
                un cargador, y en nuestro parking te proporcionamos ambas cosas.
                <br />
                <br />
                Nuestros puntos de carga funcionan con electropass.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:relative left-0 md:absolute md:inset-y-0 md:w-1/2 w-full   md:pb-0">
          <div className="lg:pr-20 relative h-full">
            <Image
              src={imageOne}
              alt={"icon one"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
