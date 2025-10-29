
import { Zap, Award, Wrench, Lightbulb, Factory, FlaskConical } from "lucide-react";

export default function ShaktiPhotonContent() {
    const projects = [
        {
            title: "First Order – IIT Delhi: PEM Electrolyzer BOP",
            description: "Complete Balance of Plant (BOP) development for small-scale PEM Electrolyzer with full system integration",
            icon: Zap,
            order: "Purchase Order from IIT Delhi",
            details: [
                "Prepared catalyst inks, ultrasonicated and deposited on Nafion membrane using ultrasonic spray nozzle",
                "Fabricated complete Membrane Electrode Assembly (MEA) with membrane activation, gasket cutting, and hot-pressing",
                "Designed and fabricated mechanical components (water tank, water-gas separator, humidifier) using Fusion 360",
                "Assisted in CNC machining and manufacturing of system components",
                "Integrated hydrogen leakage detection sensor and storage tank",
                "Performed complete performance testing and optimization",
                "Successfully delivered and commissioned system at IIT Delhi"
            ],
            images: [],
        },
        {
            title: "Second Order – NIT Warangal: Multi-System BOP Fabrication",
            description: "Complex project involving BOP systems for PEM, Alkaline, and Fuel Cell setups with field installation",
            icon: Factory,
            order: "Purchase Order from NIT Warangal",
            team: "Noah Jacob (CTO), Jan Nisa Qazi (PhD Scholar), Mega Sai Gagan (Classmate)",
            details: [
                "Developed complete BOP setup for PEM, Alkaline, and Fuel Cell systems",
                "Deep understanding of material compatibility and flow management",
                "Advanced membrane chemistry and system integration",
                "Traveled to NIT Warangal for on-site installation and assembly",
                "Conducted field testing and performance optimization",
                "Hands-on troubleshooting under real operating conditions",
                "Successfully commissioned all three systems"
            ],
            images: [],
        },
        {
            title: "Third Order – IIT Delhi: Advanced Fuel Cell Flow Channel Design",
            description: "Fuel cell fabrication with four different flow geometries for performance optimization studies",
            icon: Wrench,
            order: "Purchase Order from IIT Delhi",
            responsibility: "Solely assigned to lead installation and demonstration",
            details: [
                "Fabricated fuel cells with serpentine flow channel design",
                "Manufactured interdigitated flow pattern configuration",
                "Created parallel flow channel systems",
                "Developed bio-inspired leaf-shaped flow channels",
                "Led independent installation at IIT Delhi",
                "Conducted on-site testing and system demonstration",
                "Strengthened professional communication and confidence in field operations"
            ],
            images: [],
        },
        {
            title: "Current Project – CO₂RR: Electrochemical CO₂ to CO Conversion",
            description: "Independent research project for CO₂ reduction to produce CO for hydrocarbon fuel synthesis",
            icon: FlaskConical,
            status: "Ongoing Research Project",
            details: [
                "Extensive literature survey to identify optimal catalysts",
                "Calculated optimal composition of cathodic (Ag catalyst) and anodic (IrO₂) inks",
                "Prepared and ultrasonically mixed catalyst inks",
                "Deposited inks onto carbon gas diffusion layers using ultrasonic spray nozzle",
                "Next phase: MEA fabrication and single-cell electrolyzer assembly (4cm × 4cm)",
                "Performance testing using serpentine flow field",
                "Future goal: Scale to 30cm × 30cm multi-serpentine configuration",
                "Aim: Produce CO for combination with hydrogen to synthesize hydrocarbon fuels"
            ],
            images: [],
        },
    ];

    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-900 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Shakti Photon Solutions
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                            Research Engineer Intern (Feb 2025 – Present)
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Working on cutting-edge clean energy technologies including PEM Electrolyzers,
                            Fuel Cells, and CO₂ reduction research.
                        </p>
                    </div>
                </div>

                {/* Achievements Banner */}
                <div className="mb-12 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-900 rounded-xl p-8 text-white grain-texture overflow-hidden">
                    <div className="flex items-center space-x-3 mb-4">
                        <Award className="h-8 w-8" />
                        <h2 className="text-2xl font-bold">Key Achievements & Deliveries</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 className="font-bold mb-2">IIT Delhi - Order 1</h3>
                            <p className="text-sm">Complete PEM Electrolyzer BOP with full system integration and commissioning</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 className="font-bold mb-2">NIT Warangal</h3>
                            <p className="text-sm">BOP for PEM, Alkaline & Fuel Cell systems with on-site installation</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 className="font-bold mb-2">IIT Delhi - Order 2</h3>
                            <p className="text-sm">Four advanced flow channel designs: Serpentine, Interdigitated, Parallel & Leaf</p>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="space-y-12">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                                                <IconComponent className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {project.title}
                                            </h3>
                                            {project.order && (
                                                <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                                    📋 {project.order}
                                                </div>
                                            )}
                                            {project.status && (
                                                <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                                    🔬 {project.status}
                                                </div>
                                            )}
                                            {project.responsibility && (
                                                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-3">
                                                    <p className="text-sm text-green-800 dark:text-green-300 font-semibold">
                                                        👤 {project.responsibility}
                                                    </p>
                                                </div>
                                            )}
                                            {project.team && (
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                                    <strong>Team:</strong> {project.team}
                                                </p>
                                            )}
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {project.description}
                                            </p>
                                        </div>
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
                                                            Project Image {img}
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
