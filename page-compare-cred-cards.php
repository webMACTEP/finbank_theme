<?php get_header() ?>
<?php 
/*
$cred1 = $_SESSION['cred_cards'][0]; 
$cred2 = $_SESSION['cred_cards'][1]; 
$prods[2] = $_SESSION['cred_cards'][2]; 
$prods[3]= $_SESSION['cred_cards'][3];
*/

$prods = [];
foreach ($_SESSION['cred_cards'] ?? [] as &$prod) {
    $prods[] = $prod;
}

$cred_count = count($prods);
?>

<main data-type="creditcard">
	<div class="container">
	    <nav aria-label="breadcrumb" class="horizontal__scroll">
	        <ol class="breadcrumb horizontal__scroll-container">
	            <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>">Главная</a></li>
	            <li class="breadcrumb-item active" aria-current="page">Сравнения</li>
	        </ol>
	    </nav>
	</div>
	<!-- page header -->
	<div class="page__heading mb-sm-4">
	    <div class="container">
	        <div class="page__heading-top d-flex justify-content-between align-items-center">
	            <div>
	                <h1 class="page__heading-title mb-0">Сравнение кредитных карт</h1>
	            </div>
	            <div class="page__heading-icon"><img src="<?php bloginfo('template_url'); ?>/img/icon__title-hand.png" alt="Сравнение кредитных карт"></div>
	        </div>
	    </div>
	</div>
	<!-- / page header -->
	<!-- page nav -->
	<div class="page__nav">
	    <div class="container">
	        <div class="page__nav-container nav-tabs">
	            <div class="horizontal__scroll">
	                <div class="horizontal__scroll-container">
	                    <a href="<?php echo get_term_link(2, '') ?>" class="nav-link">Все кредитные карты</a>
	                    <a href="<?php echo get_page_link(1503) ?>" class="nav-link tax-reviews" data-tax="creditcard">Отзывы</a>
	                    <a href="<?php echo get_page_link(149) ?>" class="nav-link">Калькулятор</a>
	                    <a href="<?php echo get_category_link(9) ?>" class="nav-link">Статьи</a>
	                    <a href="<?php echo get_page_link(380) ?>" class="nav-link active">сравнить</a>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	<!-- / page nav -->
	<div class="compare">
	    <!-- tags -->
	    <div class="container">
	        <div class="tags__main mb-5 pb-2 ">
	            <div class="horizontal__scroll">
	                <div class="horizontal__scroll-container">
	                    <a href="<?php echo get_page_link(380) ?>" class="tag__item active"><span class="tag__item-title">кредитные карты 
	                    	<?php if(!empty($_SESSION['cred_cards'])): ?>
	                    	<?php echo count($_SESSION['cred_cards']) ?>
	                    	<?php else: echo '0'; endif; ?>
	                    	</span>
	                    </a>
	                    <a href="<?php echo get_page_link(1548) ?>" class="tag__item"><span class="tag__item-title">Дебетовые карты 
	                    	<?php if(!empty($_SESSION['debet_cards'])): ?>
	                    	<?php echo count($_SESSION['debet_cards']) ?>
	                    	<?php else: echo '0'; endif; ?>
	                    	</span>
	                    </a>
	                    <a href="<?php echo get_page_link(1550) ?>" class="tag__item"><span class="tag__item-title">карты рассрочки 
	                    	<?php if(!empty($_SESSION['installment_cards'])): ?>
	                    	<?php echo count($_SESSION['installment_cards']) ?>
	                    	<?php else: echo '0'; endif; ?>
	                    	</span>
	                    </a>
	                    <a href="<?php echo get_page_link(1552) ?>" class="tag__item"><span class="tag__item-title">кредиты 
	                    	<?php if(!empty($_SESSION['kredity'])): ?>
	                    	<?php echo count($_SESSION['kredity']) ?>
	                    	<?php else: echo '0'; endif; ?>
	                    	</span>
	                    </a>
	                    <a href="<?php echo get_page_link(1554) ?>" class="tag__item"><span class="tag__item-title">займы 
	                    	<?php if(!empty($_SESSION['zaimy'])): ?>
	                    	<?php echo count($_SESSION['zaimy']) ?>
	                    	<?php else: echo '0'; endif; ?>
	                    	</span>
	                    </a>
	                    <a href="<?= get_term_link(2, ''); ?>" class="tag__item tag__item__more">+ Добавить ещё</a>
	                </div>
	            </div>
	        </div>
	    </div>
	    <!-- / tags -->
	    <!-- compare list -->
	    <div class="container">
	        <div class="section">
	            <div class="compare__list">
	                <div class="compare__list-container">   
	                    <!-- compare list cards -->
	                    <div class="compare__list-header">
	                        <div class="compare__row">


                                <?php for ($r = 0; $r < 4; $r++) { ?>


                                    <?php if(!empty($prods[$r])): ?>

                                        <!-- item -->
                                        <?php $bank_id = get_field('bank_choise', $prods[$r]); ?>
                                        <div class="compare__item" data-index="<?= $s = $r+1; ?>">
                                            <div class="card card__horizontal bank__item">
                                                <div class="card-container pt-2 px-2 pb-0 p-sm-2">
                                                    <div class="bank__item-content">
                                                        <div class="bank__item-img mr-2">
                                                            <img src="<?php echo the_field('bank_logo', $bank_id) ?>" alt="">
                                                        </div>
                                                        <div class="bank__item-title">
                                                            <a href="<?php echo get_the_permalink($prods[$r]) ?>" class="card__header-title stretched-link"><?php echo get_the_title($prods[$r]) ?></a>
                                                        </div>
                                                        <div class="bank__item-meta d-flex">
                                                            <div class="card__rating d-flex align-items-center mr-0 mr-sm-3">
                                                                <div class="mr-2">
                                                                    <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve">
	                                                            <use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use>
	                                                        </svg>
                                                                </div>
                                                                <?php echo the_field('ratings_average', $prods[$r]) ?>
                                                            </div>
                                                            <div class="card__icon d-flex align-items-center  my-sm-0 mr-0 mr-sm-3">
                                                                <div class="mr-2">
                                                                    <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                                                                        <use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use>
                                                                    </svg>
                                                                </div>
                                                                <?php echo comments_number( '0', '1', '%', $prods[$r]); ?>
                                                            </div>
                                                            <div class="card__like d-flex align-items-center">
                                                                <!--div class="mr-2">
                                                                </div-->
                                                                <?php echo do_shortcode('[wp_ulike for="post" id="'.$prods[$r].'" button_type="image" style="wpulike-heart"]'); ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bank__item-footer d-flex position-relative">
                                                        <a href="<?php echo the_field('card_bank_link', $prods[$r]) ?>" class="btn mx-1 btn-primary btn-block">Оформить</a>
                                                        <a class="btn mx-1 btn-outline-alternative btn-block btn-basket delete_card">
                                                            <svg class="d-block d-sm-none m-0" width="13" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.7 10.3" xml:space="preserve">
	                                                    <use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#basket" x="0" y="0"></use>
	                                                </svg>
                                                            <span class="d-none d-sm-block">Удалить</span>
                                                        </a>
                                                    </div>
                                                    <div class="bank__item-pagination card__pagination d-flex d-md-none">
                                                        <?php for ($i = 1; $i <= $cred_count; $i++) {  ?>
                                                            <div data-item="<?= $i ?>" class="card__pagination-item ">
                                                                <?= $i?>
                                                                <span class="tool-add">Следующий продукт</span>
                                                            </div>
                                                        <?} ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- / item -->

                                    <?php endif; ?>

                                <? } ?>



	                        </div>
	                    </div>
	                    <!-- / compare list cards -->
	                    <!-- compare list fixed top -->
	                    <div id="compare__fixed" class="compare__list-fixed">
	                        <div class="container">
	                            <div class="compare__row">

                                    <?php for ($r = 0; $r < 4; $r++) { ?>

                                        <?php if(!empty($prods[$r])): ?>
                                            <?php $bank_id = get_field('bank_choise', $prods[$r]); ?>
                                            <!-- item -->
                                            <div class="compare__item fixed__item align-items-center" data-index="<?= $s = $r+1; ?>">
                                                <div class="fixed__item-img mr-2">
                                                    <img src="<?php echo the_field('bank_logo', $bank_id) ?>" alt="">
                                                </div>
                                                <div class="fixed__item-title">
                                                    <a href="<?php echo get_the_permalink($prods[$r]) ?>" class="card__header-title"><?php echo get_the_title($prods[$r]) ?></a>
                                                </div>
                                                <div class="fixed__item-pagination card__pagination d-md-none">
                                                        <?php for ($i = 1; $i <= $cred_count; $i++) {  ?>
                                                            <div data-item="<?= $i ?>" class="card__pagination-item ">
                                                                <?= $i?>
                                                                <span class="tool-add">Следующий продукт</span>
                                                            </div>
                                                        <?} ?>
                                                </div>
                                            </div>
                                            <!-- / item -->
                                        <?php endif; ?>

                                    <? } ?>

	                            </div>
	                        </div>
	                    </div>
	                    <!-- / compare list fixed top -->
	                    <!-- compare list details -->

	                    <?php //$tar1 = get_field('product_tar', $prods[0]); ?>
	                    <?php $tar1 = (!empty($prods[0])) ? get_field('product_tar', $prods[0]): null; ?>
	                    <?php $tar2 = (!empty($prods[1])) ? get_field('product_tar', $prods[1]): null; ?>
	                    <?php $tar3 = (!empty($prods[2])) ? get_field('product_tar', $prods[2]): null; ?>
	                    <?php $tar4 = (!empty($prods[3])) ? get_field('product_tar', $prods[3]): null; ?>
	                    <?php $counter = 0; ?>
	                    <div id="compare__details" class="compare__list-details">
	                    <?php foreach((array) $tar1 as $row): ?>
	                    <?php $row1 = $tar1[$counter]; $val1 = $row1['text' ]; $title = $row1['title' ]; ?>
	                    <?php $row2 = $tar2[$counter]; $val2 = $row2['text' ]; ?>
	                    <?php $row3 = $tar3[$counter]; $val3 = $row3['text' ]; ?>
	                    <?php $row4 = $tar4[$counter]; $val4 = $row4['text' ]; ?>
	                    <!-- row -->
	                        <div class="compare__row-title"><?php echo $title ?></div>
	                        <div class="compare__row">
	                            <!-- item -->
	                            <div class="compare__item" data-index="1">
	                                <div class="compare__item-details">
	                                    <p><?php echo $val1 ?></p>
	                                </div>
	                            </div>
	                            <!-- / item -->
	                            <!-- item -->
	                            <div class="compare__item" data-index="2">
	                                <div class="compare__item-details">
	                                  <p><?php echo $val2 ?></p>
	                                </div>
	                            </div>
	                            <!-- / item -->
	                            <!-- item -->
	                            <div class="compare__item" data-index="3">
	                                <div class="compare__item-details">
	                                  <p><?php echo $val3 ?></p>
	                                </div>
	                            </div>
	                            <!-- / item -->
	                            <!-- item -->
	                            <div class="compare__item" data-index="4">
	                                <div class="compare__item-details">
	                                  <p><?php echo $val4 ?></p>
	                                </div>
	                            </div>
	                            <!-- / item -->
	                        </div>
	                        <!-- / row -->
	                        <?php $counter +=1; ?>
	                    <?php endforeach; ?>
	                    </div>
	                    <!-- / compare list details -->
	                </div>
	            </div>
	        </div>
	    </div> 
	     <!-- / compare list -->
	</div>
</main>


<?php get_footer() ?>