#Documentation for Side Navigation Bar

##Usage
This is designed to be a fixed navigation bar on the side of your page. Since the navigation bar works in tandem with different sections on the page, this plugin is best used on one-page websites. That said, feel free to adapt it as you wish!

##Demo
[View live demo](http://lhartfiel.github.io/fixednavbar/)

##Necessary Files
This plugin requires the following files:

* main.css
* pluginScript.js
* main.js (optional)

##Beginning Steps
####Link appropriate files
You will need to begin by linking the provided .js and .css files to your html.

1. Load jQuery from CDN by inserting the script below just before the closing body tag in your html file.

	```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>```

2. The plugin script should be pasted just below the jQuery CDN in your html file:

	```<script src="pluginScript.js"></script>```

3. Add main CSS stylesheet. Place the code below between your header tags (`<header></header>`) in your html file:

	```<link rel="stylesheet" href="main.css">```

NOTE: if your 'pluginScript.js' or your 'main.css' is within a folder, be sure your path names indicate this. For example, if your file is within a separate folder called js, your javascript source would change to the following: ```script src="js/pluginScript.js```

###Add Classes to Your HTML
A nice starting point for your one-page website is to use the included ```index.html``` file, which has the bare bones structure. However, if you already have an ```index.html``` file, then refer to the instructions below.

To run properly, this script requires you to add certain classes to your html markup.

1. `.navText`

The `navText` class should be placed on the text elements in your navigation bar. This is the content that will slide down from the main navigation links once they are clicked.

To do so, go into your html file, and add a class attribute to every text element that slides down in your navigation.

	<p class=navText>This is the text that will drop down from your navigation bar</p>

2. `.menu`
 
This class is optional. In the live demo, you should see the text "Menu" at the top of the nav bar. It collapses any open menu links when it is clicked on.  

To use, add a class of 'menu' to your navigation div. To do this, go to your html file and add a class attribute within your nav tags:

	<nav class="menu"></nav>
 
###ADD IDs to Your HTML	
You will need to add an id attribute to each of your navigation links. The name of the id is not important, but you will need to add ones on each link. An example is provided below.

	<li id="home">Home</li>

	<li id="link2">Link2</li>

	<li id="link3">Link3</li>

##Customization
####jQuery Customization
You have the ability to modify two jQuery methods:
* ```slideDown```
* ```scrollTop```

To do so, open up the ```main.js``` file included in this source folder or copy the code below and paste it into your own javascript .js file. If you aren't working with any other main.js files, feel free use the ```main.js``` file included with this plugin. 

	
	$(document).ready(function(){
		$('.menu').navBar({
			slideDown: 500,
			scrollTop: 500
		});
	});
	

The ```slideDown``` method above controls the speed at which the text in the navigation bar is revealed.
The ```scrollTop``` method controls the speed at which the main body anchors move down the page when a link in the navigation bar is clicked.

The default number for both of these is 1500, which is listed in milliseconds.

##CSS Styles
####Navigation Bar
The CSS stylesheet contains a variety of styles (such as headers) that can be customized based on your project. I would suggest you begin by reviewing the included `main.css` file and incorporating these classes/styles into your own stylesheet, where appropriate. 

The following class MUST exist in your .css file, otherwise you will be missing certain color styles. It must be written as ".currentState" in your css file to work correctly.
* ```.currentState```
The ```.currentState``` class changes the color of a navigation link when it has been clicked. You can change/add any properties within the css file.

To make additional style changes to the navigation bar, you can change the properties for the following classes:
* ```.navContain``` 
* ```.navLink``` 
* ```.navLink:hover``` 


##Additional Notes
This plugin is designed so you can adapt it to your own needs. If anything important is missing from the document, or anything is unclear, please feel free to make updates.