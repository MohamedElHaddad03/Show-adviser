import { BACKDROP_MINI_URL } from "../../config"
import s from "./style.module.css"
export function TVShowListItem({tvShow , onClick}){

    return <div onClick = {()=> onClick(tvShow)} className={s.container}>
        <img alt={tvShow.name} className={s.image} src= {BACKDROP_MINI_URL + tvShow.backdrop_path}  />
        <div className={s.title}>{tvShow.name}</div>
    </div>
}
