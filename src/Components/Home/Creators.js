import React from 'react'
import './Creators.css'

export default function Creators() {
  return (
    <div className='creator_container'>
        <div className="container create">
            <p className='pop_title'> <span className='crt_circle'></span> Top Creators</p>
            <div className='row creator_boxes'>
                <div className="create_b col-12 col-md-5">
                        <div className="crt_det">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                            <p className='crt_des_t'>Virtual Art <br /> <span>by @wzard</span> </p>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                                {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                                <p className='crt_likes'>33 <br /> <span> Items</span></p>
                        </div>
                </div>
                <div className="create_b col-12 col-md-5">
                        <div className="crt_det">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                            <p className='crt_des_t'>Virtual Art <br /> <span>by @wzard</span> </p>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                                {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                                <p className='crt_likes'>33 <br /> <span> Items</span></p>
                        </div>
                </div>
                <div className="create_b col-12 col-md-5">
                        <div className="crt_det">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                            <p className='crt_des_t'>Virtual Art <br /> <span>by @wzard</span> </p>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                                {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                                <p className='crt_likes'>33 <br /> <span> Items</span></p>
                        </div>
                </div>
                <div className="create_b col-12 col-md-5">
                        <div className="crt_det">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                            <p className='crt_des_t'>Virtual Art <br /> <span>by @wzard</span> </p>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                                {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                                <p className='crt_likes'>33 <br /> <span> Items</span></p>
                        </div>
                </div>
            </div>
            <button className='cur_view_btn'>View All</button>

        </div>
    </div>
  )
}
