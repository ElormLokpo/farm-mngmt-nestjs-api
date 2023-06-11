import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentController } from './equipment.controller';
import { EquipmentSchema } from './equipment.DTO';
import { EquipmentServices } from './equipment.services';


@Module({
    imports:[
        MongooseModule.forFeature([{name: 'EquipmentModel', schema: EquipmentSchema}])
    ],
    controllers: [EquipmentController],
    providers: [EquipmentServices]
})
export class EquipmentModule{}