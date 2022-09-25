import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState();

    useEffect(() => {
      const url = `https://assignment-12-server-g2z9.vercel.app/product`;
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTools(data);
        });
    }, []);
  
    return [tools];
  };

export default useTools;