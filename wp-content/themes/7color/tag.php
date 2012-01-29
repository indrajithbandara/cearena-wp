<?php get_header() ?>

	<div id="container">
		<div id="content">

			<div class=info></div><h2 class="page-title"><?php _e( 'Tag Archives:', 'sandbox' ) ?> <span><?php single_tag_title() ?></span></h2>

<?php while ( have_posts() ) : the_post() ?>

			<div id="post-<?php the_ID() ?>" class="<?php sandbox_post_class() ?><?php sticky_class(); ?>">
				<h2 class="entry-title"><a href="<?php the_permalink() ?>" title="<?php printf( __('Permalink to %s', 'sandbox'), the_title_attribute('echo=0') ) ?>" rel="bookmark"><?php the_title() ?></a>
				</h2>

				<div class="entry-content">
					<div class="entry-meta"></div>
					<div  class="entry-content-width">

						<?php
							if (is_single() or is_page()) {
								the_content( __( '<span class="meta-nav">Read More &raquo;</span>', 'sandbox' ) ) ;
							} else {
							the_excerpt();
							} 
						?>
						<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'sandbox' ) . '&after=</div>') ?>
					</div>
				</div>
			</div><!-- .post -->

<?php endwhile; ?>

			<div id="nav-below" class="navigation">
				<?php if(function_exists('wp_pagenavi')){ wp_pagenavi(); } else { ?> 
				<div class="nav-previous"><?php next_posts_link(__( '<span class="meta-nav">&laquo;</span> Older posts', 'sandbox' )) ?></div>
				<div class="nav-next"><?php previous_posts_link(__( 'Newer posts <span class="meta-nav">&raquo;</span>', 'sandbox' )) ?></div>
				<?php } ?> 
			</div>

		</div><!-- #content -->
	</div><!-- #container -->

<?php get_sidebar() ?>
<?php get_footer() ?>