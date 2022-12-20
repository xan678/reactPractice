import Link from "./Link";

const Sidebar = () => {

    const links = [
        {
            label : "Dropdown",
            path : '/'
        },
        {
            label : "Accordion",
            path : '/accordion'
        },
        {
            label : "Buttons",
            path : '/buttons'
        },
      
    ]

    const renderedLinks = links.map((link, index) => {
        return <Link activeClassName = 'font-bold border-l-4 border-blue-100 pl-2' className='mb-3' key={link.label} to = {link.path}>{link.label}</Link>;
    });

    return (
        <div className="sticky top-0 overflow-y-scrool flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;