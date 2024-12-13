<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package finbank_theme
 */

get_header();
?>

	<main>
		<div class="error__page">
		    <div class="error__page-num">404</div>
		    <div class="error__page-content">
		        <div class="error__page-oops">Упс!</div>
		        <div class="error__page-decor decor__left">
		            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 615 157" xml:space="preserve"><path d="M228 157h-6.5c-11 0-20-9-20-20V85c0-6.6-5.4-12-12-12H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h185.5c11 0 20 9 20 20v52c0 6.6 5.4 12 12 12h6.5c6.6 0 12-5.4 12-12V28c0-11 9-20 20-20h7.5c11 0 20 9 20 20v77.8c0 6.2 5 11.2 11.2 11.2s11.2-5 11.2-11.2V85c0-11 9-20 20-20h132c.4-11.8 4.6-22.6 11.9-30.6 8.4-9.3 15.9-16.1 22.4-20.2C503.2 9.8 513 5.6 520 3c5.2-2 10.9-3 17-3h29c11 0 20 9 20 20v16.5h25c2.2 0 4 1.8 4 4s-1.8 4-4 4h-25V87h25c2.2 0 4 1.8 4 4s-1.8 4-4 4h-25v16.5c0 11-9 20-20 20h-27.2c-7.3 0-14.1-1.4-20.4-4.2-6.4-2.8-15.4-7-21.9-10.9-5.6-3.3-12.3-8.4-20.2-15.1-8.1-7-13.2-17.2-14.1-28.3H330c-6.6 0-12 5.4-12 12v20.8c0 10.6-8.6 19.2-19.2 19.2s-19.2-8.6-19.2-19.2V28c0-6.6-5.4-12-12-12H260c-6.6 0-12 5.4-12 12v109c0 11-9 20-20 20zm327.5-33.5H566c6.6 0 12-5.4 12-12V95h-4.5c-2.2 0-4-1.8-4-4s1.8-4 4-4h4.5V44.5h-4.5c-2.2 0-4-1.8-4-4s1.8-4 4-4h4.5V20c0-6.6-5.4-12-12-12h-10.5v115.5zM470 69c0 10.4 4.2 20 11.5 26.3 7.5 6.4 13.9 11.2 19 14.3 6.1 3.6 14.8 7.7 21.1 10.4 5.3 2.3 11 3.5 17.2 3.5h8.7V8H537c-5.1 0-9.9.8-14.2 2.5-6.7 2.5-16 6.4-22.2 10.4-5.8 3.7-13 10.3-20.8 18.9-6.3 7-9.8 16.6-9.8 27.2v2z"></path></svg>
		        </div>
		        <div class="error__page-decor decor__right">
		            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587 155.5" x="0" y="0" xml:space="preserve"><path d="M54.5 155.5H20c-11 0-20-9-20-20V44c0-11 9-20 20-20h33.4c5.8 0 11.3.9 16.2 2.7 7.6 2.8 18.1 7.1 25.2 12 6.1 4.2 13.1 11.1 20.7 20.6 6.5 8.1 10 18.3 10 29.7H258c6.6 0 12-5.4 12-12V49.2c0-10.6 8.6-19.2 19.2-19.2s19.2 8.6 19.2 19.2v77.2c0 6.6 5.4 12 12 12h7c6.6 0 12-5.4 12-12V20c0-11 9-20 20-20h6.5c11 0 20 9 20 20v57c0 6.6 5.4 12 12 12h185c2.2 0 4 1.8 4 4s-1.8 4-4 4H398c-11 0-20-9-20-20V20c0-6.6-5.4-12-12-12h-6.5c-6.6 0-12 5.4-12 12v106.5c0 11-9 20-20 20h-7c-11 0-20-9-20-20V49.2c0-6.2-5-11.2-11.2-11.2S278 43 278 49.2V77c0 11-9 20-20 20H125.4c-.8 11.7-5.2 22.2-12.8 30-6.8 7-12.8 12.2-18 15.4-7.5 4.7-18.4 8.7-26.2 11.1-4.2 1.3-8.9 2-13.9 2zm-15.5-8h15.5c4.2 0 8-.6 11.5-1.6 6-1.9 17.2-5.7 24.3-10.2 4.5-2.9 10.2-7.8 16.5-14.2 6.9-7.1 10.6-17 10.6-28.1v-4.1c0-9.7-2.9-18.3-8.2-25-7-8.7-13.6-15.3-19-19-5-3.4-13.3-7.4-23.4-11.1-4.1-1.5-8.6-2.2-13.4-2.2H39v115.5zM20 32c-6.6 0-12 5.4-12 12v91.5c0 6.6 5.4 12 12 12h11V32H20z"></path><ellipse cx="18" cy="65" rx="6" ry="8"></ellipse><ellipse cx="18" cy="115" rx="6" ry="8"></ellipse></svg>
		        </div>
		        <div class="error__page-description">
		            Что-то пошло не так<br>Пожалуйста попробуйте позже
		        </div>
		        <a  onclick="history.back();" class="btn btn-primary" style="cursor: pointer; color: #FFFFFF;">Вернуться назад</a>
		    </div>
		</div>
	</main><!-- #main -->

<?php
get_footer();