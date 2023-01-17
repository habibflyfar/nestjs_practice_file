import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { Agent } from './entities/agent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agent])],
  controllers: [AgentController],
  providers: [AgentService]
})
export class AgentModule {}
