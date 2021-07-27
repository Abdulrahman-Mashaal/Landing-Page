/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*
*
*  Start the global variables scope
*
*/

// set a default value for section number
let numberOfSection = 0;
let list = document.getElementById('navbar__list');
//Determine a first child for main tag to add a sections
const sectionNodeLocation = document.getElementsByTagName('main')[0];
//Get the reset screen view button
let BackToTob = document.getElementById("topBtn");



/*
*
*  End the global variables scope
*
*/


/*
*
*  Start the navbar set attributes
*
*/

// set list tag attributes
const setListTagAttr = () =>{
  const li_Tag = document.createElement('li');
  li_Tag.className = "menu__link";
  li_Tag.appendChild(setAnchorTagAttr());
  return li_Tag;
};
// set anchor tag attributes 
const setAnchorTagAttr = () =>{
  const anchor_Tag = document.createElement('a');
  anchor_Tag.setAttribute("data_link", ('section' + (numberOfSection).toString()));
  anchor_Tag.className = "scroll_to";
  anchor_Tag.style.textDecoration = ("none");
  anchor_Tag.innerText = ('Section ' + numberOfSection);
  return anchor_Tag;
};

// appending the list features 
const unorderedListContent = () => {
  let listItem = list.appendChild(setListTagAttr());
  navbar_ScrollAutoStyling();
  return listItem;
};


/*
*
*  End the navbar set attributes
*
*/

/*
*
*  Start the section content set attributes
*
*/


// set h2 tag attributes 
const setH2TagAttr = () =>{
  const h2_tag = document.createElement("h2");
  let h2TxtContent = document.createTextNode(('Section ' + (numberOfSection += 1)));
  h2_tag.appendChild(h2TxtContent);
  return h2_tag;
};

// set first paragraph tag attributes 
const setFirstPTagAttr = () =>{
  const first_pTag = document.createElement("p");
  let firstTxtContent = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
  first_pTag.appendChild(firstTxtContent);
  return first_pTag;
};

// set second paragraph tag attributes 
const setSecondPTagAttr = () =>{
  const second_pTag = document.createElement("p");
  let secondTxtContent = document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
  second_pTag.appendChild(secondTxtContent);
  return second_pTag;
};


// set div tag attributes 
const setDivTagAttr = () =>{
  // add div tag 
  const div_Tag = document.createElement('div');
  div_Tag.className = ("landing__container");
  // add heading tag
  div_Tag.appendChild(setH2TagAttr());
  // add paragraph 01 
  div_Tag.appendChild(setFirstPTagAttr());
  // add paragraph 02
  div_Tag.appendChild(setSecondPTagAttr());
  return div_Tag;
};

// set section tag attributes 

const setSectionTagAttr = () =>{
  // add section tag
  const section_Tag = document.createElement("section");
  section_Tag.appendChild(setDivTagAttr());
  section_Tag.id = ('section' + (numberOfSection));
  section_Tag.className = ("your-active-class");
  section_Tag.setAttribute("data-nav", ('section' + (numberOfSection)));
  return section_Tag;
};


// set section attributes and contents
const SectionContent = () => {
  
  sectionNodeLocation.insertAdjacentHTML('beforeend', setSectionTagAttr().outerHTML);
  // call unorderedListContent function
  unorderedListContent();
  navbar_onclickMovement();

};

/*
*
*  End the section content set attributes
*
*/





/*
*
*  Start set attributes to scroll to top button
*
*/

// When the user scrolls down 400px from the top of the document, show the button

const toggle_displayScrollTopButton = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    BackToTob.style.display = "inline-block";
  } else {
    BackToTob.style.display = "none";
    if(document.querySelector(".active_link") !==null && document.querySelector(".your-active-class")!==null){
      document.querySelector(".active_link").classList.remove("active_link");
      document.querySelector(".your-active-class").classList.remove("your-active-class");
    }
    
  }
};

// When the user clicks on the button, scroll to the top of the page
const active_ScrollTopButton = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.querySelector(".active_link").classList.remove("active_link");
  document.querySelector(".your-active-class").classList.remove("your-active-class");
};


/*
*
*  End set attributes to scroll to top button
*
*/


/*
*
*  Start set attributes activate a navbar links movements between sections
*
*/

// activate a navbar links to movements between sections
const navbar_onclickMovement = () => {
  let anchorItems = document.querySelectorAll(".scroll_to");
  anchorItems.forEach((target) => {
    target.addEventListener('click', () => {
      
      let navbar_SectionItem = document.getElementById(target.getAttribute("data_link"));
      navbar_SectionItem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
  });

};


/*
*
*  End set attributes activate a navbar links styling with movements between sections using scroll
*
*/

/*
*
*  Start set attributes to activate the navbar links styling with movements between sections using scroll
*
*/


//Automatically update navigation or list group components based on scroll position to indicate which link is currently active in the viewport


const navbar_ScrollAutoStyling = () => {
  let scrollSection = document.querySelectorAll("section");
  let scrollNavLink = document.querySelectorAll("header nav ul li a");
  window.onscroll = () => {
    
    scrollSection.forEach(Sections => {
      let top = window.scrollY;
      let offset = Sections.offsetTop - 200;
      let height = Sections.offsetHeight;
      let id = Sections.getAttribute("id");


// using section id to add and remove class from section and link
        if (top >= offset && top < offset + height) {
          scrollNavLink.forEach(current_link => {
            current_link.classList.remove("active_link");
            document.querySelector("header nav ul li a[data_link=" + id + "]").classList.add("active_link");
          });
          

          scrollSection.forEach(current_section => {
            current_section.classList.remove("your-active-class");
            document.getElementById(id).classList.add("your-active-class");
          });
          toggle_displayScrollTopButton();
      }
    })
  }
};

/*
*
*  End set attributes to activate the navbar links styling with movements between sections using scroll
*
*/

// by default call at least 4 sections

SectionContent();
SectionContent();
SectionContent();
SectionContent();


// active add section btn 
document.getElementById("nav_Section").addEventListener("click", SectionContent);

// activate top btn exchange view screen from any section to top page
document.getElementById("topBtn").addEventListener("click", active_ScrollTopButton);


