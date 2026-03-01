import { Body, Controller, Get, HostParam, HttpCode, Param, ParseIntPipe, Post, Redirect, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { sign } from 'crypto';
import type { authDto } from './dto';
import type { Request } from 'express';

@Controller({host:':account'})
export class AuthController {
  constructor(private authService: AuthService) {}
  //   @Post('singin')
  //   singin(@Body('city') city: string, @Body('code', ParseIntPipe) code: string) {
  //     console.log({ city, code });

  //     return this.authService.signin();
  //   }

  @Get('getAccount')
  getAccount(@HostParam('account') account : any){
    return {account}


  }

  @Get('cat')
  getCats() {
    return 'many cats';
  }

  
@Get('cat/*')
@HttpCode(205)
@Redirect('https://nestjs.com', 301)
findAll() {
  return 'This route uses a wildcard';
}

@Get('cats/:id')
getCatsId(@Param('id') id : any){

    return {id}
}


  @Post('singin')
  singin(@Body() req) {
    console.log(req);

    return req;
  }

  
}
