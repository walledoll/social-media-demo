import {
    MessageBody, OnGatewayConnection,
    OnGatewayDisconnect, SubscribeMessage,
    WebSocketGateway, WebSocketServer
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";


@WebSocketGateway(3002)
export class ChatGateway implements OnGatewayConnection,
    OnGatewayDisconnect {

    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket): void {
        this.server.emit('room', client.id + ' joined!')
    }

    handleDisconnect(client: Socket): void {
        this.server.emit('room', client.id + ' left!')
    }

   
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
        return data;
    }


}