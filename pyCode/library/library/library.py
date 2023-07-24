from books.book import Book

class Library:
    def __init__(self):
        self.books = []
        self.available_copies = {}
        self.borrowed_books = {}

    def add_book(self, book):
        if book in self.available_copies:
            self.available_copies[book] += 1
        else:
            self.books.append(book)
            self.available_copies[book] = 1

    def display_books(self):
        if not self.books:
            print("No books in the library.")
        else:
            print("Books in the library:")
            for book in self.books:
                count = self.available_copies.get(book, 0)
                print(
                    f"Title: {book.title} | Author: {book.author} | Copies available: {count}")

    def remove_book(self, book):
        if book in self.books:
            self.books.remove(book)
            del self.available_copies[book]
            print(f"Book '{book.title}' removed successfully.")
        else:
            print("Book not found in the library.")

    def borrow_book(self, book):
        if book in self.available_copies and self.available_copies[book] > 0:
            if book in self.borrowed_books:
                print(f"You have already borrowed the book '{book.title}'.")
            else:
                self.available_copies[book] -= 1
                self.borrowed_books[book] = 1
                print(f"Book '{book.title}' borrowed successfully.")
        else:
            print(f"All copies of book '{book.title}' are currently borrowed.")

    def display_borrowed_books(self):
        if not self.borrowed_books:
            print("You haven't borrowed any books.")
        else:
            print("Borrowed Books:")
            for book in self.borrowed_books:
                print(f"Title: {book.title} | Author: {book.author}")
