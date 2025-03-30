import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

const users = []

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    });

    res.status(201).json({ message: "Usuário criado com sucesso!", requestBody: req.body })
})

// Rota para buscar todos os usuários
app.get('/usuarios', async (req, res) => {
    let users = [];

    if (req.query && Object.keys(req.query).length > 0) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age,
            },
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json({ message: "Usuários encontrados com sucesso!", users });
});


// Rota para atualizar um usuário pelo ID
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })

    res.status(200).json({ message: "Usuário atualizado com sucesso!", requestBody: req.body })
})

// Rota para deletar um usuário pelo ID
app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!", requestBody: req.body })
})

