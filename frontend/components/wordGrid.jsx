import React from 'react';
import WordCard from './wordCard';

export default class WordGrid extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (<div>
      <table id='word-grid'>
        <tr>
          <td><WordCard/></td>
          <td><WordCard/></td>
          <td><WordCard/></td>
          <td><WordCard/></td>
        </tr>

        <tr>
          <td><WordCard/></td>
          <td><WordCard/></td>
          <td><WordCard/></td>
          <td><WordCard/></td>
        </tr>

        <tr>
          <td><WordCard/></td>
          <td><WordCard/></td>
          <td><WordCard/></td>
          <td><WordCard/></td>
        </tr>
      </table>
    </div>);
  }
}
