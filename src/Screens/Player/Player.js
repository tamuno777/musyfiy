import React, { useEffect, useState } from "react";
import "./Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../Spotify";
import SongCard from "../../Components/songCard/songCard"
import Queue from "../../Components/queue/queue";
import AudioPLayer from "../../Components/audioPlayer/audioPlayer";
import Widgets from "../../Components/widgets/widgets";

export default function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className="screen-container flex">
    <div className="left-player-body">
      <AudioPLayer
        currentTrack={currentTrack}
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
    </div>
    <div className="right-player-body">
      <SongCard album={currentTrack?.album} />
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
    </div>
  </div>



  )
}



 

  
   