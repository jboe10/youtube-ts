import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface LibraryProps {

}

export const Library: React.FC<LibraryProps> = ({}) => {
  return (
    <div className="sidebar-library sidebar-category">
      <FontAwesomeIcon icon={faBook}/>
    </div>
  );
}