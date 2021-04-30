import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SearchBar } from './SearchBar'
import {SideBarControll} from './SideBarControll';
import { UserHotbar } from './UserHotbar'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="main-header-wrap">
      <SideBarControll/>
      <header className="main-header">
        <a href="/" className="home-logo-link">
          <FontAwesomeIcon icon={faYoutube}/>
        </a>
        <SearchBar/>
        <UserHotbar/>
      </header>
    </div>
  );
}