import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import './BookSearch.css';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query.trim()) {
        setLoading(true);
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`);
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
      } else {
        setBooks([]);
      }
    };

    const debounce = setTimeout(fetchBooks, 500);
    return () => clearTimeout(debounce);
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    if (!bookshelf.some(b => b.key === book.key)) {
      localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
      setToast({ message: 'Book added to your bookshelf!', type: 'success' });
    } else {
      setToast({ message: 'This book is already in your bookshelf!', type: 'info' });
    }
  };

  const getCoverUrl = (coverId) => `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

  return (
    <div className="book-search">
      <h1>Discover Your Next Read</h1>
      <div className="search-container">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, or keyword..."
        />
        <Link to="/bookshelf" className="bookshelf-link">My Bookshelf</Link>
      </div>
      {loading ? (
        <div className="loading">Loading books...</div>
      ) : (
        <div className="book-list">
          {books.map(book => (
            <div key={book.key} className="book-card">
              <img 
                src={book.cover_i ? getCoverUrl(book.cover_i) : 'https://via.placeholder.com/200x300?text=No+Cover'}
                alt={`Cover of ${book.title}`}
                className="book-cover"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
              <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
            </div>
          ))}
        </div>
      )}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
};

export default BookSearch;