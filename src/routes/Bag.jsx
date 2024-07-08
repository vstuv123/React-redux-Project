import BagSummary from "../components/BagSummary";
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'

const Bag = () => {
//   const item ={
//     id: '001',
//     image: 'images/1.jpg',
//     company: 'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     original_price: 1045,
//     current_price: 606,
//     discount_percentage: 42,
//     return_period: 14,
//     delivery_date: '10 Oct 2023',
//     rating: {
//         stars: 4.5,
//         count: 1400,
//     },
// }
  const bagItems = useSelector((store) => store.bag)
  const items = useSelector((store) => store.items)
  const finalItems = items.filter((item)=>{
    const findIndex = bagItems.indexOf(item.id);
    return findIndex >= 0;
  })

  return (
    
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item)=> <BagItem key={item.id} item={item}/>)}
          </div>
          <BagSummary />
        </div>
      </main>

  );
};
export default Bag;
