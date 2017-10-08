import React from 'react'
import FruitItem from '../fruit-item'
import stylesheet from './style.scss'

class ServiceReference extends React.Component {

  render() {
    return (
      <div className="ServiceReference">
        <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
        <div className="ServiceReference__items">

          <article className="ServiceReference__item">
            <div className="ServiceReference__item--header">
              <figure>
                <img src="./static/images/trophy-256.ico"></img>
              </figure>
              <div>
                <h2>QUALITY</h2>
              </div>
            </div>
            <div className="ServiceReference__item--description">
              <h2>1ST.</h2>
              <p>Best product</p>
            </div>
          </article>

          <article className="ServiceReference__item">
            <div className="ServiceReference__item--header">
              <figure>
                <img src="./static/images/truck-2-xxl.png"></img>
              </figure>
              <div>
                <h2>SHIPPING</h2>
              </div>
            </div>
            <div className="ServiceReference__item--description">
              <h2>0USD</h2>
              <p>Absolute free</p>
            </div>
          </article>

          <article className="ServiceReference__item">
            <div className="ServiceReference__item--header">
              <figure>
                <img src="./static/images/online-support-xxl.png"></img>
              </figure>
              <div>
                <h2>SUPPORT</h2>
              </div>
            </div>
            <div className="ServiceReference__item--description">
              <h2>24H</h2>
              <p>With you</p>
            </div>
          </article>

        </div>
        <div>
          <div className="ServiceReference__title--button">
            <div className="action">MORE INFO</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceReference
