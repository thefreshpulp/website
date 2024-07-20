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
                    <Link href=''>                  
                      <figure className='disabled'>
                        <img src='/partners/zomato.png' alt='zomato'/>
                      </figure>
                    </Link>
                    <Link href='https://magicpin.in/walletRecharge?merchantId=49364748'>                  
                      <figure>
                        <img src='/partners/magicpin.svg' alt='magicpin'/>
                      </figure>
                    </Link>
                  </div>
            </article>
            <article className='stores-article'>
              <Link href='https://maps.app.goo.gl/g8Go6XxBVjTfXyxB8'>
                <figure>
                  <img src='/stores/store4.jpg' alt='store two'/>
                </figure>
              </Link>
              <address>
                <p>OU Colony, Shaikpet, HYD</p>
              </address>
              <div className='partners flex justify-content-sp-btw align-items-center'>
                <Link href='https://link.zomato.com/xqzv/rshare?id=80111449305630c9'>                  
                  <figure>
                    <img src='/partners/zomato.png' alt='zomato'/>
                  </figure>
                </Link>
                <Link href='https://magicpin.in/walletRecharge?merchantId=49364398'>                  
                  <figure>
                    <img src='/partners/magicpin.svg' alt='magicpin'/>
                  </figure>
                </Link>
              </div>
            </article>
            <article className='stores-article'>
              <Link href='https://maps.app.goo.gl/ajBoHwH1NM1HwUyd6'>
                <figure className='stores-figure'>
                  <img src='/stores/store2.jpeg' alt='store three'/>
                </figure>
              </Link>
              <address>
                <p>Rajendra Nagar, Attapur, HYD</p>
              </address>
              <div className='partners flex justify-content-sp-btw align-items-center'>
                <Link href='https://link.zomato.com/xqzv/rshare?id=76312084305632aa'>                  
                  <figure>
                    <img src='/partners/zomato.png' alt='zomato'/>
                  </figure>
                </Link>
                <Link href='https://magicpin.in/walletRecharge?merchantId=48106321'>                  
                  <figure>
                    <img src='/partners/magicpin.svg' alt='magicpin'/>
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