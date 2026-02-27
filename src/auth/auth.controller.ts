import {Controller , Post} from "@nestjs/common"
import { AuthService } from "./auth.service";
import { sign } from "crypto";



@Controller('auth')
export class AuthController{



    constructor(private authService: AuthService){

 }
        @Post('singin')
        signin(){
           return "hello"
            }
   
}