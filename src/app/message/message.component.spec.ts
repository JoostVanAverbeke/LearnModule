import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { MessageService } from './services/message.service';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let messageService: MessageService;
  let messageServiceStub: Partial<MessageService>;
  messageServiceStub = {
    messages: [ 'message 1', 'message 2']
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      providers:    [ {provide: MessageService, useValue: messageServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
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
});
