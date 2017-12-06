import React from 'react';
import WordGridContainer from './components/wordGridContainer';
import SentenceArea from './components/sentenceArea';

export default class GrammarBoard extends React.Component {
  drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('text');
    if (!event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById(card));
    }
  }

  render() {
    return (<div>
      <p>Click, Drag, & Repeat!</p>
      <div className='flex'>
        <div> {/* extra words to use; add onClick */}
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <div id='the' className='card no-margin helper-word article'
                 draggable='true' onDragStart={this.drag}><span>the</span></div>
          </div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <div id='to' className='card no-margin helper-word prep'
                 draggable='true' onDragStart={this.drag}><span>to</span></div>
          </div>
          <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
            <div id='and' className='card no-margin helper-word conj'
                 draggable='true' onDragStart={this.drag}><span>and</span></div>
          </div>
        </div>
        <WordGridContainer/>
      </div>
      <SentenceArea/>
    </div>);
  }
}
