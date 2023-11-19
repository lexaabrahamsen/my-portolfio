export default function WillspaceMarketing() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12" style={{minHeight: '88vh' }}>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
            Willspace
          </p>
          <div style={{ paddingTop: '15px' }}>
            <p className="text-base font-outfit font-light leading-7 uppercase">
              Lifestyle and fitness application
            </p>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
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
