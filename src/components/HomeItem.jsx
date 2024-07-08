import { useDispatch, useSelector } from "react-redux";
import { bagCartActions } from "../store/bagCartSlice";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const elementFound = bagItems.indexOf(item.id) >= 0;
 
  const handleAddBagButton = () => {
    dispatch(bagCartActions.addToBag(item.id));
  };
  const handleRemoveButton = () => {
    dispatch(bagCartActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveButton}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddBagButton}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
