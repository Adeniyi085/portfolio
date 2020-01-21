import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    render() {
        const title = this.props.title;
        return (
            <div>
                <p>{title}</p>
                {this.props.children}
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
            <a>About</a>    
            </Link>
            <Link href="/portfolios">
            <a>Portfolios</a>
            </Link>
            <Link href="/cv">
            <a>Cv</a>
            </Link>
            <Link href="/blogs">
            <a>Blogs</a>
                </Link>
                
                <style jsx>
                
                    {`
                    a{
                        font-size: 20px
                    }
                    `}
                        </style>
            </div>
        )
    }
}
export default Header;