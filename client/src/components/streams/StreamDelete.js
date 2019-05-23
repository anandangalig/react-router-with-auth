import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel1</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal title="Delete Stream" content="Are you sure?" actions={actions} />
    </div>
  );
};

export default StreamDelete;
