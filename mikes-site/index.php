<?php 
/* Template Name: HomePage */

 ?>
 <?php get_header(); ?>
 <h2 id="nav-arrow"><span>Click Here <i class="fas fa-arrow-right"></i></span></h2>
 <div  class="open">
	<span class="cls"></span>
	<span>

		<ul class="sub-menu ">
			<li>
				<a onclick="slideTo('slide-2')" >HOME</a>
			</li>
			<li>
				<a onclick="slideTo('slide-0')">ABOUT</a>
			</li>
			<li>
				<a onclick="slideTo('slide-1')">SERVICES</a>
			</li>
			<li>
				<a onclick="slideTo('slide-3')">PORTFOLIO</a>
			</li>
      <li>
				<a onclick="slideTo('slide-4')">CONTACT</a>
			</li>
		</ul>
	</span>
	<span class="cls"></span>
</div>

<div class="slide-container nav-visibility">


    <section class="about" id="slide-0">
 

      <?php $about_loop = new WP_Query('cat=3'); 

      while($about_loop->have_posts()) : $about_loop->the_post(); ?>

        <div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
            <?php the_content(); ?> 
            <img src="<?php the_post_thumbnail_url() ?>" />
        </div>

      <?php endwhile; 

      wp_reset_postdata(); ?>
      
</section>


      <section class="fun-stuff portfolio-cards" id="slide-1">

      <?php $first_services = new WP_Query('cat=6'); 

while($first_services->have_posts()) : $first_services->the_post(); ?>

<div <?php post_class(); ?> id="post-<?php the_ID(); ?>" >
<div class="content">
  <div class="text">
<h1><?php the_title(); ?></h1>
  <?php the_content(); ?>
  </div>
<div class="service-image" style="background:url('<?php the_post_thumbnail_url() ?>'); "></div>
<button onclick="slideTo('slide-4')">Get Quote</button>
</div>
</div>
<?php endwhile; 
wp_reset_postdata(); ?>




<?php $second_services = new WP_Query('cat=7'); 

while($second_services->have_posts()) : $second_services->the_post(); ?>

<div <?php post_class(); ?> id="post-<?php the_ID(); ?>" >
<div class="content">
<div class="service-image" style="background:url('<?php the_post_thumbnail_url() ?>'); "></div>
  <div class="text">
<h1><?php the_title(); ?></h1>
  <?php the_content(); ?>
  </div>

<button onclick="slideTo('slide-4')">Get Quote</button>
</div>
</div>
<?php endwhile; 
wp_reset_postdata(); ?>

<?php $third_services = new WP_Query('cat=8'); 

while($third_services->have_posts()) : $third_services->the_post(); ?>

<div <?php post_class(); ?> id="post-<?php the_ID(); ?>" >
<div class="content">
  <div class="text">
<h1><?php the_title(); ?></h1>
  <?php the_content(); ?>
  </div>
<div class="service-image" style="background:url('<?php the_post_thumbnail_url() ?>'); "></div>
<button onclick="slideTo('slide-4')">Get Quote</button>
</div>
</div>
<?php endwhile; 
wp_reset_postdata(); ?>





      <!-- <?php $fun_loop = new WP_Query('cat=4'); 

      while($fun_loop->have_posts()) : $fun_loop->the_post(); ?>

<?php 
        if( get_field('outside_url')) {?>
          <a href="<?php the_field('outside_url') ?>">
        <?php } else { ?>
          <a href="<?php the_permalink(); ?>">

        <?php } ?>

        <div <?php post_class(); ?> id="post-<?php the_ID(); ?>" style="background: var(--l, linear-gradient(rgba(255,255,255,.86), rgba(255,255,255,.86))), url('<?php the_post_thumbnail_url() ?>'); ">
          <div class="content">
          <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
            <p><?php the_field('languages'); ?></p>
          </div>
        </div>
        </a>
      <?php endwhile; 
      wp_reset_postdata(); ?> -->


      </section>


      <section class="home" id="slide-2">
          <div class="home-section">
              <h1><?php echo get_bloginfo( 'name' ); ?></h1>
              <h3><?php echo get_bloginfo( 'description' ); ?></h3>
          </div>
      </section>
      <section class="professional portfolio-cards" id="slide-3">
      


      <?php $custom_query = new WP_Query('cat=2'); 

      while($custom_query->have_posts()) : $custom_query->the_post(); ?>

<?php 
        if( get_field('outside_url')) {?>
          <a href="<?php the_field('outside_url') ?>">
        <?php } else { ?>
          <a href="<?php the_permalink(); ?>">

        <?php } ?>
        <div <?php post_class(); ?> id="post-<?php the_ID(); ?>" style="background: var(--l, linear-gradient(rgba(255,255,255,.86), rgba(255,255,255,.86))), url('<?php the_post_thumbnail_url() ?>'); ">
          <div class="content">
          <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
            <p><?php the_field('languages'); ?></p>
          </div>
        </div>
        </a>

      <?php endwhile; 
      wp_reset_postdata(); ?>
      
      </section>

      <section class="contact" id="slide-4">


      <?php echo do_shortcode('[ninja_form id=1]') ?>
      </section>
    </>

    <?php get_footer(); ?>

    </div>