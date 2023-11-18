import React, { FunctionComponent } from 'react';

interface TitleHeaderProps {
  title: string;
}

const TitleHeader: FunctionComponent<TitleHeaderProps> = (props) => {
  return (
    <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-4xl sm:mt-1 mt-80 space-y-8 text-left sm:text-left sm:ml-auto">
        <h6 className="text-5xl font-gloock mb-1 font-extrabold">
          {props.title}
        </h6>
      </div>
    </div>
  );
};

export default TitleHeader;
