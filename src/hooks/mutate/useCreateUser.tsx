import { useMutation, MutationFunction } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { UserRequest } from "../../types";
import { createUser } from "../../services/Service";
import { useState } from "react";

const useCreateUser = () => {
  const [userId, setUserId] = useState("");

  const { mutate, error, isSuccess, isError } = useMutation({
    mutationFn: createUser,
    onSettled: (data, error) => {
      if (error) {
        console.log("Failed to create user", error);
      } else {
        console.log("User Created successfully");
      }
    },
  });

  return {
    userId,
    createUser: mutate,
    userCreationError: error,
    isUserCreationError: isError,
    isUserCreationSuccess: isSuccess,
  };
};

export default useCreateUser;
