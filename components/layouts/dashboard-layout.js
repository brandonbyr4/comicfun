import DashboardSidebar from '../navigation/dashboard-sidebar'

export default function DashboardLayout (props) {
    return <div className="md:flex md:flex-row flex-col w-full h-screen">
        <DashboardSidebar />
        <div className="lg:w-[calc(100%-18rem)] md:w-[calc(100%-15rem)]">
            {props.content}
        </div>
    </div>
}