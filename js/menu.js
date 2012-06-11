/* The link details */
var links = new Array ("link1", "link2", "link3");
var links_text = new Array ("Link 1", "Link 2", "Link 3");
var links_url = new Array ("link1.htm", "link2.htm", "link3.htm");
/* Resolve the location */ var loc=String(this.location);
loc=loc.split("/");
loc=loc[loc.length-1].split(".");
loc=loc[loc.length-2];
/* Menu generating function */ function dyn_menu_gen()  {
for(var i=0;
i<links.length;
i++)  {
if(loc==links[i])  {
    document.write('<table class="explorer_active" onmouseover="this.className=\'explorer_active\';
    return true" onmouseout="this.className=\'explorer_active\';
    return true" onmousedown="this.className=\'explorer_active\';
    return true" onclick="location.href=\'' + links_url[i] + '\'"><tr><td> <a href="' + links_url[i] + '" class="menu">' + links_text[i] + ' <b>Â»</b></a></td></tr></table>');

}

else  {
    document.write('<table class="explorer" onmouseover="this. className=\'explorer_over\';
    return true" onmouseout="this.className= \'explorer\';
    return true" onmousedown="this.className= \'explorer_down\';
    return true" onclick="location.href=\'' + links_url[i] + '\'"><tr><td><a href="' + links_url[i] + '" class="menu">' + links_text[i] + '</a></td></tr></table>');

}

document.write('<table cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"><tr><td></td></tr></table>');

}


}

/* Generate the menu */ dyn_menu_gen();

