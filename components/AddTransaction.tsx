"use client";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const clientActoin = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      console.log(data);
    }
  };
  return (
    <>
      <h3>Add transaction</h3>
      <form action={clientActoin}>
        <div className="form-control">
          <label htmlFor="text">Transaction Description</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter a  description text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter  amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
