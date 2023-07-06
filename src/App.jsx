import { useEffect, useState } from "react";
import { TVShowApi } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { Description } from "./Compenents/Description/Description";
import { Logo } from "./Compenents/logo/logo";
import logo from "./asset/images/logo.png"
import { Recommendation } from "./Compenents/Recommendation/Recommendation";
import { SearchBar } from "./Compenents/SearchBar/SearchBar";

export function App(){
    const [currentTVShow,setCurrentTVShow]=useState();
    const [TVShowList,setTVShowList]=useState([]);

    async function fetchPopular(){
        const popular = await TVShowApi.fetchPopular();
        if(popular.length>0) setCurrentTVShow(popular[0]);
    

    }
    async function fetchRecommendation(tvShowID){
        const recomendation = await TVShowApi.fetchRecommendation(tvShowID);
        setTVShowList(recomendation.slice(0,10));
        
    }
    
    async function searchTVShow(tvShow){
        const search = await TVShowApi.fetchByTitle(tvShow);
        if(search.length >0){
            setCurrentTVShow(search[0]);
        }
        
    }
    
    function setCurrentFromRecomendation(tvShow){
        setCurrentTVShow(tvShow);
      
    }

    useEffect(() => {fetchPopular()},[]);
    useEffect(()=> { 
        if(currentTVShow){
        fetchRecommendation(currentTVShow.id);
        }},[currentTVShow]);

        
    return (
    <div className={s.main} style={{  background :currentTVShow?
         `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : 'black'}}>
        <div className={s.header}>
            <div className="row">
                <div className="col-4"> 
                    <Logo image={logo} title="U Cinema" subtitle="YOU WILL LIKE IT"></Logo>
                </div>
                <div className="col-md-12 col-lg-4">
                    <SearchBar onSubmit = {searchTVShow}/>
                </div>
            </div>
            
        </div>
        <div className={s.description} >
        {currentTVShow && < Description TVShow ={currentTVShow}/>}
        </div>
        <div className={s.recomendation}>


            {TVShowList && <Recommendation
            onClickItem={setCurrentFromRecomendation}
             list={TVShowList}  />}

        </div>
    </div>)
}