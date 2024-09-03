"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeTransaction } from "../redux/accountSlice";
import { RootState } from "../redux/store";

const TransactionForm = () => {
  const accounts = useSelector((state: RootState) => state.accounts.accounts);
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      makeTransaction({
        accountId,
        type,
        amount,
      })
    );
    setAmount(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h3 className="text-xl font-bold mb-4 text-center">Make a Transaction</h3>

      <select
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Select Account
        </option>
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name} - {account.accountNumber}
          </option>
        ))}
      </select>
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number"
        placeholder="Amount"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "deposit" | "withdraw")}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
      >
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 mt-6 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
