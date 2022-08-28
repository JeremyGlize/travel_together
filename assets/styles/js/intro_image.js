(function($) { // je déclare ma fonction anonyme
    $(document).ready(function() { // je lis le DOM
        $('.articles-card-listing').each(function() { // je selectionne ma classe et je crée une boucle dans laquelle
            let introImg = false; // je déclare ma variable introImg à false
            let insertImg = $(this).children('.intro_image'); // je déclare ma variable afin d'aller chercher la classe intro_image qui est l'enfant de articles-card-listing
            $(this).find('.articles-card-details img').each(function() { // je vais chercher ma class articles-card-details img
                if(!introImg) {
                    introImg = $(this).detach(); // la fonction detach supprime la balise img
                    insertImg.html(introImg); // la fonction .html vient l'implémenter
                }
            })
        })
    })
})(jQuery);