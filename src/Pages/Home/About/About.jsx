import { useContext } from "react";
import { authdata } from "../../../AuthProvider/AuthProvider";

const About = () => {
    const receivedata=useContext(authdata);
    
    return (
        <div>
            {receivedata.data}
           
        </div>
    );
};

export default About;