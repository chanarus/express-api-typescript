import { Controller } from './controller.interface';
import { HttpServer } from '../server/httpServer.interface';
import { Request, Response } from 'express';

export class CustomerController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.get('/customers', this.getAllCustomers.bind(this));
    httpServer.get('/customers/:id', this.getCustomer.bind(this));
    httpServer.post('/customers', this.addCustomer.bind(this));
    httpServer.put('/customers/:id', this.updateCustomer.bind(this));
    httpServer.del('/customers/:id', this.deleteCustomer.bind(this));
  }

  private getAllCustomers(req: Request, res: Response): object {
    return res.send({ res: 'All cusromers' });
  }

  private getCustomer(req: Request, res: Response): object {
    return res.send({ res: 'customer' });
  }

  private addCustomer(req: Request, res: Response): object {
    return res.send({ res: 'Add cusromers' });
  }

  private deleteCustomer(req: Request, res: Response): object {
    return res.send({ res: 'Update cusromers' });
  }

  private updateCustomer(req: Request, res: Response): object {
    return res.send({ res: 'Delete cusromers' });
  }
}
