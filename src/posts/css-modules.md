---
title: CSS Modules
description: Introduction to CSS Modules
author: Matteo
date: 2017-06-20T15:13:13.021Z
language: en
tags:
  - CSS
  - Stylesheets
---

These days there are several problems when you’re writing cascading style sheets. CSS files usually grow really fast, and you’ve probably experienced the following difficulties:

- Classes defined in global scope;
- Dependencies;
- Elimination of dead code;
- Minification;
- Sharing constants;
- Non-deterministic resolution;
- Encapsulation.

In addition to these points, when a development team doesn’t adopt good conventions and best practices, all the style sheets become __rather difficult to maintain__ and __extend__.

This is mainly because CSS does not have any kind of native solution for writing __dynamic results__. It is also __too permissive__ in relation to global styles.

In other words, everything is completely global, every selector has complete access to the entire page, and even worse, every selector can be (re)defined in multiple files.

In this scenario, the side effects can multiply and be completely unpredictable. Naming collisions and long subtree selectors can easily produce brittle and unmaintainable CSS files.

It’s like a house of cards, where simple changes, such as updating a background color of a button, can be a nightmare. All those problems become even bigger as soon as your project grows in size, complexity, and team members.

Most of the solutions proposed over the past few years have handled the writing issue very well including writing and organizing methodologies (e.g.: OOCSS, SMACSS, BEM) and preprocessors (e.g.: SASS, Less, Stylus). Before them, building a function and reusing a _definition_ were quite hard to implement.

Although, even if they are very easy to maintain for the developers, these solutions failed to solve the architectural problems of CSS.

__These methologies have increazed the complexity of the style architecture.__

Moreover, the CSS should be completely agnostic to the application. __Low specificity is key to good CSS design.__ Portability and reusability are two important aspects of it. Simply put, every application you build shouldn’t be dependent to its CSS files.

At this point, the questions are:

- How do we work around the architectural problems of CSS? How to have maintainability without an unnecessarily complex architecture?
- How to scope and reuse styles as an integral part of the application?
- How to stop worrying about side effects?


<img class="md:mx-auto" src="/static/img/css-modules-logo.png" title="CSS modules logo" />

## CSS Modules to the rescue
Fortunately, the guys at CSS Modules have solved the functional problems we’ve been facing when using CSS in component-based JavaScript applications (e.g.: React, Angular, Ember).

It represents a real paradigm break.

When we started to develop Freehand, we decided to introduce CSS modules. We’ve been adding a ton of new features and components so far, and it’s now super easy and fun to work with well organized CSS files.

## How it works
Here is a simple component (button.js):

```js
import styles from './button.css';

export const button = `
  <button class='${ styles.button }'>
    Like
  </button>
`;
```

and its CSS file (button.css):

```css
.button {
  font-size: .8em;
  color: #FFF;
  background-color: #333;
  padding: .5em;
  border-radius: .5em;
}
```

It is indeed a very simple component, yet it’s perfect for the sake of clarity.

Notice that the component variable is being exported. This will give more control of when and where it will be used in the file it is imported into.

Let’s then use this component and print the button it creates in the file (list.js):

```js
import { button } from './button.js';

let list = `
  <ul>
    <li>Plo Koon ${ button }</li>
    <li>Yoda ${ button }</li>
    <li>Luke Skywalker ${ button }</li>
  </ul>
`;

document.write( list );
```

You can immediately see that instead of writing the button multiple times in each file (list), a new file has been created, which exports the button component so that it can be freely used by other components. This component already has its styles loaded with it. You can notice that we’ve already __reused styles simply by an architectural decision.__

The possibility of finally having __a sense of scope and security regarding side-effects__ takes a lot of weight from the developers.

__Styles are scoped by default.__

CSS Modules are basically files that are “local”. Anything that one writes in this module doesn’t leak out in other files.

Another benefit is that we can get rid of several bad practices introduced by the other solutions mentioned above. For instance, BEM naming conventions introduce unreadable classnames or preprocessors like SASS and Less generate super long and heavy CSS files. With CSS components everything is much more simple, neat and it has its own order.

## Conclusion
One thing to keep in mind, when using CSS Modules, is that the main application is for __componentized systems.__

The way in which you implement the components can influence their reusability. In particular, since we consider styles as an integral part of a component, we do not need to rewrite the same styles anywhere else, we just have to reuse the entire component, including CSS. It’s like a Lego brick with specific properties.

Some advantages of creating reusable styles especially in large projects are:

__Re-use between projects__ it will be possible to use the same module in different projects with ease. This would be quite useful in the case of a client with multiple projects following a similar styleguide.

__Declared dependencies__ the module will be explicitly declared as a dependency of the project, which will make it easy to identify where the reused styles come from.

__Building libraries__ for open-source this is fantastic! Exporting, sharing and importing libraries is a cakewalk.

---

Original post was published in InVision Engineering Blog:
[Introduction to CSS Modules](https://engineering.invisionapp.com/post/introduction-css-modules)