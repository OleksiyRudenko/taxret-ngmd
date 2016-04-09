## Preface
[2016-04-09]
If I was asked to classify SPA's engaging AngularJS or similar
lightweight frameworks or extensive libraries, I would then offer
following definitions:
 * **tiny** - single-view front-end app. Nothing more complex than single
controller, probably no services and very few actions
 * **small** - routed front-end app with a number of controllers, quite
developed services, engaging local persistent storages like
IndexedDB and some back-end support (non-principal data supply)
 * **medium** - bigger share of back-end support and shared data
 supplied by back-end, possibly with third-party services integration
 * **large** - even more of back-end, possibly with cloud-storage and
 hundreds if not thousands concurrent client
 * **huge** - large + high performance back-end support

Well, I do not have yet experience beyond primitive tiny apps.
This project is an attempt to build a small yet valuable app.

The app is focused on Ukrainian audience. Please, look at
`about.md` for the idea behind and `user.md` for user's manual
(both documents are in Ukrainian).

This document describes technical aspects of project implementation
and designed for developer's quick reference.

See `README.md` for project set-up reference.

[Demo](http://oleksiyrudenko.github.io/taxret-ngmd/app/#/declarants)
is based on `dev` branch.

## Primary resources engaged

### Libs/frameworks
 - Angular + ng-animate + ng-aria 1.5.1
 - Angular material 1.0.6
 - Angular ui.router 0.2.18

This project code was initiated from
[angular/material-start boilerplate](https://github.com/angular/material-start)

## Secondary resources engaged

### Markdown support
Primary lib: [Hypercubed/angular-marked](https://github.com/Hypercubed/angular-marked) *(supports github markdown flavour)*

Primary dependency lib (required): [chjj/marked](https://github.com/chjj/marked)

Secondary dependency lib (optional, not used): [isagalaev/highlight.js](https://github.com/isagalaev/highlight.js)

**Possible alternatives:**
Primary lib: [btford/angular-markdown-directive](https://github.com/btford/angular-markdown-directive)

Primary dependency lib (required): [showdownjs/showdown](https://github.com/showdownjs/showdown)


### Icon sets source
[Source of icons](https://materialdesignicons.com/)