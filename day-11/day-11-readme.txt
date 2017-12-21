This code solves parts one and two of Day 11 of the Advent of Code challenge.

Problem:

--- Day 11: Hex Ed ---
Crossing the bridge, you've barely reached the other side of the stream when a program comes up to you, clearly in distress. "It's my child process," she says, "he's gotten lost in an infinite grid!"

Fortunately for her, you have plenty of experience with infinite grids.

Unfortunately for you, it's a hex grid.

The hexagons ("hexes") in this grid are aligned such that adjacent hexes can be
found to the north, northeast, southeast, south, southwest, and northwest:

  \ n  /
nw +--+ ne
  /    \
-+      +-
  \    /
sw +--+ se
  / s  \

You have the path the child process took. Starting where he started,
you need to determine the fewest number of steps required to reach him.
(A "step" means to move from the hex you are in to any adjacent hex.)

For example:

ne,ne,ne is 3 steps away.
ne,ne,sw,sw is 0 steps away (back where you started).
ne,ne,s,s is 2 steps away (se,se).
se,sw,se,sw,sw is 3 steps away (s,s,sw).

Part two:
How many steps away is the furthest he ever got from his starting position?

---

Solution explanation:

In this grid, each diagonal step yields a change of .5 on the y-axis, 1 on the
x-axis.

Since each diagonal step produces a .5 y-axis change, if the absolute x-axis change
produced by the path (relative to its origin) is twice or greater than the y-axis
change ( (xChange/2)>=yChange ), the  y-axis change can be accomplished with the
diagonal steps needed to produce the x-axis change. Therefore, the most
direct route consists of only diagonal steps.

Otherwise, if there is change on both axes and yChange>(xChange*2), the
shortest route is xChange + (yChange-(xChange*.5)).

To calculate part two, I logged the distance from the origin at each step
and compared it to the current maximum distance (replacing if greater).
