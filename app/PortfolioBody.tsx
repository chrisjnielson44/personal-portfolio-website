
import Link from 'next/link'
export default function Body() {
    return(
        <main className='bg-gray-100 '>
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


            <section className="py-10 md:py-16 h-screen flex justify-center items-center snap-center">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5">Projects</h1>
                    <div className="mb-8 h-1 bg-gray-700"></div>


                    <p className="font-normal text-gray-500 text-xs md:text-base mb-10"></p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        <div className="bg-gray-50 px-8 py-8 rounded-lg drop-shadow-xl">
                            <img className="rounded-full border-2 shadow-lg" src="edit.png" alt="logo" height="70px" width="70px"></img>
                            <h4 className="font-bold text-gray-700 text-lg mt-5 mb-2">Personal Finance App</h4>
                            <h3 className="font-medium text-gray-700 text-sm mb-5">Coming Soon</h3>
                            <ul className="pt-6 flex space-x-5">
                                <li>
                                    <a href="https://www.internationalfansmedia.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" /></svg>                </a>
                                </li>
                                <li>
                                    <a href="https://github.com/chrisjnielson44/internationalfanmedia-website" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-8 py-8 rounded-lg drop-shadow-xl">
                            <a href="https://www.internationalfansmedia.com" target="_blank" rel="noopener noreferrer">
                                <img className="rounded-full p-2 border-2 shadow-lg" src="RMLogo.png" alt="logo" height="70px" width="70px"></img>
                            </a>
                            <a href="https://www.internationalfansmedia.com" target="_blank" rel="noopener noreferrer">
                                <h4 className="font-bold text-gray-700 text-lg mt-5 mb-2 hover:underline underline-offset-4">International Fan Media</h4>
                            </a>
                            <h3 className="font-medium text-gray-700 text-sm mb-5">Developing a dynamic, responsive multi-page website for an emerging Sports Media Company. The platform not only offers an immersive experience for Spanish soccer enthusiasts but also showcases the latest news, articles, and media in an intuitive layout.</h3>
                            <p className="text-gray-700 text-sm mb-5">
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg ">
                                    Next.js
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg ">
                                    TypeScript
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg">
                                    TailwindCSS
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg">
                                    Node.js
                                </span>
                            </p>
                            <ul className="pt-6 flex space-x-5">
                                <li>
                                    <a href="https://www.internationalfansmedia.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" /></svg>                </a>
                                </li>
                                <li>
                                    <a href="https://github.com/chrisjnielson44/internationalfanmedia-website" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-8 py-8 rounded-lg drop-shadow-xl">
                            <a href="https://cjnielson.com" target="_blank" rel="noopener noreferrer" className="">
                                <img className="border-2 rounded-full grayscale shadow-lg" src="smallprof.png" alt="logo" height="70px" width="70px"></img>
                            </a>
                            <a href="https://cjnielson.com" target="_blank" rel="noopener noreferrer" className="">
                                <h4 className="font-bold text-gray-700 text-lg mt-5 mb-2 hover:underline underline-offset-4">Personal Porfolio Website</h4>
                            </a>
                            <h3 className="font-medium text-gray-700 text-sm mb-5">
                                I have created a static personal portfolio website using Next.js. This site showcases my skills, projects, and achievements with a clean and user-friendly design. It is optimized for performance and provides a professional online presence to highlight my talents and accomplishments.</h3>
                            <p className="text-gray-700 text-sm mb-5">
                                <span className="bg-gray-200 text-gray-700 px-2 py-1  rounded-lg">
                                    Next.js
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg">
                                    TypeScript
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg">
                                    TailwindCSS
                                </span>
                            </p>

                            <ul className="pt-6 flex space-x-5">
                                <li>
                                    <a href="https://cjnielson.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" /></svg>                </a>
                                </li>
                                <li>
                                    <a href="https://github.com/chrisjnielson44/personal-portfolio-website" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-8 py-8 rounded-lg drop-shadow-xl">
                            <a href="https://github.com/chrisjnielson44/AI-Chatbot" target="_blank" rel="noopener noreferrer" className="">
                                <img className="p-3 rounded-full  shadow-lg border-2" src="chatgpt.png" alt="logo" height="70px" width="70px"></img>
                            </a>
                            <a href="https://github.com/chrisjnielson44/AI-Chatbot" target="_blank" rel="noopener noreferrer" className="">
                                <h4 className="font-bold text-gray-700 text-lg mt-5 mb-2 hover:underline underline-offset-4">AI Chatbot</h4>
                            </a>
                            <h3 className="font-medium text-gray-700 text-sm mb-5">AI chatbot developed using Python and OpenAI&apos;s GPT-3.5 architecture. The chatbot is designed to remember conversations with the user and learn from them, allowing for more personalized and natural interactions.</h3>
                            <p className="text-gray-700 text-sm mb-5">
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
                                    Python
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 mx-1 rounded-lg">
                                    Node.js
                                </span>
                            </p>

                            <ul className="pt-6 flex space-x-5">
                                <li>
                                    <a href="https://github.com/chrisjnielson44/AI-Chatbot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-8 py-8 rounded-lg drop-shadow-xl">
                            <a href="https://github.com/chrisjnielson44/weather-bot" target="_blank" rel="noopener noreferrer" className="">
                                <img className="p-3 rounded-full  shadow-lg border-2 " src="weatherbot.png" alt="logo" height="70px" width="70px"></img>
                            </a>
                            <a href="https://github.com/chrisjnielson44/weather-bot" target="_blank" rel="noopener noreferrer" className="">
                                <h4 className="font-bold text-gray-700 text-lg mt-5 mb-2 hover:underline underline-offset-4">Weather Bot</h4>
                            </a>
                            <h3 className="font-medium text-gray-700 text-sm mb-5">This is a weather bot project that utilizes weatherAPI.com for real-time updates on current weather and daily forecast. The project is written in Python and includes Twitter functionality and SMS functionality for users to receive updates on the weather.</h3>
                            <p className="text-gray-700 text-sm mb-5">
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
                                    Python
                                </span>
                            </p>

                            <ul className="pt-6 flex space-x-5">
                                <li>
                                    <a href="https://github.com/chrisjnielson44/weather-bot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-8 py-8 rounded-lg drop-shadow-xl">
                            <a href="https://github.com/chrisjnielson44/wordOfTheDay-bot" target="_blank" rel="noopener noreferrer" className="">
                                <img className="rounded-full  shadow-lg border-2 p-2" src="wordoftheday.png" alt="logo" height="70px" width="70px"></img>
                            </a>
                            <a href="https://github.com/chrisjnielson44/wordOfTheDay-bot" target="_blank" rel="noopener noreferrer" className="">
                                <h4 className="font-bold text-gray-700 text-lg mt-5 mb-2 hover:underline underline-offset-4">Word of The Day</h4>
                            </a>
                            <h3 className="font-medium text-gray-700 text-sm mb-5">The Word of the Day Bot is a Python-based project that delivers a daily dose of vocabulary enrichment through SMS. This bot sends subscribers a new word along with its definition every day, helping users expand their vocabulary effortlessly. It is a simple yet effective tool designed to promote continuous learning and improve language skills.</h3>
                            <p className="text-gray-700 text-sm pt-2">
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
                                    Python
                                </span>
                            </p>

                            <ul className="pt-6 flex space-x-5">
                                <li>
                                    <a href="https://github.com/chrisjnielson44/wordOfTheDay-bot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='flex justify-center mt-4'>
                        <Link href="https://github.com/chrisjnielson44?tab=repositories" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-400 bg-white text-gray-500 w-screen text-center text-lg py-2 rounded-full mt-4 hover:bg-slate-900 hover:text-white transition duration-300 ease-in-out">View More on Github </Link>
                    </div>


                </div>

            </section>

            <section className="py-10 md:py-16 h-screen flex justify-center items-center">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-bold text-gray-600  text-3xl md:text-4xl mb-5">Education</h1>
                    <div className="mb-8 h-1 bg-gray-700"></div>

                    <div className="grid gap-8 mb-6  md:grid-rows-1 flex">
                        <div className="items-center bg-gray-50 rounded-lg shadow-xl flex  ">
                            <a href="#">
                                <img height="80px" width="80px" className=" flex m-10 rounded-lg sm:rounded-none sm:rounded-l-lg" src="logo.png" alt="logo" />
                            </a>

                            <div className="p-5">
                                <h3 className="text-sm lg:text-2xl font-bold tracking-tight text-black pb-1">
                                    Florida State University
                                </h3>
                                <h3 className="text-gray-900 dark:text-gray-500 text-md pb-2">2021 - 2024</h3>
                                <span className="text-gray-900 dark:text-gray-800 text-xl ">Computer Science B.S., Minor in Business & Mathematics</span>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow-xl flex  ">
                            <a href="#">
                                <img height="80px" width="80px" className=" flex m-10 rounded-lg sm:rounded-none sm:rounded-l-lg" src="fsuip.png" alt="logo" />
                            </a>

                            <div className="p-5">
                                <h3 className="text-sm lg:text-2xl font-bold tracking-tight text-black pb-1"> FSU International Program Study Abroad </h3>
                                <h3 className="text-gray-900 dark:text-gray-500 text-md pb-1 ">Summer of 2022</h3>
                                <h3 className="pr-5 text-gray-900 dark:text-gray-800 text-md flex ">Completed international business and marketing courses and became more fluent in Spanish during a semester abroad in Valecnia, Spain</h3>

                            </div>
                        </div>
                        
                    </div>
                    

                    <h2 className="font-medium text-gray-700 text-1xl md:text-2xl mt-12 mb-5 ml-1">Notable Course Work</h2>
                    <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 text-center">
                        <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl">
                            <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4">Data Structures and Algorithims </h4>
                        </div>
                        <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl">
                            <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4">Object Oriented Programming in C++ </h4>
                        </div>
                        <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl">
                            <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4">Advanced Programming with Java </h4>
                        </div>
                        <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl">
                            <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4">Operating Systems</h4>
                        </div>
                        <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl">
                            <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4">Theory of Computation</h4>
                        </div>
                        <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl">
                            <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4">Advanced Python</h4>
                        </div>
                    </div>
                    <h2 className="font-medium text-gray-700 text-1xl md:text-2xl mt-12 mb-5 ml-1">Extracurriculars</h2>
                
                    <h2 className="font-medium text-gray-700 text-1xl md:text-2xl mt-12 mb-5 ml-1">Research</h2>


                </div>
            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">


                </div>

            </section>
            <section className="h-full py-5 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5 ">Experience</h1>
                    <div className="mb-8 h-1 bg-gray-700"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-20">
                        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                            <h6 className="font-medium text-gray-400 text-base uppercase">Company</h6>
                            <p className=" font-semibold text-gray-600 text-base">Isofy <span className="font-normal text-gray-300">/ Naples, FL</span></p>


                        </div>

                        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                            <h6 className="font-medium text-gray-400 text-base uppercase">Position</h6>

                            <p className="font-normal text-gray-400 text-base">Software Engineer Intern</p>


                        </div>

                        <div className="space-y-8 md:space-y-16">
                            <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>

                            <p className="font-normal text-gray-400 text-base">2020-2021</p>


                        </div>
                    </div>
                    <div className="bg-gray-100 py-5 flex items-bottom justify-bottom">


                    </div>
                </div>

            </section>
            <footer className="p-4 mt-10 sm:p-6 ">
                <div className="mx-auto max-w-screen-xl">
                        
                    <hr className="my-6 border-gray-300 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> Christopher Nielson </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="https://github.com/chrisjnielson44" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  " fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/christopherjnielson/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
        </footer>

        </main>

        
    )
}

