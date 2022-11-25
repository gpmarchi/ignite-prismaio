import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de React',
      description: 'Curso de React',
      teacher: {
				connect: {
					id: '895419ee-b0e4-4c8f-9af0-0d10b96fc22c',
				},
			},
    },
  });

  console.log(result);
  
}

main();