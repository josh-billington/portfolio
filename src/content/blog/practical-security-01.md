---
title: "Don't let your dependencies manage you"
description: 'Practical Security 01'
pubDate: 'Jun 16 2026'
---

You've built your first product with the help of Cursor, Codex, or Claude Code. You've nailed that product hunt launch, or you've just got your first 100 customers, and you get that notification - a critical security vulnerability... 

There's no doubt that it's faster and more productive to use these tools to develop your product - but how do you do that while ensuring you don't get pwn'd? 

This is the first in a series of posts on the practical side of developing secure software. For transparency, I'm not a security expert - but these are the practical security habits that I'm taking forward from my time at Arctic Wolf Networks. 

* Most of the examples in this post are drawn from npm

### The npm ecosystem 




- npm has it's own issues as an ecosystem 
- number of large incidents on popular packages in the last few years 
- ai is making it worse 



### Try before you buy

If you're using npm packages, before you install any package go to npmjs.com and look up the package.

What you want to know is: How many dependencies does the package have? And when was the last time the package was updated? If there's a lot of dependencies and the package hasn't been updated in a few years - you should reconsider. 

Snyk has a free resource: https://security.snyk.io, where you can look up packages from a number of ecosystems and get a clear picture on repository health, known vulnerabilities, and if there are fixed upgrade paths for those vulnerabilities. 

### Pay your bills

Managing your dependencies doesn't stop with building gates for what comes in. Packages are constantly evolving as their developers add new features, fix bugs, and patch vulnerabilities. 

3. Again specific to the npm ecosystem: add npm audit to your pre-deployment process or testing workflows - it's simple and provides excellent value. 


### What do I fix first?

Now that you've found the vulnerabilities, how do you decide what gets fixed first?

I like to use a simple series of decision gates to prioritize and resolve vulnerabilities. 

1. 





Prioritizing dependencies patches, testing, etc... 




