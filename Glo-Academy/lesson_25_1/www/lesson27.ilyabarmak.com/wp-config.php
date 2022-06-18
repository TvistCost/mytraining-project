<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ilya8104_tvist');

/** MySQL database username */
define('DB_USER', 'ilya8104_tvist');

/** MySQL database password */
define('DB_PASSWORD', 'tvist75544');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'z2oQkVWVy2LoG3T*r)2r!%LBbS&D5(BwsHc9BzssLxJvASejPpvIk6NiF4xYdSSg');
define('SECURE_AUTH_KEY',  'osB^ScRAutBL5Snx1YzE0cu&HwguGS94Ss54jASO9GlTgiRaPrUP77EWHUM1BIAI');
define('LOGGED_IN_KEY',    'h)eBVdTSF8EkUm3oyK(*2nkucpW804gHpqBKQS!pp9MNEYsCyDEb%VKaNQ9RARHI');
define('NONCE_KEY',        'GkosU#em#z&esqOItWL%RSmH&v9DsHWcqs2QddAPZjs*%GWLBp0@sWr)fJAYMFI&');
define('AUTH_SALT',        '8qOd!ZBPa6eu1a^eTnVpY79rNwMGrnrLXW1E^2zuWOl&Bas2gV7xixFCsAxnK2L8');
define('SECURE_AUTH_SALT', 'X5AZidDrpxkZl5eVeD*h#8pNhvFgp^hI^N*Q1n5R0H5D!Pl1lQ0&Nt&IkRvXDJTo');
define('LOGGED_IN_SALT',   '(SF8wIxXH0emNHQc7KSKiVE3IrnKHxyze0I)N(GYzt7GzQFUxe9l9lBhOG^y9Zc%');
define('NONCE_SALT',       'Kp85L0dQAxzqI%ylgGHZkpf2)5UiKjOEezZs4Z@VwSQpQ*Hj^Kyp20lwJEEt1UPw');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
