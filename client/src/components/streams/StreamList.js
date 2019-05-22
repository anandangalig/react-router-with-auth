import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const renderStreams = streams => {
  return Object.keys(streams).map(key => {
    let { title, description, id } = streams[key];
    return (
      <div className="item" key={id}>
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
      <div className="ui celled list">{renderStreams(props.streamsList)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  const { streams } = state;
  return { streamsList: streams };
};

export default connect(
  mapStateToProps,
  { fetchStreams },
)(StreamList);
