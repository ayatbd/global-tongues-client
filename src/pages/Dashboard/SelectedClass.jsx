import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";

const SelectedClass = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://summer-camp-server-ten-delta.vercel.app/select?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedClasses(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

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
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "The class deleted successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              const remaining = selectedClasses.filter((c) => c._id !== _id);
              setSelectedClasses(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      {selectedClasses.length !== 0 ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Pictur</th>
              <th>Class Name</th>
              <th>Istructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((c) => (
              <tr key={c._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={c.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{c.className}</td>
                <td>{c.instructorName}</td>
                <td>{c.price}</td>
                <td>
                  <div className="flex gap-1">
                    <Link to="/dashboard/payment">
                      <button className="btn-accent rounded-full px-5 py-2">
                        Pay Now
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="px-5 py-2 rounded-full btn-error p-2"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center mt-5 text-2xl">
          There is no any selected class
        </h2>
      )}
    </div>
  );
};

export default SelectedClass;
