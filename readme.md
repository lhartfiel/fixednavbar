#Documentation for Side Navigation Bar

##Usage
This is designed to be a fixed navigation bar on the side of your page. Since the navigation bar works in tandem with different sections on the page, this plugin is best used on one-page websites. That said, feel free to adapt it as you wish!

##Demo
View live demo

## Necessary Files
This plugin requires the following files:

* main.css
* pluginScript.js
* main.js (optional)

##Beginning Steps
###Link appropriate files
You will need to begin by linking the provided.js and .css files to your html.

1. Load jQuery from CDN before the closing body tag (</body>) in your html file. 
> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

2. Add the jquery plugin script below the above script in your html file:
> <script src="pluginScript.js"></script>

NOTE: if your <pluginScript.js> is within a folder, be sure to add the path in your src. For example, if your file is within a separate folder called js, your source would change to the following: <script src="js/pluginScript.js"></script>

3. Add main CSS stylesheet. Place the code below between your header tags (<header></header>) in your html file:
> <link rel="stylesheet" href="main.css">

Be sure your href path matches the location of your css file. See the above note. 

##Add Classes to Your HTML
To run properly, this script requires you to add certain classes to your html markup.

##menu
THIS IS OPTIONAL. If you don't have your own .js file and want to customize some of the jquery functionality, use the <main.js> file that has been provided for you. 

To use,add a class of <menu> to your navigation div. To do this, go to your html file and add a class attribute within your nav tags:
	<nav class="menu"></nav>
##navText
The <navText> class should be placed on the text elements in your navigation bar. This is the content that will slide down from the main navigation links once they are clicked.

To do so, go into your html file, and add a class attribute to every text element that slides down in your navigation.
	<p class=navText>This is the text that will drop down from your navigation bar</p> 

##ADD IDs to Your HTML	
You will need to add an id attribute to each of your navigation links. The name of the id is not important, but you will need to add one on each link.
	<li id="home">Home</li>
	<li id="link2">Link2</li>
	<li id="link3">Link3</li>

##Customization
###jQuery Customization
You have the ability to modify two jQuery methods:
* <slideDown>
* <scrollTop>

To do so, open up the <main.js> file included in this source folder or copy the code below and paste it into your own javascript <.js> file. If you aren't working with any other <.js> files, feel free to keep the <main.js> file and simply add it to your directory. 
	< $(document).ready(function(){
		$('.menu').navBar({
			slideDown: 500,
			scrollTop: 500
		});

	});>

The <slideDown> method above controls the speed at which the text in the navigation bar is revealed.
The <scrollTop> method controls the speed at which the main body anchors move down the page when a link in the navigation bar is clicked.

The default number for both of these is 1500, which is listed in milliseconds.

###CSS Styles
##Links
The following classes SHOULD exist in your .css file, otherwise you will be missing certain color styles.
* <.active>
The .active class will need to be added to your css styles. This style controls the look of the navigation bar on hover. You can change any properties to fit your own style requirements.
* <.currentState>
The .currentState class changes the color of a navigation link when it has been clicked. You can change any properties, including font-size, color and background-color to fit your needs.

###Additional Notes
This plugin is designed so you can adapt it to your own needs. If anything important is missing from the document, or anything is unclear, please feel free to make updates.