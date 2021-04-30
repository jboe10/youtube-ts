import { faBook, faBroadcastTower, faCaretSquareRight, faClock, faCog, faCompass, faFilm, faFlag, faGamepad, faHome, faLightbulb, faPlay, faQuestion, faQuestionCircle, faThumbsUp, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { SidebarCollapseContext } from '../../context/SidebarCollapseContext';
import { SidebarTopic } from './SidebarTopic';
import { SidebarSubscriptions } from './SidebarSubscriptions';
import { faBluetoothB, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = () => {

  const collapseContext = useContext(SidebarCollapseContext);

  const toggleCollapsed = () => {
    collapseContext?.changeCollapsed(!collapseContext.collapsed)
  }

  if(collapseContext?.collapsed) {
    return (
      <div className="home-sidebar-collapsed">
        <div className="collapsed-sidebar-category">
          <FontAwesomeIcon icon={faHome}/>
        </div>
        <div className="collapsed-sidebar-category">
          <FontAwesomeIcon icon={faCompass}/>
        </div>
        <div className="collapsed-sidebar-category">
          <FontAwesomeIcon icon={faBook}/>
        </div>
        <div className="collapsed-sidebar-category">
          <FontAwesomeIcon icon={faPlay}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-sidebar">
        <div className="sidebar-home sidebar-category">
          <div className="sidebar-group g-one">
            <SidebarTopic icon={faHome} text="Home"/>
            <SidebarTopic icon={faCompass} text="Explore"/>
            <SidebarTopic icon={faPlay} text="Subscriptions"/>
          </div>
          <div className="sidebar-group g-two">
            <SidebarTopic icon={faBook} text="Library"/>
            <SidebarTopic icon={faClock} text="History"/>
            <SidebarTopic icon={faCaretSquareRight} text="Your videos"/>
            <SidebarTopic icon={faClock} text="Watch later"/>
            <SidebarTopic icon={faThumbsUp} text="Liked videos"/>
          </div>
          <SidebarSubscriptions/>
          <div className="sidebar-group g-more">
            <h4>More from Youtube</h4>
            <SidebarTopic icon={faGooglePlay} text="Youtube Premium"/>
            <SidebarTopic icon={faFilm} text="Movies n Shows"/>
            <SidebarTopic icon={faGamepad} text="Gaming"/>
            <SidebarTopic icon={faBroadcastTower} text="Live"/>
            <SidebarTopic icon={faHome} text="Fashion n Beauty"/>
            <SidebarTopic icon={faLightbulb} text="Learning"/>
            <SidebarTopic icon={faTrophy} text="Sports"/>
            <SidebarTopic icon={faHome} text="Home"/>
          </div>
          <div className="sidebar-group g-settings">
            <SidebarTopic icon={faCog} text="Settings"/>
            <SidebarTopic icon={faFlag} text="Report History"/>
            <SidebarTopic icon={faQuestionCircle} text="Help"/>
            <SidebarTopic icon={faBluetoothB} text="Send Feedback"/>
          </div>
          <div className="sidebar-link">

          </div>
        </div>
      </div>
    );
  }
}