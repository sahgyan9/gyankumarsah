import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function Header() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Certificates", href: "/certificates" },
        { name: "Shakti Photon Solutions", href: "/shakti-photon" },
        { name: "Undergraduate Research", href: "/research" },
        { name: "Philosophy", href: "/philosophy" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                            Gyan Kumar Sah
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === item.href
                                    ? "text-primary-600 dark:text-primary-400"
                                    : "text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Sun className="h-5 w-5 text-gray-300" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Sun className="h-5 w-5 text-gray-300" />
                            )}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.href
                                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
