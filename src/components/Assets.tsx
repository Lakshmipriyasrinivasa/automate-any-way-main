
// export default Asset;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Asset {
  id: number;
  assetName: string;
  serialNumber: string;
  installDate: string;
  accountName: string;
  contactName: string;
}

const AssetsTable: React.FC = () => {
  const navigate = useNavigate();
  const [assets, setAssets] = useState<Asset[]>([
    {
      id: 1,
      assetName: 'tools',
      serialNumber: '',
      installDate: '',
      accountName: 'hyatt',
      contactName: 'Kiruthiga Eswararaj',
    },
  ]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleEdit = (id: number, value: string) => {
    setEditId(id);
    setEditValue(value);
  };

  const handleSave = (id: number) => {
    setAssets(assets.map(asset =>
      asset.id === id ? { ...asset, assetName: editValue } : asset
    ));
    setEditId(null);
  };

  const handleNewAsset = () => {
    navigate("/assets/new");
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div>
          <h2 style={{ margin: 0 }}>Assets</h2>
          <span style={{ color: '#666' }}>Recently Viewed ▼</span>
        </div>
        <button
          style={{ background: '#0073aa', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
          onClick={handleNewAsset}
        >
          New
        </button>
      </div>
      <p style={{ color: '#666', margin: '5px 0' }}>1 item - Updated a few seconds ago</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search this list..."
          style={{ padding: '5px', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Asset Name</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Serial Number</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Install Date</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Account Name</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Contact Name</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}></th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {editId === asset.id ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleSave(asset.id)}
                    autoFocus
                    style={{ border: '1px solid #0073aa', padding: '2px' }}
                  />
                ) : (
                  <span
                    style={{ cursor: 'pointer', color: '#0073aa' }}
                    onClick={() => handleEdit(asset.id, asset.assetName)}
                  >
                    {asset.assetName}
                  </span>
                )}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.serialNumber}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.installDate}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.accountName}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{asset.contactName}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {/* Placeholder for action icons */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;