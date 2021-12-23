import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/61byb9QRjBL._SX3000_.jpg" alt=""/>

                    <div className="home__row">
                       <Product 
                            id="12345"
                            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                            price={29.99} 
                            image="https://m.media-amazon.com/images/I/91xxqc9IwcL._AC_SY200_.jpg"
                            rating={3}
                       />
                       <Product
                            id="12346"
                            title="VTech KidiZoom Smartwatch DX2, Black (Amazon Exclusive)"
                            price={599}
                            image="https://m.media-amazon.com/images/I/71KYDouQCEL._AC_SY200_.jpg"
                            rating={4}
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12347"
                            title="Jenga the classic game" 
                            price={29.99} 
                            image="https://m.media-amazon.com/images/I/71s9K-nkYzS._AC_SY200_.jpg"
                            rating={2}
                        />

                        <Product 
                            id="54738"
                            title="IPG for VTech Kidizoom Smartwatch DX2 Watch Screen Protector (2 Units) " 
                            price={29.99} 
                            image="https://images-na.ssl-images-amazon.com/images/I/61aOUy3kPNL._AC_UL160_SR160,160_.jpg"
                            rating={5}
                        />

                        <Product 
                            id="45467"
                            title="UNO Family Card Game, with 112 Cards in a Sturdy Storage Tin, Travel-Friendly " 
                            price={10.99} 
                            image="https://images-na.ssl-images-amazon.com/images/I/61ov9uJv78L._AC_UL160_SR160,160_.jpg"
                            rating={5}
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="57840"
                            title="Fisher-Price On-the-Go Baby Dome, Grey/Blue/Yellow/White" 
                            price={10.99} 
                            image="https://m.media-amazon.com/images/I/71uYby6qr9L._AC_SY200_.jpg"
                            rating={2}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Home
