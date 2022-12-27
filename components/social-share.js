import { useState, useRef, useEffect } from 'react'
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

export default function SocialShare () {
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

    return <>
        <button aria-label="Share the tool" ref={shareButton} onClick={() => setShareMenuActive(!shareMenuActive)} className="md:m-8">
            <svg className="md:w-8 md:h-8 w-6 h-6 text-violet-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
        </button>
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
    </>
}