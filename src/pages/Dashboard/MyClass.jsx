import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

const MyClass = () => {
  const [myClass, setMyClass] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://summer-camp-server-ten-delta.vercel.app/class?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => setMyClass(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-ten-delta.vercel.app/select/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
              const remaining = myClass.filter((c) => c._id !== _id);
              setMyClass(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myClass.map((c) => (
            <tr key={c._id}>
              <td>{c.className}</td>
              <td>{c.availableSeats}</td>
              <td>{c.price}</td>
              <td>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="btn text-red-400 p-2"
                  >
                    <AiFillDelete size={24} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
