import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { MessageService } from './services/message.service';
import {of} from 'rxjs';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let messageService: MessageService;
  const messageServiceSpy = jasmine.createSpyObj('MessageService', ['getMessages', 'getMessage']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      providers:    [ {provide: MessageService, useValue: messageServiceSpy } ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    messageServiceSpy.getMessages.and.returnValue(['message 1', 'message 2']);
    messageServiceSpy.getMessage.and.returnValue('message 4');
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    /* Get the injected service from the MessageComponent */
    messageService = TestBed.get(MessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the populated messages', () => {
  });

  it('should display a button \'clear\' to clear the populated messages', () => {
    const element = fixture.nativeElement.querySelector('.clear');
    expect(element.textContent).toEqual('clear');
  });
  it('should display the first message populated to the MessageService', () => {
    const element = fixture.nativeElement.querySelector('.first_message');
    expect(element.textContent).toEqual('message 4');
  });
});
