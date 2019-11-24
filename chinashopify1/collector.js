<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Wayback Machine</title>
        <script src="http://archive.org/includes/jquery-1.10.2.min.js?v1.10.2" type="text/javascript"></script>
        <script src="http://archive.org/includes/analytics.js?v=2b8f6dce" type="text/javascript"></script>
        <script src="http://archive.org/includes/build/npm/jquery-ui.min.js?v1.12.1" type="text/javascript"></script>
        <script src="http://archive.org/includes/bootstrap.min.js?v3.0.0" type="text/javascript"></script>
        <script src="http://archive.org/components/npm/clipboard/dist/clipboard.js?v=2b8f6dce" type="text/javascript"></script>
        <script src="http://archive.org/includes/build/npm/react/umd/react.production.min.js?v16.7.0" type="text/javascript"></script>
        <script src="http://archive.org/includes/build/npm/react-dom/umd/react-dom.production.min.js?v16.7.0" type="text/javascript"></script>
        <script src="http://archive.org/includes/build/js/archive.min.js?v=2b8f6dce" type="text/javascript"></script>
        <script src="http://archive.org/includes/build/js/areact.min.js?v=2b8f6dce" type="text/javascript"></script>
        <link href="http://archive.org/includes/build/css/archive.min.css?v=2b8f6dce" rel="stylesheet" type="text/css"/>
            <script src="/_static/js/raven.min.js" crossorigin="anonymous"></script>
    <script>Raven.config('https://5588e3adb3e545248e893d6f2fc41ba2@wwwb-sentry.us.archive.org/3').install();</script>
<script type="text/javascript">if('archive_analytics' in window){var v=archive_analytics.values;v.path='';v.service='wb';v.server_name='wwwb-app29.us.archive.org';v.server_ms=381;archive_analytics.send_pageview_on_load()}</script>
    <link href="/_static/images/archive.ico" rel="shortcut icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="/_static/css/styles.css" />
    <script type="text/javascript" src="/_static/js/ui.js" charset="utf-8"></script>
    <base target="_top">
    <link href="/_static/css/web.css" rel="stylesheet" type="text/css"/>
    <!-- include component js and css -->
    <link rel="stylesheet" type="text/css" href="/static/bower_components/wayback-search-js/dist/vendors~main.634ba8d83da2e5dd4df7.chunk.css" />
