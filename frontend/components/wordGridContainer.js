import { connect } from 'react-redux';
import WordGrid from './wordGrid';
import { fetchCards } from '../requestActions';

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards())
});

export default connect(null, mapDispatchToProps)(WordGrid);
