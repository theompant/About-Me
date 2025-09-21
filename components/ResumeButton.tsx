"use client";

type ResumeButtonProps = {
  className?: string;
};

export default function ResumeButton({ className = "" }: ResumeButtonProps) {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in the public folder
    link.download = 'Om_Pant_Resume.pdf'; // Downloaded filename
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`button resume-download-btn ${className}`}
      title="Download my complete resume as PDF"
    >
      📄 Download Resume
    </button>
  );
}