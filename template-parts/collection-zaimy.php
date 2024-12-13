<?php get_header() ?>

<?php $term = get_queried_object(); 
$ID = get_queried_object()->ID; 
$z_sum = 0;
$z_time = 0;
//$z_sum = 15000;
//$z_time = 24;
if(isset($_SESSION['filter_zaimy']) && !empty($_SESSION['filter_zaimy'])):
$mt = 1;
$z_sum = $_SESSION['filter_zaimy'][0];
$z_time = $_SESSION['filter_zaimy'][1];
endif;
unset($_SESSION['filter_zaimy']);


	$tagslist = '';
	$tags = get_field('coll-tags');
	$ipost = 1;
	if (!empty($tags)):
	foreach ($tags as $tag):
		$tagslug = $tag->slug;
		if ($ipost == 1) {
			$tagslist .= $tagslug;
		} else {
			$tagslist .= ",".$tagslug;
		}
		$ipost++;
	endforeach;
	endif;		
	$postsarray = [];
	if (!empty($tagslist)) {
	$posts_arg = [
		'posts_per_page'   => -1,
		'post_type' => array('zaimy'),
		'tag' => $tagslist	
	];
	
	$posts = get_posts( $posts_arg );
	foreach( $posts as $post ){
		setup_postdata( $post );
		$postsarray[] = $post->ID;			
	}
	wp_reset_postdata();
	}
	//wp_reset_query();
	if (get_field('coll-zaimy')) {
		$products = get_field('coll-zaimy');
	} else {
		$products = [];
	}
	
	$allposts = array_merge($postsarray, $products);

	$allpostsjson = json_encode($allposts); 

	global $allposts_collection;
	global $type_collection;
	$allposts_collection = $allposts;
	$type_collection = 'zaimy';
	
	//var_dump($allpostsjson);

?>

