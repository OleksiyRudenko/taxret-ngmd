*Latest significant amendment:* [2016-04-10]

Project file structure based on extracts from
[AngularJS Best Practices: Directory Structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)[2014-10-09]

The original source follows Extrapolation results for quick reference.

# Extrapolation

Generalized comments incorporated for the sake of optimization analysis process.

Comment is denoted with leading `#` or `//` and follows folder or
file it refers to.

Files are put above sub-directories for better comprehension.

## Step 1. Merger

```
index.html      // Lives at the root of front-end structure.
                // Will primarily handle loading in all the libraries and Angular elements.
app/            // The meat of the app.
----- app.module.js
----- app.routes.js
----- components/   // Each component is treated as a mini Angular app
                     # These will be the static views ,directives and services for that
                       specific section of the site (think an admin users section, gallery
                       creation section, etc). Each page should have it’s own subfolder
                       with it’s own controller, services, and HTML files.
                     # Each component here will resemble a mini-MVC application by having
                       a view, controller and potentially services file(s). If the component
                       has multiple related views, it may be a good idea to further separate
                       these files into ‘views’, ‘controllers’, ‘services’ subfolders.
---------- core/     # Components shared across many pages
--------------- header/
--------------- footer/
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html    # !see views/blog below
----- views/
---------- blog/
--------------- blogRoutes.js    # include here only the routes relevant to the blog such
                                   as /blog/:slug, /blog/:slug/edit, blog/tags:/tags, etc.
----- shared/       // Acts as reusable components or partials of our site
                     # The shared folder will contain the individual features that
                       your app will have. These features will ideally be directives
                       that you will want to reuse on multiple pages.
                     # Features such as article posts, user comments, sliders, and others
                       should be crafted as AngularJS Directives. Each component here
                       should have it’s own subfolder that contains the directive
                       JavaScript file and the template HTML file.
                     # In some instances, a directive may have it’s own services JavaScript
                       file, and in the case that it does it should also go into this subfolder.
                     # This allows us to have definitive components for our site so that a slider
                       will be a slider `directive` across the site. You would probably want to build it so
                       that you could pass in options to extend it.
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
```


# Original Source

Generalized comments incorporated for the sake of optimization analysis process.

Comment is denoted with leading `#` or `//` and follows folder or
file it refers to.

Files are put above sub-directories for better comprehension.

## A Better Structure and Foundation
```
index.html      // Lives at the root of front-end structure.
                // Will primarily handle loading in all the libraries and Angular elements.
app/            // The meat of the app.
----- app.module.js
----- app.routes.js
----- components/   // Each component is treated as a mini Angular app
                     # These will be the static views ,directives and services for that
                       specific section of the site (think an admin users section, gallery
                       creation section, etc). Each page should have it’s own subfolder
                       with it’s own controller, services, and HTML files.
                     # Each component here will resemble a mini-MVC application by having
                       a view, controller and potentially services file(s). If the component
                       has multiple related views, it may be a good idea to further separate
                       these files into ‘views’, ‘controllers’, ‘services’ subfolders.
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- shared/       // Acts as reusable components or partials of our site
                     # The shared folder will contain the individual features that
                       your app will have. These features will ideally be directives
                       that you will want to reuse on multiple pages.
                     # Features such as article posts, user comments, sliders, and others
                       should be crafted as AngularJS Directives. Each component here
                       should have it’s own subfolder that contains the directive
                       JavaScript file and the template HTML file.
                     # In some instances, a directive may have it’s own services JavaScript
                       file, and in the case that it does it should also go into this subfolder.
                     # This allows us to have definitive components for our site so that a slider
                       will be a slider `directive` across the site. You would probably want to build it so
                       that you could pass in options to extend it.
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
```

## Best Practices

### Modularize the Header and Footer

A good practice here would be to create a Core subfolder under components, and then a
subfolder for the Header and Footer and any additional components that will be shared
across many pages.

### Modularize the Routes

In the structure above we didn’t do this, but another good practice for very large
apps is to separate the routes into separate files. For example you might add a
`blogRoutes.js` file in the `/views/blog/` subfolder and there include only the routes
relevant to the blog such as `/blog/:slug`, `/blog/:slug/edit`, `blog/tags:/tags`, etc.

### Don’t Forget to Minify

If you do decide to opt in and build your AngularJS apps in a modularized fashion,
be sure to concatenate and minify your code before going into production. There are
many great extensions for both Grunt and Gulp that will help with this – so don’t be
afraid to split code up as much as you need.

You may not want to necessarily have just one giant `.js` file for your entire app,
but concatenating your app into a few logical files like:

*    `app.js` (for app initialization, config and routing)
*    `services.js` (for all the services)

### Keep the Names Consistent

This is more of a general tip, but this will save you a headache in the future,
when writing components and you need multiple files for the component, try to
name them in a consistent pattern. For example, `blogView.html`, `blogServices.js`,
`blogController.js`.