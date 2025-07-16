        // Animação ao rolar a página
        $(document).ready(function() {
            // Suaviza a rolagem para links internos
            $('a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if(target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                }
            });
            
            // Adiciona classe ativa ao item do menu conforme a rolagem
            $(window).scroll(function() {
                var scrollDistance = $(window).scrollTop() + 72;
                
                $('section').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                        $('.navbar-nav a.active').removeClass('active');
                        $('.navbar-nav a').eq(i).addClass('active');
                    }
                });
            }).scroll();
            
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
        });