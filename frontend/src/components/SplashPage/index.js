import React from 'react';
// import splash from '../../asset/splash.png'
import './SplashPage.css';
import { NavLink} from 'react-router-dom';

function SplashPage() {
  return (
    <>
      <div id='background'>

        <div id='join-box'>
          <svg aria-hidden="true" class="fc-orange-500 mb16 svg-spot spotSearch" width="48" height="48" viewBox="0 0 48 48"><path d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z" opacity=".2"></path><path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path></svg>
          <h2>Find the best answer to your technical question, help others answer theirs</h2>
          <NavLink to="/signup" id='join-button'>Join the community</NavLink>
        </div>

        <h1 id='big'>Every Developer Has A Queue Of Questions</h1>
        <h2 id='tag'> Join in on the queue by asking, answering, and voting on questions! </h2>
      </div>

    </>
  );
}

export default SplashPage;


