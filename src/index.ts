import { Project } from "./models/Project"
import { createConnection } from "typeorm"

async function main() {
  const connection = await createConnection()

  console.log("work")
}

try {
  main()
} catch (error) {
  console.log(error)
}
