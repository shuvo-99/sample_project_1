import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DragonResponse } from "../../types";
import { getDragonList } from "../../services/Service";

const UseGetDragonList = () => {
  const [dragonList, setDragonList] = useState<DragonResponse[]>([]);

  const result = useQuery<DragonResponse[], Error>({
    queryKey: ["dragon-list"],
    queryFn: getDragonList,
  });

  useEffect(() => {
    if (result.data && !result.isError) {
      setDragonList(result.data);
    }
  }, [result.data]);

  return {
    dragonList,
    ...result,
  };
};

export default UseGetDragonList;
