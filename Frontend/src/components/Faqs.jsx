import React from 'react'
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Faqs() {
    const navigate = useNavigate();
    const {faqData} = useSelector((state)=>state.users);
    console.log(faqData)
    function toggleAccordion(id,btnid) {
        const accordion = document.getElementById(id);
        const plus_btn = document.getElementById(btnid+'-plus');
        const minus_btn = document.getElementById(btnid+'-minus');
        plus_btn.classList.toggle('hidden')
        minus_btn.classList.toggle('hidden')
        if (accordion.classList.contains('h-0')) {
          accordion.style.height = `${accordion.scrollHeight}px`; // Set height to content's height to start the transition
          accordion.classList.remove('h-0');
          // setTimeout(() => {
          //   accordion.style.height = null; // Remove inline height to allow the content to expand freely
          // }, 500); // Wait for the transition to complete
        } else {
          accordion.style.height = `${accordion.scrollHeight}px`; // Set height to current content height to start the transition
          setTimeout(() => {
            accordion.classList.add('h-0');
            accordion.style.height = null; // Remove inline height to trigger the collapse transition
          }, 10); // Small delay to ensure the height is set before collapsing
        }
  
      }
  return (
    <>
        <div className=" h-32 max-sm:h-24 bg-white flex flex-col justify-center items-center">
            <h1 className=" text-3xl font-semibold">Contact Us</h1>
            <p>Home / Contact Us</p>
        </div>

        <div className="my-4">
            <div className="flex max-md:flex-col my-3 py-3 lg:mx-10 mx-5">
                <div className="md:w-2/6 px-0.5 md:pr-6">
                    <h4 className="text-3xl font-bold mb-4">
                        Need Help?
                    </h4>
                    <p className='text-pretty mb-3'>If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.</p>
                    <p className='text-pretty'>Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.</p>
                    <p className="text-sm">blueskytechcompany@gmail.com</p>
                    <p className="text-3xl text-blue-500 font-semibold py-2">
                        (+222)-1800-2628
                    </p>
                    <button className='w-full border-black border rounded-full py-2 font-semibold hover:text-white hover:bg-blue-400 hover:border-blue-400 transition duration-300 ease-in my-1' onClick={()=>navigate('/contact')}>Contact Us</button>
                    <button className='w-full border-black border rounded-full py-2 font-semibold hover:text-white hover:bg-blue-400 hover:border-blue-400 transition duration-300 ease-in my-1'>Our Stores</button>
                    
                </div>
                <div className="md:w-4/6 md:pl-6 md:border-l max-md:my-4">
                    {faqData.map((faq)=>{
                        return (
                        <div className='mb-7'>
                            <h1 className='text-3xl font-bold mb-3'>{faq.mainHeading}</h1>

                            <div className="faqs my-4">
                                {faq.faqList.map((faqItem,index)=>{
                                    
                                    return (
                                        <>
                                            <h4 className=" flex justify-between items-center text-lg font-semibold mb-2 cursor-pointer border-b py-4" onClick={()=>{toggleAccordion(`faq-${faqItem.id}`,`faq-btn-${faqItem.id}`); }}>
                                                <span>{index+1}. {faqItem.question}</span>
                                                {/* {!isService ? <IoMdAdd size={18}/> : <FiMinus size={18}/>} */}
                                                <IoMdAdd size={18} id={`faq-btn-${faqItem.id}-plus`} className=''/>
                                                <FiMinus size={18} id={`faq-btn-${faqItem.id}-minus`} className='hidden'/>
                                            </h4>
                                            <p className="my-1 overflow-hidden h-0 transition-all duration-500 ease-in-out" id={`faq-${faqItem.id}`}>
                                                The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Faqs