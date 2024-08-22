import { Request, Response } from 'express';

export class CategoryController {
  constructor() {}
  async getCategories(req: Request, res: Response) {
    //TODO: Get all Categories
    return res
      .status(200)
      .json({ message: 'Categories retrieved successfully' });
  }

  async getCategoryById(req: Request, res: Response) {
    //TODO: Get Category by Id
    return res.status(200).json({ message: 'Category found by Id!' });
  }

  async createCategory(req: Request, res: Response) {
    //TODO: Create a Category
    return res.status(200).json({ message: 'Category  created successfully' });
  }

  async updateCategory(req: Request, res: Response) {
    //TODO: Update a Category
    return res.status(200).json({ message: 'Category updated successfully' });
  }

  async deleteCategory(req: Request, res: Response) {
    //TODO: Delete a Category by Id
    return res.status(200).json({ message: 'Category deleted successfully!' });
  }
}
