import { HttpServer } from '../server/httpServer.interface';

export interface Controller {
  initialize(httpServer: HttpServer): void;
}
