import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list of messages';
  }

  @Post()
  createMessage() {
    return 'create a message';
  }

  @Get('/:id')
  getMessage() {
    return 'one message';
  }
}
