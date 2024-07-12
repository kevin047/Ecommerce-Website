import React from 'react'
import { Link } from 'react-router-dom'

function TermsConditions() {
  return (
    <>
        <div className=" h-32 max-sm:h-24  flex flex-col justify-center items-center">
            <h1 className=" text-3xl font-semibold">Terms & Conditions</h1>
            <p className='py-2 px-3'>Home / Terms & Conditions</p>
        </div>
        <div class="px-10 max-md:px-2">
            <div class="rte">
                <div>
                    <h5 className='text-2xl font-bold py-2'>Last Updated: September 08, 2023</h5>
                </div>
                <p>Welcome to the Umino Store, Inc. (“Umino”) web site located at www.everlane.com (“the Site”). Umino provides this Site as a service to our customers. Please read the following terms of service (“Terms”) as they govern your use of our Site and our services and content accessible via our Site. To make these Terms easier to read, the Site and our services and content are collectively called the “Services.”</p>
                <h5 className='text-2xl font-bold py-2'>Privacy Policy</h5>
                <p>Please refer to our Privacy Policy <a href="https://www.umino.com/privacy" className=' underline underline-offset-2'>https://ecom/privacy</a> for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.</p>
                <h5 className='text-2xl font-bold py-2'>Customer Satisfaction</h5>
                <p>At Umino, we are committed to providing our customers with great quality products at low prices. Our products are sold online only in limited quantities and availabilities. We have done our best to display our items as accurately as possible via our Services. Please be aware however that variations in style, color, size, shape and look may occur. If you are not satisfied your purchase, please review our return policy under our FAQ at <Link to="/faq" className=' underline underline-offset-2' >https://ecom/help.</Link></p>
            </div>
        </div>
    </>
  )
}

export default TermsConditions