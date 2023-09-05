import React from 'react';

const DownloadButton = () => {
  const fileUrl =
    'https://drive.google.com/file/d/16ohslj54XYhfqtuwQXBi_20ISmOpOTkA/view?usp=sharing';
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
