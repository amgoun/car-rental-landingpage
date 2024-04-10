'use client'
import { SearchContext, SearchContextValue } from '../context/search'
import { useContext } from 'react';
import { HoursSelection, DateSelection, LocationSelection  } from '.';
import SearchBtn from './element/SearchBtn'


  
function Serach() {
    const { isSearching } = useContext(SearchContext) as SearchContextValue;
  return (
    <div className= { `${ 
      isSearching 
        ? 'bg-white rounded-none xl:h-[80px]' 
        : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
      } hidden xl:block w-full relative shadow-lg`}
        >
          {/* xl:h-full flex items-center px-6 xl:px-0 */}
         <div className= {`xl:h-full flex items-center ${isSearching && 'container mx-auto'}`}>
           <LocationSelection/>
           <DateSelection/>
           <HoursSelection/>
           <SearchBtn/>
          </div>
    </div>
  )
}

export default Serach