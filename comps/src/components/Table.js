import { Fragment } from "react";

const Table = ({data , config}) => {
    const renderTable = data.map((fruit) => {

        const renderComps = config.map((object, index) => {
            return <td key = {object.label} className = "p-3">{object.render(fruit)}</td>
        })

        return (<tr className="border-b" key = {fruit.name}>
            {renderComps}
        </tr>);
    });

    const renderConfig = config.map((object) => {

        if(object.header){
            return <Fragment key= {object.label}>{object.header()}</Fragment>;
        }
        return <th key = {object.label}>{object.label}</th>
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderConfig}
                </tr>
            </thead>
            <tbody>
                {renderTable}
            </tbody>
        </table>
    );
}

export default Table;