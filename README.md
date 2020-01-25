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

The script uses bare nodejs, and on every thread, it calculates 1+1 every 0.1ms.Using /Libary/LaunchAgents I created a plist that will start that when the OS launches, and that's pretty much everything.

### How to use

Note, this fix is useful, only if you suffer the same symptoms. If some kind of case where your audio doesn't depend on how much your CPU is utilized (I watched CPU utilization with `htop`), or it's the other way around, where your audio is good when the CPU is not utilized, and audio is bad when it is utilized, I don't really think this will help you. This is a really quick hack that in my case works.

1. Place the `speedkeeper.js` file wherever you want to, I keep it in my home folder.

2. Place the `speedkepper.plist` file in `/Library/LaunchAgents/`, and change the path to the script appropriately.

3. Restart the computer
