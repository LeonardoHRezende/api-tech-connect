import { ConfigService } from '@nestjs/config';
import { Response, NextFunction } from 'express';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import jwt from 'jsonwebtoken';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) { }

  async use(req: any, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];

      try {
        const decoded: any = jwt.verify(token, this.configService.get<string>('JWT_SECRET'));

        const user = {
          firebaseId: decoded.firebaseId,
        };

        req.user = user;

        next();
      } catch (error) {
        throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}
