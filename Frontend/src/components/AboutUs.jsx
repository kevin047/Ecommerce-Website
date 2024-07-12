import React, { useState } from 'react'
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const CustomAccordion = ({ title, content, id }) => {
    return (
      <div className="bg-white rounded-3xl px-6 py-4 h-fit">
        <Accordion>
          <AccordionSummary
            expandIcon={
                <IoMdAdd className="expand-icon-add" size={18} />
            }
            collapseIcon={
                <FiMinus className="collapse-icon-minus" size={18} />
            }
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
            className="flex justify-between items-center font-semibold cursor-pointer"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="text-pretty mt-4">
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };


  const faqs = [
    {
      "id": "1",
      "question": "Problems sending or receiving messages?",
      "answer": "Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat mattis libero. Donec volutpat faucibus elit cursus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      "id": "2",
      "question": "How to reset my password?",
      "answer": "Aliquam erat volutpat. Aenean consequat velit eget odio suscipit, ac ultrices ex bibendum. Pellentesque sed orci ac felis vehicula posuere non in nulla. Maecenas nec eros sit amet ex elementum pretium."
    },
    {
      "id": "3",
      "question": "How do I update my profile information?",
      "answer": "Sed auctor magna a nisi ullamcorper, at condimentum velit consequat. Proin vestibulum libero sit amet nisi gravida, non suscipit urna scelerisque. Nullam nec lectus a nibh consequat ullamcorper."
    },
    {
      "id": "4",
      "question": "Where can I find my purchase history?",
      "answer": "Nullam nec lectus a nibh consequat ullamcorper. Sed auctor magna a nisi ullamcorper, at condimentum velit consequat. Proin vestibulum libero sit amet nisi gravida, non suscipit urna scelerisque."
    }
  ]

function AboutUs() {

    function toggleAccordion(id,btnid) {
        const accordion = document.getElementById(id);
        if(accordion.classList.contains('hidden')){
            accordion.classList.toggle('hidden')
        } 
        else{
            setTimeout(() => {
                accordion.classList.toggle('hidden')
            }, 301);
        }
        
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
        <div className="px-10 max-md:px-2">
            <div className="text-center my-6">
                <div className="text-sm uppercase mb-1 text-blue-400 font-semibold">
                    Welcome to Uminex
                </div>
                <div className="text-2xl mb-2">Our Perfect Store</div>
                <p className='my-1 mx-auto md:w-[50vw]'>Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect.</p>
            </div>
            <div className="my-4">
                <img src="https://umino.bersky.co/media/wysiwyg/about_degital.png" alt="" />
            </div>
            <div className="my-4 border-b">
                <div className='px-10 max-lg:px-2 mt-20 border-t py-20'>
                    <div className="flex max-sm:flex-col justify-around text-center">
                        <div className="flex flex-col justify-center items-center my-3">
                            <div className='text-blue-400 text-3xl font-bold mb-3'>21M</div>
                            <p className='font-semibold mb-2 text-lg'>Products For Sale</p>
                            <p className='overflow-hidden md:w-2/3 text-ellipsis text-pretty whitespace-nowrap'>Class aptent taciti sociosqu litora torquent per conubia.</p>
                        </div>
                        <div className='max-lg:hidden w-px flex items-center'>
                            <div className="h-1/2 w-px bg-slate-200"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-3">
                            <div className='text-blue-400 text-3xl font-bold mb-3'>21M</div>
                            <p className='font-semibold mb-2 text-lg'>Products For Sale</p>
                            <p className='overflow-hidden md:w-2/3 text-ellipsis text-pretty whitespace-nowrap '>Class aptent taciti sociosqu litora torquent per conubia.</p>
                        </div>
                        <div className='max-lg:hidden w-px flex items-center'>
                            <div className="h-1/2 w-px bg-slate-200"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-3">
                            <div className='text-blue-400 text-3xl font-bold mb-3'>21M</div>
                            <p className='font-semibold mb-2 text-lg'>Products For Sale</p>
                            <p className='overflow-hidden md:w-2/3 text-ellipsis text-pretty whitespace-nowrap text-sm'>Class aptent taciti sociosqu litora torquent per conubia.</p>
                        </div>
                        <div className='max-lg:hidden w-px flex items-center'>
                            <div className="h-1/2 w-px bg-slate-200"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-3">
                            <div className='text-blue-400 text-3xl font-bold mb-3'>21M</div>
                            <p className='font-semibold mb-2 text-lg'>Products For Sale</p>
                            <p className='overflow-hidden md:w-2/3 text-ellipsis text-pretty whitespace-nowrap text-sm'>Class aptent taciti sociosqu litora torquent per conubia.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 py-6 flex max-md:flex-col">
                <div className='md:mr-2 my-4'>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_1.png" className='mx-auto' alt="" />
                    <h4 className='font-semibold text-lg py-2'>1. Perfect Space</h4>
                    <p className="text-pretty">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
                <div className='md:mx-2 my-4'>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_1.png" className='mx-auto' alt="" />
                    <h4 className='font-semibold text-lg py-2'>1. Perfect Space</h4>
                    <p className="text-pretty">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
                <div className='md:ml-2 my-4'>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_1.png" className='mx-auto' alt="" />
                    <h4 className='font-semibold text-lg py-2'>1. Perfect Space</h4>
                    <p className="text-pretty">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
            </div>

            <div className="my-4 -mx-10 max-md:-mx-2 py-20 bg-gray-100">
                <div className="px-10 max-md:px-2">
                
                    <div className="text-center">
                        <div className="text-sm uppercase mb-1 text-blue-400 font-semibold">
                            WHY CHOOSE US
                        </div>
                        <div className="text-2xl mb-2">Frequently Asked Questions</div>
                        <p className='my-1 mx-auto md:w-[50vw]'>Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect.</p>
                    </div>
                    <div className="my-4">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 max-sm:gap-5">
                            
                            {faqs.map((faq)=>{
                                const [expanded,setExpanded] = useState(false);
                                return (
                                    <div className="bg-white rounded-3xl px-6 py-2 h-fit">
                                    <Accordion onChange={()=>setExpanded((old)=>!old)} style={{ all:'unset' }}>
                                        <AccordionSummary
                                        aria-controls={`panel${1}-content`}
                                        id={`panel${1}-header`}
                                        className="flex justify-between items-center font-semibold cursor-pointer"
                                        >
                                        <div className="flex justify-between items-center w-full">
                                            <span>{faq.question}</span>
                                            <div>
                                                {expanded ? (
                                                    <FiMinus size={18} className="ml-2" />
                                                ) : (
                                                    <IoMdAdd size={18} className="ml-2" />
                                                )}
                                            </div>
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails className="text-pretty">
                                        {faq.answer}
                                        </AccordionDetails>
                                    </Accordion>
                                    </div>
                                )
                            })}
                                {/* <h4 className=" flex justify-between items-center font-semibold cursor-pointer " onClick={()=>{toggleAccordion(`faq-${'1'}`,`faq-btn-${'1'}`); }}>
                                    <span>Problems sending or receiving messages?</span>
                                    <IoMdAdd size={18} id={`faq-btn-${'1'}-plus`} className=''/>
                                    <FiMinus size={18} id={`faq-btn-${'1'}-minus`} className='hidden'/>
                                </h4>
                                <p className='text-pretty mt-4 hidden overflow-hidden h-0 transition-all duration-500 ease-in-out' id={`faq-${'1'}`}>Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat mattis libero. Donec volutpat faucibus elit cursus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> */}
                            
                            {/* <div className="bg-white rounded-3xl px-6 py-4 h-fit">
                                <h4 className=" flex justify-between items-center font-semibold cursor-pointer " onClick={()=>{toggleAccordion(`faq-${'1'}`,`faq-btn-${'1'}`); }}>
                                    <span>Problems sending or receiving messages?</span>}
                                    <IoMdAdd size={18} id={`faq-btn-${'1'}-plus`} className=''/>
                                    <FiMinus size={18} id={`faq-btn-${'1'}-minus`} className='hidden'/>
                                </h4>
                                <p className='text-pretty mt-4 hidden overflow-hidden h-0 transition-all duration-500 ease-in-out' id={`faq-${'1'}`}>Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat mattis libero. Donec volutpat faucibus elit cursus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="bg-white rounded-3xl px-6 py-4 h-fit">
                                <h4 className=" flex justify-between items-center font-semibold cursor-pointer " onClick={()=>{toggleAccordion(`faq-${'1'}`,`faq-btn-${'1'}`); }}>
                                    <span>Problems sending or receiving messages?</span>
                                    <IoMdAdd size={18} id={`faq-btn-${'1'}-plus`} className=''/>
                                    <FiMinus size={18} id={`faq-btn-${'1'}-minus`} className='hidden'/>
                                </h4>
                                <p className='text-pretty mt-4 hidden overflow-hidden h-0 transition-all duration-500 ease-in-out' id={`faq-${'1'}`}>Curabitur lacinia purus vitae lorem porttitor fermentum. In in mattis erat mattis libero. Donec volutpat faucibus elit cursus interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div> */}
                            
                        </div>
                    </div>
                </div>

            </div>

            <div className="my-4 py-6 flex max-md:flex-col text-center">
                <div className='md:mr-2 my-4 '>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_7.png" className='mx-auto hover:scale-105 transition duration-300 ease-in-out' alt="" />
                    <h4 className=' font-semibold text-lg py-1 mt-2'>Helen Aleema</h4>
                    <h6 className='text-sm mb-2'>Founder/CEO</h6>
                    <p className="text-pretty text-sm">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
                <div className='md:mr-2 my-4 '>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_7.png" className='mx-auto' alt="" />
                    <h4 className=' font-semibold text-lg py-1 mt-2'>Helen Aleema</h4>
                    <h6 className='text-sm mb-2'>Founder/CEO</h6>
                    <p className="text-pretty text-sm">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
                <div className='md:mr-2 my-4 '>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_7.png" className='mx-auto' alt="" />
                    <h4 className=' font-semibold text-lg py-1 mt-2'>Helen Aleema</h4>
                    <h6 className='text-sm mb-2'>Founder/CEO</h6>
                    <p className="text-pretty text-sm">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
                <div className='md:mr-2 my-4 '>
                    <img src="https://umino.bersky.co/media/wysiwyg/about_img_7.png" className='mx-auto' alt="" />
                    <h4 className=' font-semibold text-lg py-1 mt-2'>Helen Aleema</h4>
                    <h6 className='text-sm mb-2'>Founder/CEO</h6>
                    <p className="text-pretty text-sm">Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium lectus qua. Nunc id cursus metus ididunt ut labore metus episcing</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs