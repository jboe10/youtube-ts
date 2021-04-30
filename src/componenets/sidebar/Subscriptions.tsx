import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface SubscriptionsProps {

}

export const Subscriptions: React.FC<SubscriptionsProps> = ({}) => {
  return (
    <div className="sidebar-library sidebar-category">
      <FontAwesomeIcon icon={faPlay}/>
    </div>
  );
}