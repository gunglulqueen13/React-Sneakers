function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li
          className="mr-30 d-flex align-center cu-p"
          onClick={props.onClickCart}
        >
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img className="cu-p" width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
