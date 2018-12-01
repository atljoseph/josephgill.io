import { Injectable, ElementRef } from '@angular/core';
import { Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { LogService } from './log.service';
import { IAppInitService } from '../core.types';
import { headerHeight } from '../components/style.constants';

export interface IContentScrollContext {
  scrollTop: number;
  clientHeight: number;
}
export interface IContentClickContext {
  x: number;
  y: number;
  event: any;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService implements IAppInitService {

  handleId = 'ContentService';
  private contentElementRef: ElementRef = null;

  scrollContextObservable: BehaviorSubject<IContentScrollContext>;
  private resizeEventObservable: Observable<IContentScrollContext>;
  private scrollEventObservable: Observable<IContentScrollContext>;
  private isScrollDetectionDisabled: boolean = false;

  clickContextObservable: BehaviorSubject<IContentClickContext>;
  private clickEventObservable: Observable<IContentClickContext>;

  constructor(
    private logger: LogService,
  ) {
    this.scrollContextObservable = new BehaviorSubject({
      scrollTop: 0,
      clientHeight: window.innerHeight
    });
    this.clickContextObservable = new BehaviorSubject({
      x: 0,
      y: 0,
      event: null
    });
  }

  setContentElementRef(contentRef?: ElementRef) {
    if (contentRef) {
      this.contentElementRef = contentRef;
      this.initEventListeners();
    }
  }


  disableScrollDetection(): void {
    this.isScrollDetectionDisabled = true;
  }

  enableScrollDetection(): void {
    this.isScrollDetectionDisabled = false;
    // setTimeout(() => {
    //   this.scrollTick();
    // }, 500);
  }

  get artificialContentScrollUnderHeaderOffset(): number {
    return headerHeight;
  }

  scrollToTop() {
    this.logger.log('scrollToTop()', this.handleId, {});
    if (this.contentElementRef) this.contentElementRef.nativeElement.scrollTo(0, 0);
  }

  scrollSmoothToTop() {
    this.logger.log('scrollSmoothToTop()', this.handleId, {});
    if (this.contentElementRef) this.contentElementRef.nativeElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollSmoothToBottom() {
    this.logger.log('scrollSmoothToBottom()', this.handleId, {});
    if (this.contentElementRef) {
      const contentWindow = this.contentElementRef.nativeElement;
      contentWindow.scrollTo({
        top: contentWindow.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  scrollTick(amountY?: number) {
    // scroll by XYZ px to trigger a scroll event
    this.logger.log('scrollTick()', this.handleId, {});
    const val = this.scrollContextObservable.value;
    val.scrollTop = val.scrollTop + amountY ? amountY : 0;
    this.scrollContextObservable.next(val);
  }

  triggerResize() {
    window.dispatchEvent(new Event('resize'));
  }

  private initEventListeners() {

    this.logger.log('initEventListeners()', this.handleId, {});

    // scroll event
    // this.scrollEventObservable = fromEvent(this.scrollableHTMLElement, 'scroll')
    this.scrollEventObservable = fromEvent(this.contentElementRef.nativeElement, 'scroll')
      // .pipe(debounceTime(0.01))
      .pipe(map((event: any): IContentScrollContext => {
        return {
          scrollTop: event.target.scrollTop,
          clientHeight: event.target.clientHeight
        };
      }));
    this.scrollEventObservable.subscribe((val: IContentScrollContext) => {
      // this.logger.log('SCROLL.next()', this.handleId, { val });
      if (!this.isScrollDetectionDisabled) this.scrollContextObservable.next(val);
    });

    // resize event
    // change context?
    this.resizeEventObservable = fromEvent(window, 'resize')
      .pipe(debounceTime(3))
      .pipe(map((event: any): IContentScrollContext => {
        return {
          scrollTop: event.target.scrollTop,
          clientHeight: event.target.clientHeight
        };
      }));
    this.resizeEventObservable.subscribe((val: IContentScrollContext) => {
      this.logger.log('RESIZE.next()', this.handleId, { val });
      if (!this.isScrollDetectionDisabled) this.scrollContextObservable.next(val);
    });

    // click
    this.clickEventObservable = fromEvent(this.contentElementRef.nativeElement, 'click')
      .pipe(debounceTime(0.5))
      .pipe(map((event: any): IContentClickContext => {
        return {
          x: 0,
          y: 0,
          event
        };
      }));
    this.clickEventObservable.subscribe((val: IContentClickContext) => {
      this.logger.log('CLICK.next()', this.handleId, { val });
      this.clickContextObservable.next(val);
    });
  }

  appOnInit() {
    this.logger.log('appOnInit()', this.handleId, {});
    // setTimeout(() => {
    // this is now done by the content service passing in the main scrollable "interactive" elementRef
    //   this.initEventListeners();
    // }, 500);
  }
}
