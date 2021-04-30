import { faBell, faTh, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect} from 'react'
import profile from '../../images/profile.jpg'

interface UserHotbarProps {

}

export const UserHotbar: React.FC<UserHotbarProps> = () => {

  const button = document.querySelector('.button')
  
  useEffect(() => {
    const buttons = document.querySelectorAll('.user-hotbar-button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('is-active')
      })
    })

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', () => {
          button.classList.toggle('is-active')
        })
      })
    }
  })
  return (
    <div className="user-hotbar">
      <button className="user-hotbar-button">
        <FontAwesomeIcon icon={faVideo}/> 
      </button>
      <button className="user-hotbar-button">
       <FontAwesomeIcon icon={faTh}/>
      </button>
      <button className="user-hotbar-button">
        <FontAwesomeIcon icon={faBell}/>
      </button>
      <button className="user-hotbar-profile-button">
        <img src={profile} alt="profile-pic"/>
      </button>
    </div>
  );
}