import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react'

interface SidebarTopicProps {
  icon: IconProp,
  text: string
}

export const SidebarTopic: React.FC<SidebarTopicProps> = ({icon, text }) => {
  return (
    <div className="sidebar-topic">
      <div className="icon">
        <FontAwesomeIcon icon={icon}/>
      </div>
      <div className="text">
        {text}
      </div>
    </div>
  );
}