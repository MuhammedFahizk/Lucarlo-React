import Nav from "../component/Nav"
import StoreItem from "../component/StoreItem"
import storeData from '../storeData.json'
import { AppContext } from "../AppContextFilter";
import { useState } from "react";

const Store = () => {
const [selectedValues, setSelectedValues] = useState([]);
const addSelectedValue = (value) => {
  setSelectedValues([...selectedValues, value]);
};

const removeSelectedValue = (value: unknown) => {
  setSelectedValues(selectedValues.filter((item) => item !== value));
};
  return (
    <div>
        <Nav value={1}/>
        <AppContext.Provider value={{ selectedValues, addSelectedValue, removeSelectedValue }}>

        <StoreItem fillers={selectedValues} storeItem={storeData}/>
        </AppContext.Provider>
    </div>
)
}

export default Store