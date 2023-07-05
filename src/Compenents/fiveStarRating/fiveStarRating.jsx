import s from "./style.module.css";
import {Star , StarFill, StarHalf} from "react-bootstrap-icons";
const stars=[<Star/>,<Star/>,<Star/>,<Star/>,<Star/>];
export function FiveStarRating({rating}){
   
        let i=0;
        for (let index = 0; index < Math.floor(rating); index++) {
            stars[index]= <StarFill/>   ;
            i++;  
            if(rating-i > 0.5 && rating-i<1) stars[i] = <StarHalf/> ;
        }


    return (<div >
           {stars}
         </div>);
}