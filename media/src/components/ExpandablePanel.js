import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const ExpandablePanel = ({header, children}) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div className = "mb-2 border rounded" onClick={handleClick}>
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                <div className='flex flex-row items-center justify-between'>
                {header}
                </div>
                <div onClick={handleClick}>
                    {expanded ? <GoChevronDown/> : <GoChevronLeft/>}
                </div>
            </div>
            {
                expanded && <div className="p-2 border-t">
                {children}
            </div>
            }
        </div>
    );

}

export default ExpandablePanel;