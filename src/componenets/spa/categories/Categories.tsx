import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect, useRef} from 'react';

interface CategoriesProps {

}

const categories: string[] = [
  'DND', 'Fishing', 'GTA V', 'Summit1g',
  'Coding', 'Surfing', 'Nathan Florence',
  'VolleyBall', 'i_o', 'Drum and Bass',
  'Squad','Warcraft','Warhammer 40,000',
  'Science','Windmills','League of Legends',
  'Carolina Panthers', 'Grand Theft Auto V'
];

export const Categories: React.FC<CategoriesProps> = () => {
  
  const categoryEle = useRef<HTMLDivElement | null>(null);
  const [leftButtonShow, setLeftButtonShow] = useState<boolean>(false);
  const [rightButtonShow, setRightButtonShow] = useState<boolean>(true); 


  // control showing and not showing appropriate arrows based on scrolling
  useEffect(() => {
    const listButtonToggle = (element: any) => {
      if ((element.scrollWidth - element.offsetWidth) === element.scrollLeft) {
        setRightButtonShow(false);
      }
      if((element.scrollWidth - element.offsetWidth) > element.scrollLeft) {
        setRightButtonShow(true);
      }
      if (element.scrollLeft === 0) {
        setLeftButtonShow(false);
      }
      if (element.scrollLeft > 0) {
        setLeftButtonShow(true);
      }
    }

    if(categoryEle.current) {
      categoryEle.current.addEventListener('scroll', () => listButtonToggle(categoryEle.current))
    }

    return () => {
      if(categoryEle.current) {
        categoryEle.current.removeEventListener('scroll', () => listButtonToggle(categoryEle.current) )
      }
    }
  },[categoryEle])
  
  const scrollHandler = (direction: string, element: any):void => {
    if (element) {
      if (direction === 'L') {
        element.scrollBy({
          top: 0,
          left: -500,
          behavior: 'smooth'
        })
      } else {
        element.scrollBy({
          top: 0,
          left: 500,
          behavior: 'smooth'
        })
      }
    }
  }
  
  return (
    <div className="video-categories-wrap" ref={categoryEle}>
      <div className="video-categories" >
        { leftButtonShow && 
          <div className="scroll-arrow" onClick={() => scrollHandler('L', categoryEle.current)}>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </div>
        }

        { rightButtonShow && 
          <div className="scroll-arrow right" onClick={() => scrollHandler('R', categoryEle.current)}>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
          </div>
        }
        {
          categories.map(cat => {
            return <a href="/">
              <div className="category-bubble">
                <div className="cat-name">
                  {cat}
                </div>
              </div>
            </a>
          })
        }
      </div>
    </div>
  );
}