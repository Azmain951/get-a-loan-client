import React from 'react';

const LoanInfo = ({ formData, setFormData }) => {
    return (
        <div className="loan-info-container">
            <input
                required
                type="Number"
                placeholder="Enter Loan Amount"
                value={formData.loanAmount}
                onChange={(e) => {
                    setFormData({ ...formData, loanAmount: e.target.value });
                }}
            />
            <input
                required
                disabled
                readOnly
                type="text"
                placeholder="Interest Rate"
                value='5% interest rate'
                onChange={(e) => {
                    setFormData({ ...formData, interestRate: e.target.value });
                }}
            />
            <select
                required
                type="text"
                placeholder="Loan Tenure"
                value={formData.tenure}
                onChange={(e) => {
                    setFormData({ ...formData, tenure: e.target.value });
                }}
            >
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
            </select>
        </div>
    );
};

export default LoanInfo;