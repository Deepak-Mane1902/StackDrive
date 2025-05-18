import 'dotenv/config';



//General URL
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000  ";
 
//Backend
 export const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET || "o3b5D5v9pdg7BvBxjtz1qceIOOjWkVK8";
 export const BASE_URL = process.env.BETTER_AUTH_URL || "";

 export const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_hiERrcnc_NeVNgQ9MB6gXZ3kAWyoH443y";
 export const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || "manedeepak1902@gmail.com";

 //Database
 export const MONGODB_URI = process.env.MONGODB_URI  || "mongodb+srv://deepak-mane:WFOuYtdaCQMSOaPO@cluster0.3cw7jnb.mongodb.net/StackDrive?retryWrites=true&w=majority";
  export const MONGODB_DB = process.env.MONGODB_DB || "StackDrive";   
 //Google signIn-signUp
 export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "23631161090-dpcobjvbio0llls7asmn9jtqulrgcu6g.apps.googleusercontent.com";
 export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "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";


  
 //Paddle - for Payment Gateway

 export const NEXT_PUBLIC_PADDLE_CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "test_e0c1d0b71d5c9e0c0fbb51b1169";
 export const PADDLE_API_KEY = process.env.PADDLE_API_KEY || "pdl_sdbx_apikey_01jtpbwb3e3accw9h1c5hp9txx_jqaTe7VaNP1419h3DMkcX5_AW8";
 export const PADDLE_SUBSCRIPTION_WEBHOOK_SECRET_KEY = process.env.PADDLE_SUBSCRIPTION_WEBHOOK_SECRET_KEY || "pdl_ntfset_01jtpfv8yh8d6ksq4jb074dsdz_LWOvTL1pJxmEYmFHYgTxR1kpUEFzv4tY";
 export const PADDLE_PRODUCT_ID = process.env.PADDLE_PRODUCT_ID || "pro_01jtph3bqjgev2yvx1c1e6g5n2";