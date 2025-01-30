import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  isModalVisible = false;
  selectedMessage: string = "";
  phoneNumber = "926170528";

  cards = [
    { title: "T1", description: "Sinal Funeral", icon: "fa-bell", expanded: false },
    { title: "T2", description: "Funeral", icon: "fa-cross", expanded: false },
    { title: "T3", description: "Chamada Funeral", icon: "fa-phone", expanded: false },
    { title: "T4", description: "Chamada Missa Festiva", icon: "fa-church", expanded: false },
    { title: "T5", description: "Picar", icon: "fa-comment-dots", expanded: false },
    { title: "T6", description: "Parar", icon: "fa-stop", expanded: false }
  ];

  openModal(title: string) {
    this.selectedMessage = `${title}`;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  sendMessage(title?: string) {
    const message = encodeURIComponent(title || this.selectedMessage);
    const smsLink = `sms:${this.phoneNumber}?body=${message}`;

    window.location.href = smsLink;
    this.closeModal();
  }

  toggleCard(card: any) {
    card.expanded = !card.expanded;
  }
}
