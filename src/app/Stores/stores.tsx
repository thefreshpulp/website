import Link from 'next/link';
import React from 'react'

function Stores() {
  return (
      <section>
        <div className='container'>
          <section className='stores-heading'>
            <h5>Our Outlets</h5>
          </section>
          <section className='store-article-group'>
            <article className='stores-article'>
                  <Link href='https://maps.app.goo.gl/oCMHdfSKAyGauzhz7'>
                    <figure>
                      <img src='/stores/store1.jpeg' alt='store one'/>
                    </figure>
                  </Link>
                  <address>
                    <p>Manikonda, HYD</p>
                  </address>
                  <div className='partners flex justify-content-sp-btw align-items-center'>
                    <Link href='https://www.zomato.com/hyderabad/the-fresh-pulp-1-manikonda'>                  
                      <figure>
                        <img src='/partners/zomato.png' alt='zomato'/>
                      </figure>
                    </Link>
                    <Link href=''>                  
                      <figure>
                        <img src='/partners/swiggy.png' alt='swiggy'/>
                      </figure>
                    </Link>
                  </div>
            </article>
            <article className='stores-article'>
              <Link href='https://maps.app.goo.gl/g8Go6XxBVjTfXyxB8'>
                <figure>
                  <img src='/stores/store2.jpeg' alt='store two'/>
                </figure>
              </Link>
              <address>
                <p>OU Colony, Shaikpet, HYD</p>
              </address>
              <div className='partners flex justify-content-sp-btw align-items-center'>
                <Link href=''>                  
                  <figure>
                    <img src='/partners/zomato.png' alt='zomato'/>
                  </figure>
                </Link>
                <Link href=''>                  
                  <figure>
                    <img src='/partners/swiggy.png' alt='swiggy'/>
                  </figure>
                </Link>
              </div>
            </article>
            <article className='stores-article'>
              <Link href='https://maps.app.goo.gl/ajBoHwH1NM1HwUyd6'>
                <figure className='stores-figure'>
                  <img src='/stores/store3.jpeg' alt='store three'/>
                </figure>
              </Link>
              <address>
                <p>Rajendra Nagar, Attapur, HYD</p>
              </address>
              <div className='partners flex justify-content-sp-btw align-items-center'>
                <Link href='https://www.zomato.com/hyderabad/the-fresh-pulp-rajendra-nagar'>                  
                  <figure>
                    <img src='/partners/zomato.png' alt='zomato'/>
                  </figure>
                </Link>
                <Link href='https://www.swiggy.com/restaurants/the-fresh-pulp-balaji-nagar-attapur-hyderabad-846780'>                  
                  <figure>
                    <img src='/partners/swiggy.png' alt='swiggy'/>
                  </figure>
                </Link>
              </div>
            </article>
          </section>
        </div>
      </section>
  )
}

export default Stores;