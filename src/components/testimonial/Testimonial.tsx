const Testimonial = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 lg:gap-x-32 gap-y-12">
            <div>
              <img className="h-auto w-80" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/testimonial/6/avatar-female.png" alt=""/>
              <blockquote className="mt-8 sm:mt-16">
                <p className="text-xl font-normal text-white">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae et ultricies sapien mauris, urna.
                  Arcu justo,
                  tellus in tellus, sed sed venenatis velit. Nisl nam augue elit at viverra euismod vitae.”
                </p>
              </blockquote>
              <p className="mt-6 text-xl font-semibold text-gray-200 sm:mt-10">
                Courtney Henry
              </p>
              <p className="mt-1 text-base font-normal text-gray-400">
                CEO @ CourtHe
              </p>
            </div>
  
            <div>
              <img className="h-auto w-80" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/testimonial/6/avatar-male.png" alt=""/>
              <blockquote className="mt-8 sm:mt-16">
                <p className="text-xl font-normal text-white">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae et ultricies sapien mauris, urna.
                  Arcu justo,
                  tellus in tellus, sed sed venenatis velit. Nisl nam augue elit at viverra euismod vitae.”
                </p>
              </blockquote>
              <p className="mt-6 text-xl font-semibold text-gray-200 sm:mt-10">
                Marvin McKinney
              </p>
              <p className="mt-1 text-base font-normal text-gray-400">
                CEO @ Maavocon
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonial;