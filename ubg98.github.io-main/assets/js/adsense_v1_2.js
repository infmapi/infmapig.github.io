function loadGoogleAdsense() {    
    // Google Adsense
    var f=document.getElementsByTagName("script")[0];
    j=document.createElement("script");
    j.async= true;
    j.crossorigin= "anonymous";
    j.src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2751856053825499";
    f.parentNode.insertBefore(j,f);
}

$(window).on("load", function() {
    if ($(location).attr('href').indexOf(".games235.com")> -1) {
        console.log("[ADSENSE Severed]");
        loadGoogleAdsense();
    } else {
        console.log("[ADSENSE Disabled]");
    }    
});
