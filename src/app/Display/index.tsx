import React from 'react'

function Display() {
  return (
    <section className='display-section'>
        <div className='container'>
            <div className='flex justify-content-center align-items-center'>
                <section className='display-image'>
                    <img src='/display/orange.png' alt='orange fruit'/>
                </section>
                <h4 className='shadows-into-light-two-regular heading'>Why choose <span className='highlight'>Fresh Pulp</span></h4>
            </div>
            <div className='flex justify-content-sp-btw align-items-flex-start flex-column'>
                <figure className='fruits-section'>
                    <img src='/all-fruits.avif' alt='all fruits'/>
                </figure>
                <article className='fruits-article'>
                    <ul>
                        <li>Preservative Free</li>
                        <p>Preservative-free fruit juices that offer the pure, natural taste of freshly squeezed fruits without any artificial additives.</p>
                        <li>Freshly Squeezed</li>
                        <p>Freshly squeezed fruit juices that deliver the pure, natural essence of fruits, ensuring a deliciously refreshing experience.</p>
                        <li>No Added Sugar</li>
                        <p>No added sugar fruit juices that maintain the natural sweetness of fruits without any additional artificial sweeteners.</p>
                        <li>100% Healthy</li>
                        <p>100% healthy fruit juices, crafted to preserve the natural goodness of fruits without any additives.</p>
                    </ul>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Display