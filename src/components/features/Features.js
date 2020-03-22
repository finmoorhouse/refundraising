import React from 'react';

import pic1 from '../../images/1.jpg';
import pic2 from '../../images/2.jpg';
import pic3 from '../../images/3.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
   
    {
      href: '/#',
      image: pic2,
      heading: 'Development Media International',
      description: 'DMI conducts evidence-based media campaigns to change behaviours in low-income countries. Currently, there is a shortage of funding for public health messaging in sub-Saharan Africa. Some countries do not have the capacity to share crucial information about public hygeine with their support. DMI has also been independently assessed as a standout charity, and faces a large funding gap.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic3,
      heading: 'Local Initiatives',
      description: " our local communities need urgent relief. That's why X% of our COVID-19 fund goes to (local charity). (local charity) helps to XYZ.",
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic1,
      heading: 'John Hopkins Centre for Health Security',
      description: 'The Johns Hopkins Center for Health Security conducts research aimed at saving lives from biological risks like the pandemic we are facing. CHS explore policy change, new scientific breakthroughs, and technological innovations to prepare for a range of biological threats. They have a track record of policy change.',
      to: {
        href: '/ch',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
        
      
        <div className="content">
      <div className="inner">
        <h1>Where donations go</h1>
       <p>COVID-19 affects all of us: from our local communities to the devloping world. And pandemics will continue to pose a risk after this has passed: so it is critical to capitalise on this moment of heightened awareness and redouble research efforts into preparing for future outbreaks. Through supporting (local charity), Development Media International, and the Johns Hopkins Centre for Disease Security, our fund addressess all three areas.</p>
        </div></div>
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
