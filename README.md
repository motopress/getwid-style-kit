<p align="center">
  <a href="https://wordpress.org/plugins/getwid/">
    <img src="https://ps.w.org/getwid/assets/icon.svg" alt="Getwid" width="128" height="128">
  </a>
</p>

<h2 align="center">Getwid Style Kit</h2>

This boilerplate is designed for WordPress theme developers who are interested in developing themes with the new WordPress 5.x Block Editor - Gutenberg.

This Style Kit provides smartly organized starter scss files to style [**Gutenberg**](https://wordpress.org/plugins/gutenberg/) and [**Getwid WordPress Blocks**](https://wordpress.org/plugins/getwid/).

**Getwid – Gutenberg Blocks** is the biggest free library of third-party blocks and design templates by MotoPress for the WordPress Block Editor. Lightweight, multipurpose and deeply customizable.

WordPress Blocks by Getwid can be easily styled to match your theme with a free Getwid Style Kit we created specifically for you. It comes with useful theme support snippets and CSS classes to help you simplify and accelerate the development process of your themes built with Getwid and Gutenberg blocks.

See also: [Getwid Base: Default Theme for Getwid Blocks](https://motopress.com/products/getwid-base/)

## For themes built using SASS/SCSS 

1. Download a zip folder/clone a repository.
2. Copy the `scss` directory and paste it to the sass/scss directory of the theme styles.
3. Import `style.scss` at the end of the main file containing styles. 
4. Import `editor.scss` at the end of the file containing styles which is to be uploaded to the block-editor.
5. Have fun!

## For themes built without SASS/SCSS

1. Download a zip folder/clone a repository.
2. Run a console command `npm i`.
3. Run a console command `gulp`(by default this will run a task that will watch for changes in .scss files).
4. Add generated `style.css` and `editor.css` for the frontend and block-editor accordingly.
5. Have fun!

## Useful theme support snippets

### Enqueuing the editor style 

To style blocks in the Block Editor, add the following snippet into `functions.php`:

```
add_theme_support('editor-styles');

add_editor_style( array(
    'path_to_editor_style/editor.css',
    /* here can be url to Google Font, or another style file */
) );
```

### Wide, full alignment

Some blocks can have ["wide" and "full" width](https://developer.wordpress.org/block-editor/developers/themes/theme-support/#wide-alignment), It's up to a theme to support this feature.
 
* To allow this possibility, add the following snippet into `functions.php`:

```
add_theme_support( 'align-wide' );
```

* If a theme supports `align-wide`, it must contain styles for `.aligwide` and `.alignfull` classes.

> You can find styles for this in ./scss/core-blocks/editor/_common.scss - for the block editor and ./scss/core-blocks/style/_common.scss for the frontend. 

### Block color palettes  
Some blocks allow you to customize colors. A theme can provide a set of such colors. To support this, add the following snippet into `functions.php`:

```
add_theme_support( 'editor-color-palette', array(
    array(
        'name' => __( 'Color 1', 'theme-domain' ),
        'slug' => 'color-1',
        'color' => '#0489ef',
    ),
    array(
        'name' => __( 'Color 2', 'theme-domain' ),
        'slug' => 'color-2',
        'color' => '#484848',
    ),
    array(
        'name' => __( 'Color 3', 'theme-domain' ),
        'slug' => 'color-3',
        'color' => '#e0e0e0',
    ),
    array(
        'name' => __( 'Color 4', 'theme-domain' ),
        'slug' => 'color-4',
        'color' => '#808080',
    ),
) );
```

> **Note** that slugs and colors will be used for generating css classes. These colors must correspond to the ones described in the _variables.scss file.

More information on how to configure themes for WordPress 5.x - Gutenberg can be found [here](https://developer.wordpress.org/block-editor/developers/themes/theme-support). 

## Directory structure
For your convenience, all styles are divided into two main groups: `core-blocks` and `getwid-blocks`. Each of them has subgroups for `styles` (general styles) and `editor` (styles only for the block editor). All files contain templates with the minimum set of selectors for styling different blocks. The `_variables.scss` file contains the main variables, including colors.

```
getwid-style-kit
├───css                     # compiled css will be here
└───scss
    ├───core-blocks
    │   ├───editor          # editor specific core blocks styles split into files 
    │   │   ├─── ...
    │   │   └─── ...
    │   └───style           # general core blocks styles split into files
    │   │   ├─── ...
    │   │   └─── ...
    │   ├───_editor.scss
    │   └───_style.scss
    ├───getwid-blocks
    │   ├───editor          # editor specific Getwid blocks styles split into files 
    │   │   ├─── ...
    │   │   └─── ...
    │   └───style           # general Getwid blocks styles split into files
    │   │   ├─── ...
    │   │   └─── ...
    │   ├───_editor.scss
    │   └───_style.scss
    └───helpers             # some helpers/mixins
    │   └─── ...
    ├───_colors.scss        # colors classes
    ├───_variables.scss     # some variables
    ├───editor.scss         # main editor style file
    └───style.scss          # main general style file
```

## Getwid Free Gutenberg Blocks

Multifunctional static and dynamic blocks for Gutenberg:

1. [Section Block](https://getwid.getmotopress.com/blocks/section-block/) - build custom page section layouts of any type (set alignments; use video, slider and image backgrounds; change foregrounds, apply animation, play with colors and shapes, etc.).
1. [Advanced Heading Block](https://getwid.getmotopress.com/blocks/advanced-heading-block/) - a rich typography control panel for creating catchy headings - access to Google fonts, styles, sizes, one-click text case conversion, spacing and colors.
1. [Google Maps Block](https://getwid.getmotopress.com/blocks/google-maps-block/) - embed simple Google Maps with unlimited custom markers.
1. [Icon Block](https://getwid.getmotopress.com/blocks/icon-block/) - create effective and clear user interfaces with a collection of customizable icons.
1. [Icon Box Block](https://getwid.getmotopress.com/blocks/icon-box-block/) - construct responsive service boxes with icons, headings and text boxes using premade styles, modifying colors, sizes and hover effects.
1. [Image Box Block](https://getwid.getmotopress.com/blocks/image-box-block/) - get deeper into image presentation - add animation effects, apply the needed size in clicks and modify spacing.
1. [Social Links Block](https://getwid.getmotopress.com/blocks/social-links-block/) - add any social icons, customize their alignment for different devices, go with pre-made layouts and alter their size and spacing.
1. [Banner Block](https://getwid.getmotopress.com/blocks/banner-block/) - advertise wisely with fully customizable banners for which you can define sizes, alignments, colors, animation effects and more tools for better presentation of your offerings.
1. [Image Slider Block](https://getwid.getmotopress.com/blocks/image-slider-block/) - a better way to create image sliders with full control over navigation styles, image sizes and animation effects.
1. [Media & Text Slider Block](https://getwid.getmotopress.com/blocks/media-text-slider-block/) - showcase brilliant sliders with texts, set custom content width and alignment, apply text and color overlays, choose slide and text animation effects individually.
1. [Button Group Block](https://getwid.getmotopress.com/blocks/button-group-block/) - add several call-to-action buttons in style and harmony; update width, alignment and direction for the whole set of buttons at the same time.
1. [Person Block](https://getwid.getmotopress.com/blocks/person-block/) - create simple and stunning team showcase sections with the settings for job titles, names and image sizes.
1. [Accordion Block](https://getwid.getmotopress.com/blocks/accordion-block/) - snap and functional accordion tabs section with customizable icons and heading types. Perfect for FAQ sections.
1. [Toggle Block](https://getwid.getmotopress.com/blocks/toggle-block/) - similar to Accordion block, but it lets users expand tabs manually.
1. [Tabs Block](https://getwid.getmotopress.com/blocks/tabs-block/) - horizontal tabs with a bunch of pre-set styles and customizable headings.
1. [Image Stack Gallery Block](https://getwid.getmotopress.com/blocks/image-stack-gallery-block/) - breathtaking, fully customizable image galleries with seven different styles to unleash your creativity and find a perfect solution for your current WordPress theme design.
1. [Testimonial Block](https://getwid.getmotopress.com/blocks/testimonial-block/) - a no-frills testimonial block with an author avatar, citation and name.
1. [Recent Posts Block](https://getwid.getmotopress.com/blocks/recent-posts-block/) - present your latest posts with custom metadata, list or grid layout and a choice of different output behaviors.
1. [Advanced Spacer Block](https://getwid.getmotopress.com/blocks/advanced-spacer-block/) - add a space between your blocks with an adjustable spacer - optionally hide it on mobile, tablet or desktop devices.
1. [Instagram Block](https://getwid.getmotopress.com/blocks/instagram-block/) - connect your Instagram to WordPress and create a customizable live-feed gallery.
1. [Counter Block](https://getwid.getmotopress.com/blocks/counter-block/) - show the most significant data about your business in numbers with the lightweight animated counters.
1. [Price Box Block](https://getwid.getmotopress.com/blocks/price-box-block/) - visualize any data by creating all sorts of comparison and pricing tables.
1. [Progress Bar Block](https://getwid.getmotopress.com/blocks/progress-bar-block/) - a simple animated horizontal progress bar with customizable colors.
1. [Circular Progress Bar Block](https://getwid.getmotopress.com/blocks/circle-progress-bar-block/) - animated circular progress bars with the adjustable bar sickness, size and colors.
1. [Contact Form Block](https://getwid.getmotopress.com/blocks/contact-form-block/) - a simple contact form with a traditional set of the form fields, customizable labels and support for reCAPTCHA.
1. [Post Carousel Block](https://getwid.getmotopress.com/blocks/posts-carousel-block/) - use agile customization options to showcase posts, pages or custom post types in a catchy carousel with a custom layout.
1. [Price List Block](https://getwid.getmotopress.com/blocks/price-list-block/) - a perfect block for featuring restaurant menu prices or a table of contents with the adjustable headings, dotted lines, colors, and images.
1. [Post Slider Block](https://getwid.getmotopress.com/blocks/posts-slider-block/) - fetch your already existing posts, products or other custom post types data into a deeply tunable, stylish slider with several premade layouts.
1. [Custom Post Type Block](https://getwid.getmotopress.com/blocks/posts-grid-list/) - grid, list or custom view of any custom post types with numerous layout and style customization settings.
1. [Mailchimp Block](https://getwid.getmotopress.com/blocks/mailchimp-block/) - easy MailChimp API integration for adding email subscription forms.
1. [Countdown Block](https://getwid.getmotopress.com/countdown-block/) - a dynamic countdown timer with deeply customizable numeric values and time labels, for which you can set a font family and style, sizes, colors, spacing and more.
1. [Video Popup Block](https://getwid.getmotopress.com/video-popup-block/) - display your Youtube, Vimeo or self-hosted videos in popups; the play video button, custom video covers, colors and sizes of the block containers are fully adjustable.
1. [Content Timeline Block](https://getwid.getmotopress.com/content-timeline-block/) - display chronological order of any events in a stylish timeline graph with such adjustable containers as headings, subheadings, images, etc.
1. [Image Hotspot Block](https://getwid.getmotopress.com/image-hotspot-block/) - place unlimited animated markers with fully customizable tooltips over your image to make it more informative and interactive.
1. [Table of Contents Block](https://getwid.getmotopress.com/blocks/table-of-contents-wordpress-block/) - create a table of contents based on your page headings (H2, H3, H4, etc.), with either an ordered or unordered list.
1. [Anchor Block](https://getwid.getmotopress.com/blocks/anchor-wordpress-block/) - add HTML anchors # to make it easy for your readers to jump between page sections.
1. [Advanced Table Block](https://getwid.getmotopress.com/blocks/advanced-table-wordpress-block/) - a table Gutenberg block with more table settings and design flexibility, e.g. you can merge cells, edit background colors and tailor borders.

### Getwid + the ACF Plugin Integration
The Post Carousel, Post Slider, and Custom Post Type blocks by Getwid can be extended with the ACF plugin custom fields. In particular, you can integrate Wysiwyg, Select, Image and Background Image fields provided by ACF.

Check [settings and examples](https://motopress.com/blog/category/getwid-gutenberg-blocks/) of each Getwid block. We are in the process of building more on-demand blocks for Gutenberg!

## License
Getwid Style Kit, Copyright &copy; 2020, MotoPress. Getwid Style Kit is distributed under the terms of the [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html).
