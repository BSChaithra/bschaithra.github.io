
	let moon = document.getElementById("moon");
	
	moon.addEventListener("click", changeToDarkTheme);
	
	let sun = document.getElementById("sun");
	
	let rootVar = document.querySelector(":root");
	
	let cssVar = getComputedStyle(rootVar);
	
	let introText = document.getElementById("intro");
	
	let aboutText = document.getElementById("about");
	
	let cardText = document.getElementsByClassName("card-text");
	
	let cardFooterText = document.querySelectorAll(".card-footer > div");
	
	let smallScreen = document.getElementById("small-screen");
	
	let designForLightMode = document.getElementById("design-div-light-mode");
	
	let designForDarkMode = document.getElementById("design-div-dark-mode");
	
	let darkModeText = document.getElementsByClassName("dark-mode-text");
	
	let svgLiveIcon = document.getElementById("svg-live-icon");
	
	let offcanvasMenu = document.getElementById("offcanvasMenu");
	
	let toggleMenu = document.getElementById("toggle-menu");
	
	function closeCanvas()
	{
		document.body.style.removeProperty('overflow');
		document.body.style.removeProperty('padding-right');
		
		const elementToRemoveClass = document.getElementById('offcanvasMenu');
		elementToRemoveClass.classList.remove('show');
		
		const elementToRemove = document.querySelector('.offcanvas-backdrop');
		     
		if (elementToRemove && elementToRemove.parentNode) 
		{
			elementToRemove.parentNode.removeChild(elementToRemove);
		}
	}

	toggleMenu.addEventListener("click", function(){
		     
			 offcanvasMenu.style.setProperty("display", "block");  
	});
	
	function changeToDarkTheme()
	{
		rootVar.style.setProperty('--body-background-color', 'rgb(10, 25, 47)');
		rootVar.style.setProperty('--header-footer-color', 'rgb(23, 42, 69)' );
		rootVar.style.setProperty('--card-background-color', 'rgb(23, 42, 69)' );
		rootVar.style.setProperty('--description-text-social-media-icon-color', '#D0F6F6');
		rootVar.style.setProperty('--card-form-fields-border-color', 'transparent');
		
		moon.style.setProperty('background-color', 'var(--header-footer-color)');
		moon.style.setProperty('color', 'var(--header-menu-button-text-footer-text-color)');
		moon.style.setProperty('cursor', 'default');
		
		sun.style.setProperty('background-color', 'var(--header-menu-button-text-footer-text-color)');
		sun.style.setProperty('color', 'var(--body-background-color)');
		sun.style.setProperty('cursor', 'pointer');
		
		smallScreen.setAttribute('src','images/small-screen-menu-dark.png');
		
		introText.style.setProperty('color', 'var(--description-text-social-media-icon-color)');
		aboutText.style.setProperty('color', 'var(--description-text-social-media-icon-color)');
		
		designForDarkMode.style.setProperty('display', 'block');
		designForLightMode.style.setProperty('display', 'none');
		
		svgLiveIcon.setAttribute('fill', 'white');
		
		for(let i=0; i<cardText.length; i++)
		{
			cardText[i].style.setProperty('color', 'var(--description-text-social-media-icon-color)');
		}
		for(let i=0; i<cardFooterText.length; i++)
		{
			cardFooterText[i].style.setProperty('color', 'var(--description-text-social-media-icon-color)');
		}
		sun.addEventListener("click", changeToLightTheme);

		for(let i=0; i<darkModeText.length; i++)
		{
			darkModeText[i].style.color = '#D0F6F6';
		}

	}
	
	function changeToLightTheme()
	{
	    rootVar.style.setProperty('--body-background-color', '#D0F6F6');
		rootVar.style.setProperty('--header-footer-color', 'teal' );
		rootVar.style.setProperty('--card-background-color', 'azure' );
		rootVar.style.setProperty('--description-text-social-media-icon-color', 'black');
		rootVar.style.setProperty('--card-form-fields-border-color', 'teal');
		
		moon.style.setProperty('background-color', 'var(--header-menu-button-text-footer-text-color)');
		moon.style.setProperty('color', 'var(--description-text-social-media-icon-color)');
		moon.style.setProperty('cursor', 'pointer');
		
		sun.style.setProperty('background-color', 'var(--header-footer-color)');
		sun.style.setProperty('color', 'var(--header-menu-button-text-footer-text-color)');
		sun.style.setProperty('cursor', 'default');	
		
		smallScreen.setAttribute('src','images/small-screen-menu-light.png');
		
		introText.style.setProperty('color', 'var(--description-text-social-media-icon-color)');
		
		designForDarkMode.style.setProperty('display', 'none');
		designForLightMode.style.setProperty('display', 'block');
		
		svgLiveIcon.setAttribute('fill', 'var(--card-form-fields-border-color)');
		
		for(let i=0; i<darkModeText.length; i++)
		{
			darkModeText[i].style.color = 'black';
		}

	}
