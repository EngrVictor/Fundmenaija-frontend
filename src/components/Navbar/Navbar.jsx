import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../asserts/images/logo.jpg'

const Navbar = ({ backgroundColor, linkColor }) => {
    const elementSelector = (element) => document.querySelector(element)
   
    //************* Hamburger menu function ******************
    const [switchMenuIcon, setSwitchMenuIcon] = useState('')
    const hamburger = () => {
        let x = elementSelector('.mobile')

        if (x.style.display === 'block') {
            x.style.display = 'none'; setSwitchMenuIcon('false')
        }else{
            x.style.display = 'block'; setSwitchMenuIcon('true')
        }
    }

    //************** Navbar Scroll Effect *******************
    const [changeLinkColor, setChangeLinkColor] = useState('')
    const scrollEffect = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY  > 8) {
                elementSelector('header').classList.add('scroll')
                setChangeLinkColor('true')
                
            }else{
                elementSelector('header').classList.remove('scroll')
                setChangeLinkColor('false')
            }
        })
    }
    scrollEffect()
                


  return (
    <>
    <header className='shadow-sm' style={{background: backgroundColor}}>

        <div className="container d-flex justify-content-between align-items-center py-2 px-lg-5">
            <div style={{width: '50px', height: '50px', position: 'relative'}}>
                <img src={Logo} alt="logo" className="img-fluid" 
                    style={{
                        position: 'absolute', 
                        width: '100%', 
                        height: '100%', 
                        borderRadius: '100px'
                    }}
                />
            </div>

            {/******************* Desktop screen menu  *******************/}
            <ul className="list-unstyled desktop">
                <div className="d-flex align-items-center">
                    <li>
                        <Link to={'/about'} 
                        className={changeLinkColor != 'true' ? 
                        'nav-link mx-lg-2 py-2 px-3' : 
                        'nav-link mx-lg-2 py-2 px-3 text-dark'
                        } style={{color: linkColor}}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} 
                        className={changeLinkColor != 'true' ?
                        'nav-link mx-lg-2 py-2 px-3' : 
                        'nav-link mx-lg-2 py-2 px-3 text-dark'
                        } style={{color: linkColor}}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/donate'} 
                        className={changeLinkColor != 'true' ? 
                        'nav-link mx-lg-2 py-2 px-3' : 
                        'nav-link mx-lg-2 py-2 px-3 text-dark'
                        } style={{color: linkColor}}>Donate</Link>
                    </li>
                    <li>
                        <Link to={'/login'} 
                        className={changeLinkColor != 'true' ? 
                        'nav-link mx-lg-2 py-2 px-3' : 
                        'nav-link mx-lg-2 py-2 px-3 text-dark'
                        } style={{color: linkColor}}>Sign in</Link>
                    </li>
                    <li>
                        <button className='py-2'>
                            <Link to={'/createAccount'} 
                                className='nav-link font-weight-bold text-white px-4'>Sign up
                            </Link>
                        </button>
                    </li>
                </div>
            </ul>

            {/************* Mobile screen menu  *************/}
            <ul className="mobile">
                <div className="d-flex font-weight-bold border-top">
                    <li>
                        <Link to={'/about'} 
                            className='nav-link my-3 text-white'>About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'} 
                            className='nav-link my-3 text-white'>Contact
                        </Link>
                    </li>
                    <li>
                        <Link to={'/donate'} 
                            className='nav-link my-3 text-white'>Donate
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'} 
                            className='nav-link my-3 text-white'>Sign in
                        </Link>
                    </li>
                    <li>
                        <Link to={'/createAccount'} 
                            className='nav-link my-3 text-white'>Sign up
                        </Link>
                    </li>
                </div>
            </ul>

            {/**************** Hamburger menu ****************/}
            <div className='hambuger' onClick={() => hamburger()}>
                { switchMenuIcon !== 'true' 
                    ? 
                    <i className={changeLinkColor !== 'true' ? 
                        'fa fa-bars text-white fa-2x' : 
                        'fa fa-bars text-dark fa-2x'}>
                    </i>
                    :
                    <i className={changeLinkColor !== 'true' ? 
                        'fa fa-times text-white fa-2x' : 
                        'fa fa-times text-dark fa-2x'}>
                    </i>
                }
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar