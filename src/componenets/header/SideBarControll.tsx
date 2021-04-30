import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useContext} from 'react'
import { SidebarCollapseContext } from '../../context/SidebarCollapseContext';

interface SideBarControllProps {

}

export const SideBarControll: React.FC<SideBarControllProps> = () => {
  const collapseContext = useContext(SidebarCollapseContext);

  const toggleCollapsed = () => {
    collapseContext?.changeCollapsed(!collapseContext.collapsed)
  }

  return (
    <div className="side-bar-controll">
      <div 
        className="hamburger-menu-side-bar"
        onClick={toggleCollapsed}
      >
        <FontAwesomeIcon icon={faBars}/>
      </div>
    </div>
  );
}