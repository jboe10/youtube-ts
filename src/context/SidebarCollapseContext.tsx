import React from 'react';

export interface SidebarContextType {
  collapsed: boolean
  changeCollapsed: any;
}

export const SidebarCollapseContext = React.createContext<SidebarContextType | null>(null);