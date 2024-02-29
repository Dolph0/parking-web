"use client"
import Image from "next/image";
import Slider from 'react-slick'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Beaches() {
  const playas =[
    {
      playaPrefix: "Playa",
      playa: "Mogán",
      imgMobile: "/playa/beaches/mogan.png",
      img:"/playa/beaches/desktop/mogan.png"
    },
    {
      playaPrefix: "Playa",
      playa: "Taurito",
      imgMobile: "/playa/beaches/taurito.png",
      img:"/playa/beaches/desktop/taurito.png"
    },
    {
      playaPrefix: "Playa del",
      playa: "Cura",
      imgMobile: "/playa/beaches/cura.png",
      img:"/playa/beaches/desktop/cura.png"
    },
    {
      playaPrefix: "Puerto",
      playa: "Rico",
      imgMobile: "/playa/beaches/rico.png",
      img:"/playa/beaches/desktop/rico.png"
    },
    {
      playaPrefix: "Playa de",
      playa: "Patalavaca",
      imgMobile: "/playa/beaches/patalavaca.png",
      img:"/playa/beaches/desktop/patalavaca.png"
    },
    {
      playaPrefix: "Playa de",
      playa: "Costa Alegre",
      imgMobile: "/playa/beaches/costa-alegre.png",
      img:"/playa/beaches/desktop/costa-alegre.png"
    },
    {
      playaPrefix: "Playa de",
      playa: "Marañuelas",
      imgMobile: "/playa/beaches/maranuelas.png",
      img:"/playa/beaches/desktop/maranuelas.png"
    },
    {
      playaPrefix: "Playa",
      playa: "El Perchel",
      imgMobile: "/playa/beaches/perchel.png",
      img:"/playa/beaches/desktop/perchel.png"
    },
    {
      playaPrefix: "Playa de",
      playa: "Aquamarina",
      imgMobile: "/playa/beaches/aquamarina.png",
      img:"/playa/beaches/desktop/aquamarina.png"
    },
  ]
  const CarouselNextArrow = (props) => {
    const { className, onClick } = props
    return (
      <div
        className={className }
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
      >
        <Image
          alt="chevron left"
          src={"/icons/chevron-right.svg"}
          className="w-[18px] h-[32px]"
          width={18}
          height={32}
        />
      </div>
    )
  }

  const CarouselPrevArrow = (props) => {
    const { className, onClick } = props
    return (
      <div
        className={className}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
        onClick={onClick}
      >
        <Image
          alt="chevron right"
          src={"/icons/chevron-left.svg"}
          className="w-[18px] h-[32px]"
          width={18}
          height={32}
        />
      </div>
    )
  }

  const settings = {
    infinite: true,
  
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
  }
  return (
    <section className="relative flex flex-col w-full px-[26px] sm:px-0 sm:pl-[100px] py-[29px] sm:py-[66px] gap-12" >
      <div className="flex flex-col gap-2 sm:gap-0">
        <h2 className="font-extrabold text-left text-[32px] sm:text-[42px] leading-[48px] sm:leading-[63px] text-[#004870]" >
            Nuestras playas
        </h2>
        <p className="font-light text-sm text-[#16214A] text-left sm:text-justify max-w-[220px] sm:max-w-full" >
            Hay muchas formas de disfrutar de la playa y todas están aquí. 
        </p>
      </div>
        <div className="hero-carousel hidden sm:block" >
          <Slider {...settings}>
            {
              playas.map((playa,index)=>(
                <div key={index} className="relative flex flex-col items-center justify-end bg-[#004870] h-[339px] w-[213px] rounded-[30px]">
                    <Image
                      alt="Playa"
                      src={playa.img}
                      layout="cover"
                      className="absolute top-0 left-0 inset-0 top object-cover w-full h-[232px] rounded-t-[30px]"
                      width={213}
                      height={231}
                    />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-full">
                      <p className="font-extrabold text-sm text-white  text-center"> {playa.playaPrefix} </p>
                        <h3 className="font-extrabold text-xl text-center text-white">
                        {playa.playa}
                        </h3>
                      </div>
                </div>
              ))
            }
          </Slider>
        </div>
      <div className="grid sm:hidden grid-cols-2 items-center justify-center gap-y-[18px] gap-x-0 max-w-[330px]" >
        {
          playas.map((playa,index)=>(
            <div className={`${index===playas.length-1 ? "col-span-2" : "col-span-1"}`}  key={index}>
              <div className="relative flex flex-col items-center justify-end bg-[#004870] h-[213px] w-[156px] rounded-[15px] mx-auto">
                <Image
                  alt="Playa"
                  src={playa.imgMobile}
                  layout="cover"
                  className="absolute top-0 left-0 inset-0 top object-cover w-full h-[140px]"
                  width={156}
                  height={140}
                />
                <div className="flex flex-col mb-4">
                  <p className="font-extrabold text-sm text-white  text-center"> {playa.playaPrefix} </p>
                    <h3 className="font-extrabold text-xl text-center text-white">
                    {playa.playa}
                    </h3>
                  </div>
              </div>
            </div>  
          ))
        }
      </div>
    </section>
  )
}
