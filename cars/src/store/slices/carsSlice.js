import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsSlice = createSlice({
    name : 'cars',
    initialState: {
        searchTerm : '',
        cars : []
    },
    reducers : {
        changeSearchTerm (state, action){
            state.searchTerm = action.payload;
        },
        addCars(state, action){
            state.cars.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid()
            });
        },
        removeCar(state, action){
            // Assumption : 
            //action.payload === the id of the car we want to remove

            state.cars = state.cars.filter((car) => {
                return car.id !== action.payload;
            });
        },
    }
});

export const {changeSearchTerm, addCars, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;