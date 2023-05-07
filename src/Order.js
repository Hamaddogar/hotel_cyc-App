import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
function Order(props) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
}

export default Order;