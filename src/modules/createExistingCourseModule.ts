import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course_id: 'b69052e1-9e23-4fef-a0f4-bffb3f57ccdc',
			module_id: 'f92588e1-476b-410e-9cfa-803ba7aa419a',
    },
  });

  console.log(result);
  
}

main();