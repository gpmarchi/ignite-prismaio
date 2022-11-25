import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de React Native',
      description: 'Curso de React Native',
      teacher_id: '643c1acb-996a-4f18-9ace-e6ee4e55f758',
    },
  });

  console.log(result);
  
}

main();