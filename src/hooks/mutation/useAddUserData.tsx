import { useMutation } from "@tanstack/react-query";
import { postUser } from "../../services/Service";

const useAddUser = () => {
  const userCreateMutation = useMutation({
    mutationFn: postUser,
  });

  return { ...userCreateMutation };
};

export default useAddUser;
