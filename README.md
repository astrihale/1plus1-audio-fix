# 1plus1-audio-fix
Using Vanilla AMD OSX on my hardware, results in garbled audio, probably coming from the CPU downclocking itself after not being utilized for a while. This thing I solved with a background NodeJS script, that on every thread in some period of time calculates 1+1, to keep the thread occupied.
