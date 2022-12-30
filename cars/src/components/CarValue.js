import { useSelector } from "react-redux";

const CarValue = () => {

    const carValue = useSelector(({cars : {cars,searchTerm}}) => {
        return cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).reduce((acc, car) => acc + car.cost, 0);
    });

    return (
        <div className="car-value">
            Total Cost: ${carValue}
        </div>
    );
}

export default CarValue;
