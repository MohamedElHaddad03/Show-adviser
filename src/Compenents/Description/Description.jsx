import s from "./style.module.css"
import { FiveStarRating } from "../fiveStarRating/fiveStarRating";

export function Description({TVShow}){
const rating = TVShow.vote_average/2;
    return (
    <div>
        <div className={s.titre}>{TVShow.name}</div>
        <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={s.rating}> {rating}/5 </div>
        </div>
        
        <div className={s.details}>{TVShow.overview}</div> 
    </div>);
}
