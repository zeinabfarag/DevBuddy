import React from 'react';

//this renders the left results area of the search.


const JobListItem = ({ job, onJobSelect }) => {
  const name = job.title;


  return (
    //the OnClick allows the user to toggle between the short render (which is done on this page) and the full rendered results (which will appear on the right hand side of the DOM)
    <div
      onClick={() => onJobSelect(job)}
      key={job.id}
    >
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          {/* renders the jobs title (the variable name is specified globally)*/}
          <h5 className="mb-1">   {name} </h5>
          {/* renders the time the job post was created*/}
          <small>{job.created_at.substr(4, 9)}</small>
        </div>
        {/* renders a description set to 45 words*/}
        <div className="content mb-1" dangerouslySetInnerHTML={{ __html: job.description.substr(0, 45) }}></div>
        {/* renders job type (either Full Time, Part time, etc*/}
        <small>{job.type}</small> <br />
      </a>

    </div >

  );
}



export default JobListItem;