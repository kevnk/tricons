# tricons
Common icons—customizable via LESS—that morph from one to another with CSS transition; inspired by (but not using) SVG animated icons.

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
@tricons: hamburger-menu, x, arrow-left, arrow-right, arrow-up, arrow-down, plus, minus, loading, caret-up, caret-down, caret-left, caret-right, heart;

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
    @thickness: 1px; 
    @min-width: 60px; 
    @height: 60px; 
    @pad-vert: 10px; 
    @pad-horz: 20px; 
    @color: #fff; 
    @color-hover: #fff; 
    @bg-color: #FEEA3A; 
    @bg-color-hover: saturate(lighten(#FEEA3A, 5%), 5%);
    .tricon(@thickness, @min-width, @height, @pad-vert, @pad-horz, @color, @color-hover, @bg-color, @bg-color-hover);
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