import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  private chatBox: HTMLDivElement | null = null;
  private userInput: HTMLInputElement | null = null;
  private sendBtn: HTMLButtonElement | null = null;

  constructor() {}

  ngAfterViewInit() {
    this.chatBox = document.getElementById('chat-box') as HTMLDivElement;
    this.userInput = document.getElementById('user-input') as HTMLInputElement;
    this.sendBtn = document.getElementById('send-btn') as HTMLButtonElement;

    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', () => this.sendMessage());
    }
  }

  sendMessage() {
    if (!this.userInput || !this.chatBox) return;

    const message = this.userInput.value;
    if (message.trim() === '') return;

    this.appendMessage('user', 'User --> ' + message);
    this.userInput.value = '';

    // Simulate receiving a response from the chatbot
    const botResponse = 'Bot --> Hello! This is the chatbot response.';
    setTimeout(() => {
      this.appendMessage('bot', botResponse);
    }, 500);
  }

  appendMessage(sender: string, message: string) {
    if (!this.chatBox) return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    this.chatBox.appendChild(messageElement);

    this.chatBox.scrollTop = this.chatBox.scrollHeight;
  }
}
