import React, { useState } from 'react';
import '../styles/manage-communication-methods.css';
import Sidebar from './Sidebar';

const defaultMethods = [
  { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
  { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: true },
  { name: 'Email', description: 'Send an email', sequence: 3, mandatory: false },
  { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
  { name: 'Other', description: 'Other methods of communication', sequence: 5, mandatory: false },
];

const ManageCommunicationMethods = () => {
  const [methods, setMethods] = useState(defaultMethods);
  const [newMethod, setNewMethod] = useState({ name: '', description: '', sequence: '', mandatory: false });

  const handleAddMethod = () => {
    setMethods([...methods, { ...newMethod, sequence: parseInt(newMethod.sequence, 10) }]);
    setNewMethod({ name: '', description: '', sequence: '', mandatory: false });
  };

  const handleDeleteMethod = (index) => {
    const updatedMethods = methods.filter((_, i) => i !== index);
    setMethods(updatedMethods);
  };

  return (
    <div className="manage-communication-methods-page">
        <Sidebar type="admin"/>
    <div className="manage-communication-methods">
      <h2>Manage Communication Methods</h2>
      <form className="method-form">
        <input
          type="text"
          placeholder="Name"
          value={newMethod.name}
          onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMethod.description}
          onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sequence"
          value={newMethod.sequence}
          onChange={(e) => setNewMethod({ ...newMethod, sequence: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={newMethod.mandatory}
            onChange={(e) => setNewMethod({ ...newMethod, mandatory: e.target.checked })}
          />
          Mandatory
        </label>
        <button type="button" onClick={handleAddMethod}>
          Add Method
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Sequence</th>
            <th>Mandatory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method, index) => (
            <tr key={index}>
              <td>{method.name}</td>
              <td>{method.description}</td>
              <td>{method.sequence}</td>
              <td>{method.mandatory ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleDeleteMethod(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageCommunicationMethods;
