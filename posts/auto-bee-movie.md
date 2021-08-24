---
title: Bee Movie Script
date: "2021-08-18"
---

The bee movie, originally a children's movie has become quite a meme online. After some time in a voice chat I went into a competition with <a href="https://polar.blue">polar</a> to see who could write up a script to spam a user's dms with the entire bee movie script.

<br/>
<a class="text-3xl text-bold" href="#">
Writing The Script
</a>
<br/>

When I wrote this script discord had a message limit of 2000. Before sending the script I had to paginate the text into ~2k character segments. This was pretty simple to do and I wrote a quick generator.
<br/>

<a class="text-2xl text-bold" href="#">
Pagination
</a>
<br/>
```py
def parse(s: str, *, n: int = 1980) -> List[str]:
    for i in range(len(s) // n):
        yield str(s[(i * n) : (i * n) + n])
```

In the generator it accepted a string of the script and the number of chars to paginate. I run an integer division on the length of the text to "chunk" the text and then yield a substring of the text.

The way this works is quite simple. Let's start with an example text "`abcdefgh`". Let's also set n to 2 so it will be easier to understand.
<br/>
On the first iteration the index (i) is 0. When i is 0 we can see the math

```py
yield s[(0 * n) : (0 * n) + n]
```

We already know that n is 2 so we can substitute that in too.

```py
yield s[(0 * 2) : (0 * 2) + 2]
```

if we simplify the equation then the first response from the generator will be

```py
yield s[0 : 2]
```

Since python starts at 0 and doesn't include the final character then the output of the first run would be `ab`.

On the second iteration i is 1.

If we substitute i as 1 and n for 2.

```py
yield s[(1 * 2) : (1 * 2) + 2]
```

The computer solves it down to

```py
yield s[2:4]
```

which returns the next 2 characters, `cd`.

This generator will run until all of the characters have been sent.
<br/>
<a class="text-2xl text-bold" href="#">
Sending the text
</a>

````py
for i in parse(script):
    pyperclip.copy("```\n" + i + "\n```")
    pyautogui.hotkey("ctrl", "v")
    press("enter")
    time.sleep(1)
````

Now that I had paginated the data I needed to send it as efficiently as possible. Discord had a ratelimit of 1 message / second but there was a substantial delay when typing 2k characters. Even when using direct windows keyboard commands the text would display agonizingly slow (500 wpm). After a bit of fiddling around I found an easy solution. Using a small python module called **pyperclip** I was able to copy the text to my computer and then only had to send two keyboard commands (ctrl + v) and the text would be pasted and sent into the chat.

This was so efficient that I didn't have to record the output time and subtract that from my `time.sleep` statement!

<br/>
<a class="text-3xl text-bold" href="#">
Conclusion
</a>

<br/>
This was a great mini sprint and I plan on using pyperclip in my future typing macros as it destroys the performance of most auto-typers.
