import { connect } from 'react-redux';
import WordGrid from './wordGrid';
import { fetchCards } from '../requestActions';

const mapStateToProps = ({ pageLoading, cards }) => ({
  pageLoading,
  cards
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(WordGrid);
