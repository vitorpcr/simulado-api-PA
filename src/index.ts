const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newTask = await prisma.task.create({
    data: {
      title: 'Minha primeira tarefa',
      done: false,
    },
  });

  console.log('Tarefa criada:', newTask);
}

main()
  .catch((error) => {
    console.error('Erro:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });