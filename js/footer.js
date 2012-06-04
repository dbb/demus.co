var abt = "about";
var ctc = "contact";

var sep_size = 8;
var sep = "|";

for ( i=1; i<=sep_size; i++ ) {
    sep = '&nbsp' + sep + '&nbsp';
}

document.write( abt.link( abt ), sep, ctc.link( "/img/contact.png" ) )

