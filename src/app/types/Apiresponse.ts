import { Message } from "@/modal/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptionMessage?: boolean;
  messages?: Array<Message>;
}
