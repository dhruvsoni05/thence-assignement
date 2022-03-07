import React from 'react'

export default function Banner() {
  return (
    <div className='banner_start'>
        <div className="container">
            <div className="row mob_align">
                {/* <div className="y_ball"></div>
                <div className="pu_ball"></div> */}
                <div className="col-12 col-md-6">
                    <div className="left">
                        <h1 className='cust-title'>Explore, Buy and Sell the <span className='yel_text'>Best NFTs!</span></h1>
                        <div className="btn_div">
                            <button className='head_btn_full'>Explore</button>
                            <button className='head_btn'>Create</button>
                        </div>

                        <div className='stats_box mod_d_none'>
                            <h3 className='stats_title'>32k+<br/>
                                <span className='stats_des'>Artworks</span>
                            </h3>
                            <h3 className='stats_title'>20k+<br/>
                                <span className='stats_des'>Auctions</span>
                            </h3>
                            <h3 className='stats_title'>12k+<br/>
                                <span className='stats_des'>Creators</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 glass_effect">
                    <div className="right">
                        <div className="in_right">
                            <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646399701/thence/Group_36652_imy9po.svg" alt="card_img_banner" className='ban_img'/>
                            <div className='img_wh_box'>
                                <p className='art_txt'>Artist<br/> <span className='artist_id'> @wzard</span></p>
                                <button className='head_btn_full my-0 me-0'>Start Bid</button>
                            </div>
                        </div>
                    </div>
                    <div className="down_eclipse">
                        <ion-icon name="arrow-down-outline" size="large" class="dw_arrow md icon-large hydrated"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='stats_box mob_only_stats '>
                    <h3 className='stats_title'>32k+<br/>
                        <span className='stats_des'>Artworks</span>
                    </h3>
                    <h3 className='stats_title'>20k+<br/>
                        <span className='stats_des'>Auctions</span>
                    </h3>
                    <h3 className='stats_title'>12k+<br/>
                        <span className='stats_des'>Creators</span>
                    </h3>
                </div>
                <div className="col-12 brand_row">
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646421765/thence/Vector_tyrewv.png" alt="coinbase" className='brand_logo' />
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646421780/thence/Vector_1_nflqet.png" alt="blockchain" className='brand_logo' />
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646421825/thence/Group_lslmdu.png" alt="binance" className='brand_logo' />
                    <img src="https://res.cloudinary.com/dsj9t6adh/image/upload/v1646421863/thence/Group_1_rqb1o5.png" alt="bemex" className='brand_logo'/>
                </div>
            </div>
        </div>
    </div>
  )
}
