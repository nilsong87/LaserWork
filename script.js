                    
            // Animação dos elementos ao aparecer na tela
            function animateOnScroll() {
                $('.animate-on-scroll').each(function() {
                    var position = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    
                    if (scroll + windowHeight > position) {
                        $(this).addClass('animate__animated animate__fadeInUp');
                    }
                });
            }
            
            // Executa ao carregar e ao rolar
            $(window).on('load scroll', animateOnScroll);
        