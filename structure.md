[2016-04-10] Created

[2016-04-10] Latest major update

> [Learn what stays behind [2016-04-10]](./tag.date.md)

# Project Structure

## Purpose

This is an attempt to elaborate the folder structure for a project, which would
serve developer's needs keeping in mind scalability from tiny to huge while yet
adhering to best practices available.

While folder structure should be kept as
[flat](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y143)[2016-04-10]
as possible the proper initial set up is also important especially for novice
developers. Often the pre-set form helps keeping adherent to structure during
development cycle and on scaling saving efforts on migration and refactoring.

So we are trying to develop optimum folder structure.

## Credits

Not only [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide)
by John Papa is a good source of development style but also a source of good
practices on organizing documents and references.

## Table of Contents
1. [Outcome](#outcome)
1. [Major factors to consider](#major-factors-to-consider)
1. [Input](#input)

**Why outcome comes first?**

In business it often happens that we say *Here is the solution: .... Here is
reasoning behind, briefly:...* and *What part of reasoning would you like us
to unveil in more details?*

In finance it is normally said *This is our technical result, which comprises of ...
[1000 accounts drilling down to every single transaction] ...*

So, we just employ the same approach: the outcome and then explanation helping
track the reasoning.

## Outcome
###### [Structure [S100](#structure-s100)]

The resulting structure template is a bit excessive, offering for example sub-folder
`assets` to keep component-specific images and alike under component folder, which
is definitely unnecessary in many cases. Feel free removing those. We keep it for
to not to forget that should we need to store component specific imagery or other assets,
which normally go into app's `assets/img` folder, it should be nevertheless stored
under component folder.

**[Back to top](#table-of-contents)**

## Major factors to consider
###### [Structure [S200](#structure-s200)]

**[Back to top](#table-of-contents)**

### Software architecture
###### [Structure [S201](#structure-s201)]

client+server

**[Back to top](#table-of-contents)**

### Application structure
###### [Structure [S202](#structure-s202)]

app/client|server|vendor
app/client/common/component/assets/README.md|logo.svg

**[Back to top](#table-of-contents)**

### Scalability
###### [Structure [S203](#structure-s203)]

If I was asked to classify [SPAs](https://en.wikipedia.org/wiki/Single-page_application)
engaging AngularJS or similar
lightweight frameworks or extensive libraries, I would then offer
following definitions:

 * **tiny** - single-view front-end app. Nothing more complex than single
      controller, probably no services and very few actions. Deserves lightweight
      development cycle, nothing more complex than 'code+refresh-browser'.
      May be launched by opening `index.html` file directly in browser.
 * **small** - routed front-end app with a number of controllers, quite
      developed services, engaging local persistent storages like
      IndexedDB and some back-end support (non-principal data supply).
      Local http server is used during development. Still may not need build tools
      avoid thus build overheads.
 * **medium** - bigger share of back-end support and shared data
      supplied by back-end, possibly with third-party services integration.
      Here we definitely want to employ build tools.
 * **large** - even more of back-end, possibly with cloud-storage and
      hundreds if not thousands concurrent client.
 * **huge** - like large but with high performance back-end support. Employs
      full stack of building and collaboration technologies.

Some further notes related to tiny and small apps development:

 1. Local http server should serve both front and back ends.
 2. Third-party resources should be accessible under server root.
 3. Referring the resource as `/...path...` meaning a route from server root
      may become an issue when app is loaded into browser directly from file system.
      So, use relative addressing like `../../../vendor/angular/angular.1.5.0.min.js`
 4. Find a way automating addressing vendors' resources externally when deployed.

In either case the structure should be able to support scalability from the earliest
stage of development. You never know when tiny idea becomes a ~~facebook~~ huge app.

**[Back to top](#table-of-contents)**

### Development process
###### [Structure [S204](#structure-s204)]

Coding when no internet connection.

**[Back to top](#table-of-contents)**

## Input
###### [Structure [S300](#structure-s300)]

There is a number of overviews, guidelines and best practices described on the topic.
There is even more projects employing that or other file structure.

While it is clear that folders-by-feature structure has its significant advantages over
[file and folder patterns](https://medium.com/opinionated-angularjs/scalable-code-organization-in-angularjs-9f01b594bf06)[2013-11-20]
in many cases such factors as development cycle using build management tools and application
scale often stay beyond the scope.

Again, novice developer focused on development itself often knowing a little about
full-scale development environment and scaling pitfalls to take proper decisions on
project file structure.

[2016-04-10] Here are the extracts from various sources used:

| extract author | original source as of |
| :---:  | :---: |
| [John Papa](./structure.johnpapa.md) | 2016-03-27 |
| [DmitryEfimenko](./structure.DmitryEfimenko.md) | 2016-03-11 |
| [Josh D. Miller](./structure.joshdmiller.md) | 2015-01-25 |
| [Adnan Kukic](./structure.AdnanKukic.md) | 2014-10-09 |
| [Gert Hengeveld](./structure.GertHengeveld.md) | 2013-11-20 |

Follow the links in the extracts to read full source.

**[Back to top](#table-of-contents)**

### Common points
###### [Structure [S301](#structure-s301)]

More or less there is common understanding of structure in general: project
root folder contains:

* application folder (either `app` or `src`)
* general project documentation (purpose, intro, installation etc)
* folder for third-party (vendor) components like libraries and frameworks such as AngularJS
* build management (`grunt`, `gulp`, `bower`, `npm`) tools' files and folders
* Version Control System files and folders

The most of authors advocate folder-by-feature structure. I.e. each component has its own
folder containing all files required and attributed specifically to given component.
Reusable (in various projects) components should be "copy-pastable". It means that even
such assets like images, specific solely to a component should also be incapsulated therein.

**[Back to top](#table-of-contents)**

### Critical discrepancies
###### [Structure [S302](#structure-s302)]

There is no common understanding as to how to name folders storing imagery and alike.
Some suggest `assets`, while others suggest `content`. Sometimes this folder located
in `app` meaning assests are common for server and client ends, other times in `client`.

Should exclusive app's views be located under related components or collected in a
common storage?

Should exclusive app's components' folders mixed with a folder for copy-pastable components
or grouped under `core` folder?

No definite answers. But the rule of thumb is: whenever you have 7+ items (files, folders)
of similar type group them in a sub-folder. For e.g. if your component has 10 controllers,
3 directives and a couple of views, group controllers into `controllers` folder.

Where to locate `index.html` for client? It was seen couple of times under `app/assets/`.

Where to place developer's docs? All files in project root? Or have them scattered across
the entire folders structure - where the documented features are?

Even more interesting question: which path is preferred - `src/client/app` or
`src/app/client`? We tried to reason the solution.

**[Back to top](#table-of-contents)**

## Draft bits

local development: client, server, external services and resources (temporarily kept local)
for development phase.


Project development supportive infrastructure: builders, git, intro doc
client+server
documentation: project, dev guides, user guides

tiny: standalone run for tiny apps (open index.html in browser and that's it)
      local copies of vendor libs
      keep in mind possible growth to small, medium & even large
      `/...` vs `../../../...` reference style - serve both http://localhost/ and file:/// patterns
      gh-pages roll-out issue (use redir script in app root)



**[Back to top](#table-of-contents)**