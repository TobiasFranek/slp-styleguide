---
path: "/components/tabs"
date: "2020-01-11"
title: "Tab Navigation"
category: "components"
---

# Tab Navigation

This Tab Navigation is used to navigate between to different components(React).


<nav class="tab-nav margin-top-40">
	<ul class="tab-nav__list">
		<li id="item1" class="tab-nav__list__item tab-nav__list__item--active">
			<button class="btn tab-nav__list__item__button" onclick="(() => { document.getElementById('item1').classList.add('tab-nav__list__item--active'); document.getElementById('item2').classList.remove('tab-nav__list__item--active'); })()">
				Sign In
			</button>
		</li>
		<li id="item2" class="tab-nav__list__item">
			<button class="btn tab-nav__list__item__button" onclick="(() => { document.getElementById('item2').classList.add('tab-nav__list__item--active'); document.getElementById('item1').classList.remove('tab-nav__list__item--active'); })()">
				Sign Up
			</button>
		</li>
	</ul>
</nav>


<div class="code-with-notes margin-top-40">

```html
<nav class="tab-nav">
	<ul class="tab-nav__list">
		<li class="tab-nav__list__item tab-nav__list__item--active">
			<button class="btn tab-nav__list__item__button">
				Sign In
			</button>
		</li>
		<li class="tab-nav__list__item">
			<button class="btn tab-nav__list__item__button">
				Sign Up
			</button>
		</li>
	</ul>
</nav>
```

<div class="code-with-notes__note">

#### Notes

To set the current item to active, add the modifier **--active** to the **tab-nav\_\_list\_\_button** element.

</div>

</div>

## SCSS

```css
.tab-nav {
	border-bottom: 1px solid $light-grey;
	&__list {
		@include list-unstyled();
		display: flex;
		margin-bottom: 5px;
		justify-content: space-around;
		&__item {
			position: relative;
			flex-grow: 1;
			&--active {
				&:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 3px;
					background: $primary;
					bottom: -7px;
				}
			}
			&__button {
				width: 100%;
				text-align: center;
				display: block;
				font-size: em(20);
				font-weight: 400;
			}
		}
	}
}
```