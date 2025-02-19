import React, { useState, useEffect } from 'react';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`)
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h1>AI Job Search Platform</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
}