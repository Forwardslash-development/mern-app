import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="nav nav-tabs bg-dark d-flex justify-content-between pt-2 pb-2">
      <Link href="/" className="nav-link text-light">
        <a>Home</a>
      </Link>
      <Link href="register" className="nav-link">
        <a>Register</a>
      </Link>
      <Link href="login" className="nav-link">
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Nav;
