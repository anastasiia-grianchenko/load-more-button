<!-- F'in sweet CMS Library for Webflow -->
<script src="https://cdn.jsdelivr.net/npm/@finsweet/cms-library@1/cms-library.js"></script>

<script>
// immediately/self invoked function. This function executes right away
(function() {
  // create a new Library instance and store it in a variable called "customBlogPosts"
  var fsMagic = new FsLibrary('.blog-posts-list')

  // run the loadmore Library component on your instance
  fsMagic.loadmore({
    button: ".load-more-button", // class of Webflow Pagination button
    resetIx: true, // adds Webflow interactions to newly loaded item
    animation: {
      enable: true,
      duration: .3,
      easing: 'ease',
      effects: 'fade'
    }
  })

})();
</script>
