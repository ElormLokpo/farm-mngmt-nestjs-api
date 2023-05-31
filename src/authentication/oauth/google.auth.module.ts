import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import { AuthModule } from '../auth/auth.module';
import { GoogleAuthController } from './google.auth.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
    imports: [
        PassportModule.register({defaultStrategy:'google'}),
        AuthModule
    ],
    controllers: [GoogleAuthController],
    providers: [GoogleStrategy]
})
export class GoogleAuthModule{}