import { useEffect, useState } from 'react';

const UseOrder = (user) => {
    const [myOrders, setMyOrders] = useState();

    useEffect(() => {
      const email = user?.email;
      const url = `https://assignment-12-server-g2z9.vercel.app/orders/${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMyOrders(data);
        });
    }, [user]);
  
    return [myOrders];
  };

export default UseOrder;