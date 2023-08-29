import React from 'react'

const Hero = () => {
  return (
    <>
<section className="bg-pink-900 p-5 lg:p-0 ">
  <div className="flex flex-wrap justify-around lg:p-28">
    <div className="">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#f6d5dc]">
        Payments tool for software companies
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        From checkout to global sales tax compliance, companies around the world
        use Flowbite to simplify their payment stack.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="inline-flex items-center bg-[#f6d5dc] justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Speak to Sales
      </a>
    </div>
    <div className="h-96 w-96 pt-5 md:pt-5 lg:pt-0 " >
      <img
        src="https://img.freepik.com/free-photo/facial-powders-with-nail-polish-leaf-table_23-2148047035.jpg?size=626&ext=jpg&ga=GA1.2.558610342.1683500202&semt=sph"
        alt="mockup"
      />
    </div>
  </div>
</section>

</>

  )
}

export default Hero