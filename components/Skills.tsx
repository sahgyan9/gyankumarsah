import { Code, Beaker, Users } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Technical Skills",
            icon: Code,
            skills: [
                "RF/DC Sputtering, Furnace Handling, Lock-In Amplifier, DC2200 LED Driver",
                "PEM/AEM/AEMFC Electrolyzer Fabrication",
                "Fusion 360 (CAD), 3D Printing, CNC Cutting",
                "Arduino, Python, Overleaf (LaTeX)"
            ]
        },
        {
            title: "Research Skills",
            icon: Beaker,
            skills: [
                "Data analysis and visualization (using Python and Origin)",
                "Experimental design and optimization",
                "Troubleshooting and instrument calibration"
            ]
        },
        {
            title: "Soft Skills",
            icon: Users,
            skills: [
                "Leadership, teamwork, communication, and collaboration",
                "Critical thinking and adaptability"
            ]
        }
    ];

    return (
        <section className="w-full bg-white dark:bg-slate-900 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Key Skills and Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl transition-shadow grain-texture overflow-hidden"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center">
                                        <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {category.skills.map((skill, idx) => (
                                        <li
                                            key={idx}
                                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                                        >
                                            <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
