import { HttpServer } from './httpServer.interface';
import express, { Application, RequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CONTROLLERS } from '../controllers';

export class AppServer implements HttpServer {
  private server: Application;

  public get(url: string, requestHandler: RequestHandler): void {
    this.addRoutes('get', url, requestHandler);
  }
  public post(url: string, requestHandler: RequestHandler): void {
    this.addRoutes('post', url, requestHandler);
  }
  public put(url: string, requestHandler: RequestHandler): void {
    this.addRoutes('put', url, requestHandler);
  }
  public delete(url: string, requestHandler: RequestHandler): void {
    this.addRoutes('delete', url, requestHandler);
  }

  private addRoutes(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    requestHandler: RequestHandler
  ): void {
    this.server[method](url, async (req, res, next) => {
      try {
        await requestHandler(req, res, next);
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    });

    console.log(`Added routes ${method.toUpperCase()}: ${url}`);
  }

  public start(port: number): void {
    this.server = express();

    this.server.use(bodyParser.json());
    this.server.use(cors());

    CONTROLLERS.forEach(controller => controller.initilize(this));

    this.server.listen(port, () =>
      console.log(`Server is running on port ${port}`)
    );
  }
}
