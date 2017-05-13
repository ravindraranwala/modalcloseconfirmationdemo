import { connect } from 'react-redux';
import Confirmation from '../components/Confirmation';

const mapStateToProps = (state) => {
  console.log("Calling mapStateToProps here!" + state.confirmation.modalActive);
  return { modalActive: state.confirmation.modalActive };
}

export default connect(mapStateToProps)(Confirmation);
