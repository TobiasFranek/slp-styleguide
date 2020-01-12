---
path: "/components/overlays"
date: "2020-01-11"
title: "Overlays"
category: "components"
---

# Overlays

## Default

The default overlay just puts a black overlay on the screen and centers the content inside it.

<button class="btn btn--primary margin-right-20 margin-top-10" onclick="(() => { document.getElementById('overlay1').classList.toggle('overlay--closed') })()">
	<span class="btn__item">Open Overlay</span>
</button>

<div id="overlay1" class="overlay overlay--closed">
	<button class="btn overlay__close" onclick="(() => { document.getElementById('overlay1').classList.toggle('overlay--closed') })()">
		<span class="icon btn__item btn__icon">
			<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="icon__svg svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
		</span>
	</button>
	<div class="overlay__body">
		<div class="card">
			<p class="p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
		</div>
	</div>
</div>

<div class="code-with-notes">

```html
<div class="overlay overlay--closed">
	<button class="btn overlay__close">
		<span class="icon btn__item btn__icon">
			<svg></svg>
		</span>
	</button>
	<div class="overlay__body">
		<!-- YOUR CONTENT -->
	</div>
</div>
```

<div class="code-with-notes__note">

#### Notes

To open the Overlay remove the **--closed** modifier from the **overlay** class. The close button is optional, you can also implement your own one in the overlay body and remove the default one.

</div>

</div>

## Bottom Overlay

This Overlay should be used in combination of lists, and also if the user gets a prompt that he/she has to answer.

<button class="btn btn--primary margin-right-20 margin-top-10" onclick="(() => { document.getElementById('overlay2').classList.toggle('overlay--closed') })()">
	<span class="btn__item">Open Overlay</span>
</button>

<div id="overlay2" class="overlay overlay--closed">
	<button class="btn overlay__close" onclick="(() => { document.getElementById('overlay2').classList.toggle('overlay--closed') })()">
		<span class="icon btn__item btn__icon">
			<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="icon__svg svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
		</span>
	</button>
	<div class="overlay__body overlay__body--bottom card">
		<p class="p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
	</div>
</div>

<div class="code-with-notes margin-top-20">

```html
<div class="overlay overlay--closed">
	<!-- ... -->
	<div class="overlay__body overlay__body--bottom">
		<!-- YOUR CONTENT -->
	</div>
</div>
```

<div class="code-with-notes__note">

#### Notes

Add the **--bottom** modifier to the body.

</div>

</div>

## SCSS

```css
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
	&--closed {
		display: none;
	}
	&__close {
		position: absolute;
		right: 25px;
		top: 25px;
		color: #fff;
		z-index: 1001;
		&:hover, &:focus {
			.btn__icon:not(.btn__icon--floation) {
				color: #fff;
			}
		}	
	}
	&__body {
		max-width: 80%;
		@include media-breakpoint-down(xs) {
			max-width: 90%;
		}
		&--bottom {
			position: absolute;
			bottom: 0;
			min-height: 70%;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 0px;
			@include media-breakpoint-down(xs) {
				max-width: 100%;
			}
		}
	}
}
```