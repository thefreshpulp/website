import React from 'react'
import fruits from './fruits.json';
import vegetables from './vegetables.json';
function Products() {
  return (
    <section className='product-section all-product-section cold-pressed-section'>
        <div className='container'>
            <div className='flex justify-content-center'>
                <h5 className='heading'>Juices</h5>
            </div>
            <div className='sub-heading'>
                <h4>Fruit Juices</h4>
            </div>
            <div className='flex justify-content-sp-btw align-items-center flex-column mt-2 flex-wrap'>
                {
                    fruits.map(item => (
                        <section className='mt-2'>
                            <figure>
                                <img src={`/products/${item.img_link}`} alt={`${item.img_link}`}/>
                            </figure>
                            <div className='flex align-items-center prices'>
                                <h6>Normal Price:</h6>
                                <p>{item.normal_price} Rs</p>
                            </div>
                            <div className='flex align-items-center prices'>
                                <h6>Subscription Price:</h6>
                                <p>{item.subscription_price} Rs</p>
                            </div>
                            <div className='product-details'>
                                <h5>{item.Title}</h5>
                            </div>
                        </section>
                    ))
                }
            </div>
            <div className='sub-heading'>
                <h4>Vegetable Juices</h4>
            </div>
            <div className='flex justify-content-sp-btw align-items-center flex-column mt-2 flex-wrap'>
                {
                    vegetables.map(item => (
                        <section className='mt-2'>
                            <figure>
                                <img src={`/products/${item.img_link}`} alt={`${item.img_link}`}/>
                            </figure>
                            <div className='flex align-items-center prices'>
                                <h6>Normal Price:</h6>
                                <p>{item.normal_price} Rs</p>
                            </div>
                            <div className='flex align-items-center prices'>
                                <h6>Subscription Price:</h6>
                                <p>{item.subscription_price} Rs</p>
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