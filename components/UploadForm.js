// components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_DOMAIN } from '../app/constants';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;
        try {
            const formData = new FormData();
            formData.append('file', file);
            await axios.post(`${SERVER_DOMAIN}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;
