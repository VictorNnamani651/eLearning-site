import { useState } from 'react';

const SearchBar = () => {
  // State to manage the value of the search input
  const [searchValue, setSearchValue] = useState('');

  // Handler function to update the state as the user types
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section id="search">
      <div className="search-bar-container container-md">
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="What Do You Want To Learn Today?"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="search-icon-container">
          <i className="fa fa-search search_icon"></i>
        </button>
      </div>
    </section>
  );
};

export default SearchBar;