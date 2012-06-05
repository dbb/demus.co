var abt = "about";
var ctc = "contact";

var fb = "demusinc";
var tw = "DemusInc";

var sep_size = 8;
var sep = "|";

for ( i=1; i<=sep_size; i++ ) {
    sep = '&nbsp' + sep + '&nbsp';
}

var follow = '<a href="https://twitter.com/DemusInc" class="twitter-follow-button" data-show-count="false">Follow @DemusInc</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';

document.write( abt.link( abt ), sep, ctc.link( "/img/contact.png" ), sep, follow )

