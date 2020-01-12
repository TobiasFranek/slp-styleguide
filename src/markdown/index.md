---
path: "/"
date: "2020-01-11"
title: "Introduction"
category: "index"
---

# Introduction

This is the Styleguide for the Multimediaproject MMP2a "SLP". It should assure consistent CSS and coding quality for designers and developers on this project.

## Idea

SLP, which stands for Space Launch Platform, is an app where you can find all upcoming rocket launches across the world. We really wanted to push the idea of community so we integrated a chat so everyone can chat with invited users during an ongoing launch. Every user can organize his/her launches into lists, so he/she can build something like an playlist of rocket launches for his/her friends.

## Installation

All the base components are separated into one npm package. You can install it via npm. The package uses bootstrap reboot, grid, function, mixins and variables. Take a look at the [repo](https://github.com/TobiasFranek/slp-base)

```bash
$ npm install slp-base
```

Under the ```/dist/``` folder you will find all the compiled styles (**main.css**). If you want to use the sass src files, includes this in your **main.scss**.

```scss
$font-directory: '~slp-base/src/fonts';

@import '~slp-base/src/scss/main.scss';
```

The ```$font-directory``` variable points to the folder where all the font files are.

## All Default Variables

```scss
// import mixins and functions
@import 'functions';
@import 'mixins';

/** GLOBAL SETTINGS */
$font-directory: '../fonts';

/** PRIMARY COLORS **/
$primary: #3B497E;
$primary-light: #EBEBFF;
$secondary: #00175E;
$font-color: #333;

/** GREYS **/
$grey-1: #555555; 
$grey-2: #707070;
$light-grey: #CECECE;

/** UTILITY COLORS **/
$success: #00BA39;
$error: #D61E1E;
$red: #D82E2E;
$facebook: #4267B2;
$twitter: #1DA1F2;

/** FONTS **/
$objectivity: 'Objectivity', sans-serif;
$lato: 'Lato', sans-serif;

/** BOX SHADOWS **/
$box-shadow-1: 0px 0px 12px rgba(0,0,0,0.16);
$box-shadow-2: 0px 3px 14px rgba(0,0,0,0.16);
$box-shadow-3: 0px -5px 10px rgba(0,0,0,0.16);

/** BORDER RADIUS **/ 
$default-radius: 14px;
```