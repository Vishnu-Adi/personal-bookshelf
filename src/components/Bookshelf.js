import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import './Bookshelf.css';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    setBooks(bookshelf);
  }, []);

  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = books.filter(book => book.key !== bookKey);
    setBooks(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    setToast({ message: 'Book removed from your bookshelf!', type: 'success' });
  };

  const getCoverUrl = (coverId) => `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

  return (
    <div className="bookshelf">
      <h1>My Personal Library</h1>
      <Link to="/" className="search-link">Find More Books</Link>
      {books.length > 0 ? (
        <div className="book-grid">
          {books.map(book => (
            <div key={book.key} className="book-item">
              <img 
                src={book.cover_i ? getCoverUrl(book.cover_i) : 'https://via.placeholder.com/200x300?text=No+Cover'}
                alt={`Cover of ${book.title}`}
                className="book-cover"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
              <button className="remove-book" onClick={() => removeFromBookshelf(book.key)}>×</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-shelf">Your bookshelf is empty. Add some books!</p>
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

export default Bookshelf;