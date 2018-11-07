import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  constructor() { }
  add(message: string) {
    this.messages.push(message);
  }
  getMessages(): string[] {
    return this.messages;
  }
  getMessage(id: number): string {
    let returnMessage: string = null;
    if (id < this.messages.length) {
      returnMessage = this.messages[id];
    }
    return returnMessage;
  }
  clear() {
    this.messages = [];
  }
}
