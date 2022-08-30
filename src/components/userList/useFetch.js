import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isGetData, setGetStatus] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data)
      } catch (err) {
        console.log(err)
      }
      setGetStatus(false)
    }
    fetchUsers()
  }, [url, isGetData]);
  
  return [data, setGetStatus];
};

export default useFetch;
