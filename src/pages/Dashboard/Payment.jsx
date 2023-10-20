// import { Elements } from "@stripe/react-stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
        <h3 className="text-center text-3xl">Proceed to Payment</h3>
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
      </div>
      <div className="mt-8 md:mt-20 md:mx-20 p-4 md:py-8 md:px-5 rounded shadow-lg border-t min-h-[200px]">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
