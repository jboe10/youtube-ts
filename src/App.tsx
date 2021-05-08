import React, { useState, useEffect, useRef} from 'react';
import { Header } from './componenets/header/Header';
import { Sidebar } from './componenets/sidebar/Sidebar';
import { SpaHome } from './componenets/spa/SpaHome';
import { SidebarCollapseContext, SidebarContextType } from './context/SidebarCollapseContext';


function App() {
  
  const [sidebarCollapse, setSidebarCollapse] = useState(true);
  const defaultCollapseContext: SidebarContextType = {
    collapsed: sidebarCollapse,
    changeCollapsed: setSidebarCollapse
  }
  const homePageEle = useRef<null| HTMLDivElement>(null);

  useEffect(() => {
    const setResize = () => {
      if (homePageEle.current) {
        homePageEle.current.style.maxHeight = `${window.innerHeight}px`;
        homePageEle.current.style.height =  `${window.innerHeight}px`;
      }
    }
    setResize();
    window.addEventListener("resize", setResize);

    return () => {
      window.removeEventListener("resize", setResize);
    }
  }, [])
  

  return (
    <SidebarCollapseContext.Provider value={defaultCollapseContext}>
      <div className="App" ref={homePageEle}>
        <div className="home-page" >
          <Header/>
          <div className="body">
            <Sidebar/>
            <SpaHome/>
          </div>
        </div>
      </div>
    </SidebarCollapseContext.Provider>
  );
}

export default App;
