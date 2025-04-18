export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  
  export type FormResponse = {
    success: boolean;
    message?: string;
  };