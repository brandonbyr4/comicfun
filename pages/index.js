import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import GitHubButton from 'react-github-btn'
import InformationalLayout from '../components/layouts/informational-layout'
import portraitPreview1 from '../public/images/portrait-preview1.jpg'
import portraitPreview2 from '../public/images/portrait-preview2.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ComicFun | Cartoonify yourself for free!</title>
      </Head>

      <main>
        <InformationalLayout content={
          <div>
            <section className="px-3">
              <div className="grid md:grid-cols-5 items-center gap-12 max-w-screen-xl mx-auto md:py-20 py-14">
                <div className="md:col-span-3">
                  <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold text-gray-900 mb-8">
                    Turn your profile picture into a comic book style portrait
                  </h1>
                  <p className="md:text-lg text-gray-500 mb-10">
                    Cartoonify yourself for free!  Create a free cartoon profile picture, then easily export the photo to use or share on social media.
                  </p>
                  <div className="flex md:flex-row flex-col md:justify-items-start justify-items-center md:items-start items-center gap-4">
                    <Link href="/tool" className="inline-block px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white rounded transition whitespace-nowrap">
                      Launch Tool
                    </Link>
                    <Link href="/" className="inline-block px-8 py-4 text-gray-900 underline-offset-2 decoration-2 rounded hover:underline whitespace-nowrap">
                      How It Works
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-2 md:p-0 pt-0 px-10">
                  <Image src={portraitPreview1} alt="Portrait preview" priority />
                </div>
              </div>
            </section>
            <section className="px-3">
              <div className="max-w-screen-xl mx-auto md:py-20 pt-6 pb-14">
                <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:mb-20 mb-14">
                  <span className="overline decoration-4 decoration-violet-500">Cartoonify</span> yourself for free
                </h2>
                <ul className="grid md:grid-cols-3 gap-12">
                  <li className="space-y-4">
                    <svg className="p-3 w-12 h-12 text-violet-500 bg-gray-200 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-lg font-semibold text-gray-900">
                      Upload an image of yourself
                    </p>
                    <p className="text-gray-500">
                      Take a selfie inside the portrait tool, or upload your best existing photo into the tool.
                    </p>
                  </li>
                  <li className="space-y-4">
                    <svg className="p-3 w-12 h-12 text-violet-500 bg-gray-200 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                    <p className="text-lg font-semibold text-gray-900">
                      Configure to your desired output
                    </p>
                    <p className="text-gray-500">
                      Configure how your want your photo to be exported.  Choose between different image resolutions and file types.
                    </p>
                  </li>
                  <li className="space-y-4">
                    <svg className="p-3 w-12 h-12 text-violet-500 bg-gray-200 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <p className="text-lg font-semibold text-gray-900">
                      Export to PNG, JPG, or SVG
                    </p>
                    <p className="text-gray-500">
                      Congrats!  Your new cartoonified selfie is complete.  Easily export and share across social media.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
            <section className="px-3 border-b border-gray-300">
              <div className="grid md:grid-cols-2 items-center md:gap-20 gap-2 max-w-screen-xl mx-auto md:pt-20 md:pb-28 pt-6 pb-14">
                <div className="md:p-0 p-10 relative md:order-1 order-2">
                  <div className="absolute md:left-8 left-[4.5rem] md:top-8 top-[4.5rem] w-full md:max-w-[500px] md:w-full max-w-[500px] w-[calc(100%-5rem)] md:h-[100%] h-[calc(100%-5rem)] bg-violet-500 -z-10" />
                  <div className="max-w-[500px]">
                    <Image src={portraitPreview2} alt="Portrait preview" />
                  </div>
                </div>
                <div className="md:order-2 order-1">
                  <h3 className="md:text-4xl text-3xl font-semibold text-gray-900 mb-8">
                    The perfect portrait for profile pictures, resumes, and more
                  </h3>
                  <p className="text-gray-500 mb-10">
                    Generate a professional, while fun image to use on any other platform.  Simply upload your best photo, configure the tool how you want, and click generate.
                  </p>
                  <div className="flex md:flex-row flex-col md:justify-items-start justify-items-center md:items-start items-center gap-4">
                    <Link href="/tool" className="inline-block px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white rounded transition whitespace-nowrap">
                      Launch Tool
                    </Link>
                    <Link href="/" className="inline-block px-8 py-4 text-gray-900 underline-offset-2 decoration-2 rounded hover:underline whitespace-nowrap">
                      Read The Blog
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="px-3 border-b border-gray-300">
              <div className="max-w-screen-xl mx-auto md:py-24 py-16 text-center">
                <p className="text-3xl font-semibold text-gray-900 mb-4">
                  ComicFun is open source.
                </p>
                <p className="text-gray-500 mb-4">
                  Check out the source code, contribute, and leave us a star!
                </p>
                <GitHubButton href="https://github.com/brandonbyr4/comicfun" data-size="large" data-show-count="true" aria-label="Star brandonbyr4/comicfun on GitHub">Star</GitHubButton>
              </div>
            </section>
          </div>
        } />
      </main>
    </div>
  )
}
