

const Calltoaction = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <img className="w-auto mx-auto h-52" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/1/phone-mockup.png" alt="" />
                    <h2 className="mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Control everything on your hand. Start using our mobile apps</h2>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row md:mt-12">
                        <a href="#" title="" className="flex transition-all duration-200 transform hover:-translate-y-1" role="button">
                            <img className="w-auto h-14 lg:h-16 rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/1/app-store-button.svg" alt="" />
                        </a>

                        <a href="#" title="" className="flex transition-all duration-200 transform hover:-translate-y-1" role="button">
                            <img className="w-auto h-14 lg:h-16 rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/application/1/play-store-button.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calltoaction;