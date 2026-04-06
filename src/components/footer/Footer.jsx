import { IoMailOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
  return (
    <>
        <footer className="bg-[#070f1c] px-30 py-20">
            <div className="flex justify-center gap-15 flex-wrap">
                <div>
                    <img src="/Logo.svg" alt="img" />
                    <h2 className="text-blue-400 mt-3">Artificial Intelligence</h2>
                    <p className="text-white text-sm opacity-60 mt-2">Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and <br /> layouts and visual mockups.</p>

                    <p className="text-white flex items-center gap-3 text-md mt-5"><IoMailOutline /> Company@gmail.com.com</p>
                    <p className="text-white flex items-center gap-3 text-md mt-2"><TbPhoneCall /> Phone: (064) 332-1233</p>
                    <p className="text-white flex items-center gap-3 text-md mt-2"><HiOutlineLocationMarker /> 450 Wall Street, USA, New York</p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold">INFORMATION</h2>
                    <a href="#" className="text-white block mt-5 opacity-60">New Collection</a>
                    <a href="#" className="text-white block mt-2 opacity-60">About Store</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Contact Us</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Latest News</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Our Sitemap</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Orders History</a>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold">FOOTER MENU</h2>
                    <a href="#" className="text-white block mt-5 opacity-60">Instagram profile</a>
                    <a href="#" className="text-white block mt-2 opacity-60">New Collection</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Contact Us</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Latest News</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Terms & Conditions</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Purchase Theme</a>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold">USEFUL LINKS</h2>
                    <a href="#" className="text-white block mt-5 opacity-60">Instagram profile</a>
                    <a href="#" className="text-white block mt-2 opacity-60">New Collection</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Contact Us</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Latest News</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Terms & Conditions</a>
                    <a href="#" className="text-white block mt-2 opacity-60">Purchase Theme</a>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold">ABOUT THE STORE</h2>

                    <p className="text-white text-sm opacity-60 mt-5">Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and <br /> layouts and visual mockups.</p>

                    <h2 className="text-white text-md mt-5 font-semibold">www.company.com</h2>

                    <div className="flex items-center gap-3 mt-4">
                        <FiFacebook className="text-xl text-white" />
                        <IoLogoInstagram className="text-xl text-white" />
                        <FiTwitter className="text-xl text-white" />
                        <FiLinkedin className="text-xl text-white" />
                        <SlSocialYoutube className="text-xl text-white" />
                    </div>

                    <div className="flex item-center gap-2 mt-5">
                        <TbWorld className="text-white text-xl" />
                        <select className="text-white">
                            <option className="bg-[#020a18]">English</option>
                            <option className="bg-[#020a18]">Russian</option>
                            <option className="bg-[#020a18]">Uzbek</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
