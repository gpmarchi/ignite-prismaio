import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: 'Aprendendo Firebase',
			description: 'Aprendendo Firebase do zero',
			courses: {
				create: {
					course: {
						connect: {
							id: 'b69052e1-9e23-4fef-a0f4-bffb3f57ccdc'
						}
					}
				}
			}
    },
  });

  console.log(result);
  
}

main();