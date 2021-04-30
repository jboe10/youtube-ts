import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface ExploreProps {

}

export const Explore: React.FC<ExploreProps> = ({}) => {
  return (
    <div className="sidebar-explore sidebar-category">
      <FontAwesomeIcon icon={faCompass}/>
    </div>
  );
}