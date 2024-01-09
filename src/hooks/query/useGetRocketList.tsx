import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RocketResponse } from "../../types";
import { getRocketList } from "../../services/Service";

const UseGetRocketList = () => {
  const [rocketList, setRocketList] = useState<RocketResponse[]>([]);

  const result = useQuery<RocketResponse[], Error>({
    queryKey: ["rocket-list"],
    queryFn: getRocketList,
  });

  useEffect(() => {
    if (result.data && !result.isError) {
      setRocketList(result.data);
    }
  }, [result.data]);

  return {
    rocketList,
    ...result,
  };
};

export default UseGetRocketList;
