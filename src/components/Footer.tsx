import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" rounded-lg shadow py-20 px-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">DevCollab™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">
                            Enterprise
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}