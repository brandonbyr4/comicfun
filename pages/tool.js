import Head from 'next/head'
import Link from 'next/link'

export default function Tool() {
    const uploadImage = () => {
        alert("Coming soon!")
    }

    const submitPortrait = (e) => {
        e.preventDefault()
        alert("Coming soon!")
    }

    const handleQuality = (e) => {
        e.preventDefault()
        alert("Coming soon!")
    }

    const handleFileType = (e) => {
        e.preventDefault()
        alert("Coming soon!")
    }

    return (
        <div>
            <Head>
                <title>ComicFun | Cartoon yourself with JavaScript</title>
                <meta name="description" content="Turn your profile picture into a comic book style portrait! Cartoonify yourself with JavaScript." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex w-full h-screen">
                    <div className="flex flex-col justify-between w-72 border-r border-gray-300">
                        <div>
                            <div className="px-6 py-3 border-b border-gray-300">
                                <Link href="/" className="text-2xl font-semibold text-gray-900">
                                    ComicFun 😂
                                </Link>
                            </div>
                            <div className="text-center">
                                <Link href="/tool" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                    </svg>
                                    Portrait Tool
                                </Link>
                                <Link href="/" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    How It Works
                                </Link>
                                <Link href="/" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Blog
                                </Link>
                                <a href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="px-8 py-5 flex items-center gap-2 text-md text-gray-900 hover:bg-gray-100 hover:text-violet-500">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    Github
                                </a>
                            </div>
                        </div>
                        <svg className="w-8 h-8 m-8 text-violet-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                    </div>
                    <div className="flex flex-col w-[calc(100%-39rem)]">
                        <div onClick={() => uploadImage()} className="flex justify-center items-center px-3 h-80 border-b border-gray-300 outline-gray-900 -outline-offset-2 hover:bg-gray-100 hover:outline-dotted cursor-pointer transition">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                                    <svg className="inline-block w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                    </svg>
                                    Take a photo
                                </h1>
                                <p className="text-gray-500">
                                    Use your device camera to take a photo
                                </p>
                            </div>
                        </div>
                        <div onClick={() => uploadImage()} className="flex justify-center items-center h-full px-3 outline-gray-900 -outline-offset-2 hover:bg-gray-100 hover:outline-dotted cursor-pointer transition">
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                    Or upload an image
                                </h2>
                                <p className="text-gray-500">
                                    drag and drop an image here to upload automatically
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-96 bg-gray-900">
                        <form onSubmit={(e) => submitPortrait(e)} className="flex flex-col justify-between h-full pt-8 pb-40 px-8 space-y-6">
                            <h3 className="text-2xl font-semibold text-white">
                                Save as...
                            </h3>
                            <div>
                                <p className="text-xl text-white mb-2">
                                    Quality
                                </p>
                                <div className="grid grid-cols-3 gap-4 text-center mb-8">
                                    <button onClick={(e) => handleQuality(e)} type="button" className="px-4 py-2 text-xs text-white bg-indigo-900 rounded cursor-pointer whitespace-nowrap">
                                        1080 x 1080
                                    </button>
                                    <button onClick={(e) => handleQuality(e)} type="button" className="px-4 py-2 text-xs text-white bg-indigo-900 rounded cursor-pointer whitespace-nowrap">
                                        720 x 720
                                    </button>
                                    <button onClick={(e) => handleQuality(e)} type="button" className="px-4 py-2 text-xs text-white bg-indigo-900 rounded cursor-pointer whitespace-nowrap">
                                        480 x 480
                                    </button>
                                </div>
                                <p className="text-xl text-white mb-2">
                                    File
                                </p>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <button onClick={(e) => handleFileType(e)} type="button" className="px-4 py-2 text-white bg-indigo-900 rounded cursor-pointer">
                                        PNG
                                    </button>
                                    <button onClick={(e) => handleFileType(e)} type="button" className="px-4 py-2 text-white bg-indigo-900 rounded">
                                        JPG
                                    </button>
                                    <button onClick={(e) => handleFileType(e)} type="button" className="px-4 py-2 text-white bg-indigo-900 rounded">
                                        SVG
                                    </button>
                                </div>
                            </div>
                            <div>
                                <input type="email" placeholder="your email adress..." className="bg-gray-900 text-white border-b border-gray-500 mb-6" required />
                                <button type="submit" className="w-full p-3 bg-violet-500 hover:bg-violet-400 text-white text-center rounded transition">
                                    Generate Portrait
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
