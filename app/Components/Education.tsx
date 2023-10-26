
export default function Education() {
    return (
        <div className="flex justify-center items-center md:h-screen">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h1 className="font-bold text-gray-600  text-3xl md:text-4xl mb-5 dark:text-gray-100">Education</h1>
                <div className="mb-8 h-1 bg-gray-700 dark:bg-gray-400"></div>
                <div className="grid gap-8 mb-6  md:grid-rows-2 flex">
                    <div className="items-center bg-gray-50 rounded-lg shadow-xl flex dark:bg-gray-800 dark:ring-1 dark:ring-white">
                    <div className="mr-4 flex-shrink-0 self-center">
                            <img height="80px" width="80px" className=" m-10 rounded-lg" src="logo.png" alt="logo" />
                    </div>
                        <div className="p-5">
                            <h3 className="text-md lg:text-2xl font-bold tracking-tight text-black pb-1 dark:text-white">
                                Florida State University
                            </h3>
                            <h3 className="text-gray-900 dark:text-gray-500 text-md pb-2 dark:text-white">Aug. 2021 - Dec. 2024</h3>
                            <span className="text-gray-900 dark:text-gray-800 text-lg flex dark:text-white">Computer Science B.S., Minor in Business & Mathematics</span>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow-xl flex dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <div className="mr-4 flex-shrink-0 self-center">
                            <img height="80px" width="80px" className=" flex m-8 rounded-full" src="fsuip.png" alt="logo" />
                        </div>
                        <div className="p-5 pl-9">
                            <h3 className="text-md lg:text-2xl font-bold tracking-tight text-black pb-1 dark:text-white"> FSU International Program Study Abroad </h3>
                            <h3 className="text-gray-900 dark:text-gray-500 text-md pb-1 dark:text-white ">Summer of 2022</h3>
                            <h3 className="pr-5 text-gray-900 dark:text-gray-800 text-lg flex dark:text-white">Completed international business and marketing courses and became more fluent in Spanish during a semester abroad in Valecnia, Spain</h3>

                        </div>
                    </div>
                </div>
                <h2 className="font-medium text-gray-700 text-xl md:text-3xl mt-12 mb-5 ml-1 dark:text-gray-100">Notable Course Work</h2>
                <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 text-center">
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4 dark:text-white">Data Structures and Algorithims </h4>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4 dark:text-white">Object Oriented Programming in C++ </h4>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4 dark:text-white">Advanced Programming with Java </h4>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4 dark:text-white">Operating Systems</h4>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4 dark:text-white">Theory of Computation</h4>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <h4 className="font-medium text-black items-center justify-center text-xl mt-5 mb-4 dark:text-white">Advanced Python</h4>
                    </div>
                </div>
                <h2 className="font-medium text-gray-700 text-xl md:text-3xl mt-12 mb-5 ml-1 dark:text-gray-100">Extracurriculars</h2>
                <div className="grid gap-x-4 gap-y-8 md:grid-cols-4 text-left">
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <a href="#">
                            <img height="50px" width="50px" className="shadow-sm flex my-3 mx-5 rounded-full" src="spearDAO.png" alt="logo" />
                        </a>
                        <h3 className="mx-5 text-sm lg:text-lg font-bold tracking-tight text-black pb-1 dark:text-white">Cryptocurrency Organization for Young Professionals (COYP)</h3>
                        <h3 className="mx-5 mb-2 text-gray-900 dark:text-gray-500 text-md pb-2 dark:text-white">Vice President 2022-2023</h3>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white" >
                        <a href="#">
                            <img height="50px" width="50px" className="shadow-sm pb-2 flex my-3 mx-5 rounded-full " src="fma.webp" alt="logo" />
                        </a>
                        <h3 className="mx-5 text-sm lg:text-lg font-bold tracking-tight text-black pb-1 dark:text-white">Financial Management Association (FMA)</h3>
                        <h3 className="mx-5 mb-2 text-gray-900 dark:text-gray-500 text-md pb-2 dark:text-white">Member - Present</h3>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <a href="#">
                            <img height="50px" width="50px" className="shadow-sm flex my-3 mx-5 rounded-full" src="acm.png" alt="logo" />
                        </a>
                        <h3 className="mx-5 text-sm lg:text-lg font-bold tracking-tight text-black pb-1 dark:text-white">Association for Computing Machinery (ACM)</h3>
                        <h3 className="mx-5 mb-2 text-gray-900 dark:text-gray-500 text-md pb-2 dark:text-white">Member - Present</h3>
                    </div>
                    <div className="bg-gray-50 px-2 py-2 rounded-md drop-shadow-xl dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <a href="#">
                            <img height="50px" width="50px" className="shadow-sm flex my-3 mx-5 rounded-full " src="SCC.jpeg" alt="logo" />
                        </a>
                        <h3 className="mx-5 text-sm lg:text-lg font-bold tracking-tight text-black pb-1 dark:text-white">Securities Society</h3>
                        <h3 className="mx-5 mb-2 text-gray-900 dark:text-gray-500 text-md pb-2 dark:text-white">Member - Present</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}