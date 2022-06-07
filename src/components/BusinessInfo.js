import React from 'react';

const BusinessInfo = ({ formData, setFormData }) => {
    return (
        <div className="business-info-container">
            <input
                required
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(event) =>
                    setFormData({ ...formData, companyName: event.target.value })
                }
            />
            <input
                required
                type="text"
                placeholder="GST No"
                value={formData.gst}
                onChange={(event) =>
                    setFormData({ ...formData, gst: event.target.value })
                }
            />
            <input
                required
                type="text"
                placeholder="Company Address"
                value={formData.companyAddress}
                onChange={(event) =>
                    setFormData({ ...formData, companyAddress: event.target.value })
                }
            />
            <textarea
                required
                type="text"
                placeholder="Company Details"
                value={formData.companyDetails}
                onChange={(event) =>
                    setFormData({ ...formData, companyDetails: event.target.value })
                }
            />

        </div>
    );
};

export default BusinessInfo;