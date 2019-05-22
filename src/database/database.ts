import { Connection, createConnection } from 'typeorm';
import { Customer } from '../models/customer';

export interface DatabaseConfiguration {
  type: 'mongodb';
}

export class DatabaseProvider {
  private static connection: Connection;
  private static configuration: DatabaseConfiguration;

  public static configure(config: DatabaseConfiguration): void {
    DatabaseProvider.configuration = config;
  }

  public static async getConnection(): Promise<Connection> {
    if (DatabaseProvider.connection) {
      return DatabaseProvider.connection;
    }

    const { type } = DatabaseProvider.configuration;
    DatabaseProvider.connection = await createConnection({
      type,
      entities: [Customer]
    });

    return DatabaseProvider.connection;
  }
}
