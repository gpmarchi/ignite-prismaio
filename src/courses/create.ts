import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de NodeJS',
      description: 'Curso de NodeJS',
      teacher: {
				connectOrCreate: {
					where: {
						name: "Daniele Leão Evangelista"
					},
					create: {
						name: "Daniele Leão Evangelista"
					},
				},
			},
    },
  });

  console.log(result);
  
}

main();