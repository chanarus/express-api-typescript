import { AppServer } from './server';

const app = new AppServer();
app.start(+process.env.PORT || 8083);
