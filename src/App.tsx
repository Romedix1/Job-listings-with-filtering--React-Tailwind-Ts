import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Offer from './Components/Offer'

//Array of  Active filters types
interface ActiveFiltersTypes {
  id: React.Key;
  text: string;
}

function App() {
  //Array of  Active filters
  const [activeFilters, setActiveFilters] = React.useState<ActiveFiltersTypes[] >([]);

  return (
    <main>

      <Nav activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
      
      <section className={`flex flex-wrap justify-center items-start bg-LightGrayishCyanFil min-h-[600px] md:min-h-full  auto-columns-auto ${activeFilters.length>0 ? "pt-0 -mt-2 md:pb-[45vw] lg:pb-[35vw] xl:pb-[30vw]" : "pt-12"}`}>
        <Offer setActiveFilters={setActiveFilters} activeFilters={activeFilters} />
      </section>

    </main>
  );
}

export default App;
