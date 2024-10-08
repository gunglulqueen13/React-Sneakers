import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState, useEffect } from "react";
function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    fetch("https://66b494489f9169621ea39447.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
  const onAddToCart = (obj) => {
    setCartItems((prev) => {
      if (
        typeof prev.find((item) => item.title === obj.title) === "undefined"
      ) {
        return [...prev, obj];
      } else {
        return prev;
      }
    });
  };

  const onRemoveOnCart = (obj) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.title === obj.title)) {
        return prev.filter((item) => item.title !== obj.title);
      } else {
        return prev;
      }
    });
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(0)} items={cartItems} />
      )}
      <Header onClickCart={() => setCartOpened(1)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" />
            <input
              value={searchValue}
              onChange={onChangeSearch}
              placeholder="Поиск..."
            />
            <img
              onClick={() =>setSearchValue('')}
              className="clear cu-p"
              src="/img/btn-delete.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className=" items d-flex flex-wrap">
          {items.filter(value => value.title.toLowerCase().includes(searchValue.toLowerCase())).map((value) => (
            <Card
              key={value.title}
              title={value.title}
              imageUrl={value.imageUrl}
              price={value.price}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
              onDelete={(obj) => onRemoveOnCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
