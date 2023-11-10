import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loader from "../Shared/Loader";

const ManageClass = () => {
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/class`)
      .then((response) => response.json())
      .then((data) => {
        setClassData(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/class/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
              const remaining = classData.filter((c) => c._id !== id);
              setClassData(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  const handleApprove = (id) => {
    Swal.fire("Approved!", "Your class has been approved.", "success");
    const updatedClassData = classData.map((c) => {
      if (c._id === id) {
        return { ...c, status: "approved" };
      }
      return c;
    });
    setClassData(updatedClassData);
  };

  return (
    <div className="overflow-x-auto w-full px-7">
      <table className="table">
        <thead>
          <tr>
            <th className="hidden md:block">Pictur</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((c) => (
            <tr className="" key={c._id}>
              <td className="hidden md:inline">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={c.image} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{c.className}</td>
              <td>{c.instructorName}</td>
              <td>{c.email}</td>
              <td>{c.availableSeats}</td>
              <td>{c.price}</td>
              <td>
                <div className="flex gap-1 justify-center items-center h-full">
                  <button
                    className="px-3 py-2 rounded-full btn-success hover:bg-blue-500 p-2"
                    disabled={c.status === "approved"}
                    onClick={() => handleApprove(c._id)}
                  >
                    {c.status === "approved" ? "Approved" : "Approve"}
                  </button>
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="px-3 py-2 rounded-full btn-error hover:bg-blue-500 p-2"
                  >
                    Deny
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="px-3 py-2 rounded-full btn-info hover:bg-blue-500 p-2"
                  >
                    Feedback
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <div>
                        <textarea
                          className="textarea w-full"
                          placeholder="Write a feedback"
                        ></textarea>
                        <div className="modal-action justify-start">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-accent">Send</button>
                          </form>
                        </div>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
