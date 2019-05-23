import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamEdit = props => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  if (!props.stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {props.stream.title} {props.stream.description}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // passes the flat object by puling it out from the overall object:
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream },
)(StreamEdit);
