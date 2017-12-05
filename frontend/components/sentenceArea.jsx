import React from 'react';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('card');
    console.log(document.getElementById(card).className);
    if (document.getElementById(card).className.includes(event.target.className) && !event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById(card));
    }
  }

  render() {
    return (<div><div id='sentence-area' className='flex-center'>
      <div className=' grammar-board flex'>
        <div className='grammar-box article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='grammar-box noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='grammar-box verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>

      <div className='grammar-board flex hidden'>
        <div className='grammar-box article' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='grammar-box adj' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='grammar-box noun' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='grammar-box verb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
        <div className='grammar-box adverb' onDragOver={(event) => event.preventDefault()}
             onDrop={this.drop}></div>
      </div>
      <div className='fa fa-refresh fa-2x'></div>
    </div>
    </div>);
  }
}
