import Head from 'next/head'
import React, {useState}  from 'react'
import DashboardLayout from '../components/layouts/dashboard-layout'

export default function Tool() {
    const [quality, setQuality] = useState('')
    const [fileType, setFileType] = useState('')

    const uploadImage = () => {
        alert("Coming soon!")
    }

    const submitPortrait = (e) => {
        e.preventDefault()
        alert("Coming soon!")
    }

    const handleQuality = (e) => {
        e.preventDefault()
        setQuality(e.target.value)
        alert("Coming soon!")
    }

    const handleFileType = (e) => {
        e.preventDefault()
        setFileType(e.target.value)
        alert("Coming soon!")
    }

    return (
        <div>
            <Head>
                <title>ComicFun | Cartoonify yourself for free!</title>
            </Head>

            <main>
                <DashboardLayout content={
                    <div className="md:flex md:h-full">
                        <div className="flex flex-col xl:w-[calc(100%-24rem)] lg:w-[calc(100%-20rem)] md:w-[calc(100%-18rem)] w-full" >
                            <label htmlFor="take-picture" className="flex justify-center items-center px-3 md:h-80 h-52 border-b border-gray-300 outline-gray-900 -outline-offset-2 hover:bg-gray-100 hover:outline-dotted cursor-pointer transition">
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
                                    <input id="take-picture" type="file" accept="image/png, image/jpeg" onChange={() => uploadImage()} className="hidden" />
                                </div>
                            </label>
                            <label htmlFor="upload-picture" className="flex justify-center items-center md:h-full h-72 px-3 outline-gray-900 -outline-offset-2 hover:bg-gray-100 hover:outline-dotted cursor-pointer transition">
                                <div className="text-center">
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Or upload an image
                                    </h2>
                                    <p className="text-gray-500">
                                        drag and drop an image here to upload automatically
                                    </p>
                                    <input id="upload-picture" type="file" accept="image/png, image/jpeg" onChange={() => uploadImage()} className="hidden" />
                                </div>
                            </label>
                        </div>
                        <div className="relative xl:w-96 lg:w-80 md:w-72 w-full bg-gray-900">
                            <form onSubmit={(e) => submitPortrait(e)} className="flex flex-col justify-between h-full md:pt-8 md:pb-40 py-14 px-8 md:space-y-6 space-y-16">
                                <h3 className="text-2xl font-semibold text-white">
                                    Save as...
                                </h3>
                                <div>
                                    <p className="text-xl text-white mb-2">
                                        Quality
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-8">
                                        <button onClick={(e) => handleQuality(e)} type="button" value="1080" className="px-4 py-2 text-xs text-white bg-indigo-900 rounded cursor-pointer whitespace-nowrap">
                                            1080<br className="xl:hidden block" />x 1080
                                        </button>
                                        <button onClick={(e) => handleQuality(e)} type="button" value="720" className="px-4 py-2 text-xs text-white bg-indigo-900 rounded cursor-pointer whitespace-nowrap">
                                            720<br className="xl:hidden block" />x 720
                                        </button>
                                        <button onClick={(e) => handleQuality(e)} type="button" value="480" className="px-4 py-2 text-xs text-white bg-indigo-900 rounded cursor-pointer whitespace-nowrap">
                                            480<br className="xl:hidden block" />x 480
                                        </button>
                                    </div>
                                    <p className="text-xl text-white mb-2">
                                        File
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <button onClick={(e) => handleFileType(e)} type="button" value="PNG" className="px-4 py-2 text-white bg-indigo-900 rounded cursor-pointer">
                                            PNG
                                        </button>
                                        <button onClick={(e) => handleFileType(e)} type="button" value="JPG" className="px-4 py-2 text-white bg-indigo-900 rounded">
                                            JPG
                                        </button>
                                        <button onClick={(e) => handleFileType(e)} type="button" value="SVG" className="px-4 py-2 text-white bg-indigo-900 rounded">
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
                } />
            </main>
        </div>
    )
}
