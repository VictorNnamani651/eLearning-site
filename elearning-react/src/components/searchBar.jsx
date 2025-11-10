import { useState } from 'react';

const SearchBar = () => {
  // State to manage the value of the search input
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Example dataset (replace with API or dynamic data)
  const data = [
    'React Basics',
    'React Hooks',
    'React Router',
    'Redux',
    'JavaScript ES6',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'GraphQL',
  ];

  // Handler function to update the state as the user types
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setSuggestions([]); // hide suggestions after selection
  };

  return (
    <section id="search">
      <div className="search-bar-container container-md" style={{ position: 'relative' }}>
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="What Do You Want To Learn Today?"
          value={searchValue}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button className="search-icon-container">
          <i className="fa fa-search search_icon"></i>
        </button>

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#fff',
              border: '1px solid #ccc',
              listStyle: 'none',
              margin: 0,
              padding: '0.5rem',
              zIndex: 10,
            }}
          >
            {suggestions.map((s, i) => (
              <li
                key={i}
                onClick={() => handleSuggestionClick(s)}
                style={{
                  padding: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
