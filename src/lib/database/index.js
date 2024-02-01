// import { PrismaClient } from "@prisma/client"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const { PrismaClient } = require("@prisma/client")

export const db = new PrismaClient()
export default db