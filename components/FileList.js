// components/FileList.js
import React from 'react';

const FileList = ({ files, onDelete }) => {
    return (
        <ul>
            {files.map((file, index) => (
                <li key={index}>
                    {file}
                    <button onClick={() => onDelete(file)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default FileList;
