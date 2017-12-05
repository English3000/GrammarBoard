import React from 'react';
import { Howl } from 'howler';

export default class WordCard extends React.Component {
  //help from: https://www.w3schools.com/html/html5_draganddrop.asp
  drag(event) {
    event.dataTransfer.setData('card', event.target.id);
  }

  soundFlip(card) {
    const pronunciation = new Howl({src: [`app/assets/audio/${this.props.card.word}.m4a`]});
    pronunciation.play();
    //switch to other side of card
  }

  render() {
    const {card} = this.props;
    return (<div id={this.props.id} className={`card no-margin ${card.part_of_speech}`}
                 draggable='true' onDragStart={this.drag} onClick={() => this.soundFlip(card)}>
            <img src={`app/assets/images/${this.props.card.word}.png`}/>
    </div>);
  }
}
