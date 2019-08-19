# Phaser + TypeScript: Proof-of-Concept

Experimenting with a phaser+typescript base project before committing to something I'll keep.


## To Do / Goals

- [x] Install the basic phaser and typescript dependencies.
- ~~Pull in and vendor or somehow sync the .d.ts file for phaser from their docs site.~~
  - Looks like this is no longer needed, as the types ship with the main npm package.
- [ ] Get all the other build services working in a satisfactory way. Try and avoid Webpack.
- [ ] **Maybe** Look at running everything in docker, and think about how that would work for build pipeline and live reloading, etc.
