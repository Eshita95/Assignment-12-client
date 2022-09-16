import { useEffect, useState } from 'react';

const UseOrder = (user) => {
    const [myOrders, setMyOrders] = useState();

    useEffect(() => {
      const email = user?.email;
      const url = `http://localhost:5000/orders/${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMyOrders(data);
        });
    }, [user]);
  
    return [myOrders];
  };

export default UseOrder;