---
path: "/components/inputs"
date: "2020-01-11"
title: "Inputs"
category: "components"
---

# Inputs

## Default

Default only resets the standard Browser input. It can also be used as an read only field, to only emit information.

<div class="flex-container space-div-20 margin-bottom-20">
<div class="input-group">
	<label class="input-group__label" for="email">Email</label>
	<input class="input-group__input" placeholder="Email" type="text" id="email">
</div>
<div class="input-group">
	<label class="input-group__label" for="email">Email</label>
	<input class="input-group__input" placeholder="Email" value="admin@test.com" readonly type="text" id="email">
</div>
</div>

```html
<div class="input-group">
	<label 
		class="input-group__label" 
		for="email">
		Email
	</label>

	<input 
		class="input-group__input" 
		placeholder="Email" 
		type="text" 
		id="email">
</div>

<div class="input-group">
	<label 
		class="input-group__label" 
		for="email">
		Email
	</label>

	<input 
		class="input-group__input" 
		placeholder="Email" 
		value="admin@test.com" 
		readonly 
		type="text" 
		id="email">
</div>
```

## Primary

This Input should be used for all cases, except read only input field. If you want to give the user feedback about an error, you can add an **span** with the class **input-group__error**.

<div class="margin-bottom-40">
<div class="input-group">
	<input class="input-group__input input-group__input--primary" type="text" id="email">
	<label class="input-group__label input-group__label--primary" for="email">Email</label>
</div>
<div class="input-group">
	<input class="input-group__input input-group__input--primary input-group__input--primary--focus" type="text" id="email">
	<label class="input-group__label input-group__label--primary input-group__label--primary--focus" for="email">Email</label>
</div>
<div class="input-group">
	<span class="input-group__error">Email cannot be empty</span>
	<input class="input-group__input input-group__input--primary input-group__input--primary--error" type="text" id="email">
	<label class="input-group__label input-group__label--primary input-group__label--primary--error" for="email">Email</label>
</div>
</div>

```html
<div class="input-group">
	<input 
		class="input-group__input input-group__input--primary" 
		type="text" 
		id="email">
	<label 
		class="input-group__label 
		input-group__label--primary" 
		for="email">Email</label>
</div>
<div class="input-group">
	<input 
		class="input-group__input input-group__input--primary input-group__input--primary--focus" type="text" 
		id="email">
	<label 
		class="input-group__label input-group__label--primary input-group__label--primary--focus" for="email">Email</label>
</div>
<div class="input-group">
	<span class="input-group__error">Email cannot be empty</span>
	<input 
		class="input-group__input input-group__input--primary input-group__input--primary--error" type="text" 
		id="email">
	<label 
		class="input-group__label input-group__label--primary input-group__label--primary--error" for="email">Email</label>
</div>
```

<div class="margin-top-20">

#### Notes

To use the primary input you have to add the **--primary** modifier, for the **--primary** modifier there are either the **--focus** to lock focus and the **--error** modifier to display an error in the input.

</div>

## Secondary

This input field should only be used in very specific cases, only if the design requires it, for example the **comment box** is an secondary input

<div class="flex-container-with-overflow space-div-20">
<div class="input-group">
	<label 
		class="input-group__label input-group__label--secondary" 
		for="email">Comment</label>
	<input 
		placeholder="Say Something..." 
		class="input-group__input input-group__input--secondary" 
		type="text" 
		id="email">
</div>
<div class="input-group">
	<label class="input-group__label input-group__label--secondary input-group__label--secondary--error" for="email">Comment</label>
	<input placeholder="Say Something..." class="input-group__input input-group__input--secondary input-group__input--secondary--error" type="text" id="email">
</div>
</div>

<div class="code-with-notes">

```html
<div class="input-group">
	<label 
		class="input-group__label input-group__label--secondary" 
		for="email">Comment</label>
	<input 
		placeholder="Say Something..." 
		class="input-group__input input-group__input--secondary" 
		type="text" 
		id="email">
</div>
<div class="input-group">
	<label 
		class="input-group__label input-group__label--secondary input-group__label--secondary--error" for="email">Comment</label>
	<input 
		placeholder="Say Something..." 
		class="input-group__input input-group__input--secondary input-group__input--secondary--error" type="text" 
		id="email">
</div>
```

<div class="code-with-notes__note">

#### Notes

This works the same way as for the **primary** input, except it cannot lock the focus state.

</div>

</div>