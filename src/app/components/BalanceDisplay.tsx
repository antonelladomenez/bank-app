'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const BalanceDisplay = () => {
  const accounts = useSelector((state: RootState) => state.accounts.accounts);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-center">Account Balances</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 text-left">Account Name</th>
            <th className="border-b py-2 text-right">Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="border-b py-2 text-gray-800">{account.name}</td>
              <td className="border-b py-2 text-right text-gray-800">${account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceDisplay;
