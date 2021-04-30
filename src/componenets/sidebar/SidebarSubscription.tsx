import React from 'react'

interface SidebarSubscriptionProps {
  imgSrc: string,
  text: string
}

export const SidebarSubscription: React.FC<SidebarSubscriptionProps> = ({imgSrc, text}) => {
  return (
    <div className="sidebar-subscription">
      <div className="icon">
        <img src={imgSrc}/>
      </div>
      <div className="text">
        {text}
      </div>
    </div>
  );
}