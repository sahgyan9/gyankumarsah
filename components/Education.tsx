import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    const education = [
        {
            institution: "SRM University, Andhra Pradesh, India",
            period: "2023–2027",
            degree: "B.Sc (Hons) in Physics",
            details: [
                "Minor: Mathematics",
                "CGPA: 9.70 / 10.00",
                "ECA: International Relations Student Council Member (2023–2024)"
            ]
        },
        {
            institution: "Global School of Science, Kathmandu, Nepal",
            period: "2021–2023",
            degree: "Grade XI & XII (Science Stream)",
            details: [
                "GPA: 3.81 / 4.00",
                "Subjects: Physics, Mathematics, Chemistry, Computer Science, and English",
                "ECA: 2nd Prize – PowerPoint Presentation Competition"
            ]
        },
        {
            institution: "Lord Bright Wisdom Int'l English School, Sarlahi, Nepal",
            period: "2016–2021",
            degree: "Grade X",
            details: [
                "GPA: 3.95 / 4.00",
                "ECA: School Discipline In-Charge (2018–2019)",
                "School Full Captain (2019–2020)",
                "1st Prize – Football, 2nd Prize – Basketball"
            ]
        }
    ];

    return (
        <section className="w-full bg-gray-50 dark:bg-slate-800 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Education
                    </h2>
                </div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                        <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {edu.institution}
                                        </h3>
                                        <span className="text-sm text-gray-600 dark:text-gray-400 italic">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                                        {edu.degree}
                                    </p>
                                    <ul className="space-y-1">
                                        {edu.details.map((detail, idx) => (
                                            <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                                                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
