import React from "react";
import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [items, setItems] = useState(itemData);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function handleDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode
//         </button>
//       </header>
//       <ShoppingList items={items} />
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  state = {
    items: "itemData",
    isDarkMode: "false",
  }

handleDarkModeClick() {
  return this.setIsDarkMode((isDarkMode) => !isDarkMode)
}

render() {
  return (
    <div className={"App " + (this.isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={this.handleDarkModeClick}>
          {this.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={this.items} />
    </div>
  );

}
}

export default App