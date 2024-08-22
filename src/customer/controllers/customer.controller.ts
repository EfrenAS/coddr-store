import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.services';

export class CustomerController {
  constructor(
    private readonly customerService: CustomerService = new CustomerService()
  ) {}

  async getCustomers(req: Request, res: Response) {
    try {
      const data = await this.customerService.findAllCustomers();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.findCustomerById(id);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async createNewCustomer(req: Request, res: Response) {
    try {
      const data = await this.customerService.createCustomer(req.body);
      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCustomerById(req: Request, res: Response) {
    //TODO: Update customer by id
    res.send('Actualizar un cliente por ID');
  }

  async deleteCustomerById(req: Request, res: Response) {
    //TODO: Delete customer by id
    res.send('Eliminar un cliente por ID');
  }
}
