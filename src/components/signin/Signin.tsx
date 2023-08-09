
const Signin = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2">
                <svg className="blur-3xl filter" style={{ filter: "blur(64px)" }} width="643" height="408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z" fill="url(#c)" />
                    <defs>
                        <linearGradient id="c" x1="663.766" y1="168.785" x2="303.65" y2="469.667" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" style={{ stopColor: "var(--color-cyan-500);" }} />
                            <stop offset="100%" style={{ stopColor: "var(--color-purple-500);" }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
            </div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h1 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
                        Welcome back!
                    </h1>
                    <p className="max-w-sm mx-auto mt-6 text-lg font-normal text-gray-400">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    </p>
                </div>

                <div className="max-w-md mx-auto mt-8 space-y-6 sm:mt-12">
                    <form action="#" method="POST" className="space-y-5">
                        <div>
                            <label htmlFor="" className="sr-only">
                                Email address
                            </label>
                            <div>
                                <input type="email" name="" id="" placeholder="Email address"
                                    className="block w-full px-5 py-4 text-base font-normal text-center text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="" className="sr-only">
                                Password
                            </label>
                            <div>
                                <input type="password" name="" id="" placeholder="Password"
                                    className="block w-full px-5 py-4 text-base font-normal text-center text-white placeholder-gray-500 bg-black border border-gray-800 rounded-md focus:border-white focus:ring-white focus:ring-1" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" name="terms" id="terms"
                                    className="w-5 h-5 bg-gray-700 border-gray-800 rounded focus:ring-offset-black text-cyan-500 focus:ring-cyan-500" />
                                <label htmlFor="terms" className="block ml-3 text-sm font-normal text-gray-300">
                                    Remember me
                                </label>
                            </div>

                            <div>
                                <a href="#" title=""
                                    className="text-sm font-normal text-gray-300 transition-all duration-200 hover:text-white">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                className="inline-flex items-center justify-center w-full px-10 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150 filter">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-900"></div>
                        </div>
                        <div className="relative flex justify-center ">
                            <span className="px-2 text-sm font-normal text-gray-500 bg-black">
                                Or
                            </span>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            className="inline-flex items-center justify-center w-full px-10 py-4 text-base font-normal text-white transition-all duration-200 bg-gray-900 rounded-md hover:bg-gray-800">
                            <img className="w-6 h-6 mr-6" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/sign-up/2/google-logo.svg" alt="" />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Signin