import React from 'react'

const Team = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute top-0 transform -translate-x-1/2 -translate-y-72 left-1/2">
        <svg className="blur-3xl filter" style={{filter:"blur(64px)" }}width="601" height="406" viewBox="0 0 601 406"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M441.823 197.38C522.638 295.952 665.173 299.367 566.601 380.182C468.029 460.997 97.733 332.517 16.9179 233.945C-63.8973 135.372 175.371 104.036 273.943 23.2204C372.515 -57.5947 361.007 98.808 441.823 197.38Z"
            fill="url(#d)" />
          <defs>
            <linearGradient id="d" x1="-19" y1="190.135" x2="357.241" y2="-54.7476" gradientUnits="userSpaceOnUse">
              <stop offset="0%" style={{stopColor:"var(--color-cyan-500);"}} />
              <stop offset="100%" style={{stopColor:"var(--color-purple-500);"}} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt=""/>
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center lg:max-w-2xl">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Made by Designers for Design Agenecies
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20">
          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-gray-800 rounded hover:-translate-y-2">
            <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/5/team-member-1.png" alt=""/>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <p className="text-lg font-semibold text-white">
                Theresa Webb
              </p>
              <p className="text-base font-normal text-gray-400">
                Co-Founder, CEO
              </p>
            </div>
            <div className="mt-auto border-t border-gray-700">
              <a href="#" title=""
                className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-white uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-purple-500"
                role="button">
                Follow on Twitter
              </a>
            </div>
          </div>

          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-gray-800 rounded hover:-translate-y-2">
            <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/5/team-member-2.png" alt=""/>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <p className="text-lg font-semibold text-white">
                Devon Lane
              </p>
              <p className="text-base font-normal text-gray-400">
                Ethical Hacker
              </p>
            </div>
            <div className="mt-auto border-t border-gray-700">
              <a href="#" title=""
                className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-white uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-purple-500"
                role="button">
                Follow on Twitter
              </a>
            </div>
          </div>

          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-gray-800 rounded hover:-translate-y-2">
            <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/5/team-member-3.png" alt=""/>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <p className="text-lg font-semibold text-white">
                Jacob Jones
              </p>
              <p className="text-base font-normal text-gray-400">
                Software Development Manager
              </p>
            </div>
            <div className="mt-auto border-t border-gray-700">
              <a href="#" title=""
                className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-white uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-purple-500"
                role="button">
                Follow on Twitter
              </a>
            </div>
          </div>

          <div
            className="flex flex-col overflow-hidden transition-all duration-200 transform bg-gray-800 rounded hover:-translate-y-2">
            <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/team/5/team-member-4.png" alt=""/>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <p className="text-lg font-semibold text-white">
                Wade Warren
              </p>
              <p className="text-base font-normal text-gray-400">
                Team Leader
              </p>
            </div>
            <div className="mt-auto border-t border-gray-700">
              <a href="#" title=""
                className="flex items-center justify-center px-6 py-4 text-xs font-normal tracking-widest text-white uppercase transition-all duration-200 bg-transparent hover:bg-gradient-to-r from-cyan-500 to-purple-500"
                role="button">
                Follow on Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team