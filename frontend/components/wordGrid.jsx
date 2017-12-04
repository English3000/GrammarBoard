import React from 'react';
import WordCard from './wordCard';

export default class WordGrid extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (<table id='word-grid'>
      <div className='flex'>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
      </div>

      <div className='flex'>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
      </div>

      <div className='flex'>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
        <div className='card'><WordCard/></div>
      </div>
    </table>);
  }
}
