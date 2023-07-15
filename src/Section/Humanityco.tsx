export default function Humanityco() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="text-base font-outfit font-semibold leading-7 text-indigo-600 uppercase">
          Data privacy app
          </p>
          <h1 className="mt-2 text-3xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hu-manity.co
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            Is a next generation legal technology company redefining the story
            of privacy. We see a world where consumers and brands thrive with
            intentionally-consented relationships regarding data agency, data
            ethics, and data reciprocity. Our mission is to assist the world’s
            leading brands be more data driven by re-designing and transforming
            the contracting relationship with consumers at global scale
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../HU3.png" className="w-full rounded-lg mb-8" />
          <img src="../HU2.png" className="w-full rounded-lg mb-8" />
          <img src="../HU1.png" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
