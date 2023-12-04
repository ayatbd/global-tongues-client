import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiAdminFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure("/users");
    return res.data;
  });

  // make admin

  const handleAdminMaking = (user) => {
    console.log(user);
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The user is Admin Now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // make instructor

  const handleInstructorMaking = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The user is Instructor Now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="text-gray-900 bg-gray-200 md:w-full">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4">
        <table className="w-full overflow-x-auto text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Avater</th>
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
            </tr>
            {users.map((user) => (
              <tr
                key={user.email}
                className={
                  user.role === "admin"
                    ? "bg-red-200"
                    : "border-b hover:bg-orange-100 bg-gray-100"
                }
              >
                <td className="p-3 px-5">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="avatar">
                      {user.role === "instructor" ? (
                        <div>
                          {user.role === "instructor" ? (
                            <FaChalkboardTeacher size="24" />
                          ) : (
                            <FaChalkboardTeacher size="24" />
                          )}
                        </div>
                      ) : (
                        <div className="mask mask-squircle">
                          {user.role === "admin" ? (
                            <RiAdminFill size="24" />
                          ) : (
                            <p>User</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-3 px-5">{user.name}</td>
                <td className="p-3 px-5">{user.email}</td>
                <td className="p-3 px-5">
                  <div className="text-center space-y-1 space-x-2">
                    {user.role === "admin" ? (
                      <button className="text-sm text-black py-1 px-2 rounded">
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdminMaking(user)}
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Admin
                      </button>
                    )}
                    {user.role === "instructor" ? (
                      <button className="text-sm text-black py-1 px-2 rounded">
                        Instructor
                      </button>
                    ) : (
                      <button
                        onClick={() => handleInstructorMaking(user)}
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Instructor
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
