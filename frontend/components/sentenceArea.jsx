import React from 'react';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('text');
    console.log(document.getElementById(card).className);
    console.log(event.target.className);
    console.log(event.target.hasChildNodes());
    if (document.getElementById(card).className.includes(event.target.className) && !event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById(card));
    }
    if (Array.from(document.getElementsByClassName('grammar-box')).every(el => el.hasChildNodes())) {
      Array.from(document.getElementsByClassName('grammar-box')).forEach(el => el.children()[0]/* play audio */);
    }
  }

  render() {
    return (<div><div id='sentence-area' className='flex-center'>
      <div className=' grammar-board flex'>
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
      <div className='fa fa-refresh fa-2x'></div>
    </div>
    </div>);
  }
}
