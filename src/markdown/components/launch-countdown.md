---
path: "/components/launch-countdown"
date: "2020-01-11"
title: "Launch Countdown"
category: "components"
---

# Launch Countdown

There are 2 different versions of the Launch Countdown (black or white). White should only be used on dark backgrounds.

<div class="launch-countdown margin-top-40">
	<h2 class="h2 launch-countdown__label">Next Launch</h2>
	<p class="launch-countdown__timer">5d 5h 5m 5s</p>
</div>
<div class="dark padding-20 margin-top-40">
	<div class="launch-countdown">
		<h2 class="h2 launch-countdown__label launch-countdown__label--white">Next Launch</h2>
		<p class="launch-countdown__timer launch-countdown__timer--white">5d 5h 5m 5s</p>
	</div>
</div>

<div class="code-with-notes margin-top-40">

```html
<div class="launch-countdown">
	<h2 class="h2 launch-countdown__label">Next Launch</h2>
	<p class="launch-countdown__timer">5d 5h 5m 5s</p>
</div>

<div class="launch-countdown">
	<h2 class="h2 launch-countdown__label launch-countdown__label--white">Next Launch</h2>
	<p class="launch-countdown__timer launch-countdown__timer--white">5d 5h 5m 5s</p>
</div>
```

<div class="code-with-notes__note">

#### Notes

If you want the white version just add a **--white** to the **timer** and **label** classes

</div>

</div>