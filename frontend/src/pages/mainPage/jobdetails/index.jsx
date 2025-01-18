// components/JobDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../footer';
import './index.css'; // Link to CSS file

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`/api/employee/job-details/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch job details');
                }
                const data = await response.json();
                setJob(data.data); // Assuming response is { success: true, data: job }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div >
            <div className="back-link-container">
                <Link to="/jobs" className="back-link">
                    &larr;  Back to Job Listings
                </Link>
            </div>
            <div className="job-card">
                <h2 className="job-title">
                    {job.jobrole} at {job.companyname}
                </h2>
                <div className="job-info">
                    <p><strong>Job Type:</strong> {job.jobtype}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <div className="job-description">
                        <h3>Job Description</h3>
                        <p>{job.jobdescription}</p>
                    </div>
                    <p><strong>Number of Vacancies:</strong> {job.noofvacancies || "N/A"}</p>
                    <div className="job-contact">
                        <p><strong>Email:</strong> <a href={`mailto:${job.email}`}>{job.email || "N/A"}</a></p>
                        <p><strong>Mobile:</strong> <a href={`tel:${job.mobileNo}`}>{job.mobileNo || "N/A"}</a></p>
                        <p><strong>Job URL:</strong> <a href={job.joburl} target="_blank" rel="noopener noreferrer">{job.joburl || "N/A"}</a></p>
                        <p><strong>LinkedIn:</strong> <a href={job.linkedin} target="_blank" rel="noopener noreferrer">{job.linkedin || "N/A"}</a></p>
                    </div>
                    <p >
                        <strong>Posted On: </strong>
                        {new Date(job.createdAt).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </p>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JobDetails;
