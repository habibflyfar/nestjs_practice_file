import { Agent } from './agent/entities/agent.entity';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './typeorm/user.entity';
import { UserModule } from './user/user.module';
import { AgentModule } from './agent/agent.module';



@Module({
  imports: [UserModule,CacheModule.register({isGlobal: true}),TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'fahimffi_b2b',
    entities: [Agent]
    
  }), AgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
