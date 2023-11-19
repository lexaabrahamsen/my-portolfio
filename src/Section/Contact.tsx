import React from 'react';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    // style={{height: '92vh' }}
    <div
      className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
      style={{
        paddingTop: '10%',
        paddingLeft: '15%',
        paddingRight: '15%',
        minHeight: '100vh',
      }}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-outfit font-bold sm:text-5xl leading-8">
            Get in touch.
          </h2>
          <div style={{ marginTop: '25px' }}>
            <h1
              className="font-outfit uppercase"
              style={{
                fontWeight: 500,
                paddingBottom: '8px',
                color: 'lightgrey',
              }}
            >
              About Me
            </h1>
            <p className="font-outfit">
              Compulsive learner with a discerning eye. Thrive on challenges,
              motivated by making things that matter. Educational background in
              Economics and Psychology which helps frame my perspective on what
              moves humanity.
            </p>
            <br />
            <br />
            <p className="font-outfit">
              Frontend Developer and former UI designer. With a background in
              Economics and Psychology, I bring a unique perspective to crafting
              digital experiences. For the past decade, I've been weaving
              together aesthetics and functionality, creating interfaces that
              not only look good but resonate deeply with users. I thrive on
              challenges and stay ahead of the curve, constantly evolving in the
              ever-changing tech landscape.
            </p>
            {/* <br /> */}
            <br />
          </div>
          <div style={{ marginTop: '25px' }}>
            <h1
              className="font-outfit uppercase"
              style={{
                fontWeight: 400,
                paddingBottom: '8px',
                color: 'lightgrey',
              }}
            >
              Latest learnings
            </h1>
            <div className="">
              <div
                className="flex items-center"
                style={{ paddingBottom: '8px' }}
              >
                <div style={{ paddingRight: '15px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-amazon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a89.521 89.521 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432c-.199.022-.407.044-.621.065-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533ZM.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299l.142.087Z" />
                    <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115-.191.154-.333.094-.23-.137.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009c-.095.008-.172.017-.233.024-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623Z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/learning/software-architecture-domain-driven-design/what-is-ddd?autoSkip=true&resume=false&u=138906977"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontStyle: 'italic' }}
                  >
                    AWS - Software Architecture: Domain-Driven Design
                  </a>
                </div>
              </div>
              <div
                className="flex items-center"
                style={{ paddingBottom: '8px' }}
              >
                <div style={{ paddingRight: '15px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-amazon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a89.521 89.521 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432c-.199.022-.407.044-.621.065-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533ZM.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299l.142.087Z" />
                    <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115-.191.154-.333.094-.23-.137.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009c-.095.008-.172.017-.233.024-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623Z" />
                  </svg>
                </div>
                <a
                  href="https://aws.amazon.com/training/classroom/developing-on-aws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontStyle: 'italic' }}
                >
                  AWS Developing on AWS Course
                </a>
              </div>
              <div
                className="flex items-center"
                style={{ paddingBottom: '8px' }}
              >
                <div style={{ paddingRight: '15px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-meta"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.coursera.org/learn/advanced-react?specialization=meta-front-end-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontStyle: 'italic' }}
                >
                  Coursera Advanced React
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '25px' }}>
            <a
              href="mailTo:lexaraea@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="underline font-gloock"
            >
              lexaraea@gmail.com
            </a>
          </div>
          <div style={{ marginTop: '25px' }}>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="" style={{ borderRadius: '20px', paddingBottom: '8px' }}>
        <img className="w-full rounded-lg" src="../profile.jpg" alt="profile" />
      </div>
    </div>
  );
}
