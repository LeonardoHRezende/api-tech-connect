import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { JobVacancyProps } from '@tech-connect/core/shared/repositories/job-vacancy-repository';
import { JobsService } from '@tech-connect/services/job-vacancy.service';



@Controller('jobs')
export class JobVacancyController {
  constructor(
    private readonly jobsService: JobsService,
  ) { }

  @Post('')
  async createJob(@Body() job: JobVacancyProps, @Res() res: any) {
    try {
      await this.jobsService.createJob(job);
      return res.status(HttpStatus.CREATED).send();
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Get('/:id')
  async getJob(@Param('id') id: string, @Res() res: any) {
    try {
      const job = await this.jobsService.findUniqueJob(id);
      return res.status(HttpStatus.OK).send(job);
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Get('/find-all/:page')
  async getAllJobs(@Param('page') page: string, @Res() res: any) {
    try {
      const jobs = await this.jobsService.getJobs(parseInt(page));
      return res.status(HttpStatus.OK).send(jobs);
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Put('')
  async updateJob(@Body() job: JobVacancyProps, @Res() res: any) {
    try {
      await this.jobsService.updateJob(job);
      return res.status(HttpStatus.OK).send();
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: string, @Res() res: any) {
    try {
      await this.jobsService.deleteJob(id);
      return res.status(HttpStatus.OK).send();
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

}
