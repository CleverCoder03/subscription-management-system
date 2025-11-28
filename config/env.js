import {config} from "dotenv"

config({path: `.env.${process.NODE_ENV || "development"}.local`})

export const {PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, QSTASH_URL, QSTASH_TOKEN, SERVER_URL, EMAIL_PASSWORD } = process.env


// Start the development server for upstash and express both
// npm run dev
// curl -X POST http://127.0.0.1:8080/v2/publish/https://example.com -H "Authorization: Bearer eyJVc2VySUQiOiJkZWZhdWx0VXNlciIsIlBhc3N3b3JkIjoiZGVmYXVsdFBhc3N3b3JkIn0="