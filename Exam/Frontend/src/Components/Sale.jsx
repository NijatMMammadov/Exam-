import React from 'react'

function Sale() {
    return (
        <>
            <section id='sale'>
                <div className='sale contain'>
                    <div className='pr-title'>
                        <hr className='pr-hr' />
                        <h3>
                            Big Sale
                        </h3>
                    </div>
                    <div className='sale-cards'>
                        <div className='sale-image'>
                            <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
                        </div>
                        <div className='sale-title'>
                            <h2 style={{color:"rgb(128, 120, 235)"}}>
                                50% less in all items
                            </h2>
                            <p>
                                By Carl Smith • September 3, 2018
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quisquam iste dolor accusantium facere corporis ipsum animi <br />deleniti fugiat. Ex, veniam?
                            </p>
                            <button className='btn-sale'>
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Sale
