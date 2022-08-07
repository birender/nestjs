import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get('/list')
    listMessage(){
        console.log( 'Print All Messages' );
    }

    @Post('/save')
    createMessage(@Body() body:CreateMessageDto){
        console.log( body );
    } 

    @Get('/:id/:name')
    getMessage(@Param('id') id:string,@Param('name') name:string){
        console.log( id , name );
    }
}
