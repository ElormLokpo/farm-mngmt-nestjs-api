import {Module} from '@nestjs/common';
import { RegisterUserModule } from './register/register.user.module';


@Module({
    imports: [RegisterUserModule]
})
export class AuthModule{}