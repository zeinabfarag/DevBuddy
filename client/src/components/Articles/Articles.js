import React, { Component } from 'react';
import { List, ListItem } from '../List';
import { Col, Row, Container } from '../Grid';

import axios from 'axios';

class Articles extends Component {
  state = {
    articleswdev: [],
    articlesjs: [],
    articlestech: [],
    articleswdes: []
  };

  componentDidMount() {
    // this.loadArticle();
    // this.loadArticlejs();
    this.callAxios();
  }

  callAxios = () => {
    axios
      .all([
        axios.get(
          'https://newsapi.org/v2/everything?q=web%20development&totalResults=15&apiKey=5a7b3ff72dcb4898b5c6ee2013105946'
        ),
        axios.get(
          'https://newsapi.org/v2/everything?q=javascript&totalResults=15&apiKey=5a7b3ff72dcb4898b5c6ee2013105946'
        ),
        axios.get(
          'https://newsapi.org/v2/everything?q=tech&totalResults=15&apiKey=5a7b3ff72dcb4898b5c6ee2013105946'
        ),
        axios.get(
          'https://newsapi.org/v2/everything?q=web%20design&totalResults=15&apiKey=5a7b3ff72dcb4898b5c6ee2013105946'
        )
      ])
      .then(
        axios.spread((resdev, resjs, restech, resdes) => {
          console.log('reswdev =', resdev.data.articles);
          console.log('resjs =', resjs.data.articles);
          console.log('reswtech =', restech.data.articles);
          console.log('reswdes =', resdes.data.articles);
          this.setState({
            articleswdev: resdev.data.articles,
            articlesjs: resjs.data.articles,
            articlestech: restech.data.articles,
            articleswdes: resdes.data.articles
          });
        })
        // do something with both responses
        //   .catch(err => console.log(err));
      );
  };

  //loadArticlejs = () => {
  //  axios
  //    .get(
  //       'https://newsapi.org/v2/everything?q=javascript&totalResults=15&apiKey=5a7b3ff72dcb4898b5c6ee2013105946'
  //     )
  //     .then(res => {
  //       console.log('res', res.data.articles);
  //      this.setState({ articlesjs: res.data.articles });
  //     })
  //    .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h4 className="linebr">Articles from Web Development</h4>
            {this.state.articleswdev.length ? (
              <List>
                {this.state.articleswdev.map(article => (
                  <ListItem>
                    <a href={article.url}>
                      <strong>{article.title} </strong>
                    </a>
                    <p>by {article.source.name}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <h4 className="linebr">Articles from Javascript</h4>
            {this.state.articlesjs.length ? (
              <List>
                {this.state.articlesjs.map(article => (
                  <ListItem>
                    <a href={article.url}>
                      <strong>{article.title} </strong>
                    </a>
                    <p>by {article.source.name}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h4 className="linebr">Articles from Web Design</h4>
            {this.state.articleswdes.length ? (
              <List>
                {this.state.articleswdes.map(article => (
                  <ListItem>
                    <a href={article.url}>
                      <strong>{article.title} </strong>
                    </a>
                    <p>by {article.source.name}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <h4 className="linebr">Articles from Tech</h4>
            {this.state.articlestech.length ? (
              <List>
                {this.state.articlestech.map(article => (
                  <ListItem>
                    <a href={article.url}>
                      <strong>{article.title} </strong>
                    </a>
                    <p>by {article.source.name}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
