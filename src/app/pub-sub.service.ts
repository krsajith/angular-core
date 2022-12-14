import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject } from 'rxjs';

export interface Notification {
  type: string;
  payload: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class PubSubService {

  bSubjects = new Map<string, BehaviorSubject<any>>;

  subject = new Subject<Notification>();
  observable = this.subject.asObservable();

  publish(notification: Notification) {
    this.subject.next(notification);
  }

  subscribe(type: string) {
    return this.observable.pipe(filter((n) => n.type === type));
  }

  publishToStore(topic: string, value: any) {
    console.log(topic,value);
    
    const bs = this.getBSubject(topic);
    bs.next(value);
  }

  private getBSubject(topic: string): BehaviorSubject<any | undefined> {
    let bs = this.bSubjects.get(topic);
    if (!bs) {
      bs = new BehaviorSubject(undefined);
      this.bSubjects.set(topic, bs);
    }
    return bs
  }

  subscribeFromStore(topic: string) {
    return this.getBSubject(topic).asObservable();
  }
}
