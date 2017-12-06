import React from 'react';
import { Howl } from 'howler';

export default class WordCard extends React.Component {
  //help from: https://www.w3schools.com/html/html5_draganddrop.asp
  drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  soundFlip(card) {
    const pronunciation = new Howl({ src: [this.props.card.audio] });
    pronunciation.play();

      let image = document.getElementsByClassName(this.props.id)[0];
      let text = document.getElementsByClassName(this.props.id)[1];
      setTimeout(() => {
        if (image.className.includes('image-side')) {
          image.className = `${this.props.id} side1`;
        } else {
          image.className = `${this.props.id} side1 image-side`;
        }

        setTimeout(() => {
          if (text.className.includes('text-side')) {
            text.className = `${this.props.id} side2`;
          } else {
            text.className = `${this.props.id} side2 text-side hidden`;
          }
        }, 400);
      }, 1250);
  }

  render() {
    const {card} = this.props;
    return (<div id={`${this.props.id}`} className={`card no-margin ${card.part_of_speech}`}
                 draggable='true' onDragStart={this.drag} onClick={() => this.soundFlip(card)}>
            <img className={`${this.props.id} side1`} src={this.props.card.image}/>
            <span className={`${this.props.id} side2 text-side hidden`}>{this.props.card.word}</span>
    </div>);
  }
}
