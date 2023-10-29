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
    fetch(
      `https://summer-camp-server-ten-delta.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    fetch(
      `https://summer-camp-server-ten-delta.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
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
    <div className="overflow-x-auto w-full px-7">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center hidden md:block">Avater</th>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Role</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user.email}>
              <td className="hidden md:block">
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
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.email}</td>
              <td>
                <div className="text-center space-y-1">
                  {user.role === "admin" ? (
                    <button className="px-5 py-2 btn-disabled mr-2 rounded-full">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdminMaking(user)}
                      className="px-5 py-2 rounded-full btn-error hover:bg-blue-500 p-2"
                    >
                      Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    <button className="px-5 py-2 btn-disabled rounded-full p-2">
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleInstructorMaking(user)}
                      className="px-5 py-2 rounded-full btn-error hover:bg-blue-500 p-2"
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
  );
};

export default ManageUser;
