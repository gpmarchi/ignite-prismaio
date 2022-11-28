import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura Limpa',
			author_id: '594e83d8-51c2-4a56-8595-dd0ed856f3bf'
    },
  });

  console.log(result);
  
}

main();