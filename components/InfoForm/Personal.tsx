import Link from "next/link";

export default function Personal({ personal, onInputChange }: any) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 md:pt-14 gap-7">
        <div>
          <div className="max-w-[225px] space-y-4">
            <h2 className="font-bold text-white text-xl pb-3">
              Datos personales
            </h2>
            <p className="text-white text-sm">
              Si ya eres usuario identificate a continuación
            </p>
            <Link
              href={"#"}
              className="border-2 inline-block border-white rounded-md px-8 py-2.5 text-center w-[175px] bg-transparent text-white text-sm font-semibold"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-3">
          <div className="col-span-1 space-y-0.5">
            <label htmlFor="Nombre" className="block text-sm text-white">
              Nombre<sup>*</sup>
            </label>
            <input
              type="text"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="name"
              id="Nombre"
              required
              value={personal.name}
              onChange={onInputChange}
            />
          </div>
          <div className="col-span-1 space-y-0.5">
            <label htmlFor="Apellidos" className="block text-sm text-white">
              Apellidos<sup>*</sup>
            </label>
            <input
              type="text"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="sure_name"
              id="Apellidos"
              required
              value={personal.sure_name}
              onChange={onInputChange}
            />
          </div>
          <div className="col-span-2 space-y-0.5">
            <label
              htmlFor="customer_type*"
              className="block text-sm text-white"
            >
              Tipo de cliente*
            </label>
            <input
              type="text"
              required
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="customer_type"
              value={personal.customer_type}
              onChange={onInputChange}
              id="customer_type*"
            />
          </div>
          <div className="col-span-1 space-y-0.5">
            <label htmlFor="email" className="block text-sm text-white">
              Correo electrónico<sup>*</sup>
            </label>
            <input
              type="text"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="email"
              id="email"
              value={personal.email}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-span-1 space-y-0.5">
            <label htmlFor="telephone" className="block text-sm text-white">
              Teléfono<sup>*</sup>
            </label>
            <input
              type="text"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="telephone"
              id="telephone"
              value={personal.telephone}
              onChange={onInputChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}
