import React from "react";
import './Sidebar.css' 
import Sidebarbutton from './Sidebarbutton'
// import ProfilePic from "../../United/asset/john-doe-image.png";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { useEffect, useState } from 'react'
import apiClient from "../../Spotify";



export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='nav-container'>
        <img src={image} alt="profile"  className='profile-img'/>
        <div>
            <Sidebarbutton title="Feeds" to="/Feeds" icon={<MdSpaceDashboard />}/>
            <Sidebarbutton title="Trending" to="/Trending" icon={<FaGripfire />}/>
            <Sidebarbutton title="Player" to="/Player" icon={<FaPlay />}/>
            <Sidebarbutton title="Favourites" to="/Favourites" icon={<MdFavorite />}/>
            <Sidebarbutton title="Library" to="/" icon={<IoLibrary />} />
            
            
        </div>
        <Sidebarbutton title="Sign Out" to="" icon={<FaSignOutAlt />} />

    
    </div>
    
  )
}
