import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css"

export function Recommendation({list,onClickItem}){
    
    return <div >
        <h3>You may also like</h3>

       <div className={s.list}> {list.map((Show)=>{
            return <TVShowListItem key={Show.id} onClick={()=>{onClickItem(Show)}} tvShow={Show}/> 
        })}</div>
    </div>

    
}