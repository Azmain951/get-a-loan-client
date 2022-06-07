import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
            <input
                required
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                }}
            />
            <input
                required
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                }}
            />
            <input
                required
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                }}
            />
            <input
                required
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => {
                    setFormData({ ...formData, age: e.target.value });
                }}
            />
            <input
                required
                type="number"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                }}
            />
            <input
                required
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                }}
            />
        </div>
    );
};

export default PersonalInfo;