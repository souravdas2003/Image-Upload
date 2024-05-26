import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Upload a Picture</h1>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        {preview && (
          <img 
            src={preview} 
            alt="Preview" 
            className="mb-4 w-48 h-48 object-cover rounded"
          />
        )}
        <button 
          onClick={handleUpload} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Upload Picture
        </button>
      </div>
    </div>
  );
};

export default UploadComponent;
