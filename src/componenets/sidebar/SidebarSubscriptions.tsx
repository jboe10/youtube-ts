import React, {useState} from 'react'
import { SidebarSubscription } from './SidebarSubscription';
import profile from '../../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

interface SidebarSubscriptionsProps {

}

export const SidebarSubscriptions: React.FC<SidebarSubscriptionsProps> = () => {
  const [ ShowShortList, setShowShortList ] = useState(true); 

  const subList = [
    <SidebarSubscription imgSrc={profile} text="Jonathan Bo"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Joathan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jon Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan oeffffffss"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan Boedddd ddddd zzzzzzzzzzzzzzzzzzzzzzzzzzz"/>,
    <SidebarSubscription imgSrc={profile} text="Jonaan Boed fs ss fss"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan oed a aaaa "/>,
    <SidebarSubscription imgSrc={profile} text="Jonatn Boed dd  dd d "/>,
    <SidebarSubscription imgSrc={profile} text="Jonatan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonathan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonahan Boe"/>,
    <SidebarSubscription imgSrc={profile} text="Jonan Boe"/>
  ]
  if (ShowShortList) {
    return (
      <div className="sidebar-group g-subs">
        <h4>Subscriptions</h4>
        {
          subList.splice(0,7).map(sub => {
            return sub;
          })
        }
        <div 
          className="subs-button"
          onClick={() => setShowShortList(false)}
        >
          <FontAwesomeIcon icon={faCaretDown}/>
          <span>Show More</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-group g-subs">
        <h4>Subscriptions</h4>
        {
          subList.map(sub => {
            return sub;
          })
        }
        <div 
          className="subs-button hide-sub"
          onClick={()=> setShowShortList(true)}
        >
          <FontAwesomeIcon icon={faCaretUp}/>
          <span>Show Less</span>
        </div>
      </div>
    );
  }
}