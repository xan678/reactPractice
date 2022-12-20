import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({children, to, className, activeClassName}) => {

    const {navigate, currentPath} = useNavigation();

    const classes = classNames(
            'text-blue-500', 
            className,
            currentPath=== to && activeClassName
        );

    const handleClick = (event) => {
        if(event.ctrlKey || event.metaKey) {
            return;
        }
        //console.log(event);
        event.preventDefault();
        navigate(to);
    }

    return <a className = {classes}href={to} onClick={handleClick}>{children}</a>
}

export default Link;