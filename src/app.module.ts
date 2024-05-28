import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './modules/user.module';
import { JobVacancyModule } from './modules/job-vacancy.module';
import { AuthMiddleware } from './auth.middleware';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule, 
    JobVacancyModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    PrismaService,
    ConfigService
  ],
  exports: [
    PrismaService,
    ConfigService
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        {
          path: '/user',
          method: RequestMethod.POST,
        },
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
