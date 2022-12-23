import { useState } from "react";
import Table from "./Table";
import {GoArrowSmallUp, GoArrowSmallDown} from 'react-icons/go'

const SortableTable = ({config, data}) => {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);


    const handleClick = (label) =>{

        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        }
        else if(sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }

    };
 
    const newConfig = config.map((object, index) => {
        if(object.sortValue){
            return {
                ...object, 
                header : () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(object.label)}>
                    <div className="flex items-center">
                        {getIcons(object.label, sortBy, sortOrder)}
                        {object.label}
                    </div>
                </th>  
            }
        }
        return object;
    });

    //Only sort data is sortOrder and sortBy are not null
    //If not, then make a copy of the 'data' prop
    //Never modify the array that is passed as a prop
    //Find the correct sortvalue function and use it for sorting

    let sortedData = data;
    if(sortOrder && sortBy){
       const {sortValue} = config.find(column => column.label === sortBy);
       
       sortedData = [...data].sort((a,b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reveseOrder = sortOrder === 'asc' ? 1 : -1;
        if(typeof valueA === 'string'){
            return valueA.localeCompare(valueB) * reveseOrder;
        }else {
            return (valueA - valueB) * reveseOrder;
        }
       });
    }

    return <Table config={newConfig} data = {sortedData}/> 
        
}

const getIcons = (label, sortBy, sortOrder) => {
    if(label !== sortBy || sortOrder === null){
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>
    }
    if(label === sortBy && sortOrder === 'asc'){
        return <div>
        <GoArrowSmallUp/>
        </div>
    }
    if(label === sortBy && sortOrder === 'desc'){
        return <div>
            <GoArrowSmallDown/>
        </div>
    }
}  

export default SortableTable;