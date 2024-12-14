jQuery(document).ready(function($){
    // Функция для проверки наличия куки
    function hasCookie(name) {
        return document.cookie.split(';').some((item) => item.trim().startsWith(name + '='));
    }

    // Блокируем кнопки, если пользователь уже лайкнул/дизлайкнул
    $('.like-button, .dislike-button').each(function(){
        var commentId = $(this).data('comment-id');
        if(hasCookie('liked_comment_' + commentId)){
            $(this).prop('disabled', true).addClass('disabled');
        }
        if(hasCookie('disliked_comment_' + commentId)){
            $(this).prop('disabled', true).addClass('disabled');
        }
    });

    // Обработка клика по кнопке "Лайк"
    $('.like-button').on('click', function(){
        var commentId = $(this).data('comment-id');
        var likeButton = $(this);
        var dislikeButton = likeButton.siblings('.dislike-button');

        // Отправляем AJAX-запрос
        $.ajax({
            url: ajax_object_like_dislike.ajax_url,
            type: 'POST',
            data: {
                action: 'handle_like_dislike_ajax',
                comment_id: commentId,
                type: 'like',
                nonce: ajax_object_like_dislike.like_dislike_nonce
            },
            beforeSend: function(){
                // Можно добавить спиннер или индикатор загрузки
                likeButton.prop('disabled', true).text('👍 Отправка...');
            },
            success: function(response){
                if(response.success){
                    // Обновляем счетчик лайков
                    likeButton.find('.like-count').text(response.data.likes);
                    // Блокируем кнопку
                    likeButton.prop('disabled', true).addClass('disabled').text('👍 ' + response.data.likes);
                    // Устанавливаем куки
                    document.cookie = 'liked_comment_' + commentId + '=1; path=/; max-age=31536000'; // 1 год
                }
                else{
                    alert(response.data);
                    likeButton.prop('disabled', false).text('👍');
                }
            },
            error: function(){
                alert('Произошла ошибка. Пожалуйста, попробуйте снова.');
                likeButton.prop('disabled', false).text('👍');
            }
        });
    });

    // Обработка клика по кнопке "Дизлайк"
    $('.dislike-button').on('click', function(){
        var commentId = $(this).data('comment-id');
        var dislikeButton = $(this);
        var likeButton = dislikeButton.siblings('.like-button');

        // Отправляем AJAX-запрос
        $.ajax({
            url: ajax_object_like_dislike.ajax_url,
            type: 'POST',
            data: {
                action: 'handle_like_dislike_ajax',
                comment_id: commentId,
                type: 'dislike',
                nonce: ajax_object_like_dislike.like_dislike_nonce
            },
            beforeSend: function(){
                // Можно добавить спиннер или индикатор загрузки
                dislikeButton.prop('disabled', true).text('👎 Отправка...');
            },
            success: function(response){
                if(response.success){
                    // Обновляем счетчик дизлайков
                    dislikeButton.find('.dislike-count').text(response.data.dislikes);
                    // Блокируем кнопку
                    dislikeButton.prop('disabled', true).addClass('disabled').text('👎 ' + response.data.dislikes);
                    // Устанавливаем куки
                    document.cookie = 'disliked_comment_' + commentId + '=1; path=/; max-age=31536000'; // 1 год
                }
                else{
                    alert(response.data);
                    dislikeButton.prop('disabled', false).text('👎');
                }
            },
            error: function(){
                alert('Произошла ошибка. Пожалуйста, попробуйте снова.');
                dislikeButton.prop('disabled', false).text('👎');
            }
        });
    });
});
