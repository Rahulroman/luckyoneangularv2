export interface PointWallet {
  pointWalletId: number;    // Unique wallet ID
  userId: number;           // Which user owns this wallet
  totalPoints: number;      // All points ever earned
  availablePoints: number;  // Points that can be used
  lockedPoints: number;     // Points in active contests
  updatedAt: string;        // Last update timestamp
}


export interface PointsTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  contestId?: string;
  referenceId?: string;
  createdAt: Date;
}