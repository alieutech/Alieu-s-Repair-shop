// import { Header } from "@/components/Header";

export default async function Templates({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="animate-appear">
            {children}
        </div>
    )
}