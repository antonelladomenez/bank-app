import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
}

interface Transaction {
  accountId: string;
  type: 'deposit' | 'withdraw';
  amount: number;
}

interface AccountState {
  accounts: Account[];
  transactions: Transaction[];
}

const initialState: AccountState = {
  accounts: [],
  transactions: [],
};

export const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    createAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
    makeTransaction: (state, action: PayloadAction<Transaction>) => {
      const account = state.accounts.find(acc => acc.id === action.payload.accountId);
      if (account) {
        if (action.payload.type === 'deposit') {
          account.balance += action.payload.amount;
        } else if (action.payload.type === 'withdraw') {
          account.balance -= action.payload.amount;
        }
      }
    },
  },
});

export const { createAccount, makeTransaction } = accountSlice.actions;
export default accountSlice.reducer;
