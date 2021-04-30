import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';

interface SearchBarProps {

}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="header-search-bar">
      <InputGroup className="">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon={faSearch}/>
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <div className="voice-search">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </div>
  );
}