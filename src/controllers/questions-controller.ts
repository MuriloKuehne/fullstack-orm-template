import { Request, Response } from "express"
import { prisma } from "@/prisma"
import { questionsRoutes } from "@/routes/questions-routes"
import { title } from "process"

class QuestionsController {
  async index(request: Request, response: Response) {
    const questions = await prisma.question.findMany({
      where: {
        title: {
          contains: request.query.title?.toString().trim(),
          mode: "insensitive",
        },
      },
      orderBy: {
        title: "asc",
      },
    })

    return response.json(questions)
  }

  async create(request: Request, response: Response) {
    const { title, content, user_id } = request.body

    await prisma.question.create({
      data: {
        title,
        content,
        userId: user_id,
      },
    })
    return response
      .status(201)
      .json({ message: "Question created successfully" })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { title, content } = request.body

    await prisma.question.update({
      data: {
        title,
        content,
      },
      where: {
        id,
      },
    })

    return response.json({ message: "Question updated successfully" })
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    await prisma.question.delete({
      where: {
        id,
      },
    })
    return response.json({ message: "Question deleted successfully" })
  }
}

export { QuestionsController }
