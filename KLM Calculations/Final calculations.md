# KLM-Model 
| Operator | Description                                 | Associated Time                                                                                  |
|----------|---------------------------------------------|--------------------------------------------------------------------------------------------------|
| K        | Keystroke, typing one letter, number, etc. or function key like 'CTRL', 'SHIFT'      | Expert typist (90 wpm): 0.12 sec; Average skilled typist (55 wpm): 0.20 sec; Average non-secretarial typist (40 wpm): **0.28 sec**; Worst typist (unfamiliar with keyboard): 1.2 sec|
| H        | 'Homing', moving the hand between mouse and keyboard           | 0.4 sec                                                                                         |
| B / BB   | Pressing / clicking a mouse button          | 0.1 sec / 2*0.1 sec                                                                             |
| P        | Pointing with the mouse to a target         | 0.8 to 1.5 sec with an average of 1.1 sec (Can also use Fitts' Law)                                                     |
| D(nD, lD) | Drawing nD straight line segments of   length lD     | 0.9*nD + 0.16*lD                                                                                |
| M        | Subsumed time for mental acts:  sometimes used as 'look-at'            | 1.35 sec (1.2 sec according to [Olson and Olson  1995])                                                |

## First task:
$T = 2 \times M + 5 \times P + 5 \times BB + 2 \times H + 6 \times K = 2 \times 1.35 + 5 \times 1.1 + 5 \times 0.2 + 2 \times 0.4 + 6 \times 0.28 = 11.68 sec$
## Second task:
$T = 2M + 2P + 2BB = 2 \times 1.35 + 2 \times 1.1 + 2 \times 0.2 = 5.3 sec$
## Third task:
$T = 4M + 6P + 8BB = 4 \times 1.35 + 6 \times 1.1 + 8 \times 0.2 = 13.6 sec$
## Fourth task:
$T = 3M + 12P + 14BB + 16H + 76K = 3 \times 1.35 + 12 \times 1.1 + 14 \times 0.2 + 16 \times 0.4 + 76 \times 0.28 = 47.73 sec$
## Fifth task:
$T = 8M + 24P + 20BB + 16H + 76K = 8 \times 1.35 + 24 \times 1.1 + 20 \times 0.2 + 16 \times 0.4 + 76 \times 0.28 = 68.88 sec$
