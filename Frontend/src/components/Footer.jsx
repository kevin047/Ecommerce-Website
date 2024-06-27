import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from '@mui/material/styles';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { Zoom } from "@mui/material";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));


function Footer() {

    const navigate = useNavigate();

    const [isMediumOrLarger, setIsMediumOrLarger] = useState(window.innerWidth >= 768);
    useEffect(() => {
        const handleResize = () => {
          setIsMediumOrLarger(window.innerWidth >= 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isCompany, setIsCompany] = useState(false);
    const [isService, setIsService] = useState(false);
    const [isCategory, setIsCategory] = useState(false);
    const [isLinks, setIsLinks] = useState(false);


    const handleClick = (action) => {
        if (action === "company") {
            setIsCompany((old) => !old);
        } else if (action === "service") {
            setIsService((old) => !old);
        } else if (action === "category") {
            setIsCategory((old) => !old);
        } else if (action === "links") {
            setIsLinks((old) => !old);
        }
    };

    const handleNavigation = (url)=>{
        window.scrollTo({top:0, behavior:"smooth"});
        navigate(url);
    }

    function toggleAccordion(id) {
      const accordion = document.getElementById(id);

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
            <div className="py-6 bg-gray-200 mt-24">
                <div className="w-full flex flex-col items-center px-3">
                    <h2 className="text-3xl font-bold py-2 text-center max-sm:text-2xl">
                        Sign Up to Newsletter
                    </h2>
                    <p className="text-sm text-center py-0.5">
                        Enter your email address to get $10 off your first order
                        and free shipping.
                    </p>
                    <p className="text-sm text-center pb-1 text-wrap">
                        Updates information on Sales and Offers.
                    </p>
                    <div className="xl:w-1/3 md:w-1/2 max-sm:w-full flex max-sm:flex-wrap justify-between py-2">
                        <input
                            type="email"
                            className="px-4 py-3 rounded-full w-full sm:mr-2"
                            id=""
                            placeholder="Enter your email.."
                        />
                        <button className="px-6 py-3 text-white font-semibold bg-blue-400 rounded-full max-sm:my-2 max-sm:w-full">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="flex max-md:flex-col my-3 py-3 lg:mx-10 mx-5">
                    <div className="md:w-2/6 px-0.5">
                        <h4 className="text-lg font-semibold mb-4">
                            Contact Us
                            
                        </h4>
                        <p>Got Question? Call us 24/7</p>
                        <p className="text-2xl text-blue-500 font-semibold py-2">
                            +222-1800-2628
                        </p>
                        <p>268 St, South New York/NY 98944, United States </p>
                        <p className="">blueskytechcompany@gmail.com</p>
                        <div className="flex my-3">
                            <CustomTooltip title="Facebook" arrow placement="bottom" TransitionComponent={Zoom}>
                                <button className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full mr-2">
                                    <FaFacebookF />
                                </button>
                            </CustomTooltip>
                            <CustomTooltip title="X" arrow placement="bottom" TransitionComponent={Zoom}>
                                <button className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full mr-2">
                                  <RiTwitterXFill />
                                </button>
                            </CustomTooltip>
                            <CustomTooltip title="Youtube" arrow placement="bottom" TransitionComponent={Zoom}>
                                <button className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full mr-2">
                                  <FaYoutube />
                                </button>
                            </CustomTooltip>
                            <CustomTooltip title="Instagram" arrow placement="bottom" TransitionComponent={Zoom}>
                                <button className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full mr-2">
                                  <FaInstagram />
                                </button>
                            </CustomTooltip>
                            <CustomTooltip title="Pinterest" arrow placement="bottom" TransitionComponent={Zoom}>
                                <button className="w-[32px] h-[32px] flex items-center justify-center border border-black rounded-full mr-2">
                                  <FaPinterestP />
                                </button>
                            </CustomTooltip>
                        </div>
                    </div>
                    <div className="md:w-1/6 px-0.5 max-md:my-1">
                        {isMediumOrLarger && 
                        <h4 className=" text-lg font-semibold mb-2 cursor-pointer">
                            Company
                        </h4>
                        }
                        {!isMediumOrLarger && <h4 className=" flex justify-between items-center text-lg font-semibold mb-2 cursor-pointer" onClick={()=>{handleClick('company'); toggleAccordion('footer-company'); }}>
                            <span>Company</span>
                            {!isCompany ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </h4>}
                        <ul id="footer-company" className={`accordian overflow-hidden ${!isMediumOrLarger ? 'h-0':''}`}>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/aboutus')}}>About Us</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " >Our Stores</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/contact')}}>Contact Us</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Size Guide</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/account')}}>My Account</li>
                        </ul>
                    </div>
                    <div className="md:w-1/6 px-0.5 max-md:my-1">
                        {isMediumOrLarger && 
                        <h4 className=" text-lg font-semibold mb-2 cursor-pointer">
                            Customer Service
                        </h4>
                        }
                        {!isMediumOrLarger && <h4 className=" flex justify-between items-center text-lg font-semibold mb-2 cursor-pointer" onClick={()=>{handleClick('service'); toggleAccordion('footer-service'); }}>
                            <span>Customer Service</span>
                            {!isService ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </h4>}
                        <ul id="footer-service" className={`accordian overflow-hidden ${!isMediumOrLarger ? 'h-0':''}`}>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Privacy Policy</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Refund Policy</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Shipping & Return</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Terms & Conditions</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Advanced Search</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Store Location</li>
                        </ul>
                    </div>
                    <div className="md:w-1/6 px-0.5 max-md:my-1">
                        {isMediumOrLarger && 
                        <h4 className=" text-lg font-semibold mb-2 cursor-pointer">
                            Shop by Categories
                        </h4>
                        }
                        {!isMediumOrLarger && <h4 className=" flex justify-between items-center text-lg font-semibold mb-2 cursor-pointer" onClick={()=>{handleClick('category'); toggleAccordion('footer-category'); }}>
                            <span>Shop by Categories</span>
                            {!isCategory ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </h4>}
                        <ul id="footer-category" className={`accordian overflow-hidden ${!isMediumOrLarger ? 'h-0':''}`}>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Smartphone</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Headphones</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Computer & Desktops</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Cameras & Photos</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight ">Laptop & Ipad</li>
                        </ul>
                    </div>
                    <div className="md:w-1/6 px-0.5 max-md:my-1">
                        {isMediumOrLarger && 
                        <h4 className=" text-lg font-semibold mb-2 cursor-pointer">
                            Useful Links
                        </h4>
                        }
                        {!isMediumOrLarger && <h4 className=" flex justify-between items-center text-lg font-semibold mb-2 cursor-pointer" onClick={()=>{handleClick('links'); toggleAccordion('footer-links'); }}>
                            <span>Useful Links</span>
                            {!isLinks ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </h4>}
                        <ul id="footer-links" className={`accordian overflow-hidden ${!isMediumOrLarger ? 'h-0':''}`}>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/aboutus')}}>About Us</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/cart')}}>My Cart</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/account/wishlist')}}>Wishlist</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/faq')}}>FAQs</li>
                          <li className="py-1 text-gray-600 hover:text-black hover:translate-x-1 transition duration-300 ease-in-out tracking-tight " onClick={()=>{handleNavigation('/blog')}}>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
