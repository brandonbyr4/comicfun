import DashboardSidebar from "../navigation/dashboard-sidebar";

export default function DashboardLayout (props) {
    return <div className="flex w-full h-screen">
        <DashboardSidebar />
        <div className="w-[calc(100%-18rem)]">
            {props.content}
        </div>
    </div>
}