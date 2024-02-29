export default function Discount() {
  return (
    <section className="max-[350px]:px-4 px-8 py-8 lg:py-12">
      <div className="max-w-screen-xl mx-auto relative space-y-8">
        <h2 className="font-extrabold text-[30px] md:text-[42px] text-brand-blue text-center">
          Tarifas y Abonos
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="space-y-4">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                Rotación
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">
                PRECIO
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                Mañana <br />€ x minuto
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">
                0,0167 €
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                Tarde <br />€ x minuto
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">
                0,0125 €
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                1 hora <br /> 07:00 a 16:00
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">1 €</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                1 hora <br /> 16:00 a 07:00
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">
                0,75 €
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                Máximo día
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">6 €</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="space-y-4 col-span-6 md:col-span-4 lg:col-span-2">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                ABONOS
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">
                PRECIO
              </p>
            </div>
          </div>
          <div className="space-y-4 col-span-6 md:col-span-4 lg:col-span-2">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                24 Horas
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">50€</p>
            </div>
          </div>
          <div className="space-y-4 col-span-12 md:col-span-4 lg:col-span-2">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                14 Horas
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">30€</p>
            </div>
          </div>
          <div className="space-y-4 col-span-12 md:col-span-6 lg:col-span-3">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                24 Horas · Motocicletas
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">30€</p>
            </div>
          </div>
          <div className="space-y-4 col-span-12 md:col-span-6 lg:col-span-3">
            <div className="min-h-[48px] md:min-h-[68px] bg-brand-orange flex justify-center items-center px-4">
              <h3 className="text-white text-sm md:text-base xl:text-xl text-center font-bold">
                Pack 24h · Coche + Moto
              </h3>
            </div>
            <div className="w-full flex justify-center items-center min-h-[68px] md:min-h-[92px] bg-brand-gray-light">
              <p className="text-sm md:text-xl text-dark text-center ">
                50€ + 15€
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
