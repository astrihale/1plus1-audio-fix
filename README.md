# 1plus1-audio-fix
Using Vanilla AMD OSX on my hardware, results in garbled audio, probably coming from the CPU downclocking itself after not being utilized for a while. This thing I solved with a background NodeJS script, that on every thread in some period of time calculates 1+1, to keep the thread occupied.

### My setup
AMD Ryzen 5 2400G
Gigabyte AB350M-DS3H
16GB HyperX 2400MHz DDR4
ASUS DUAL RX580 4GB
Crucial BX500 480GB SSD

And Catalina, 10.15.2, Vanilla.

### What does this solve? (Or atleast, what do I think this solves)
Well, I think my issue with my build is the fact that the clock speed goes down when its idling. That's what causes the issues, because the OS isn't aware of the change in clock speed. So, what I did is I made a script that will keep the CPU busy enough (but of course, also not extremely utilized) so the clock speed doesn't go down.

The script uses bare nodejs, and on every thread, it calculates some arbitrary arithmetic operation every 0.1ms. This was 1+1 before, and that's where the name came from.

### How to use

Note, this fix is useful, only if you suffer the same symptoms. If some kind of case where your audio doesn't depend on how much your CPU is utilized (I watched CPU utilization with `htop`), or it's the other way around, where your audio is good when the CPU is not utilized, and audio is bad when it is utilized, I don't really think this will help you. This is a really quick hack that in my case works.

#### Step 0.
If you don't have [Homebrew](https://brew.sh), install it right now.

#### Step 1.
Install `NodeJS` using `Homebrew`.
```
brew install node
```

#### Step 2
Clone the repository, download the code and place it somewhere
```
(if you want to clone it using git, use this)
git clone https://github.com/astrihale/1plus1-audio-fix
```

#### Step 3
Run the script, and leave the terminal window open
```
cd ./1plus1-audio-fix
node speedkeeper.js
```

It should be working now, test the audio.
This solution is not tidy at all, I'm very sorry to everyone who feels forced to leave the terminal window open. The `~/Library/LaunchAgents` solution does not work for this program as macOS stomps the process into the ground with priority and the solution is uneffective when run in such a way.
