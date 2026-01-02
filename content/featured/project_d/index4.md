---
date: '5'
title: 'Shuttle Optimizer'
cover: 'ShuttleOptimizer.png'
github: 'https://github.com/aryanmsr/wedding-shuttle-optimizer'
external: 'https://wedding-shuttle-optimizer-ui.onrender.com/'
tech:
  - Python
  - OR-Tools
  - CP-SAT
  - FastAPI
  - TypeScript

showInProjects: true
---
Shuttle Optimizer is an optimization-driven scheduling tool I built while planning transportation for my sister’s wedding. I modeled the problem explicitly using constraint programming. Guests are assigned to trips, trips are assigned to vehicles, and hard constraints such as capacity limits, wait-time bounds, vehicle reuse, and incompatibility rules are enforced exactly. The solver then searches for a plan that minimizes total waiting time.
