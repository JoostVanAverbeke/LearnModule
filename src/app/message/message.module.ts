import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [ MessageComponent ],
  exports: [ MessageComponent ],
  imports: [
    CommonModule
  ],
  providers: [ MessageService]
})
export class MessageModule { }
