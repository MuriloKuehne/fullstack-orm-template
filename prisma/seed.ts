import { prisma } from "@/prisma"

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "John Doe", email: "john.doe@email.com" },
      { name: "Alice Johnson", email: "alice.johnson@email.com" },
      { name: "Bob Smith", email: "bob.smith@email.com" },
      { name: "Charlie Brown", email: "charlie.brown@email.com" },
      { name: "Diana Evans", email: "diana.evans@email.com" },
      { name: "Edward Miller", email: "edward.miller@email.com" },
      { name: "Fiona Davis", email: "fiona.davis@email.com" },
      { name: "George Wilson", email: "george.wilson@email.com" },
      { name: "Hannah Clark", email: "hannah.clark@email.com" },
      { name: "Ian Lewis", email: "ian.lewis@email.com" },
      { name: "Julia Scott", email: "julia.scott@email.com" },
      { name: "Kevin Moore", email: "kevin.moore@email.com" },
      { name: "Laura Hall", email: "laura.hall@email.com" },
      { name: "Michael Young", email: "michael.young@email.com" },
      { name: "Nina King", email: "nina.king@email.com" },
      { name: "Oscar Wright", email: "oscar.wright@email.com" },
      { name: "Paula Adams", email: "paula.adams@email.com" },
      { name: "Quentin Baker", email: "quentin.baker@email.com" },
      { name: "Rachel Campbell", email: "rachel.campbell@email.com" },
      { name: "Samuel Turner", email: "samuel.turner@email.com" },
      { name: "Tina Morgan", email: "tina.morgan@email.com" },
    ],
  })
}

seed().then(() => {
  console.log("Seeding completed successfully.")
  prisma.$disconnect()
})
