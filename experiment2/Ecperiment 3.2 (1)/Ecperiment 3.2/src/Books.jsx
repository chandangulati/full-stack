import { useState } from "react";

function Books1() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const addBook = () => {
    if (title.trim() === "" || author.trim() === "") {
      alert("Please enter both Title and Author!");
      return;
    }

    const newBook = { title, author };
    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
  };


  return (
    <div>
      <input
        style={{ marginBottom: "10px", padding: "5px" }}
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      <br />

      <div className="books">
        <input
          type="text"
          placeholder="New Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Library Books</h3>
        {filteredBooks.length > 0 ? (
          <ul>
            {filteredBooks.map((book, index) => (
              <li key={index}>
                <b>{book.title}</b> by {book.author}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Books1;
