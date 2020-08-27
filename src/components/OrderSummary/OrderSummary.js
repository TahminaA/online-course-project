import React from 'react';


const OrderSummary = (props) => {
    const item=props.item;
    console.log(item);
     const totalPrice=item.reduce((totalPrice,course) => totalPrice + course.price,0);
    

    return (
        <div>
            <h4 className=" font-weight-bold mt-5 font-italic ml-5">Order Summary</h4>
           <p className="font-italic mt-3">Total Purchase Courses: {item.length}</p>
           <p className="font-italic">Total price: {totalPrice}</p>
        </div>
    );
};

export default OrderSummary;