---
path: "/components/accordion"
date: "2020-01-11"
title: "Accordion"
category: "components"
---

# Accordion

The accordion component should be used to show optional content, so that the user can decide if he/she is going to read the information. 

<div class="card accordion margin-top-40">
	<div id="header" class="accordion__header" onclick="(() => { document.getElementById('header').classList.toggle('accordion__header--closed'); document.getElementById('arrow').classList.toggle('accordion__header__arrow--closed'); document.getElementById('body').classList.toggle('accordion__body--closed') })()">
		<h4 class="h4 accordion__header__headline">Description</h4>
		<div id="arrow" class="icon accordion__header__arrow">
			<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-down" class="icon__svg svg-inline--fa fa-angle-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path></svg>
		</div>
	</div>
	<div id="body" class="accordion__body">
		<p class="p accordion__body__p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
	</div>
</div>

<div class="code-with-notes margin-top-40">

```html
<div class="card accordion">
	<div class="accordion__header">
		<h4 class="h4 accordion__header__headline">Description</h4>
		<div class="icon accordion__header__arrow">
			<img src="./icons/angle-down-light.svg" >
		</div>
	</div>
	<div class="accordion__body">
		<p class="p accordion__body__p">Your Content</p>
	</div>
</div>
```

<div class="code-with-notes__note">

#### Notes

To close the accordion you have to add the **--closed** modifier to **accordion__body**, **accordion__header** and **accordion\_\_header\_\_arrow**.

</div>

</div>