#NEWPALMYRA

Website for [newpalmyra.org](http://www.newpalmyra.org/).

## Requirements

* Ruby
* Bundler

## Instructions

    git clone git@github.com:newpalmyra/newpalmyra.org.git && cd newpalmyra.org
    bundle install
    bundle exec jekyll serve

### Adding news articles

To add a news article, create a file in the `_posts` directory, and name the file using this pattern:

    _posts/YYYY-MM-DD-domain.html

At the top of the file, add the frontmatter, following this template:

    ---
    layout: default
    title: "ARTICLE TITLE"
    source: "WEBSITE NAME"
    link: URL
    language: en
    categories: [ press ]
    ---

## Translation

### For Normal People

1. Grab the current copy of the home page: https://raw.githubusercontent.com/newpalmyra/newpalmyra.org/gh-pages/index.md
2. Translate the document into your language
3. Send the completed translations to info@newpalmyra.org

### For Developers

1. Clone the repository.
2. Create a new directory with the name of your language ISO code.
3. Copy `index.md` into your new language folder, and translate the document.
4. Add a new link under the language switcher in `_includes/navbar.html`.
5. Commit your changes to a new branch.
6. When ready, send a pull request for your changes to this master repository.

## Questions

Please email info@newpalmyra.org
