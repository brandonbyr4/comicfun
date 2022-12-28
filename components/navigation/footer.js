import Link from 'next/link'
import { useContext } from 'react'
import ContextManager from '../../state/context-manager'

export default function Footer () {
    const { cookiesDisabled, gdprUnsubscribe } = useContext(ContextManager)

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
                        <Link href="/how-it-works" className="font-semibold text-gray-900">
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
            <div>
                <p className="text-xs text-gray-500 mb-2">
                    © 2022 ComicFun Open Source Software.  All Rights Reserved
                </p>
                <p className="text-xs text-gray-500">
                    This app uses anaytlics to optimize performance.  {!cookiesDisabled ? <span>
                        To opt out of non-essential cookies, click <button aria-label="gdpr-link" onClick={() => gdprUnsubscribe()} className="hover:underline">here</button>.
                    </span> : <span>
                        Non-essential cookies, including analytics are currently disabled.  Reload the app to enable this feature.
                    </span>}
                </p>
            </div>
        </div>
    </footer>
}