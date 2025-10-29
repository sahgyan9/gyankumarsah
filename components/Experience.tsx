import { Briefcase, Trophy } from "lucide-react";

export default function Experience() {
    return (
        <section className="w-full bg-gray-50 dark:bg-slate-800 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Industry Experience
                    </h2>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                <Briefcase className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Research Engineer Intern (Paid)
                                </h3>
                                <span className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    Feb 2025 – Present
                                </span>
                            </div>
                            <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                Shakti Photon Solutions Pvt. Ltd., Guntur, Andhra Pradesh, India
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Mentors: Dr. Mallikarjuna Rao (Founder), Noah Jacob (CTO), Jan Nisa Qazi (PhD Scholar)
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-start">
                                    <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>First Order (IIT Delhi):</strong> Designed complete BOP for PEM Electrolyzer - prepared catalyst inks, fabricated MEA, designed mechanical components using Fusion 360, successfully commissioned at IIT Delhi
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>Second Order (NIT Warangal):</strong> Developed BOP for PEM, Alkaline, and Fuel Cell systems - traveled for on-site installation, testing, and commissioning
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>Third Order (IIT Delhi):</strong> Fabricated fuel cells with four flow designs (serpentine, interdigitated, parallel, leaf) - solely led installation and demonstration
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>Current Project (CO₂RR):</strong> Independent research on electrochemical CO₂ to CO conversion using Ag and IrO₂ catalysts - aim to scale from 4cm × 4cm to 30cm × 30cm system
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                                <p className="text-sm text-blue-800 dark:text-blue-300">
                                    <strong>Key Learning:</strong> Gained end-to-end understanding from catalyst preparation and MEA fabrication to system assembly, field installation, testing, and optimization - experiencing how ideas evolve into deliverable technologies for green hydrogen and sustainable energy.
                                </p>
                            </div>

                            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border border-primary-200 dark:border-primary-800">
                                <div className="flex items-center space-x-2 mb-3">
                                    <Trophy className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                                    <h4 className="font-bold text-gray-900 dark:text-white">Key Deliveries & Achievements:</h4>
                                </div>
                                <ul className="space-y-2 ml-7">
                                    <li className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>IIT Delhi (Order 1):</strong> Complete PEM Electrolyzer BOP with full system integration
                                    </li>
                                    <li className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>NIT Warangal:</strong> BOP systems for PEM, Alkaline, and Fuel Cell with field installation
                                    </li>
                                    <li className="text-gray-700 dark:text-gray-300 text-sm">
                                        <strong>IIT Delhi (Order 2):</strong> Four advanced fuel cell flow designs (Serpentine, Parallel, Interdigitated, Leaf)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
