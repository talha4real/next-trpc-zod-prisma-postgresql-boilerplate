import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { IUser } from "../lib/types";
import useStore from "../store";
import { trpc } from "../utils/trpc";

type AuthMiddlewareProps = {
  children: React.ReactNode;
  requireAuth?: boolean;
  enableAuth?: boolean;
};

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
  children,
  requireAuth,
  enableAuth,
}) => {
  const store = useStore();
  const queryClient = useQueryClient();
  const query = trpc.refreshAccessToken.useQuery(undefined, {
    enabled: false,
    retry: 1,
    onError(error: any) {
      document.location.href = "/login";
    },
    onSuccess(data: any) {
      queryClient.refetchQueries(["users.me"]);
    },
  });
  const { isLoading } = trpc.getMe.useQuery(undefined, {
    onSuccess: (data) => {
      store.setAuthUser(data.data.user as unknown as IUser);
    },
    retry: 1,
    enabled: !!enableAuth,
    onError(error) {
      if (error.message.includes("must be logged in")) {
        query.refetch({ throwOnError: true });
      } else {
        document.location.href = "/login";
      }
    },
  });

  return <>{children}</>;
};

export default AuthMiddleware;
