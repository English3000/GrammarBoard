import React from 'react';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('card');
    console.log(document.getElementById(card).className);
    if (document.getElementById(card).className.includes(event.target.className)) {
      event.target.appendChild(document.getElementById(card));
    }
  }

  render() {
    return (<div id='sentence-area' className='flex-center'>
      <div className='article' onDragOver={(event) => event.preventDefault()}
                               onDrop={this.drop}></div>
      <div className='noun' onDragOver={(event) => event.preventDefault()}
                            onDrop={this.drop}></div>
      <div className='verb' onDragOver={(event) => event.preventDefault()}
                            onDrop={this.drop}></div>
    </div>);
  }
}
