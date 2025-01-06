import React, { useEffect, useState } from "react";
import { dishesData } from "./data";
import Dish from "./dish";
import '../styles/App.css';

const filterButtonDetails = [
    { name: 'All', value: 'all', data_test_id: 'menu-item-all', id: 'filter-btn-0' },
    { name: 'Breakfast', value: 'breakfast', data_test_id: 'menu-item-breakfast', id: 'filter-btn-1' },
    { name: 'Lunch', value: 'lunch', data_test_id: "menu-item-lunch", id: "filter-btn-3" },
    { name: 'Shakes', value: 'shakes', data_test_id: "menu-item-shakes", id: "filter-btn-2" }
];

function App() {
    const [data, setData] = React.useState(dishesData);
    const [filterButtons, setFilterButtons] = useState([]);
    const [hiddenButton, setHiddenButton] = useState('all');

    useEffect(() => {
        let Buttons = filterButtonDetails.filter((btn) => btn.value != hiddenButton);
        setFilterButtons(Buttons);
    },[hiddenButton]);

    const handleFilter = (category) => {
        if (category == 'all') {
            const filteredData = dishesData;
            setHiddenButton(category);
            setData(filteredData);
        }
        else {
            let filteredData = dishesData.filter((dish) => dish.category == category);
            setHiddenButton(category);
            setData(filteredData);
        }
    }


    return <div id="main">
        <h1>Our Menu</h1>
        <div className="filters">
            {
                filterButtons.map((button) => (
                    <button
                        key={button.id}
                        value={button.value}
                        data-test-id={button.data_test_id}
                        id={button.id}
                        onClick={() => handleFilter(button.value)}
                    >
                        {button.name}
                    </button>
                ))
            }
        </div>
        <div className="dishedContainer">
            {
                data.map((dish) => <Dish key={dish.id} details={dish} />)
            }
        </div>
    </div>
}

export default App;
