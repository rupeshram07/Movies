import React from 'react'
import '../assets/styles/nav.scss'

import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai'

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>


const Nav = (props) => {

    return (
        <div className="nav">

            <div className="logo">

                <Link to="/">


                    {/* <p id='logo'>MMOVIES </p> */}
                    <h1>MMOVIES</h1>
                </Link>


            </div>
            <Link className="searchbox" to="/searchproduct/:searchValue">
                <input type="text" name="search" placeholder="Search movies" onClick={(e) => {
                    props.changeSearchItem(e.target.value)

                }} />
                {searchIcon}


            </Link>


            <Link className="navlinks" to="/"> Action</Link>
            <Link className="navlinks" to="/tv">Drama</Link>
            <Link className="navlinks" to="/laptop">Comedy</Link>
            <Link className="navlinks" to="/lifestyle">Horror</Link>

            <Link className="navlinks" to="/accessories">Sci-fi</Link>





        </div >


    )
}

export default Nav