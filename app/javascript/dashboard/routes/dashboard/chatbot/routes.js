import { frontendURL } from '../../../helper/URLHelper';
import ChatbotIndex from './pages/ChatbotIndex.vue';

export const routes = [
  {
    path: frontendURL('accounts/:accountId/chatbot'),
    name: 'chatbot_dashboard_index',
    component: ChatbotIndex,
    meta: {
      // Somente administradores editam o chatbot. O menu lateral lê este
      // meta.permissions e também esconde o item para os demais papéis.
      permissions: ['administrator'],
    },
  },
];
