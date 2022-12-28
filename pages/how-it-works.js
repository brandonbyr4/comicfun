import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import InformationalLayout from '../components/layouts/informational-layout'
import OpenSourceBanner from '../components/open-source-banner'
import user from '../public/images/user.svg'
import config from '../public/images/config.svg'
import gift from '../public/images/gift.svg'

export default function HowItWorks() {
    const [activeGuide, setActiveGuide] = useState(null)

    const handleActiveGuide = (toggle) => {
        if(toggle === activeGuide) {
            setActiveGuide(null)
        } else {
            setActiveGuide(toggle)
        }
    }

  return (
    <div>
      <Head>
        <title>ComicFun | How It Works</title>
      </Head>

      <main>
        <InformationalLayout content={
          <div>
            <section className="px-3">
              <div className="max-w-screen-xl mx-auto md:py-20 py-14">
                <h1 className="max-w-lg text-4xl font-semibold text-gray-900 mb-8">
                    Cartoonify yourself any time, any place
                </h1>
                <ul className="grid md:grid-cols-3 gap-8">
                    <li className="flex flex-col justify-between md:gap-8 gap-2">
                        <div className="max-w-xs mx-auto md:p-10 p-8 mt-4 -mb-4">
                            <Image src={user} alt="Feature preview" />
                        </div>
                        <div>
                            <p className="flex justify-center items-center p-3 w-12 h-12 text-violet-500 bg-gray-200 rounded-full mb-4">
                                1
                            </p>
                            <p className="text-gray-900">
                                Take a photo of yourself in the photo booth, or upload your best selfie!
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col justify-between md:gap-8 gap-2">
                        <div className="max-w-xs mx-auto md:p-10 p-8">
                            <Image src={config} alt="Feature preview" />
                        </div>
                        <div>
                            <p className="flex justify-center items-center p-3 w-12 h-12 text-violet-500 bg-gray-200 rounded-full mb-4">
                                2
                            </p>
                            <p className="text-gray-900">
                                Configure the output to your exact preferences.  Generate unlimited images as well.
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col justify-between md:gap-8 gap-2">
                        <div className="max-w-xs mx-auto md:p-10 p-8">
                            <Image src={gift} alt="Feature preview" />
                        </div>
                        <div>
                            <p className="flex justify-center items-center p-3 w-12 h-12 text-violet-500 bg-gray-200 rounded-full mb-4">
                                3
                            </p>
                            <p className="text-gray-900">
                                Save your cartoonified photo to your local device in multiple resolutions and file formats.
                            </p>
                        </div>
                    </li>
                </ul>
              </div>
            </section>
            <section className="px-3 border-b border-gray-300">
              <div className="max-w-screen-xl mx-auto md:py-20 pt-6 pb-14">
                <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
                    Quickstart guide
                </h2>
                <ul className="flex flex-col gap-4">
                    <li onClick={() => handleActiveGuide("launching")} className="flex justify-between gap-2 w-full p-8 bg-gray-100 rounded cursor-pointer">
                        <div>
                            <p className="md:text-lg text-gray-900">
                                Launching the app
                            </p>
                            {activeGuide === "launching" && <p className="text-gray-700 mt-2">
                                Click &quot;Launch Tool&quot; inside the menu, or portrait tool.  From here, you will be redirected to <Link href="/tool" className="text-blue-500 underline">comifcun.app/tool</Link>.
                            </p>}
                        </div>
                        <div className="!w-6 !h-6">
                            {activeGuide === "launching" ? <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>}
                        </div>
                    </li>
                    <li onClick={() => handleActiveGuide("uploading")} className="flex justify-between gap-2 w-full p-8 bg-gray-100 rounded cursor-pointer">
                        <div>
                            <p className="md:text-lg text-gray-900">
                                Uploading a photo
                            </p>
                            {activeGuide === "uploading" && <p className="text-gray-700 mt-2">
                                Uploading a photo to ComicFun is possible in two ways.  From the tool, drag a photo to the &quot;upload&quot; box, or click the section to open your device storage to choose a photo.
                            </p>}
                        </div>
                        <div className="!w-6 !h-6">
                            {activeGuide === "uploading" ? <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>}
                        </div>
                    </li>
                    <li onClick={() => handleActiveGuide("booth")} className="flex justify-between gap-2 w-full p-8 bg-gray-100 rounded cursor-pointer">
                        <div>
                            <p className="md:text-lg text-gray-900">
                                Using the photo booth
                            </p>
                            {activeGuide === "booth" && <p className="text-gray-700 mt-2">
                                You can also take a photo immediately in the photo booth.  Click &quot;take a photo&quot; and your device camera will open to take a photo.
                            </p>}
                        </div>
                        <div className="!w-6 !h-6">
                            {activeGuide === "booth" ? <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>}
                        </div>
                    </li>
                    <li onClick={() => handleActiveGuide("settings")} className="flex justify-between gap-2 w-full p-8 bg-gray-100 rounded cursor-pointer">
                        <div>
                            <p className="md:text-lg text-gray-900">
                                Adjusting the settings
                            </p>
                            {activeGuide === "settings" && <p className="text-gray-700 mt-2">
                                There are a few settings you can adjust to configure the output to your preferences.  Select which photo resolution, and file type you desire for the final export format.
                            </p>}
                        </div>
                        <div className="!w-6 !h-6">
                            {activeGuide === "settings" ? <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>}
                        </div>
                    </li>
                    <li onClick={() => handleActiveGuide("export")} className="flex justify-between gap-2 w-full p-8 bg-gray-100 rounded cursor-pointer">
                        <div>
                            <p className="md:text-lg text-gray-900">
                                Exporting cartoonified photo
                            </p>
                            {activeGuide === "export" && <p className="text-gray-700 mt-2">
                                Once you have uploaded a photo, and configured the settings, you can now click &quot;generate&quot;.  This will apply the ComicFun cartoonify filter and return the new photo, downloaded to your device.
                            </p>}
                        </div>
                        <div className="!w-6 !h-6">
                            {activeGuide === "export" ? <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg className="!w-6 !h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>}
                        </div>
                    </li>
                </ul>
              </div>
            </section>
            <OpenSourceBanner />
          </div>
        } />
      </main>
    </div>
  )
}