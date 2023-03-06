import React from 'react';
import '../style/Home.css'
import Prouduct from './Prouduct';

function Home(props) {
    return (
        <div className='home'>
            <div className='home-container'>
                <img
                className='home-image'
                alt='prime banner'
                src="https://i.gadgets360cdn.com/large/amazon_best_tv_march_2020_1585384758649.jpg?downsize=950:*&output-quality=80"
                />
                <div className='home-row'>

                    <Prouduct
                    id='4515346'
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback] Paperback - January 1, 2001"
                    price={29.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._AC_UL160_.jpg'
                    rating={5}
                    />

                    <Prouduct
                    id='4515356'
                    title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'
                    price={13.66}
                    image='https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg'
                    rating={5}
                    />
                    <Prouduct
                    id='4515357'
                    title='Financial Freedom: A Proven Path to All the Money You Will Ever Need'
                    price={14.44}
                    image='https://m.media-amazon.com/images/I/41an1fnKfoL.jpg'
                    rating={5}
                    />
                </div>

                <div className='home-row'>
                    <Prouduct
                    id='4515353'
                    title='KLIM Chroma Rechargeable Wireless Gaming Keyboard + Slim, Durable, Ergonomic, Quiet, Waterproof, Silent Keys + Backlit Wireless Keyboard for PC PS4 Xbox One Mac + Teclado Gamer + New 2020 Version'
                    price={39.37}
                    image='https://m.media-amazon.com/images/I/71KLdDdKqvL._AC_AA180_.jpg'
                    rating={5}
                    />
                    <Prouduct
                    id='4515352'
                    title='Wii U Controller, Wireless Rechargeable Bluetooth Dual Analog Controller Gamepad for Wii U Pro Controller with USB Charging Cable'
                    price={21.98}
                    image='https://m.media-amazon.com/images/I/51sD9HgAo3L._AC_AA180_.jpg'
                    rating={4}
                    />
                    <Prouduct
                    id='4515354'
                    title='TP-Link N450 WiFi Router - Wireless Internet Router for Home (TL-WR940N)'
                    price={25.24}
                    image='https://m.media-amazon.com/images/I/51ge3tjw5uL._AC_AA180_.jpg'
                    rating={4}
                    />
                    <Prouduct
                    id='4515355'
                    title='TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)'
                    price={62.64}
                    image='https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_AA180_.jpg'
                    rating={4}
                    />
                </div>

                <div className='home-row'>
                    <Prouduct
                    id='4515351'
                    title='Seagate BarraCuda 4TB Internal Hard Drive HDD - 3.5 Inch Sata 6 Gb/s 5400 RPM 256MB Cache for Computer Desktop PC - Frustration Free Packaging ST4000DMZ04/DM004'
                    price={89.99}
                    image='https://m.media-amazon.com/images/I/71ijXHv0jHL._AC_AA180_.jpg'
                    rating={5}
                    />
                    <Prouduct
                    id='4514351'
                    title='Kingston HX318C10FWK2/16 HyperX Fury Memory White - 16GB Kit (2x8GB) - DDR3 1866MHz - 16 GB (2 x 8 GB) - DDR3 SDRAM - 1866 MHz DDR3-1866/PC3-15000 - 1.50 V - Non-ECC - Unbuffered - 240-pin - DIMM'
                    price={69.99}
                    image='https://m.media-amazon.com/images/I/41JE-ZTJ2zL._SY498_BO1,204,203,200_.jpg'
                    rating={4}
                    />
                    <Prouduct
                    id='4518351'
                    title='Kingston FURY Beast RGB 64GB (4x16GB) 3200MT/s DDR4 CL16 Desktop Memory Kit of 4 | Infrared Syncing | Intel XMP | AMD Ryzen | Plug n Play | KF432C16BBAK4/64'
                    price={198.61}
                    image='https://m.media-amazon.com/images/I/714nmnxvuHL._AC_SX679_.jpg'
                    rating={4}
                    />
                    <Prouduct
                    id='6518351'
                    title='G.Skill Trident Z5 RGB Series (Intel XMP) 32GB (2 x 16GB) 288-Pin SDRAM DDR5 6000 CL36-36-36-96 1.35V Dual Channel Desktop Memory F5-6000J3636F16GA2-TZ5RK (Matte Black)'
                    price={149.99}
                    image='https://m.media-amazon.com/images/I/51c+p6RY+AL._AC_UY218_.jpg'
                    rating={4}
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;