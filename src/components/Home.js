import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='d-flex flex-column align-items-center justify-content-center bg-light w-50 h-50 p-5 shadow-lg rounded'>
            <h2>Welcome to GET A LOAN</h2>
            <div className='mt-4'>
                <button onClick={() => navigate('/loan-apply')} className='btn-get'>Get a Loan</button>
                <button onClick={() => navigate('/applications')} className='btn-view'>Applied Loan</button>
            </div>
        </div>
    );
};

export default Home;