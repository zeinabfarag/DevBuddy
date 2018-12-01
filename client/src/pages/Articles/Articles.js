import React from "react";
import Articles from "../../components/Articles";

//import API from "../utils/API";
//import Footer from './src/components/Footer';

const ArticlePage = props => {
  return (
    <div>
      <Articles {...props} username={props.username} login={props.login} />
      <p>Powered by API News</p>
    </div>
  );
};

export default ArticlePage;
