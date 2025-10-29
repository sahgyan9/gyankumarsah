"use client";

import { Microscope, Code, Trophy, BookOpen } from "lucide-react";

type Project = {
    title: string;
    period?: string;
    mentor?: string;
    lab?: string;
    team?: string;
    status?: string;
    award?: string;
    link?: string;
    details: string[];
    images: string[];
};

type Section = {
    title: string;
    icon: typeof Microscope;
    color: string;
    projects: Project[];
};

export default function ResearchContent() {
    const sections: Section[] = [
        {
            title: "Research Projects",
            icon: Microscope,
            color: "from-blue-500 to-blue-700",
            projects: [
                {
                    title: "Optically Controlled Ferromagnetic Material",
                    period: "Aug 2024 – Present",
                    mentor: "Dr. Krishna Prasad Maity",
                    lab: "Exotic Interface Lab, SRM University AP",
                    details: [
                        "Deposited 30 nm cobalt thin films on glass substrates using RF sputtering system",
                        "Optimized critical deposition parameters: chamber pressure, RF power, argon flow rate, substrate rotation, and deposition time",
                        "Worked closely with PhD scholar Nilja George to achieve uniform films with reproducible thickness",
                        "Fabricated thin films in Hall bar geometry on 5mm × 5mm glass substrates independently",
                        "Created microscopic electrical contacts using fine copper wire and liquid silver paste with 24h drying",
                        "Designed and 3D-printed custom sample holder using Fusion 360 for magnetic field measurements",
                        "Installed and calibrated 0.5 Tesla Helmholtz coil setup using Gaussmeter for uniform field",
                        "Performed Anomalous Hall Effect (AHE) measurements using Zurich Instruments Lock-in Amplifier",
                        "Gained expertise in thin-film deposition, data acquisition, and experimental problem-solving",
                        "Key Learning: Research is an evolving dialogue between hypothesis, experiment, and persistence"
                    ],
                    images: [],
                },
                {
                    title: "CdSe Doped with Graphene Quantum Dots (GQD)",
                    period: "Collaborative Project",
                    mentor: "Dr. Krishna Prasad Maity",
                    team: "Nilja George (PhD Scholar), Akshay Sampath (Undergraduate)",
                    status: "Paper to be Published",
                    details: [
                        "Enhanced photoconductive response of CdSe thin films using GQD doping (2:1 and 3:1 ratios)",
                        "Designed compact holder using Fusion 360 for precise two-point electrical contact",
                        "Established electrical contacts using liquid silver paste with 24h drying for conductivity and stability",
                        "Performed I-V characterization using Keithley SourceMeter under varying light conditions",
                        "Used DC2200 LED Driver with wavelengths: 575nm, 580nm, 780nm, 970nm (0-50mA current)",
                        "Automated measurements using LabVIEW program for voltage sweeps and data recording",
                        "Conducted time-response measurements in pulse mode (LED ON/OFF control)",
                        "Measured internal modulation using Lock-in Amplifier at various frequencies for charge carrier dynamics",
                        "Results: Response time improved 10× (200ms → 20ms) with GQD doping, indicating enhanced carrier transport",
                        "Currently processing data using Python for I-V plots, transient response, and frequency graphs",
                        "Impact: Demonstrated how nanoscale modifications drastically change macroscopic device behavior"
                    ],
                    images: [],
                }
            ]
        },
        {
            title: "Academic Projects",
            icon: Code,
            color: "from-purple-500 to-purple-700",
            projects: [
                {
                    title: "Post-Quantum Cryptography Project",
                    mentor: "Dr. Sazzad Ali Biswas",
                    details: [
                        "Explored post-quantum cryptography fundamentals",
                        "Focused on Shor's Algorithm and quantum threats to classical encryption",
                        "Studied quantum superposition and parallel processing",
                        "Analyzed quantum-resistant cryptographic algorithms"
                    ],
                    images: [],
                },
                {
                    title: "Temperature-Controlled Fan System",
                    mentor: "Dr. Krishna Prasad Maity",
                    details: [
                        "Designed analog feedback-controlled cooling system",
                        "Implemented thermistor-based temperature sensing",
                        "Used op-amp comparator (LM358) and transistor driver circuit",
                        "Automated fan operation based on temperature variation",
                        "Circuit simulation, breadboard prototyping, and testing",
                        "Practical application of diodes, transistors, op-amps, and resistive networks"
                    ],
                    images: [],
                }
            ]
        },
        {
            title: "First Year Experience & Community Involvement",
            icon: BookOpen,
            color: "from-green-500 to-green-700",
            projects: [
                {
                    title: "International Relations Student Council",
                    period: "2023–2024",
                    details: [
                        "Selected as member of International Relations Student Council",
                        "Learned to collaborate and represent diverse student voices",
                        "Developed leadership and communication skills",
                        "Contributed to fostering international student community at SRM AP"
                    ],
                    images: []
                },
                {
                    title: "Physics Department Outreach Programs",
                    period: "First Year",
                    details: [
                        "Participated in physics department outreach programs to inspire school students",
                        "Demonstrated space-time curvature experiments using interactive models",
                        "Presented Ruben's Tube experiment showcasing sound wave visualization",
                        "Engaged with local schools to promote scientific curiosity and learning",
                        "Bridged gap between theoretical physics and hands-on demonstrations"
                    ],
                    images: []
                }
            ]
        },
        {
            title: "Research Foundation & Skills Development",
            icon: BookOpen,
            color: "from-teal-500 to-teal-700",
            projects: [
                {
                    title: "Python & LabVIEW Training",
                    mentor: "Dr. Krishna Prasad Maity",
                    period: "Second Year - Beginning",
                    details: [
                        "First lessons: Patience, thinking like an experimentalist, failing intelligently, and iterating until data makes sense",
                        "Learned Python for data analysis and automation",
                        "Mastered LabVIEW for automated measurements and signal analysis",
                        "Achieved medium-level proficiency before starting research projects",
                        "Foundation for all subsequent experimental work and data processing"
                    ],
                    images: []
                }
            ]
        },
        {
            title: "Hackathons & Competitions",
            icon: Trophy,
            color: "from-amber-500 to-amber-700",
            projects: [
                {
                    title: "Quantum Double Shield Protocol (QDSP)",
                    award: "3rd Place - Amaravati Quantum Valley Hackathon",
                    details: [
                        "Developed quantum-enhanced communication prototype",
                        "Implemented Quantum Key Distribution (BB84) for session key exchange",
                        "Integrated Quantum Random Number Generation (QRNG) for entropy",
                        "Designed adaptive authentication with quantum-derived session tokens",
                        "Combined quantum security with AES encryption",
                        "Demonstrated eavesdropper detection via QBER analysis",
                        "Built using IBM Quantum and Qiskit simulators"
                    ],
                    link: "https://preview--qdsp.lovable.app/",
                    images: [],
                }
            ]
        },
        {
            title: "Skills Development",
            icon: BookOpen,
            color: "from-green-500 to-green-700",
            projects: [
                {
                    title: "Technical Skills Acquired",
                    details: [
                        "RF/DC Sputtering and thin film deposition",
                        "Lock-In Amplifier measurements",
                        "CAD design with Fusion 360",
                        "3D printing and rapid prototyping",
                        "Python for data analysis and visualization",
                        "Arduino programming for sensor systems",
                        "LaTeX for scientific documentation"
                    ],
                    images: []
                }
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-900 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Undergraduate Research & Academic Work
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            SRM University, Andhra Pradesh - Research projects, academic initiatives, and extracurricular achievements
                        </p>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-16">
                    {sections.map((section, sectionIndex) => {
                        const IconComponent = section.icon;
                        return (
                            <div key={sectionIndex}>
                                {/* Section Header */}
                                <div className={`bg-gradient-to-r ${section.color} rounded-xl p-6 mb-8 grain-texture overflow-hidden`}>
                                    <div className="flex items-center space-x-4 text-white">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-3xl font-bold">{section.title}</h2>
                                    </div>
                                </div>

                                {/* Projects in Section */}
                                <div className="space-y-8">
                                    {section.projects.map((project, projectIndex) => (
                                        <div
                                            key={projectIndex}
                                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                        >
                                            <div className="p-8">
                                                <div className="mb-6">
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                        {project.title}
                                                    </h3>
                                                    {project.period && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                                                            {project.period}
                                                        </p>
                                                    )}
                                                    {project.mentor && (
                                                        <p className="text-sm text-primary-600 dark:text-primary-400">
                                                            Mentor: {project.mentor}
                                                        </p>
                                                    )}
                                                    {project.lab && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            {project.lab}
                                                        </p>
                                                    )}
                                                    {project.team && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            Team: {project.team}
                                                        </p>
                                                    )}
                                                    {project.status && (
                                                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-1">
                                                            Status: {project.status}
                                                        </p>
                                                    )}
                                                    {project.award && (
                                                        <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">
                                                            🏆 {project.award}
                                                        </p>
                                                    )}
                                                    {project.link && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-primary-600 dark:text-primary-400 hover:underline mt-1 inline-block"
                                                        >
                                                            View Project →
                                                        </a>
                                                    )}
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {/* Details */}
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                                                            Project Details:
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {project.details.map((detail, idx) => (
                                                                <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                                                                    <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                                                                    <span>{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Image Gallery Placeholder */}
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                                                            Project Gallery:
                                                        </h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {[1, 2].map((img) => (
                                                                <div
                                                                    key={img}
                                                                    className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center"
                                                                >
                                                                    <p className="text-gray-600 dark:text-gray-300 text-xs text-center px-2">
                                                                        Image {img}
                                                                        <br />
                                                                        <span className="text-[10px]">(Upload via Supabase)</span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
