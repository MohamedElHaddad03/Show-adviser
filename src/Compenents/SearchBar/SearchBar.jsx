import s from "./style.module.css"
import {Search} from "react-bootstrap-icons"

export function SearchBar({onSubmit}){
    
    function submit(event){
        if(event.key==="Enter" && event.target.value.trim()!== ""){
            onSubmit( event.target.value.trim());
        }

    }
    return <div className={s.container}>
       
      <input onKeyUp={submit} className={s.barre} style={{width : '100%'}} type="text" placeholder={"Search your Show"} />
      <Search size={15} className={s.icon}></Search>

    </div>
}