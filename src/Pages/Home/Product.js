import React from 'react';
import useTools from '../Hooks/useTools';
import Tools from '../Tools/Tools';


const Product = () => {
    const [tools] = useTools();
  const allTools = tools?.slice(0, 4);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {allTools?.map((tool) => (
        <Tools tool={tool}></Tools>
      ))}
    </div>
  );
};
export default Product;