import {animate, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

export const popOverState =trigger('popOverState', [
                              state('show', style({ opacity: 1})),
                              state('hide', style({opacity: 0})),
                              transition('show => hide', animate('600ms ease-out')),
                              transition('hide => show', animate('1000ms ease-in'))
                            ]);


export const photoState =trigger('photoState', [
                          state('move',     style({transform: 'translateX(-100%)',})),
                          state('enlarge',  style({transform: 'scale(1.5) translateY(20%)',})),
                          state('spin',     style({transform: 'rotateY(180deg) rotateZ(90deg)',})),
                          transition('* => *', animate('500ms ease')),
                        ]);


export const photoStateMove =trigger('photoStateMove', [
  transition('* => move',
    animate('2000ms', keyframes([
      style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
      style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
      style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
      style({transform: 'translateX(-100%)',                  offset: 0.8}),
      style({transform: 'translateX(0%)',                     offset: 1.0})
    ])))
]);

export const photoTilt =trigger('photoTilt', [
  transition('* => move',
    animate('500ms',
      keyframes([
        style({transform: 'rotateZ(0deg) scale(1.5)'  }),
        style({transform: 'rotateZ(30deg)' }),
        style({transform: 'rotateZ(-30deg)'  }),
        style({transform: 'rotateZ(30deg)'  }),
        style({transform: 'rotateZ(0deg) scale(1)'  }),
      ])))
]);

export const photosAnimation =trigger('photosAnimation', [
  transition('* => *', [
    query('img',  style({ transform: 'translateX(-100%)'})),
    query('img',  stagger('600ms', [
        animate('900ms', style({ transform: 'translateX(0)'}))
      ]))
  ])
]);

