import Link from "next/link"

export default function Footer () {
    return <footer className="px-3">
        <div className="grid md:grid-cols-2 gap-8 max-w-screen-xl mx-auto md:py-24 py-14">
            <div>
                <p className="text-xl font-semibold text-gray-900 mb-6">
                    ComicFun
                </p>
                <p className="max-w-sm text-gray-900 mb-6">
                    ComicFun is an open source profile picture generator.  Cartoonify yourself for free.
                </p>
                <ul className="flex md:flex-row flex-col gap-8">
                    <li>
                        <Link href="/" className="font-semibold text-gray-900">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/tool" className="font-semibold text-gray-900">
                            Portrait Tool
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="font-semibold text-gray-900">
                            How It Works
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="font-semibold text-gray-900">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
            <p className="text-gray-500">
                © 2022 ComicFun Open Source Software.  All Rights Reserved
            </p>
        </div>
    </footer>
}