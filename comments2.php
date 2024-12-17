<?php session_start() ?>
<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package finbank_theme
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<?php


			$current_page_comments = ( get_query_var( 'comments' ) ) ? get_query_var( 'comments' ) : 1;
			$current_page_comments =  str_replace('page/', '', $current_page_comments);

			$per_page = 10;
			$offset = ($current_page_comments - 1) * $per_page;


			$post_args = get_comments(array(
                'post_id' => $post->ID,
				'status' => 'approve',
				'paged' => $current_page_comments,
			));



			wp_list_comments(
				array(
					'style'      => 'div',
					'short_ping' => true,
					'callback' => 'myown_comment',
					'status' => 'approve',
					'hierarchical' => 'threaded',
					//'number' => 3,
					'per_page' => $per_page,
					'page' => $current_page_comments,

				), $post_args);
			?>




