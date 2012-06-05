var abt = "about";
var ctc = "contact";

var fb = "demusinc";
var tw = "DemusInc";

var sep_size = 8;
var sep = "|";

for ( i=1; i<=sep_size; i++ ) {
    sep = '&nbsp' + sep + '&nbsp';
}

var follow = '<a href="https://twitter.com/DemusInc">Follow @DemusInc <img src="/img/twitter_24.png" /></a>';
var like = '<a href="https://facebook.com/DemusInc">Like us <img src="/img/facebook_24.png" /></a>';

document.write( abt.link( abt ), sep, ctc.link( "/img/contact.png" ), sep, follow, sep, like )

