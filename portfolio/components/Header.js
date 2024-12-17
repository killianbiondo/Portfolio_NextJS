import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const isActive = (path) => router.pathname === path;

    return (
        // Tout les liens vers les autres pages
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    MonPortfolio
                </Link>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                        Accueil
                    </Link>
                    <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                        À propos
                    </Link>
                    <Link href="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>
                        Portfolio
                    </Link>
                    <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                        Contact
                    </Link>
                </nav>
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="burger"></span>
                </button>
            </div>
        </header>
    );
}
