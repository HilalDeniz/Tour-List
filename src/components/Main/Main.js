import "./Main.scss";
import  Card from "./Card";
import {data} from "../../helpers/data";

const Main = () => {
    console.log(data);
    return (
        <div className="card-container">
            {data.map((item, index) => ( 
                // I can send data to Card.js as props.
                <Card {...item}
                key={index}/>
            ))}
        </div>
    )
}

export default Main;