<link rel="stylesheet" type="text/css" href="/static/bower_components/wayback-search-js/dist/main.9729564837280a17ef78.chunk.css" />
<script src="/static/bower_components/wayback-search-js/dist/runtime.f1824bae7710cfbeb888.js"></script>
<script src="/static/bower_components/wayback-search-js/dist/vendors~main.634ba8d83da2e5dd4df7.chunk.js"></script>
<script src="/static/bower_components/wayback-search-js/dist/main.9729564837280a17ef78.chunk.js"></script>
    <script src="https://archive.org/web/carouFredSel/jquery.carouFredSel-6.2.1-packed.js?v6.2.1" type="text/javascript"></script>
    <style>
      html, body { margin:0; padding:0 }
      #faux-header {
        height: 50px;
        width: 100%;
        margin:0;
        background-color:black;
      }
      #react-wayback-search {
        max-width: 1170px;
        margin: 0 auto;
        padding: 10px;
      }
    </style>
  </head>
  <body class="navia">
    
                    <div class="ia-banners">
              <div class="ia-banner hidden" data-campaign="ia_user_1">
        <p>This banner text <i>can</i> have <b>markup</b>.</p>
        <a href="#" data-action="ia-banner-close"></a>
      </div>
          </div>
            
        <div id="navwrap1" class="">
          <div id="navwrap2">
            <div class="navbar navbar-inverse navbar-static-top" role="navigation">
              <div id="nav-tophat-helper" class="hidden-xs"></div>

              <ul class="nav navbar-nav navbar-main">
                <li class="pull-left">
                  <a title="Home" class="navia-link home" href="/" target="_top">
                    <span class="iconochive-logo"></span>
                    <span>Home</span>
                  </a>
                </li>
                                                                      <li class="dropdown dropdown-ia pull-left">
                    <a title="Web" class="navia-link web"
                      data-top-kind="web"
                      href="https://archive.org/web/"
                      target="_top"><span class="iconochive-web" aria-hidden="true"></span><span>web</span></a>
                  </li>
                                                                      <li class="dropdown dropdown-ia pull-left">
                    <a title="Texts" class="navia-link texts"
                      data-top-kind="texts"
                      href="https://archive.org/details/texts"
                      target="_top"><span class="iconochive-texts" aria-hidden="true"></span><span>books</span></a>
                  </li>
                                                                      <li class="dropdown dropdown-ia pull-left">
                    <a title="Video" class="navia-link movies"
                      data-top-kind="movies"
                      href="https://archive.org/details/movies"
                      target="_top"><span class="iconochive-movies" aria-hidden="true"></span><span>video</span></a>
                  </li>
                                                                      <li class="dropdown dropdown-ia pull-left">
                    <a title="Audio" class="navia-link audio"
                      data-top-kind="audio"
                      href="https://archive.org/details/audio"
                      target="_top"><span class="iconochive-audio" aria-hidden="true"></span><span>audio</span></a>
                  </li>
                                                                      <li class="dropdown dropdown-ia pull-left">
                    <a title="Software" class="navia-link software"
                      data-top-kind="software"
                      href="https://archive.org/details/software"
                      target="_top"><span class="iconochive-software" aria-hidden="true"></span><span>software</span></a>
                  </li>
                                                                      <li class="dropdown dropdown-ia pull-left rightmost">
                    <a title="Image" class="navia-link image"
                      data-top-kind="image"
                      href="https://archive.org/details/image"
                      target="_top"><span class="iconochive-image" aria-hidden="true"></span><span>images</span></a>
                  </li>
                
                <li class="nav-hamburger dropdown dropdown-ia pull-right hidden-sm hidden-md hidden-lg">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                              data-target="#nav-hamburger-menu" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <div class="navbar-collapse collapse" id="nav-hamburger-menu" aria-expanded="false">
                            <ul id="" class="nav navbar-nav">
            <li><a target="_top" data-event-click-tracking="TopNav|AboutLink" href="https://archive.org/about/">ABOUT</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|ContactLink" href="https://archive.org/about/contact.php">CONTACT</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|BlogLink" href="http://blog.archive.org">BLOG</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|ProjectsLink" href="https://archive.org/projects">PROJECTS</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|HelpLink" href="https://archive.org/about/faqs.php">HELP</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|DonateLink" href="https://archive.org/donate">DONATE</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|JobsLink" href="https://archive.org/about/jobs.php">JOBS</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|VolunteerLink" href="https://archive.org/about/volunteerpositions.php">VOLUNTEER</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|PeopleLink" href="https://archive.org/about/bios.php">PEOPLE</a></li>
          </ul>
                          </div><!-- /.navbar-collapse -->
                    </div>
                  </div><!-- /.container-fluid -->
                </li>




                                  <li id="nav-search" class="dropdown dropdown-ia pull-right">
                    <a class="nav-search-button" href="https://archive.org/search.php"
                      onclick="$(this).parents('#nav-search').find('form').submit(); return false"
                      aria-hidden="true"
                    ><span class="iconochive-search"  aria-hidden="true"></span><span class="sr-only">search</span></a>
                    <div class="searchbar">
                      <form
                        class="search-form js-search-form"
                        method="get"
                        role="search"
                        action="https://archive.org/searchresults.php"
                        target="_top"
                        data-event-form-tracking="TopNav|SearchForm"
                        data-wayback-machine-search-url="https:///web/*/"
                      >
                        <input
                          id="search-bar-2"
                          class="js-search-bar"
                          data-autocomplete-format="right"
                          placeholder="Search"
                          type="text"
                          name="search"
                          value=""
                          aria-controls="navbar_search_options"
                          aria-label="Search the Archive. Filters and Advanced Search available below."
                        />

                              <div
              id="navbar_search_options"
            class="search-options js-search-options"
      aria-expanded="false"
      aria-label="Search Options"
      data-keep-open-when-changed="false"
    >
      <div class="pre-search-options"></div>
      <fieldset>
                      <label>
      <input
        type="radio"
        name="sin"
        value=""
                  checked
                      >
      <span>Search metadata</span>
    </label>
                          <label>
      <input
        type="radio"
        name="sin"
        value="TXT"
                      >
      <span>Search text contents</span>
    </label>
                          <label>
      <input
        type="radio"
        name="sin"
        value="TV"
                      >
      <span>Search TV news captions</span>
    </label>
                          <label>
      <input
        type="radio"
        name="sin"
        value="WEB"
                      >
      <span>Search archived web sites</span>
    </label>
                  </fieldset>

              <a
          href="https://archive.org/advancedsearch.php"
          class="search-options__advanced-search-link"
          onclick="return AJS.advanced_search(this)"
        >Advanced Search</a>
          </div>
    
                              <input class="js-tvsearch" type="hidden" value='{"ands":[],"minday":"06/04/2009","maxday":"11/24/2019"}'/>
    
                        <input type="submit" value="Search"/>
                      </form>
                    </div><!--/.searchbar -->
                  </li>
                
                <li class="dropdown dropdown-ia pull-right">
                  <a class="nav-upload" href="https://archive.org/create" _target="top"
                    data-event-click-tracking="TopNav|UploadIcon"
                  ><span class="iconochive-upload"  aria-hidden="true"></span><span class="sr-only">upload</span><span class="hidden-xs-span hidden-sm-span">UPLOAD</span></a>
                </li>


                <li class="dropdown-ia pull-right leftmost">
                                      <a class="nav-user" href="https://archive.org/account/login" style="padding-right:0" _target="top"
                      data-event-click-tracking="TopNav|LoginIcon"
                      ><span class="iconochive-person"  aria-hidden="true"></span><span class="sr-only">person</span><span class="hidden-xs-span">SIGN IN</span></a>
                                  </li>

                              </ul>

                  <ul id="nav-abouts" class="">
            <li><a target="_top" data-event-click-tracking="TopNav|AboutLink" href="https://archive.org/about/">ABOUT</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|ContactLink" href="https://archive.org/about/contact.php">CONTACT</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|BlogLink" href="http://blog.archive.org">BLOG</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|ProjectsLink" href="https://archive.org/projects">PROJECTS</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|HelpLink" href="https://archive.org/about/faqs.php">HELP</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|DonateLink" href="https://archive.org/donate">DONATE</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|JobsLink" href="https://archive.org/about/jobs.php">JOBS</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|VolunteerLink" href="https://archive.org/about/volunteerpositions.php">VOLUNTEER</a></li>
      <li><a target="_top" data-event-click-tracking="TopNav|PeopleLink" href="https://archive.org/about/bios.php">PEOPLE</a></li>
          </ul>
                </div><!--/.navbar-->

                        <div id="nav-tophat" class="collapse">
                                                                <div class="row toprow web" style="max-width:1000px;margin:auto;display:block;">
                    <div class="col-xs-12">
                      <div class="wayback-txt">
                        Search the history of over 391 billion                        <a style="display:inline"
                          data-event-click-tracking="TopNav|WaybackMachineStatsLink"
                          href="https://blog.archive.org/2016/10/23/defining-web-pages-web-sites-and-web-captures/"
                          >web pages</a> on the Internet.
                      </div>
                      <div class="roundbox7 wayback-main">
                        <div class="row">
                          <div class="col-sm-6" style="padding-left:0; padding-right:0;">
                            <a style="padding-bottom:0"
                              data-event-click-tracking="TopNav|WaybackMachineLogoLink"
                              href="https://archive.org/web/"
                              ><img src="https://archive.org/images/WaybackLogoSmall.png" alt="Wayback Machine"/></a>
                          </div>
                          <div class="col-sm-6" style="padding-top:13px;">
                            <form style="position:relative;">
                              <span class="iconochive-search"  aria-hidden="true"></span><span class="sr-only">search</span>                              <label for="nav-wb-url" class="sr-only">Search the Wayback Machine</label>
                              <input id="nav-wb-url" class="form-control input-sm roundbox20" type="text"
                                placeholder="enter URL or keywords" name="url" autocomplete="off"
                                onclick="$(this).css('padding-left','').parent().find('.iconochive-search').hide()"/>
                            </form>
                          </div>
                        </div><!--/.row-->
                      </div><!--/.wayback-main-->
                    </div>
                  </div><!--./row-->

                                                                                <div class="row toprow fivecolumns texts">

                                                                <div class="col-sm-2 col-xs-7 col-sm-push-4">
                                                  <div class="linx">
                            <h5>Featured</h5>
                                                        <a
                              href="https://archive.org/details/books"
                              data-event-click-tracking="TopNav|FeaturedLink-AllBooks"
                              ><span class="iconochive-texts"  aria-hidden="true"></span><span class="sr-only">texts</span> All Books</a>
                            <a
                              href="https://archive.org/details/texts"
                              data-event-click-tracking="TopNav|FeaturedLink-AllTexts"
                              >All Texts</a>
                                                        <a
                              href="https://archive.org/search.php?query=mediatype:texts&sort=-publicdate"
                              data-event-click-tracking="TopNav|FeaturedLink-ThisJustInTexts"
                              ><span class="iconochive-latest"  aria-hidden="true"></span><span class="sr-only">latest</span> This Just In</a>
                                                          <a href="https://archive.org/details/smithsonian" title="Smithsonian Libraries" data-event-click-tracking="TopNav|FeaturedLink-SmithsonianLibraries">Smithsonian Libraries</a>                                                          <a href="https://archive.org/details/fedlink" title="FEDLINK (US)" data-event-click-tracking="TopNav|FeaturedLink-FEDLINKUS">FEDLINK (US)</a>                                                          <a href="https://archive.org/details/genealogy" title="Genealogy" data-event-click-tracking="TopNav|FeaturedLink-Genealogy">Genealogy</a>                                                          <a href="https://archive.org/details/lincolncollection" title="Lincoln Collection" data-event-click-tracking="TopNav|FeaturedLink-LincolnCollection">Lincoln Collection</a>                                                      </div>

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-2">
                                                  <div class="widgets">
                                        <center class="items_list">
              <div class="items_list_img">
                <a
                  href="https://archive.org/details/inlibrary?sort=-publicdate"
                  style="background-image: url('https://archive.org/images/book-lend.png');"
                  aria-hidden="true"
                  data-event-click-tracking="TopNav|CircleWidget-BooksToBorrow"
                  ></a>
              </div>
              <a
                class="stealth boxy-label"
                data-event-click-tracking="TopNav|CircleWidget-BooksToBorrow"
                href="https://archive.org/details/inlibrary?sort=-publicdate"
                >Books to Borrow</a>
            </center>
                                    </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7 col-sm-push-2">
                                                  <div class="linx ">
                                                          <h5>Top</h5>
                                                                                      <a href="https://archive.org/details/americana" title="American Libraries" data-event-click-tracking="TopNav|TopLink-AmericanLibraries">American Libraries</a>                                                          <a href="https://archive.org/details/toronto" title="Canadian Libraries" data-event-click-tracking="TopNav|TopLink-CanadianLibraries">Canadian Libraries</a>                                                          <a href="https://archive.org/details/universallibrary" title="Universal Library" data-event-click-tracking="TopNav|TopLink-UniversalLibrary">Universal Library</a>                                                          <a href="https://archive.org/details/opensource" title="Community Texts" data-event-click-tracking="TopNav|TopLink-CommunityTexts">Community Texts</a>                                                          <a href="https://archive.org/details/gutenberg" title="Project Gutenberg" data-event-click-tracking="TopNav|TopLink-ProjectGutenberg">Project Gutenberg</a>                                                          <a href="https://archive.org/details/biodiversity" title="Biodiversity Heritage Library" data-event-click-tracking="TopNav|TopLink-BiodiversityHeritageLibrary">Biodiversity Heritage Library</a>                                                          <a href="https://archive.org/details/iacl" title="Children's Library" data-event-click-tracking="TopNav|TopLink-ChildrenSLibrary">Children's Library</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-4">
                                                  <div class="widgets">
                                        <center class="items_list">
              <div class="items_list_img">
                <a
                  href="https://openlibrary.org"
                  style="background-image: url('https://archive.org/images/widgetOL.png');"
                  aria-hidden="true"
                  data-event-click-tracking="TopNav|CircleWidget-OpenLibrary"
                  ></a>
              </div>
              <a
                class="stealth boxy-label"
                data-event-click-tracking="TopNav|CircleWidget-OpenLibrary"
                href="https://openlibrary.org"
                >Open Library</a>
            </center>
                                    </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7">
                                                  <div class="linx linx-topped">
                                                                                      <a href="https://archive.org/details/booksbylanguage" title="Books by Language" data-event-click-tracking="TopNav|TopLink-BooksByLanguage">Books by Language</a>                                                          <a href="https://archive.org/details/additional_collections" title="Additional Collections" data-event-click-tracking="TopNav|TopLink-AdditionalCollections">Additional Collections</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                    
                  </div><!--/.row-->
                                                                                <div class="row toprow fivecolumns movies">

                                                                <div class="col-sm-2 col-xs-7 col-sm-push-4">
                                                  <div class="linx">
                            <h5>Featured</h5>
                                                        <a
                              href="https://archive.org/details/movies"
                              data-event-click-tracking="TopNav|FeaturedLink-AllVideo"
                              ><span class="iconochive-movies"  aria-hidden="true"></span><span class="sr-only">movies</span> All video</a>
                                                        <a
                              href="https://archive.org/search.php?query=mediatype:movies&sort=-publicdate"
                              data-event-click-tracking="TopNav|FeaturedLink-ThisJustInVideo"
                              ><span class="iconochive-latest"  aria-hidden="true"></span><span class="sr-only">latest</span> This Just In</a>
                                                          <a href="https://archive.org/details/prelinger" title="Prelinger Archives" data-event-click-tracking="TopNav|FeaturedLink-PrelingerArchives">Prelinger Archives</a>                                                          <a href="https://archive.org/details/democracy_now_vid" title="Democracy Now!" data-event-click-tracking="TopNav|FeaturedLink-DemocracyNow">Democracy Now!</a>                                                          <a href="https://archive.org/details/occupywallstreet" title="Occupy Wall Street" data-event-click-tracking="TopNav|FeaturedLink-OccupyWallStreet">Occupy Wall Street</a>                                                          <a href="https://archive.org/details/nsa" title="TV NSA Clip Library" data-event-click-tracking="TopNav|FeaturedLink-TVNSAClipLibrary">TV NSA Clip Library</a>                                                      </div>

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-2">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/tv"
            style="background-image: url('https://archive.org/services/img/tv');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/tv">TV News</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7 col-sm-push-2">
                                                  <div class="linx ">
                                                          <h5>Top</h5>
                                                                                      <a href="https://archive.org/details/animationandcartoons" title="Animation &amp; Cartoons" data-event-click-tracking="TopNav|TopLink-AnimationCartoons">Animation & Cartoons</a>                                                          <a href="https://archive.org/details/artsandmusicvideos" title="Arts &amp; Music" data-event-click-tracking="TopNav|TopLink-ArtsMusic">Arts & Music</a>                                                          <a href="https://archive.org/details/computersandtechvideos" title="Computers &amp; Technology" data-event-click-tracking="TopNav|TopLink-ComputersTechnology">Computers & Technology</a>                                                          <a href="https://archive.org/details/culturalandacademicfilms" title="Cultural &amp; Academic Films" data-event-click-tracking="TopNav|TopLink-CulturalAcademicFilms">Cultural & Academic Films</a>                                                          <a href="https://archive.org/details/ephemera" title="Ephemeral Films" data-event-click-tracking="TopNav|TopLink-EphemeralFilms">Ephemeral Films</a>                                                          <a href="https://archive.org/details/moviesandfilms" title="Movies" data-event-click-tracking="TopNav|TopLink-Movies">Movies</a>                                                          <a href="https://archive.org/details/newsandpublicaffairs" title="News &amp; Public Affairs" data-event-click-tracking="TopNav|TopLink-NewsPublicAffairs">News & Public Affairs</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-4">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/911"
            style="background-image: url('https://archive.org/services/img/911');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/911">Understanding 9/11</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7">
                                                  <div class="linx linx-topped">
                                                                                      <a href="https://archive.org/details/spiritualityandreligion" title="Spirituality &amp; Religion" data-event-click-tracking="TopNav|TopLink-SpiritualityReligion">Spirituality & Religion</a>                                                          <a href="https://archive.org/details/sports" title="Sports Videos" data-event-click-tracking="TopNav|TopLink-SportsVideos">Sports Videos</a>                                                          <a href="https://archive.org/details/television" title="Television" data-event-click-tracking="TopNav|TopLink-Television">Television</a>                                                          <a href="https://archive.org/details/gamevideos" title="Videogame Videos" data-event-click-tracking="TopNav|TopLink-VideogameVideos">Videogame Videos</a>                                                          <a href="https://archive.org/details/vlogs" title="Vlogs" data-event-click-tracking="TopNav|TopLink-Vlogs">Vlogs</a>                                                          <a href="https://archive.org/details/youth_media" title="Youth Media" data-event-click-tracking="TopNav|TopLink-YouthMedia">Youth Media</a>                                                          <a href="https://archive.org/details/additional_collections_video" title="Additional Collections - Video" data-event-click-tracking="TopNav|TopLink-AdditionalCollectionsVideo">Additional Collections - Video</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                    
                  </div><!--/.row-->
                                                                                <div class="row toprow fivecolumns audio">

                                                                <div class="col-sm-2 col-xs-7 col-sm-push-4">
                                                  <div class="linx">
                            <h5>Featured</h5>
                                                        <a
                              href="https://archive.org/details/audio"
                              data-event-click-tracking="TopNav|FeaturedLink-AllAudio"
                              ><span class="iconochive-audio"  aria-hidden="true"></span><span class="sr-only">audio</span> All audio</a>
                                                        <a
                              href="https://archive.org/search.php?query=mediatype:audio&sort=-publicdate"
                              data-event-click-tracking="TopNav|FeaturedLink-ThisJustInAudio"
                              ><span class="iconochive-latest"  aria-hidden="true"></span><span class="sr-only">latest</span> This Just In</a>
                                                          <a href="https://archive.org/details/GratefulDead" title="Grateful Dead" data-event-click-tracking="TopNav|FeaturedLink-GratefulDead">Grateful Dead</a>                                                          <a href="https://archive.org/details/netlabels" title="Netlabels" data-event-click-tracking="TopNav|FeaturedLink-Netlabels">Netlabels</a>                                                          <a href="https://archive.org/details/oldtimeradio" title="Old Time Radio" data-event-click-tracking="TopNav|FeaturedLink-OldTimeRadio">Old Time Radio</a>                                                          <a href="https://archive.org/details/78rpm" title="78 RPMs and Cylinder Recordings" data-event-click-tracking="TopNav|FeaturedLink-78RPMsAndCylinderRecordings">78 RPMs and Cylinder Recordings</a>                                                      </div>

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-2">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/etree"
            style="background-image: url('https://archive.org/services/img/etree');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/etree">Live Music Archive</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7 col-sm-push-2">
                                                  <div class="linx ">
                                                          <h5>Top</h5>
                                                                                      <a href="https://archive.org/details/audio_bookspoetry" title="Audio Books &amp; Poetry" data-event-click-tracking="TopNav|TopLink-AudioBooksPoetry">Audio Books & Poetry</a>                                                          <a href="https://archive.org/details/opensource_audio" title="Community Audio" data-event-click-tracking="TopNav|TopLink-CommunityAudio">Community Audio</a>                                                          <a href="https://archive.org/details/audio_tech" title="Computers &amp; Technology" data-event-click-tracking="TopNav|TopLink-ComputersTechnology">Computers & Technology</a>                                                          <a href="https://archive.org/details/audio_music" title="Music, Arts &amp; Culture" data-event-click-tracking="TopNav|TopLink-MusicArtsCulture">Music, Arts & Culture</a>                                                          <a href="https://archive.org/details/audio_news" title="News &amp; Public Affairs" data-event-click-tracking="TopNav|TopLink-NewsPublicAffairs">News & Public Affairs</a>                                                          <a href="https://archive.org/details/audio_foreign" title="Non-English Audio" data-event-click-tracking="TopNav|TopLink-NonEnglishAudio">Non-English Audio</a>                                                          <a href="https://archive.org/details/radioprograms" title="Radio Programs" data-event-click-tracking="TopNav|TopLink-RadioPrograms">Radio Programs</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-4">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/librivoxaudio"
            style="background-image: url('https://archive.org/services/img/librivoxaudio');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/librivoxaudio">Librivox Free Audiobook</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7">
                                                  <div class="linx linx-topped">
                                                                                      <a href="https://archive.org/details/audio_religion" title="Spirituality &amp; Religion" data-event-click-tracking="TopNav|TopLink-SpiritualityReligion">Spirituality & Religion</a>                                                          <a href="https://archive.org/details/podcasts" title="Podcasts" data-event-click-tracking="TopNav|TopLink-Podcasts">Podcasts</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                    
                  </div><!--/.row-->
                                                                                <div class="row toprow fivecolumns software">

                                                                <div class="col-sm-2 col-xs-7 col-sm-push-4">
                                                  <div class="linx">
                            <h5>Featured</h5>
                                                        <a
                              href="https://archive.org/details/software"
                              data-event-click-tracking="TopNav|FeaturedLink-AllSoftware"
                              ><span class="iconochive-software"  aria-hidden="true"></span><span class="sr-only">software</span> All software</a>
                                                        <a
                              href="https://archive.org/search.php?query=mediatype:software&sort=-publicdate"
                              data-event-click-tracking="TopNav|FeaturedLink-ThisJustInSoftware"
                              ><span class="iconochive-latest"  aria-hidden="true"></span><span class="sr-only">latest</span> This Just In</a>
                                                          <a href="https://archive.org/details/tosec" title="Old School Emulation" data-event-click-tracking="TopNav|FeaturedLink-OldSchoolEmulation">Old School Emulation</a>                                                          <a href="https://archive.org/details/softwarelibrary_msdos_games" title="MS-DOS Games" data-event-click-tracking="TopNav|FeaturedLink-MSDOSGames">MS-DOS Games</a>                                                          <a href="https://archive.org/details/historicalsoftware" title="Historical Software" data-event-click-tracking="TopNav|FeaturedLink-HistoricalSoftware">Historical Software</a>                                                          <a href="https://archive.org/details/classicpcgames" title="Classic PC Games" data-event-click-tracking="TopNav|FeaturedLink-ClassicPCGames">Classic PC Games</a>                                                          <a href="https://archive.org/details/softwarelibrary" title="Software Library" data-event-click-tracking="TopNav|FeaturedLink-SoftwareLibrary">Software Library</a>                                                      </div>

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-2">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/internetarcade"
            style="background-image: url('https://archive.org/services/img/internetarcade');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/internetarcade">Internet Arcade</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7 col-sm-push-2">
                                                  <div class="linx ">
                                                          <h5>Top</h5>
                                                                                      <a href="https://archive.org/details/kodi_archive" title="Kodi Archive and Support File" data-event-click-tracking="TopNav|TopLink-KodiArchiveAndSupportFile">Kodi Archive and Support File</a>                                                          <a href="https://archive.org/details/open_source_software" title="Community Software" data-event-click-tracking="TopNav|TopLink-CommunitySoftware">Community Software</a>                                                          <a href="https://archive.org/details/softwarelibrary_msdos" title="MS-DOS" data-event-click-tracking="TopNav|TopLink-MSDOS">MS-DOS</a>                                                          <a href="https://archive.org/details/vintagesoftware" title="Vintage Software" data-event-click-tracking="TopNav|TopLink-VintageSoftware">Vintage Software</a>                                                          <a href="https://archive.org/details/apkarchive" title="APK" data-event-click-tracking="TopNav|TopLink-APK">APK</a>                                                          <a href="https://archive.org/details/cd-roms" title="CD-ROM Software" data-event-click-tracking="TopNav|TopLink-CDROMSoftware">CD-ROM Software</a>                                                          <a href="https://archive.org/details/cdromsoftware" title="CD-ROM Software Library" data-event-click-tracking="TopNav|TopLink-CDROMSoftwareLibrary">CD-ROM Software Library</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-4">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/consolelivingroom"
            style="background-image: url('https://archive.org/services/img/consolelivingroom');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/consolelivingroom">Console Living Room</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7">
                                                  <div class="linx linx-topped">
                                                                                      <a href="https://archive.org/details/softwaresites" title="Software Sites" data-event-click-tracking="TopNav|TopLink-SoftwareSites">Software Sites</a>                                                          <a href="https://archive.org/details/tucows" title="Tucows Software Library" data-event-click-tracking="TopNav|TopLink-TucowsSoftwareLibrary">Tucows Software Library</a>                                                          <a href="https://archive.org/details/cdbbsarchive" title="Shareware CD-ROMs" data-event-click-tracking="TopNav|TopLink-SharewareCDROMs">Shareware CD-ROMs</a>                                                          <a href="https://archive.org/details/softwarelibrary_zx_spectrum" title="ZX Spectrum" data-event-click-tracking="TopNav|TopLink-ZXSpectrum">ZX Spectrum</a>                                                          <a href="https://archive.org/details/cdromimages" title="CD-ROM Images" data-event-click-tracking="TopNav|TopLink-CDROMImages">CD-ROM Images</a>                                                          <a href="https://archive.org/details/doom-cds" title="DOOM Level CD" data-event-click-tracking="TopNav|TopLink-DOOMLevelCD">DOOM Level CD</a>                                                          <a href="https://archive.org/details/zx_spectrum_library_games" title="ZX Spectrum Library: Games" data-event-click-tracking="TopNav|TopLink-ZXSpectrumLibraryGames">ZX Spectrum Library: Games</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                    
                  </div><!--/.row-->
                                                                                <div class="row toprow fivecolumns image">

                                                                <div class="col-sm-2 col-xs-7 col-sm-push-4">
                                                  <div class="linx">
                            <h5>Featured</h5>
                                                        <a
                              href="https://archive.org/details/image"
                              data-event-click-tracking="TopNav|FeaturedLink-AllImage"
                              ><span class="iconochive-image"  aria-hidden="true"></span><span class="sr-only">image</span> All images</a>
                                                        <a
                              href="https://archive.org/search.php?query=mediatype:image&sort=-publicdate"
                              data-event-click-tracking="TopNav|FeaturedLink-ThisJustInImage"
                              ><span class="iconochive-latest"  aria-hidden="true"></span><span class="sr-only">latest</span> This Just In</a>
                                                          <a href="https://archive.org/details/flickrcommons" title="Flickr Commons" data-event-click-tracking="TopNav|FeaturedLink-FlickrCommons">Flickr Commons</a>                                                          <a href="https://archive.org/details/flickr-ows" title="Occupy Wall Street Flickr" data-event-click-tracking="TopNav|FeaturedLink-OccupyWallStreetFlickr">Occupy Wall Street Flickr</a>                                                          <a href="https://archive.org/details/coverartarchive" title="Cover Art" data-event-click-tracking="TopNav|FeaturedLink-CoverArt">Cover Art</a>                                                          <a href="https://archive.org/details/maps_usgs" title="USGS Maps" data-event-click-tracking="TopNav|FeaturedLink-USGSMaps">USGS Maps</a>                                                      </div>

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-2">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/metropolitanmuseumofart-gallery"
            style="background-image: url('https://archive.org/services/img/metropolitanmuseumofart-gallery');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/metropolitanmuseumofart-gallery">Metropolitan Museum</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7 col-sm-push-2">
                                                  <div class="linx ">
                                                          <h5>Top</h5>
                                                                                      <a href="https://archive.org/details/nasa" data-event-click-tracking="TopNav|TopLink-NASAImages">NASA Images</a>                                                          <a href="https://archive.org/details/solarsystemcollection" data-event-click-tracking="TopNav|TopLink-SolarSystemCollection">Solar System Collection</a>                                                          <a href="https://archive.org/details/amesresearchcenterimagelibrary" data-event-click-tracking="TopNav|TopLink-AmesResearchCenter">Ames Research Center</a>                                                      </div>

                          
                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-5 col-sm-pull-4">
                                                  <div class="widgets">
                            <center class="items_list">        <div class="items_list_img">
          <a
            href="https://archive.org/details/brooklynmuseum"
            style="background-image: url('https://archive.org/services/img/brooklynmuseum');"
            aria-hidden="true"
            data-event-click-tracking="ItemList|ItemListLink"
          ></a>
        </div>
        <a class="stealth boxy-label" data-event-click-tracking="ItemList|ItemListLink" href="https://archive.org/details/brooklynmuseum">Brooklyn Museum</a></center>                          </div><!--/.widgets-->

                                              </div><!--/.col-sm-2-->
                                                                <div class="col-sm-2 col-xs-7">
                                                  <div class="linx linx-topped">
                                                                                  </div>

                          
                                              </div><!--/.col-sm-2-->
                    
                  </div><!--/.row-->
                                          </div><!--/#nav-tophat-->
    
          </div><!--#navwrap1-->
        </div><!--#navwrap2-->

        
    <script type="text/javascript">show_donation_banner();</script>
    <div style="display: block; float: right; width: 28px; margin-top: 4px;">
        <a href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '', 'height=400,width=600'); return false;"
            class="social_button" title="Share on Facebook"><span class="iconochive-facebook" style="color:#3b5998;font-size:160%;"></span></a>
        <a href="#" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(window.location.href) + '&via=internetarchive', '', 'height=400,width=600'); return false;"
            class="social_button" title="Share on Twitter"><span class="iconochive-twitter" style="color:#1dcaff;font-size:160%;"></span></a>
    </div>
    <a href="#" onclick="window.open('http://archive.org/wayback/web_beta_feedback.php', '', 'height=600, width=600'); return false;"
        class="btn btn-primary btn-sm feedback_button" target="_blank">Feedback</a>
    <div id="react-wayback-search"></div>

    <script>
    ReactDOM.render(
      React.createElement(window.WaybackSearchComponent, {
        config: {"api_url_anchor": "/__wb/search/anchor?q={{query}}", "api_url_calendar_captures": "/__wb/calendarcaptures?url={{url}}\u0026selected_year={{year}}", "api_url_host": "/__wb/search/host?q={{query}}", "api_url_metadata": "/__wb/search/metadata?q={{query}}", "api_url_sitemap": "/web/timemap/json?url={{url}}/\u0026fl=timestamp:4,original,urlkey\u0026matchType=prefix\u0026filter=statuscode:200\u0026filter=mimetype:text/html\u0026collapse=urlkey\u0026collapse=timestamp:4\u0026limit=100000", "api_url_sparkline": "/__wb/sparkline?url={{url}}\u0026collection=web\u0026output=json", "bundling": {"public_path": "/static/bower_components/wayback-search-js/dist"}, "diff": {"cdxServer": "/cdx/", "diffgraphPrefix": "/web/diffgraph/", "limit": 3000, "maxSunburstLevelLength": "70", "snapshotsPrefix": "/web/", "sparklineURL": "/__wb/sparkline", "urlPrefix": "/web/diff/", "waybackDiscoverDiff": "https://gext-api.archive.org/services/simhash", "webMonitoringProcessingURL": "https://gext-api.archive.org/services/diff"}, "features": {"beta_promo": false, "changes_calendar": true, "landing": "carousel", "landing_layout_with_trend": false, "search": "v1"}, "num_of_explored_web_pages": "391 billion", "url_feedback_page": "https://archive.org/wayback/web_beta_feedback.php", "url_playback": "/web/{{date}}/{{url}}", "url_playback_screenshot": "/web/", "url_prefix_anchor": "/__wb/search/anchor?q=", "url_prefix_explore": "/__wb/explore?url=", "url_prefix_host": "/__wb/search/host?q=", "url_prefix_metadata": "/__wb/search/metadata?q=", "url_prefix_playback": "/web/", "url_prefix_playback_screenshot": "/web/", "url_save_page_now": "/save/{{query}}", "url_search_page": "/web/*/{{url}}/*", "url_thumb": "https:///thumb/{{item}}?generate=1"}
      }),
      document.getElementById("react-wayback-search")
    );
    </script>
    
    <footer>
      <div id="footerHome">
        <p>
          The Wayback Machine is an initiative of the
          <a href="http://archive.org/">Internet Archive</a>,
          a 501(c)(3) non-profit, building a digital library of
          Internet sites and other cultural artifacts in digital form.
          <br/>Other <a href="http://archive.org/projects/">projects</a> include
          <a href="https://openlibrary.org/">Open Library</a> &amp;
          <a href="https://archive-it.org">archive-it.org</a>.
        </p>
        <p>
          Your use of the Wayback Machine is subject to the Internet Archive's
          <a href="http://archive.org/about/terms.php">Terms of Use</a>.
        </p>
      </div>
    </footer>
  </body>
</html>