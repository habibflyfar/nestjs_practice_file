import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './entities/agent.entity';

@Injectable()
export class AgentService {
  constructor(@InjectRepository(Agent) private usersRepository: Repository<Agent>) { }
  
  create(createAgentDto: CreateAgentDto) {
    return 'This action adds a new agent';
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
