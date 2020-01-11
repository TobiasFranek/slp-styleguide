---
path: "/components/buttons"
date: "2020-01-11"
title: "Buttons"
category: "components"
---

# Buttons

## Default

This is the Default Button, which means there is no modifier applied, it is mainly used to reset the browser button style and adding an different hover and focus effect. This button can also be used if you want a button but don't want any styling.

<div class="flex-container">
<button class="btn margin-right-20 margin-top-10">
	<span class="btn__item">Default</span>
</button>

<button class="btn margin-right-20 margin-top-10">
	<span class="btn__item btn__item--border-bottom">
		Default
	</span>
</button>

<button class="btn margin-right-20 margin-top-10">
	<span class="btn__item">
		Text with Icon
	</span>
	<span class="icon btn__item btn__icon">
		<svg 
			class="icon__svg" 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 384 512">
			<path 
				fill="currentColor" 
				d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z">
			</path>
		</svg>
	</span>
</button>

<button class="btn margin-right-20 margin-top-10">
	<span class="icon btn__item btn__icon">
		<svg 
			class="icon__svg" 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 384 512">
			<path 
				fill="currentColor" 
				d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z">
			</path>
		</svg>
	</span>
</button>
</div>

<div class="code-with-notes">

```html
<button class="btn">
	<span class="btn__item">
		Default
	</span>
</button>

<button class="btn">
	<span class="btn__item btn__item--border-bottom">
		Default
	</span>
</button>

<button class="btn">
	<span class="btn__item">
		Text with Icon
	</span>
	<span class="icon btn__item btn__icon">
		<svg>
		</svg>
	</span>
</button>

<button class="btn">
	<span class="icon btn__item btn__icon">
		<svg>
		</svg>
	</span>
</button>
```

<div class="code-with-notes__note">

#### Notes

You can use the modifier **--border-bottom** to lock the focus event. Every item in the button must be wrapped with the **btn__item** class, so display: flex inside the button works reliable. If you add a icon to the the button it has to have the **btn__item** and **btn__icon** class.

</div>

</div>

## Primary

This is the primary button and should always be used to indicate a certain action (f.e adding a List to the user).

<button class="btn btn--primary margin-right-20 margin-top-10">
	<span class="btn__item">Invite some Friends</span>
</button>

<div class="code-with-notes">

```html
<button class="btn btn--primary">
	<span class="btn__item">Invite some Friends</span>
</button>
```

<div class="code-with-notes__note">

#### Notes

This button should not be used with Icons. 

</div>

</div>

## Icon Buttons

Add a modifier to the button icon and you get a floating icon.

<div class="flex-container">

<button class="btn margin-right-20 margin-top-10">
	<span class="btn__item">With Text</span>
	<span class="icon btn__item btn__icon btn__icon--floating">
		<svg 
			class="icon__svg" 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 448 512">
			<path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"></path>
		</svg>
	</span>
</button>


<button class="btn margin-right-20 margin-top-10">
	<span class="icon btn__item btn__icon btn__icon--floating">
		<svg 
			class="icon__svg" 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 448 512">
			<path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"></path>
		</svg>
	</span>
</button>

</div>


<div class="code-with-notes">

```html
<button class="btn">
	<span class="btn__item">With Text</span>
	<span class="icon btn__item btn__icon btn__icon--floating">
		<svg>
		</svg>
	</span>
</button>

<button class="btn">
	<span class="icon btn__item btn__icon btn__icon--floating">
		<svg>
		</svg>
	</span>
</button>
```

<div class="code-with-notes__note">

#### Notes

This should be used, when there is no label in the button. You should also use this instead of the **primary button** when you want to use an icon in the button.

</div>

</div>