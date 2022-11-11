import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
document.title = `${title} - Cleaning-service`;
    },[title])
};

export default useTitle;