import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  variant?: 'default' | 'hero';
  initialQuery?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Search for jobs, companies or keywords...', 
  variant = 'default',
  initialQuery = '',
  onSearch
}) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(query);
    } else {
      // If no onSearch handler is provided, navigate to jobs page with query
      navigate(`/jobs?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`
      ${variant === 'hero' 
        ? 'w-full max-w-3xl mx-auto bg-white rounded-full shadow-lg overflow-hidden' 
        : 'w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200'}
    `}>
      <div className="flex items-center px-4">
        <Search className={`
          ${variant === 'hero' ? 'h-6 w-6 text-gray-500' : 'h-5 w-5 text-gray-400'}
        `} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full border-none outline-none bg-transparent
            ${variant === 'hero' ? 'py-4 px-3 text-lg' : 'py-2 px-3 text-base'}
          `}
        />
        <button
          type="submit"
          className={`
            rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${variant === 'hero' 
              ? 'px-6 py-4 bg-blue-600 text-white text-lg hover:bg-blue-700' 
              : 'px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700'}
          `}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;