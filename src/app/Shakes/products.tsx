import React from 'react';
import products from './products.json';


function Products() {
  return (
    <section className='product-section all-product-section cold-pressed-section'>
        <div className='container'>
            <div className='flex justify-content-center'>
                <h5 className='heading'>Shakes & Mocktails</h5>
            </div>
            <div className='flex justify-content-sp-btw align-items-center flex-column mt-2 flex-wrap'>
                {
                    products.map(item => (
                        <section className='mt-2'>
                            <figure>
                                <img src={`/allproducts/${item.img_link}`} alt={`${item.img_link}`}/>
                            </figure>
                            <div className='flex align-items-center prices'>
                                <h6>Normal Price:</h6>
                                <p>{item.normal_price} Rs</p>
                            </div>
                            <div className='product-details'>
                                <h5>{item.Title}</h5>
                            </div>
                        </section>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Products;