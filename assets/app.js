/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)

import './styles/app.scss';
import './styles/js/navbar.js';

// start the Stimulus application
import './bootstrap';

// froala editor
import FroalaEditor from 'froala-editor';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';

// Load your languages
import 'froala-editor/js/languages/fr.js';

// Load all plugins, or specific ones
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/plugins.pkgd.min.css';

window.FroalaEditor = FroalaEditor;

function froalaDisplayError(p_editor, error ) {
    alert(`Error ${error.code}: ${error.message}`);
}

window.froalaDisplayError = froalaDisplayError;