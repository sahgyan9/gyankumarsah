"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-20 px-4 grain-texture">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Left Column - CV Content (2/3 width) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                                GYAN KUMAR SAH
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Undergraduate Student (Researcher)
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+977 9816836293</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:sahgyan9@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                                    sahgyan9@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Ramgopalpur-8, Mahottari, Nepal</span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm grain-texture overflow-hidden">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">9.70</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA / 10.00</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm grain-texture overflow-hidden">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Years Research</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm grain-texture overflow-hidden">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm grain-texture overflow-hidden">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3rd</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Place</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Photo */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                        <div className="relative w-72 h-96 rounded-2xl overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                                <p className="text-gray-600 dark:text-gray-300 text-center px-4">
                                    Your Photo Will Go Here
                                    <br />
                                    <span className="text-sm">(Upload via Supabase)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
