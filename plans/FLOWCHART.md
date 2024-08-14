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
 1.AGRI : Agriculture
 2  : Mining Era
 3  : Electricity

 state 1 {
    1.1a : sticks
    1.1b : rocks
    1.1c : clay

    1.2a : ore
    1.2b : campfire
    1.2d : stone axe
    1.2e : stone pickaxe
    1.2f : stone hoe<br> or <br> stone scythe

    1.3a : logs
    1.3b : brick

    1.4a : metal bar
    1.4b : huts

    %% Main storyline
    1.1b --> 1.2a : 1/100th chance of dropping
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

    1.1c --> 1.3b
    1.2b --> 1.3b
 }

  state 1.AGRI {
    AGRI.1a : farmland
    AGRI.1b : hut
 }

 state 2 {
    2.1.0 : Prospecting

    2.1a : copper
    2.1b : tin
    2.1c : silicon
    2.1d : iron

    2.2a : bronze

    2.3a : pickaxe

    %% What prospecting could turn our ores into
    2.1.0 --> 2.1a : Reveals a chance to be
    2.1.0 --> 2.1b : Reveals a chance to be
    2.1.0 --> 2.1d : Reveals a chance to be

    2.1a --> 2.2a
    2.1b --> 2.2a

    2.2a --> 2.3a : Either / Or <br> LESS EXPENSIVE?
    2.1d --> 2.3a : Either / Or <br> MORE EXPENSIVE?

 }

 state 3 {
  3.1.0a : Rotary
  3.1.0b : Heat
  3.1a : Windmill
  3.1b : Waterwheel
  3.1c : Geothermal
  3.1d : Solar
  3.1e : Nuclear
  3.1f : Steam

  3.1.0a --> 3.1a
  3.1.0a --> 3.1b

  3.1.0b --> 3.1c
  3.1.0b --> 3.1d
  3.1.0b --> 3.1f
 }

 [*] --> 1
 1 --> 1.AGRI
 1 --> 2 : metal bar
 2 --> 3 : copper
 3 --> [*]
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