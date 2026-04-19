import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    color?: string;
}

export default function StatCard({ title, value, icon: Icon, trend, color = "blue" }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">{title}</p>
                    <p className="text-3xl font-semibold mt-2">{value}</p>
                    {trend && <p className="text-emerald-600 text-sm mt-1">↑ {trend}</p>}
                </div>
                <div className={`w-12 h-12 bg-${color}-100 rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                </div>
            </div>
        </div>
    );
}