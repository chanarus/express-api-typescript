import { HttpServer } from './httpServer.interface';
import express, { Application, RequestHandler } from 'express';
import { CONTROLLERS } from '../controllers';

export class ApiServer implements HttpServer {
  private server: Application;

  public get(url: string, requestHandler: RequestHandler): void {
    this.addRoute('get', url, requestHandler);
  }

  public post(url: string, requestHandler: RequestHandler): void {
    this.addRoute('post', url, requestHandler);
  }

  public put(url: string, requestHandler: RequestHandler): void {
    this.addRoute('put', url, requestHandler);
  }

  public del(url: string, requestHandler: RequestHandler): void {
    this.addRoute('del', url, requestHandler);
  }

  private addRoute(
    method: 'get' | 'post' | 'put' | 'del',
    url: string,
    requestHandler: RequestHandler
  ): void {
    this.server[method](url, async (req, res, next) => {
      try {
        await requestHandler(req, res, next);
      } catch (err) {
        console.error(err);
        res.send(500, err);
      }
    });

    console.log(`Added routes ${method.toUpperCase()}: ${url}`);
  }

  public start(port: number): void {
    this.server = express();

    CONTROLLERS.forEach(controller => controller.initialize(this));

    this.server.listen(port, () =>
      console.log(`Server is running on port: ${port}`)
    );
  }
}
