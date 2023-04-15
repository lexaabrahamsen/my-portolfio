export default function WillspaceMarketing() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            MARKETING MATERIAL
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Willspace
          </h1>
          <h1 className="mt-2 text-3xl font-body tracking-tight text-gray-900 sm:text-4xl">
            Lifestyle and fitness application
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            WILLSPACE, a revolutionary fitness atelier, hired me to design a
            presentation a perspective client could walk away with. It was
            designed to be precise and minimalist.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../WSM1.jpeg" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
