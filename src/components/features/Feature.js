import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, heading, description, to}) =>
  <section>
    <a href={href}  className="image fit" alt="image">
    <div className='darken'></div>
     <img src={image} alt="" data-position="center center" className='duotone' /> 
     
    <div className='lighten'></div>
    </a>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <a className="button" href={to.href} target='_blank'>
              {to.label}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
