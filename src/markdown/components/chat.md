---
path: "/components/chat"
date: "2020-01-11"
title: "Chat Elements"
category: "components"
---

# Chat Elements

## Chat Bubbles

There are 2 different Bubble, one for all other users and one for message a user wrote himself.

<div class="margin-top-20 margin-bottom-20 padding-20 space-div-20 dark">
<div class="chat-bubble chat-bubble--other">
	<h4 class="chat-bubble__user-name">Alice:</h4>
	<p class="chat-bubble__text">Hello there!</p>
</div>
<div class="chat-bubble chat-bubble--self">
	<p class="chat-bubble__text">Hello there!</p>
</div>
</div>

<div class="code-with-notes">

```html
<div class="chat-bubble chat-bubble--other">
	<h4 class="chat-bubble__user-name">Alice:</h4>
	<p class="chat-bubble__text">Hello there!</p>
</div>
<div class="chat-bubble chat-bubble--self">
	<p class="chat-bubble__text">Hello there!</p>
</div>
```

<div class="code-with-notes__note">

#### Notes

The Chatbubble gets a different color according to the modifier (**--other** or **--self**). If you want to include the username in the comment add a h4 with the class **chat-bubble__user-name**.

</div>

</div>

## SCSS

```css
.chat-bubble {
	box-shadow: $box-shadow-1;
	display: inline-block;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 15px 20px;
	&--other {
		color: #fff;
		background: $primary;
		border-bottom-right-radius: 20px;
	}
	&--self {
		background: $primary-light;
		border-bottom-left-radius: 20px;
	}	

	&__user-name {
		font-family: $objectivity;
		margin: 0;
	}
	&__text {
		margin: 0;
		font-weight: 300;
	}
}
```