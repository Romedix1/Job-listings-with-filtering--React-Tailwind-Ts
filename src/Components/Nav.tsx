import React from "react";

export default function Nav(props: any) {

    // Clear active filters array
    function clearFilters() {
        props.setActiveFilters([])
    }

    // Remove single filter
    function removeFilter(elementId: string) {
        props.setActiveFilters((oldFilters: []) => oldFilters.filter((filter: { id: string; }) => filter.id !== elementId))
    }

    return (
        <nav className="bg-LightGrayishCyanFil w-screen h-fit grid justify-items-center">
            <div className="bg-DesaturatedDarkCyan">
                <img src="./images/bg-header-mobile.svg" className="w-screen md:hidden" />
                <img src="./images/bg-header-desktop.svg" className="w-screen hidden md:block" />
            </div>
            
            {props.activeFilters.length > 0 && 
                <section className="bg-white w-10/12 h-fit rounded-lg flex justify-between px-4 py-2 relative -top-12 xl:w-8/12">
                    <ul className="flex flex-wrap">
                        {props.activeFilters.map((filter: {id:string, text:string}) => {
                            return (
                                <li key={filter.id} onClick={() => removeFilter(filter.id)} className="flex items-center mx-2 my-2 text-DesaturatedDarkCyan bg-cyan-100/50 font-bold pl-2 rounded-sm">{filter.text}
                                    <div className="bg-DesaturatedDarkCyan hover:bg-VeryDarkGrayishCyan h-full w-full flex justify-center items-center px-1 ml-2 rounded-r-sm cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#fff" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    
                    <div className="w-2/12 grid place-items-center">
                        <h3 onClick={() => clearFilters()} className="font-bold text-DarkGrayishCyan  cursor-pointer hover:text-DesaturatedDarkCyan hover:underline">Clear</h3>
                    </div>
                </section>}
        </nav>
    )
}