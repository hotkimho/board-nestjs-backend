import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    console.log('start serializeuser', user);
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.userRepository
      .findOneOrFail({ id: parseInt(userId) })
      .then((user) => {
        console.log('user', user);
        done(null, user);
      })
      .catch((error) => done(error));
  }
}
