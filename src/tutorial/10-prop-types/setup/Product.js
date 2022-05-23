import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  //Providng default values using short circuit operator
  const url = image && image.url;
  // console.log(image, name, price);
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h3>{name}</h3>
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default value",
//   image: defaultImage,
//   price: 3.99,
// };

export default Product;
