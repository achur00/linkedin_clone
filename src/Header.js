import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt='' />
             
             <div className="header__search"> 
                <SearchIcon />
                <input type="text" />
             </div>

        </div>
    
        <div className="header__right">
       
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="network"/>
            <HeaderOption Icon={WorkIcon} title="jobs"/>
            <HeaderOption Icon={ChatBubbleIcon} title="jobs"/>
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption avatar="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/274494213_4831327116904529_1342442193163115866_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gJKycbLrDogAX9gwXO8&tn=W6DofsGjTc3oPHHm&_nc_ht=scontent-los2-1.xx&oh=00_AT9Ur3yzZq3BLLQ9TT3vP25XZZI6LV7Ly5rJB3NBDmEZuw&oe=62CB57B2" title='me'  />


            </div>


    </div>

  )
}

export default Header