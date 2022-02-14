import React from 'react'
import Logo from '../images/logo.png';
export default function HeaderVideo() {
    return (
        <header>
            <nav className="fixed">
                <div className="container">
                    <div className="wrapper__header">
                        <div className='wrapper__header--left'>
                            <div className="logo">
                                <a href="/">
                                    <img src={Logo} alt='' />

                                </a>
                            </div>
                            <div className="navbar__menu">
                                <ul className='navbar__menu--list'>
                                    <a href="#"><li>Tin Tức</li></a>
                                    <a href="#" target="_blank" className="visible-480"><li>Video</li></a>

                                    <a href="#" target="_blank" className="visible-480"><li>Anime</li></a>
                                    <a href="#" target="_blank" className="visible-480"><li>Manga</li></a>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-social">

                        </div>
                        <div className='wrapper__header--right'>
                            <div className="navbar__search">
                                <input type="text" name="search" autoComplete="off" />
                                <div className="navbar__search--icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="navbar__user">
                                <div className="navbar__user--avatar">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                    </svg>
                                </div>
                                <div className="navbar__user--action">
                                    <div className="user-action-item">
                                        <a href="/dang-nhap">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                                            </svg>
                                            Đăng nhập
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}
