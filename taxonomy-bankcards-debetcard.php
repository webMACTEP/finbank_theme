<?php if($_GET['change_template']): ?>

    <?php get_template_part( 'template-parts/new-collection-kredity' ); ?>

<?php else: ?>


    <?php get_header(); ?>
    <?php $term = get_queried_object();
    //$percent_limit = 700000;
    //$cashback_number = 30;
    $percent_limit = 0;
    $cashback_number = 0;
    if(isset($_SESSION['filter_debetcard_card']) && !empty($_SESSION['filter_debetcard_card'])):
    $mt = 1;
    $percent_limit = $_SESSION['filter_debetcard_card'][0];
    $cashback_number = $_SESSION['filter_debetcard_card'][1];
    endif;
    unset($_SESSION['filter_debet_card']);
    ?>

    <?php if($mt): ?>
        <div class="start-func-credit-card-filter"></div>
    <?php endif; ?>

    <main term="debetcard">
        <div class="container">
            <nav aria-label="breadcrumb" class="horizontal__scroll">
                <ol class="breadcrumb horizontal__scroll-container">
                    <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>">Главная</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Дебетовые карты</li>
                </ol>
            </nav>
        </div>
        <div class="page__heading">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="page__heading-title mb-0">Дебетовые карты</h1>
    <?php $args = array(
                            'post_type'             => 'bankcard',
                            'posts_per_page'        => -1,
                            'orderby' => 'date',
                            'order' => 'ASC',
                            'tax_query' => array(
                                    array(
                                        'taxonomy' => 'bankcards',
                                        'field'    => 'slug',
                                        'terms'    =>  'debetcard',
                                    ),
                                )
                        );
    $query = new WP_Query( $args );

    // Цикл
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            $date = get_the_date('d.m.y');
            ?>
         <?php } } wp_reset_query() ?>
                    <div class="page__heading-date">Обновлено: <?php echo $date ?></div>
                </div>
                <div class="page__heading-description mt-2 mb-4">
                    В данном разделе вы можете оформить дебетовую карту по вашим финансовым возможностям
                </div>
                <form id="credit-card-filter" action="" method="POST">
                        <input type="hidden" name="action" value="cardfilter" />
                        <input type="hidden" name="term" value="debetcard" />
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3 col-xl-4 order-1">
                            <div class="range">
                                <div class="d-flex justify-content-between">
                                    <div class="range__label">Снятие без %, ₽</div>
                                    <input  max="<?= $filter_price['debet_inputs_range']['max']; ?>" type="text" class="range__value cred_limit" value="<?php echo $percent_limit ?>" min="0">
                                </div>
                                <input  max="<?= $filter_price['debet_inputs_range']['max']; ?>" class="range__input" name="percent_limit" type="range" min="0" value="<?php echo $percent_limit ?>">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 col-xl-4 order-2">
                            <div class="range">
                                <div class="d-flex justify-content-between">
                                    <div class="range__label">Кэшбек, %</div>
                                    <input  max="<?= $filter_price['debet_inputs_range']['day_max']; ?>" type="text" class="range__value cred_trat" value="<?php echo $cashback_number ?>" min="0">
                                </div>
                                <input  max="<?= $filter_price['debet_inputs_range']['day_max']; ?>" class="range__input" name="cashback_number" type="range" min="0" value="<?php echo $cashback_number ?>">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 col-xl-2 mt-lg-0 order-5 order-md-3">
                            <div class="btn btn-primary btn-block submit-button">Показать</div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 col-xl-2 mt-3 mt-lg-0 order-3 order-md-4">
                            <div class="filter__details">
                                <a class="btn btn-outline-alternative btn-block" href="#filter__details" data-bs-toggle="collapse" aria-expanded="false">
                                    Еще условия
                                    <svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div id="filter__details" class="col-12 collapse mt-md-4 order-4 order-md-5">
                            <div class="row pb-3 pb-md-0">
                                <div class="col-12 col-md-4 banks_select">
                                    <label class="form-label" for="bankSelect">Банки</label>
                                    <select name="bank" id="bankSelect" class="styledSelect" placeholder="">
                                        <option value="">Любой</option>
                                <?php
    $args = array(
        'posts_per_page' => -1,
        'post_type' => 'banks',
        'orderby' => 'name',
        'order' => 'DESC',
    );

    $wp_query = new WP_Query( $args );

    // Цикл
    if ( $wp_query->have_posts() ) {
        $counter = 0;
        while ( $wp_query->have_posts() ) {
            $wp_query->the_post();
            $counter +=1;
            ?>
            <option value="<?php echo get_the_id() ?>"><?php echo the_title() ?></option>
            <?php
        }
    } ?>
    <?php wp_reset_query() ?>
                                    </select>
                                </div>
                                <div class="col-12 col-md-4 card_cat_select">
                                    <label class="form-label" for="bankTop">Категория карты</label>
                                    <select name="cat_cards" id="bankTop" class="styledSelect" placeholder="">
                                        <option value="">Все</option>
                                                                <?php
                                                $field = get_field_object('card_category', 167);
                                                //$value = $field['value'];
                                                //$label = $field['choices'][ $value ];
                                                if( !empty($field['choices']) ): ?>
                                                        <?php foreach( $field['choices'] as $value => $label ): ?>
                                                            <option value="<?php echo $value ?>"><?php echo $label ?></option>
                                                        <?php endforeach; ?>
                                                <?php endif; ?>

                                    </select>
                                </div>
                                <div class="col-12 col-md-4 grace_period_select">
                                    <label class="form-label" for="gracePeriod">Кэшбек</label>
                                    <select name="cashback" id="gracePeriod" class="styledSelect" placeholder="">
                                        <option value="">Любой</option>
                                        <?php
                                                $field = get_field_object('card_cashback', 167);
                                                //$value = $field['value'];
                                                //$label = $field['choices'][ $value ];
                                                if( !empty($field['choices']) ): ?>
                                                        <?php foreach( $field['choices'] as $value => $label ): ?>
                                                            <option value="<?php echo $value ?>"><?php echo $label ?></option>
                                                        <?php endforeach; ?>
                                                <?php endif; ?>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--div class="container">
            <div class="section">

                <div class="tags__main my-5 horizontal__scroll">
                    <div class="horizontal__scroll-container">
                        <a href="" class="tag__item"><span class="tag__item-title">Все карты</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Для наличных</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">кэшбэк</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Мили</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">кэшбэк</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Для наличных</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Все карты</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Мили</span></a>
                        <a href="" class="tag__item btn__view-all"><span class="tag__item-title">ещё +</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Все карты</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Для наличных</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">кэшбэк</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Мили</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">кэшбэк</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Для наличных</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Все карты</span></a>
                        <a href="" class="tag__item"><span class="tag__item-title">Мили</span></a>
                    </div>
                </div>
                <div class="solution__links text-center">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-1.png" alt="">
                                </span>
                                <span class="tag__item-title">Топ 5 ипотек с минимальной переплатой</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-3.png" alt="">
                                </span>
                                <span class="tag__item-title">Топ 20 лучших кредитных карт</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-4.png" alt="">
                                </span>
                                <span class="tag__item-title">5 Дебетовых карт с лучшим процентом на остаток</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-2.png" alt="">
                                </span>
                                <span class="tag__item-title">Топ 7 банков свыгодным процентом по вкладам</span>
                            </a>
                        </div>
                    </div>
                    <a href="" class="btn btn-outline-alternative btn__view-all mt-3">
                        Больше готовы решений
                    </a>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-1.png" alt="">
                                </span>
                                <span class="tag__item-title">Топ 5 ипотек с минимальной переплатой</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-3.png" alt="">
                                </span>
                                <span class="tag__item-title">Топ 20 лучших кредитных карт</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-4.png" alt="">
                                </span>
                                <span class="tag__item-title">5 Дебетовых карт с лучшим процентом на остаток</span>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3 mb-3">
                            <a href="" class="tag__item tag__item-link d-flex align-items-center">
                                <span class="tag__item-img mr-3">
                                    <img src="<?php bloginfo('template_url'); ?>/img/solution__img-2.png" alt="">
                                </span>
                                <span class="tag__item-title">Топ 7 банков свыгодным процентом по вкладам</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div-->
        <!-- page navigation -->
        <div class="page__nav">
            <div class="container">
                <div class="page__nav-container nav-tabs">
                    <div class="horizontal__scroll">
                        <div class="horizontal__scroll-container">
                            <a href="<?php echo get_term_link(7, '') ?>" class="nav-link active">Все дебетовые карты</a>
                            <a href="<?php echo get_page_link(4965); //1503 tax-reviews ?>" class="nav-link " data-tax="debetcard">Отзывы</a>
                            <a href="<?php echo get_page_link(157) ?>" class="nav-link">Калькулятор</a>
                            <a href="<?php echo get_category_link(32) ?>" class="nav-link">Статьи</a>
                            <a href="<?php echo get_page_link(1548) ?>" class="nav-link">сравнить</a>
                            <a href="#best-products" class="nav-link">Лучшие предложения</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- / page navigation -->
        <div class="container">
            <!-- credits list -->
            <div class="credits section">
                <div class="row">
                    <!-- filter -->
                    <div class="col-12 col-lg-4 order-lg-2">
                        <div class="sticky-top">
                            <form id="credit-card-filter-aside">
                                <div class="filter mb-3">
                                    <div class="filter__section">
                                        <a class="filter__btn collapsed" data-bs-toggle="collapse" href="#filter1" role="button" aria-expanded="false">
                                            Платежная система
                                            <div class="filter__btn-icon"><svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg></div>
                                        </a>
                                        <div class="collapse" id="filter1">
                                            <div class="filter__content">
                                                <ul class="filter__list">
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="ps1">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            MasterCard
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="ps2">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            VISA
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="ps3">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            МИР
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="ps4">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            UnionPay
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="ps5">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            JCB
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__section">
                                        <a class="filter__btn collapsed" data-bs-toggle="collapse" href="#filter3" role="button" aria-expanded="false">
                                            Доставка
                                            <div class="filter__btn-icon"><svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg></div>
                                        </a>
                                        <div class="collapse" id="filter3">
                                            <div class="filter__content">
                                                <ul class="filter__list">
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="cdt1">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Курьером
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="cdt2">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            По почте
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="cdt3">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            В отделении банка
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="cdt4">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Виртуальные
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__section">
                                        <a class="filter__btn collapsed" data-bs-toggle="collapse" href="#filter2" role="button" aria-expanded="false">
                                            Прочие условия
                                            <div class="filter__btn-icon"><svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg></div>
                                        </a>
                                        <div class="collapse" id="filter2">
                                            <div class="filter__content">
                                                <ul class="filter__list">
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os1">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Бесплатное обслуживание
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os2">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            С процентом на остаток
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os3">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Снятие в любых банком. без %
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os4">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            С овердрафтом
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os5">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Срочные
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os6">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Детские
                                                        </label>
                                                    </li>
                                                    <li class="filter__list-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" name="os7">
                                                            <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
                                                            Пенсионные
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn btn-outline-primary btn-block submit-button">Применить фильтр</div>
                            </form>

                            <!--div class="filter mt-5 mb-3">
                                <?php
                                $massiv_vhodnih_parametrov = array(
                                'container' => '', // - без предварительной обёртки тегом(можно написать 'nav')
                                'depth' => 0,  // - глубина, уровень вложенности
                                'echo'            => false,
                                'link_class'   => 'filter__btn',
                                'theme_location'  => 'sidebar_menu_debetcard',
                                'before' => '<div class="filter__section" id="collist">',
                                'after' => '</div>',
                                ); ?>
                                <?php echo strip_tags(wp_nav_menu( $massiv_vhodnih_parametrov ), '<a>,' ); ?>
                            </div-->


                        <div class="d-none d-lg-block">
                            <?php
                            $args = array(
                                'hide_empty' => true,
                                'taxonomy'     => 'tags-category',
                            );

                            $cats = get_categories( $args );
                            if( $cats ){
                                foreach( $cats as $cat ){
                                $parent_category = array(81, 87, 99, 72);
                                if (in_array($cat->term_id, $parent_category)) continue;

                        $args_coll = array(
                            'post_type' => 'collection',
                            'taxonomy' => 'tags-category',
                            'tax_query' => [
                                [
                                    'taxonomy' => 'tags-category',
                                    'terms' => $cat->term_id,
                                    'field' => 'id',
                                    'operator' => 'IN',
                                ]
                            ],
                            'posts_per_page' => -1,
                            'orderby' => 'date',
                            'order' => 'DESC',
                            'meta_query'    => array(
                                    array(
                                        'key'       => 'coll-type',
                                        'value'     => 'debatcard',
                                        'compare'   => '=',
                                    ),
                                )
                        );
                        $query = new WP_Query( $args_coll );
                        if ( $query->have_posts() ) { $current_id = $wp_query->get_queried_object_id(); ?>
                            <? get_template_part( 'all_template/filter_right', null, ['cat' => $cat, 'query' => $query]); ?>
                        <?php } wp_reset_query(); ?>

                        <?php		}
                            }
                            ?>
                        </div>


                        </div>
                    </div>
    <!-- / filter -->

                    <?php
                    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

                    $args = array(
                        'paged' => $paged,
                        'orderby' => 'name',
                        'order' => 'DESC',
                        'post_type'             => 'bankcard',
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'bankcards',
                                'field'    => 'slug',
                                'terms'    => 'debetcard',
                            ),
                        ),
                        'post_status' => 'publish',
                    );

                    $args['meta_query'][] = array(
                        'key' => 'archive',
                        'value' => '0'
                    );

                    $counter = 0;
                    $query = new WP_Query( $args );

                    if ( $query->have_posts() ) {

                        $max_pages = $query->max_num_pages;
                        $found_posts = $query->found_posts;

                        if ($query->have_posts()) {
                            ob_start();
                            while ($query->have_posts()):
                                $query->the_post();
                                $counter++;
                                get_template_part('template-parts/filter-debet-card-posts');
                            endwhile;

                            $posts_html = ob_get_contents();
                            ob_end_clean();
                        }

                    }else{
                        $posts_html = '<p>Ничего не найдено по заданым фильтрам.</p>';
                    }

                    $GLOBALS['wp_query']->max_num_pages = $query->max_num_pages;
                    $max_pages = $wp_query->max_num_pages;
                    ?>

                    <!-- list -->
                    <div class="col-12 col-lg-8 order-lg-1">
                        <div class="credits__list">
                                <div class="d-flex flex-wrap justify-content-between align-items-center mt-0 mt-md-5 mt-lg-0 mb-3">
                                  <div class="h2 mt-5 mb-4 mt-md-0 mb-md-0"><span class="variants_count"><?php echo $query->found_posts;?></span> вариантов</div>
                                  <div class="credits__list-dropdown dropdown mb-3 mb-md-0 col-12 col-md-5 col-lg-4 px-0">
                                      <select name="" class="styledSelect cred-order-select">
                                          <option value="" selected disabled>Сортировать</option>
                                          <option value="">Сортировать</option>
                                          <option value="ratings_average">По рейтингу</option>
                                          <option value="views">По количеству заявок</option>
                                          <option value="card_cred_limit">По обслуживанию</option>
                                          <option value="card_stavka_ostatok">По проценту на остаток</option>
                                      </select>
                                  </div>
                              </div>
                            <div data-json='<?= json_encode($args); ?>'  class="list_posts" id="response-cred-card">
                                <?
                                echo $posts_html;
                                ?>
                            </div>
                                <!-- pagination -->
                                <div class="pagination flex-column mb-5 mb-md-0">
                                    <?php if($paged < $max_pages): ?>
                                    <button class="btn btn-outline-gray btn-block load_more_btn"
                                     data-max_pages="<?php echo $max_pages ?>" data-paged="<?php echo $paged ?>">
                                        Больше решений
                                    </button>
                                 <?php endif; ?>
                                    <div class="pagination__container d-sm-flex justify-content-between align-items-center">
                                        <div class="pagination__links">
                                            <?php my_pagination(); ?>
                                        </div>

                                        <?php // Возвращаем оригинальные данные поста. Сбрасываем $post.
                                         wp_reset_query(); ?>
                                        <div class="pagination__description mt-4 mt-sm-0">
                                            Показано <span class="count_view"><?php echo $counter ?></span>
                                            продуктов из <span class="count_all"><?php echo $query->found_posts;?></span>
                                        </div>
                                    </div>
                                </div>
                            <!-- / pagination -->

    <?php

                        $args_archive = array(
                            'post_type'             => 'bankcard',
                            'posts_per_page'        => -1,
                            'meta_key'      => 'archive',
                            'meta_value'    => true,
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'bankcards',
                                    'field'    => 'slug',
                                    'terms'    => 'debetcard',
                                ),
                            )
                        );
                        $query_archive = new WP_Query( $args_archive );
                        if ( $query_archive->have_posts() ): ?>
                            <h2 class="title archive_title mt-5">Архивные дебетовые карты (<?= $query_archive->found_posts; ?>)</h2>
                            <div class="list_posts archive_list archive_hide">
                            <?php while ( $query_archive->have_posts() ): $query_archive->the_post();?>
                                <?php get_template_part( 'template-parts/filter-debet-card-posts' ); ?>
                            <?php endwhile; wp_reset_postdata(); ?>
                            </div>
                        <?php endif; ?>


                        <div class="d-xs-block d-lg-none">
                            <?php
                            $args = array(
                                'hide_empty' => true,
                                'taxonomy'     => 'tags-category',
                            );

                            $cats = get_categories( $args );
                            if( $cats ){
                                foreach( $cats as $cat ){
                                $parent_category = array(81, 87, 99, 72);
                                if (in_array($cat->term_id, $parent_category)) continue;

                        $args_coll = array(
                            'post_type' => 'collection',
                            'taxonomy' => 'tags-category',
                            'tax_query' => [
                                [
                                    'taxonomy' => 'tags-category',
                                    'terms' => $cat->term_id,
                                    'field' => 'id',
                                    'operator' => 'IN',
                                ]
                            ],
                            'posts_per_page' => -1,
                            'orderby' => 'date',
                            'order' => 'DESC',
                            'meta_query'    => array(
                                    array(
                                        'key'       => 'coll-type',
                                        'value'     => 'debatcard',
                                        'compare'   => '=',
                                    ),
                                )
                        );
                        $query = new WP_Query( $args_coll );
                        if ( $query->have_posts() ) { $current_id = $wp_query->get_queried_object_id(); ?>
                            <? get_template_part( 'all_template/filter_right', null, ['mobile' => 1, 'cat' => $cat, 'query' => $query]); ?>
                        <?php } wp_reset_query(); ?>

                        <?php		}
                            }
                            ?>
                        </div>

                        </div>
                    </div>
                    <!-- / list -->
                    <!-- / pagination -->
                </div>
            </div>
            <?php wp_reset_query(); ?>
            <!-- / credits list -->
            <!-- articles -->
            <div class="section">
                <div class="section__header mb-4 d-flex justify-content-between align-items-center">
                    <h2 class="title mb-0">Статьи о дебетовых картах</h2>
                    <a href="<?php echo get_category_link('32') ?>" class="btn btn-primary btn-sm btn-all">
                        Все
                        <span class="icon ml-2">
                            <svg width="21" height="12" viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.242 5.266A.738.738 0 0 0 .5 6c0 .406.332.734.742.734H11.38v2.07c0 2.233 2.59 3.495 4.379 2.132l3.68-2.803a2.674 2.674 0 0 0 0-4.266l-3.68-2.803c-1.789-1.363-4.38-.1-4.38 2.132v2.07H1.243Zm13.612 4.507c-.813.62-1.99.046-1.99-.97V3.197c0-1.015 1.177-1.588 1.99-.969l3.68 2.804c.643.49.643 1.449 0 1.939l-3.68 2.803Z"></path></svg>
                        </span>
                    </a>
                </div>
                <div class="horizontal__scroll row mb-5 mb-md-6">
                    <div class="horizontal__scroll-container">
                        <?php
    $args = array(
        'post_type' => 'post',
        'cat' => 32,
        'posts_per_page' => 4,
        //'meta_key' => 'views',
        //'orderby' => array( 'meta_value_num' => 'desc', 'name' => 'desc' ),
        //'order' => 'DESC',
    );
    $wp_query = new WP_Query( $args );
    if ( $wp_query->have_posts() ) {
        while ( $wp_query->have_posts() ) {
            $wp_query->the_post(); ?>
            <!-- item -->
          <div class="article__item card card__vertical size4 offer h-100">
              <div class="card-container p-3 d-xl-flex flex-xl-column">
                  <?php if(get_the_post_thumbnail_url()): ?>
                  <div class="card__image">
                      <img src="<?php echo the_post_thumbnail_url() ?>"
                           alt="<?= get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true);?>">
                  </div>
                 <?php endif; ?>
                  <div class="card__date my-2"><?php echo get_the_date('d.m.y') ?></div>
                  <a href="<?php echo the_permalink() ?>" class="article__title h4 stretched-link"><?php echo the_title() ?></a>
                  <div class="mt-auto">
                      <div class="d-flex align-items-center mt-2">
                          <div class="card__icon d-flex align-items-center mr-3">
                              <div class="mr-2"><svg width="19" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.5 17.2" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#eye" x="0" y="0"></use></svg></div>
                              <?php echo the_field('views') ?>
                          </div>
                          <div class="position-relative card__icon d-flex align-items-center mr-3">
                              <div class="mr-2"><a href="<?php the_permalink() ?>#comments" data-target="comments" class="stretched-link"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></a></div>
                              <?php echo comments_number( '0', '1', '%'); ?>
                          </div>
                          <div class="card__like d-flex align-items-center ml-auto">
                              <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                          </div>
                      </div>
                      <?php $author_id = get_field('page_author');
                      if ($author_id): ?>
                      <div class="card__author d-flex align-items-center mt-3">
                          <div class="card__author-img">
                              <?php get_template_part( 'all_template/image_and_alt/card_author-img', null, $author_id); ?>
                          </div>
                          <div class="card__author-content">
                              <a href="<?php echo get_permalink($author_id) ?>" class="card__author-title"><?php echo get_the_title($author_id) ?></a>
                              <div class="rating d-flex align-items-center">
                               <?php echo do_shortcode( '[ratings id="'.$author_id.'"]' ); ?>
                              </div>
                          </div>
                      </div>
                  <?php endif; ?>
                  </div>
              </div>
          </div>
          <!-- / item -->
         <?php }
    } ?>
    <?php wp_reset_query() ?>
                    </div>
                </div>
            </div>
            <!-- / articles -->



            <!-- author -->
            <?php $author_id = get_field('author', $term);
            if (false):
             ?>

            <div class="section">
                <div class="card expert__horizontal">
                    <div class="card-container">
                        <div class="d-flex flex-wrap">
                            <div class="expert__horizontal-title d-flex align-items-center mb-md-3 order-2 order-md-1">
                                <span class="d-none d-md-block mr-2">Автор:</span>
                                <a href="<?php echo get_permalink($author_id) ?>" class="stretched-link"><?php echo get_the_title($author_id) ?></a>
                            </div>
                            <div class="expert__card-social ml-md-auto d-flex justify-content-end mb-md-3 order-4 order-md-2">
                        <?php if( have_rows('expert_socials', $author_id) ):
                        while( have_rows('expert_socials', $author_id) ) : the_row();
                            $socialname = get_sub_field('socialname');
                            $social_link = get_sub_field('social_link'); ?>
                            <?php if( $socialname == 'bc1' ): ?>
                                <a href="<?php echo $social_link ?>" class="social__link telegram d-flex justify-content-center align-items-center mx-2">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.545295 6.26176L3.76396 7.46194L5.01869 11.4989C5.07324 11.7717 5.40057 11.8262 5.61878 11.6626L7.41904 10.1896C7.5827 10.026 7.85547 10.026 8.07369 10.1896L11.2923 12.5354C11.5106 12.6991 11.8379 12.59 11.8924 12.3172L14.2928 0.860961C14.3473 0.588194 14.0746 0.315429 13.8018 0.424536L0.545295 5.55257C0.217974 5.66167 0.217974 6.15265 0.545295 6.26176ZM4.85503 6.86185L11.1832 2.98855C11.2923 2.934 11.4014 3.09766 11.2923 3.15221L6.10976 8.00747C5.9461 8.17113 5.78243 8.38935 5.78243 8.66211L5.61878 9.9714C5.61878 10.1351 5.34601 10.1896 5.29146 9.9714L4.63681 7.57104C4.47315 7.29828 4.58227 6.97095 4.85503 6.86185Z" fill="white"></path>
                                    </svg>
                                </a>
                            <?php endif; ?>
                            <?php if( $socialname == 'bc2' ): ?>
                                <a href="<?php echo $social_link ?>" class="social__link vk d-flex justify-content-center align-items-center mx-2">
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8645 8.58097C14.8645 8.52285 14.8063 8.52286 14.8063 8.46474C14.5739 7.99981 14.0508 7.41865 13.3534 6.77938C13.0047 6.4888 12.8304 6.25633 12.7142 6.1401C12.5398 5.90763 12.5398 5.73329 12.5979 5.50083C12.656 5.32648 12.8885 5.03589 13.2953 4.51285C13.5278 4.22227 13.644 4.04792 13.8184 3.87358C14.6901 2.71125 15.0969 1.95574 14.9807 1.60704L14.9226 1.54893C14.8645 1.49082 14.8063 1.4327 14.6901 1.4327C14.5739 1.37459 14.3995 1.37459 14.2252 1.4327H12.0168C11.9587 1.4327 11.9586 1.4327 11.8424 1.4327C11.7843 1.4327 11.7262 1.4327 11.7262 1.4327H11.6681H11.61L11.5518 1.49081C11.4937 1.54893 11.4937 1.54893 11.4937 1.60704C11.2613 2.24632 10.9707 2.76937 10.6801 3.35053C10.5057 3.64111 10.3314 3.93169 10.1571 4.16416C9.9827 4.39662 9.86647 4.57096 9.75023 4.6872C9.634 4.80343 9.51777 4.86154 9.45965 4.97778C9.40154 5.03589 9.28531 5.09401 9.28531 5.0359C9.2272 5.0359 9.16907 5.03589 9.16907 4.97778C9.11096 4.91966 9.05285 4.86154 8.99473 4.80343C8.93662 4.74531 8.93661 4.62908 8.87849 4.51285C8.87849 4.39661 8.87849 4.28038 8.87849 4.22227C8.87849 4.16415 8.87849 3.98981 8.87849 3.87358C8.87849 3.69923 8.87849 3.58299 8.87849 3.52488C8.87849 3.35053 8.87849 3.11807 8.87849 2.8856C8.87849 2.65314 8.87849 2.47879 8.87849 2.36255C8.87849 2.24632 8.87849 2.07198 8.87849 1.95574C8.87849 1.7814 8.87849 1.66516 8.87849 1.60704C8.87849 1.54893 8.82039 1.4327 8.82039 1.37458C8.76227 1.31647 8.70415 1.25835 8.64603 1.20023C8.58792 1.14212 8.47169 1.14212 8.41357 1.084C8.12299 1.02589 7.7743 0.967773 7.36749 0.967773C6.43763 0.967773 5.79835 1.02589 5.56589 1.14212C5.44966 1.20024 5.33342 1.25835 5.27531 1.37458C5.15908 1.49082 5.15907 1.54893 5.21719 1.54893C5.50777 1.60705 5.74024 1.72328 5.85647 1.89762L5.91459 2.01386C5.9727 2.07198 5.97269 2.18821 6.03081 2.36255C6.08893 2.5369 6.08893 2.71125 6.08893 2.94372C6.08893 3.29241 6.08893 3.64111 6.08893 3.87358C6.08893 4.16416 6.03081 4.3385 6.03081 4.51285C6.03081 4.68719 5.9727 4.80343 5.91459 4.86155C5.85647 4.97778 5.85646 5.0359 5.79835 5.0359C5.79835 5.0359 5.79835 5.09401 5.74023 5.09401C5.68211 5.09401 5.624 5.15213 5.50777 5.15213C5.44965 5.15213 5.33342 5.09401 5.27531 5.0359C5.15908 4.97778 5.04284 4.86155 4.98473 4.74532C4.8685 4.62908 4.75226 4.45473 4.63603 4.22227C4.5198 3.9898 4.34544 3.75734 4.22921 3.40865L4.11299 3.17618C4.05487 3.05995 3.93864 2.82749 3.82241 2.5369C3.70617 2.24632 3.58994 2.01386 3.47371 1.72328C3.41559 1.60705 3.35748 1.54893 3.29937 1.49081H3.24125C3.24125 1.49081 3.18312 1.4327 3.12501 1.4327C3.06689 1.4327 3.00878 1.37458 2.95067 1.37458H0.858485C0.626021 1.37458 0.50979 1.4327 0.451674 1.49081L0.393555 1.54893C0.393555 1.54893 0.393555 1.60705 0.393555 1.66516C0.393555 1.72328 0.393558 1.78139 0.451674 1.89762C0.742255 2.59502 1.09095 3.29241 1.43965 3.98981C1.78834 4.62908 2.13704 5.21024 2.36951 5.61706C2.66009 6.02387 2.89255 6.43068 3.18313 6.77938C3.47371 7.12807 3.64805 7.36054 3.70617 7.47677C3.8224 7.593 3.88051 7.65111 3.93863 7.70923L4.11299 7.88358C4.22922 7.99981 4.40356 8.17416 4.63603 8.34851C4.86849 8.52286 5.15907 8.6972 5.44965 8.87155C5.74023 9.0459 6.08893 9.16214 6.43763 9.27837C6.84444 9.3946 7.19313 9.45272 7.54183 9.3946H8.41357C8.58792 9.3946 8.70416 9.33648 8.82039 9.22025L8.87849 9.16213C8.87849 9.10401 8.93661 9.10402 8.93661 9.0459C8.93661 8.98778 8.93661 8.92967 8.93661 8.81344C8.93661 8.58098 8.93662 8.40663 8.99473 8.23228C9.05285 8.05793 9.05285 7.9417 9.11097 7.82547C9.16909 7.70924 9.2272 7.65111 9.28531 7.593C9.34343 7.53488 9.40155 7.47677 9.40155 7.47677H9.45965C9.57588 7.41865 9.75024 7.47677 9.86647 7.593C10.0408 7.70923 10.2152 7.88358 10.3314 8.05793C10.4476 8.23228 10.622 8.40663 10.8545 8.63909C11.0869 8.87155 11.2613 9.0459 11.3775 9.10402L11.5518 9.22025C11.6681 9.27837 11.7843 9.33648 11.9587 9.3946C12.133 9.45272 12.2492 9.45271 12.3655 9.45271L14.3414 9.3946C14.5158 9.3946 14.6901 9.33648 14.8063 9.27837C14.9226 9.22025 14.9807 9.16213 14.9807 9.0459C14.9807 8.98778 14.9807 8.87156 14.9807 8.81344C14.8644 8.69721 14.8645 8.63909 14.8645 8.58097Z" fill="white"></path>
                                    </svg>
                                </a>
                            <?php endif; ?>
                            <?php if( $socialname == 'bc3' ): ?>
                                <a href="<?php echo $social_link ?>" class="social__link instagram d-flex justify-content-center align-items-center mx-2">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6064 0.399902H2.09336C1.13221 0.399902 0.399902 1.13221 0.399902 2.09336V10.6064C0.399902 11.5676 1.13221 12.2999 2.09336 12.2999H10.6064C11.5676 12.2999 12.2999 11.5676 12.2999 10.6064V2.09336C12.2999 1.13221 11.5676 0.399902 10.6064 0.399902ZM6.3499 9.9199C8.31798 9.9199 9.9199 8.36375 9.9199 6.48721C9.9199 6.16683 9.87413 5.80067 9.78259 5.52606H10.7895V10.3776C10.7895 10.6064 10.6064 10.8353 10.3318 10.8353H2.36798C2.13913 10.8353 1.91029 10.6522 1.91029 10.3776V5.48029H2.96298C2.87144 5.80067 2.82567 6.12106 2.82567 6.44144C2.7799 8.36375 4.38183 9.9199 6.3499 9.9199ZM6.3499 8.54683C5.06836 8.54683 4.06144 7.5399 4.06144 6.30413C4.06144 5.06836 5.06836 4.06144 6.3499 4.06144C7.63144 4.06144 8.63836 5.06836 8.63836 6.30413C8.63836 7.58567 7.63144 8.54683 6.3499 8.54683ZM10.7438 3.64952C10.7438 3.92413 10.5149 4.15298 10.2403 4.15298H8.95875C8.68413 4.15298 8.45529 3.92413 8.45529 3.64952V2.41375C8.45529 2.13913 8.68413 1.91029 8.95875 1.91029H10.2403C10.5149 1.91029 10.7438 2.13913 10.7438 2.41375V3.64952Z" fill="white"></path>
                                    </svg>
                                </a>
                            <?php endif; ?>
                            <?php if( $socialname == 'bc4' ): ?>
                                <a href="<?php echo $social_link ?>" class="social__link mymir d-flex justify-content-center align-items-center mx-2">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6065 1.91029C9.50799 0.903364 8.18067 0.399902 6.53298 0.399902C4.83952 0.399902 3.3749 0.949133 2.1849 2.09336C0.9949 3.2376 0.399902 4.65644 0.399902 6.3499C0.399902 7.9976 0.949139 9.37067 2.09337 10.5607C3.2376 11.7507 4.74799 12.2999 6.71607 12.2999C7.8603 12.2999 9.00453 12.0711 10.1488 11.5676C10.5149 11.4303 10.698 10.9726 10.5607 10.6064C10.4234 10.2403 9.96568 10.0572 9.59952 10.1945C8.63837 10.6064 7.67721 10.8353 6.76182 10.8353C5.29721 10.8353 4.15298 10.3776 3.32913 9.46221C2.50528 8.54683 2.09337 7.49413 2.09337 6.30413C2.09337 4.97683 2.55106 3.87836 3.3749 3.00875C4.24452 2.13913 5.29721 1.68144 6.57875 1.68144C7.72298 1.68144 8.7299 2.04759 9.55375 2.7799C10.3776 3.51221 10.7438 4.42759 10.7438 5.52606C10.7438 6.25836 10.5607 6.89913 10.1945 7.4026C9.82836 7.90606 9.46221 8.1349 9.05029 8.1349C8.82144 8.1349 8.72991 8.04336 8.72991 7.76875C8.72991 7.58567 8.72991 7.35683 8.77568 7.12798L9.23337 3.42067H7.67721L7.58568 3.78683C7.17376 3.46644 6.76182 3.28336 6.30413 3.28336C5.57182 3.28336 4.93106 3.60375 4.38183 4.19875C3.8326 4.79375 3.60375 5.57183 3.60375 6.48721C3.60375 7.4026 3.8326 8.1349 4.33606 8.7299C4.79375 9.27913 5.38876 9.55375 6.02953 9.55375C6.62453 9.55375 7.12798 9.3249 7.53991 8.82144C7.86029 9.27913 8.31799 9.55375 8.95876 9.55375C9.87414 9.55375 10.6522 9.14183 11.3387 8.36375C12.0253 7.58567 12.3457 6.62452 12.3457 5.48029C12.2084 4.10721 11.6591 2.87144 10.6065 1.91029ZM6.99067 7.49413C6.71605 7.86029 6.39568 8.04336 5.98376 8.04336C5.70914 8.04336 5.52607 7.90606 5.34299 7.63144C5.15991 7.35683 5.11414 7.03644 5.11414 6.62452C5.11414 6.12106 5.20567 5.70913 5.43452 5.43452C5.66336 5.11413 5.93799 4.97683 6.25837 4.97683C6.53299 4.97683 6.8076 5.06836 7.03644 5.34298C7.26529 5.57183 7.35683 5.89221 7.35683 6.25836C7.4026 6.71606 7.26529 7.12798 6.99067 7.49413Z" fill="white"></path>
                                    </svg>
                                </a>
                            <?php endif; ?>
                        <?php endwhile; endif; ?>
                              <!-- rating mobile -->
                              <div class="card__rating d-flex d-md-none align-items-center ml-auto">
                                  <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                                  <?php echo the_field('ratings_average', $author_id); ?>
                              </div>
                              <!-- / rating mobile -->
                          </div>
                            <div class="expert__horizontal-picture mr-md-4 d-flex flex-column order-1 order-md-3">
                                <div class="expert__horizontal-img">
                                    <img src="<?php echo the_field('expert_logo', $author_id ) ?>" alt="">
                                </div>
                                <div class="card__rating d-none d-md-flex align-items-center mx-auto mt-3">
                               <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                               <?php echo the_field('ratings_average', $author_id); ?>
                           </div>
                            </div>
                            <div class="expert__horizontal-content order-3 order-md-4">
                                <?php $post_id = $author_id;
                                    $post_content = get_post($post_id);
                                    $content = $post_content->post_content;
                                    echo apply_filters('the_content',$content); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
            <!-- / author -->
            <!-- similar offers -->

            <!-- / similar offers -->
            <!-- card reviews -->
            <div class="section">
                <div class="section__header d-flex justify-content-between align-items-center mb-4">
                    <h2 class="title mb-0">Отзывы о дебетовых картах</h2>
                    <a href="<?php echo  get_page_link(4965); //1503 tax-reviews?>" class="btn btn-primary btn-sm btn-all" data-tax="debetcard">
                        Все
                        <span class="icon ml-2">
                            <svg width="21" height="12" viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.242 5.266A.738.738 0 0 0 .5 6c0 .406.332.734.742.734H11.38v2.07c0 2.233 2.59 3.495 4.379 2.132l3.68-2.803a2.674 2.674 0 0 0 0-4.266l-3.68-2.803c-1.789-1.363-4.38-.1-4.38 2.132v2.07H1.243Zm13.612 4.507c-.813.62-1.99.046-1.99-.97V3.197c0-1.015 1.177-1.588 1.99-.969l3.68 2.804c.643.49.643 1.449 0 1.939l-3.68 2.803Z"></path></svg>
                        </span>
                    </a>
                </div>
                <div class="horizontal__scroll row">
                    <div class="horizontal__scroll-container">
                                    <?php

    $ppp = 3; // either use the WordPress global Posts per page setting or set a custom one like $ppp = 10;
    $custom_offset = 0;

    // fetch posts in all those categories
    $posts = get_objects_in_term( 7, 'bankcards' );

    $sql = "SELECT comment_ID, comment_date, comment_content, comment_post_ID
     FROM {$wpdb->comments} WHERE
     comment_post_ID in (".implode(',', $posts).") AND comment_approved = 1 AND comment_parent = 0
     ORDER by comment_date DESC LIMIT $ppp OFFSET $custom_offset";

    $comments_list = $wpdb->get_results( $sql );

    if ( count( $comments_list ) > 0 ) {
     foreach ( $comments_list as $comm ) {

     $comment_id = $comm->comment_ID;
     $comment = get_comment($comment_id);
     $comment_post_id = $comment->comment_post_ID;
     $bank_id = get_field('bank_choise', $comment_post_id);
     $user = get_userdata( $comment->user_id );
      $user_email = '';
     $user_role = '';
     if (!empty($user)) {
      $user_email = $user->user_email;
      $user_role = $user->roles;
     }
     $author = get_comment_author( $comment_id );
     $city = get_comment_meta( $comment_id, 'city', true ); ?>
     <!-- item -->
           <div class="reviews__item">
               <div class="reviews__item-body">
                   <div class="reviews__header d-flex align-items-center mb-2">
                       <div class="reviews__header-logo">
                           <img src="<?php echo the_field('bank_logo', $bank_id) ?>"
                                alt="<?
                                $logo_id = get_field('bank_logo',$bank_id , false);
                                $logo_alt = get_post_meta($logo_id, '_wp_attachment_image_alt', true);
                                echo $logo_alt;
                                ?>">
                       </div>
                       <div class="reviews__header-meta ml-3">
                           <a href="<?php echo get_comment_link($comment_id) ?>" class="reviews__header-title h4 mb-2 stretched-link"><?php echo get_the_title($bank_id) ?></a>
                           <div class="d-flex">
                               <div class="card__rating d-flex align-items-center mr-3">
                                   <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                                   <?php echo the_field('ratings_average', $bank_id); ?>
                               </div>
                               <div class="card__icon d-flex align-items-center">
                                   <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></div>
                                   <?php echo comments_number( '0', '1', '%', $bank_id); ?>
                               </div>
                               <div class="card__date d-none d-md-block ml-auto"><?php echo  get_comment_date( 'd.m.y'); ?> / <?php echo get_comment_date('H:i') ?></div>
                           </div>
                       </div>
                   </div>
                   <div class="reviews__item-content">
                       <p><?php echo $comment->comment_content; ?></p>
                   </div>
               </div>
               <div class="reviews__item-footer">
                   <div class="reviews__author d-flex align-items-center mt-3">
                       <div class="reviews__author-img mr-3">
                           <img src="<?php echo get_avatar_url( $comment, array('size' => 60,
                       'default'=>'identicon',) ); ?>" alt="<?php echo $author; ?>">
                       </div>
                       <div class="reviews__author-content">
                           <a class="reviews__author-title mb-2 d-block stretched-link"><?php echo $author; ?></a>
                           <div class="reviews__author-info d-flex">
                               <div class="card__icon d-flex align-items-center mr-3">
                                   <div class="mr-2"><svg width="14" height="19" viewBox="0 0 16 21" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#person" x="0" y="0"></use></svg></div>
                                   <?php if(empty($user_role[0])):
                                        echo 'Гость';
                                    else:
                                        echo $user_role[0];
                                    endif; ?>
                               </div>
                               <?php if($city != ''): ?>
                               <div class="card__icon d-flex align-items-center">
                                   <div class="mr-2"><svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#pointer" x="0" y="0"></use></svg></div>
                                   <?php echo $city ?>
                               </div>
                            <?php endif; ?>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <!-- / item -->
    <?php }
    }else{ ?>
    <p class="col-12">Пока нет отзывов.</p>
    <?php } ?>
                    </div>
                </div>
            </div>
            <!-- / card reviews -->
            <!-- best offers -->
           <div class="section" id="best-products">
               <div class="section__header d-flex justify-content-between align-items-center mb-4">
                   <h2 class="title mb-0">Лучшие предложения </h2>
                   <a href="" class="btn btn-primary btn-sm btn-all">
                       Все
                       <span class="icon ml-2">
                           <svg width="21" height="12" viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.242 5.266A.738.738 0 0 0 .5 6c0 .406.332.734.742.734H11.38v2.07c0 2.233 2.59 3.495 4.379 2.132l3.68-2.803a2.674 2.674 0 0 0 0-4.266l-3.68-2.803c-1.789-1.363-4.38-.1-4.38 2.132v2.07H1.243Zm13.612 4.507c-.813.62-1.99.046-1.99-.97V3.197c0-1.015 1.177-1.588 1.99-.969l3.68 2.804c.643.49.643 1.449 0 1.939l-3.68 2.803Z"></path></svg>
                       </span>
                   </a>
               </div>
               <div class="horizontal__scroll row">
                   <div class="horizontal__scroll-container">
                    <?php
    $args = array(
        'post_type'             => 'bankcard',
        'posts_per_page'        => 4,
        'meta_key' => 'ratings_average',
        'orderby' => 'meta_value_num',
        'order' => 'DESC',
        'tax_query' => array(
            array(
                'taxonomy' => 'bankcards',
                'field'    => 'slug',
                'terms'    =>  'debetcard',
            ),
        )
    );

    $query = new WP_Query( $args );

    // Цикл
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            ?>
            <!-- item -->
                       <div class="card card__vertical size4 offer h-100">
                           <div class="card-container p-3">
                               <div class="card__header mb-2 d-flex">
                                   <div class="card__header-img">
                                       <img src="<?php $bank_choise_rel = get_field('bank_choise', get_the_ID()) ?>
                                       <?php echo the_field('bank_logo', $bank_choise_rel) ?>"
                                        alt="<?
                                        $logo_id = get_field('bank_logo',$bank_choise_rel , false);
                                        $logo_alt = get_post_meta($logo_id, '_wp_attachment_image_alt', true);
                                        echo $logo_alt;
                                        ?>">
                                   </div>
                                   <div class="card__header-title"><a href="<?php echo the_permalink() ?>"><?php echo the_title() ?></a></div>
                               </div>
                               <div class="card__header-info d-flex align-items-center">
                                   <div class="card__rating d-flex align-items-center mr-3">
                                       <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                                       <?php echo the_field('ratings_average'); ?>
                                   </div>
                                  <div class="position-relative card__icon d-flex align-items-center mr-3">
                                      <div class="mr-2"><a href="<?php the_permalink() ?>#comments" data-target="comments" class="stretched-link"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></a></div>
                                      <?php $comments_count = wp_count_comments(get_the_ID()); echo $comments_count->approved ?>
                                  </div>
                                   <div class="card__like d-flex align-items-center">
                                        <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                                    </div>
                                   <div class="card__header-actions ml-auto">
                                       <a href=""><svg width="20" height="20" viewBox="0 0 20 20"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#circledots" x="0" y="0"></use></svg></a>
                                   </div>
                               </div>
                               <div class="card__image my-3">
                                   <a href="<?php echo the_permalink() ?>">
                                       <img src="<?php echo the_field('card_logo') ?>"
                                            alt="<?
                                            $logo_id = get_field('card_logo', get_the_ID(), false);
                                            $logo_alt = get_post_meta($logo_id, '_wp_attachment_image_alt', true);
                                            echo $logo_alt;
                                            ?>">
                                   </a>
                               </div>
                               <ul class="leaders">
                                   <li class="leaders__item mb-1">
                                       <div class="leaders__item-title">Снятие без %</div>
                                       <div class="leaders__item-value">До <?php echo the_field('non_pecent_money') ?> р</div>
                                   </li>
                                   <li class="leaders__item mb-1">
                                       <div class="leaders__item-title">% на остаток</div>
                                       <div class="leaders__item-value">До <?php echo the_field('card_stavka_ostatok') ?> %</div>
                                   </li>
                                   <li class="leaders__item mb-1">
                                       <div class="leaders__item-title">Тип кешбэка</div>
                                       <div class="leaders__item-value"><?php $field = get_field('card_cashback_type');
                                                //$value = $field['value'];
                                                //$label = $field['choices'][ $value ];
                                                echo $field['label'] ?></div>
                                   </li>
                                   <li class="leaders__item mb-1">
                                       <div class="leaders__item-title">Кешбэк</div>
                                       <div class="leaders__item-value"><?php $field = get_field('card_cashback');
                                                //$value = $field['value'];
                                                //$label = $field['choices'][ $value ];
                                                echo $field['label'] ?></div>
                                   </li>
                               </ul>
                               <div class="card__actions mt-3 d-flex">
                                   <a href="<?php echo the_permalink() ?>" class="btn btn-outline-primary btn-sm btn-block font-weight-normal">Подробнее</a>
                                   <a class="btn__compare btn btn-outline-primary btn-sm btn-icon d-flex align-items-center justify-content-center ml-3" data-id="<?php echo get_the_id() ?>" data-tax="<?php echo 'debetcard'; ?>">
                                       <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#stats" x="0" y="0"></use></svg>
                                   </a>
                               </div>
                               <div class="card__footer mt-3">
                                   <p>
                                       <span><?php echo the_field('bank_phone', $bank_choise_rel) ?></span>
                                       <span><?php echo the_field('bank_email', $bank_choise_rel) ?></span>
                                       <span>Лицензия: <?php echo the_field('bank_license', $bank_choise_rel) ?></span>
                                       <span><?php echo the_field('views', get_the_id()) ?> заявок</span>
                                   </p>
                               </div>
                           </div>
                       </div>
                       <!-- / item -->
            <?php
        }
    }
    // Возвращаем оригинальные данные поста. Сбрасываем $post.
    wp_reset_postdata();
    ?>
                   </div>
               </div>
           </div>
            <!-- / best offers -->
            <!-- faq -->


                <?php if( have_rows('type_faq', $term) ): ?>
                      <div class="section">
                    <div class="section__header d-flex justify-content-between align-items-center mb-4">
                        <h2 class="title mb-0">Часто задавемые вопросы</h2>
                    </div>
                    <div class="accordion" id="accordion">
                    <?php $counter = 0; ?>
                    <?php while( have_rows('type_faq', $term) ): the_row();
                        $question = get_sub_field('question');
                        $answer = get_sub_field('answer');
                        $counter += 1;
                        ?>
                        <div class="accordion__item">
                        <div class="accordion__header">
                            <button class="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse__item-<?php echo $counter?>" aria-expanded="false">
                                <?php echo $question ?>
                                <div class="accordion__button-icon"><svg width="12" height="6" viewBox="0 0 12 6"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#arrow" width="12" height="6" x="0" y="0"></use></svg></div>
                            </button>
                        </div>
                        <div id="collapse__item-<?php echo $counter?>" class="accordion__collapse collapse" data-bs-parent="#accordion">
                            <div class="accordion__body">
                                <p><?php echo $answer ?></p>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                   </div>
                </div>
                <?php endif; ?>
            <!-- / faq -->
            <!-- wysiwyg text -->
            <div class="section">
                <div class="wysiwyg">
                   <?php echo the_field('type_desc', $term) ?>
                </div>
                <?php $date_actually = get_the_modified_date('d.m.Y', $ID); ?>
                <? if($date_actually): ?>
                    <div class="date_actually-article mb-2">Обновлено: <?= $date_actually;?></div>
                <? endif; ?>
            </div>
            <!-- / wysiwyg text -->
        </div>
    </main>



    <?php get_footer(); ?>

<?php endif; ?>
