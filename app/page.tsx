"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileList from '../components/FileList';
import { SERVER_DOMAIN } from './constants';

const Home = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get(`${SERVER_DOMAIN}/list`);
                setFiles(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFiles();
    }, []);

    const handleDelete = async (filename: any) => {
        try {
            await axios.delete(`${SERVER_DOMAIN}/delete/${filename}`);
            setFiles(files.filter(file => file !== filename));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>File List</h1>
            <FileList files={files} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
