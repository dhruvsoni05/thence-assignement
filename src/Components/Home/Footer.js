import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='container footer'>
        <div className="row">
            <div className="col-md-6 col-12">
                <div className="left_ft">
                    <img src="../logo.png" alt="" />
                    <div className="desc">
                        <p className='fot_des'>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-6">
                        <p className='fot_in_title'>About Us</p>
                        <ul className='fot_list'>
                            <li>About NFTs</li>
                            <li>Live Auctions</li>
                            <li>NFT Blog</li>
                            <li>Activity</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <p className='fot_in_title'>Support</p>
                        <ul className='fot_list'>
                            <li>About NFTs</li>
                            <li>Live Auctions</li>
                            <li>NFT Blog</li>
                            <li>Activity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
