/* eslint-disable react-hooks/purity */
import React, { useState } from "react";
import "./App.css";

function Library() {
  const [books, setBooks] = useState([
    // eslint-disable-next-line react-hooks/purity
    { id: Date.now() - 3, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { id: Date.now() - 2, title: "Introduction to Algorithms", author: "Cormen et al.", year: 2009 },
    { id: Date.now() - 1, title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newYear, setNewYear] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAuthor.trim() || !newYear.trim()) return;

    const book = {
      id: Date.now(), // Viva: quick unique temp ID
      title: newTitle.trim(),
      author: newAuthor.trim(),
      year: Number(newYear),
    };

    setBooks((prev) => [book, ...prev]);

    setNewTitle("");
    setNewAuthor("");
    setNewYear("");
  };

  const handleRemoveBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      String(book.year).includes(query)
    );
  });

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Library Management</h1>
          <p style={styles.subtitle}>
            Search, add, and remove books using React hooks.
          </p>
        </header>

        <section style={styles.section}>
          <label style={styles.label}>
            Search books
            <input
              type="text"
              placeholder="Search by title, author, or year"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.input}
            />
          </label>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Add new book</h2>
          <form onSubmit={handleAddBook} style={styles.form}>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Author"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Year"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.primaryButton}>
              Add Book
            </button>
          </form>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Book list ({filteredBooks.length})
          </h2>

          {filteredBooks.length === 0 ? (
            <p style={styles.emptyState}>No books found.</p>
          ) : (
            <ul style={styles.list}>
              {filteredBooks.map((book) => (
                <li key={book.id} style={styles.listItem}>
                  <div>
                    <div style={styles.bookTitle}>{book.title}</div>
                    <div style={styles.bookMeta}>
                      {book.author} • {book.year}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveBook(book.id)}
                    style={styles.dangerButton}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    padding: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "#0f172a",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  card: {
    width: "100%",
    maxWidth: 900,
    background: "#020617",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 24px 60px rgba(15,23,42,0.8)",
    color: "#e5e7eb",
  },
  header: {
    marginBottom: 24,
  },
  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 0,
    color: "#9ca3af",
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    margin: "0 0 12px 0",
    fontSize: 18,
    fontWeight: 600,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    fontSize: 14,
  },
  input: {
    marginTop: 4,
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid #374151",
    background: "#020617",
    color: "#e5e7eb",
    fontSize: 14,
    outline: "none",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 12,
  },
  primaryButton: {
    padding: "10px 12px",
    borderRadius: 999,
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  dangerButton: {
    padding: "6px 10px",
    borderRadius: 999,
    border: "none",
    background: "#ef4444",
    color: "#fee2e2",
    fontWeight: 500,
    fontSize: 13,
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    maxHeight: 260,
    overflowY: "auto",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: 10,
    background: "#020617",
    border: "1px solid #1f2937",
  },
  bookTitle: {
    fontWeight: 600,
    fontSize: 15,
  },
  bookMeta: {
    fontSize: 13,
    color: "#9ca3af",
    marginTop: 2,
  },
  emptyState: {
    margin: 0,
    fontSize: 14,
    color: "#9ca3af",
  },
};

export default Library;
