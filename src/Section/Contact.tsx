import React from 'react';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    // style={{height: '92vh' }}
    <div
      className="columns-2 gap-5 space-y-5"
      style={{
        paddingLeft: '15%',
        paddingRight: '15%',
        minHeight: '100vh',
        alignItems: 'flex-start',
      }}
    >
      <div
        className=""
        style={{ backgroundColor: 'yellow', marginTop: '155px' }}
      >
        <div>
          <h2 className="font-outfit font-bold sm:text-5xl leading-8">
            Get in touch.
          </h2>
          <div style={{ marginTop: '25px' }}>
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

          <SocialLinks />
        </div>
      </div>
      <div className="" style={{ paddingTop: '200px', borderRadius: '20px' }}>
        <img className="w-full rounded-lg" src="../profile.jpg" alt="profile" />
      </div>
    </div>
  );
}
