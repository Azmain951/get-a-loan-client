import React from 'react';

const Application = ({ application }) => {
    const { firstName, lastName, email, phone, address, companyName, companyAddress, loanAmount, tenure } = application;
    return (
        <tr>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{companyName}</td>
            <td>{companyAddress}</td>
            <td>{loanAmount}</td>
            <td>{tenure} years</td>
        </tr>
    );
};

export default Application;