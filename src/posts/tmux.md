# tmux

I've been tinkering with [tmux](https://github.com/tmux/tmux) for quite a while now.
It's one of those tools that you either mess around with on your personal laptop when you're feeling adventurous,
or you jump into when you start a new gig and nobody's really judging if you're a productivity wizard from the get-go.

Guess what? I've just hopped onboard a new startup ship, and it's the golden opportunity to dive into the depths of tmux. 
Somewhere between a four-times-as-long-as-it-should've-been interview process (yep, you read that right), 
and the persuasive devs I started following on YouTube, I'm making a grand return to the terminal world
(after cozying up to the one in VSCode) to pick up some shiny new tricks.
Somehow, their disdain for `#soydevs` has motivated me to return to the terminal (not even iTerm2), I mean the native terminal app.
I am even considering to get back to Linux 🙃

## What is tmux?
Where your terminal gains superpowers.
Tmux is like a multitasking wizard that lets you split, manage, and juggle multiple terminal sessions with a flick of your keyboard. It works seamlessly over SSH too. It's a command center for productivity.

## My goal
The end goal? Reacquainting myself with (neo)vim.
But let's not kid ourselves, absorbing a gazillion keyboard shortcuts at warp speed is a surefire way to invite chaos.
So, for my first month on this learning advanture, it's all about tmux.

Here are the handy commands I've already wrapped my brain around.
Jotting them down on my blog is like creating a cheat sheet that's just a URL away, ready to rescue me from the depths of forgetfulness
Yeah, I've already filed these babies away in my Obsidian notes. But you know the drill: the more you jot, the less you blot.


## YES! Another Cheat Sheet

### NB: 
Many guides I've come across use always the `+` symbol, but I find it counterintuitive. 
The `+` sign is typically associated with key combinations where you press keys simultaneously.
On the other hand, I use the arrow `→` to indicate that a command follows the previous one in sequence.

- The "prefix key" is always `CTRL + b`
- Command mode `CTRL + b → :`
- Copy mode `CTRL + b → [`

### install it on MacOS with brew. It's easy.
`brew install tmux`

###  run it
`tmux`

### Split the screen vertically using this shortcut
`CTRL + b → %`

### Split the screen horizontally using this shortcut
`CTRL + b → "`

### Switch between screens using this shortcut
`CTRL + b → o`

### Scroll up/down
`CTRL + b → [ → arrows / mouse wheel (*) `
`q` to exit the copy mode

### *: Scroll with mouse wheel - config command
This is a configuration command, so you have to set it only once.

Enter in Command Mode: `CTRL + b → :`

Then write:
```
setw -g mouse on
```

### Adjusting screen split pane sizes
- `CTRL + b → Esc + (arrow key)` works only one time

- To resize down, use: `CTRL + b → : → resize-p -D 2`  
- To resize up `resize-p -U 2`
- To resize left: `resize-p -L 2`  
- To resize right `resize-p -R 2`

## useful links

- [tmux-cheat-sheet](https://www.interviewbit.com/tmux-cheat-sheet)

