## Tachyons + Flexboxgrid playground

- Work straight into the html files inside the `dist/` folder. You can use the `blank.html` template as a starter for new pages you need to build.

### How to structure our CSS

- helper classes (and anything that extends the tachyons philosophy) go into `src/scss/_tachyons-extend`
- custom CSS (when needed for specific reasons) goes in `src/scss/_custom`

The reason behind not modifying the core tachyons files is it makes it easier to upgrade the core library when new releases happen.

### To get started

1. `npm i` or `yarn`
2. `gulp`