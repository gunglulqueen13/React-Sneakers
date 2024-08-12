function Drawer({ onClose, items = {} }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between align-center ">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-delete.svg"
            alt="Remove"
          />
        </h2>
        <div className="items flex">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImage"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-delete.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex align-end mb-20">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex align-end mb-20">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton d-flex align-center justify-around">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
