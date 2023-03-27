import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const resources = await prisma.apis.findMany({
        where: {
            id: 1,
        },
    });

    console.log(resources);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
