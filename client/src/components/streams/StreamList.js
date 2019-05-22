import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

const renderAdminButtons = (currentUserID, userID) => {
  if (userID === currentUserID) {
    return (
      <div className="right floated content">
        <button className="ui button primary">Edit</button>
        <button className="ui button negative">Delete</button>
      </div>
    );
  }
};

const renderCreateNewButton = currentUserID => {
  if (currentUserID) {
    return (
      <Link to="/stream/create">
        <button className="ui button primary">Create New Stream</button>
      </Link>
    );
  }
};

const renderStreams = (streams, currentUserID) => {
  return Object.keys(streams).map(key => {
    let { title, description, id, userID } = streams[key];
    return (
      <div className="item" key={id}>
        {renderAdminButtons(currentUserID, userID)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <strong>{title}</strong>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  });
};

const StreamList = props => {
  useEffect(() => {
    props.fetchStreams();
  }, []);
  return (
    <div>
      <h2>Streams!</h2>
      <div className="ui celled list">
        {renderStreams(props.streamsList, props.signInStatus.userID)}
      </div>
      {renderCreateNewButton(props.signInStatus.isSignedIn)}
    </div>
  );
};

const mapStateToProps = state => {
  const { streams, signInStatus } = state;
  return { streamsList: streams, signInStatus: signInStatus };
};

export default connect(
  mapStateToProps,
  { fetchStreams },
)(StreamList);
