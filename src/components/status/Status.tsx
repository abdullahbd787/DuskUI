const Status = () => {
  return (
    <section className="py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center md:max-w-2xl md:text-left md:mx-0">
                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                        The Landingfolio Facts
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-400 sm:mt-6 sm:text-lg">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                        velit
                        mollit.
                    </p>
                </div>

                <div className="relative max-w-md mx-auto mt-12 sm:mt-16 md:max-w-none lg:mt-20">
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg className="filter blur-3xl" style={{filter:"blur(64px)"}} width="756" height="202" viewBox="0 0 756 202"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M434.095 21.8754C619.918 21.8754 755.509 -33.413 755.509 31.8038C755.509 97.0206 268.41 201.855 82.5876 201.855C-103.234 201.855 82.5876 97.0207 82.5876 31.8039C82.5876 -33.4129 248.273 21.8754 434.095 21.8754Z"
                                fill="url(#b)" />
                            <defs>
                                <linearGradient id="b" x1="0" y1="201.855" x2="8.92305" y2="-28.873" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" style={{stopColor: "var(--color-cyan-500);"}} />
                                    <stop offset="100%" style={{stopColor: "var(--color-purple-500);"}} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl"></div>

                    <div
                        className="relative flex flex-col items-stretch overflow-hidden text-center bg-black md:flex-row md:text-left rounded-xl bg-opacity-90">
                        <div className="flex-1 px-8 py-10 sm:px-12 lg:px-16 lg:py-14">
                            <p className="text-5xl font-normal text-white lg:text-6xl">
                                1M+
                            </p>
                            <p className="mt-3 text-lg font-normal text-gray-400">
                                Tickets Delivered This Month
                            </p>
                        </div>

                        <div className="w-full h-px md:h-auto md:w-px bg-gradient-to-r from-cyan-500 to-purple-500 shrink-0"></div>

                        <div className="flex-1 px-8 py-10 sm:px-12 lg:px-16 lg:py-14">
                            <p className="text-5xl font-normal text-white lg:text-6xl">
                                53K+
                            </p>
                            <p className="mt-3 text-lg font-normal text-gray-400">
                                Active Customers Rate
                            </p>
                        </div>

                        <div className="w-full h-px md:h-auto md:w-px bg-gradient-to-r from-cyan-500 to-purple-500 shrink-0"></div>

                        <div className="flex-1 px-8 py-10 sm:px-12 lg:px-16 lg:py-14">
                            <p className="text-5xl font-normal text-white lg:text-6xl">
                                98.29%
                            </p>
                            <p className="mt-3 text-lg font-normal text-gray-400">
                                Customer Satisfaction Rate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Status