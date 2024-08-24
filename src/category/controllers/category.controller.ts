import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';
import { HtttpResponse } from '../../shared/response/http.response';

export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService = new CategoryService(),
    private readonly httpResponse: HtttpResponse = new HtttpResponse()
  ) {}
  async getCategories(req: Request, res: Response) {
    try {
      const categories = await this.categoryService.getAllCategories();
      if (categories.length === 0)
        return this.httpResponse.notFound(res, 'Mot found data');

      return this.httpResponse.ok(res, categories);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const category = await this.categoryService.getCategoryById({ id });

      if (!category)
        return this.httpResponse.notFound(res, 'La categoría no existe');
      return this.httpResponse.ok(res, category);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const newCategory = await this.categoryService.createCategory(req.body);
      return this.httpResponse.ok(res, newCategory);
    } catch (e) {
      console.log(e);
      return this.httpResponse.serverError(res, e);
    }
  }

  async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const categoryUpdated = await this.categoryService.updateCategory(
        id,
        req.body
      );

      if (!categoryUpdated.affected)
        return this.httpResponse.notFound(
          res,
          'Hubo un error al tratar de actualizar la categoría'
        );

      return this.httpResponse.ok(res, categoryUpdated);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const categoryDeleted = await this.categoryService.deleteCategory({ id });
      if (!categoryDeleted.affected)
        return this.httpResponse.notFound(
          res,
          'Hubo un error al intentar eliminar la categpría'
        );
      return this.httpResponse.ok(res, categoryDeleted);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }
}
