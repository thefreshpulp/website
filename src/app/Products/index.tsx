import React from 'react'

function Products() {
  return (
    <section className='product-section'>
        <div className='container'>
            <div className='flex justify-content-center'>
                <h4 className='heading'>Menu</h4>
            </div>
            <div className='flex justify-content-sp-btw align-items-center flex-column mt-2'>
                <section>
                    <figure>
                        <img src='/products/apple.jpg' alt='apple juice'/>
                    </figure>
                    <div className='product-details'>
                        <h4>Apple Juice</h4>
                    </div>
                </section>
                <section>
                    <figure>
                        <img src='/products/dragon.jpg' alt='dragon fruit juice'/>
                    </figure>
                    <div className='product-details'>
                        <h4>DragonFruit Juice</h4>
                    </div>
                </section>
                <section>
                    <figure>
                        <img src='/products/grape.jpg' alt='grape juice'/>
                    </figure>
                    <div className='product-details'>
                        <h4>Grape Juice</h4>
                    </div>
                </section>
                <section>
                    <figure>
                        <img src='/products/mango.jpg' alt='mango juice'/>
                    </figure>
                    <div className='product-details'>
                        <h4>Mango Juice</h4>
                    </div>
                </section>
            </div>
        </div>
    </section>
  )
}

export default Products