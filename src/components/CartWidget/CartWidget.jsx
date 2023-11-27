import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="item-count">1</span>
    </div>
  );
}

export default CartWidget;
