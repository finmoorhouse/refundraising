import React from 'react';
import Scroll from '../common/Scroll';
import redo from '../../images/redo-alt-solid.svg';

const Introduction = () =>
  <section id="intro" className="wrapper  fullscreen fade-up">
    
    <div id='background-image'></div> 
    <div id='darken'></div>
    <div id='lighten'></div>
    <div className="inner" id='introInner'>
    
      
      <h1 id='headline'>REFUNDRAISING<object type="image/svg+xml" data={redo}id='redo'></object><hr id='title-line'/></h1>
      <h2>Give back as you get back.</h2>
      <p>
      The COVID-19 outbreak has quickly become a global crisis. Around the world, events and trips have been cancelled– from music festivals to plane tickets to sporting events. Refunds are being offered by the millions.</p><p>

In this uncertain time, we all want to do our part: to tackle the pandemic together with local relief efforts, help those most in need around the world, and see that humanity is better prepared in the future.
</p>
<p>
The REFUNDRAISING idea is simple: we want event organisers to pledge to include an option to give back some of your coronavirus-refunds to causes on the frontline of research, response, and prevention. And you can encourage them to do so on social media.  
      </p>
      <ul className="actions" id='learn-more'>
        <li>
          <Scroll type="id" element="two" >
            <a href="#two" className="button" id='learn-more'>
              Learn more
            </a>
          </Scroll>
        </li>
</ul>
    </div>
  </section>


export default Introduction;
