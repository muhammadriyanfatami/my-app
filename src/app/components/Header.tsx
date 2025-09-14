import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link href="/">
              <Image src="/MT.png" alt="MT Logo" width={300} height={120} />
            </Link>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><Link href="#categories">Categories</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
          </ul>
          <div className="auth-buttons">
            <Link href="#" className="login-btn">Login</Link>
            <Link href="/register" className="signup-btn">Sign Up</Link>
          </div>
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
