import React from 'react';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('text');
    if (document.getElementById(card).className.includes(event.target.className) && !event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById(card));
    }
    setTimeout(() => {
      if (Array.from(document.querySelector('div.grammar-board.flex.visible').children).every(el => el.hasChildNodes())) {
        let words = Array.from(document.querySelector('div.grammar-board.flex.visible').children);
        for (let i = 0; i < words.length; i++) {
          setTimeout(() => words[i].children[0].click(), 750 * i);
        }
        /* move all cards back to their orig. div's via card's id &  */
      }
    }, 0);
  }

  switchSentence() {
    let second = document.querySelector('div.grammar-board.flex.hidden');
    document.querySelector('div.grammar-board.flex.visible').className = 'grammar-board flex hidden';
    second.className = 'grammar-board flex visible';
  }

  render() {
    return (<div><div id='sentence-area' className='flex'>
      <div className='grammar-board flex visible'>
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
