import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de Java',
      description: 'Curso de Java',
      teacher: {
				create: {
					name: "Professor"
				},
			},
    },
  });

  console.log(result);
  
}

main();