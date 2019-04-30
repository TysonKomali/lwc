/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

// Initialization Routines
import './polyfills/document-shadow/main';
import './polyfills/shadow-root/main';
import './polyfills/click-event-composed/main'; // must come before event-composed
import './polyfills/event-composed/main';
import './polyfills/custom-event-composed/main';
import './polyfills/focus-event-composed/main';

// TODO: eventually there is nothing to export here
export * from './faux-shadow/faux';