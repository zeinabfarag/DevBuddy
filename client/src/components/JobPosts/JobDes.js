import React, { Component } from 'react';



const JobDesc = ({ job }) => {
  if (!job) {
    return (
      <div><a className="list-group-item list-group-item-action flex-column align-items-start">Sorry, no results found</a></div>
    );
  }
  const jobId = job.id;

  return (
    <div className="desc">
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <p> Job Title: {job.title} </p>
        <br />
        <p>
          Job Description:
      <div className="content" dangerouslySetInnerHTML={{ __html: job.description.substr(0, 500) }}>
          </div>
        </p>

        Location: {job.location}
        <button className="btn btn-primary mb-2" onClick={this.onSave}>Save</button>


      </a>

    </div>
  );
}

export default JobDesc;