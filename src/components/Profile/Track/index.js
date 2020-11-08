import React, {useEffect, useState} from "react";
import "./styles.css"
import spotify from "../../../util/spotify"

export default function Track({track, token}) {
    const [fullTrack, setAnalysis] = useState(track)

    useEffect(()=>{
        const getAnalysist = () => {
             spotify.getTrackAnalysis(token, track.id)
            .then(data => { setAnalysis({...track, analysis: {...data}})})
        }
        getAnalysist()
    },[track, token])
    

    return (
        <div className="trackContainer">
               {!fullTrack.analysis ? <p>Loading... </p> : 
               <ul>
                   <li>{fullTrack.name}</li>
                   {fullTrack.artists.map(artist => {
                       <li>{artist.name}</li>
                   })}
               </ul>
               }
        </div>
  );
}
