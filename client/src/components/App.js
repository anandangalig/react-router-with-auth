import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/create" exact component={StreamCreate} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
