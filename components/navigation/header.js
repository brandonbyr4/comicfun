import Link from "next/link"

export default function Header () {
    return <div>
        <div className="w-full h-[81px]" />
        <header className="fixed w-full h-[81px] top-0 px-3 py-5 border-b border-gray-300 bg-white z-20">
            <div className="flex justify-between items-center gap-4 max-w-screen-xl mx-auto">
                <Link href="/" className="text-2xl font-semibold text-gray-900">
                    ComicFun 😂
                </Link>
                <ul className="md:flex hidden gap-8">
                    <li>
                        <Link href="/tool" className="underline-offset-2 decoration-2 hover:underline">
                            Portrait Tool
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                            How It Works
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="underline-offset-2 decoration-2 hover:underline">
                            Github
                        </a>
                    </li>
                </ul>
                <Link href="/tool" className="md:inline-block hidden px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded transition">
                    Launch Tool
                </Link>
                <svg className="md:hidden block w-6 h-6 my-2 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </header>
    </div>
}