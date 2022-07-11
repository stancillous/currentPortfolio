gsap.registerPlugin(ScrollTrigger)

window.addEventListener('load',()=>{
    cursorAnimation()
    // setStates()
    allTimelines()
    showLInks()
    linksClicked() 
    animateAboutSection()
    animateProjectsSection()
    pinSendMessageSection()
    animateSendMessageSection()
    animateContactSection()


})  


const hamburgerButton = document.querySelector('.hamburger-button') //button
const navlinks  = document.querySelector('.page-header-links') //the links container
const aLinks = document.querySelectorAll('.menu-links-items-a')  //the a tags in the header section

const projectsInfoDiv = document.querySelectorAll('.project-info') //all the divs showing the info about my projects

const submitBtn = document.querySelector('#submitButton') //the button on the send meessage section




//FUNCTION FOR THE MOUSE FOLLOWER
function cursorAnimation(){
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        el: null,
        opacity:.4,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 1,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });

    //HIDING THE CURSOR FOLLOWER WHEN ON INPUTS
    const inputAndTextarea = document.querySelectorAll('.sendMessageSectionInputs');

    inputAndTextarea.forEach((item)=>{
        
        item.addEventListener('mouseenter', () => {
            cursor.hide();
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.show();
        });

    })


     //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
     document.querySelector('#linkedinSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('linkedin')
    })
    document.querySelector('#linkedinSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('linkedin')
    })

    //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
    document.querySelector('#githubSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('github')
    })
    document.querySelector('#githubSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('github')
    })


    //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
    document.querySelector('#behanceSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('behance')
    })
    document.querySelector('#behanceSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('behance')
    })


    //SETTING TEXT TO THE SOCIAL MEDIA ICONS FIXED ON THE PAGE
    document.querySelector('#telegramSocialLink').addEventListener('mouseenter',()=>{
        cursor.setText('telegram')
    })
    document.querySelector('#telegramSocialLink').addEventListener('mouseleave',()=>{
        cursor.removeText('telegram')
    })





    //SELECTING THE a TAGS IN THE CONTACT SECTION
    const ContactSectionLinkedin  = document.querySelector('#contactSectionLinkedin');
    const ContactSectionBehance = document.querySelector('#contactSectionBehance');
    const contactSectionGithub = document.querySelector('#contactSectionGithub');
    const ContactSectionTelegram = document.querySelector('#contactSectionTelegram');

    

    //adding image to the cursor when hovering over the linkedin link
    ContactSectionLinkedin .addEventListener('mouseenter', () => {
        cursor.setImg('images/linkedinImage.png')

    });

    ContactSectionLinkedin .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });

    //adding image when hovering over the behance link
    ContactSectionBehance .addEventListener('mouseenter', () => {
        cursor.setImg('images/behanceimage.png')
    });

    ContactSectionBehance .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });


    //adding image when hovering over the github link
    contactSectionGithub .addEventListener('mouseenter', () => {
        cursor.setImg('images/githubimage.png')
    });

    contactSectionGithub .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });


    //adding image when hovering over the telegram link
    ContactSectionTelegram .addEventListener('mouseenter', () => {
        cursor.setImg('images/telegramimage.png')
    });

    ContactSectionTelegram .addEventListener('mouseleave', () => {
        cursor.removeImg()
    });

 



}



//FUNCTION TO SHOW THE MENU LINKS
function showLInks(){
    //TIMLINE TO ANIMATE THE HEADER LINKS WHEN THE BUTTON IS CLICKED
    aTagsTl =  gsap.timeline({paused:true})
    aTagsTl.from('.menu-links-items',{x:-22,stagger:.15})
   

    hamburgerButton.addEventListener('click',()=>{

        hamburgerButton.classList.toggle('hamburgerclicked')
        navlinks.classList.toggle('show-links')
        
        //animating the links only if the nav menu is showing
        if(navlinks.classList.contains('show-links')){
            aTagsTl.play()
        }

        else{
            aTagsTl.reverse()
        }

    })
}


