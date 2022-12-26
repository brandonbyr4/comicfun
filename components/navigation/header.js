import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header () {
    return <div>
        <div className="w-full h-[81px]" />
        <header className="fixed w-full h-[81px] top-0 px-3 py-5 border-b border-gray-300 bg-white z-20">
            <div className="relative flex justify-between items-center gap-4 max-w-screen-xl mx-auto">
                <Link href="/" className="text-2xl font-semibold text-gray-900 focus:ring-2 ring-violet-500">
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
                <MobileMenu />
            </div>
        </header>
    </div>
}