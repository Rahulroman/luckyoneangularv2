export interface User {
 userId: number;           // Unique identifier
  username: string;         // Login username
  email: string;            // User email
  fullName: string;         // Display name
  phoneNumber?: string;     // Optional phone number
  role : 'Admin' | 'User';   // User role (only two possible values)
  createdAt: string;        // When user was created (ISO date string)
  isActive: boolean;        // Whether user account is active
  updatedAt: string;        // When user was last updated (ISO date string)
  points: number;          // User points for gamification
  avatar?: string;     // Optional URL to user's avatar image
}

export interface AuthUser extends User {
  token: string;            // JWT token for API authentication
}

export interface LoginRequest {
  username: string;         // Username from login form
  password: string;         // Password from login form
}

export interface RegisterRequest {
  username: string;         // Desired username
  email: string;            // User email
  password: string;         // Desired password
  fullName: string;         // Full name
  phoneNumber: string;      // Phone number
}

// Response after successful authentication
export interface AuthResponse {
  user : User
  token: string;            // JWT token
}