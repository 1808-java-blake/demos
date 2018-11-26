import { BehaviorSubject } from 'rxjs';


const clickStream = new BehaviorSubject(0);

export function publishNewClicks(clickValue: number) {
  if (clickValue && typeof(clickValue) === 'number') {
    clickStream.next(clickValue);
  }
}

export const clickStreamObservable = clickStream.asObservable();