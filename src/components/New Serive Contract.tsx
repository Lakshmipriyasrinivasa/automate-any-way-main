import React from 'react';
import { useNavigate } from 'react-router-dom';

function ServicePage() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/servicecontractinfo');
  };

  return (
    <div style={styles.header}>
      <div>
        {/* <h2 style={styles.title}>Assets</h2> */}
        <span style={styles.dropdown}>
          Recently Viewed ▼
        </span>
      </div>
      <button style={styles.newButton} onClick={handleAddClick}>
        New
      </button>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  dropdown: {
    fontSize: "14px",
    color: "#555",
    cursor: "pointer",
  },
  newButton: {
    backgroundColor: "#0070d2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ServicePage;
