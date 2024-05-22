import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserInput } from '@tech-connect/core/shared/repositories/account-user-repository';

import { UserService } from '@tech-connect/services/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('create')
  async createUser(@Body() user: UserInput, @Res() res: any) {
    try {
      await this.userService.createUser(user);
      return res.status(HttpStatus.CREATED).send();
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Get('get/:firebaseId')
  async getUser(@Param('firebaseId') firebaseId: string, @Res() res: any) {
    try {
      const user = await this.userService.getUser(firebaseId);
      return res.status(HttpStatus.OK).send(user);
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Put('update')
  async updateUser(@Body() user: UserInput, @Res() res: any) {
    try {
      await this.userService.updateUser(user);
      return res.status(HttpStatus.OK).send();
    }
    catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

}
