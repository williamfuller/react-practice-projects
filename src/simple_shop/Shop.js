import './Shop.css';
import {useState} from "react";

const shopItems = [
  {
    "img_url" : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Flaptop-desk-computer-work-man-working-coffee-people-technology-internet-sitting-corporate-office-professional-business-modern-workstation-label-monitor-brand-product-design-eye-document-644378.jpg&f=1&nofb=1&ipt=519fdaf6a93ae4aa9f8e3606855984825305916fd654d5c8de113807398d0e6b&ipo=images",
    "title" : "Laptop",
    "description" : "The best laptop a person can buy",
    "price": 1079,
  },
  {
    "img_url" : "https://www.thecoldwire.com/wp-content/uploads/2021/09/Bunch-of-ripened-bananas-at-grocery-store.jpeg",
    "title" : "Bunch of Bananas",
    "description" : "We got potasium",
    "price": 3,
  }
]

const ItemQuantityDisplay = () => {
  const [quantityInCart, setQuantityInCart] = useState(0)

  return (
    <div className="item-quanity-display">
      <button className={quantityInCart === 0 ? "":"hide"} onClick={() => setQuantityInCart(quantityInCart + 1)}>Add To Cart</button>
      <div className={quantityInCart === 0 ? "hide":""}>
        <button onClick={() => setQuantityInCart(quantityInCart - 1)}>-</button>
        <input type="text" value={quantityInCart} readOnly></input>
        <button onClick={() => setQuantityInCart(quantityInCart + 1)}>+</button>
      </div>
    </div>
  )
}

const ShopItem = ({shopItem}) =>{

  return(
    <div className="shop-item">
      <img alt={shopItem.title} src={shopItem.img_url}></img>
      <h2>{shopItem.title}</h2>
      <p>{shopItem.description}</p>
      <p>{shopItem.price} $</p>
      <ItemQuantityDisplay />
    </div>
  )
}

function Shop() {
  return (
    <div className="shop-container">
      {shopItems.map(shopItem => ShopItem({shopItem}))}
    </div>
  );
}

export default Shop;
