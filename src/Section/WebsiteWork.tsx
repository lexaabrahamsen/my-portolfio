export default function WebsiteWork() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            WEBSITE WORK
          </p>
          <h1 className="font-gloock mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Website work
          </h1>
          <p className="font-outfit font-light mt-6 text-xl leading-8 text-gray-700">
            Helping creative entrepreneurs build websites that encapsulate their
            brand and business.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../DolaMedia1.png" className="w-full rounded-lg" />
          {/* <p className="uppercase text-purple-500">dolamedia.com</p> */}
          <h5 className="font-outfit text-base mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Dola Media
          </h5>
          <p className="font-outfit font-light">
            Dola Media is where story meets business objectives. The goal of the
            website was to connect talent, brand and story to help ensure the
            conversation never stops.
          </p>
          <a href="https://harkmarkllc.com/" className="uppercase text-black underline">view website</a>

          <img src="../GretnaGreen1.png" className="w-full rounded-lg" />
          <h5 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gretna Green Designs
          </h5>
          <a href="https://harkmarkllc.com/" className="uppercase text-black">view website</a>
          {/* <p className="uppercase text-purple-500">gretnagreendesigns.com</p> */}
          <p className="font-outfit font-light">
            Gretna Greeen enhances the interiors of a space or building to
            achieve a healthier and more aesthetically pleasing environment for
            the end user.
          </p>
          <img src="../Harkmark1.png" className="w-full rounded-lg" />
          <p className="uppercase text-purple-500">harkmarkllc.com</p>
          <h5 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Harkmark, LLC
          </h5>
          <p className="font-outfit font-light">
            A digital imaging company offering full service printing solutions.
            Their imaging capabilities run the entire gamut and our oversized
            facilities utilize the newest technologies to ensure perfect
            renditions of your company's message.
          </p>
          <img src="../WellNest1.png" className="w-full rounded-lg" />
          <p className="uppercase text-purple-500">wellnest.com</p>
          <h5 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WellNEST
          </h5>
          <p className="font-outfit font-light">
            wellNEST is a members-only group integrating smart technology,
            personalized health guidance and world-class practitioners to access
            your highest self. wellNEST creates a data-rich picture with a
            customized action plan for each Member, connecting modalities from
            medicine to mediums.
          </p>
        </div>
      </div>
    </div>
  );
}
