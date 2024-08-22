import { CustomerController } from './controllers/customer.controller';
import { BaseRouter } from '../shared/router/router';

export class CustomerRouter extends BaseRouter<CustomerController> {
  constructor() {
    super(CustomerController);
  }

  routes(): void {
    this.router.get('/customer', (req, res) =>
      this.controller.getCustomers(req, res)
    );

    this.router.post('/customer', (req, res) =>
      this.controller.createNewCustomer(req, res)
    );

    this.router.get('/customer/:id', (req, res) =>
      this.controller.getCustomerById(req, res)
    );

    this.router.patch('/customer/:id', (req, res) =>
      this.controller.updateCustomerById(req, res)
    );

    this.router.delete('/customer/:id', (req, res) =>
      this.controller.deleteCustomerById(req, res)
    );
  }
}
