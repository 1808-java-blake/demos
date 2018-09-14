import { Subject } from 'rxjs';

export interface IDimension {
  height: number;
  width: number;
}
const windowSizeSubject = new Subject<IDimension>();
export const windowStream = windowSizeSubject.asObservable();

window.addEventListener('resize', (e: any) => {
  const dimension = {
    height: window.innerHeight,
    width: window.innerWidth,
  }
  windowSizeSubject.next(dimension);
})
