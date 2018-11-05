import { Injectable } from '@angular/core';
import {MessageService} from '../../message/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  protected messageService: MessageService;
  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }
  getResource(): void {
    this.messageService.add('getResource called from ResourceService');
  }
}
