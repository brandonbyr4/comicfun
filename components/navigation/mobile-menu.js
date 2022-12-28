import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MobileMenu () {
    const [mobileMenuActive, setMobileMenuActive] = useState(null)
    const mobileMenu = useRef(null)
    const menuButton = useRef(null)
    const router = useRouter()

    useEffect(() => {
        if (!mobileMenuActive) return
        
        function handleClick(event) {
            if (mobileMenu.current && !mobileMenu.current.contains(event.target) && !menuButton.current.contains(event.target)) {
                setMobileMenuActive(false)
            }
        }
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [mobileMenuActive])

    useEffect(() => {
        const handleRouteChange = (url) => {
            setMobileMenuActive(false)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <div className="md:hidden block relative">
        <button aria-label="Mobile menu" ref={menuButton} onClick={() => setMobileMenuActive(!mobileMenuActive)} className="md:hidden block focus:ring-2 ring-violet-500 my-2">
            {!mobileMenuActive ? <svg className="w-6 h-6 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> : 
            <svg className="w-6 h-6 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>}
        </button>
        {mobileMenuActive && <div ref={mobileMenu} className="md:hidden block absolute top-9 right-0 h-fit w-44 py-2 bg-white text-gray-900 rounded shadow z-30">
            <ul className="text-center">
                <li>
                    <Link href="/tool" className="block p-3 hover:bg-gray-100">
                        Portrait Tool
                    </Link>
                </li>
                <li>
                    <Link href="/how-it-works" className="block p-3 hover:bg-gray-100">
                        How It Works
                    </Link>
                </li>
                <li>
                    <Link href="/" className="block p-3 hover:bg-gray-100">
                        Blog
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="block p-3 hover:bg-gray-100">
                        Github
                    </a>
                </li>
            </ul>
        </div>}
    </div>
}