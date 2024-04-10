'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context value
export type SearchContextValue = {
  isSearching: boolean;
  setIsSearching: (searching: boolean) => void;
}

// Create context
export const SearchContext = createContext<SearchContextValue | undefined>(undefined);

// Define the type for your provider's props
interface SearchContextProviderProps {
  children: ReactNode;
}

// Provider
export const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  // Initialize the isSearching state with a default value of false
  const [isSearching, setIsSearching] = useState<boolean>(false);

 const contextValue: SearchContextValue = {
    isSearching,
    setIsSearching,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
};

// Create a hook for using the context
export const useSearchContext = (): SearchContextValue | undefined => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};