//FUNCTION FOR ALL THE TIMELINES
function allTimelines(){

    // *********************************************************

    //TIMLEINE FOR ANIMATING THE TOP SECTION WHEN PAGE LOADS
    let topPageSectionTl = gsap.timeline({defaults:{
        ease:'Power0.easeNone',
        duration:.4,
    }})

    topPageSectionTl.to('.main',{opacity:1,ease:'none'})
            .from('.menu-links-items',{y:-33,opacity:0,ease:'none',stagger:.1}) //the menu links
            .from('#line',{x:23, opacity:0},'<') //the line on the menu links right side
            .from('.fade-in-title',{opacity:0,y:33,stagger:.1}) //animating the names on the top page section
            .fromTo('.social-links',{opacity:0},{opacity:1})  // the div on the left side with the social media icons
            .fromTo('.navigate-div',{opacity:0},{opacity:1},'<') //the line on the right side of the page
            
    // *********************************************************
  
    //TIMELINE TO PIN THE TOP PAGE SECTION WHEN USER SCROLLS
    let pinTopSectionTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.top-page-section',
            // markers:true,
            ease:'none',
            start:'top top',
            start:'top 0%',
            pin:true,
            scrub:1,
            pinSpacing:false,

        }
    }) 

    // *********************************************************


    //ANIMATING THE DIVS WITH THE PROJECT INFO WHEN HOVERED ON
    projectsInfoDiv.forEach((item)=>{
        let projectsInfoDivTl = gsap.timeline({paused:true})

        projectsInfoDivTl.to(item,{y:-8})
        
        item.addEventListener('mouseenter',()=>{
            projectsInfoDivTl.play()
        })

        item.addEventListener('mouseleave',()=>{
        projectsInfoDivTl.reverse()  
        })
    })

    // *********************************************************

    //TIMELINE TO ANIMATE THE SUBMIT BUTTON WHEN HOVERED ON
    let submitBtnTl = gsap.timeline({paused:true})
    submitBtnTl.to('#animatingSubmitButton',{ease:'Power0.easeNone',duration:.2,clipPath:'inset(0 1% 0 0)'})

    submitBtn.addEventListener('mouseenter',()=>{

        submitBtnTl.play()
        submitBtn.style.color = 'white'
    })
    submitBtn.addEventListener('mouseleave',()=>{
        submitBtnTl.reverse()
        submitBtn.style.color = 'black'


    })


}


//FUNCTION TO HIDE THE MENU LINKS WHEN A LINK IS CLICKED
function linksClicked(){

    aLinks.forEach((item)=>{
        //HIDING THE MENU LINKS CONTAINER WHEN A LINK IS CLICKED

        item.addEventListener('click',()=>{
            navlinks.classList.remove('show-links')  //HIDE THE LINKS CONTAINER
            hamburgerButton.classList.remove('hamburgerclicked') //REMOVE THE ANIMATION ON THE HAMBURGER BUTTON
        })
    })
}


function animateAboutSection(){

    let aboutSectionTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.about-me-section',
            start:'top 60%',
            // markers:true,
            ease:'back.easeOut',
            ease:'bounce.easeOut',
            duration:.6,
            toggleActions:'play none none reverse'
    
    
        }
    })
    
    
    aboutSectionTl.fromTo('.about-me-title, .about-paragraph, .image', {opacity:0,y:46},{opacity:1,y:0})
    
    
}

function animateProjectsSection(){
    let ProjectsSectionTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.projects-section',
            start:'top 80%',
            // start:'top center',
            duration:.6,
            // markers:true,
            ease:'Power0.easeNone',
            toggleActions:'play none none reverse'
    
    
        }
    })
   
    ProjectsSectionTl.fromTo('.projects-section',{opacity:0},{opacity:1})
}



//FUNCTION TO PIN THE SEND MESSAGE SECTION
function pinSendMessageSection(){
    let pinSendMessageSectionTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.send-message-section',
            start:'top top',
            // markers:true,
            pin:true,
            pinSpacing:false,
    
            duration:3,
            // scrub:.5,
            ease:'Power0.easeNone'
    
        }
    })
    
}

function animateSendMessageSection(){
    let sendMessageSectionTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.send-message-section',
            start:'top 50%',
            // markers:true,
            ease:'bounce.easeOut',
            duration:.6,
            toggleActions:'play none none reverse'
    
    
        }
    })
    sendMessageSectionTl.from('.sendMessageSectionInputs',{y:22,opacity:0,stagger:.1})
            .fromTo('#submitButton',{clipPath:'inset(0% 100% 0% 0%)'},{duration:.4,clipPath:'inset(0% 0% 0% 0%)'})

}




function animateContactSection(){

    let contactSectionTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.contact-section',
            start:'top 50%',
            // markers:true,
            ease:'back.easeOut',
            ease:'bounce.easeOut',
            duration:.6,
            toggleActions:'play none none reverse'
    
    
        }
    })
    
    contactSectionTl.from('.contact-section-icons',{y:22,opacity:0,stagger:.1})
    
}


