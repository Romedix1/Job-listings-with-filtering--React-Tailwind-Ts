import React from "react";
import offersData from './data.json'
import { nanoid } from 'nanoid'

interface JobsTypes {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}

export default function Offer(props: any) {
    // Array of jobs to display
    const [jobs, setJobs] = React.useState<JobsTypes []>([])

    // Set jobs on load
    React.useEffect(() => {
        setJobs(offersData)
    },[])

    // Update jobs function
    const updateJobs = () => {
        if(props.activeFilters.length > 0) {
            const filteredJobs  = offersData.filter((filter: any) => {
    
                return props.activeFilters.every((item: any) => {
                    return(
                        filter.role === item.text || filter.level === item.text || filter.tools.includes(item.text) || filter.languages.includes(item.text)
                    )
                }) 
                })
                
            setJobs(filteredJobs)
        } else {
            setJobs(offersData)
        }
    }
    
    // Display jobs on active filters update
    React.useEffect(() => {
        updateJobs()
    },[props.activeFilters])



    const offerBlock = jobs.map((item: JobsTypes) => {
        const {
            id,
            company,
            featured,
            logo,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools
        } = item


        // Add filter to array of active filters
        function updateFilters(filter: string) {

            const isFound = props.activeFilters.some((element: { text: string; }) => {
                return element.text == filter
            })

            if(!isFound)
            {
                const newItem = {
                    id: nanoid(),
                    text: filter,
                }

                props.setActiveFilters((prevList: []) => [...prevList, newItem])
            }
    }

        return (
            <article key={id} className="relative w-10/12 bg-white my-6 rounded-md pb-4 xl:w-8/12">
                <div className="md:flex md:items-center md:justify-between">
                    {featured && <div className="absolute w-1.5 h-full bg-DesaturatedDarkCyan rounded-l-md top-0"></div>}

                    <div className="grid justify-items-start ml-6 w-11/12 lg:w-6/12 md:flex md:items-center">
                        <img src={logo} alt="company logo" className="w-14 md:w-20 absolute -top-6 left-5 md:relative md:mt-4 md:top-0 md:left-0" />
                        
                        <div className=" md:ml-6">
                            <div className="flex mt-12 items-center md:mt-4">
                                <h1 className="font-bold text-DesaturatedDarkCyan">{company}</h1>

                                {item.new && <p className="uppercase ml-5 md:ml-4 px-2.5 pt-[.2em] rounded-xl bg-DesaturatedDarkCyan text-white text-sm">New!</p>}
                                {featured && <p className="uppercase ml-2 px-2.5 pt-[.2em] rounded-xl bg-VeryDarkGrayishCyan text-white text-sm">Featured</p>}
                            </div>

                            <h2 className="mt-3 font-bold  hover:text-DesaturatedDarkCyan cursor-pointer duration-300">{position}</h2>          

                            <ul className="flex items-center">
                                <li className="text-DarkGrayishCyan"> {postedAt}</li>
                                <span className="w-1.5 mx-2 h-1.5 mb-1 rounded-full bg-DarkGrayishCyan block"></span>
                                <li className="text-DarkGrayishCyan">{contract}</li>
                                <span className="w-1.5 mx-2 h-1.5 mb-1 rounded-full bg-DarkGrayishCyan block"></span>
                                <li className="text-DarkGrayishCyan">{location}</li>
                            </ul>    
                        </div>
                    </div> 

                    <div className="grid place-items-center md:hidden">
                        <hr className=" w-11/12"/>
                    </div>
                   
                   <div className="grid justify-items-center">
                        <div className="flex flex-wrap mt-3 md:mt-6 w-11/12 md:w-full md:justify-end md:mr-6">
                            <p onClick={() => updateFilters(role)} className="w-fit mr-2.5 pt-1 mb-2.5 rounded-sm px-3 py-[0.15em] text-DesaturatedDarkCyan bg-cyan-100/50 font-bold hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer duration-300 md:text-md ">{role}</p>
                            <p onClick={() => updateFilters(level)} className="w-fit mr-2.5 pt-1 mb-2.5 rounded-sm px-3 py-[0.15em] text-DesaturatedDarkCyan bg-cyan-100/50 font-bold hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer duration-300 md:text-md ">{level}</p>
                            {languages.map((language: string, index: number) => {
                                return (
                                    <p key={index} onClick={() => updateFilters(language)} className="w-fit mr-2.5 pt-1 mb-2.5 rounded-sm px-3 py-[0.15em] text-DesaturatedDarkCyan bg-cyan-100/50 font-bold hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer duration-300 md:text-md">{language}</p>
                                )
                            })}
                            
                            {tools.map((tool: string, index:number) => {
                                return (
                                    <p key={index} onClick={() => updateFilters(tool)} className="w-fit mr-2.5 pt-1 mb-2.5 rounded-sm px-3 py-[0.15em] text-DesaturatedDarkCyan bg-cyan-100/50 font-bold hover:bg-DesaturatedDarkCyan hover:text-white cursor-pointer duration-300 md:text-md ">{tool}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </article>
        )
    })

    return (
      <>
        {offerBlock}
      </>
    )
}