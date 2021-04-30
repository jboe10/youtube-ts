import React, { useState } from 'react';
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
  

  return (
    <SidebarCollapseContext.Provider value={defaultCollapseContext}>
      <div className="App">
        <div className="home-page">
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