<main term="zaimy">
	<div class="container">
	    <nav aria-label="breadcrumb" class="horizontal__scroll">
	        <ol class="breadcrumb horizontal__scroll-container">
	            <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>">Главная</a></li>
	            <li class="breadcrumb-item" aria-current="page"><a href="<?php echo get_post_type_archive_link('zaimy') ?>">Займы</a></li> 
	            <li class="breadcrumb-item active" aria-current="page"><?php the_title(); ?></li>
	        </ol>
	    </nav>
	</div>
	<div class="page__heading">
	    <div class="container">
	        <div class="d-flex justify-content-between align-items-center">
	          <h1 class="page__heading-title mb-0">
	            	<?php if(get_field('col-h1')): ?>
	            		<?= get_field('col-h1'); ?>
	            	<?php else: ?>
	            		<?php the_title(); ?>
	            	<?php endif; ?>	
	          </h1>
	            	            <?php $args = array(
					    'post_type'             => 'zaimy', 
					    'posts_per_page'        => -1,
					    'orderby' => 'date',
					    'order' => 'ASC',
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
	            <?= get_field('col-desc'); ?>
	        </div>
	        <form id="credit-card-filter" action="" method="POST">
	        	<input type="hidden" name="action" value="cardfilter" />
	        	<input type="hidden" name="term" value="zaimy" />
	        	<input type="hidden" name="postarr" value="<?php echo htmlspecialchars( $allpostsjson ); ?>" />
                <?
                $filter_price = get_filter_price();
                ?>
	            <div class="row">
	                <div class="col-12 col-md-6 col-lg-3 col-xl-4 order-1">
	                    <div class="range">
	                        <div class="d-flex justify-content-between">
	                            <div class="range__label">Сумма, ₽</div>
	                            <input type="text" class="range__value cred_limit" value="<?php echo $z_sum ?>" min="0" max="<?= $filter_price['zaimy_inputs_range']['max']; ?>" >
	                        </div>
	                        <input class="range__input" name="z_sum" type="range" min="0" max="<?= $filter_price['zaimy_inputs_range']['max']; ?>" value="<?php echo $z_sum ?>">
	                    </div>
	                </div>

	                <div class="col-12 col-md-6 col-lg-3 col-xl-4 order-2">
	                    <div class="range">
	                        <div class="d-flex justify-content-between">
	                            <div class="range__label">Срок, дней</div>
	                            <input type="text" class="range__value cred_trat" value="<?php echo $z_time ?>" min="0" max="<?= $filter_price['zaimy_inputs_range']['day_max']; ?>">
	                        </div>
	                        <input class="range__input" name="z_time" type="range" min="0" max="<?= $filter_price['zaimy_inputs_range']['day_max']; ?>" value="<?php echo $z_time ?>">
	                    </div>
	                </div>
	                <div class="col-12 col-md-6 col-lg-3 col-xl-2 mt-lg-0 order-5 order-md-3">
	                	<div class="btn btn-primary btn-block submit-button">Показать</div>
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
	                    <a href="<?php echo get_post_type_archive_link('zaimy') ?>" class="nav-link active">Все займы</a>
	                    <a href="<?php echo get_page_link(4975); //1503 tax-reviews  ?>" class="nav-link " data-tax="zaimy">Отзывы</a>
	                    <a href="<?php echo get_page_link(159) ?>" class="nav-link">Калькулятор</a>
	                    <a href="<?php echo get_category_link(12) ?>" class="nav-link">Статьи</a>
	                    <a href="<?php echo get_page_link(1554) ?>" class="nav-link">сравнить</a>
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
	                                    Компания
	                                    <div class="filter__btn-icon"><svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg></div>
	                                </a>
	                                <div class="collapse" id="filter1">
	                                    <div class="filter__content">
	                                        <ul class="filter__list">
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="oz1">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Турбозайм
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="oz2">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Займер
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="oz3">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    E-капуста
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="oz4">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    MoneyMan
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="oz5">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Деньга
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="oz6">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Веб-займ
	                                                </label>
	                                            </li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </div>
	                            <div class="filter__section">
	                                <a class="filter__btn collapsed" data-bs-toggle="collapse" href="#filter2" role="button" aria-expanded="false">
	                                    Способ получения
	                                    <div class="filter__btn-icon"><svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg></div>
	                                </a>
	                                <div class="collapse" id="filter2">
	                                    <div class="filter__content">
	                                        <ul class="filter__list">
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct1">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    На карту
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct2">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Наличными
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct3">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Юмани
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct4">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    QIWI
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct5">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Contact
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct6">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Золотая корона
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zct7">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Банковский счет
	                                                </label>
	                                            </li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </div>
	                            <div class="filter__section">
	                                <a class="filter__btn collapsed" data-bs-toggle="collapse" href="#filter3" role="button" aria-expanded="false">
	                                    Прочие условия
	                                    <div class="filter__btn-icon"><svg width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h-.4C4.4 5.8 3.5 5 2 3.5L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l1.7 1.8C4.6 3.2 5.3 3.9 5.8 4h.4c.5-.1 1.2-.8 2.4-1.9L10.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10 3.5C8.5 5 7.6 5.8 6.4 6H6Z"></path></svg></div>
	                                </a>
	                                <div class="collapse" id="filter3">
	                                    <div class="filter__content">
	                                        <ul class="filter__list">
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zos1">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Под 0% первый займ
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zos2">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Моментальное решение
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zos3">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Без справок о доходах
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zos4">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    С 18 лет
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zos5">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    С любой КИ
	                                                </label>
	                                            </li>
	                                            <li class="filter__list-item">
	                                                <label class="checkbox">
	                                                    <input type="checkbox" name="zos6">
	                                                    <span class="checkbox__icon"><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.576.483c-.566-.644-1.48-.644-2.045 0l-4.864 5.54-1.2-1.363c-.563-.644-1.479-.644-2.044 0-.564.642-.564 1.685 0 2.329l2.221 2.528c.564.644 1.48.644 2.045 0l5.887-6.705c.565-.642.565-1.685 0-2.329"></path></svg></span>
	                                                    Под залог ПТС
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
							'theme_location'  => 'sidebar_menu_zaimy',
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
						            'value'     => 'zaimy',
						            'compare'   => '=',
						        ),
						    )					    
					);
					$query = new WP_Query( $args_coll );
					if ( $query->have_posts() ) { $current_id = $wp_query->get_queried_object_id(); ?>
                        <? get_template_part( 'all_template/filter_right', null, [ 'cat' => $cat, 'query' => $query]); ?>
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
    'post_type' => 'zaimy',
    'post_status' => 'publish',
    'post__in' => $allposts,
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
            get_template_part('template-parts/filter-zaimy-posts');
        endwhile;

        $posts_html = ob_get_contents();
        ob_end_clean();
    }

}else{
    $posts_html = '<p>Ничего не найдено по заданым фильтрам.</p>';
}

