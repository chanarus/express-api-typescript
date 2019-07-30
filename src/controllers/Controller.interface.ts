import { HttpServer } from '../server/httpServer.interface';

export interface Controller {
  initilize(httpServer: HttpServer): void;
}
