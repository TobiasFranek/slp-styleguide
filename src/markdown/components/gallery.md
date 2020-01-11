---
path: "/components/gallery"
date: "2020-01-11"
title: "Gallery"
category: "components"
---

# Gallery

This component is used to display multiple images, and also expanding them on click.

<div class="gallery margin-top-40">
	<a class="gallery__item" onclick="(() => { document.getElementById('gallery').classList.toggle('overlay--closed') })()">
		<img src="../../images/01.jpg" alt="rocket launch" class="gallery__item__image">
	</a>
	<a class="gallery__item" onclick="(() => { document.getElementById('gallery').classList.toggle('overlay--closed') })()">
		<img src="../../images/01.jpg"  class="gallery__item__image">
	</a>
	<a class="gallery__item" onclick="(() => { document.getElementById('gallery').classList.toggle('overlay--closed') })()">
		<img src="../../images/01.jpg"  class="gallery__item__image">
	</a>
	<a class="gallery__item" onclick="(() => { document.getElementById('gallery').classList.toggle('overlay--closed') })()">
		<img src="../../images/01.jpg"  class="gallery__item__image">
	</a>
	<a class="gallery__item" onclick="(() => { document.getElementById('gallery').classList.toggle('overlay--closed') })()">
		<img src="../../images/01.jpg"  class="gallery__item__image">
	</a>
</div>

<div id="gallery" class="overlay overlay--closed">
	<button class="btn overlay__close" onclick="(() => { document.getElementById('gallery').classList.toggle('overlay--closed') })()">
		<span class="icon btn__item btn__icon">
			<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="icon__svg svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
		</span>
	</button>
	<div class="overlay__body gallery-fix-body">
		<img class="gallery__item__image gallery__item__image--overlay" src="../../images/01.jpg">
	</div>
</div>

<div class="code-with-notes margin-top-40">

```html
<div class="gallery">
	<a href="img/image.jpg" class="gallery__item">
		<img class="gallery__item__image" src="img/image.jpg">
	</a>
	<!-- ... -->
</div>

<div class="overlay overlay--closed">
	<!-- ... -->
	<div class="overlay__body">
		<img class="gallery__item__image gallery__item__image--overlay" src="img/image.jpg">
	</div>
</div>
```

<div class="code-with-notes__note">

#### Notes

It is advised to add an overlay that displays the clicked image. 

</div>

</div>