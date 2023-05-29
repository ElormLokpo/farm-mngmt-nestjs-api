import {Module} from '@nestjs/common';
import { JwtService } from './jwt.services';


@Module({
    providers:[JwtService],
    exports:[JwtService]
})
export class JwtModule{}