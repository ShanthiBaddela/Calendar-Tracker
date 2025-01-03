import React, { useState } from 'react';
import '../styles/manageCompanies.css';
import Sidebar from './Sidebar';

const ManageCompanies = () => {
    const [companies, setCompanies] = useState([
        {
          id: 1,
          name: 'TechCorp',
          location: 'New York, USA', 
          linkedin: 'https://linkedin.com/company-techcorp', 
          emails: ['contact@techcorp.com'],
          phoneNumbers: ['123-456-7890'], 
          comments: 'Overdue communication.', 
          periodicity: 'Every 2 weeks'
        },
        {
          id: 2,
          name: 'InnoVate',
          location: 'Mumbai, India',
          linkedin: 'https://linkedin.com/company-innovate',
          emails: ['contact@innovate.com'],
          phoneNumbers: ['098-765-4321'],
          comments: 'Due today.',
          periodicity: 'Every month',
        },
        {
          id: 3,
          name: 'GreenTech Solutions',
          location: 'Chennai, India',
          linkedin: 'https://linkedin.com/company-greentech',
          emails: ['contact@greentech.com'],
          phoneNumbers: ['234-567-8901'],
          comments: 'Regular communication.',
          periodicity: 'Every 2 weeks',
        },
        {
          id: 4,
          name: 'BlueSky Enterprises',
          location: 'Hyderabad, India',
          linkedin: 'https://linkedin.com/company-bluesky',
          emails: ['contact@bluesky.com'],
          phoneNumbers: ['345-678-9012'],
          comments: 'Overdue communication.',
          periodicity: 'Every month',
        },
        {
          id: 5,
          name: 'FuturePath Inc.',
          location: 'New Delhi, India',
          linkedin: 'https://linkedin.com/company-futurepath',
          emails: ['contact@futurepath.com'],
          phoneNumbers: ['456-789-0123'],
          comments: 'On schedule.',
          periodicity: 'Every month',
        },
        {
          id: 6,
          name: 'Bright Innovations',
          location: 'Unknown',
          linkedin: 'https://linkedin.com/company-brightinnovations',
          emails: ['contact@brightinnovations.com'],
          phoneNumbers: ['567-890-1234'],
          comments: 'Due today.',
          periodicity: 'Every 2 weeks',
        },
        {
          id: 7,
          name: 'Visionary Tech',
          location: 'San Francisco, USA',
          linkedin: 'https://linkedin.com/company-visionarytech',
          emails: ['contact@visionarytech.com'],
          phoneNumbers: ['678-901-2345'],
          comments: 'Overdue communication.',
          periodicity: 'Every month',
        },
      ]);
      
    const [newCompany, setNewCompany] = useState({
        name: '',
        location: '',
        linkedin: '',
        emails: '',
        phoneNumbers: '',
        comments: '',
        periodicity: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editCompanyId, setEditCompanyId] = useState(null);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "emails" || name === "phoneNumbers") {
            // Convert the comma-separated string into an array
            setNewCompany({
                ...newCompany,
                [name]: value.split(",").map((item) => item.trim()), // Trim to remove extra spaces
            });
        } else {
            setNewCompany({ ...newCompany, [name]: value });
        }
    };
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setCompanies(
                companies.map((company) =>
                    company.id === editCompanyId
                        ? { ...company, ...newCompany, emails: newCompany.emails, phoneNumbers: newCompany.phoneNumbers }
                        : company
                )
            );
            setIsEditing(false);
            setEditCompanyId(null);
        } else {
            setCompanies([
                ...companies,
                { ...newCompany, id: companies.length + 1, emails: newCompany.emails, phoneNumbers: newCompany.phoneNumbers },
            ]);
        }
        setNewCompany({
            name: '',
            location: '',
            linkedin: '',
            emails: '',
            phoneNumbers: '',
            comments: '',
            periodicity: '',
        });
    };

    const handleEdit = (companyId) => {
        const companyToEdit = companies.find((company) => company.id === companyId);
        setNewCompany({
            name: companyToEdit.name,
            location: companyToEdit.location,
            linkedin: companyToEdit.linkedin,
            emails: companyToEdit.emails.join(', '),
            phoneNumbers: companyToEdit.phoneNumbers.join(', '),
            comments: companyToEdit.comments,
            periodicity: companyToEdit.periodicity,
        });
        setIsEditing(true);
        setEditCompanyId(companyId);
    };

    const handleDelete = (companyId) => {
        setCompanies(companies.filter((company) => company.id !== companyId));
    };

    return (
        <div className='manage-companies-page'>
            <Sidebar type="admin"/>
        <div className="manage-companies">
            <h2>Manage Companies</h2>

            {/* Form to Add/Edit Company */}
            <form onSubmit={handleSubmit} className="company-form">
                <input
                    type="text"
                    name="name"
                    value={newCompany.name}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                />
                <input
                    type="text"
                    name="location"
                    value={newCompany.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                />
                <input
                    type="text"
                    name="linkedin"
                    value={newCompany.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn Profile"
                />
                <input
                    type="text"
                    name="emails"
                    value={newCompany.emails}
                    onChange={handleChange}
                    placeholder="Emails (comma separated)"
                />
                <input
                    type="text"
                    name="phoneNumbers"
                    value={newCompany.phoneNumbers}
                    onChange={handleChange}
                    placeholder="Phone Numbers (comma separated)"
                />
                <textarea
                    name="comments"
                    value={newCompany.comments}
                    onChange={handleChange}
                    placeholder="Comments"
                />
                <input
                    type="text"
                    name="periodicity"
                    value={newCompany.periodicity}
                    onChange={handleChange}
                    placeholder="Communication Periodicity (e.g., every 2 weeks)"
                />

                <button type="submit">{isEditing ? 'Save Changes' : 'Add Company'}</button>
            </form>

            {/* Table to Display Companies */}
            <table className='table1'>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>LinkedIn</th>
                        <th>Emails</th>
                        <th>Phone Numbers</th>
                        <th>Comments</th>
                        <th>Communication Periodicity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.location}</td>
                            <td>
                                <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                                    {company.linkedin}
                                </a>
                            </td>
                            <td>{company.emails && Array.isArray(company.emails) ? company.emails.join(", ") : company.emails}</td>
                            <td>{company.phoneNumbers && Array.isArray(company.phoneNumbers) ? company.phoneNumbers.join(", ") : company.phoneNumbers}</td>
                            <td>{company.comments}</td>
                            <td>{company.periodicity}</td>
                            <td>
                                <button onClick={() => handleEdit(company.id)}>Edit</button>
                                <button onClick={() => handleDelete(company.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        
    );
};

export default ManageCompanies;
