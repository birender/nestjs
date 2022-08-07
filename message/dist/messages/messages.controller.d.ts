import { CreateMessageDto } from './dtos/create-message.dto';
export declare class MessagesController {
    listMessage(): void;
    createMessage(body: CreateMessageDto): void;
    getMessage(id: string, name: string): void;
}
