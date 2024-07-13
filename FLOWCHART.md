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
Primative (THE START!)

# Flowchart
```mermaid
stateDiagram-v2
  1  : Primative
  1.5 : Agriculture
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
    I'd like to stick <br> to green electricity
  end note

  note left of 1.5
    some sort of optional <br> branch that starts down <br> human management
    end note

  [*] --> 1
  1 --> 1.5
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
  10--> 1 : Prestigate
```

## Flushed-Flowcharts
```mermaid
stateDiagram-v2

 1  : Primative Era
 2  : Mining Era

 state 1 {
    1.1a : sticks
    1.1b : rocks
    1.2a : ore
    1.2b : campfire
    1.4a : metal bar
    1.4b : huts
    1.2d : stone axe
    1.3a : logs
    1.2e : stone pickaxe
    1.2f : stone hoe<br> or <br> stone scythe

    %% Main storyline
    1.1b --> 1.2a : 1/20th chance of dropping
    1.2b --> 1.4a
    1.2a --> 1.4a

    %% Different things that use both sticks and rocks
    1.1a --> 1.2b
    1.1b --> 1.2b
    1.1a --> 1.2d
    1.1b --> 1.2d
    1.1a --> 1.2e
    1.1b --> 1.2e
    1.1a --> 1.2f
    1.1b --> 1.2f

    %% Add-ons
    1.2d --> 1.3a
    1.3a --> 1.4b
    1.2e --> 1.2a : increase chance of dropping
 }

 state 2 {
    2.1a : stuff
    2.1b : prospecting

 }

 [*] --> 1
 1 --> 2
 2 --> [*]
```
---
```mermaid
stateDiagram-v2
 9  : Space Mining
 10 : Superstructures

 state 9 {
  9.1a : asteroid net
  9.1b : asteroid relocation
  9.1c : asteroid mining
  9.2a : Planetary Railgun
  9.3  : Large Space Stations
  
  9.1a --> 9.1c
  9.1b --> 9.1c
 }

 state 10 {
  10.1 : Dyson Sphere
  10.2 : Planet Crafting
  10.3 : Ring Planets
  10.4 : Space Elevator /<br> Space Skyhook
  10.5 : Stellar Engine
  10.6 : Relative Missiles
 }

 [*] --> 9
 9 --> 10
 10 --> [*]
```