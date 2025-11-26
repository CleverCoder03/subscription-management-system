import {config} from "dotenv"

config({path: `.env.${process.NODE_ENV || "development"}.local`})

export const {PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env