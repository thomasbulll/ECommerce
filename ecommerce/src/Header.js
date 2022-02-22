import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
import LOGO from './logo.png';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className = "header">
            <Link to ="/">
             
            <img className = "header_logo"src={LOGO} alt =""/>
            </Link>
            

            <div className = "header_search">
            <input className = "header_searchInput" type ="text" placeholder="Search for anything"/>
            <SearchIcon className ="header_searchIcon" />

            </div>

            <div className="header_nav">
            <Link to ="/login">
                <div onClick={handleAuthentication} className="header_option">
                    <span className ='header_optionOne'>
                    Hello, {!user ? 'Guest' : user.email}
                    </span>

                    <span className ='header_optionTwo'>
                    {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>
                <Link to ="/orders">
                <div className="header_option">
                <span className ='header_optionOne'>
                    Returns
                    </span>

                    <span className ='header_optionTwo'>
                    & Orders
                    </span>

                    
                </div>
                </Link>
                
                <Link to ="/checkout">
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionTwo header_BasketCount">
                         {basket?.length}
                    </span>
                </div></Link>
                
            </div>
        </div>
    )
}

export default Header
