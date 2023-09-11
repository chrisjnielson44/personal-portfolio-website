export default function Experience() {
    return(
        <div>
            <section className="py-10 md:py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                </div>
            </section>

            <section className="h-full py-5 md:py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5 ">Experience</h1>
                    <div className="mb-8 h-1 bg-gray-700"></div>
                    <div className="grid gap-8 mb-6  md:grid-rows-2 flex">
                        <div className="items-center bg-gray-50 rounded-lg shadow-xl flex  ">
                            <a href="#">
                                <img height="80px" width="80px" className=" flex my-10 mx-5 rounded-full" src="isofy.png" alt="logo" />
                            </a>
                            <div className="p-10">
                                <h3 className="text-sm lg:text-2xl font-bold tracking-tight text-black pb-1">Isofy</h3>
                                <h3 className="text-black text-lg pb-1 ">Software Engineer Intern</h3>
                                <h3 className="text-gray-900 dark:text-gray-500 text-sm pb-1 ">Jan. 2021 - Nov. 2021</h3>
                                <h3 className="pr-5 text-gray-900 dark:text-gray-800 text-md flex "> Participated in Full Stack Development as I learned to develop a corporate website (HTML, C#, JavaScript, and SQL) focusing on UX and UI design. Built back-end applications (Python and Java) for network security utilized in co-working spaces</h3>

                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 py-5 flex items-bottom justify-bottom">
                    </div>
                </div>
            </section>
        </div>    
    )
}