import s from "./style.module.css"

export function Logo({image, title, subtitle}){

    return (<>
    <div className={s.container}>
        <div>
            <img className={s.image} src={image}  />
        <span className={s.title}> {title} </span>
        </div>
        
    </div>


    <span className={s.subtitle}>{subtitle}</span>
    </>);
}