import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      sectionTitle: "Trámites frecuentes",
      className: "sm:mr-[77px]",
      links: [
        {
          text: "Pagar",
          url: "/",
        },
        {
          text: "Obtener un recibo",
          url: "/",
        },
        {
          text: "Domiciliar",
          url: "/",
        },
      ],
    },
    {
      sectionTitle: "Sobre nosotros",
      className: "sm:mr-[133px]",
      links: [
        {
          text: "Oficina Virtual Tributaria",
          url: "/",
        },
        {
          text: "Convenios y proyectos",
          url: "/",
        },
        {
          text: "Portal de transparencia",
          url: "/",
        },
        {
          text: "Trabaja con nosotros",
          url: "/",
        },
        {
          text: "Sala de prensa",
          url: "/",
        },
        {
          text: "Eventos",
          url: "/",
        },
      ],
    },
    {
      sectionTitle: "Información",
      className: " sm:mt-0",
      links: [
        {
          text: "Solicitar cita previa",
          url: "/",
        },
        {
          text: "Preguntas frecuentes",
          url: "/",
        },
        {
          text: "Canal informativo",
          url: "/",
        },
        {
          text: "Dónde encontrarnos",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer className="bg-brand-blue  relative py-7 sm:py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start sm:gap-[76px] mx-auto">
          <div className="flex flex-col items-center sm:items-start justify-start w-full sm:w-auto">
            <div className="flex items-center justify-center gap-[6px] -ml-[22px] mb-6">
              <Image
                src="/images/mogan-gestiona.svg"
                alt={"Mogan"}
                height={108}
                width={112}
              />
              <Image
                src="/images/footer-logo.svg"
                alt={"Mogan"}
                height={51}
                width={115}
              />
            </div>
            <div className="flex sm:flex-col items-end sm:items-start justify-between sm:justify-start w-full sm:w-auto px-2 sm:px-0">
              <p className="font-normal text-[13px] text-[#F5F5F5] leading-5 sm:mt-3">
                <span className="font-bold text-white">Oficinas centrales</span>{" "}
                <br />
                Avda. de la Constitución nº14 <br />
                35140 - Mogán
              </p>
              <div className="flex flex-col items-center sm:items-start justify-start gap-2">
                <div className="flex items-center justify-center gap-[6px] sm:mt-6">
                  <Image
                    src="/images/icons/social-media/Linkedin.png"
                    alt={"LinkedIn"}
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/icons/social-media/Instagram.png"
                    alt={"Instagram"}
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/icons/social-media/Facebook.png"
                    alt={"Facebook"}
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/icons/social-media/Youtube.png"
                    alt={"Youtube"}
                    height={20}
                    width={23}
                  />
                </div>
                <p className="font-normal text-[11px] text-[#F5F5F5] leading-3 sm:leading-[18px] text-center sm:text-left sm:mt-5">
                  #GestionaMogan
                  <br />
                  <span className="hidden sm:block text-[12px]">
                    Aviso legal | Accesibilidad | Términos de uso
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden border border-t border-[#407694] w-full mt-8 mb-[17px]"></div>
          <div className="flex items-start justify-between sm:justify-start flex-wrap sm:flex-no-wrap w-full sm:w-auto gap-x-5 sm:gap-0">
            {footerLinks.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-start gap-2 sm:gap-4 ${
                  item.className ?? ""
                } `}
              >
                <h4 className="font-extrabold text-white text-sm sm:text-xl leading-5 sm:leading-[30px]">
                  {item.sectionTitle}
                </h4>
                <div className="flex flex-col items-start justify-start">
                  {item.links.map((link, index) => (
                    <Link
                      key={"link " + index}
                      href={link.url}
                      className="font-normal text-[13px] text-white leading-5 "
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="sm:hidden font-normal text-[12px] text-[#F5F5F5] text-center leading-[17px] mt-14">
            Aviso legal | Accesibilidad | Términos de uso
          </p>
        </div>
        <div className="absolute hidden sm:block sm:-bottom-[95px] sm:left-[32.1%]">
          <Image
            src={"/images/MOGAN-Footer.png"}
            alt={"Mogan"}
            height={283}
            width={735}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
