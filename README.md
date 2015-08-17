# tricons
Common (customizable) icons that can morph from one to another made with CSS; inspired by SVG animated icons (but these use no SVG; just CSS).

## Usage

> For a full example, view `/src/index.html`

#### 1. Import the tricons mixin
```less
@import 'tricons';
```

#### 2. Create some customized tricon buttons with your less
```less
.my-custom-tricon {
    // FYI, these are the defaults 
    @thickness: 2px; 
    @min-width: 40px; 
    @height: 40px; 
    @pad-vert: 0; 
    @pad-horz: 0; 
    @color: #fff; 
    @color-hover: #fff; 
    @bg-color: #2A97EF; 
    @bg-color-hover: saturate(lighten(#2A97EF, 5%), 5%);
    .tricon(@thickness, @min-width, @height, @pad-vert, @pad-horz, @color, @color-hover, @bg-color, @bg-color-hover);
}
```

#### 3. HTML Markup
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

#### 4. Javascript to toggle `data-tricon` attribute

Use the following or roll your own:
```js
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/tricons/dist/tricons.js"></script>
```