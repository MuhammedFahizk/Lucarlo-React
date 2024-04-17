import Nav from "../component/Nav"
import StoreItem from "../component/StoreItem"
import storeData from '../storeData.json'

const Store = () => {
  return (
    <div>
        <Nav value={1}/>
        <StoreItem storeItem={storeData}/>
    </div>
)
}

export default Store