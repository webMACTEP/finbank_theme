jQuery(document).ready(function($){
    // Обработка нажатия на кнопку "Ответить"
    $('.reply-button').on('click', function(){
        var commentId = $(this).data('comment-id');
        var formContainer = $('#reply-form-container-' + commentId);

        // Проверяем, есть ли уже форма
        if (formContainer.children().length === 0) {
            // Копируем HTML формы и заменяем __COMMENT_ID__ на реальный ID
            var formHtml = `
                <form class="reply-form" data-parent-id="${commentId}">
                    <input type="hidden" name="additional_comment_reply_nonce" value="${ajax_object.reply_nonce}">
                    <div class="form-group">
                        <label for="reply_author_name_${commentId}">Имя</label>
                        <input type="text" id="reply_author_name_${commentId}" name="reply_author_name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="reply_author_email_${commentId}">E-Mail</label>
                        <input type="email" id="reply_author_email_${commentId}" name="reply_author_email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="reply_comment_content_${commentId}">Комментарий</label>
                        <textarea id="reply_comment_content_${commentId}" name="reply_comment_content" class="form-control" rows="5" required></textarea>
                    </div>
                    <input type="hidden" name="reply_related_post" value="${ajax_object.current_post_id}" />
                    <input type="hidden" name="reply_parent_comment" value="${commentId}" />
                    <button type="submit" class="btn btn-primary mt-2">Отправить</button>
                </form>
            `;
            formContainer.html(formHtml);
        }

        // Показать или скрыть форму
        formContainer.toggle();
    });

    // Обработка отправки формы ответа
    $(document).on('submit', '.reply-form', function(e){
        e.preventDefault();

        var form = $(this);
        var parentId = form.data('parent-id');

        var formData = {
            action: 'handle_additional_comment_reply_ajax',
            additional_comment_reply_nonce: form.find('input[name="additional_comment_reply_nonce"]').val(),
            reply_author_name: form.find('input[name="reply_author_name"]').val(),
            reply_author_email: form.find('input[name="reply_author_email"]').val(),
            reply_comment_content: form.find('textarea[name="reply_comment_content"]').val(),
            reply_related_post: form.find('input[name="reply_related_post"]').val(),
            reply_parent_comment: parentId,
        };

        $.ajax({
            url: ajax_object.ajax_url,
            type: 'POST',
            data: formData,
            success: function(response){
                if(response.success){
                    // Очистить форму и скрыть её
                    form[0].reset();
                    form.parent().hide();

                    // Добавить новый комментарий в список
                    var newCommentHtml = `
                        <li class="additional-comment">
                            <div class="additional-comment__header">
                                <strong>${escapeHtml(response.data.author_name)}</strong> (${escapeHtml(response.data.author_email)}) - ${response.data.comment_date}
                            </div>
                            <div class="additional-comment__content">${escapeHtml(response.data.comment_content)}</div>
                            <button class="reply-button btn btn-sm btn-secondary mt-2" data-comment-id="${response.data.comment_id}">Ответить</button>
                            <div class="reply-form-container" id="reply-form-container-${response.data.comment_id}" style="display: none;"></div>
                        </li>
                    `;

                    // Найти родительский комментарий и добавить ответ
                    $('#collapse__item-' + parentId + ' .accordion__body').append(newCommentHtml);
                }
                else{
                    alert(response.data);
                }
            },
            error: function(){
                alert('Произошла ошибка. Пожалуйста, попробуйте снова.');
            }
        });
    });

    // Функция для экранирования HTML
    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});
