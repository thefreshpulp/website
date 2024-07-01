import Link from 'next/link';
import React from 'react'

function SubscriptionTrice() {
  return (
    <section className="subscription-trivis-section">
      <div className="container">
        <div className="flex justify-content-center">
          <h4 className="heading">Subscription</h4>
        </div>
        <article className='subscription-article'>
          <h5>Enjoy 25% Off on All Our Juices!</h5>
          <p>
            Subscribe now and get a refreshing discount on our delicious,
            all-natural juices. Don’t miss out on this juicy offer—subscribe today
            and savor the flavors while saving big!
          </p>
          <div className='subscription-section-figure'>
            <Link href='https://trice.link/HCBJcgZgK2rbc6NG6'>  
              <figure className='subscription-figure'>
                <img src='/partners/trice.webp' alt='trice'/>
              </figure>
            </Link>
          </div>
          <Link href='https://trice.link/HCBJcgZgK2rbc6NG6'>
            <button>Subscribe</button>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default SubscriptionTrice;