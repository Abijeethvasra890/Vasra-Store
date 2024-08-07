import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200  min-h-32 p-5 gap-5'>
        <div className='flex flex-col md:flex-row items-center justify-around'>
            <div className='flex flex-col gap-3 p-5'>
                <div className="text-2xl font-black">VASRA.CO</div>
                <p>We have clothes that suit your style and <br/> 
                which you're proud to wear. From <br /> 
                women to men.
                </p>
                <div className='flex gap-3'>
                    <img src='/Twitter.png'/>
                    <img src='/Facebook.png'/>
                    <img src='/Insta.png'/>
                    <img src='/Git.png'/>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-3 p-5'>
                    <div className="text-xl font-bold uppercase">Company</div>
                    <p>About</p>
                    <p>Features</p>
                    <p>Work</p>
                    <p>Career</p>
                </div>
                <div className='flex flex-col gap-3 p-5'>
                    <div className="text-xl font-bold uppercase">Help</div>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-3 p-5'>
                    <div className="text-xl font-bold uppercase">FAQ</div>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                <div className='flex flex-col gap-3 p-5'>
                    <div className="text-xl font-bold uppercase">Resources</div>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
        </div>
        <hr className="h-px mx-10 my-5 border-0 bg-gray-400"></hr>
        <div className='flex flex-col md:flex-row px-5 mx-5 justify-center gap-3 md:justify-between items-center'>
            <p>Vasra.co 2000-2024, All Rights Reserved</p>
            <div className='flex'>
                <img src='/visa.png'/>
                <img src='/mastercard.png'/>
                <img src='/paypal.png'/>
                <img src='/applepay.png'/>
                <img src='/gpay.png'/>
            </div>
        </div>
    </div>


  )
}

export default Footer