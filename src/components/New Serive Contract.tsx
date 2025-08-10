import React from 'react';
import { useNavigate } from 'react-router-dom';

function ServicePage() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/servicecontractinfo');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderBottom: '1px solid #ccc'
    }}>
      <button
        onClick={handleAddClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        + Add Service Contract
      </button>
    </div>
  );
}

export default ServicePage;
