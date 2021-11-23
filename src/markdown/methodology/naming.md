---
path: "/methodology/naming"
date: "2020-01-11"
title: "Naming Conventions"
category: "methodology"
---

# Naming Conventions

We are using the BEM-Syntax (Block Element Modifier) [BEM](http://getbem.com/naming/). BEM helps use to improve maintainability, reusability and readability. It also provides a unified aproach for CSS-Development so that all our Developers are speaking the same language.

## How to use BEM

<div class="margin-top-20"></div>

### Block

Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.


```html
<div class="block"></div>
```

<div class="margin-top-20"></div>

### Element
Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

```html
<div class="block">
	<div class="block__element"></div>
</div>
```

<div class="margin-top-20"></div>

### Modifier

Flags on blocks or elements. Use them to change appearance, behavior or state.

```html
<div class="block block--big">
	<div class="block__element"></div>
</div>
```

## Using BEM in Sass

If you are working with sass try to use nesting as much as possible to avoid duplicated code.

```sass

.block {
	&--modifier {

	}

	&__element1 {
		&--modifier {

		}
	}

	&__element2 {

	}
}

```