import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes, sequence, state,
} from '@angular/animations';
import {RouterOutlet} from "@angular/router";


/*
            READ ME - ROUTER ANIMATION
1. in module  > import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
2. in html
  <div [@routeAnimations]="prepareRouteAnimation(outlet)">
    <router-outlet #outlet="outlet"></router-outlet>
  </div>

3. in ts
  import {simplePopAnimation} from './route-animation';
  add  animations: [simplePopAnimation],
4. in route add data: { animation: 'slideRight'}
 */

/*
This function is used by ts file to call animation ..
 */
export function prepareRouteAnimation(outlet: RouterOutlet ) { // check what this does ??
// console.log(outlet?.activatedRouteData['animation']); // holds the value of animation flag
  return outlet && outlet.activatedRouteData  && outlet.activatedRouteData['animation'] ;
}

// 1. simple animationa-folder-tools
export const simplePopAnimation =
  trigger('routeAnimations', [                 // MATCH     <div [@routeAnimations]=  IN HTML
    transition('* <=> *', [               //  HOW TO MOVE FROM ONE ANIMATION TO THE NEXT .. ON * <=> * APPLY TO ALL
// Set a default  style for enter and leave
      query(':enter, :leave', [             //  THIS WILL APPLY TO BOTH ENTRING AND LEAVING A PAGE ..
        style({                                       // (basic css would apply to allow animation .. )
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',             // hide old component
        }),
      ], {optional: true}),
      // Animate the new page in
      query(':enter', [                     // AFTER PREPERING THE PAGE .. ON ENTER WILL RUN THE ANIMATION
        animate(                                              // ACTUAL ANIMATION
          '600ms ease',                               // TIME OF ANIMATION
          style({ opacity: 1,
                        transform: 'scale(1) translateY(0)' })),  // fade in the new component .
      ], {optional: true})
    ]),
  ]);

// 2. multi option animation
// https://stackblitz.com/edit/angular-route-animations-nwt1gf?file=src%2Fapp%2Fapp.component.ts
// ISSUE - for some reason would only apply the last slideTo , on our case the  : slideTo('right'))

export const simplePopWithSlideAnimation =

  trigger('routeAnimations', [                                // MATCH     <div [@routeAnimations]=  IN HTML
    transition('* <=> slideLeft', slideTo('left')),   // transition from one animation value to the next
    transition('* <=> slideRight', slideTo('right')),
    transition('slideRight <=> *', slideTo('left')),
    transition('slideLeft <=> *', slideTo('right')),
  ]);


export function slideTo(direction) {
//  console.log('got direction' , direction);
  const optional = { optional: true};
  return [
    query(':enter, :leave', [             //  THIS WILL APPLY TO BOTH ENTRING AND LEAVING A PAGE ..
      style({                                       // (basic css would apply to allow animation .. )
        position: 'relative',
        top: 0,
        [direction]: 0,
        width: '100%',
      }),
    ], optional),
    // Animate the new page in
    query(':enter', [                     // AFTER PREPERING THE PAGE .. ON ENTER SET CSS
      style({[direction]: '-100%'})
    ]),
    group([                                         // group will wait for the first query to finish ..
      query(':leave', [                 // running 2 queries , one of the leaving and one for the entering
        animate(
          '600ms ease',
          style({ [direction]: '100%' }))] ,optional),
      query(':enter', [
        animate(
          '600ms ease',
          style({ [direction]: '0%' }))] ),
      ]),
  ];
  // Normalize the page style... Might not be necessary

  // Required only if you have child animations on the page
  // query(':leave', animateChild()),
  // query(':enter', animateChild()),
}

// export const simplePopAnimation =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
// // Set a default  style for enter and leave
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           left: 0,
//           width: '100%',
//           opacity: 0,
//           transform: 'scale(0) translateY(100%)',
//         }),
//       ], {optional: true}),
//       // Animate the new page in
//       query(':enter', [
//         animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
//       ], {optional: true})
//     ]),
//   ]);


// export const simplePopAnimation =
//   trigger('routeAnimations', [
//     transition('HomePage <=> AboutPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('300ms ease-out', style({ left: '100%' }))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('* <=> FilterPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('200ms ease-out', style({ left: '100%' }))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ]);
/*


export function slideLeft() {
  return slide();
}




export const rowsAnimation =
  trigger('rowsAnimation', [
    transition('void => *', [
      style({height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none'}),
      sequence([
        animate('.35s ease', style({
          height: '*',
          opacity: '.2',
          transform: 'translateX(0)',
          'box-shadow': 'none'
        })),
        animate('.35s ease', style({height: '*', opacity: 1, transform: 'translateX(0)'}))
      ])
    ])
  ]);
export const fadeInAnimation = trigger('fadeInAnimation', [
  state('not-loaded', style({
    opacity: 0,
    position: 'relative'
  })),
  state('loaded', style({
    opacity: 1,
    top: '0px',
    position: 'relative',

  })),
  transition('not-loaded => loaded', [
    animate('0.8s')
  ]),
]);

 */
