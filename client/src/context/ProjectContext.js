import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axiosApi from "../axios/api";
import { getUser } from "../utils/utils";

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const user = getUser();
      console.log("user:" + user.id);
      const res = await axiosApi.get(`project/get/${user.id}`);
      console.log("fetchProjects", res.data);
      setProjects(res.data.projects);
    } catch (err) {
      console.error("Error fetching projects.");
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   fetchProjects();
  // }, [fetchProjects]);

  const addProject = async (project) => {

    try {
      const res = await axiosApi.post("project/", project);
      console.log(res.data);
      
      // fetchProjects();
      
    } catch (err) {
      console.error("Error adding project:" + err.message);
    }
  };

return (
  <ProjectContext.Provider value={{ projects, fetchProjects, addProject }}>
    {children}
  </ProjectContext.Provider>
);
};
