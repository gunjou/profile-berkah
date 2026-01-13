import { createContext, useContext, useState } from "react";

const ProjectFilterContext = createContext();

export const ProjectFilterProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <ProjectFilterContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      {children}
    </ProjectFilterContext.Provider>
  );
};

export const useProjectFilter = () => useContext(ProjectFilterContext);
