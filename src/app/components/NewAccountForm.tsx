"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/accountSlice";
import { v4 as uuidv4 } from "uuid";

const NewAccountForm = () => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [initialBalance, setInitialBalance] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      createAccount({
        id: uuidv4(),
        name,
        accountNumber,
        balance: initialBalance,
      })
    );
    setName("");
    setAccountNumber("");
    setInitialBalance(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h3 className="text-xl font-bold mb-4 text-center">New Account</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 "
      />
      <input
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Account Number"
        className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 "
      />
      <input
        value={initialBalance}
        onChange={(e) => setInitialBalance(Number(e.target.value))}
        type="number"
        placeholder="Initial Balance"
        className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 mt-6 w-full"
      >
        Create Account
      </button>
    </form>
  );
};

export default NewAccountForm;
