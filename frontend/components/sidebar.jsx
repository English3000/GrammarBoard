import React from 'react';
import { Howl } from 'howler';

export default class Sidebar extends React.Component {
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

  sound(audio) {
    const pronunciation = new Howl({ src: [ audio ] });
    pronunciation.play();
  }

  render() {
    const {cards} = this.props;
    console.log(cards);
    return (<div>
      <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
        <div id={`${cards.helpers[0]}`} onClick={() => this.sound(cards.helper_words[cards.helpers[0]].audio)}
             className={`card no-margin helper-word ${cards.helper_words[cards.helpers[0]].part_of_speech}`}
             draggable='true' onDragStart={this.drag}>
             <span>{cards.helper_words[cards.helpers[0]].word}</span></div>
      </div>
      <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
        <div id={`${cards.helpers[1]}`} onClick={() => this.sound(cards.helper_words[cards.helpers[0]].audio)}
             className={`card no-margin helper-word ${cards.helper_words[cards.helpers[1]].part_of_speech}`}
             draggable='true' onDragStart={this.drag}>
             <span>{cards.helper_words[cards.helpers[1]].word}</span></div>
      </div>
      <div className='card' onDragOver={(event) => event.preventDefault()} onDrop={this.drop}>
        <div id={`${cards.helpers[2]}`} onClick={() => this.sound(cards.helper_words[cards.helpers[2]].audio)}
             className={`card no-margin helper-word ${cards.helper_words[cards.helpers[2]].part_of_speech}`}
             draggable='true' onDragStart={this.drag}>
             <span>{cards.helper_words[cards.helpers[2]].word}</span></div>
      </div>
    </div>);
  }
}
