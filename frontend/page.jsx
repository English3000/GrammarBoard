import React from 'react';
import WordGridContainer from './components/wordGridContainer';
import SentenceArea from './components/sentenceArea';

export default () => (<div>
  <div>
    <div className='inline-block'> {/* extra words to use; add draggability */}
      <div className='card'><div className='card article'>the</div></div>
      <div className='card'><div className='card prep'>to</div></div>
      <div className='card'><div className='card conj'>and</div></div>
    </div>
    <WordGridContainer/>
  </div>
  <SentenceArea/>
</div>);
