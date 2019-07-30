import { Controller } from './Controller.interface';
import { HttpServer } from '../server/httpServer.interface';
import { Request, Response } from 'express';

export class CustomerController implements Controller {
  public initilize(httpServer: HttpServer): void {
    httpServer.get('/customers', this.getAllCustomers.bind(this));
    httpServer.get('/customers/:id', this.getCustomer.bind(this));
    httpServer.post('/customers', this.addCustomer.bind(this));
    httpServer.put('/customers/:id', this.updateCustomer.bind(this));
    httpServer.delete('/customers/:id', this.deleteCustomer.bind(this));
  }

  private getAllCustomers(req: Request, res: Response): void {
    res.status(200).send({ data: 'All' });
  }

  private getCustomer(req: Request, res: Response): void {
    res.status(200).send({ data: 'get one' });
  }

  private addCustomer(req: Request, res: Response): void {
    res.status(200).send({ data: 'add one' });
  }

  private updateCustomer(req: Request, res: Response): void {
    res.status(200).send({ data: 'update one' });
  }

  private deleteCustomer(req: Request, res: Response): void {
    res.status(200).send({ data: 'delete one' });
  }
}
