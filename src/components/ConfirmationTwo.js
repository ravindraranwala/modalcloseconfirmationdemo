import React, { Component, PropTypes } from 'react';
import AriaModal from 'react-aria-modal';
import { confirm } from '../util/confirm';
import { confirmable } from 'react-confirm';
import { connect } from 'react-redux';

class ConfirmationTwo extends Component {
  constructor(props) {
    super(props);
    this.getApplicationNode = this.getApplicationNode.bind(this);
  }

  getApplicationNode = () => {
    return document.getElementById('application');
  }

  render() {
    console.log("rendering : " + this.props.isModalActive);
    const {
     okLabbel = 'OK',
     cancelLabel = 'Cancel',
     title,
     confirmation,
     show,
     proceed,
     dismiss,
     cancel,
     enableEscape = true,
   } = this.props;

    const modal =
        <AriaModal
          titleText="demo one"
          onExit={this.deactivateModal}
          mounted={this.props.modalActive}
          initialFocus="#demo-one-deactivate"
          getApplicationNode={this.getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}
        >
          <div id="test-modal" className="background">
            <div className='model-title'>
              <h3 className='pe-title'>{title}</h3>
            </div>
            <div className="modal-body">
              {confirmation}
            </div>
            <footer className="modal-footer">
              <button className="btn btn-info" onClick={cancel}>{cancelLabel}</button>
              <button className='btn btn-danger' onClick={proceed}>{okLabbel}</button>
            </footer>
          </div>
        </AriaModal>;

    return (
      <div>
        {modal}
      </div>
    );
  }

}

ConfirmationTwo.propTypes = {
  okLabbel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func,     // called when ok button is clicked.
  cancel: PropTypes.func,      // called when cancel button is clicked.
  dismiss: PropTypes.func,     // called when backdrop is clicked or escaped.
  enableEscape: PropTypes.bool,
  isModalActive: PropTypes.bool,
}


function mapStateToProps(state){
  console.log("Calling mapStateToProps here!" + state.confirmation.modalActive);
  return { modalActive: state.confirmation.modalActive };
}

export default connect(mapStateToProps)(ConfirmationTwo);
