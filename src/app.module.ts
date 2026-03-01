import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { WeatherAppModule } from './weather-app/weather-app.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule, WeatherAppModule],
 
})
export class AppModule {

   

}
