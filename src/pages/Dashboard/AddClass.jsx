import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const img_host_token = "84874cf1ae546184fca4429583223a4e";

const AddClass = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Show the spinner

    try {
      const formData = new FormData();
      formData.append("image", data.classImage[0]);

      const res = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      const imgRes = await res.json();

      if (imgRes.success) {
        const imgURL = imgRes.data.display_url;
        console.log(data, imgURL);
        const {
          availableSeats,
          className,
          instructorEmail,
          instructorName,
          price,
        } = data;
        const newClass = {
          availableSeats: parseFloat(availableSeats),
          className,
          email: instructorEmail,
          instructorName,
          price: price,
          image: imgURL,
        };
        console.log(newClass);

        const response = await axiosSecure.post("/class", newClass);
        console.log("after posting new class item", response.data);

        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false); // Hide the spinner
  };

  return (
    <div className="bg-white md:w-2/5 shadow-md rounded px-8 py-4 my-16 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Class name:
          </label>
          <select
            {...register("className", { required: true })}
            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          >
            <option disabled selected>
              Select Category
            </option>
            <option>English</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
            <option>Japanese</option>
            <option>Korean</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="classImage"
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Instructor Photo:
          </label>
          <input
            type="file"
            {...register("classImage", { required: true })}
            id="classImage"
            accept="image/*"
            required
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Instructor name:
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true })}
            id="instructorName"
            value={user?.displayName}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Instructor email:
          </label>
          <input
            type="email"
            {...register("instructorEmail", { required: true })}
            id="instructorEmail"
            value={user?.email}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Available seats:
          </label>
          <input
            type="number"
            {...register("availableSeats", { required: true })}
            id="availableSeats"
            required
            placeholder="Available Seats"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Price:
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            id="price"
            step="0.01"
            required
            placeholder="$100.00"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />
        </div>
        <div className="mb-4">
          <input type="hidden" id="status" name="status" value="pending" />
        </div>
        <div className="mb-4 text-center">
          {isSubmitting ? (
            <button className="px-4 py-2 rounded-md">
              <span className="loading loading-spinner loading-xs"></span>
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2.5 relative rounded group font-medium text-white inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "ADD"
                )}
              </span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddClass;
