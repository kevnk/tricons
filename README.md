# tricons
Common (customizable) icons that can morph from one to another made with CSS; inspired by SVG animated icons (but these use no SVG; just CSS).

## Usage

> __TL;DR;__ for a full example, view `src/index.html` and `src/styles/less/styles.less`

#### 1. Bower install 

```bash
$ bower install -S tricons
```

#### 2. Import the tricons mixin
```less
@import 'bower_components/tricons/tricons';

// Optionally set the default tricon
// NOTE: if you change default-tricon, be sure to add/remove it from the list of @tricons below
@default-tricon: hamburger-menu;

// Optionally remove unused icons from this list to slim down on your CSS
@tricons: x, arrow-left, arrow-right, arrow-up, arrow-down, plus, minus, loading, caret-up, caret-down, caret-left, caret-right;

// Optionally customize tricons default values
@tricon-thickness: 2px;
@tricon-min-width: 40px;
@tricon-height: 40px;
@tricon-pad-vert: 0;
@tricon-pad-horz: 0;
@tricon-color: #fff;
@tricon-color-hover: #fff;
@tricon-bg-color: #2A97EF;
@tricon-bg-color-hover: saturate(lighten(#2A97EF, 5%), 5%);
```


#### 3. Create some customized tricon buttons with your less
```less
.my-custom-tricon {
    // FYI, these are also the default variables
    @tricon-thickness: 2px; 
    @tricon-min-width: 40px; 
    @tricon-height: 40px; 
    @tricon-pad-vert: 0; 
    @tricon-pad-horz: 0; 
    @tricon-color: #fff; 
    @tricon-color-hover: #fff; 
    @tricon-bg-color: #2A97EF; 
    @tricon-bg-color-hover: saturate(lighten(#2A97EF, 5%), 5%);
    .tricon(@tricon-thickness, @tricon-min-width, @tricon-height, @tricon-pad-vert, @tricon-pad-horz, @tricon-color, @tricon-color-hover, @tricon-bg-color, @tricon-bg-color-hover);
}
```

#### 4. HTML Markup
```html
<a class="my-custom-tricon" href="#" data-tricon="hamburger-menu" data-tricon-toggle="x">
    <span></span>
    <span></span>
    <span></span>
</a>
<a class="my-custom-tricon" href="#" data-tricon="arrow-left">
    <span></span>
    <span></span>
    <span></span>
    <span>Text right of icon</span>
</a>
```

__NOTE:__ if you want the text on the left of the icon, just move that element before the 3 empty spans

#### 5. Javascript to toggle `data-tricon` attribute

Use the following or roll your own:
```js
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/tricons/dist/tricons.js"></script>
```