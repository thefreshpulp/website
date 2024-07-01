import React from 'react'

function Products() {
  return (
    <section className='product-section all-product-section cold-pressed-section'>
        <div className='container'>
            <div className='flex justify-content-center'>
                <h5 className='heading'>Momos & Snacks</h5>
            </div>
            <div className='flex justify-content-sp-btw align-items-center flex-column mt-2'>
                <section>
                    <figure>
                        <img src='/products/apple.jpg' alt='apple juice'/>
                    </figure>
                    <div className='flex align-items-center prices'>
                        <h6>Normal Price:</h6>
                        <p>100 Rs</p>
                    </div>
                    <div className='flex align-items-center prices'>
                        <h6>Subscription Price:</h6>
                        <p>80 Rs</p>
                    </div>
                    <div className='product-details'>
                        <h5>Apple Juice</h5>
                    </div>
                </section>
                <section>
                    <figure>
                        <img src='/products/apple.jpg' alt='apple juice'/>
                    </figure>
                    <div className='flex align-items-center prices'>
                        <h6>Normal Price:</h6>
                        <p>100 Rs</p>
                    </div>
                    <div className='flex align-items-center prices'>
                        <h6>Subscription Price:</h6>
                        <p>80 Rs</p>
                    </div>
                    <div className='product-details'>
                        <h5>Apple Juice</h5>
                    </div>
                </section>
                <section>
                    <figure>
                        <img src='/products/apple.jpg' alt='apple juice'/>
                    </figure>
                    <div className='flex align-items-center prices'>
                        <h6>Normal Price:</h6>
                        <p>100 Rs</p>
                    </div>
                    <div className='flex align-items-center prices'>
                        <h6>Subscription Price:</h6>
                        <p>80 Rs</p>
                    </div>
                    <div className='product-details'>
                        <h5>Apple Juice</h5>
                    </div>
                </section>
                <section>
                    <figure>
                        <img src='/products/apple.jpg' alt='apple juice'/>
                    </figure>
                    <div className='flex align-items-center prices'>
                        <h6>Normal Price:</h6>
                        <p>100 Rs</p>
                    </div>
                    <div className='flex align-items-center prices'>
                        <h6>Subscription Price:</h6>
                        <p>80 Rs</p>
                    </div>
                    <div className='product-details'>
                        <h5>Apple Juice</h5>
                    </div>
                </section>
            </div>
        </div>
    </section>
  )
}

export default Products;