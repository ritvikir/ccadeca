import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 pt-40 pb-20 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                  CCA DECA
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  Wednesday Lunch @ Gym Classroom
                </p>
                <p className="mt-1 text-lg leading-8 text-slate-700">
                  Google Classroom Code: d3j3u44
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="https://docs.google.com/forms/u/1/d/e/1FAIpQLScOLfkmFsTZop_cca565deD4huYJtvuWMTzla1VEDlknbZl-w/viewform?vc=0&c=0&w=1&flr=0"
                    className="rounded-md bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                  <a
                    href="#about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            className="object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/IMG_3374.jpeg"
            width={600}
            height={400}
            alt="Descriptive text for the image"
          />
        </div>
      </div>
    </div>
  );
}
