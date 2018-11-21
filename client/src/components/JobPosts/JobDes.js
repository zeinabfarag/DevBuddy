import React, { Component } from 'react';



const JobDesc = ({ job }) => {
  if (!job) {
    return (
      <div></div>
    );
  }
  const jobId = job.id;

  return (
    <div className="desc">
      <p> Job Title: {job.title} </p>
      <br />
      <p>
        Job Description:
      <div className="content" dangerouslySetInnerHTML={{ __html: job.description.substr(0, 1000) }}>
        </div>
      </p>
      Location: {job.location}<br />
    </div>
  );
}

export default JobDesc;