import React from 'react';

import './feedback.css'
const Feedback = ({rating, getDelete}) => {
   
   
    console.log(getDelete);
     const deleteRating =()=>{
    //    fetch(`https://server-08ld.onrender.com/deleteRating/${rating._id}`,{
       fetch(`https://server-08ld.onrender.com/deleteRating/${rating._id}`,{
        method :"DELETE"
       })
       .then(res => res.json())
       .then(data =>{
        // getDelete(data)
        getDelete({data, rating})
        
        
       })
     }
    
    return (
        <div className="cart">
      <h3>ORDER ID: {rating._id}</h3>
      <div className="cart-item">
        {
         <>
        {  rating.orders.map(order=>(
            <p>{order.quantity} {order.name}</p>
          ))}
          {rating.foodQuality === "" ? (
          <h3>Total:  {rating.orders.reduce((total, item) => total + item.price * item.quantity, 0)}tk</h3>
        ) : (
          
          <h3>Total: {rating.bill}tk (after 10% dis.)</h3>
        )}
          
         </>
        }
        <p>Cleanliness: {rating.cleanliness}</p>
        <p>Food Quality: {rating.foodQuality}</p>
        <p>Order Accuracy: {rating.orderAccuracy}</p>
        <p>Overall Experience: {rating.overallExperience}</p>
        <p>Overall Service Quality: {rating.overallServiceQuality}</p>
        <p>Speed of Service: {rating.speedOfService}</p>
        <p>Text: {rating.text}</p>
        <p>Value: {rating.value}</p>
      </div>
      <button onClick={deleteRating}   style={{
                margin:"5px",
                            padding: "10px",
                            style:"none",
                            border:"none",
                            fontSize: "20px",
                            cursor: "pointer"

                        }}>Delete</button>
    </div>
    );
};

export default Feedback;