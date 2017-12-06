import React from 'react';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('text');
    if (document.getElementById(card).className.includes(event.target.className) && !event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById(card));
    }
    if (Array.from(document.getElementsByClassName('grammar-box')).every(el => el.hasChildNodes())) {
      Array.from(document.getElementsByClassName('grammar-box')).forEach(el => el.children()[0]/* play audio */);
    }
  }

  switchSentence() {
    let second = document.querySelector('div.grammar-board.flex.hidden');
    document.querySelector('div.grammar-board.flex.visible').className = 'grammar-board flex hidden';
    second.className = 'grammar-board flex visible';
  }

  render() {
    return (<div><div id='sentence-area' className='flex-center'>
      <div className=' grammar-board flex visible'>
        <div className='article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>

      <div className='grammar-board flex hidden'>
        <div className='article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='adj' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='adverb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>
      <div className='fa fa-refresh fa-2x' onClick={this.switchSentence}></div>
    </div>
    </div>);
  }
}
