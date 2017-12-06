import React from 'react';

export default class SentenceArea extends React.Component {
  drop(event) {
    event.preventDefault();
    let card = event.dataTransfer.getData('selected');
    console.log(document.getElementById('selected').className);
    if (document.getElementById('selected').className.includes(event.target.className) && !event.target.hasChildNodes()) {
      event.target.appendChild(document.getElementById('selected'));
    }
    if (document.getElementsByClassName('grammar-box').forEach(el => el.hasChildNodes())) {
      document.getElementsByClassName('grammar-box').forEach(el => el.children()[0]/* play audio */);
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
