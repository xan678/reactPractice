import { useState } from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go'

const Accordion = ({items}) => {

    const [expandedIndex, setExpandedIndex] = useState(-1); 

    const handleClick  = (nextIndex) =>{

        setExpandedIndex(currentIndex => {
            if(nextIndex === currentIndex){
                return -1;
            }else{
                return nextIndex;
            }  
        })
    }

    const renderedItems = items.map((item , index) => {
        
        const isExpanded = index === expandedIndex;
        const icon = <span>
            {isExpanded ? <GoChevronDown/> : <GoChevronRight/>}
        </span>

        return(<div key = {index}>
            <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer' onClick = {() => handleClick(index)}>
                {icon}    
                {item.label}
            </div>
            {isExpanded && <div className='border-b p-5'>{item.content}</div>}
        </div>);
    });

    return <div className='border-x border-t rounded'>{renderedItems}</div>
}

export default Accordion;