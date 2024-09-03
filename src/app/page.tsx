"use client";
import './styles/globals.css'; 
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NewAccountForm from "./components/NewAccountForm";
import TransactionForm from "./components/TransactionForm";
import BalanceDisplay from "./components/BalanceDisplay";

const Home = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Bank App</h1>
        <div className="space-y-8">
          <NewAccountForm />
          <TransactionForm />
          <BalanceDisplay />
        </div>
      </div>
    </Provider>
  );
};

export default Home;
