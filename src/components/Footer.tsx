import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-transparent py-5 pb-10 mt-16 px-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-text sm:text-center font-medium">© 2024 <Link href={"#"} className="hover:underline">DevCollab™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm  text-text sm:mt-0">
                    <Link href="#" className="hover:underline me-4 md:me-6">
                        About us
                    </Link>

                    <Link href="../blog" className="hover:underline me-4 md:me-6">
                        Blog
                    </Link>
                    <Link href="#" className="hover:underline me-4 md:me-6">
                        Contact
                    </Link>
                    <Link href="#" className="hover:underline">
                        Enterprise
                    </Link>
                </ul>
            </div>
        </footer >

    )
}