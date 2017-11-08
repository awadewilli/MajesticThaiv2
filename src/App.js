import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import leaf from './images/leaf.svg';
import utensil from './images/utensils.svg';
import bowl from './images/bowl.svg';

function OrderForm(props){
  return <div className="container-fluid">
            <div className="row order-page">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <ul>
                  <li className="menu-item">
                    <span className="item">Item1</span>
                    <span className="price">$99.99</span>
                    <p>lipsum lipsum lipsum</p>
                    <button className="btn btn-primary">Add</button>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="row">
                  <h3 className="cart-name">Your Order</h3>
                  <div className="cart col-xs-12">
                    <div id="order-items" className="row">
                        <div className="col-xs-6">
                        <span className="cart-item">Item1</span>
                        </div>
                        <div className="col-xs-6">
                          $99.99
                        </div>
                    </div>
                    <div id="order-total">
                      <span>Total Price:$99.99</span>
                    </div>
                    <button type="button" className="btn btn-primary" > Place Your Order</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <form>
                      <input label="First Name" name="first-name" value="example name"/>
                      <input label="Last Name" name="last-name" value="example name"/>
                      <input label="Delivery Address"  name="address" value="example name"/>
                      <input label="city" name="city" value="example name"/>
                      <input label="zip" name="zip" value="example name"/>
                      <button className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

}

function Home(props){
    return <div className="container-fluid">
      <div className="row ourstory">
        <div className="col-md-8 col-md-offset-2">
          <div className="top-image">
            <div className="prof-pic">
              <div className="prof-img"></div>
            </div>
          </div>
          <p>
            <span>We invite you to celebrate refined Thai cuisine and an invigorating dining experience in the heart of Greenville SC.</span>
            <span> Since opening the first restaurant in Greenville to rave reviews, several trendy locations have followed over the last dozen years. Each space stylishly appointed to reflect the culture and energy of the noteworthy Southern cities they inhabit.</span>          </p>
        </div>
      </div>
      <div className="row">
        <div className="border-img"></div>
        <div className="col-md-8">
          <div className="row">
              <div className="col-md-12 splash-img topleft-img"></div>
          </div>
          <div className="row">
              <div className="col-md-12 splash-img topbottom-img"></div>
          </div>
        </div>
        <div className="col-md-4 splash-img topright-img">

        </div>
      </div>
      <div className="row order-row">
        <div className="col-md-10 col-md-offset-1">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12 descrip">
            <div>  <img src={bowl} /> </div>
            <h2>Join us for Dinner</h2>
              <p>We invite you to celebrate refined Thai cuisine and an
                invigorating dining experience in the heart of Greenville SC.
              </p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 hours">
              <div><img src={utensil} /></div>
              <h2>Hours</h2>
              <p>
                <span>12:00 - 9:00</span>
                <span>M-Sat</span>
              </p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 contact-info">
            <div>  <img src={leaf} /> </div>
              <h2>Contact Us</h2>
              <span className="phone">864-8675-309</span>
              <span>CustomerServicei@MajesticThai.com</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3" id="orderbutton">
              <button className="orderbutton" >
              <span> Place Your Order Online</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row bottom-pic">
        <div className="col-md-6 splash-img bottom-img-1"></div>
        <div className="col-md-6 splash-img bottom-img-2"></div>
      </div>
      <footer className="row">

      </footer>
    </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderForm />

      </div>
    );
  }
}

export default App;
