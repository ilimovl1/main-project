import React from "react";
import "./Header.scss"
import joy from "./Header-img/joy.png"
import {BiSearchAlt2} from "react-icons/bi"
import {IoIosCart} from "react-icons/io"
import {BiSolidUser} from "react-icons/bi"
import {AiFillCaretDown} from "react-icons/ai"
import {TbMenu2} from "react-icons/tb"
import { Link} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"


function Header() {

    const [store, setStore] = React.useState(false)

    const [modal, setModal] = React.useState(false)

    console.log(modal);


    return(

        <header className="Main">

            <section className="mini-div">

                <section className="mini-div-1">

                    <div className="logo-div">

                        <img src={joy}/>

                    </div>

                    <div className="text-div">

                        <div className="mini-text-div-1">

                            <div>
                                <h2 onClick={() => setStore(!store)}>STORE</h2> 
                                <AiFillCaretDown className="arrow-1"/>
                            </div>
                            
                            <h3>games</h3>

                        </div>

                    </div>

                    <div className="text-div">

                        <div className="mini-text-div-2">        

                            <div>

                                <h2>BLOG</h2>
                                <AiFillCaretDown className="arrow-2"/>

                            </div>

                            <h3 className="h3-1">news</h3>

                        </div>

                    </div>

                    <div className="text-div">

                       <div className="mini-text-div-3">        

                            <div>

                                <h2>FEATURES</h2>
                                <AiFillCaretDown className="arrow-3"/>

                            </div>

                            <h3 className="h3-2">full list</h3>

                        </div>

                    </div>

                </section>

                <section className="mini-div-2">

                    <div className="text-div">

                        <h2>ilimovl</h2>
                       <h3>user</h3>
 
                    </div> 

                    <div className="img-div">

                        <a><BiSearchAlt2 className="arrow-4"/></a>
                     
                        <a><IoIosCart className="arrow-5"/></a>

                        <a><BiSolidUser className="arrow-6"/></a>

                        <a><AiFillCaretDown className="arrow-7"/></a>    

                    </div>

                </section>

                <div className="main-menu">{modal? <AiOutlineClose onClick={() => setModal(!modal)} className="menu-2"/> : <TbMenu2 onClick={() => setModal(!modal)} className="menu-1"/>}</div> 

            </section>

            <div className={store? "show" : "hide"}>

                <Link className="h1" to="/store">Store</Link>

                <Link className="h1" to="/">Main</Link>

                <Link className="h1" to="/login">Login</Link>
                
                <Link className="h1" to="/cart">About</Link>
            
            </div>

            <div className={modal? "show1" : "hide1"}>

                <Link className="h2" to="/store">Store</Link>

                <Link className="h2" to="/">Main</Link>

                <Link className="h2" to="/login">Login</Link>

                <Link className="h2" to="/cart">About</Link>

            </div>

        </header>

    )

}

export default Header