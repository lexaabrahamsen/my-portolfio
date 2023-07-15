export default function LMS() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="font-outfit text-base font-semibold leading-7 text-indigo-600 uppercase">
            LMS system
          </p>
          <h1 className="font-gloock mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learning Management System
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            I was responsible for the User Interface for this design. The user
            experience was focused around providing a single framework with
            flexible, customized content for the learners. The crucial component
            was crafting an individual education plan for every learner by
            combining data and building context sensitive, adaptive
            recommendations. This would allow you to optimize your
            organization's performance, close competency gaps and enhance the
            skills and knowledge of your workforce.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img src="../LMS1.png" className="w-full rounded-lg mb-8" />
          <img src="../LMS2.png" className="w-full rounded-lg mb-8" />
          <img src="../LMS3.png" className="w-full rounded-lg mb-8" />
          <img src="../LMS4.png" className="w-full rounded-lg mb-8" />
        </div>
      </div>
    </div>
  );
}
