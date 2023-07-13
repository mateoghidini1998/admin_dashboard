import React from 'react'
import './Main.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdNotifications } from 'react-icons/md'
import { LiaCartPlusSolid } from 'react-icons/lia'
import { BsGraphUpArrow } from 'react-icons/bs'
import { TbNotes } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi'
import ProfilePic from '../assets/images/pexels-pixabay-220453.jpg'

function Main() {
  return (
    <div className='main'>
        <div className="heading">
            <h1>Overview</h1>
            <div className="content">
                <input type="text" className="searchbar" placeholder="Search"/>
                <div className="profile">
                    <MdNotifications/>
                    <img src={ProfilePic} alt="" className="avatar" />
                    <p className='username'>John Doe</p>
                </div>
            </div>
        </div>
        <div className="table">
            <h3>Top Sales Representative</h3>
            <table className='data-table'>
                <tbody>
                    <tr>
                        <td><img src={ProfilePic} alt="" className="avatar" /></td>
                        <td>Nicholas Patrick</td>
                        <td className="profit">$2540.48</td>
                        <td>150 Products</td>
                        <td>105 Premium</td>
                        <td className="gold">+Gold</td>
                        <td><BiDotsVerticalRounded/></td>
                    </tr>
                    <tr>
                        <td><img src={ProfilePic} alt="" className="avatar" /></td>
                        <td>Nicholas Patrick</td>
                        <td className="profit">$2540.48</td>
                        <td>150 Products</td>
                        <td>105 Premium</td>
                        <td className="silver">+Silver</td>
                        <td><BiDotsVerticalRounded/></td>
                    </tr>
                    <tr>
                        <td><img src={ProfilePic} alt="" className="avatar" /></td>
                        <td>Nicholas Patrick</td>
                        <td className="profit">$2540.48</td>
                        <td>150 Products</td>
                        <td>105 Premium</td>
                        <td className="silver">+Silver</td>
                        <td><BiDotsVerticalRounded/></td>
                    </tr>
                    <tr>
                        <td><img src={ProfilePic} alt="" className="avatar" /></td>
                        <td>Nicholas Patrick</td>
                        <td className="profit">$2540.48</td>
                        <td>150 Products</td>
                        <td>105 Premium</td>
                        <td className="gold">+Gold</td>
                        <td><BiDotsVerticalRounded/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="cards">
            <div className="card">
                <div className="content">
                    <div className="product">
                        <span className='title'>Product Sold</span>
                        <h2>25.1k</h2>
                    </div>
                    <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.243 10.6571L0.707609 8.12251C0.316825 7.73185 0.316776 7.09835 0.7075 6.70762C1.09822 6.3169 1.73173 6.31695 2.12239 6.70773L4.657 9.24312H19.899C20.0549 9.24311 20.2086 9.27954 20.3479 9.34949C20.4872 9.41944 20.6082 9.52099 20.7012 9.64602C20.7943 9.77105 20.8569 9.91611 20.8839 10.0696C20.9109 10.2231 20.9017 10.3808 20.857 10.5301L18.457 18.5301C18.3953 18.7362 18.2687 18.9169 18.0961 19.0453C17.9235 19.1738 17.7141 19.2431 17.499 19.2431H5.243V21.2431H15.243C15.7953 21.2431 16.243 21.6908 16.243 22.2431C16.243 22.7954 15.7953 23.2431 15.243 23.2431H4.243C3.97778 23.2431 3.72343 23.1378 3.53589 22.9502C3.34836 22.7627 3.243 22.5083 3.243 22.2431V10.6571ZM5.243 11.2431V17.2431H16.755L18.555 11.2431H5.243ZM4.743 27.2431C4.34518 27.2431 3.96364 27.0851 3.68234 26.8038C3.40104 26.5225 3.243 26.1409 3.243 25.7431C3.243 25.3453 3.40104 24.9638 3.68234 24.6825C3.96364 24.4012 4.34518 24.2431 4.743 24.2431C5.14082 24.2431 5.52236 24.4012 5.80366 24.6825C6.08496 24.9638 6.243 25.3453 6.243 25.7431C6.243 26.1409 6.08496 26.5225 5.80366 26.8038C5.52236 27.0851 5.14082 27.2431 4.743 27.2431ZM16.743 27.2431C16.3452 27.2431 15.9636 27.0851 15.6823 26.8038C15.401 26.5225 15.243 26.1409 15.243 25.7431C15.243 25.3453 15.401 24.9638 15.6823 24.6825C15.9636 24.4012 16.3452 24.2431 16.743 24.2431C17.1408 24.2431 17.5224 24.4012 17.8037 24.6825C18.085 24.9638 18.243 25.3453 18.243 25.7431C18.243 26.1409 18.085 26.5225 17.8037 26.8038C17.5224 27.0851 17.1408 27.2431 16.743 27.2431Z" fill="#04103B"/>
                    <path d="M9.87847 3.47717L12.3556 1.00006L14.8327 3.47717" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.348 1.00761V7.70357" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="stats">
                    <span><FiArrowUpRight/>+15%</span>
                    <a href="">View Report</a>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="product">
                        <span className='title'>Product Sold</span>
                        <h2>$2,435k</h2>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L15.5 2.5L16 6" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1V17H17" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 13.5L7.5 8.5L11 10L15 3.5" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="stats">
                    <span className='down'><FiArrowDownLeft/>-3.5%</span>
                    <a href="">View Report</a>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="product">
                        <span className='title'>Product Sold</span>
                        <h2>3.5M</h2>
                    </div>
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7483 3C15.7483 1.89543 14.8529 1 13.7483 1H3C1.89543 1 1 1.89543 1 3V18.667C1 19.7716 1.89543 20.667 3 20.667H13.7483C14.8529 20.667 15.7483 19.7716 15.7483 18.667V3Z" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.12885 5.04236H8.15164" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.12885 9.51221H12.1744" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.12885 14.8759H12.1744" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="stats">
                    <span><FiArrowUpRight/>+15%</span>
                    <a href="">View Report</a>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="product">
                        <span className='title'>Product Sold</span>
                        <h2>45.5k</h2>
                    </div>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="21.5" stroke="white"/>
                    <path d="M12 33C12 30.8783 12.8429 28.8434 14.3431 27.3431C15.8434 25.8429 17.8783 25 20 25C22.1217 25 24.1566 25.8429 25.6569 27.3431C27.1571 28.8434 28 30.8783 28 33H12ZM20 24C16.685 24 14 21.315 14 18C14 14.685 16.685 12 20 12C23.315 12 26 14.685 26 18C26 21.315 23.315 24 20 24Z" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 13C29.4862 13 31.5 15.4293 31.5 18.4286C31.5 21.4279 29.4862 23.7619 27 23.7619C28.5913 23.7619 30.1174 24.5245 31.2426 25.8819C32.3679 27.2393 33 29.0803 33 31H30.4286" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="stats">
                    <span><FiArrowUpRight/>+10%</span>
                    <a href="">View Report</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main