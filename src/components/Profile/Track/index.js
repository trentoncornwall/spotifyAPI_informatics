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
               {!fullTrack.analysis ? <p>Loading... </p> : <p>{fullTrack.name}{console.log(fullTrack)}</p>}
        </div>
  );
}
