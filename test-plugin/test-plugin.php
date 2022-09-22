<?php
/**
	Plugin Name: Our Test Plugin
	Author: Ataul Hameed
	Version: 1.0
	Description: Just to see how plugins are developed
*/

add_action( 'woocommerce_after_add_to_cart_button', 'our_function_for_woo' );

function our_function_for_woo(){
	echo "Hello There";
}

?>