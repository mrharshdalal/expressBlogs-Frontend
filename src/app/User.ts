// user.model.ts

export interface User {
    userid?: number;
    fullname: string;
    email: string;
    username: string;
    gender: string;
    logourl: string;
    password: string;
    createdAt?: string; // Assuming the timestamp will be received as a string
  }
  