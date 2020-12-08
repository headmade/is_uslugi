import React from 'react'

import display from '../../CrossBrowser/display.svg'
import '../../CrossBrowser/CrossBrowser.sass'

const CrossBrowser = () => (
  <div id="cross-browser" className="wrapper-cross-browser">
    <div className="row">
      <div className="columns">
        <section className="cross-browser">
          <h2 className="cross-browser__caption">Runs on all modern devices</h2>
          <div className="cross-browser__wrapper-img">
            <img src={display} alt="display" />
          </div>
        </section>
        <br/>
        <a href="https://demo.uslugi.headmade.pro" className="btn accent">Demo server</a>
      </div>
    </div>
  </div>
)

export default CrossBrowser
