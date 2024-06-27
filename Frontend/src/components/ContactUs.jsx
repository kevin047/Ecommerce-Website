import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import './ContactUs.module.css'
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from '@mui/material/styles';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { Zoom } from "@mui/material";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";


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
  


function ContactUs() {
    const position = [22.28, 73.18]

    

  return (
    <>
        <div className=" h-32 max-sm:h-24 bg-white flex flex-col justify-center items-center">
            <h1 className=" text-3xl font-semibold">Contact Us</h1>
            <p>Home / Contact Us</p>
        </div>
        <div className="map-container -z-10 my-10 px-10 max-md:px-2 py-10">
            <MapContainer center={position} zoom={15} scrollWheelZoom={false} className='h-[70vh] z-0'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Visit Us Here
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

        <div className="my-4">
            <div className="flex max-md:flex-col my-3 py-3 lg:mx-10 mx-5">
                <div className="md:w-2/6 px-0.5 md:pr-6">
                    <h4 className="text-3xl font-bold mb-4">
                        Here to Help
                    </h4>
                    <p className='text-pretty mb-3'>Have a question? You may find an answer in our FAQs. But you can also contact us:</p>
                    <p className='text-sm'>268 St, South New York/NY 98944, United States </p>
                    <p className="text-sm">blueskytechcompany@gmail.com</p>
                    <p className="text-3xl text-blue-500 font-semibold py-2">
                        (+222)-1800-2628
                    </p>
                    <p className=''>Opening Hours: Everyday 9:00am - 6:00pm</p>
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
                <div className="md:w-4/6 md:pl-6 max-md:my-4">
                    <h1 className='text-3xl font-bold mb-3'>Get in Touch</h1>
                    <p className='text-base'>We would love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.</p>

                    <div className="contact-form ">
                        <div class="flex flex-wrap -mx-3 mt-5 m-2">
                            <div class="w-full md:w-1/2 px-3 md:mb-0">
                                {/* <label
                                    class="tracking-wide mb-2"
                                    htmlFor="grid-first-name"
                                >
                                    Name
                                </label> */}
                                <input
                                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                {/* <label
                                    class="tracking-wide mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Email
                                </label> */}
                                <input
                                    class="appearance-none block rounded-full w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                        </div>
                        <div className='my-2'>
                            {/* <label
                                htmlhtmlFor="Company Name"
                                className="tracking-wide mb-2"
                            >
                                Phone Number
                            </label> */}
                            <input
                                type="text"
                                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder='Phone Number'
                            />
                        </div>
                        <div className='my-4'>
                            <textarea
                                type="text"
                                className="appearance-none block w-full h-24 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder='Enter your Message'
                            />
                        </div>
                        <div>
                            <button className='px-10 py-3 text-white bg-black hover:bg-blue-400 rounded-full transition-all duration-300 ease-in'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ContactUs