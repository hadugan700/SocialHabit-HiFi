# KLM-Model 
| Operator | Description                                 | Associated Time                                                                                  |
|----------|---------------------------------------------|--------------------------------------------------------------------------------------------------|
| K        | Keystroke, typing one letter, number, etc. or function key like 'CTRL', 'SHIFT'      | Expert typist (90 wpm): 0.12 sec; Average skilled typist (55 wpm): 0.20 sec; Average non-secretarial typist (40 wpm): **0.28 sec**; Worst typist (unfamiliar with keyboard): 1.2 sec|
| H        | 'Homing', moving the hand between mouse and keyboard           | 0.4 sec                                                                                         |
| B / BB   | Pressing / clicking a mouse button          | 0.1 sec / 2*0.1 sec                                                                             |
| P        | Pointing with the mouse to a target         | 0.8 to 1.5 sec with an average of 1.1 sec (Can also use Fitts' Law)                                                     |
| D(nD, lD) | Drawing nD straight line segments of   length lD     | 0.9*nD + 0.16*lD                                                                                |
| M        | Subsumed time for mental acts:  sometimes used as 'look-at'            | 1.35 sec (1.2 sec according to [Olson and Olson  1995])                                                |

| No. | Task Description | Equation | Replaced Values | Answer |
|--- | ---|---|---|---|
| 1 | View the Group level and members, then go back and add a new friend. | $T = 2M + 5P + 5BB + 2H + 6K$ | $2 \times 1.35 + 5 \times 1.1 + 5 \times 0.2 + 2 \times 0.4 + 6 \times 0.28$ | 11.68 sec |
| 2 | View the friends added in the group and go back to friends. | $T = 2M + 2P + 2BB$ | $2 \times 1.35 + 2 \times 1.1 + 2 \times 0.2$ | 5.3 sec |
| 3 | Visit the profile, change the avatar and check the locked achievements. | $T = 4M + 6P + 8BB$ | $4 \times 1.35 + 6 \times 1.1 + 8 \times 0.2$ | 13.6 sec |
| 4 | View the locked achievements, and add two new tasks. | $T = 3M + 12P + 14BB + 16H + 76K$ | $3 \times 1.35 + 12 \times 1.1 + 14 \times 0.2 + 16 \times 0.4 + 76 \times 0.28$ | 47.73 sec |
| 5 | Create a task and complete it. Then create another and update it. Lastly create a third task and then delete it. | $T = 8M + 24P + 20BB + 16H + 76K$ | $8 \times 1.35 + 24 \times 1.1 + 20 \times 0.2 + 16 \times 0.4 + 76 \times 0.28$ | 68.88 sec |
