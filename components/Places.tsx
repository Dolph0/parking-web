import IconFour from "./Svg/IconFour";
import IconOne from "./Svg/IconOne";
import IconThree from "./Svg/IconThree";
import IconTwo from "./Svg/IconTwo";
import PlaceFrame from "./Svg/PlaceFrame";

export default function Places() {
  return (
    <section className="max-[350px]:px-4 px-8 py-12 lg:py-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-8 md:gap-10 items-center">
          <div className="space-y-1">
            <h2 className="text-3xl lg:text-[42px] font-bold !leading-none text-brand-blue">
              <span className="text-brand-orange block sm:inline">Todo</span> en
              un sólo lugar
            </h2>
            <p className="text-sm md:text-lg lg:text-2xl text-brand-blue">
              Cercanía, seguridad y comodidad
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-20 sm:gap-y-6 max-w-[300px] sm:max-w-[400px] md:max-w-full">
            <div className="">
              <div className="w-[90px] h-[90px] relative">
                <PlaceFrame />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <IconOne />
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[90px] h-[90px] relative">
                <PlaceFrame />
                <div className="absolute left-3 bottom-2">
                  <h3 className="text-brand-orange font-extrabold text-2xl !leading-tight">
                    2m
                  </h3>
                  <p className="text-brand-blue text-lg font-extrabold !leading-tight">
                    altura
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[90px] h-[90px] relative">
                <PlaceFrame />
                <div className="absolute left-3 bottom-2">
                  <h3 className="text-brand-orange font-extrabold text-2xl !leading-tight">
                    507
                  </h3>
                  <p className="text-brand-blue text-lg font-extrabold !leading-tight">
                    plazas
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[90px] h-[90px] relative">
                <PlaceFrame />
                <div className="absolute  left-0.5 bottom-0">
                  <IconTwo />
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[90px] h-[90px] relative">
                <PlaceFrame />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <IconThree />
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[90px] h-[90px] relative">
                <PlaceFrame />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <IconFour />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
