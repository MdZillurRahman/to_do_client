import { useEffect, useState } from "react";
import { format } from "date-fns";

const useTask = (date) => {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(true);

  const formattedDate = format(date, "PP");

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch(
        `https://friendly-bunnyhug-96716.herokuapp.com/task?date=${formattedDate}`
      );
      const res = await fetchData.json();
      setTasks(res);
      setReload(!reload);
    }
    Data();
  }, [formattedDate, reload]);
  
  return [tasks, setTasks];
};

export default useTask;
