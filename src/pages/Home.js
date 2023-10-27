import React from 'react';
import { CART } from './Cart';
import "./Home.css";
import { Link } from 'react-router-dom';


import image1 from "../assets/img/living-room-2732939_1920.jpg";
import image2 from "../assets/img/pexels-max-rahubovskiy-6588592.jpg";
import image3 from "../assets/img/room-1336497_1280.jpg";


export const HOME = () => {
  return (
    <div className='Home'>
        <div className="hero row">
            
            <div className="promo row">
            <div className='col'><Link to='./shop'>save up to 50%</Link> </div>
            </div>
            <div className="img-container">
            <Link to='./shop'><img src={image1} alt="" /></Link>
                <Link to='./shop'><button className='shopBtn cursor'>Shop</button></Link>
            </div>
           
        </div>

        <div className="basic-products row">

          <div className='cursor'>
            <div className="img-container">
              <img src={image2} alt="" />
              <button className='shopBtn2 cursor'>Sale</button>
            </div>
          </div>

          <div className='cursor'>
            <div className="img-container">
              <img src={image2} alt="" />
              <button className='shopBtn2 cursor'>Bestsellers</button>
            </div>
          </div>

          <div className='cursor'>
            <div className="img-container">
              <img src={image2} alt="" />
              <button className='shopBtn2 cursor'>New In</button>
            </div>
          </div>
          
  
        </div>

        <div className="selling-products">

        

        </div>

        <div className="product-by-space col md">

        <h2 className='cursor'>Find the product that suites your space</h2>

        <div className="product-by-space-container  row">

          <div className="img-container">
            <img src={image3} alt="" />
            <button className='shopBtn cursor'>Shop</button>
          </div>

          <div className="img-container">
            <img src={image3} alt="" />
            <button className='shopBtn cursor'>Shop</button>
          </div>

          <div className="img-container">
            <img src={image3} alt="" />
            <button className='shopBtn cursor'>Shop</button>
          </div>

          <div className="img-container">
            <img src={image3} alt="" />
            <button className='shopBtn cursor'>Shop</button>
          </div>

        </div>
          

        </div>

        <div className="customize row">

          <div className="customize-info col">
            <div><h2><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>Customize</h2></div>
            <div>
              <p>
                <b>
                Great design at nice prices
                </b>
              </p>

              <p>
              Furniture made of durable, premium materials. With our online-first policy we can bring you furniture for a much better rate than traditional retailers.
              </p>

            </div>

            <div>
              <p>
                <b>
                14 days to change your mind
                </b>
              </p>

              <p>
              Our friendly delivery staff will deliver your piece in your room, unwrap it and give it a nice wipe down.
              </p>

            </div>

            <div>
              <p>
                <b>
                12 Months Guarantee
                </b>
              </p>

              <p>
              All are products are made just for you with the greatest craftsmanship and devotion and come with a 12-month warranty.
              </p>

            </div>
            <div>
              <p>
                <b>
                Focus on Local Made
                </b>
              </p>

              <p>
              More than 95% of our products are locally designed and manufactured in locally .
              </p>

            </div>
          </div>

          <div className="img-container md">
            <img src={image3} alt="" />
          </div>

        </div>

        <div className="suggest-products col">

          <div><h2 className='cursor'>Products we think you love</h2></div> 

          <div className="suggest-products-container row">

          <div className="img-container">
            <img src={image2} alt="" />
          </div>

          <div className="img-container">
            <img src={image2} alt="" />
          </div>

          <div className="img-container">
            <img src={image2} alt="" />
          </div>

          <div className="img-container">
            <img src={image2} alt="" />
          </div>

          </div>
          
        </div>

        <hr />
        <div className="reviews col">
          <h2>Company reviews</h2>

          <div className='reviews-container row'>
            <div>
            <div className="rating">★★★★★</div>
            <p>
            “Excellent service I received from Furniturespot. My delivery took 1 day and I didn’t even have to call them to enquire about my order. The online shopping was effortless and I also appreciate their payment options. Can’t wait to have the pedestals in my room. “
            </p>
            <p>
              <b>
                -Ren
              </b>
            </p>
          </div>

          <div className='md'>
            <div className="rating">★★★★★</div>
            <p>
            “Excellent service I received from Furniturespot. My delivery took 1 day and I didn’t even have to call them to enquire about my order. The online shopping was effortless and I also appreciate their payment options. Can’t wait to have the pedestals in my room. “
            </p>
            <p>
              <b>
                -Ben
              </b>
            </p>
          </div>

          <div className='md'>
            <div className="rating">★★★★★</div>
            <p>
            “Excellent service I received from Furniturespot. My delivery took 1 day and I didn’t even have to call them to enquire about my order. The online shopping was effortless and I also appreciate their payment options. Can’t wait to have the pedestals in my room. “
            </p>
            <p>
              <b>
                -Jenny
              </b>
            </p>
          </div>

          </div>
          
          
        </div>
        <hr />

        <div className="inspiration row">
          <div className='col'>
            <h2>Inspiration</h2>

            <div>

            <p>
            Picking the right furniture for your room isn’t always easy. Wander through inspiring interiors, find tips on everything from styling to bedroom furniture, and discover fresh ideas to transform your home. 
            </p>

          </div>

          <button>Design resources</button>

          </div>

          <div className="img-container sm">
            <img src={image2} alt="" />
          </div>

        </div>

        <div className="newsletter row">

          <div className="img-container">
            <img src={image1} alt="" />
          </div>

          <div className='col'>
            <h2>Newsletter</h2>
            <p>
            Get new products and promotions in your inbox. Unsubscribe at any time.
            </p>
          <form action="">
           <p><input type="checkbox" name="T&C" id="T&C" />
           &nbsp; 
           
           I agree to the site's terms & privacy policy</p> 
           <div className='row'>
            <input type="text" name="" id="" placeholder='Name'/>
            <input type="text" name="" id="" placeholder='Gmail' />
           </div>
           
           <button>Sign UP</button>
          </form>
          </div>
          
          

        </div>

        <div className="ending-quote">
          <h3>SHOP & INSPIRE</h3>
          <p>We love to see the Furniture Store Modern Living Inspiration</p>
          <p>Follow Us: @FurnitureStore</p>
        </div>

        <footer>
          <ul>
            <li className='cursor'>Terms & conditions</li>
          </ul>
          <ul>
            <li className='cursor'>Privacy Policy</li>
          </ul>
          
        <p>
          This is a project built using react.js
        </p>

        </footer>

    </div>
  )
}
