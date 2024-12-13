<?php /* Template Name: Контакты */ ?>

<?php get_header(); ?>


    <main>
        <div class="container">
            <nav aria-label="breadcrumb" class="horizontal__scroll">
                <ol class="breadcrumb horizontal__scroll-container">
                    <li class="breadcrumb-item"><a href="<?php echo get_home_url(); ?>">Главная</a></li>
                    <li class="breadcrumb-item active" aria-current="page"><?php echo the_title() ?></li>
                </ol>
            </nav>
        </div>
        <div class="container">
            <!-- contacts -->

            <div class="contacts">


                <div class="section">
                    <div class="row">
                        <div class="col-12 col-md-5 col-lg-4">
                            <!-- form -->
                            <div class="contacts__form">
                                <h1>Наши <?php echo the_title(); ?></h1>
                                <h4 class="font-weight-semibold">Задайте нам вопрос</h4>
                                <?//php echo do_shortcode('[contact-form-7 id="46" title="Форма на странице контактов"]'); ?>

                                <div class="wpcf7 js" id="wpcf7-f46-o1" lang="ru-RU" dir="ltr">
                                    <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                                    <form action="/ajax-form-add.php" method="post" class="wpcf7-form resetting ajax-form-add validate-comment-form" aria-label="Контактная форма" novalidate="novalidate" data-status="resetting">
                                        <div style="display: none;">
                                            <input type="hidden" name="form-name" value="Страница-контакты">
                                        </div>
                                        <div class="mb-3">
                                            <p><span class="wpcf7-form-control-wrap" data-name="text-635">
                                                    <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Имя" value="" type="text" name="author"></span>
                                            </p>
                                        </div>
                                        <div class="mb-3">
                                            <p><span class="wpcf7-form-control-wrap" data-name="email-144"><input size="40" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="E-mail" value="" type="email" name="email"></span>
                                            </p>
                                        </div>
                                        <p><span class="wpcf7-form-control-wrap" data-name="textarea-336"><textarea cols="40" rows="4" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Сообщение" name="text"></textarea></span>
                                        </p>
                                        <div class="mt-3">
                                            <p><input class="wpcf7-form-control wpcf7-submit has-spinner btn btn-primary px-5" type="submit" value="Отправить"><span class="wpcf7-spinner"></span>
                                            </p>
                                        </div><p style="display: none !important;" class="akismet-fields-container" data-prefix="_wpcf7_ak_"><label>Δ<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="1723733651098"><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p><div class="wpcf7-response-output" aria-hidden="true"></div>
                                    </form>
                                </div>

                                <div style="display:none;margin-top: 1rem;margin-bottom: 1rem;color: green;" class="response-for-form">
                                    Спасибо за заявку !
                                </div>




                            </div>
                            <!-- / form -->
                        </div>
                        <div class="col-12 col-md-6 col-lg-7">
                            <!-- map -->
                            <div class="contacts__map mt-5 mt-md-0">
                                <style>
                                    .contacts__map iframe{
                                        width: 100%;
                                    }
                                    @media(max-width: 992px){
                                        .contacts__map iframe{
                                            height: 400px;
                                        }
                                    }
                                    @media(max-width: 767px){
                                        .contacts__map iframe{
                                            aspect-ratio: 16/12;
                                            height: unset;
                                        }
                                    }
                                </style>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2269.0201924808566!2d86.07098381596732!3d55.340193980444944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42d80bf7d4f23b3f%3A0x4641b482f73ad0bb!2z0YPQuy4g0KHQsNGA0YvQs9C40L3QsCwgMjksINCa0LXQvNC10YDQvtCy0L4sINCa0LXQvNC10YDQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjUwMDU1!5e0!3m2!1sru!2sru!4v1659973815171!5m2!1sru!2sru" width="600" height="510" style="border:0; width: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <!-- / map -->
                        </div>
                        <div class="col-12 col-md-1 col-lg-1 align-self-center">
                            <!-- social  d-flex   d-md-block -->
                            <div class="contact__social mt-4 mt-md-0 justify-content-between  d-none">
                                <a href="<?php echo the_field('tg', 'option'); ?>" class="social__link telegram d-flex justify-content-center align-items-center my-md-4 my-lg-5 mx-4 mx-md-0">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.545295 6.26176L3.76396 7.46194L5.01869 11.4989C5.07324 11.7717 5.40057 11.8262 5.61878 11.6626L7.41904 10.1896C7.5827 10.026 7.85547 10.026 8.07369 10.1896L11.2923 12.5354C11.5106 12.6991 11.8379 12.59 11.8924 12.3172L14.2928 0.860961C14.3473 0.588194 14.0746 0.315429 13.8018 0.424536L0.545295 5.55257C0.217974 5.66167 0.217974 6.15265 0.545295 6.26176ZM4.85503 6.86185L11.1832 2.98855C11.2923 2.934 11.4014 3.09766 11.2923 3.15221L6.10976 8.00747C5.9461 8.17113 5.78243 8.38935 5.78243 8.66211L5.61878 9.9714C5.61878 10.1351 5.34601 10.1896 5.29146 9.9714L4.63681 7.57104C4.47315 7.29828 4.58227 6.97095 4.85503 6.86185Z" fill="white"></path>
                                    </svg>
                                </a>
                                <a href="<?php echo the_field('vk', 'option'); ?>" class="social__link vk d-flex justify-content-center align-items-center my-md-4 my-lg-5 mx-4 mx-md-0">
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8645 8.58097C14.8645 8.52285 14.8063 8.52286 14.8063 8.46474C14.5739 7.99981 14.0508 7.41865 13.3534 6.77938C13.0047 6.4888 12.8304 6.25633 12.7142 6.1401C12.5398 5.90763 12.5398 5.73329 12.5979 5.50083C12.656 5.32648 12.8885 5.03589 13.2953 4.51285C13.5278 4.22227 13.644 4.04792 13.8184 3.87358C14.6901 2.71125 15.0969 1.95574 14.9807 1.60704L14.9226 1.54893C14.8645 1.49082 14.8063 1.4327 14.6901 1.4327C14.5739 1.37459 14.3995 1.37459 14.2252 1.4327H12.0168C11.9587 1.4327 11.9586 1.4327 11.8424 1.4327C11.7843 1.4327 11.7262 1.4327 11.7262 1.4327H11.6681H11.61L11.5518 1.49081C11.4937 1.54893 11.4937 1.54893 11.4937 1.60704C11.2613 2.24632 10.9707 2.76937 10.6801 3.35053C10.5057 3.64111 10.3314 3.93169 10.1571 4.16416C9.9827 4.39662 9.86647 4.57096 9.75023 4.6872C9.634 4.80343 9.51777 4.86154 9.45965 4.97778C9.40154 5.03589 9.28531 5.09401 9.28531 5.0359C9.2272 5.0359 9.16907 5.03589 9.16907 4.97778C9.11096 4.91966 9.05285 4.86154 8.99473 4.80343C8.93662 4.74531 8.93661 4.62908 8.87849 4.51285C8.87849 4.39661 8.87849 4.28038 8.87849 4.22227C8.87849 4.16415 8.87849 3.98981 8.87849 3.87358C8.87849 3.69923 8.87849 3.58299 8.87849 3.52488C8.87849 3.35053 8.87849 3.11807 8.87849 2.8856C8.87849 2.65314 8.87849 2.47879 8.87849 2.36255C8.87849 2.24632 8.87849 2.07198 8.87849 1.95574C8.87849 1.7814 8.87849 1.66516 8.87849 1.60704C8.87849 1.54893 8.82039 1.4327 8.82039 1.37458C8.76227 1.31647 8.70415 1.25835 8.64603 1.20023C8.58792 1.14212 8.47169 1.14212 8.41357 1.084C8.12299 1.02589 7.7743 0.967773 7.36749 0.967773C6.43763 0.967773 5.79835 1.02589 5.56589 1.14212C5.44966 1.20024 5.33342 1.25835 5.27531 1.37458C5.15908 1.49082 5.15907 1.54893 5.21719 1.54893C5.50777 1.60705 5.74024 1.72328 5.85647 1.89762L5.91459 2.01386C5.9727 2.07198 5.97269 2.18821 6.03081 2.36255C6.08893 2.5369 6.08893 2.71125 6.08893 2.94372C6.08893 3.29241 6.08893 3.64111 6.08893 3.87358C6.08893 4.16416 6.03081 4.3385 6.03081 4.51285C6.03081 4.68719 5.9727 4.80343 5.91459 4.86155C5.85647 4.97778 5.85646 5.0359 5.79835 5.0359C5.79835 5.0359 5.79835 5.09401 5.74023 5.09401C5.68211 5.09401 5.624 5.15213 5.50777 5.15213C5.44965 5.15213 5.33342 5.09401 5.27531 5.0359C5.15908 4.97778 5.04284 4.86155 4.98473 4.74532C4.8685 4.62908 4.75226 4.45473 4.63603 4.22227C4.5198 3.9898 4.34544 3.75734 4.22921 3.40865L4.11299 3.17618C4.05487 3.05995 3.93864 2.82749 3.82241 2.5369C3.70617 2.24632 3.58994 2.01386 3.47371 1.72328C3.41559 1.60705 3.35748 1.54893 3.29937 1.49081H3.24125C3.24125 1.49081 3.18312 1.4327 3.12501 1.4327C3.06689 1.4327 3.00878 1.37458 2.95067 1.37458H0.858485C0.626021 1.37458 0.50979 1.4327 0.451674 1.49081L0.393555 1.54893C0.393555 1.54893 0.393555 1.60705 0.393555 1.66516C0.393555 1.72328 0.393558 1.78139 0.451674 1.89762C0.742255 2.59502 1.09095 3.29241 1.43965 3.98981C1.78834 4.62908 2.13704 5.21024 2.36951 5.61706C2.66009 6.02387 2.89255 6.43068 3.18313 6.77938C3.47371 7.12807 3.64805 7.36054 3.70617 7.47677C3.8224 7.593 3.88051 7.65111 3.93863 7.70923L4.11299 7.88358C4.22922 7.99981 4.40356 8.17416 4.63603 8.34851C4.86849 8.52286 5.15907 8.6972 5.44965 8.87155C5.74023 9.0459 6.08893 9.16214 6.43763 9.27837C6.84444 9.3946 7.19313 9.45272 7.54183 9.3946H8.41357C8.58792 9.3946 8.70416 9.33648 8.82039 9.22025L8.87849 9.16213C8.87849 9.10401 8.93661 9.10402 8.93661 9.0459C8.93661 8.98778 8.93661 8.92967 8.93661 8.81344C8.93661 8.58098 8.93662 8.40663 8.99473 8.23228C9.05285 8.05793 9.05285 7.9417 9.11097 7.82547C9.16909 7.70924 9.2272 7.65111 9.28531 7.593C9.34343 7.53488 9.40155 7.47677 9.40155 7.47677H9.45965C9.57588 7.41865 9.75024 7.47677 9.86647 7.593C10.0408 7.70923 10.2152 7.88358 10.3314 8.05793C10.4476 8.23228 10.622 8.40663 10.8545 8.63909C11.0869 8.87155 11.2613 9.0459 11.3775 9.10402L11.5518 9.22025C11.6681 9.27837 11.7843 9.33648 11.9587 9.3946C12.133 9.45272 12.2492 9.45271 12.3655 9.45271L14.3414 9.3946C14.5158 9.3946 14.6901 9.33648 14.8063 9.27837C14.9226 9.22025 14.9807 9.16213 14.9807 9.0459C14.9807 8.98778 14.9807 8.87156 14.9807 8.81344C14.8644 8.69721 14.8645 8.63909 14.8645 8.58097Z" fill="white"></path>
                                    </svg>
                                </a>
                                <a href="<?php echo the_field('ok', 'option'); ?>" class="social__link mymir d-flex justify-content-center align-items-center my-md-4 my-lg-5 mx-4 mx-md-0">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6065 1.91029C9.50799 0.903364 8.18067 0.399902 6.53298 0.399902C4.83952 0.399902 3.3749 0.949133 2.1849 2.09336C0.9949 3.2376 0.399902 4.65644 0.399902 6.3499C0.399902 7.9976 0.949139 9.37067 2.09337 10.5607C3.2376 11.7507 4.74799 12.2999 6.71607 12.2999C7.8603 12.2999 9.00453 12.0711 10.1488 11.5676C10.5149 11.4303 10.698 10.9726 10.5607 10.6064C10.4234 10.2403 9.96568 10.0572 9.59952 10.1945C8.63837 10.6064 7.67721 10.8353 6.76182 10.8353C5.29721 10.8353 4.15298 10.3776 3.32913 9.46221C2.50528 8.54683 2.09337 7.49413 2.09337 6.30413C2.09337 4.97683 2.55106 3.87836 3.3749 3.00875C4.24452 2.13913 5.29721 1.68144 6.57875 1.68144C7.72298 1.68144 8.7299 2.04759 9.55375 2.7799C10.3776 3.51221 10.7438 4.42759 10.7438 5.52606C10.7438 6.25836 10.5607 6.89913 10.1945 7.4026C9.82836 7.90606 9.46221 8.1349 9.05029 8.1349C8.82144 8.1349 8.72991 8.04336 8.72991 7.76875C8.72991 7.58567 8.72991 7.35683 8.77568 7.12798L9.23337 3.42067H7.67721L7.58568 3.78683C7.17376 3.46644 6.76182 3.28336 6.30413 3.28336C5.57182 3.28336 4.93106 3.60375 4.38183 4.19875C3.8326 4.79375 3.60375 5.57183 3.60375 6.48721C3.60375 7.4026 3.8326 8.1349 4.33606 8.7299C4.79375 9.27913 5.38876 9.55375 6.02953 9.55375C6.62453 9.55375 7.12798 9.3249 7.53991 8.82144C7.86029 9.27913 8.31799 9.55375 8.95876 9.55375C9.87414 9.55375 10.6522 9.14183 11.3387 8.36375C12.0253 7.58567 12.3457 6.62452 12.3457 5.48029C12.2084 4.10721 11.6591 2.87144 10.6065 1.91029ZM6.99067 7.49413C6.71605 7.86029 6.39568 8.04336 5.98376 8.04336C5.70914 8.04336 5.52607 7.90606 5.34299 7.63144C5.15991 7.35683 5.11414 7.03644 5.11414 6.62452C5.11414 6.12106 5.20567 5.70913 5.43452 5.43452C5.66336 5.11413 5.93799 4.97683 6.25837 4.97683C6.53299 4.97683 6.8076 5.06836 7.03644 5.34298C7.26529 5.57183 7.35683 5.89221 7.35683 6.25836C7.4026 6.71606 7.26529 7.12798 6.99067 7.49413Z" fill="white"></path>
                                    </svg>
                                </a>
                            </div>
                            <!-- / social -->
                        </div>
                    </div>
                </div>
                <!-- contacts cards -->
                <div class="section">
                    <div class="contacts__cards">
                        <div class="row">
                            <div class="col-12 col-md-4 mb-4 mb-md-0">
                                <div class="contacts__cards-item h-100 p-3 px-md-5 py-md-4">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="contacts__cards-icon mr-3"><img src="<?php bloginfo('template_url'); ?>/img/contacts__img-1.png" alt="E-mail"></div>
                                        <div class="contacts__cards-title">E-mail</div>
                                    </div>
                                    <div class="contacts__cards-content h3">
                                        <a href="mailto:<?php echo the_field('email', 'option'); ?>"><?php echo the_field('email', 'option'); ?></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-4 mb-md-0">
                                <div class="contacts__cards-item h-100 p-3 px-md-5 py-md-4">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="contacts__cards-icon mr-3"><img src="<?php bloginfo('template_url'); ?>/img/contacts__img-2.png" alt="Местоположение"></div>
                                        <div class="contacts__cards-title">Местоположение</div>
                                    </div>
                                    <div class="contacts__cards-content h3">
                                        <?php echo the_field('location', 'option'); ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mb-4 mb-md-0">
                                <div class="contacts__cards-item h-100 p-3 px-md-5 py-md-4">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="contacts__cards-icon mr-3"><img src="<?php bloginfo('template_url'); ?>/img/contacts__img-3.png" alt="Телефон"></div>
                                        <div class="contacts__cards-title">Телефон</div>
                                    </div>
                                    <div class="contacts__cards-content h3">
                                        <a href="tel:<?= preg_replace('![^0-9]+!', '', get_field('phone', 'option')); ?>"><?php echo the_field('phone', 'option'); ?></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / contacts cards -->
                <!-- contacts fields -->
                <div class="section">
                    <div class="contacts__fields">
                        <h2 class="mb-0"><?php echo the_field('contacts_lines_title') ?></h2>
                        <div class="row">
                            <?php if( have_rows('contacts-lines') ): ?>
                                <div class="col-12 col-md-4">
                                    <?php $counter = 0;
                                    while($counter < 3 && have_rows('contacts-lines') ): the_row();
                                        $line_name = get_sub_field('line_name');
                                        $line_value = get_sub_field('line_value');
                                        $counter++;
                                        ?>
                                        <div class="contacts__fields-item mt-4">
                                            <div class="contacts__fields-title h3 mb-2"><?php echo $line_name ?></div>
                                            <div class="contacts__fields-content">
                                                <?php echo $line_value ?>
                                            </div>
                                        </div>
                                    <?php endwhile; ?>
                                </div>
                            <?php endif; ?>
                            <?php if( have_rows('contacts-lines') ): ?>
                                <div class="col-12 col-md-4">
                                    <?php while($counter < 6  && have_rows('contacts-lines') ): the_row();
                                        $line_name = get_sub_field('line_name');
                                        $line_value = get_sub_field('line_value');
                                        $counter++;
                                        ?>
                                        <div class="contacts__fields-item mt-4">
                                            <div class="contacts__fields-title h3 mb-2"><?php echo $line_name ?></div>
                                            <div class="contacts__fields-content">
                                                <?php echo $line_value ?>
                                            </div>
                                        </div>
                                    <?php endwhile; ?>
                                </div>
                            <?php endif; ?>
                            <?php if( have_rows('contacts-lines') ): ?>
                                <div class="col-12 col-md-4">
                                    <?php while($counter < 9  && have_rows('contacts-lines') ): the_row();
                                        $line_name = get_sub_field('line_name');
                                        $line_value = get_sub_field('line_value');
                                        $counter++;
                                        ?>
                                        <div class="contacts__fields-item mt-4">
                                            <div class="contacts__fields-title h3 mb-2"><?php echo $line_name ?></div>
                                            <div class="contacts__fields-content">
                                                <?php echo $line_value ?>
                                            </div>
                                        </div>
                                    <?php endwhile; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <!-- / contacts fields -->
            </div>
            <!-- / contacts -->
        </div>
    </main>



<?php get_footer(); ?>