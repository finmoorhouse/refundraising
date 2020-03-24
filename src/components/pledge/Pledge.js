import React from 'react';
import Scroll from '../common/Scroll';

const Pledge = () =>
  <section id="two" className="wrapper style3 fullscreen fade-up">
    <div className="inner">
      <h1>Pledge to Refundraise</h1>
      <hr/>
      <h2>Event Organisers</h2>
      <p>Event organisers: we're asking you to get on board! We're asking you to implement an option in your refund process to give a part of the refund to the relief fund. By joining now, you have the opportunity to set an example for other events, platforms and organisers. Time is of the essence: every day, more refunds are issued without a clear option to donate a portion to these causes.</p>
      <h2>Individuals</h2>
      <p>
      You can encourage event organisers to include an option to donate to the COVID-19 relief fund by emailing or calling the organisers or events near to you. Send them to this website (<a href='https://refundraising.org/' target='_blank'>refundraising.org</a>). Share the idea on social media using #REFUNDRAISING.
      </p>
      <p>
      If you are expecting or have received a refund caused by the coronavirus outbreak, you can also directly donate to our COVID-19 fund. We recommend either £19 or 19% of your refund – whatever seems reasonable to you (although you’re free to choose any amount). And check out <a href='https://cancelcorona.org/' target='_blank'>cancelcorona.org</a>!
      </p>

      <ul className="actions">
        <li>
          <Scroll type="id" element="three">
            <a href="#three" className="button">
              The charities
            </a>
          </Scroll>
        </li>
</ul>
    </div>
  </section>


export default Pledge;
