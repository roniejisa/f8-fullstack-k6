import React from 'react'
import style from './Product.module.scss';
import clsx from 'clsx';
const Product = () => {
  return (
    <div className='products'>
        <h1>Product</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur quos laborum maxime voluptatum eum doloribus debitis autem, dicta recusandae eveniet quo adipisci nihil accusamus minus eaque qui ex possimus.</p>
        <button className={clsx(style.btn,style.products)}>Xem chi tiết</button>
    </div>
  )
}

export default Product