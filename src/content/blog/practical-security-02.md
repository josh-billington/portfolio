---
title: "Keep your secrets secret"
description: 'How to setup WSL with 1Password Environments'
pubDate: 'Oct 15 2026'
---

You’ve got Cursor, Codex, or Claude Code shipping more features in a day than you used to ship in a quarter. It’s reading files, running scripts, and starting your dev server. And sitting right there in the root of your project is a .env file with your database password and that API token you set to never expire. 

.env files were always a bit of a liability, I think every developer has committed a .env file or secret to source control at least once. But now we’ve handed the keys to agents that read everything in the repo, run commands on our behalf, and can be nudged by whatever ends up in their context window. 

The fix isn’t complicated: stop storing secrets in files, and inject them at runtime instead. This post walks through how I set that up with 1Password Environments on WSL.

## What do you need?
First, install 1Password Desktop on Windows. In settings, go to Developer and turn on "Integrate with 1Password CLI".

Next, you’ll need to install the 1Password CLI. As of right now you need the beta: https://releases.1password.com/developers/cli-beta/.

Unzip it, I used this path: `C:\Tools\1PasswordCLI-Beta\`, from WSL that's: `/mnt/c/Tools/1PasswordCLI-Beta/op.exe`

It's counterintuitive, but we use the Windows CLI so that you can still log in to 1Password through Desktop and Windows Hello. 

WSL needs to know where to find it, so add these to your ~/.bashrc:

```bash
alias op="/mnt/c/Tools/1PasswordCLI-Beta/op.exe"
export OPRUN_OP_CMD="/mnt/c/Tools/1PasswordCLI-Beta/op.exe"
```

Then reload:

```bash
source ~/.bashrc
```

And check that it worked:

```bash
op --version
```

## Install oprun 

oprun is a small open-source project that reimplements 1Password CLI's op run utility in bash for WSL. The original project (https://github.com/jbillington-tnrd/oprun.sh) doesn't currently support Environments, so I've forked it and added that support here: https://github.com/josh-billington/oprun.sh.

```bash
git clone https://github.com/josh-billington/oprun.sh.git ~/code/oprun.sh
sudo cp ~/code/oprun.sh/oprun /usr/local/bin/oprun
sudo chmod +x /usr/local/bin/oprun
```

## Run it!

```bash
oprun --environment=<environment-id> ./start.sh
```

That's it. Your secrets are safe with me.
