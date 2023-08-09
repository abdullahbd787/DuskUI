const Feature = () => {
    return (
        <section className="py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 mx-auto sm:px-6 lg:py-16 lg:col-span-5 lg:mx-0 lg:px-0">
                        <p className="text-sm font-normal tracking-widest text-gray-400">Level up with</p>
                        <h2 className="mt-6 text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Connect apps</span>with CRM</h2>

                        <ul className="mt-8 space-y-8 sm:space-y-12 sm:mt-12">
                            <li className="flex items-start">
                                <div className="inline-flex items-center justify-center w-8 h-10 bg-gray-900 rounded-full shrink-0">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-xl font-normal text-white">1200+ Premium Apps</h3>
                                    <p className="mt-3 text-base font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <div className="inline-flex items-center justify-center w-8 h-10 bg-gray-900 rounded-full shrink-0">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-xl font-normal text-white">Control Directly from Dashboard</h3>
                                    <p className="mt-3 text-base font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                </div>
                            </li>
                        </ul>

                        <hr className="mt-8 border-gray-800 sm:mt-12" />

                        <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Explore More </a>
                        </div>
                    </div>

                    <div className="mt-20 lg:mt-0 lg:col-span-7">
                        <div className="relative pl-8 -mr-48 sm:pl-12 md:-mr-16 lg:px-0 lg:m-0 lg:h-full">
                            <div className="absolute ml-8 sm:ml-14 bg-gradient-to-r from-cyan-500 to-purple-500 lg:ml-0 -inset-4 sm:-inset-8 xl:-inset-12 rounded-xl"></div>
                            <img className="relative w-full shadow-xl rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/3/dashboard-mockup.png" alt="Inbox user interface" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;