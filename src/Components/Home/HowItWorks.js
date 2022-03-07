import React from 'react'
import './howitworks.css'

export default function HowItWorks() {
  return (
    <div className='container how_work'>
        <p className='how_title'>How it works</p>
        <div className="row">
            <div className="col-md-3 col-12">
                <div>
                    <div className="work_elem">
                        <div className="bg_eclipse">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646608290/thence/Vector_3_lmkfub.png" alt="" className='work_icons'/>
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646636052/thence/Vector_1_ymzqai.png" alt="" className='line_img'/>
                        </div>
                        <p className='work_text'>Set up your wallet</p>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div>
                    <div className="work_elem">
                        <div className="bg_eclipse">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646608290/thence/Vector_3_lmkfub.png" alt="" className='work_icons'/>
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646636052/thence/Vector_1_ymzqai.png" alt="" className='line_img'/>
                        </div>
                        <p className='work_text'>Create your collection</p>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div>
                    <div className="work_elem">
                        <div className="bg_eclipse">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646608290/thence/Vector_3_lmkfub.png" alt="" className='work_icons'/>
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646636052/thence/Vector_1_ymzqai.png" alt="" className='line_img'/>
                        </div>
                        <p className='work_text'>Add your NFTs</p>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div>
                    <div className="work_elem">
                        <div className="bg_eclipse">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646608290/thence/Vector_3_lmkfub.png" alt="" className='work_icons'/>
                            {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646636052/thence/Vector_1_ymzqai.png" alt="" className='line_img'/> */}
                        </div>
                        <p className='work_text'>List them for sale</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
