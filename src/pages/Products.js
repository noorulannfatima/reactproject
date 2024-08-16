import React from 'react'
import { product } from '../data/data'

const Products = () => {
  return (
    <div className='container'>
      <h3 className='text-center'>Product page</h3>
      <div className="row px-3">
        {
          product.map((item, i) => {
            return (
              <div className="col-sm-6 col-md-4 mb-4">
                <div className="card h-100" key={i}>
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text'>{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products

