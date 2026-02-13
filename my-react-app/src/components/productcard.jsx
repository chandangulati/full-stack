import "./App.css"; // optional if you want to move styles

function ProductCard(props) {
  const {
    name,
    description,
    price,
    imageUrl,
    inStock,
    rating,
  } = props;

  const formattedPrice = price.toFixed(2); // Viva: toFixed(2) formats to 2 decimals

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        {!inStock && <span style={{ ...styles.badge, ...styles.badgeOut }}>Out of stock</span>}
        {inStock && <span style={{ ...styles.badge, ...styles.badgeIn }}>In stock</span>}
        {price < 500 && <span style={{ ...styles.badge, ...styles.badgeSale }}>Sale</span>}

        <img src={imageUrl} alt={name} style={styles.image} />
      </div>

      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.desc}>{description}</p>

        <div style={styles.meta}>
          <span style={styles.price}>₹{formattedPrice}</span>
          <span style={styles.rating}>⭐ {rating}/5</span>
        </div>

        <button
          style={{
            ...styles.button,
            ...(inStock ? {} : styles.buttonDisabled),
          }}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: 280,
    borderRadius: 12,
    overflow: "hidden",
    background: "#ffffff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    paddingTop: "65%",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    color: "#ffffff",
  },
  badgeIn: {
    background: "#16a34a",
  },
  badgeOut: {
    background: "#dc2626",
  },
  badgeSale: {
    top: 10,
    right: 10,
    left: "auto",
    background: "#f97316",
  },
  content: {
    padding: "14px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    margin: 0,
  },
  desc: {
    fontSize: 14,
    color: "#6b7280",
    margin: 0,
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111827",
  },
  rating: {
    fontSize: 14,
    color: "#f59e0b",
  },
  button: {
    marginTop: 8,
    width: "100%",
    padding: "10px 0",
    border: "none",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    background: "#2563eb",
    color: "#ffffff",
    transition: "background 0.2s ease, transform 0.1s ease",
  },
  buttonDisabled: {
    background: "#9ca3af",
    cursor: "not-allowed",
  },
};

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 20,
        background: "#f3f4f6",
      }}
    >
      <ProductCard
        name="Wireless Headphones"
        description="Comfortable over-ear wireless headphones with noise cancellation."
        price={2499}
        imageUrl="https://via.placeholder.com/400x260?text=Headphones"
        inStock={true}
        rating={4.5}
      />

      <ProductCard
        name="Smart Watch"
        description="Track your fitness, notifications, and more with this smart watch."
        price={399}
        imageUrl="https://via.placeholder.com/400x260?text=Smart+Watch"
        inStock={false}
        rating={4.2}
      />
    </div>
  );
}

export default App;
