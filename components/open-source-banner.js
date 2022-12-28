import GitHubButton from 'react-github-btn'

export default function OpenSourceBanner () {
    return <section className="px-3 border-b border-gray-300">
        <div className="flex flex-col items-center max-w-screen-xl mx-auto md:py-24 py-16 text-center">
            <p className="text-3xl font-semibold text-gray-900 mb-4">
                ComicFun is open source.
            </p>
            <p className="text-gray-500 mb-4">
                Check out the source code, contribute, and leave us a star!
            </p>
            <GitHubButton href="https://github.com/brandonbyr4/comicfun" data-size="large" data-show-count="true" aria-label="Star brandonbyr4/comicfun on GitHub">Star</GitHubButton>
        </div>
    </section>
}