---
title: tmux – the return
description: Here we go again. Trying to learn all those tmux shortcuts
author: Matteo
date: 2023-08-5T15:13:13.021Z
cover: maranhao.png
coverTitle: Pontal das Melancieiras - Brazil (June 2023)
language: en
tags:
  - tmux
  - shortcuts
  - dev environment
---

It's been ages that I've wanted to learn how to use [tmux](https://github.com/tmux/tmux), but I never found the time or motivation to actually do it.

It's one of those tools that you either begin learning as a junior at the start of your career, or you tinker with it on your personal laptop when you're feeling adventurous and have some spare time. 

Funny, this reminds me a lot of _vim_. I've attempted to learn all the shortcuts multiple times when I began my career as dev.
However, Textmate and later Sublime Text were always there to simplify my life. The terminal remained this enigmatic realm that I knew how to utilize, but not as good as I desired.

I've just hopped onboard a new startup ship, and it's the golden opportunity to dive into the depths of tmux. 

After being persuaded by the devs I've been following on YouTube, I'm making a triumphant return to the world of terminals (after getting comfortable with the one in VSCode) to learn some exciting new tricks.
Somehow, their disdain for `#soydevs` has motivated me to return to the native terminal (not even iTerm2).
I am even considering to get back to Linux 🙃

## What is tmux?
Where your t**erminal gains superpowers**.
Tmux is like a multitasking wizard that lets you split, manage, and juggle multiple terminal sessions with a flick of your keyboard. It works seamlessly over SSH too. It's a command center for productivity.

## My goal
The end goal? Reacquainting myself with (neo)vim.
But let's not kid ourselves, absorbing a gazillion keyboard shortcuts at warp speed is a surefire way to invite chaos.
So, for my first month on this learning adventure, it's all about tmux.

Here are the handy commands I've already wrapped my brain around.
Jotting them down on my blog is like creating a cheat sheet that's just a URL away, ready to rescue me from the depths of forgetfulness.
Yeah, I've already filed these babies away in my Obsidian notes. But you know the drill: _the more you jot, the less you blot_.


## YEP! Another Cheat Sheet

### NB: 
Many guides I've come across use always the `+` symbol, but I find it counterintuitive. 
The `+` sign is typically associated with key combinations where you press keys simultaneously.
On the other hand, I use the arrow `→` to indicate that a command follows the previous one in sequence.

- The "prefix key" is always `CTRL + b`
- Command mode `CTRL + b → :`
- Copy mode `CTRL + b → [`

### Install it on MacOS with brew. It's easy.
```bash
brew install tmux
```

###  Run it
```bash
tmux
```

### Split the screen vertically
`CTRL + b → %`

### Split the screen horizontally
`CTRL + b → "`

### Switch between panes
`CTRL + b → o`

### Scroll up/down
`CTRL + b → [ → arrows / mouse wheel(*)`

`q` to exit the copy mod

### Adjusting screen split pane sizes
- `CTRL + b → Esc + (arrow key)` works only one time

- To resize down, use: `CTRL + b → : → resize-p -D 2`  
- To resize up `resize-p -U 2`
- To resize left: `resize-p -L 2`  
- To resize right `resize-p -R 2`

### Kill current pane
`CTRL+b → x`

### [*]: Scroll with mouse wheel
This is a configuration command, so you have to set it *only once*.

Enter in Command Mode: `CTRL + b → :`

Then write:
```
setw -g mouse on
```

## Useful links

- [tmux-cheat-sheet](https://www.interviewbit.com/tmux-cheat-sheet)
- [intro-tmux](https://www.redhat.com/sysadmin/introduction-tmux-linux)


This post is WIP

