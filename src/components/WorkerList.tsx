import { useEffect, useState } from 'react';
import axios from 'axios';

function WorkerList() {
    const [workers, setWorkers] = useState([]);
  
   
 const fetchWorkers= () => {
    axios.get('http://localhost:5000/api/workers')
      .then(res => setWorkers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  return (
    <div>
      
      <h2>Workers</h2>
      <ul>
        {workers.map(w => (
          <li key={w.id}>{w.name} - {w.email} - {w.role}</li>
        ))}
      </ul>
     
    </div>
  );
}

export default WorkerList;
