export default function Willspace() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="font-outfit text-base font-semibold leading-7 text-indigo-600 uppercase">
            Fitness application
          </p>
          <h1 className="font-gloock mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WillSpace
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            WILLSPACE, a revolutionary fitness atelier hired SMM to build a
            health and wellness application. My role as UI Designer on this
            project was to work with owner Will Torres to design a fitness
            trainer tool aimed at simplifying client progress tracking. The
            application allows for trainers and administrators to create unique
            exercises and upload reference videos, create and track clients
            through a scheduling tool, assign the aforementioned exercises to
            programs and then give these programs to their clients for use.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../WS1.png" className="w-full rounded-lg mb-8" />
          <img src="../WS2.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS3.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS4.jpeg" className="w-full rounded-lg mb-8" />
          <img src="../WS5.png" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