$GLOBALS['wp_query']->max_num_pages = $query->max_num_pages;


?>
<!-- list -->
<div class="col-12 col-lg-8 order-lg-1">
    <div class="credits__list">
        <div class="d-flex flex-wrap justify-content-between align-items-center mt-0 mt-md-5 mt-lg-0 mb-3">
          <div class="h2 mt-5 mb-4 mt-md-0 mb-md-0"><span class="variants_count"><?php echo $query->found_posts; ?></span> вариантов</div>
          <div class="credits__list-dropdown dropdown mb-3 mb-md-0 col-12 col-md-5 col-lg-4 px-0">
              <select name="" class="styledSelect cred-order-select">
                  <option value="" selected disabled>Сортировать</option>
                  <option value="ratings_average">По рейтингу</option>
                  <option value="views">По количеству заявок</option>
                  <option value="z_sum">По сумме займа</option>
                  <option value="z_stavka">По процентной ставке</option>
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
						            'value'     => 'zaimy',
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
	            <h2 class="title mb-0">Статьи о займах</h2>
	            <a href="<?php echo get_category_link('38') ?>" class="btn btn-primary btn-sm btn-all">
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
                    'cat' => 38,
                    'posts_per_page' => 4,
                    'meta_key' => 'views',
                    'orderby' => array( 'meta_value_num' => 'desc', 'name' => 'desc' ),
                    'order' => 'DESC',
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
                      <div class="card__icon d-flex align-items-center mr-3">
                          <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></div>
                          <?php echo comments_number( '0', '1', '%'); ?>
                      </div>
                      <div class="card__like d-flex align-items-center ml-auto">
                          <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                      </div>
                  </div>
                  <?php if (get_field('page_author')): ?>
                  <?php $author_id = get_field('page_author') ?>
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

	    <!-- similar offers -->

	    <!-- / similar offers -->
	    <!-- card reviews -->
	    <div class="section" style="    margin-bottom: 120px;">
	        <div class="section__header d-flex justify-content-between align-items-center mb-4">
	            <h2 class="title mb-0">Отзывы о займах</h2>
	            <a href="<?php echo  get_page_link(4975); //1503 tax-reviews?>" class="btn btn-primary btn-sm btn-all " data-tax="zaimy">
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
$posts = get_cpt_ids('zaimy');

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
 $bank_id = get_field('product_bank', $comment_post_id);
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
                       <img src="<?php echo the_field('z_organization_logo', $comment_post_id) ?>"
                            alt="<?
                            $logo_id = get_field('z_organization_logo',$comment_post_id , false);
                            $logo_alt = get_post_meta($logo_id, '_wp_attachment_image_alt', true);
                            echo $logo_alt;
                            ?>">
                   </div>
                   <div class="reviews__header-meta ml-3">
                       <a href="<?php echo get_comment_link($comment_id) ?>" class="reviews__header-title h4 mb-2 stretched-link"><?php echo get_the_title($comment_post_id) ?></a>
                       <div class="d-flex">
                           <div class="card__rating d-flex align-items-center mr-3">
                               <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                               <?php echo the_field('ratings_average', $comment_post_id); ?> 
                           </div>
                           <div class="card__icon d-flex align-items-center">
                               <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></div>
                               <?php echo comments_number( '0', '1', '%', $comment_post_id); ?>
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
                   <div class="reviews__author-img mr-3"><img
                               src="<?php echo get_avatar_url( $comment, array('size' => 60,
                   'default'=>'identicon',) ); ?>" alt="<?php echo $author; ?>"></div>
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
	    <!-- best credit cards -->
       <div class="section">
           <div class="section__header d-flex justify-content-between align-items-center mb-4">
               <h2 class="title mb-0">Лучшие предложения</h2>
               <a href="<?php echo get_post_type_archive_link('zaimy') ?>" class="btn btn-primary btn-sm btn-all">
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
    'post_type'             => 'zaimy', 
    'posts_per_page'        => 4,
    'meta_key' => 'ratings_average',
    'orderby' => 'meta_value_num',
    'order' => 'DESC', 
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
                                   <img src="<?php echo the_field('z_organization_logo') ?>"
                                        alt="<?
                                        $logo_id = get_field('z_organization_logo', get_the_ID(), false);
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
                               <div class="card__icon d-flex align-items-center mr-3">
                                   <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></div>
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
                                   $logo_id = get_field('card_logo',get_the_ID() , false);
                                   $logo_alt = get_post_meta($logo_id, '_wp_attachment_image_alt', true);
                                   echo $logo_alt;
                                   ?>">
                               </a>
                           </div>
                           <ul class="leaders">
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Сумма займа</div>
                                   <div class="leaders__item-value"><?php echo the_field('z_sum') ?> р</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Срок займа</div>
                                   <div class="leaders__item-value">до <?php echo the_field('z_time') ?> дней</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">% ставка</div>
                                   <div class="leaders__item-value">от <?php $card_period = get_field('z_stavka'); 
                                       echo $card_period; ?>%</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Кредитная история</div>
                                   <div class="leaders__item-value"><?php echo the_field('z_history') ?></div>
                               </li>
                           </ul>
                           <div class="card__actions mt-3 d-flex">
                               <a href="<?php echo the_permalink() ?>" class="btn btn-outline-primary btn-sm btn-block font-weight-normal">Подробнее</a>
                               <a class="btn__compare btn btn-outline-primary btn-sm btn-icon d-flex align-items-center justify-content-center ml-3" data-id="<?php echo get_the_id() ?>" data-tax="<?php echo 'zaimy'; ?>">
                                   <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#stats" x="0" y="0"></use></svg>
                               </a>
                           </div>
                           <div class="card__footer mt-3">
                               <p>
                                   <span><?php echo the_field('z_organization_phone') ?></span>
                                   <span><?php echo the_field('z_organization_email') ?></span>
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
       <!-- / best credit cards -->
	    <!-- faq -->

	        
	        <?php if( have_rows('zaimy_faq', 'options') ): ?>
	        	  <div class="section">
		        <div class="section__header d-flex justify-content-between align-items-center mb-4">
		            <h2 class="title mb-0">Часто задавемые вопросы</h2>
		        </div>
			    <div class="accordion" id="accordion">
			    <?php $counter = 0; ?> 
			    <?php while( have_rows('zaimy_faq', 'options') ): the_row(); 
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
	           <?php the_content(); ?>
	        </div>
            <?php $date_actually = get_the_modified_date('d.m.Y', $ID); ?>
            <? if($date_actually): ?>
                <div class="date_actually-article mb-2">Обновлено: <?= $date_actually;?></div>
            <? endif; ?>


            <?php
            //wp_reset_postdata();

            $author_id = get_field('page_author_new', $ID); ?>


            <?php if($author_id): ?>
                <div class="article__one-footer-meta ml-md-auto">
                    <div class="article__one-footer-img">
                        <?php get_template_part( 'all_template/image_and_alt/card_author-img', null, $author_id); ?>
                    </div>
                    <div class="article__one-footer-name">
                        Автор <br>
                        <a class="article__one-footer-link stretched-link" href="<?php echo the_permalink($author_id) ?>">
                            <?php echo get_the_title($author_id) ?>
                        </a>
                    </div>
                </div>

            <?php endif; ?>
	    </div>
	    <!-- / wysiwyg text -->
	</div>
</main>

<?php get_footer() ?>