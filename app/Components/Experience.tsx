import Image from 'next/image'

export default function Experience() {
    return (
        <div>
            <section className="py-10 md:pt-16 ">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5 dark:text-gray-100">Experience</h1>
                    <div className="mb-8 h-1 bg-gray-700 dark:bg-gray-400"></div>
                    <div className="sm:flex shadow-xl bg-white rounded-lg p-10 dark:bg-gray-800 dark:ring-1 dark:ring-white">
                        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-6 ">
                            <Image
                                className="rounded-full bg-white text-gray-300 ring-1 ring-gray-400 dark:ring-white"
                                src="/isofy.png"
                                alt="logo"
                                height={50}
                                width={50}
                            />
                        </div>
                        <div>
                            <h3 className="text-sm  font-bold tracking-tight text-black pb-1 lg:text-2xl dark:text-white ">Isofy</h3>
                            <h3 className="text-black text-md pb-1 md:text-lg dark:text-white">Software Engineer Intern</h3>
                            <h3 className="text-gray-900 dark:text-gray-500 text-sm pb-3 dark:text-white">Jan. 2021 - Nov. 2021</h3>
                            <h3 className="pr-5 text-gray-900 text-sm flex md:text-md dark:text-white">
                                    Engaged in full-stack development as I learned to develop an interactive corporate website, employing React, SQL, and
                                    Node.JS, with a strong emphasis on UX and UI design, resulting in a 40% improvement in user engagement and website
                                    performance.
                                    <br></br>
                                    <br></br>
                                    Engineered robust back-end software applications in Python and Java to enhance network security management in
                                    co-working spaces and business offices
                                </h3>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}