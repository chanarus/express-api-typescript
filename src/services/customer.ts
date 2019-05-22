import { Customer } from '../models/customer';
import { DatabaseProvider } from '../database/database';
import { getRepository } from 'typeorm';

export class CustomerService {
  public async getById(id: number): Promise<Customer> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Customer).findOne(id);
  }

  public async create(customer: Customer): Promise<Customer> {
    const connection = await DatabaseProvider.getConnection();
    return await getRepository(Customer).save(customer);
  }

  public async getAll(): Promise<Customer[]> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Customer).find();
  }

  public async update(customer: Customer): Promise<Customer> {
    const connection = await DatabaseProvider.getConnection();
    const repo = connection.getRepository(Customer);
    const entity = await repo.findOne(customer._id);
    entity.firstName = customer.firstName;
    entity.lastName = customer.lastName;
    return await repo.save(entity);
  }
}
