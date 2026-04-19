// app/(dashboard)/page.tsx
import StatCard from "@/components/dashboard/StatCard";
import { Calendar, Users, Car, Clock, TrendingUp } from "lucide-react";
import BookingTrendChart from "@/components/dashboard/BookingTrendChart";
import UpcomingTripsTable from "@/components/dashboard/UpcomingTripsTable";

const mockKPIs = [
    { title: "Today’s Trips", value: "87", icon: Calendar, trend: "12% from yesterday" },
    { title: "Unassigned", value: "14", icon: Clock, color: "orange" },
    { title: "Pending", value: "23", icon: Users },
    { title: "Completed", value: "64", icon: TrendingUp },
    { title: "Active Drivers", value: "41", icon: Users, color: "emerald" },
    { title: "Revenue Today", value: "$4,820", icon: TrendingUp, color: "blue" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition">
                    <span>New Booking</span>
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {mockKPIs.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Booking Trend Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-3xl border">
                    <h2 className="font-medium mb-4">Bookings This Month</h2>
                    <BookingTrendChart />
                </div>

                {/* Quick Dispatch Preview */}
                <div className="bg-white p-6 rounded-3xl border">
                    <h2 className="font-medium mb-4">Live Dispatch Board</h2>
                    {/* Mini map or status cards can go here */}
                    <div className="h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                        Interactive Map / Live Vehicles (placeholder)
                    </div>
                </div>
            </div>

            {/* Upcoming Trips Table */}
            <div className="bg-white rounded-3xl border p-6">
                <div className="flex justify-between mb-6">
                    <h2 className="font-medium">Upcoming Trips Today</h2>
                    <button className="text-blue-600 text-sm">View All →</button>
                </div>
                <UpcomingTripsTable />
            </div>
        </div>
    );
}