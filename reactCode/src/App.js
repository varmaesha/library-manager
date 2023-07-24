import React, { useState } from 'react';
import './App.css';

// Sample data for books in the library
const initialBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1', copies: 2 },
  { id: 2, title: 'Book 2', author: 'Author 2', copies: 1 },
  { id: 3, title: 'Book 3', author: 'Author 3', copies: 3 },
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [message, setMessage] = useState('');

  // Function to display books in the library
  const displayBooks = () => {
    if (books.length === 0) {
      return <p>No books in the library.</p>;
    } else {
      return (
        <div>
          <p>Books in the library:</p>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author} (Copies available: {book.copies})
                <button onClick={() => borrowBook(book)}>Borrow</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  // Function to borrow a book
  const borrowBook = (book) => {
    if (borrowedBooks.some((b) => b.id === book.id)) {
      setMessage(`You have already borrowed '${book.title}'.`);
    } else if (borrowedBooks.length >= 2) {
      setMessage('You have already borrowed 2 books. Return some to borrow more.');
    } else {
      const updatedBooks = books.map((b) =>
        b.id === book.id ? { ...b, copies: b.copies - 1 } : b
      );
      setBooks(updatedBooks);
      setBorrowedBooks([...borrowedBooks, book]);
      setMessage(`You borrowed '${book.title}' successfully.`);
    }
  };

  // Function to return a book
  const returnBook = (book) => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, copies: b.copies + 1 } : b
    );
    setBooks(updatedBooks);
    setBorrowedBooks(borrowedBooks.filter((b) => b.id !== book.id));
    setMessage(`You returned '${book.title}' successfully.`);
  };

  // Function to display borrowed books
  const displayBorrowedBooks = () => {
    if (borrowedBooks.length === 0) {
      return <p>You haven't borrowed any books.</p>;
    } else {
      return (
        <div>
          <p>Borrowed Books:</p>
          <ul>
            {borrowedBooks.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author}
                <button onClick={() => returnBook(book)}>Return</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Library Management</h1>
      {displayBooks()}
      {displayBorrowedBooks()}
      <p>{message}</p>
    </div>
  );
};

export default App;
