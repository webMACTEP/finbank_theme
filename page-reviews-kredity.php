<?php get_header() ?>

<?php 
/*
$ID = $_SESSION['post_review_id'];
$TAX = $_SESSION['data_tax_reviews'];
$DISPLAY = $_SESSION['display_type'];

$post_type = get_post_type($ID);
$tags = get_the_tags( $ID );
$terms = wp_get_post_terms( $ID, 'bankcards', array('fields' => 'all') );
$term_slug = $terms[0]->slug;
$term_id = $terms[0]->term_id;
*/

       $tax_id = 2;
       $title_term1 = "Кредиты";
       $title_term2 = "все кредиты";
       $calc_link = get_page_link(149);
       $link = get_post_type_archive_link('kredity');
       $news_id = "18";
?>
<main>
    <div class="container">
        <nav aria-label="breadcrumb" class="horizontal__scroll">
            <ol class="breadcrumb horizontal__scroll-container">
                <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>">Главная</a></li>
                <li class="breadcrumb-item"><a href="<?php echo $link ?>"><?php echo $title_term1 ?></a></li>
                <li class="breadcrumb-item active" aria-current="page">Отзывы</li>
            </ol>
        </nav>
    </div>
    <!-- page header -->
    <div class="page__heading mb-4">
        <div class="container">
            <div class="page__heading-top d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="page__heading-title mb-0"><?php echo $title_term1 ?></h1>
                    <h3 class="font-weight-semibold mt-2 mb-0">Благодаря честным отзывам вы сможете осуществить более разумный выбор</h3>
                </div>
                <div class="page__heading-icon"><img src="<?php bloginfo('template_url'); ?>/img/icon__title-like.png" alt=""></div>
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
                        <a href="<?php echo $link ?>" class="nav-link"><?php echo $title_term2 ?></a>
                        <a href="" class="nav-link active">Отзывы</a>
                        <a href="<?php echo $calc_link ?>" class="nav-link">Калькулятор</a>
                        <a href="<?php echo get_category_link($news_id) ?>" class="nav-link">Статьи</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- / page nav -->
    <div class="container">
        <div class="section">
            <div class="row reviews-page-list" id="reviews">
<?php
$ppp = 10000; // either use the WordPress global Posts per page setting or set a custom one like $ppp = 10;
$custom_offset = 0;

// fetch posts in all those categories
$posts = get_cpt_ids('kredity');

$sql = "SELECT comment_ID, comment_date, comment_content, comment_post_ID
 FROM {$wpdb->comments} WHERE
 comment_post_ID in (".implode(',', $posts).") AND comment_approved = 1 AND comment_parent = 0
 ORDER by comment_date DESC LIMIT $ppp OFFSET $custom_offset";

$comments_list = $wpdb->get_results( $sql );

get_template_part('all_template/reviews_list', null, ['TYPE' => 'kredity', 'DATA' => $comments_list]); ?>





            </div>
            <!-- pagination -->
            <div class="pagination flex-column">
                <div class="pagination__container d-sm-flex justify-content-between align-items-center">
                    <div class="pagination__description mt-4 mt-sm-0">
                        Показано <span class="review-tax-count-all"></span> отзывов из <span class="review-tax-count-all"></span>
                    </div>
                </div>
            </div>
            <!-- / pagination -->
        </div>
    </div>
</main>


<?php get_footer() ?>
