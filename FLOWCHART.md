# Stages?
Superstructures in space<br>
Space mining<br>
Rocketry<br>
Aviation<br>
Automation<br>
Manufaction<br>
Tricking rocks to think (Computers)<br>
Electricity (I'd like to stick to green electricity)<br>
Mining<br>
Cave-man (THE START!)

# Flowchart
```mermaid
stateDiagram-v2
  1  : Caveman
  2  : Mining
  3  : Electricity
  4  : Manufacturing
  5  : Computers
  6  : Automation
  7  : Aviation
  8  : Rocketry
  9  : Space Mining
  10 : Superstructures

  state 1 {
    1.1a : Sticks
    1.1b : Rocks
    1.2  : Tools

    1.1a --> 1.2
    1.1b  --> 1.2
  }

  note right of 3
    I'd like to stick to green electricity
  end note

  [*] --> 1
  1 --> 2
  2 --> 3
  2 --> 4
  3 --> 5
  5 --> 6
  4 --> 6
  4 --> 7
  5 --> 8
  7 --> 8
  6 --> 9
  8 --> 9
  6 --> 10
  9 --> 10
  10 --> [*]
```

## Sub-Flowcharts
