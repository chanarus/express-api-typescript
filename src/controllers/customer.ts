import { Controller } from './controller.interface';
import { HttpServer } from '../server/httpServer.interface';
import { Request, Response } from 'express';

export class CustomerController implements Controller {
  public initialize(httpServer: HttpServer): void {
    httpServer.get('/customers', this.getAllCustomers.bind(this));
    httpServer.post('/customers', this.addCustomer.bind(this));
  }

  private getAllCustomers(req: Request, res: Response): object {
    return res.send({ res: 'All cusromers' });
  }

  private addCustomer(req: Request, res: Response): object {
    return res.send({ res: 'Add cusromers' });
  }
}
