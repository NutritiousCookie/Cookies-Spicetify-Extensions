const showFriendsActivity = () => {
	let button = document.getElementById("4D3C2B1AA");
	if(button.classList.contains('main-genericButton-buttonActive')){
		 button.classList.remove("main-genericButton-buttonActive");
		 document.querySelector(".Root__right-sidebar").style.display = "none";
	}
  else{
		 button.classList.add("main-genericButton-buttonActive");
		 document.querySelector(".Root__right-sidebar").style.display = "block";
  }
}

const removeFriendsActivityInit = () => {
  const { Platform } = Spicetify;
  if (!(Platform)) {
    setTimeout(removeFriendsActivityInit, 2000);
		console.log('could not find spicetify, retrying')
    return
  }

  if (!document.querySelector(".Root__right-sidebar")) {
    setTimeout(removeFriendsActivityInit, 4000);
		console.log('could not find window, retrying')
    return
  }
  // BTO TO SHOW FRIENDS ACTIVITY
  let openBtn = document.createElement("button");
  let style_openBtn = document.createAttribute("style");
  style_openBtn.value = "display:flex";
  openBtn.attributes.setNamedItem(style_openBtn);
  let id_openBtn = document.createAttribute("id");
  id_openBtn.value = "4D3C2B1AA";
	openBtn.attributes.setNamedItem(id_openBtn);
	let class_openBtn = document.createAttribute("class");
  class_openBtn.value = "4D3C2B1AA";
	openBtn.attributes.setNamedItem(class_openBtn);	
  openBtn.innerHTML = '<span aria-hidden="true" class="eJHlti"><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="uPxdw"><path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path></svg></span>';
  document.querySelector(".main-nowPlayingBar-right").firstElementChild.prepend(openBtn);
  document.getElementById("4D3C2B1AA").addEventListener("click", showFriendsActivity);
};

window.onload = function() {
  setTimeout(removeFriendsActivityInit, 4000);
};