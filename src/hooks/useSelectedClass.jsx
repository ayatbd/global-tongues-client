import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading,
    data: student = {},
    refetch,
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/select?email=${user?.email}`);
      return res?.data;
    },
  });
  const selectedClasses = student.selectedClasses || [];
  return [selectedClasses, refetch, isLoading];
};

export default useSelectedClass;
