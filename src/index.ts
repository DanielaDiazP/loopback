import {AerolineaApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {AerolineaApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new AerolineaApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
