var fonts =  "mplus-1mn-regular.ttf  mplus-2c-regular.ttf " +
    "mplus-1mn-thin.ttf    mplus-2c-thin.ttf " +
    "mplus-1m-regular.ttf  mplus-2m-bold.ttf " +
    "mplus-1c-black.ttf    mplus-1m-thin.ttf      mplus-2m-light.ttf " +
    "mplus-1c-bold.ttf     " +
    "mplus-1p-black.ttf    mplus-2m-medium.ttf " +
    "mplus-1c-heavy.ttf    mplus-1p-bold.ttf      mplus-2m-regular.ttf " +
    "mplus-1c-light.ttf    mplus-1p-heavy.ttf     mplus-2m-thin.ttf " +
    "mplus-1c-medium.ttf   mplus-1p-light.ttf     mplus-2p-black.ttf " +
    "mplus-1c-regular.ttf  mplus-1p-medium.ttf    mplus-2p-bold.ttf " +
    "mplus-1c-thin.ttf     mplus-1p-regular.ttf   mplus-2p-heavy.ttf " +
    "mplus-1m-bold.ttf     mplus-1p-thin.ttf      mplus-2p-light.ttf " +
    "mplus-1m-light.ttf    mplus-2c-black.ttf     mplus-2p-medium.ttf " +
    "mplus-1m-medium.ttf   mplus-2c-bold.ttf      mplus-2p-regular.ttf " +
    "mplus-1mn-bold.ttf    mplus-2c-heavy.ttf     mplus-2p-thin.ttf " +
    "mplus-1mn-light.ttf   mplus-2c-light.ttf " +    
    "mplus-1mn-medium.ttf  mplus-2c-medium.ttf";
fonts = fonts.match(/\S+/g);
var regex = /-\s+-/;

fonts.sort(function( a, b){
    
    return b.localeCompare( a );
});

var l = fonts.length, div, css = document.createElement('style'), p, name, fontname;

while( fonts[--l] ){

    name = fonts[l].split('.')[0];
    
    fontname = name;// .replace(/(m)(plus-)([^-]+)-(.+)/,function(str,p1,p2,p3,p4){
    // //console.log( arguments );
    //     return 'M' + p3 + p4;
    // });

    p = document.createElement('p');
    p.setAttribute( 'style', 'font-family: ' + fontname + ';' );
    p.innerHTML = 'The razor-toothed piranhas of the genera Serrasalmus and Pygocentrus are the most ferocious freshwater fish in the world. In reality, they seldom attack a human.' +
          '</div>';
    div = document.createElement('div');

    div.innerHTML = '<label>' + name + '</label> ' +
        '<a href="webfonts/' + name + '-webfont.woff">WOFF</a> ' +
        '<a href="webfonts/' + name + '-webfont.eot">EOT</a> ' +
        '<a href="webfonts/' + name.replace('mplus-','M+').replace('-','') + '-demo.html">Demo</a>';

    div.appendChild( p );

    document.body.appendChild( div );

    css.innerHTML += '\n\n@font-face \n' +
        "{\n" + 
        "  font-family: " + fontname + ";\n" +
        "  src: url('webfonts/" + name + "-webfont.eot');\n" +
        "  src: url('webfonts/" + name + "-webfont.eot?#iefix') format('embedded-opentype'),\n" +
        "       url('webfonts/" + name + "-webfont.woff') format('woff')\n" +
        "}";
    
}
document.body.appendChild( css );