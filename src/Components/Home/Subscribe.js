import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <div className='container subscribe_container'>
        <p className='subs_title'>Ready for Next NFT Drop?</p>
        <form className="search-wrapper cf">
            <input type="text" placeholder="Enter your email..." required style={{boxShadow: 'none'}} />
            <button type="submit">Subscribe</button>
        </form>

    </div>
  )
}
