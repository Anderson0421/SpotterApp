import Sidebar from "@/dashboard/components/Sidebar";

export default function Dashboard() {
    return (
        <>
            <section className="h-screen w-full flex bg-white">
                <Sidebar />
                <div className="p-5">
                    Hola
                </div>
            </section>
        </>
    )
}