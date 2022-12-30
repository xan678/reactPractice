import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {

    const dispatch = useDispatch();

    const {cars, name} = useSelector(({form,cars : {cars, searchTerm}}) => {
        const filteredCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        
        return {
            cars : filteredCars,
            name : form.name,
        }
    });
    
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
    
    const renderCars = cars.map((car, index) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (<div key = {car.id} className = {`panel ${bold && 'bold'}`}>
            <p>
                {car.name} - ${car.cost}
            </p>
            <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                Delete
            </button>
        </div>
        );
    })

    return (<div className="car-list">
        {renderCars}
        <hr/>
    </div>);
}

export default CarList;
