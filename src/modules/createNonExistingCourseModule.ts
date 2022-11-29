import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
			course: {
				create: {
					duration: 200,
					name: 'Curso de React',
          description: 'Curso completo de React',
          teacher_id: '41ba0f8c-77f2-49cc-a3e8-cc2abd98084d'
				},
			},
			module: {
				create: {
					name: 'Chakra UI',
					description: 'Curso completo de Chakra UI',
				},
			},
    },
  });

  console.log(result);
  
}

main();