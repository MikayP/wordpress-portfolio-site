<?php

register_nav_menus( [ 'primary' => __( 'Primary Menu' ) ] );

/// 999 to say do function last
function site_title(){
add_theme_support('title-tag');
}

//add jquery
wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/js/custom_script.js', array( 'jquery' ));

function add_featured_image_support_to_your_wordpress_theme() {
    add_theme_support( 'post-thumbnails' );
}
 
add_action( 'after_setup_theme', 'add_featured_image_support_to_your_wordpress_theme' );
add_action('title_update', 'site_title');

//removes the weird default theme css

function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

function mikes_files(){
    wp_enqueue_style('main-style', get_stylesheet_uri(), NULL, microtime() );
    wp_enqueue_script( 'prefix-font-awesome', 'https://kit.fontawesome.com/e87fb6e1d4.js' );  
    wp_enqueue_script('main-js', get_template_directory_uri() . '/main.js', NULL, microtime(), true );
}



add_action('wp_enqueue_scripts', 'mikes_files', 99999);