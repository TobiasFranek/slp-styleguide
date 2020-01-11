---
path: "/methodology/code-style"
date: "2020-01-11"
title: "Code Conventions"
category: "methodology"
---

# Code Conventions

## General Rules

* Use 1 tab as indent.
* Avoid nesting (max 3-4 levels) optimal 2.
* For fonts inside a component use em for a general styling like h1 use rem.
* Use em as often as you can.
* Write as many stuff into variables as possible.
* Always use single quotes.

## Structure

* App is written in React, split css into react components.
* Try to use as much sass syntax as possible (mixins, functions).
* If you are writing a mixin or function that could be used by multiple components, move it into the global mixin.scss or function.scss file.
* global.scss and variables.scss should be almost independent (except variables), so they can be imported easier by react components.
* use the BEM-Syntax as strictly as possible
