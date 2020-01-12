---
path: "/components/lists"
date: "2020-01-11"
title: "Lists"
category: "components"
---

# Lists

Lists are used to give different options to choose, for example removing an user from to the chatroom (userlist). There are 2 versions one with a bottom border and the other one without.

<div style="max-width: 200px">
	<ul class="ul">
		<li class="ul__li">
			Test Item
		</li>
		<li class="ul__li">
			Test Item
		</li>
	</ul>
	<ul class="ul">
		<li class="ul__li ul__li--without-border">
			Test Item
		</li>
		<li class="ul__li ul__li--without-border">
			Test Item
		</li>
	</ul>
</div>

<div class="code-with-notes margin-top-20">

```html
<ul class="ul">
	<li class="ul__li">
		Test Item
	</li>
	<li class="ul__li">
		Test Item
	</li>
</ul>
<ul class="ul">
	<li class="ul__li ul__li--without-border">
		Test Item
	</li>
	<li class="ul__li ul__li--without-border">
		Test Item
	</li>
</ul>
```

<div class="code-with-notes__note">

#### Notes

To use the list without the border just add **--without-border** to the item, this also resets the left padding.

</div>

</div>

## SCSS

```css
.ul {
	@include list-unstyled();
	&__li {
		padding: em(10) em(5);
		border-bottom: 1px solid $light-grey;
		&:last-child {
			border-bottom: none;
		}
		&--without-border {
			border: none;
			padding: em(10) 0;
		}
	}
}
```