import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main () {
	const result = await prisma.courses.update({
		where: {
			id: 'ef70edb9-96ef-4239-bdd0-f29885574dac'
		},
		data: {
			duration: 300,
			description: 'Curso bacana de NodeJS',
		}
	});

	console.log(result);
}

main();