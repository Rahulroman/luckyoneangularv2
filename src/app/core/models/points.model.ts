export interface PointWallet {
  pointWalletId: number;    // Unique wallet ID
  userId: number;           // Which user owns this wallet
  totalPoints: number;      // All points ever earned
  availablePoints: number;  // Points that can be used
  lockedPoints: number;     // Points in active contests
  updatedAt: string;        // Last update timestamp
}


export interface PointTransaction {
  transactionId: number;          // Unique transaction ID
  userId: number;                 // Which user
  transactionType: 'Credit' | 'Debit';  // Add or subtract points
  points: number;                 // Amount of points
  transactionFor: string;         // Reason: "ContestJoin", "ContestWin", etc.
  referenceId?: number;           // Optional: ID of contest/related item
  remarks: string;                // Description
  transactionDate: string;        // When transaction occurred
}