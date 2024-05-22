import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './modules/user.module';
import { JobVacancyModule } from './modules/job-vacancy.module';

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
  ],
  exports: [
    PrismaService
  ]
})
export class AppModule { }
