import Link from 'next/link'
import React from 'react'

function Products() {
  return (
    <section className='product-section'>
        <div className='container'>
            <div className='flex justify-content-center'>
                <h4 className='heading'>Categories</h4>
            </div>
            <div className='flex justify-content-sp-btw align-items-center flex-column mt-2'>
                <section className='single-product-section'>
                    <Link href='/Cold-pressed' >
                        <figure>
                            <img src='/products/mango.jpg' alt='Cold-pressed juices'/>
                        </figure>
                    </Link>
                    <Link href='/Cold-pressed' >
                        <div className='product-details'>
                            <h4>Cold-Pressed Juices</h4>
                        </div>
                    </Link>
                </section>
                <section className='single-product-section'>
                    <Link href='/Juices'>
                        <figure>
                            <img src='/products/grape.jpg' alt='Juices'/>
                        </figure>
                    </Link>
                    <Link href='/Juices'>
                        <div className='product-details'>
                            <h4>Juices</h4>
                        </div>
                    </Link>
                </section>
                <section className='single-product-section'>
                    <Link href='/Snacks'>
                        <figure>
                            <img src='/products/Momos2.jpg' alt='moms and snacks'/>
                        </figure>
                    </Link>
                    <Link href='/Snacks'>
                        <div className='product-details'>
                            <h4>Momos and Snacks</h4>
                        </div>
                    </Link>
                </section>
                <section className='single-product-section'>
                    <Link href='/Shakes'>
                        <figure>
                            <img src='/products/strawberry.jpg' alt='Strawberry juice'/>
                        </figure>
                    </Link>
                    <Link href='/Shakes'>
                        <div className='product-details'>
                            <h4>Shakes and Mocktails</h4>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    </section>
  )
}

export default Products