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

    // playAudio = (aduio) => {

    // }

    return (
        <div className="trackContainer">
               {!fullTrack.analysis ? <p>Loading... </p> : 
            <div className="fullTrack"> 
                <img className="albumCover" src={fullTrack.album.images[1].url} />
               <ul className="trackInfo">
                    {console.log(fullTrack)}
                   <li className='trackName'>{fullTrack.name}</li>
                   <li className='artistName'>{fullTrack.artists.map((artist, index) => artist.name +  (index + 1 < fullTrack.artists.length ? ', ' : ' '))}</li>
                    {/* <li onClick={(event)=> {}}> PLAY <audio></audio></li> */}
               </ul>
            </div>
               }
        </div>
  );
}
