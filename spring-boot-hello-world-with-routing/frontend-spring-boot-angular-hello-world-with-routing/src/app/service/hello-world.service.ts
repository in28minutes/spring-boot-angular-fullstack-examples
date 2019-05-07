import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from '../model/Message';

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    constructor(private http: HttpClient) {

    }

    executeHelloWorldService() {
        // because a text response was specified.
        // There's no need to pass a <string> type parameter to get().
        return this.http.get('http://localhost:8080/hello-world', { responseType: 'text' });
    }

    executeHelloWorldBeanService() {
        return this.http.get<MessageModel>('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }

}