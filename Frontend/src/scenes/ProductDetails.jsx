import React from 'react'


function ProductDetails({productDetails}) {
  return (
    <>
      {/* {JSON?.parse(productDetails?.productDescription) || ""} */}
        <div dangerouslySetInnerHTML={{__html:JSON?.parse(productDetails?.productDescription || "[]")}}>
          
        </div>
    </>
  )
}

export default ProductDetails