import Image from "next/image";

export default function Fees() {
  const charges = [
    {
      beacheName:"Mogán",
      beachePrefix: "Playa",
      arc: null,
      className: ""
    },
    {
      beacheName:"Taurito",
      beachePrefix: "Playa",
      arc: "right",
      className: ""
    },
    {
      beacheName:"Cura",
      beachePrefix: "Playa del",
      arc: null,
      className: ""
    },
    {
      beacheName:"Rico",
      beachePrefix: "Puerto",
      arc: "left",
      className: ""
    },
    {
      beacheName:"Aquamarina",
      beachePrefix: "Playa del",
      arc: null,
      className: ""
    },
    {
      beacheName:"Patalavaca",
      beachePrefix: "Playa de",
      arc: "right",
      className: ""
    },
    {
      beacheName:"Costa Alegre",
      beachePrefix: "Playa de",
      arc: "",
      className: ""
    },
    {
      beacheName:"Marañuelas",
      beachePrefix: "Playa de",
      arc: "left",
      className: ""
    },
    {
      beacheName:"El Perchel",
      beachePrefix: "Playa",
      arc: "",
      className: ""
    }
  ]
  return (
    <section className="relative flex flex-col w-full sm:min-h-screen sm:pl-[100px] pt-[60px] pb-[116px] sm:pb-[367px] 2xl:pb-[467px] gap-9 sm:gap-0 " >
      <div className="flex flex-col pl-[46px] sm:pl-0 w-full" >
        <h2 className="font-extrabold text-[32px] sm:text-[42px] leading-[48px] sm:leading-[63px] text-[#004870]" >
        Tarifas por playas
        </h2>
        <p className="font-light text-sm text-[#16214A] leading-[21px] text-justify" >
        Gestionamos tu comodidad. 
        </p>
      </div>
        <Image
          alt="Fees"
          src={"/playa/fees.svg"}
          className="hidden sm:block w-[985px] h-[969px] mx-auto"
          width={985}
          height={969}
        />
        <div className="sm:hidden flex flex-col gap-[27px] px-[85px]">
          {
            charges.map((charge,index)=>(
              <div key={index} className="flex flex-col gap-[10px]">
                <div className="flex items-end justify-start gap-2" >
                  <p className="font-extrabold text-[#004870] text-xl leading-[30px]">
                    {charge.beachePrefix}
                    <br/>
                    <span className="text-[30px]">
                      {charge.beacheName}
                    </span>
                  </p>
                  <Image
                      alt="Arrow right bottom"
                      src={"/icons/arrow-right-bottom.svg"}
                      className="mb-2"
                      width={22}
                      height={22}
                    />
                </div>
                <div className="relative bg-[#004870] flex flex-col items-center justify-center py-[23px] px-[26px] rounded-[20px] max-w-[249px]" >
                  <p className="font-bold text-white text-sm leading-[21px] text-left ml-[-70px]" >
                  Hamacas y sobrillas
                  </p>
                  <ul className="list-disc mx-auto" >
                    <li className="font-light text-sm leading-[21px] text-white" >Simple: 3,50 € ud/día</li>
                    <li className="font-light text-sm leading-[21px] text-white" >Sombrillas: 3,50 € ud/día</li>
                  </ul>
                  {
                    charge.arc && (
                      <Image
                        alt="Arc"
                        src={charge.arc=="right" ? "/icons/arc.svg" : "/icons/reverse-arc.svg"}
                        className={`absolute ${charge.arc=="right" ? "top-[-18px] right-[-18px]" : "bottom-[-18px] left-[-18px]"}`}
                        width={42}
                        height={42}
                      />
                    )
                  }
                </div>    
              </div>  
            ))
          }
        </div>
        <Image
            alt="Footer Wave"
            src={"/playa/footer-wave.svg"}
            layout="cover"
            className="hidden sm:block absolute bottom-[-2px] object-cover left-0 w-full sm:h-[35vh] 2xl:h-[37vh]"
            width={1440}
            height={261}        
        />
        <Image
            alt="Footer Wave Mobile"
            src={"/playa/footer-wave-mobile.svg"}
            layout="cover"
            className="block sm:hidden absolute bottom-[-2px] object-cover left-0 w-full h-[80px]"
            width={800}
            height={80}        
        />
        
    </section>
  )
}
