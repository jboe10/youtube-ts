import React from 'react'
import { Categories } from './categories/Categories'
import { Videos } from './video/Videos'

interface SpaHomeProps {

}

export const SpaHome: React.FC<SpaHomeProps> = () => {
  return (
    <div className="spa-home">
      <Categories/>
      <Videos/>
    </div>
  );
}