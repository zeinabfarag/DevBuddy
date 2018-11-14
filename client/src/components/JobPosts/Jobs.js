import React from 'react'
import Parser from 'html-react-parser';

const Jobs = (props) => {
  const { job } = props;
  const { id } = props;

  return (
    <div>
      <div className='jumbotron'>
        <h1> <a href={job.url} target="_blank"> Title: {job.title} </a></h1>









        <div id={id}>


          <p> How to apply: {Parser(job.how_to_apply)} </p>
          <p> Job Description:
          {Parser(job.description)}
          </p>

        </div>



        <p>Location : {job.location} <br /> Contract type : {job.type}</p>
        {job.created_at}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Jobs;