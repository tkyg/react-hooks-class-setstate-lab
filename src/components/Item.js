import React from "react";

// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false);

//   function handleAddToCartClick() {
//     setIsInCart((isInCart) => !isInCart);
//   }

//   return (
//     <li className={isInCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button
//         className={isInCart ? "remove" : "add"}
//         onClick={handleAddToCartClick}
//       >
//         {isInCart ? "Remove From" : "Add to"} Cart
//       </button>
//     </li>
//   );
// }

// export default Item;

class Item extends React.Component {
  state = {
    isInCart: "false",
  }

  handleAddToCartClick() {
    return this.setIsinCart((isInCart) => !isInCart)
  }

  render() {
  return (
    <li className={this.isInCart ? "in-cart" : ""}>
    <span>{this.name}</span>
    <span className="category">{this.category}</span>
    <button
      className={this.isInCart ? "remove" : "add"}
      onClick={() => this.handleAddToCartClick()}
    >
      {this.isInCart ? "Remove From" : "Add to"} Cart
    </button>
  </li>

  )
}
}

export default Item