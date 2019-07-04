
# An American 10 Pin Bowling Application Score Calculator

- One game of bowling is made up of ten frames.
- In each frame, the bowler has two throws to knock down all the pins.
- Possible results for a frame:
    - Strike (‘X’): the bowler knocks down all 10 pins on the first throw.
    The frame is over early. The score for the frame is 10 plus the total pins knocked
    down on the next two throws.
    - Spare (‘/’): the bowler knocks down all 10 pins using two throws.
    The score for the frame is 10 plus the number of pins knocked down on the next
    throw.
    - Open frame: the bowler knocks down less than 10 pins with his two throws. The score
    for the frame is the total number of pins knocked down.

- The game score is the total of all frame scores.
- Special rules for the 10th frame:
    - A strike in the tenth frame gives the bowler two bonus throws, to fill out the scoring
    formula for the last frame.
    - A spare in the tenth frame gives the bowler one bonus throw, to fill out the scoring
    formula for the last frame.
    - These throws count as part of the 10th frame.
    - The process does not repeat – for example, knocking down all 10 pins on a bonus
    throw does not provide any additional bonus throws.