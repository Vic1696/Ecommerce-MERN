import React from 'react'
import laptop from '../images/laptop.jpeg'
import shoes from '../images/shoes.jfif'
import phone from '../images/1phone.jfif'
import sound from '../images/soundSystem.jpg'
import loan from '../images/money.jpg'
import investment from '../images/envelopeMoney.jpg'

const AboutUs = () => {
  return (
    <div>
        <div className='Products'>
          {/* <img className='image' src={phone} alt=''/> */}

            <div className="contactInfo container">
            <p>At Comrades second choice, shop with us to find top quality goods</p>
            <p>at comrade friendly prices.With us, you'll get all goods with </p>
               <p>just one stop shop: </p>
      <div className="row">
        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <div className="insfo-image">
            <img className='image' src={laptop} alt=''/>

            </div>
            <h5>Computer Hardware and Software Services</h5>
            <p>With us,you'll find laptops and any other computer appliances you may need. </p>
          </div>
        </div>
        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <img className='image' src={phone} alt=''/>
            </div>
            <h5>Electronics, Phones and Tablets</h5>
            <p> Check us out for sound systems ,phones and tablets at comrade friendly prices</p>
          </div>
        </div>
        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <img className='image' src={sound} alt=''/>
            </div>
            <h5>Home Furniture and appliances</h5>
            <p>Furnish and style your house with the best products courtesy of Comrades second choice.</p>
          </div>
        </div>
        

        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <img className='image' src={shoes} alt=''/>
            </div>
            <h5>Fashion and beauty</h5>
            <p>Reward yourself with the best products in the market and at friendly prices.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-md- contact-Box">
          <div className="box-info">
            <div className="info-image">
            <img className='image' src={loan} alt=''/>
            </div>
            <h5>LOANS   </h5>
            <p>Are you in financial distress?</p>
            <p>Consult us to receive aid through loans at comrade friendly rates.</p>
          </div>
        </div>  

        <div className="col-12 col-md- contact-Box">
          <div className="box-info">
            <div className="info-image">
            <img className='image' src={investment} alt=''/>
            </div>
            <h5>INVESTMENTS</h5>
            <p>Put your money into good use by investing with us.</p>
            <p>Have your money work for you as you continue engaging in your other activities.</p>
          </div>
        </div>





        </div>



    </div>
  )
}

export default AboutUs