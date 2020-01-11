---
path: "/components/cards"
date: "2020-01-11"
title: "Cards"
category: "components"
---

# Cards

## Default

This card should be used as a wrapper (it comes with no content).

<div class="card margin-top-40 margin-bottom-40">
	<h2 class="h2">Awesome Space Mission</h2>
	<p class="p">This is a text blablablalb</p>
</div>

```html
<div class="card">
	<!-- YOUR CONTENT -->
</div>
```

## Preview Cards

These Cards show previews of given launches, there is a smaller version for the story based view and a bigger for the overview of all launches.

### Small

<div class="row">
	<a href="#" class="preview-card preview-card--small picture-01">
		<div class="preview-card__content">
			<span class="preview-card__content__timer--live">Live</span>
			<h3 class="preview-card__content__title">Ariane 5 ECA</h3>
		</div>
	</a>
	<a href="#" class="preview-card preview-card--small picture-01">
		<div class="preview-card__content">
			<span class="preview-card__content__timer">24hrs</span>
			<h3 class="preview-card__content__title">Ariane 5 ECA</h3>
		</div>
	</a>
</div>

<div class="code-with-notes">

```html
<div class="row">
	<a 
		href="#" 
		style="background-image: url('your-image.jpg')"
		class="preview-card preview-card--small">

		<div class="preview-card__content">
			<span class="preview-card__content__timer--live">Live</span>
			<h3 class="preview-card__content__title">Ariane 5 ECA</h3>
		</div>
	</a>
	<a 
		href="#" 
		style="background-image: url('your-image.jpg')"
		class="preview-card preview-card--small">

		<div class="preview-card__content">
			<span class="preview-card__content__timer">24hrs</span>
			<h3 class="preview-card__content__title">Ariane 5 ECA</h3>
		</div>
	</a>
</div>
```

<div class="code-with-notes__note">

#### Notes

These Cards **HAVE** to be used inside of an flex-box container or else they are not working probably. to enable the Live indicator (little red cirlce) use the modifier **--live** on the **preview-card\_\_content\_\_title** class. Use your own css class or set the background image with inline styles.

</div>

</div>

### Big

<div class="row">
<a href="#" class="preview-card preview-card--big picture-01">
	<div class="preview-card__content">
		<div class="preview-card__nav">
			<button class="btn preview-card__nav__item">
				<span class="icon btn__item btn__icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="share-alt" class="icon__svg svg-inline--fa fa-share-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 320c-28.6 0-54.2 12.5-71.8 32.3l-95.5-59.7c9.6-23.4 9.7-49.8 0-73.2l95.5-59.7c17.6 19.8 43.2 32.3 71.8 32.3 53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 13 2.6 25.3 7.2 36.6l-95.5 59.7C150.2 172.5 124.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c28.6 0 54.2-12.5 71.8-32.3l95.5 59.7c-4.7 11.3-7.2 23.6-7.2 36.6 0 53 43 96 96 96s96-43 96-96c-.1-53-43.1-96-96.1-96zm0-288c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path></svg>
				</span>
			</button>
			<button class="btn preview-card__nav__item">
				<span class="icon btn__item btn__icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="icon__svg svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
				</span>
			</button>
		</div>
		<h3 class="preview-card__content__title preview-card__content__title--center">Ariane 5 ECA</h3>
		<span class="preview-card__content__timer">2d 24hr 5m 1s</span>
	</div>
</a>
</div>

<div class="code-with-notes">

```html
<div class="row">
	<a 
		href="#" 
		style="background-image: url('your-image.jpb')"
		class="preview-card preview-card--big">

		<div class="preview-card__content">
			<div class="preview-card__nav">
				<button class="btn preview-card__nav__item">
					<span class="icon btn__item btn__icon">
						<svg></svg>
					</span>
				</button>
				<button class="btn preview-card__nav__item">
					<span class="icon btn__item btn__icon">
						<svg></svg>
					</span>
				</button>
			</div>
			<h3 class="preview-card__content__title preview-card__content__title--center">Ariane 5 ECA</h3>
			<span class="preview-card__content__timer">2d 24hr 5m 1s</span>
		</div>
	</a>
</div>
```

<div class="code-with-notes__note">

#### Notes

Works the same way as the smaller version. This version also has a litte navigation to like and share launches.

</div>

</div>