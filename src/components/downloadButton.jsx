import React from 'react';
import './downloadButton.css';

const DownloadButton = () => {
  const fileUrl =
    'https://drive.google.com/file/d/1wDOXs7OStSPcmp2aaC3Z4jXNbPIk-OLz/view?usp=drive_link';
  const handleDownload = () => {
    window.open(fileUrl, '_blank');
  };

  return (
    <button onClick={handleDownload} className="download-button">
      Descargar CV
    </button>
  );
};

export default DownloadButton;
