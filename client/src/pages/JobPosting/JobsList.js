import React from 'react';
import Jobs from '../../components/JobPosts/Jobs'

const JobsList = (props) => {
  const JobList = props.jobs;
  let i = 0;
  if (JobList) {
    return (
      <div>
        {
          JobList.map(jobs => {
            i += 1;
            return <Jobs key={jobs.id} job={jobs} id={'description' + i} />
          })
        }
      </div>
    );
  }
}

export default JobsList;