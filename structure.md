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
1. [Input](#input)
1. [Major factors to consider](#major-factors-to-consider)

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

**[Back to top](#table-of-contents)**

## Input
###### [Structure [S200](#structure-s200)]

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

## Major factors to consider
###### [Structure [S300](#structure-s300)]

### Software architecture
###### [Structure [S301](#structure-s301)]

### Application structure
###### [Structure [S302](#structure-s302)]

### Scalability
###### [Structure [S303](#structure-s303)]

### Development process
###### [Structure [S304](#structure-s304)]


**[Back to top](#table-of-contents)**

app/client/src?
src/app/client?

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

small: use local server for development, serving both front and back ends; no build
middle+: +build overheads

**[Back to top](#table-of-contents)**