export default function Booking({ booking, onInputChange }: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="grid grid-cols-12 gap-4 lg:col-span-6 xl:col-span-7 lg:pr-6 xl:pr-10">
        <div className="col-span-8 space-y-0.5">
          <label htmlFor="Producto" className="block text-sm text-white">
            Producto
          </label>
          <input
            type="text"
            className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
            name="product"
            value={booking.product}
            id="Producto"
            onChange={onInputChange}
          />
        </div>
        <div className="col-span-12 flex gap-3 xl:gap-5">
          <div className="space-y-0.5 w-full">
            <label
              htmlFor="entry_date_start"
              className="block text-sm text-white"
            >
              Fecha de entrada
            </label>
            <input
              type="date"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="entry_date_start"
              id="entry_date_start"
              value={booking.entry_date_start}
              onChange={onInputChange}
            />
          </div>
          <div className="space-y-0.5 w-[100px] xl:w-[115px] shrink-0">
            <label
              htmlFor="entry_time_start_hour"
              className="block text-sm text-white"
            >
              Hora entrada
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                step={1}
                min={0}
                max={23}
                maxLength={2}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
                name="entry_time_start_hour"
                id="entry_time_start_hour"
                value={booking.entry_time_start_hour}
                onChange={onInputChange}
              />
              <input
                type="number"
                step={15}
                min={0}
                maxLength={2}
                max={59}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
                name="entry_time_start_minute"
                id="entry_time_start_minute"
                value={booking.entry_time_start_minute}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-0.5">
          <label
            htmlFor="registration_start"
            className="block text-sm text-white"
          >
            Matrícula
          </label>
          <input
            type="text"
            className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
            name="registration_start"
            id="registration_start"
            value={booking.registration_start}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:col-span-6 xl:col-span-5">
        <div className="col-span-12 space-y-0.5 h-[25px] md:h-[60px]">
          <span className="sr-only">empty space</span>
        </div>
        <div className="col-span-12 flex gap-3 xl:gap-5">
          <div className="space-y-0.5 w-full">
            <label
              htmlFor="entry_date_end"
              className="block text-sm text-white"
            >
              Fecha de entrada
            </label>
            <input
              type="date"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="entry_date_end"
              id="entry_date_end"
              value={booking.registration_start}
              onChange={onInputChange}
            />
          </div>
          <div className="space-y-0.5 w-[100px] xl:w-[115px] shrink-0">
            <label
              htmlFor="entry_time_end_hour"
              className="block text-sm text-white"
            >
              Hora entrada
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                step={1}
                min={0}
                maxLength={2}
                max={23}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
                name="entry_time_end_hour"
                id="entry_time_end_hour"
                value={booking.entry_time_end_hour}
                onChange={onInputChange}
              />
              <input
                type="number"
                step={15}
                min={0}
                max={59}
                maxLength={2}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
                name="entry_time_end_minute"
                id="entry_time_end_minute"
                value={booking.entry_time_end_minute}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-0.5">
          <label
            htmlFor="registration_end"
            className="block text-sm text-white"
          >
            Matrícula
          </label>
          <input
            type="text"
            className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
            name="registration_end"
            id="registration_end"
            value={booking.registration_end}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
}
