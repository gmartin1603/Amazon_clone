import React from 'react';
import '../style/header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../providers/StateProvider';
import { auth } from '../firebase';

function Header(props) {
    const [{basket, user}] = useStateValue()

    const handleAuth = () => {
        if (user){
            auth.signOut()
            alert('Signed out')
        }
    }
    
    return (
        <div className='header'>
            <Link to={user? '/' : '/login'}>
            <img className='logo' 
            alt='logo' src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
            </Link>
            <div className='header-search'>
                <input 
                className='header-searchInput'
                type='text'/>
                <SearchIcon className='header-search-icon'/>
            </div>
            <div className='header-nav'>
                <Link to='/login'>
                <div className='header-option' onClick={handleAuth}>
                  <span className='header-option-lineOne'>
                    {user? 'Hi, ' + user.email : 'Hello Guest'}</span>

                    <span className='header-option-lineTwo'>
                    {user? 'Sign Out' : 'Sign In'} </span>  
                </div>
                </Link>
                <Link to= '/orders'>
                <div className='header-option'>
                <span className='header-option-lineOne'>
                    Returns &</span>

                    <span className='header-option-lineTwo'>
                     Orders</span> 
                </div>
                </Link> 

                <div className='header-option'>
                <span className='header-option-lineOne'>
                    Your</span>

                    <span className='header-option-lineTwo'>
                    Prime</span> 
                </div>

                <Link to='/checkout'>
                    <div className='header-option-basket'>
                        <ShoppingBasketIcon/>
    <span className='header-option-lineTwo basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;