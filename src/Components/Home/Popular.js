import React from 'react'
import './Popular.css'

export default function Popular() {
  return (
    <div className='popu_container'>
        <p className='pop_title'> <span className='pop_circle'></span> Popular Collections</p>
        <div className="row">
            <div className="pop_collection_slide pop_carousel">
                <div className="box">
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600534/thence/image_9_haboe0.png" alt="artisit_imgae" className='art_img'/>
                    <div className="artist_det">
                        <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                        <p className='art_des_t'>@wzard </p>
                        <div className="ms-auto d-flex align-items-center">
                            {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                            <span className='pop_likes'>ERC-721</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600534/thence/image_9_haboe0.png" alt="artisit_imgae" className='art_img'/>
                    <div className="artist_det">
                        <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                        <p className='art_des_t'>@wzard </p>
                        <div className="ms-auto d-flex align-items-center">
                            {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                            <span className='pop_likes'>ERC-721</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600534/thence/image_9_haboe0.png" alt="artisit_imgae" className='art_img'/>
                    <div className="artist_det">
                        <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                        <p className='art_des_t'>@wzard </p>
                        <div className="ms-auto d-flex align-items-center">
                            {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                            <span className='pop_likes'>ERC-721</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600534/thence/image_9_haboe0.png" alt="artisit_imgae" className='art_img'/>
                    <div className="artist_det">
                        <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600603/thence/Profile_image1_qznixi.png" alt="art_dp" className='art_dp' />
                        <p className='art_des_t'>@wzard </p>
                        <div className="ms-auto d-flex align-items-center">
                            {/* <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646600780/thence/Vector_hjyf6f.png" alt="" /> */}
                            <span className='pop_likes'>ERC-721</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='cur_view_btn'>View All</button>
        </div>
    </div>
  )
}
