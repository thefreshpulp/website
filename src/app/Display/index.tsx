import React from 'react'

function Display() {
  return (
    <section className='display-section'>
        <div className='container'>
            <div className='flex justify-content-center align-items-center'>
                <section className='display-image'>
                    <img src='/display/orange.png' alt='orange fruit'/>
                </section>
                <h4 className='shadows-into-light-two-regular heading'>Why choose <span className='highlight'>Pulppy</span></h4>
            </div>
            <div className='flex justify-content-sp-btw align-items-flex-start flex-column'>
                <figure className='fruits-section'>
                    <img src='/all-fruits.avif' alt='all fruits'/>
                </figure>
                <article className='fruits-article'>
                    <ul>
                        <li>Preservative Free</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero laudantium soluta ut, mollitia odit</p>
                        <li>Freshly Squeezed</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero laudantium soluta ut, mollitia odit</p>
                        <li>No Added Sugar</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero laudantium soluta ut, mollitia odit</p>
                        <li>100% Healthy</li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero laudantium soluta ut, mollitia odit</p>
                    </ul>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Display