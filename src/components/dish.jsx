import React from "react";

const Dish = ({details}) => {

    const {id, title, category, price, img, desc} = details;
    
    return <div key={id} className="dish-card">
        <div className="img-container">
            {/* <img src={img} alt={title} /> */}
            <div className="image"></div>
        </div>
        <div className="details">
            <div className="title-price">
                <div>{title}</div>
                <div>{price}</div>
            </div>
            <hr />
            <div className="description">
                {desc}
            </div>
            <div>Category: {category}</div>
        </div>
    </div>
}

export default Dish;
