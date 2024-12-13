<?php 
			$terms = wp_get_post_terms( get_the_id(), 'bankcards', array('fields' => 'all') );
        $term_slug = $terms[0]->slug;
        $term_id = $terms[0]->term_id;
        $post_type = get_post_type(get_the_id());
        ?>
        <?php if($post_type == 'kredity') : ?>
            <div class="card card__vertical size4 offer h-100">
               <div class="card-container p-3">
                   <div class="card__header mb-2 d-flex">
                       <div class="card__header-img">
                           <img src="<?php $bank_choise_rel = get_field('product_bank', get_the_ID()) ?>
                           <?php echo the_field('bank_logo', $bank_choise_rel) ?>" alt="">
                       </div>
                       <div class="card__header-title"><a href="<?php echo the_permalink() ?>"><?php echo the_title() ?></a></div>
                   </div>
                   <div class="card__header-info d-flex align-items-center">
                       <div class="card__rating d-flex align-items-center mr-3">
                           <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                           <?php echo the_field('ratings_average'); ?>
                       </div>
                      <div class="position-relative card__icon d-flex align-items-center">
                          <div class="mr-2"><a href="<?php the_permalink() ?>#comments" data-target="comments" class="stretched-link"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></a></div>
                          <?php wp_count_comments(); ?>
                      </div>                       
                       <div class="card__like d-flex align-items-center">
                            <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                        </div>
                       <div class="card__header-actions ml-auto">
                           <a href=""><svg width="20" height="20" viewBox="0 0 20 20"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#circledots" x="0" y="0"></use></svg></a>
                       </div>                                
                   </div>
                   <div class="card__image my-3">
                       <a href="<?php echo the_permalink() ?>"><img src="<?php echo the_field('card_logo') ?>" alt=""></a>
                   </div>
                   <ul class="leaders">
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Макс. сумма</div>
                                   <div class="leaders__item-value"><?= number_format(get_field('credit_max_sum'), 0, '.', ' '); ?> ₽</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Мин. сумма</div>
                                   <div class="leaders__item-value"><?= number_format(get_field('credit_min_sum'), 0, '.', ' '); ?> ₽</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">% ставка</div>
                                   <div class="leaders__item-value"><?php echo the_field('credit_stavka') ?>%</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Срок кредита</div>
                                   <div class="leaders__item-value">от <?php $field = get_field('credit_period');
                                            $value = $field['value'];
                                            $label = $field['choices'][ $value ];
                                            echo $field['label'] ?></div>
                               </li>
                           </ul>
                   <div class="card__actions mt-3 d-flex">
                       <a href="<?php echo the_permalink() ?>" class="btn btn-outline-primary btn-sm btn-block font-weight-normal">Подробнее</a>
                       <a class="btn__compare <?php echo my_compare_btn(get_the_id()); ?> btn btn-outline-primary btn-sm btn-icon d-flex align-items-center justify-content-center ml-3" data-id="<?php echo get_the_id() ?>" data-tax="<?php echo 'kredity'; ?>">
                           <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#stats" x="0" y="0"></use></svg>
                       </a>
                   </div>
                   <div class="card__footer mt-3">
                       <p>
                           <span><?php echo the_field('bank_phone', $bank_choise_rel) ?></span>
                           <span><?php echo the_field('bank_email', $bank_choise_rel) ?></span>
                           <span>Лицензия: <?php echo the_field('bank_license', $bank_choise_rel) ?></span>
                           <span><?php echo the_field('views') ?> заявок</span>
                       </p>
                   </div>
               </div>
           </div>
        <?php endif; ?>
        <?php 
        switch ($term_slug) {
            case 'debetcard': ?>
            <div class="card card__vertical size4 offer h-100">
                       <div class="card-container p-3">
                           <div class="card__header mb-2 d-flex">
                               <div class="card__header-img">
                                   <img src="<?php $bank_choise_rel = get_field('bank_choise', get_the_ID()) ?>
                                   <?php echo the_field('bank_logo', $bank_choise_rel) ?>" alt="">
                               </div>
                               <div class="card__header-title"><a href="<?php echo the_permalink() ?>"><?php echo the_title() ?></a></div>
                           </div>
                           <div class="card__header-info d-flex align-items-center">
                               <div class="card__rating d-flex align-items-center mr-3">
                                   <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                                   <?php echo the_field('ratings_average'); ?>
                               </div>
                              <div class="position-relative card__icon d-flex align-items-center">
                                  <div class="mr-2"><a href="<?php the_permalink() ?>#comments" data-target="comments" class="stretched-link"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></a></div>
                                  <?php wp_count_comments(); ?>
                              </div> 
                               <div class="card__like d-flex align-items-center">
                                    <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                                </div>
                               <div class="card__header-actions ml-auto">
                                   <a href=""><svg width="20" height="20" viewBox="0 0 20 20"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#circledots" x="0" y="0"></use></svg></a>
                               </div>                                
                           </div>
                           <div class="card__image my-3">
                               <a href="<?php echo the_permalink() ?>"><img src="<?php echo the_field('card_logo') ?>" alt=""></a>
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
                                            $value = $field['value'];
                                            $label = $field['choices'][ $value ];
                                            echo $field['label'] ?></div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Кешбэк</div>
                                   <div class="leaders__item-value"><?php $field = get_field('card_cashback');
                                            $value = $field['value'];
                                            $label = $field['choices'][ $value ];
                                            echo $field['label'] ?></div>
                               </li>
                           </ul>
                           <div class="card__actions mt-3 d-flex">
                               <a href="<?php echo the_permalink() ?>" class="btn btn-outline-primary btn-sm btn-block font-weight-normal">Подробнее</a>
                               <a class="btn__compare <?php echo my_compare_btn(get_the_id()); ?>  btn btn-outline-primary btn-sm btn-icon d-flex align-items-center justify-content-center ml-3" data-id="<?php echo get_the_id() ?>" data-tax="<?php echo 'debetcard'; ?>">
                                   <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#stats" x="0" y="0"></use></svg>
                               </a>
                           </div>
                           <div class="card__footer mt-3">
                               <p>
                                   <span><?php echo the_field('bank_phone', $bank_choise_rel) ?></span>
                                   <span><?php echo the_field('bank_email', $bank_choise_rel) ?></span>
                                   <span>Лицензия: <?php echo the_field('bank_license', $bank_choise_rel) ?></span>
                                   <span><?php echo the_field('views') ?> заявок</span>
                               </p>
                           </div>
                       </div>
                   </div>



                <?php break;
            case 'installmentcard': ?>
               <div class="card card__vertical size4 offer h-100">
                       <div class="card-container p-3">
                           <div class="card__header mb-2 d-flex">
                               <div class="card__header-img">
                                   <img src="<?php $bank_choise_rel = get_field('bank_choise', get_the_ID()) ?>
                                   <?php echo the_field('bank_logo', $bank_choise_rel) ?>" alt="">
                               </div>
                               <div class="card__header-title"><a href="<?php echo the_permalink() ?>"><?php echo the_title() ?></a></div>
                           </div>
                           <div class="card__header-info d-flex align-items-center">
                               <div class="card__rating d-flex align-items-center mr-3">
                                   <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                                   <?php echo the_field('ratings_average'); ?>
                               </div>
                              <div class="position-relative card__icon d-flex align-items-center">
                                  <div class="mr-2"><a href="<?php the_permalink() ?>#comments" data-target="comments" class="stretched-link"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></a></div>
                                  <?php wp_count_comments(); ?>
                              </div> 
                               <div class="card__like d-flex align-items-center">
                                    <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                                </div>
                               <div class="card__header-actions ml-auto">
                                   <a href=""><svg width="20" height="20" viewBox="0 0 20 20"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#circledots" x="0" y="0"></use></svg></a>
                               </div>                                
                           </div>
                           <div class="card__image my-3">
                               <a href="<?php echo the_permalink() ?>"><img src="<?php echo the_field('card_logo') ?>" alt=""></a>
                           </div>
                           <ul class="leaders">
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Лимит</div>
                                   <div class="leaders__item-value"><?php echo the_field('card_cred_limit') ?> р</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Без %</div>
                                   <div class="leaders__item-value"><?php $field = get_field('card_period');
                                            $value = $field['value'];
                                            $label = $field['choices'][ $value ];
                                            echo $field['label'] ?></div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Кэшбэк</div>
                                   <div class="leaders__item-value"><?php $card_cashback = get_field('card_cashback', $ID); 
                                       echo $card_cashback; ?></div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Ставка</div>
                                   <div class="leaders__item-value">от <?php echo the_field('card_stavka') ?>%</div>
                               </li>
                           </ul>
                           <div class="card__actions mt-3 d-flex">
                               <a href="<?php echo the_permalink() ?>" class="btn btn-outline-primary btn-sm btn-block font-weight-normal">Подробнее</a>
                               <a class="btn__compare <?php echo my_compare_btn(get_the_id()); ?>  btn btn-outline-primary btn-sm btn-icon d-flex align-items-center justify-content-center ml-3" data-id="<?php echo get_the_id() ?>" data-tax="<?php echo 'installmentcard'; ?>">
                                   <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#stats" x="0" y="0"></use></svg>
                               </a>
                           </div>
                           <div class="card__footer mt-3">
                               <p>
                                   <span><?php echo the_field('bank_phone', $bank_choise_rel) ?></span>
                                   <span><?php echo the_field('bank_email', $bank_choise_rel) ?></span>
                                   <span>Лицензия: <?php echo the_field('bank_license', $bank_choise_rel) ?></span>
                                   <span><?php echo the_field('views') ?> заявок</span>
                               </p>
                           </div>
                       </div>
                   </div>
            <?php break;
            case 'creditcard': ?>
            <!-- item -->
                   <div class="card card__vertical size4 offer h-100">
                       <div class="card-container p-3">
                           <div class="card__header mb-2 d-flex">
                               <div class="card__header-img">
                                   <img src="<?php $bank_choise_rel = get_field('bank_choise', get_the_ID()) ?>
                                   <?php echo the_field('bank_logo', $bank_choise_rel) ?>" alt="">
                               </div>
                               <div class="card__header-title"><a href="<?php echo the_permalink() ?>"><?php echo the_title() ?></a></div>
                           </div>
                           <div class="card__header-info d-flex align-items-center">
                               <div class="card__rating d-flex align-items-center mr-3">
                                   <div class="mr-2"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#starLine" x="0" y="0"></use></svg></div>
                                   <?php echo the_field('ratings_average'); ?>
                               </div>
                              <div class="position-relative card__icon d-flex align-items-center">
                                  <div class="mr-2"><a href="<?php the_permalink() ?>#comments" data-target="comments" class="stretched-link"><svg width="18" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#commentLine" x="0" y="0"></use></svg></a></div>
                                  <?php wp_count_comments(); ?>
                              </div> 
                               <div class="card__like d-flex align-items-center">
                                    <?php echo do_shortcode('[wp_ulike button_type="image" style="wpulike-heart"]'); ?>
                                </div>
                               <div class="card__header-actions ml-auto">
                                   <a href=""><svg width="20" height="20" viewBox="0 0 20 20"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#circledots" x="0" y="0"></use></svg></a>
                               </div>                                
                           </div>
                           <div class="card__image my-3">
                               <a href="<?php echo the_permalink() ?>"><img src="<?php echo the_field('card_logo') ?>" alt=""></a>
                           </div>
                           <ul class="leaders">
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Лимит</div>
                                   <div class="leaders__item-value"><?php echo the_field('card_cred_limit') ?> р</div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Без %</div>
                                   <div class="leaders__item-value"><?php $field = get_field('card_period');
                                            $value = $field['value'];
                                            $label = $field['choices'][ $value ];
                                            echo $field['label'] ?></div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Кэшбэк</div>
                                   <div class="leaders__item-value"><?php $card_cashback = get_field('card_cashback', $ID); 
                                       echo $card_cashback; ?></div>
                               </li>
                               <li class="leaders__item mb-1">
                                   <div class="leaders__item-title">Ставка</div>
                                   <div class="leaders__item-value">от <?php echo the_field('card_stavka') ?>%</div>
                               </li>
                           </ul>
                           <div class="card__actions mt-3 d-flex">
                               <a href="<?php echo the_permalink() ?>" class="btn btn-outline-primary btn-sm btn-block font-weight-normal">Подробнее</a>
                               <a class="btn__compare <?php echo my_compare_btn(get_the_id()); ?>  btn btn-outline-primary btn-sm btn-icon d-flex align-items-center justify-content-center ml-3" data-id="<?php echo get_the_id() ?>" data-tax="<?php echo 'creditcard'; ?>">
                                   <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 17" xml:space="preserve"><use xlink:href="<?php bloginfo('template_url'); ?>/img/icons.svg#stats" x="0" y="0"></use></svg>
                               </a>
                           </div>
                           <div class="card__footer mt-3">
                               <p>
                                   <span><?php echo the_field('bank_phone', $bank_choise_rel) ?></span>
                                   <span><?php echo the_field('bank_email', $bank_choise_rel) ?></span>
                                   <span>Лицензия: <?php echo the_field('bank_license', $bank_choise_rel) ?></span>
                                   <span><?php echo the_field('views') ?> заявок</span>
                               </p>
                           </div>
                       </div>
                   </div>
                   <!-- / item -->
            <?php break; }
