---
layout: article
category: articles
tags: technical

title: "Jekyll Tailwind Navbar"
---

_I've seen other examples of people using these navbars in more complex (and reasonable) ways, such as in full Rails applications using StimulusJS. If that's your use case, then this article is not for you. You may want to check out Matt Swanson's [Tailwind style CSS transitions with StimulusJS](https://boringrails.com/articles/tailwind-style-css-transitions-with-stimulusjs/) article or even Chris Oliver's [tailwindcss-stimulus-components](https://github.com/excid3/tailwindcss-stimulus-components) package for simple Tailwind components like this._

I wanted to update the navbar on my personal website. I think it looked fine, but there were some issues on smaller screens and mobile. Here's a couple of examples of what I mean:

<img width="1416" alt="Screenshot 2025-02-08 at 00 24 32" src="https://github.com/user-attachments/assets/301343a7-bbd2-4aec-bfd5-dd38cf83bfe4" />
<img src="https://github.com/user-attachments/assets/db90788a-1f73-47f0-aafb-73936c577dff" width="30%"></img>
<img src="https://github.com/user-attachments/assets/0bc45ac3-31c7-45ea-bc6f-78e402f1ecfa" width="30%"></img>
<img src="https://github.com/user-attachments/assets/1992ee31-1b4c-4898-80d3-d899c8f7098d" width="30%"></img>

I've used a [Tailwind UI component](https://tailwindui.com/components/application-ui/navigation/navbars#component-aaed25b299f2015d2c4276b98d463cee), with a few tweaks. This component even had other dropdown elements that I removed and did not even consider.

The main change was that this was mobile friendly and required javascript, which Tailwind do not provide. _(Source: https://tailwindui.com/documentation#using-html-and-your-own-js)_

It's very minor, but that's why this article exists. The navbar component comes with lots of extra confusing code, but it's actually quite simple. A standard nav, a mobile/smaller screen and a typical burger (3 line SVG), all with some premade classes and styles.

I use Jekyll and the navbar is on every page of my personal website, so I added my own javascript directly into my _includes/head.html file:

```
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });
</script>
```

A very simple, add and remove the `hover` class from the relevant elements.

### The end result

Full:

<img width="1413" alt="Screenshot 2025-02-08 at 12 21 54" src="https://github.com/user-attachments/assets/ddc4a299-b1f2-4fc1-9a1b-59008e558c89" />

Expanded:

<img width="387" alt="Screenshot 2025-02-09 at 17 10 30" src="https://github.com/user-attachments/assets/3c48058d-6fd5-4744-ae83-40cb37ffdac1" />

Collapsed:

<img width="377" alt="Screenshot 2025-02-09 at 17 10 46" src="https://github.com/user-attachments/assets/91332f33-077b-4da3-aa63-e98a4fb55629" />

Video:

https://github.com/user-attachments/assets/7f195ab3-1293-4a24-add6-3ebaf4942047

### Some gotchas
* The component already came with `mobile-menu`, but I had to add `menu-toggle` myself.
* I had issues with the hover effect on the smaller menu. I noticed this on my laptop, in a "mobile view" in my browser, so I didn't fix this at all. I figured anyone on mobile wouldn't be hovering.
* Worth testing this on your mobile. I noticed that the menu doesn't show at all on mobile anyway. I'm using an iPhone 15 Pro Max. (I'll get round to fixing this at some point and maybe I'll update this article with those changes too)

### TL:DR

Make sure the right elements have a id and just toggle the `hidden` class on click.
