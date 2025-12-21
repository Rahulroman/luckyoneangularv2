export interface Contest {
  id: string;
  title: string;
  description: string;
  bannerImage?: string;
  entryPoints: number;
  maxParticipants: number;
  currentParticipants: number;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  winnerId?: number;
  winnerUsername?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;           // Whether contest is active
}

// Represents a user's slot in a contest
export interface ContestSlot {
  slotId: number;          // Unique slot ID
  contestId: number;       // Which contest
  userId: number;          // Which user
  slotNumber: string;      // Slot number like "S001"
  joinedAt: string;        // When user joined
  isWinner: boolean;       // Whether this slot won
}

// Request to create a new contest (Admin only)
export interface CreateContestRequest {
  contestName: string;
  startTime: string;
  endTime: string;
  entryPoints: number;
  totalSlots: number;
  winningPoints: number;
}


export interface ContestParticipant {
  id: string;
  contestId: string;
  userId: string;
  username: string;
  avatar?: string;
  pointsSpent: number;
  joinedAt: Date;
  position?: number;
}

// Request to join a contest
export interface JoinContestRequest {
  contestId: number;      // ID of contest to join
}