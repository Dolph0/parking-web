"use client";
import Link from "next/link";
import { useState } from "react";
import Booking from "./Booking";
import Personal from "./Personal";

export default function Index() {
  const [formData, setFormData] = useState({
    booking: {
      product: "",
      entry_date_start: " ",
      entry_time_start_hour: "",
      entry_time_start_minute: "",
      registration_start: "",
      entry_date_end: "",
      entry_time_end_hour: "",
      entry_time_end_minute: "",
      registration_end: "",
    },
    personal: {
      name: "",
      sure_name: "",
      customer_type: "",
      email: "",
      telephone: "",
    },
    is_invioce: true,
    is_policy: false,
    is_newsletter: false,
  });
  const handlePersonalInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      personal: {
        ...prevData.personal,
        [name]: value,
      },
    }));
  };

  const handleBookingInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      booking: {
        ...prevData.booking,
        [name]: value,
      },
    }));
  };

  const handleCheckboxes = (e: any) => {
    const name = e.target.name;
    const value = e.target.checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative md:px-8">
      <div className="absolute right-0 hidden md:block bottom-0 top-0 w-1/3 bg-brand-gray-light">
        <span className="sr-only">Right side bg</span>
      </div>
      <div className="absolute left-0 bottom-0 hidden md:block top-0 w-1/3 bg-brand-orange">
        <span className="sr-only">Right side bg</span>
      </div>
      <div className="max-w-screen-xl mx-auto relative">
        <form action="" onSubmit={handleFormSubmit}>
          <div className="grid md:grid-cols-12 grid-cols-1 ">
            <div className="md:col-span-8 bg-brand-orange max-md:px-8 py-14 md:pr-10 xl:pr-20 2xl:-mr-10 relative">
              <div className="space-y-3 max-w-[525px] pb-8">
                <h2 className="text-2xl lg:text-[32px] !leading-snug text-white font-extrabold">
                  Planifica tu viaje y reserva tu próxima escapada
                </h2>
                <p className="text-white text-xl lg:text-2xl">
                  Ahora puedes realizar tu reserva online.
                </p>
              </div>
              <Booking
                booking={formData.booking}
                onInputChange={handleBookingInput}
              />
              <Personal
                personal={formData.personal}
                onInputChange={handlePersonalInput}
              />
              <div className="pt-10 grid gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="size-6 accent-white focus:outline-none shadow-none outline-none ring-0 hover:outline-none"
                    id="is_invioce"
                    name="is_invioce"
                    checked={formData.is_invioce}
                    onChange={handleCheckboxes}
                  />
                  <label className="text-sm text-white" htmlFor="is_invioce">
                    Voy a querer factura
                  </label>
                </div>

                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="size-6 accent-white focus:outline-none shadow-none outline-none ring-0 hover:outline-none"
                    id="is_policy"
                    name="is_policy"
                    checked={formData.is_policy}
                    onChange={handleCheckboxes}
                  />
                  <label className="text-sm text-white" htmlFor="is_policy">
                    He leído y acepto la{" "}
                    <Link className="text-brand-maron" href={"#"}>
                      Política de privacidad
                    </Link>{" "}
                    y las{" "}
                    <Link href={"#"} className="text-brand-maron">
                      condiciones generales
                    </Link>
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="size-6 accent-white focus:outline-none shadow-none outline-none ring-0 hover:outline-none"
                    id="is_newsletter"
                    name="is_newsletter"
                    checked={formData.is_newsletter}
                    onChange={handleCheckboxes}
                  />
                  <label className="text-sm text-white" htmlFor="is_newsletter">
                    Quiero recibir información comercial y de novedades de
                    Gestiona Mogan
                  </label>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-brand-gray-light max-md:px-8 pl-4 lg:pl-10 xl:pl-16 2xl:pl-24 py-10 md:py-14 space-y-5 2xl:-mr-10">
              <h2 className="text-2xl lg:text-[32px] !leading-snug text-brand-orange font-extrabold">
                Resumen reserva
              </h2>
              <ul className="grid gap-5">
                <li className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h4 className="text-sm text-dark font-bold">Parking</h4>
                    <p className="text-sm text-dark">Parking Arguineguín</p>
                  </div>
                </li>
                <li className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h4 className="text-sm text-dark font-bold">Matrícula</h4>
                    <p className="text-sm text-dark">8907LKL</p>
                  </div>
                </li>
                <li className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h4 className="text-sm text-dark font-bold">Producto</h4>
                    <p className="text-sm text-dark">Parking de 1 día</p>
                  </div>
                  <p className="text-sm text-dark  pt-1">0,00€</p>
                </li>
                <li className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h4 className="text-sm text-dark font-bold">Subtotal</h4>
                    <p className="text-sm text-dark">xxx</p>
                  </div>
                  <p className="text-sm text-dark  pt-1">0,00€</p>
                </li>
                <li className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h4 className="text-sm text-dark font-bold">IGIC</h4>
                  </div>
                  <p className="text-sm text-dark pt-1">0,00€</p>
                </li>
                <li className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-dark ">TOTAL</h3>
                  <p className="text-2xl font-bold text-dark">0,00€</p>
                </li>
              </ul>
              <div className="flex justify-center items-center pt-12">
                <button
                  type="submit"
                  className="font-bold text-sm text-white px-6 py-2.5 rounded-lg bg-brand-orange hover:bg-opacity-85 transition-all duration-200"
                >
                  Confirmar reserva
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
