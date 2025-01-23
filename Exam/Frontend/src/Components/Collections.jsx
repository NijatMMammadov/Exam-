import React from 'react'

function Collections() {
    return (
        <>
            <section id='collections'>
                <hr style={{marginBottom:"100px"}} />

                <div className='collections contain'>
                    <div className='collections-card'>
                        <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
                        <div className='collections-title'>
                            <p>
                                Collections
                            </p>
                            <h3>
                                Women
                            </h3>
                        </div>
                    </div>
                    <div className='collections-card'>
                        <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
                        <div className='collections-title'>
                            <p>
                                Collections
                            </p>
                            <h3>
                                Children
                            </h3>
                        </div>
                    </div>
                    <div className='collections-card'>
                        <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
                        <div className='collections-title'>
                            <p>
                                Collections
                            </p>
                            <h3>
                                Men
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collections
