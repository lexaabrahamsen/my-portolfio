import { websiteProjects } from '../../projectData';

export default function WebsiteWork() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-5/12 flex flex-col justify-top">
          <p className="mt-2 text-9xl font-gloock font-bold tracking-tight text-gray-900 sm:text-4xl">
            Website Work
          </p>
          <div style={{ paddingTop: '15px' }}>
            <p className="text-base font-outfit font-light leading-7 uppercase">
              Website Work
            </p>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-outfit font-light">
            Website work is a collection of websites I have designed and
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          {websiteProjects.map((project) => {
            return (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg"
                />

                <h5 className="font-outfit mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl">
                  {project.title}
                </h5>
                <p className="font-outfit font-light">{project.description}</p>
                <div style={{ paddingTop: '14px' }}>
                  <a
                    href={project.link}
                    className="uppercase text-black underline"
                  >
                    view website
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
