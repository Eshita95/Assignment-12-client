import React from 'react';
import useTools from '../Hooks/useTools';
import Tools from './Tools';

const AllTools = () => {
    const [tools] = useTools();

    return (
      <div>
        <div>
          <h1 className="  text-4xl my-10 font-semibold text-center">
            All tools Here
          </h1>
        </div>
        <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {tools?.map((tool) => (
            <Tools tool={tool}></Tools>
          ))}
        </div>
      </div>
    );
  };

export default AllTools;