import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import BusinessInfo from './BusinessInfo';
import LoanInfo from './LoanInfo';
import PersonalInfo from './PersonalInfo';
import Success from './Success';

const Form = () => {
    const navigate = useNavigate();
    const error = <><p className='text-center text-danger'>Please fill out all the fields with valid data</p></>
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        age: '',
        companyName: "",
        gst: "",
        companyAddress: "",
        companyDetails: "",
        loanAmount: "",
        interestRate: "5%",
        tenure: ""
    });

    const FormTitles = ["Personal Details", "Business Details", "Loan Application Details"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <BusinessInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <LoanInfo formData={formData} setFormData={setFormData} />;
        }
    };

    const handleFormSubmit = () => {
        console.log(formData);

        fetch('http://localhost:5000/loan', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Application Submitted Successfully');
            })
    }

    return (
        <div className="form">
            <div className="form-container">
                <div className="progressbar">
                    <div
                        style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
                    ></div>
                </div>
                <div className="header">
                    <h2>{FormTitles[page]}</h2>
                </div>
                <form action="">
                    <div className="body">{PageDisplay()}</div>
                    {
                        (!formData.firstName || !formData.lastName || !formData.email || !formData.age || !formData.address || !formData.phone || !formData.companyName || !formData.companyAddress || !formData.companyDetails || !formData.gst || !formData.loanAmount || !formData.tenure) ?
                            error : ''
                    }
                    <div className="footer">
                        {
                            page === FormTitles.length ?
                                ''
                                : <button
                                    disabled={page === 0 ? true : false}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setPage((currPage) => currPage - 1);
                                    }}
                                >
                                    Prev
                                </button>
                        }
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (page === FormTitles.length - 1) {
                                    if (!formData.firstName || !formData.lastName || !formData.email || !formData.age || !formData.address || !formData.phone || !formData.companyName || !formData.companyAddress || !formData.companyDetails || !formData.gst || !formData.loanAmount || !formData.tenure) {
                                        return error;
                                    }
                                    else {
                                        handleFormSubmit();
                                        navigate('/');
                                    }

                                } else {
                                    e.preventDefault()
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;