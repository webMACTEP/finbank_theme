jQuery(document).ready(function($){
    $('form').on('submit', function(e){
        // Проверяем, что это наша форма (можно добавить проверку по ID или классу)
        if ($(this).attr('action') === '') {
            e.preventDefault();

            var form = $(this);
            var formData = form.serialize();

            $.ajax({
                url: ajax_object.ajax_url,
                type: 'POST',
                data: formData + '&action=handle_additional_comment_ajax',
                success: function(response){
                    if(response.success){
                        form.find('.success-message').remove();
                        form.find('.error-message').remove();
                        form.prepend('<p class="success-message">' + response.data + '</p>');
                        form[0].reset();

                        // Если комментарий автоматически публикуется, можно добавить его в список
                        // Однако, если он ожидает модерации, этого делать не нужно
                    }
                    else{
                        form.find('.success-message').remove();
                        form.find('.error-message').remove();
                        form.prepend('<p class="error-message">' + response.data + '</p>');
                    }
                },
                error: function(){
                    form.find('.success-message').remove();
                    form.find('.error-message').remove();
                    form.prepend('<p class="error-message">Произошла ошибка. Пожалуйста, попробуйте снова.</p>');
                }
            });
        }
    });
});
