import { Injectable } from '@angular/core';
import {ResourceService} from '../rest/services/resource.service';
import {MessageService} from '../message/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService extends ResourceService {
  constructor(messageService: MessageService) {
    super(messageService);
  }
  getBoard(): void {
    this.getResource();
    this.messageService.add('getBoard called from BoardService');
  }
}
