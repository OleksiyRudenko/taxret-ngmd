**Table of contents
(wouldn't work properly being incorporated in app!)**
* [Preface](#preface)
* [Primary resources](#primary-resources)
* [Secondary resources](#secondary-resources)
* [Builders and Package managers](#builders-and-package-managers)

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
`about.md` for the idea behind
and `user.md` for user's manual
(both documents are in Ukrainian).

This document describes technical aspects of project implementation
and designed for developer's quick reference.

See `README.md` for project set-up reference.

[Demo](http://oleksiyrudenko.github.io/taxret-ngmd/app/#/declarants)
is based on `dev` branch. [2016-04-09]

**NB!** `[YYYY-MM-DD]` *indicates amendment/addition date of information
block it attached to. This (I believe) helps to identify amendments
since reader's' last visit (if one can remember) or the period of
time related information was up-to-date. So, if `[YYYY-MM-DD]` is
far too long ago then related info most likely should be cross-checked.*

*Please, do not hesitate contacting me via
[github](https://github.com/OleksiyRudenko), whenever you find
any reference to external resource significantly outdated.*

## Primary resources

### Libs/frameworks
 - Angular + ng-animate + ng-aria 1.5.1
 - Angular material 1.0.6
 - Angular ui.router 0.2.18

This project code was initiated from
[angular/material-start](https://github.com/angular/material-start)
boilerplate.

## Secondary resources

### Markdown support
Primary lib: [Hypercubed/angular-marked](https://github.com/Hypercubed/angular-marked) *(supports github markdown flavour)*

Primary dependency lib (required): [chjj/marked](https://github.com/chjj/marked)

Secondary dependency lib (optional, not used): [isagalaev/highlight.js](https://github.com/isagalaev/highlight.js)

**Possible alternatives:**

Primary lib: [btford/angular-markdown-directive](https://github.com/btford/angular-markdown-directive)

Primary dependency lib (required): [showdownjs/showdown](https://github.com/showdownjs/showdown)

### Icon sets source
[materialdesignicons](https://materialdesignicons.com/)

## Other related resources
Here is collection of other Angular related resources collection
*(however, not used in this project)* worth to note are:

[angular/angular-seed](https://github.com/angular/angular-seed)
(last commit 2015-06-15, uses ng-route [2016-04-09])

The above is also a good source of information re (*while possibly
outdated* [2016-04-09]):
* installation instructions
* testing instructions
* package management
* continuous integration

Similar to above with ui.router [dok/angular-ui-seed](https://github.com/dok/angular-ui-seed)
(last commit 2014-06-27, uses ng-ui.router [2016-04-09])

A list of awesome AngularJS services, directives,
utilities and
resources @[gianarb/awesome-angularjs](https://github.com/gianarb/awesome-angularjs)
(last commit 2016-04-08, uses ng-ui.router [2016-04-09])

Generators @[yeoman.io](http://yeoman.io/generators/)

ng+material+sass+ui.router
@[row1/brunch-materialistic-arrogantular](https://github.com/row1/brunch-materialistic-arrogantular)
(last commit 2015-09-06 [2016-04-09])
for [brunch](http://brunch.io)
with [demo](http://row1.github.io/brunch-materialistic-arrogantular/#/)
via [brunch.io/skeletons](http://brunch.io/skeletons).

## Builders and Package managers
[brunch.io](http://brunch.io/) - a better Gulp
(last commit 2016-04-08 [2016-04-09])

Gulp (a better Grunt)

Grunt
