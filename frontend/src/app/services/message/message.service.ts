import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message } from "../../models/message/message";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:8080/api/messages";

  public save(message: Message) {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
