<div className="overflow-x-auto">
  <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
    <div className="w-full lg:w-5/6">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Instructor</th>
              <th className="py-3 px-6 text-left">Class Name</th>
              <th className="py-3 px-6 text-center">Available Seats</th>
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {classes.map((c) => (
              <tr
                key={c._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10">
                          <img src={c.image} />
                        </div>
                      </div>
                    </div>
                    <span className="font-medium">React Project</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{c.instructorName}</td>
                <td className="py-3 px-6 text-center">{c.email}</td>
                <td className="py-3 px-6 text-center">{c.availableSeats}</td>
                <td className="py-3 px-6 text-center">{c.price}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex gap-1 justify-center items-center h-full">
                    <button
                      className={
                        c.status === "approved"
                          ? "px-3 py-2 rounded-full  hover:bg-white p-2 cursor-not-allowed"
                          : "px-3 py-2 rounded-full btn-success hover:bg-blue-500 p-2"
                      }
                      disabled={c.status === "approved"}
                      onClick={() => handleApprove(c)}
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
    </div>
  </div>
</div>;
