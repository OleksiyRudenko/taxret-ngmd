# Project Structure

## Purpose

This is an attempt to elaborate the folder structure for a project, which would
serve developer's needs keeping in mind scalability from tiny to huge while yet
adhering to best practices available.

## Credits

Not only [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide)



## Table of Contents
1. [Input](#input)
1.
1.
1.

## Input
###### [Structure [S100](#structure-s100)]


app/client/src?
src/app/client?


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

