---
path: "/components/nav"
date: "2020-01-11"
title: "Navigation"
category: "components"
---

# Navigation

The Navigation is used on every page, except for the user specific pages, it changes items according to site it is on.

<nav class="nav margin-top-40 margin-bottom-40">
	<ul class="nav__list">
		<li class="nav__list__item">
			<a href="#" class="a nav__list__item__link  nav__list__item__link--active">
				<span class="icon nav__list__item__link__icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home-lg-alt" class="icon__svg svg-inline--fa fa-home-lg-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V368a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm282.69 121.28l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z"></path></svg>
				</span>
				Home
			</a>
		</li>
		<li class="nav__list__item">
			<a href="#" class="a nav__list__item__link">
				<span class="icon nav__list__item__link__icon">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="icon__svg svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
				</span>
				Favourites
			</a>
		</li>
		<li class="nav__list__item">
			<a href="#" class="a nav__list__item__link">
				<span class="icon nav__list__item__link__icon">
					<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list-ul" class="icon__svg svg-inline--fa fa-list-ul fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 368a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 24H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"></path></svg>
				</span>
				Lists
			</a>
		</li>
	</ul>
</nav>

<div class="code-with-notes">

```html
<nav class="nav">
	<ul class="nav__list">
		<li class="nav__list__item">
			<a href="#" class="nav__list__item__link  nav__list__item__link--active">
				<span class="icon nav__list__item__link__icon">
					<svg></svg>
				</span>
				Home
			</a>
		</li>
		<li class="nav__list__item">
			<a href="#" class="nav__list__item__link">
				<span class="icon nav__list__item__link__icon">
					<svg></svg>
				</span>
				Favourites
			</a>
		</li>
		<li class="nav__list__item">
			<a href="#" class="nav__list__item__link">
				<span class="icon nav__list__item__link__icon">
					<svg></svg>
				</span>
				Lists
			</a>
		</li>
	</ul>
</nav>
```

<div class="code-with-notes__note">

#### Notes

To set a link to active use the **--active** modifier on the navigation link (**nav\_\_list\_\_item\_\_link**)

</div>

</div>

## SCSS

```css
@mixin link-active {
	.nav__list__item__link__icon {
		color: $secondary;
	}
}

.nav {
	box-shadow: $box-shadow-3;
	padding: em(5) 20%;
	@include media-breakpoint-down(sm) {
        padding: em(5) 10%;
    }

	&__list {
		@include list-unstyled();
		display: flex;
		justify-content: space-between;
		margin-bottom: 0;
		&__item {
			&__link {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $grey-2;
				&:focus {
					outline: none
				}
				&:hover, &:focus {
					color: $grey-2;
					@include link-active();
					text-decoration: none;
				}
				&__icon {
					font-size: em(28);
					transition: all 0.4s ease;
					color: $font-color;
				}
				&--active {
					@include link-active();
				}
			}
		}
	}
}
```