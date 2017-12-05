import React from 'react';
import { Howl } from 'howler';

export default class WordCard extends React.Component {
  //help from: https://www.w3schools.com/html/html5_draganddrop.asp
  drag(event) {
    event.dataTransfer.setData('card', event.target.id);
  }

  soundFlip(card) {
    const pronunciation = new Howl({ src: [this.props.card.audio] });
    pronunciation.play();
    setTimeout(() => () => {
      let image = document.getElementsById('image-side');
      let text = document.getElementsById('text-side');

      if (image.className.includes('hidden')) {
        image.className = 'side';
      } else {
        image.className = 'side hidden';
      }

      if (text.className.includes('hidden')) {
        text.className = 'side';
      } else {
        text.className = 'side hidden';
      }
    }, 0);
  }

  render() {
    const {card} = this.props;
    return (<div id={this.props.id} className={`card no-margin ${card.part_of_speech}`}
                 draggable='true' onDragStart={this.drag} onClick={() => this.soundFlip(card)}>
            <img id='image-side' className='side' src={this.props.card.image}/>
            <span id='text-side' className='side hidden'>{this.props.card.word}</span>
    </div>);
  }
}
