import React from 'react';
import toast from 'react-hot-toast';

const Application = ({ index, application }) => {
    const { _id, firstName, lastName, email, phone, address, companyName, companyAddress, loanAmount, tenure, status } = application;

    const handleAccept = () => {
        fetch(`http://localhost:5000/loan/${_id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Application of ${firstName} ${lastName} for ${companyName} is accepted successfully`);
            })
    }

    const handleReject = () => {
        fetch(`http://localhost:5000/loan/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Application of ${firstName} ${lastName} for ${companyName} is rejected successfully`);
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{companyName}</td>
            <td>{companyAddress}</td>
            <td>{loanAmount}</td>
            <td>{tenure} years</td>
            <td>
                {status === 'Accepted' ? <p className='text-success fw-bold'>Accepted</p>
                    : <><button onClick={() => handleAccept()} className='btn btn-outline-success btn-sm me-2'>Accept</button>
                        <button onClick={() => handleReject()} className='btn btn-outline-danger btn-sm'>Reject</button></>}
            </td>
        </tr>
    );
};

export default Application;