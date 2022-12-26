import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import MobileMenu from './mobile-menu'
import { useRouter } from 'next/router'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    EmailShareButton,
    EmailIcon
} from 'react-share'

export default function DashboardSidebar () {
    const [menuHover, setMenuHover]= useState(false)
    const [shareMenuActive, setShareMenuActive] = useState(null)
    const shareMenu = useRef(null)
    const shareButton = useRef(null)
    const router = useRouter()

    useEffect(() => {
        if (!shareMenuActive) return
        
        function handleClick(event) {
            if (shareMenu.current && !shareMenu.current.contains(event.target) && !shareButton.current.contains(event.target)) {
                setShareMenuActive(false)
            }
        }
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [shareMenuActive])

    useEffect(() => {
        const handleRouteChange = (url) => {
            setShareMenuActive(false)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    const shareToClipboard = () => {
        navigator.clipboard.writeText("https://www.comicfun.app/")
        alert("https://www.comicfun.app/ has been copied to the clipboard.")
    }

    return <div className="relative flex md:flex-col md:h-auto h-[81px] lg:w-72 md:w-60 md:items-start items-center justify-between md:border-r md:border-b-0 border-b border-gray-300">
        <div className="w-full">
            <div className="md:px-6 px-3 py-3 md:border-b border-gray-300">
                <Link href="/" className="text-2xl font-semibold text-gray-900 focus:ring-2 ring-violet-500">
                    ComicFun 😂
                </Link>
            </div>
            <div className="md:block hidden text-center">
                <Link onMouseEnter={() => {setMenuHover("menu1")}} onMouseLeave={() => {setMenuHover(false)}} href="/tool" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                    <svg className="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill={menuHover === "menu1" ?"#ede9fe":"none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                    Portrait Tool
                </Link>
                <Link onMouseEnter={() => {setMenuHover("menu2")}} onMouseLeave={() => {setMenuHover(false)}} href="/" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill={menuHover === "menu2" ?"#ede9fe":"none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    How It Works
                </Link>
                <Link onMouseEnter={() => {setMenuHover("menu3")}} onMouseLeave={() => {setMenuHover(false)}} href="/" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill={menuHover === "menu3" ?"#ede9fe":"none"}  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Blog
                </Link>
                <a onMouseEnter={() => {setMenuHover("menu4")}} onMouseLeave={() => {setMenuHover(false)}} href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill={menuHover === "menu4" ?"#ede9fe":"none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    Github
                </a>
            </div>
        </div>
        <button aria-label="Share the tool" ref={shareButton} onClick={() => setShareMenuActive(!shareMenuActive)} className="md:m-8">
            <svg className="md:w-8 md:h-8 w-6 h-6 text-violet-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
        </button>
        <div className="md:hidden block ml-4 mr-3">
            <MobileMenu />
        </div>
        {shareMenuActive && <div ref={shareMenu} className="block absolute md:bottom-20 md:left-8 md:top-auto md:right-auto top-16 right-14 h-fit w-44 py-2 bg-white text-gray-900 rounded shadow z-30">
            <ul className="text-center">
                <li>
                    <button onClick={() => shareToClipboard()} className="flex justify-center items-center gap-2 w-full p-3 hover:bg-gray-100">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        Copy URL
                    </button>
                </li>
                <li>
                    <label htmlFor="facebook-share" className="flex justify-center items-center gap-2 w-full p-3 hover:bg-gray-100 cursor-pointer">
                        <FacebookShareButton
                            id="facebook-share"
                            url="https://www.comicfun.app/"
                            quote="ComicFun - Cartoonify yourself for free"
                            hashtag="#comicfun"
                        >
                            <FacebookIcon size={25} />
                        </FacebookShareButton>
                        Facebook
                    </label>
                </li>
                <li>
                    <label htmlFor="twitter-share" className="flex justify-center items-center gap-2 w-full p-3 hover:bg-gray-100 cursor-pointer">
                        <TwitterShareButton
                            id="twitter-share"
                            url="https://www.comicfun.app/"
                            title="ComicFun - Cartoonify yourself for free"
                            hashtags={["comicfun", "photo", "profilepic"]}
                        >
                            <TwitterIcon size={25} />
                        </TwitterShareButton>
                        Twitter
                    </label>
                </li>
                <li>
                    <label htmlFor="linkedin-share" className="flex justify-center items-center gap-2 w-full p-3 hover:bg-gray-100 cursor-pointer">
                        <LinkedinShareButton
                            id="linkedin-share"
                            title="ComicFun - Cartoonify yourself for free"
                            summary="Have you seen this app?  Turn yourself into a cartoon profile picture for free."
                            url="https://www.comicfun.app/"
                        >
                            <LinkedinIcon size={25} />
                        </LinkedinShareButton>
                        Linkedin
                    </label>
                </li>
                <li>
                    <label htmlFor="reddit-share" className="flex justify-center items-center gap-2 w-full p-3 hover:bg-gray-100 cursor-pointer">
                        <RedditShareButton
                            id="reddit-share"
                            title="ComicFun - Cartoonify yourself for free"
                            url="https://www.comicfun.app/"
                        >
                            <RedditIcon size={25} />
                        </RedditShareButton>
                        Reddit
                    </label>
                </li>
                <li>
                    <label htmlFor="email-share" className="flex justify-center items-center gap-2 w-full p-3 hover:bg-gray-100 cursor-pointer">
                        <EmailShareButton 
                            id="email-share"
                            subject="ComicFun - Cartoonify yourself for free"
                            body="Have you seen this app?  Turn yourself into a cartoon profile picture for free."
                        >
                            <EmailIcon size={25} />
                        </EmailShareButton >
                        Email
                    </label>
                </li>
            </ul>
        </div>}
    </div>
}