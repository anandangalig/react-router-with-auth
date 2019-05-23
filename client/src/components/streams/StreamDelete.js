import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';

const StreamDelete = props => {
  // fetching the current stream to avoid errors if props.stream is not ready from redux store:
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const actions = (
    <React.Fragment>
      <button
        className="ui button negative"
        onClick={() => {
          props.deleteStream(props.stream.id);
        }}
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = props => {
    if (!props.stream) {
      return 'Loading...';
    }
    return `Are you sure you want to delete: ${props.stream.title}?`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent(props)}
      actions={actions}
      onDismiss={() => {
        history.push('/');
      }}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { deleteStream, fetchStream },
)(StreamDelete);
