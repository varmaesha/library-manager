from library.library import Library
from books.book import Book

def main():
    library = Library()

    while True:
        print("\nLibrary Management System")
        print("1. Add Book")
        print("2. Remove Book")
        print("3. Display Books")
        print("4. Borrow Book")
        print("5. Exit")

        choice = input("Enter your choice (1-6): ")

        if choice == "1":
            title = input("Enter the book title: ")
            author = input("Enter the book author: ")
            book = Book(title, author)
            library.add_book(book)
            print("Book added successfully.")
        elif choice == "2":
            title = input("Enter the book title: ")
            author = input("Enter the book author: ")
            book = Book(title, author)
            try:
                library.remove_book(book)
                print("Book removed successfully.")
            except ValueError:
                print("Book not found in the library.")
        elif choice == "3":
            library.display_books()
        elif choice == "4":
            library.display_borrowed_books()
            title = input("Enter the book title: ")
            author = input("Enter the book author: ")
            book = Book(title, author)
            library.borrow_book(book)
        elif choice == "5":
            print("Leaving the Library. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
