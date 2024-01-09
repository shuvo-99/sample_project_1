import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MissionResponse } from "../../types";
import { getMissionList } from "../../services/Service";

const UseGetMissionList = () => {
  const [missionList, setMissionList] = useState<MissionResponse[]>([]);

  const result = useQuery<MissionResponse[], Error>({
    queryKey: ["mission-list"],
    queryFn: getMissionList,
  });

  useEffect(() => {
    if (result.data && !result.isError) {
      setMissionList(result.data);
    }
  }, [result.data]);

  return {
    missionList,
    ...result,
  };
};

export default UseGetMissionList;
