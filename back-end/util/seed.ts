// to Execute: npx ts-node seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    await prisma.blog.deleteMany();
    await prisma.user.deleteMany();

const Maxime = await prisma.user.create({
    data: {
        username: "maxime_1",
        password: "fzbifvuiys"
    }
})


const John = await prisma.user.create({
    data: {
        username: "john_doe",
        password: "securepassword"
    }
});


const Alice = await prisma.user.create({
    data: {
        username: "alice_smith",
        password: "anotherpassword"
    }
});

const blog1 = await prisma.blog.create({
    data: {
        title: "First Blog Title",
        caption: "First Blog Caption",
        user: {
            connect: { id: Maxime.id } // Connect the user to the blog
        }
    }
});

const blog2 = await prisma.blog.create({
    data: {
        title: "Second Blog Title",
        caption: "Second Blog Caption",
        user: {
            connect: { id: John.id } // Connect the user to the blog
        }
    }
});

const blog3 = await prisma.blog.create({
    data: {
        title: "Third Blog Title",
        caption: "Third Blog Caption",
        user: {
            connect: { id: Alice.id } // Connect the user to the blog
        }
    }
});



}

export default main
