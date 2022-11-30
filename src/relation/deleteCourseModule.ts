import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
		where: {
			id: 'c9c56850-35f2-4649-9599-9305b57ce47d',
		}
	});

  console.log(result);
  
}

main();