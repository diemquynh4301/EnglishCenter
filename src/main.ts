import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as moment from 'moment';
import * as session from 'express-session';
// const flash = require('connect-flash');


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  app.use(cookieParser());
  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(flash());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  moment.locale('vi');
  app.setLocal('moment', moment);

  await app.listen(3000);
}
bootstrap();
