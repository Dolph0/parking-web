import Image from "next/image";

export default function Download() {
  return (
    <section className="relative flex flex-col w-full min-h-screen" >
        <div className="relative flex flex-col gap-4 bg-white w-full px-[46px] sm:py-0 pt-[34px] sm:pt-[86px] sm:pl-[100px] pb-[96px] sm:pb-[171px]" >
            <h2 className="font-extrabold text-[#004870] text-2xl sm:text-[42px] text-left leading-[36px] sm:leading-[63px]" >
                Nuestro pequeño paraíso
            </h2>
            <p className="font-light text-sm leading-[21px] text-justify max-w-[329px] sm:max-w-[551px]" >
            A lo largo de nuestros 16 kilómetros de costa, te aguardan un total de 22 playas, cada una con su propio atractivo especial. Ya sea que busques tranquilidad o facilidad de acceso, arena dorada o de origen volcánico, aguas serenas y cristalinas, aquí encontrarás una diversidad de opciones para explorar. 
            <br/> <br/>
            Explora la esencia única de cada una, descubre los servicios que tienen para ofrecer y cómo llegar a ellas.
            </p>
            <div className="flex items-center justify-start gap-2">
                <Image
                    alt="Playa"
                    src={"/playa/app-store.png"}
                    className="w-[126px] h-[42px]"
                    width={126}
                    height={42}
                />
                <Image
                    alt="Playa"
                    src={"/playa/google-play.png"}
                    className="w-[138px] h-[54px]"
                    width={138}
                    height={54}
                />
            </div>
            <Image
                alt="Wave"
                src={"/playa/wave.svg"}
                layout="cover"
                className="hidden sm:block absolute bottom-0 object-cover left-0 w-full h-[105px]"
                width={1440}
                height={327}
            />
             <Image
                alt="Wave"
                src={"/playa/wave-mobile.svg"}
                layout="cover"
                className="block sm:hidden absolute bottom-0 object-cover left-0 w-full h-[52px]"
                width={702}
                height={52}
            />
            <Image
                alt="Ellipse"
                src={"/playa/elipse-mobile.png"}
                className="block sm:hidden absolute bottom-[-80px] right-0  w-[91px] h-[199px]"
                width={181}
                height={327}
            />
            <div className="flex sm:hidden absolute bottom-[-90px] items-center justify-center right-[50px] w-[150px] h-[150px] z-10 " >
                <Image
                    alt="Rectangle"
                    src={"/playa/black-rectangle.png"}
                    className="object-cover inset-0 absolute h-full w-full"
                    width={150}
                    height={150}
                />
                <p className="font-extrabold text-white text-[42px] leading-[63px] text-center rotate-[12deg] z-20" >
                    APP
                </p>
            </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start flex-grow bg-[#004870] pl-[46px] sm:pl-[100px] pb-[70px] sm:pb-[174px] pt-[46px] sm:pt-[35px] gap-[30px] sm:gap-[52px]" >
            <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="font-extrabold text-[36px] sm:text-[42px] leading-[54px] sm:leading-[64px] text-white">
                    Reserva <br/>
                    tu día de playa
                </h2>
                <p className="block sm:hidden font-light text-white text-sm leading-[21px]" >
                    Estés dónde estés, tu mente está en Mogán.
                </p>
            </div>
            <button className="border-solid border-[2px] border-white bg-transparent py-3 rounded-[5px] w-[222px]" >
                <span className="font-bold text-center text-[14px] leading-[21px] text-white mx-auto" >Reserva aquí</span> 
            </button>
        </div>
        <Image
          alt="Elippse"
          src={"/playa/ellipse.png"}
          className="hidden sm:block absolute top-[-8px] right-0  :w-[181px] h-[327px]"
          width={181}
          height={327}
        />
        <Image
          alt="Playa"
          src={"/playa/phone.png"}
          className="hidden sm:block absolute bottom-0 right-0 w-[800px] h-[1124px]"
          width={718}
          height={1124}
        />
    </section>
  )
}
