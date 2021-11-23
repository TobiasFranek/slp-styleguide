---
path: "/components/icons"
date: "2020-01-11"
title: "Icons"
category: "components"
---

# Icons

If you want to use icons, you should only use them as inline svgs. You also need to wrap the svg tag with an parent that has the class **icon**, the icons also need an class (**icon__svg**) and it is advised to give the path a fill with the property **currentColor**

<div class="icon margin-bottom-20">
	<svg 
		class="icon__svg" 
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 384 512">
		<path 
			fill="currentColor" 
			d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z">
		</path>
	</svg>
</div>

```html
<div class="icon">
	<svg 
		class="icon__svg" 
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 384 512">
		<path 
			fill="currentColor" 
			d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z">
		</path>
	</svg>
</div>
```

## SCSS

```css
.icon {
	&__svg {
		width: 1em;
	}
}
```

## Used Icons

All Icons used in this Project are [Font Awesome](https://fontawesome.com/) Icons