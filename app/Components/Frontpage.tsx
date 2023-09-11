
export default function FrontPage() {
    return(
        <section className="py-10 md:py-16 h-screen flex justify-center items-center">
                <div className="container max-w-screen-xl mx-auto px-4 mt-20 ">
                    <div className=" flex flex-col md:flex-row justify-left items-center md:items-start mb-5">
                        <img src="home-image.jpg" className="animate-fade-right animate-ease-linear grayscale shadow-2xl rounded-2xl  md:mr-12 lg:h-23 w-auto " alt="Image" />
                        <div className=" ">
                            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-5">Christopher Nielson</h6>
                            <h1 className="font-normal text-gray-900 text-4xl md:text-5xl leading-none mb-5">Computer Science Student</h1>
                            <p className="font-normal text-gray-600 text-md md:text-xl mb-7">Driven by a deep passion for financial technology and proficient in Python, Java, and C++, my career objective is to secure an internship or career opportunity where I can apply my technical skills and knowledge. With a strong commitment to professional growth, I aim to contribute to the success of an innovative organization in the fintech industry. I am a dedicated and proactive individual, constantly seeking opportunities to expand my expertise and stay at the forefront of industry trends.</p>

                            <ul className="flex space-x-5 sm:mt-0 mb-9">
                                <li>
                                    <a href="https://github.com/chrisjnielson44" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-10  " fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/christopherjnielson/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                                        <svg className="w-auto h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>


                            </ul>
                            <a href="https://chris-n.s3.us-east-2.amazonaws.com/Christopher-Nielson-Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="animate-fade-up animate-ease-linear px-7 py-3 md:px-9 md:py-4 bg-white w-full font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500 shadow-xl">Get my Resume</button>
                            </a>
                        </div>
                    </div>


                </div>
            </section>
    )
}