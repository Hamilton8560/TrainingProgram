import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramsModule } from './programs/programs.module';
import { ProgramsController } from './programs/programs.controller';
import { ProgramsService } from './programs/programs.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ProgramsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
