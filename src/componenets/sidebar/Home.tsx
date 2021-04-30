import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="sidebar-home sidebar-category">
      <FontAwesomeIcon icon={faHome}/>
    </div>
  );
}