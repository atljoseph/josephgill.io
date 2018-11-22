
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const scrollAnimation = trigger('scrollAnimation', [
  state('show', style({
    opacity: 1,
    transform: "translateX(0)"
  })),
  //
  state('hide', style({
    opacity: 0,
  })),
  transition('hide <=> show', animate(`${500}ms ease-in-out`)),
  //
  state('hideLeft', style({
    opacity: 0,
    transform: "translateX(-100%)"
  })),
  state('hideRight', style({
    opacity: 0,
    transform: "translateX(100%)"
  })),
  transition('hideLeft <=> show, hideRight <=> show', animate(`${250}ms ease-in-out`)),
  //
  state('hideTop', style({
    opacity: 0,
    transform: "translateY(-200%)"
  })),
  state('hideBottom', style({
    opacity: 0,
    transform: "translateY(200%)"
  })),
  transition('hideBottom <=> show, hideTop <=> show', animate(`${350}ms ease-in-out`)),
  //
  state('hideTopRight', style({
    opacity: 0,
    transform: "translateY(-100%) translateX(100%) scale(0.5)"
  })),
  state('hideBottomLeft', style({
    opacity: 0,
    transform: "translateY(100%) translateX(-100%) scale(0.5)"
  })),
  transition('hideBottomLeft <=> show, hideTopRight <=> show', animate(`${350}ms ease-in-out`)),
]);