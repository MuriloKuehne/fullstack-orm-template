import { Request, Response, NextFunction } from "express"

class QuestionsController {
  async index(request: Request, response: Response) {
    return response.json()
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response) {
    return response.json()
  }

  async remove(request: Request, response: Response) {
    return response.json()
  }
}

export { QuestionsController }
