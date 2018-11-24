import React, { Component } from 'react';
import '../JobPosts/JobDes.css' //the CSS for the search results


//The search results logic



const JobDesc = ({ job }) => {
  //if job is not found then return the following
  if (!job) {
    return (
      <div><a className="list-group-item list-group-item-action flex-column align-items-start"> Sorry, but no results matched your search. Please, try a more specific search!</a></div>
    );
  }
  const jobId = job.id;
  //if Job is found, then return the following:
  return (
    <div className="desc">

      {/* the following renders the job url as the job title*/}

      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <p> <a href={job.url} target="_blank">  Job Title: {job.title} </a> </p>
        {/* the following renders a save job button */}
        <br />
        <div className="center"> <button className="btn btn-primary center" onClick={this.onSave}>Save this job!</button> </div>

        <br />
        <br />
        <br />

        {/* the following renders a shortened description with a short message at the end promptiung the user to click the url in the title to visit page of job posting for more information  */}
        <p>
          Job Description:
      <div className="content" dangerouslySetInnerHTML={{ __html: job.description.substr(0, 650) }}>
          </div>(for more please visit the link at the top)
        </p>


        {/* the following renders the job location*/}
        Location: {job.location}

      </a>

    </div>
  );
}

export default JobDesc;