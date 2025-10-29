import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                            Gyan Kumar Sah
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Undergraduate Physics Student & Researcher specializing in Clean Energy,
                            Nanomaterials, and Quantum Computing.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                            Contact
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:sahgyan9@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                                    sahgyan9@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+977 9816836293</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Ramgopalpur-8, Mahottari, Nepal</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <div className="space-y-2 text-sm">
                            <a href="/" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                                Home
                            </a>
                            <a href="/certificates" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                                Certificates
                            </a>
                            <a href="/shakti-photon" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                                Shakti Photon Solutions
                            </a>
                            <a href="/research" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                                Research
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Gyan Kumar Sah. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
