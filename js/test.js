

/******/ (function() { // webpackBootstrap
    /******/ 	var __webpack_modules__ = ({

        /***/ 529:
        /***/ (function(module) {

            /*! choices.js v10.1.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
            (function webpackUniversalModuleDefinition(root, factory) {
                if(true)
                    module.exports = factory();
                else {}
            })(window, function() {
                return /******/ (function() { // webpackBootstrap
                    /******/ 	"use strict";
                    /******/ 	var __webpack_modules__ = ({

                        /***/ 282:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_632__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;

                            var constants_1 = __nested_webpack_require_632__(883);

                            var addChoice = function (_a) {
                                var value = _a.value,
                                    label = _a.label,
                                    id = _a.id,
                                    groupId = _a.groupId,
                                    disabled = _a.disabled,
                                    elementId = _a.elementId,
                                    customProperties = _a.customProperties,
                                    placeholder = _a.placeholder,
                                    keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_CHOICE,
                                    value: value,
                                    label: label,
                                    id: id,
                                    groupId: groupId,
                                    disabled: disabled,
                                    elementId: elementId,
                                    customProperties: customProperties,
                                    placeholder: placeholder,
                                    keyCode: keyCode
                                };
                            };

                            exports.addChoice = addChoice;

                            var filterChoices = function (results) {
                                return {
                                    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                                    results: results
                                };
                            };

                            exports.filterChoices = filterChoices;

                            var activateChoices = function (active) {
                                if (active === void 0) {
                                    active = true;
                                }

                                return {
                                    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                                    active: active
                                };
                            };

                            exports.activateChoices = activateChoices;

                            var clearChoices = function () {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                                };
                            };

                            exports.clearChoices = clearChoices;

                            /***/ }),

                        /***/ 783:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2094__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.addGroup = void 0;

                            var constants_1 = __nested_webpack_require_2094__(883);

                            var addGroup = function (_a) {
                                var value = _a.value,
                                    id = _a.id,
                                    active = _a.active,
                                    disabled = _a.disabled;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_GROUP,
                                    value: value,
                                    id: id,
                                    active: active,
                                    disabled: disabled
                                };
                            };

                            exports.addGroup = addGroup;

                            /***/ }),

                        /***/ 464:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2630__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.highlightItem = exports.removeItem = exports.addItem = void 0;

                            var constants_1 = __nested_webpack_require_2630__(883);

                            var addItem = function (_a) {
                                var value = _a.value,
                                    label = _a.label,
                                    id = _a.id,
                                    choiceId = _a.choiceId,
                                    groupId = _a.groupId,
                                    customProperties = _a.customProperties,
                                    placeholder = _a.placeholder,
                                    keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_ITEM,
                                    value: value,
                                    label: label,
                                    id: id,
                                    choiceId: choiceId,
                                    groupId: groupId,
                                    customProperties: customProperties,
                                    placeholder: placeholder,
                                    keyCode: keyCode
                                };
                            };

                            exports.addItem = addItem;

                            var removeItem = function (id, choiceId) {
                                return {
                                    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                                    id: id,
                                    choiceId: choiceId
                                };
                            };

                            exports.removeItem = removeItem;

                            var highlightItem = function (id, highlighted) {
                                return {
                                    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                                    id: id,
                                    highlighted: highlighted
                                };
                            };

                            exports.highlightItem = highlightItem;

                            /***/ }),

                        /***/ 137:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_3835__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;

                            var constants_1 = __nested_webpack_require_3835__(883);

                            var clearAll = function () {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_ALL
                                };
                            };

                            exports.clearAll = clearAll;

                            var resetTo = function (state) {
                                return {
                                    type: constants_1.ACTION_TYPES.RESET_TO,
                                    state: state
                                };
                            };

                            exports.resetTo = resetTo;

                            var setIsLoading = function (isLoading) {
                                return {
                                    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                                    isLoading: isLoading
                                };
                            };

                            exports.setIsLoading = setIsLoading;

                            /***/ }),

                        /***/ 373:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_4557__) {



                            var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
                                if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                                    if (ar || !(i in from)) {
                                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                        ar[i] = from[i];
                                    }
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };

                            var __importDefault = this && this.__importDefault || function (mod) {
                                return mod && mod.__esModule ? mod : {
                                    "default": mod
                                };
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var deepmerge_1 = __importDefault(__nested_webpack_require_4557__(996));
                            /* eslint-disable @typescript-eslint/no-explicit-any */


                            var fuse_js_1 = __importDefault(__nested_webpack_require_4557__(221));

                            var choices_1 = __nested_webpack_require_4557__(282);

                            var groups_1 = __nested_webpack_require_4557__(783);

                            var items_1 = __nested_webpack_require_4557__(464);

                            var misc_1 = __nested_webpack_require_4557__(137);

                            var components_1 = __nested_webpack_require_4557__(520);

                            var constants_1 = __nested_webpack_require_4557__(883);

                            var defaults_1 = __nested_webpack_require_4557__(789);

                            var utils_1 = __nested_webpack_require_4557__(799);

                            var reducers_1 = __nested_webpack_require_4557__(655);

                            var store_1 = __importDefault(__nested_webpack_require_4557__(744));

                            var templates_1 = __importDefault(__nested_webpack_require_4557__(686));
                            /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */


                            var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
                            var USER_DEFAULTS = {};
                            /**
                             * Choices
                             * @author Josh Johnson<josh@joshuajohnson.co.uk>
                             */

                            var Choices =
                                /** @class */
                                function () {
                                    function Choices(element, userConfig) {
                                        var _this = this;

                                        if (element === void 0) {
                                            element = '[data-choice]';
                                        }

                                        if (userConfig === void 0) {
                                            userConfig = {};
                                        }

                                        if (userConfig.allowHTML === undefined) {
                                            console.warn('Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.');
                                        }

                                        this.config = deepmerge_1.default.all([defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
                                            // instead of concatenating with the default array
                                            {
                                                arrayMerge: function (_, sourceArray) {
                                                    return __spreadArray([], sourceArray, true);
                                                }
                                            });
                                        var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);

                                        if (invalidConfigOptions.length) {
                                            console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
                                        }

                                        var passedElement = typeof element === 'string' ? document.querySelector(element) : element;

                                        if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                                            throw TypeError('Expected one of the following types text|select-one|select-multiple');
                                        }

                                        this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                                        this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                                        this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                                        this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                                        this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;

                                        if (!['auto', 'always'].includes("".concat(this.config.renderSelectedChoices))) {
                                            this.config.renderSelectedChoices = 'auto';
                                        }

                                        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
                                            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                                            this.config.addItemFilter = re.test.bind(re);
                                        }

                                        if (this._isTextElement) {
                                            this.passedElement = new components_1.WrappedInput({
                                                element: passedElement,
                                                classNames: this.config.classNames,
                                                delimiter: this.config.delimiter
                                            });
                                        } else {
                                            this.passedElement = new components_1.WrappedSelect({
                                                element: passedElement,
                                                classNames: this.config.classNames,
                                                template: function (data) {
                                                    return _this._templates.option(data);
                                                }
                                            });
                                        }

                                        this.initialised = false;
                                        this._store = new store_1.default();
                                        this._initialState = reducers_1.defaultState;
                                        this._currentState = reducers_1.defaultState;
                                        this._prevState = reducers_1.defaultState;
                                        this._currentValue = '';
                                        this._canSearch = !!this.config.searchEnabled;
                                        this._isScrollingOnIe = false;
                                        this._highlightPosition = 0;
                                        this._wasTap = true;
                                        this._placeholderValue = this._generatePlaceholderValue();
                                        this._baseId = (0, utils_1.generateId)(this.passedElement.element, 'choices-');
                                        /**
                                         * setting direction in cases where it's explicitly set on passedElement
                                         * or when calculated direction is different from the document
                                         */

                                        this._direction = this.passedElement.dir;

                                        if (!this._direction) {
                                            var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                                            var documentDirection = window.getComputedStyle(document.documentElement).direction;

                                            if (elementDirection !== documentDirection) {
                                                this._direction = elementDirection;
                                            }
                                        }

                                        this._idNames = {
                                            itemChoice: 'item-choice'
                                        };

                                        if (this._isSelectElement) {
                                            // Assign preset groups from passed element
                                            this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

                                            this._presetOptions = this.passedElement.options;
                                        } // Assign preset choices from passed object


                                        this._presetChoices = this.config.choices; // Assign preset items from passed object first

                                        this._presetItems = this.config.items; // Add any values passed from attribute

                                        if (this.passedElement.value && this._isTextElement) {
                                            var splitValues = this.passedElement.value.split(this.config.delimiter);
                                            this._presetItems = this._presetItems.concat(splitValues);
                                        } // Create array of choices from option elements


                                        if (this.passedElement.options) {
                                            this.passedElement.options.forEach(function (option) {
                                                _this._presetChoices.push({
                                                    value: option.value,
                                                    label: option.innerHTML,
                                                    selected: !!option.selected,
                                                    disabled: option.disabled || option.parentNode.disabled,
                                                    placeholder: option.value === '' || option.hasAttribute('placeholder'),
                                                    customProperties: option.dataset['custom-properties']
                                                });
                                            });
                                        }

                                        this._render = this._render.bind(this);
                                        this._onFocus = this._onFocus.bind(this);
                                        this._onBlur = this._onBlur.bind(this);
                                        this._onKeyUp = this._onKeyUp.bind(this);
                                        this._onKeyDown = this._onKeyDown.bind(this);
                                        this._onClick = this._onClick.bind(this);
                                        this._onTouchMove = this._onTouchMove.bind(this);
                                        this._onTouchEnd = this._onTouchEnd.bind(this);
                                        this._onMouseDown = this._onMouseDown.bind(this);
                                        this._onMouseOver = this._onMouseOver.bind(this);
                                        this._onFormReset = this._onFormReset.bind(this);
                                        this._onSelectKey = this._onSelectKey.bind(this);
                                        this._onEnterKey = this._onEnterKey.bind(this);
                                        this._onEscapeKey = this._onEscapeKey.bind(this);
                                        this._onDirectionKey = this._onDirectionKey.bind(this);
                                        this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

                                        if (this.passedElement.isActive) {
                                            if (!this.config.silent) {
                                                console.warn('Trying to initialise Choices on element already initialised', {
                                                    element: element
                                                });
                                            }

                                            this.initialised = true;
                                            return;
                                        } // Let's go


                                        this.init();
                                    }

                                    Object.defineProperty(Choices, "defaults", {
                                        get: function () {
                                            return Object.preventExtensions({
                                                get options() {
                                                    return USER_DEFAULTS;
                                                },

                                                get templates() {
                                                    return templates_1.default;
                                                }

                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });

                                    Choices.prototype.init = function () {
                                        if (this.initialised) {
                                            return;
                                        }

                                        this._createTemplates();

                                        this._createElements();

                                        this._createStructure();

                                        this._store.subscribe(this._render);

                                        this._render();

                                        this._addEventListeners();

                                        var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

                                        if (shouldDisable) {
                                            this.disable();
                                        }

                                        this.initialised = true;
                                        var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

                                        if (callbackOnInit && typeof callbackOnInit === 'function') {
                                            callbackOnInit.call(this);
                                        }
                                    };

                                    Choices.prototype.destroy = function () {
                                        if (!this.initialised) {
                                            return;
                                        }

                                        this._removeEventListeners();

                                        this.passedElement.reveal();
                                        this.containerOuter.unwrap(this.passedElement.element);
                                        this.clearStore();

                                        if (this._isSelectElement) {
                                            this.passedElement.options = this._presetOptions;
                                        }

                                        this._templates = templates_1.default;
                                        this.initialised = false;
                                    };

                                    Choices.prototype.enable = function () {
                                        if (this.passedElement.isDisabled) {
                                            this.passedElement.enable();
                                        }

                                        if (this.containerOuter.isDisabled) {
                                            this._addEventListeners();

                                            this.input.enable();
                                            this.containerOuter.enable();
                                        }

                                        return this;
                                    };

                                    Choices.prototype.disable = function () {
                                        if (!this.passedElement.isDisabled) {
                                            this.passedElement.disable();
                                        }

                                        if (!this.containerOuter.isDisabled) {
                                            this._removeEventListeners();

                                            this.input.disable();
                                            this.containerOuter.disable();
                                        }

                                        return this;
                                    };

                                    Choices.prototype.highlightItem = function (item, runEvent) {
                                        if (runEvent === void 0) {
                                            runEvent = true;
                                        }

                                        if (!item || !item.id) {
                                            return this;
                                        }

                                        var id = item.id,
                                            _a = item.groupId,
                                            groupId = _a === void 0 ? -1 : _a,
                                            _b = item.value,
                                            value = _b === void 0 ? '' : _b,
                                            _c = item.label,
                                            label = _c === void 0 ? '' : _c;
                                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

                                        this._store.dispatch((0, items_1.highlightItem)(id, true));

                                        if (runEvent) {
                                            this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                                id: id,
                                                value: value,
                                                label: label,
                                                groupValue: group && group.value ? group.value : null
                                            });
                                        }

                                        return this;
                                    };

                                    Choices.prototype.unhighlightItem = function (item) {
                                        if (!item || !item.id) {
                                            return this;
                                        }

                                        var id = item.id,
                                            _a = item.groupId,
                                            groupId = _a === void 0 ? -1 : _a,
                                            _b = item.value,
                                            value = _b === void 0 ? '' : _b,
                                            _c = item.label,
                                            label = _c === void 0 ? '' : _c;
                                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

                                        this._store.dispatch((0, items_1.highlightItem)(id, false));

                                        this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                            id: id,
                                            value: value,
                                            label: label,
                                            groupValue: group && group.value ? group.value : null
                                        });
                                        return this;
                                    };

                                    Choices.prototype.highlightAll = function () {
                                        var _this = this;

                                        this._store.items.forEach(function (item) {
                                            return _this.highlightItem(item);
                                        });

                                        return this;
                                    };

                                    Choices.prototype.unhighlightAll = function () {
                                        var _this = this;

                                        this._store.items.forEach(function (item) {
                                            return _this.unhighlightItem(item);
                                        });

                                        return this;
                                    };

                                    Choices.prototype.removeActiveItemsByValue = function (value) {
                                        var _this = this;

                                        this._store.activeItems.filter(function (item) {
                                            return item.value === value;
                                        }).forEach(function (item) {
                                            return _this._removeItem(item);
                                        });

                                        return this;
                                    };

                                    Choices.prototype.removeActiveItems = function (excludedId) {
                                        var _this = this;

                                        this._store.activeItems.filter(function (_a) {
                                            var id = _a.id;
                                            return id !== excludedId;
                                        }).forEach(function (item) {
                                            return _this._removeItem(item);
                                        });

                                        return this;
                                    };

                                    Choices.prototype.removeHighlightedItems = function (runEvent) {
                                        var _this = this;

                                        if (runEvent === void 0) {
                                            runEvent = false;
                                        }

                                        this._store.highlightedActiveItems.forEach(function (item) {
                                            _this._removeItem(item); // If this action was performed by the user
                                            // trigger the event


                                            if (runEvent) {
                                                _this._triggerChange(item.value);
                                            }
                                        });

                                        return this;
                                    };

                                    Choices.prototype.showDropdown = function (preventInputFocus) {
                                        var _this = this;

                                        if (this.dropdown.isActive) {
                                            return this;
                                        }

                                        requestAnimationFrame(function () {
                                            _this.dropdown.show();

                                            _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);

                                            if (!preventInputFocus && _this._canSearch) {
                                                _this.input.focus();
                                            }

                                            _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                                        });
                                        return this;
                                    };

                                    Choices.prototype.hideDropdown = function (preventInputBlur) {
                                        var _this = this;

                                        if (!this.dropdown.isActive) {
                                            return this;
                                        }

                                        requestAnimationFrame(function () {
                                            _this.dropdown.hide();

                                            _this.containerOuter.close();

                                            if (!preventInputBlur && _this._canSearch) {
                                                _this.input.removeActiveDescendant();

                                                _this.input.blur();
                                            }

                                            _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                                        });
                                        return this;
                                    };

                                    Choices.prototype.getValue = function (valueOnly) {
                                        if (valueOnly === void 0) {
                                            valueOnly = false;
                                        }

                                        var values = this._store.activeItems.reduce(function (selectedItems, item) {
                                            var itemValue = valueOnly ? item.value : item;
                                            selectedItems.push(itemValue);
                                            return selectedItems;
                                        }, []);

                                        return this._isSelectOneElement ? values[0] : values;
                                    };

                                    Choices.prototype.setValue = function (items) {
                                        var _this = this;

                                        if (!this.initialised) {
                                            return this;
                                        }

                                        items.forEach(function (value) {
                                            return _this._setChoiceOrItem(value);
                                        });
                                        return this;
                                    };

                                    Choices.prototype.setChoiceByValue = function (value) {
                                        var _this = this;

                                        if (!this.initialised || this._isTextElement) {
                                            return this;
                                        } // If only one value has been passed, convert to array


                                        var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

                                        choiceValue.forEach(function (val) {
                                            return _this._findAndSelectChoiceByValue(val);
                                        });
                                        return this;
                                    };
                                    /**
                                     * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
                                     * a value field name and a label field name.
                                     * This behaves the same as passing items via the choices option but can be called after initialising Choices.
                                     * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
                                     * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
                                     *
                                     * **Input types affected:** select-one, select-multiple
                                     *
                                     * @example
                                     * ```js
                                     * const example = new Choices(element);
                                     *
                                     * example.setChoices([
                                     *   {value: 'One', label: 'Label One', disabled: true},
                                     *   {value: 'Two', label: 'Label Two', selected: true},
                                     *   {value: 'Three', label: 'Label Three'},
                                     * ], 'value', 'label', false);
                                     * ```
                                     *
                                     * @example
                                     * ```js
                                     * const example = new Choices(element);
                                     *
                                     * example.setChoices(async () => {
                                     *   try {
                                     *      const items = await fetch('/items');
                                     *      return items.json()
                                     *   } catch(err) {
                                     *      console.error(err)
                                     *   }
                                     * });
                                     * ```
                                     *
                                     * @example
                                     * ```js
                                     * const example = new Choices(element);
                                     *
                                     * example.setChoices([{
                                     *   label: 'Group one',
                                     *   id: 1,
                                     *   disabled: false,
                                     *   choices: [
                                     *     {value: 'Child One', label: 'Child One', selected: true},
                                     *     {value: 'Child Two', label: 'Child Two',  disabled: true},
                                     *     {value: 'Child Three', label: 'Child Three'},
                                     *   ]
                                     * },
                                     * {
                                     *   label: 'Group two',
                                     *   id: 2,
                                     *   disabled: false,
                                     *   choices: [
                                     *     {value: 'Child Four', label: 'Child Four', disabled: true},
                                     *     {value: 'Child Five', label: 'Child Five'},
                                     *     {value: 'Child Six', label: 'Child Six', customProperties: {
                                     *       description: 'Custom description about child six',
                                     *       random: 'Another random custom property'
                                     *     }},
                                     *   ]
                                     * }], 'value', 'label', false);
                                     * ```
                                     */


                                    Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices) {
                                        var _this = this;

                                        if (choicesArrayOrFetcher === void 0) {
                                            choicesArrayOrFetcher = [];
                                        }

                                        if (value === void 0) {
                                            value = 'value';
                                        }

                                        if (label === void 0) {
                                            label = 'label';
                                        }

                                        if (replaceChoices === void 0) {
                                            replaceChoices = false;
                                        }

                                        if (!this.initialised) {
                                            throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                                        }

                                        if (!this._isSelectElement) {
                                            throw new TypeError("setChoices can't be used with INPUT based Choices");
                                        }

                                        if (typeof value !== 'string' || !value) {
                                            throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                                        } // Clear choices if needed


                                        if (replaceChoices) {
                                            this.clearChoices();
                                        }

                                        if (typeof choicesArrayOrFetcher === 'function') {
                                            // it's a choices fetcher function
                                            var fetcher_1 = choicesArrayOrFetcher(this);

                                            if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
                                                // that's a promise
                                                // eslint-disable-next-line no-promise-executor-return
                                                return new Promise(function (resolve) {
                                                    return requestAnimationFrame(resolve);
                                                }).then(function () {
                                                    return _this._handleLoadingState(true);
                                                }).then(function () {
                                                    return fetcher_1;
                                                }).then(function (data) {
                                                    return _this.setChoices(data, value, label, replaceChoices);
                                                }).catch(function (err) {
                                                    if (!_this.config.silent) {
                                                        console.error(err);
                                                    }
                                                }).then(function () {
                                                    return _this._handleLoadingState(false);
                                                }).then(function () {
                                                    return _this;
                                                });
                                            } // function returned something else than promise, let's check if it's an array of choices


                                            if (!Array.isArray(fetcher_1)) {
                                                throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                                            } // recursion with results, it's sync and choices were cleared already


                                            return this.setChoices(fetcher_1, value, label, false);
                                        }

                                        if (!Array.isArray(choicesArrayOrFetcher)) {
                                            throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                                        }

                                        this.containerOuter.removeLoadingState();

                                        this._startLoading();

                                        choicesArrayOrFetcher.forEach(function (groupOrChoice) {
                                            if (groupOrChoice.choices) {
                                                _this._addGroup({
                                                    id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                                    group: groupOrChoice,
                                                    valueKey: value,
                                                    labelKey: label
                                                });
                                            } else {
                                                var choice = groupOrChoice;

                                                _this._addChoice({
                                                    value: choice[value],
                                                    label: choice[label],
                                                    isSelected: !!choice.selected,
                                                    isDisabled: !!choice.disabled,
                                                    placeholder: !!choice.placeholder,
                                                    customProperties: choice.customProperties
                                                });
                                            }
                                        });

                                        this._stopLoading();

                                        return this;
                                    };

                                    Choices.prototype.clearChoices = function () {
                                        this._store.dispatch((0, choices_1.clearChoices)());

                                        return this;
                                    };

                                    Choices.prototype.clearStore = function () {
                                        this._store.dispatch((0, misc_1.clearAll)());

                                        return this;
                                    };

                                    Choices.prototype.clearInput = function () {
                                        var shouldSetInputWidth = !this._isSelectOneElement;
                                        this.input.clear(shouldSetInputWidth);

                                        if (!this._isTextElement && this._canSearch) {
                                            this._isSearching = false;

                                            this._store.dispatch((0, choices_1.activateChoices)(true));
                                        }

                                        return this;
                                    };

                                    Choices.prototype._render = function () {
                                        if (this._store.isLoading()) {
                                            return;
                                        }

                                        this._currentState = this._store.state;
                                        var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                                        var shouldRenderChoices = this._isSelectElement;
                                        var shouldRenderItems = this._currentState.items !== this._prevState.items;

                                        if (!stateChanged) {
                                            return;
                                        }

                                        if (shouldRenderChoices) {
                                            this._renderChoices();
                                        }

                                        if (shouldRenderItems) {
                                            this._renderItems();
                                        }

                                        this._prevState = this._currentState;
                                    };

                                    Choices.prototype._renderChoices = function () {
                                        var _this = this;

                                        var _a = this._store,
                                            activeGroups = _a.activeGroups,
                                            activeChoices = _a.activeChoices;
                                        var choiceListFragment = document.createDocumentFragment();
                                        this.choiceList.clear();

                                        if (this.config.resetScrollPosition) {
                                            requestAnimationFrame(function () {
                                                return _this.choiceList.scrollToTop();
                                            });
                                        } // If we have grouped options


                                        if (activeGroups.length >= 1 && !this._isSearching) {
                                            // If we have a placeholder choice along with groups
                                            var activePlaceholders = activeChoices.filter(function (activeChoice) {
                                                return activeChoice.placeholder === true && activeChoice.groupId === -1;
                                            });

                                            if (activePlaceholders.length >= 1) {
                                                choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                                            }

                                            choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                                        } else if (activeChoices.length >= 1) {
                                            choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                                        } // If we have choices to show


                                        if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                                            var activeItems = this._store.activeItems;

                                            var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


                                            if (canAddItem.response) {
                                                // ...append them and highlight the first choice
                                                this.choiceList.append(choiceListFragment);

                                                this._highlightChoice();
                                            } else {
                                                var notice = this._getTemplate('notice', canAddItem.notice);

                                                this.choiceList.append(notice);
                                            }
                                        } else {
                                            // Otherwise show a notice
                                            var dropdownItem = void 0;
                                            var notice = void 0;

                                            if (this._isSearching) {
                                                notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
                                                dropdownItem = this._getTemplate('notice', notice, 'no-results');
                                            } else {
                                                notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
                                                dropdownItem = this._getTemplate('notice', notice, 'no-choices');
                                            }

                                            this.choiceList.append(dropdownItem);
                                        }
                                    };

                                    Choices.prototype._renderItems = function () {
                                        var activeItems = this._store.activeItems || [];
                                        this.itemList.clear(); // Create a fragment to store our list items
                                        // (so we don't have to update the DOM for each item)

                                        var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


                                        if (itemListFragment.childNodes) {
                                            this.itemList.append(itemListFragment);
                                        }
                                    };

                                    Choices.prototype._createGroupsFragment = function (groups, choices, fragment) {
                                        var _this = this;

                                        if (fragment === void 0) {
                                            fragment = document.createDocumentFragment();
                                        }

                                        var getGroupChoices = function (group) {
                                            return choices.filter(function (choice) {
                                                if (_this._isSelectOneElement) {
                                                    return choice.groupId === group.id;
                                                }

                                                return choice.groupId === group.id && (_this.config.renderSelectedChoices === 'always' || !choice.selected);
                                            });
                                        }; // If sorting is enabled, filter groups


                                        if (this.config.shouldSort) {
                                            groups.sort(this.config.sorter);
                                        }

                                        groups.forEach(function (group) {
                                            var groupChoices = getGroupChoices(group);

                                            if (groupChoices.length >= 1) {
                                                var dropdownGroup = _this._getTemplate('choiceGroup', group);

                                                fragment.appendChild(dropdownGroup);

                                                _this._createChoicesFragment(groupChoices, fragment, true);
                                            }
                                        });
                                        return fragment;
                                    };

                                    Choices.prototype._createChoicesFragment = function (choices, fragment, withinGroup) {
                                        var _this = this;

                                        if (fragment === void 0) {
                                            fragment = document.createDocumentFragment();
                                        }

                                        if (withinGroup === void 0) {
                                            withinGroup = false;
                                        } // Create a fragment to store our list items (so we don't have to update the DOM for each item)


                                        var _a = this.config,
                                            renderSelectedChoices = _a.renderSelectedChoices,
                                            searchResultLimit = _a.searchResultLimit,
                                            renderChoiceLimit = _a.renderChoiceLimit;
                                        var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;

                                        var appendChoice = function (choice) {
                                            var shouldRender = renderSelectedChoices === 'auto' ? _this._isSelectOneElement || !choice.selected : true;

                                            if (shouldRender) {
                                                var dropdownItem = _this._getTemplate('choice', choice, _this.config.itemSelectText);

                                                fragment.appendChild(dropdownItem);
                                            }
                                        };

                                        var rendererableChoices = choices;

                                        if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
                                            rendererableChoices = choices.filter(function (choice) {
                                                return !choice.selected;
                                            });
                                        } // Split array into placeholders and "normal" choices


                                        var _b = rendererableChoices.reduce(function (acc, choice) {
                                                if (choice.placeholder) {
                                                    acc.placeholderChoices.push(choice);
                                                } else {
                                                    acc.normalChoices.push(choice);
                                                }

                                                return acc;
                                            }, {
                                                placeholderChoices: [],
                                                normalChoices: []
                                            }),
                                            placeholderChoices = _b.placeholderChoices,
                                            normalChoices = _b.normalChoices; // If sorting is enabled or the user is searching, filter choices


                                        if (this.config.shouldSort || this._isSearching) {
                                            normalChoices.sort(filter);
                                        }

                                        var choiceLimit = rendererableChoices.length; // Prepend placeholeder

                                        var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;

                                        if (this._isSearching) {
                                            choiceLimit = searchResultLimit;
                                        } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
                                            choiceLimit = renderChoiceLimit;
                                        } // Add each choice to dropdown within range


                                        for (var i = 0; i < choiceLimit; i += 1) {
                                            if (sortedChoices[i]) {
                                                appendChoice(sortedChoices[i]);
                                            }
                                        }

                                        return fragment;
                                    };

                                    Choices.prototype._createItemsFragment = function (items, fragment) {
                                        var _this = this;

                                        if (fragment === void 0) {
                                            fragment = document.createDocumentFragment();
                                        } // Create fragment to add elements to


                                        var _a = this.config,
                                            shouldSortItems = _a.shouldSortItems,
                                            sorter = _a.sorter,
                                            removeItemButton = _a.removeItemButton; // If sorting is enabled, filter items

                                        if (shouldSortItems && !this._isSelectOneElement) {
                                            items.sort(sorter);
                                        }

                                        if (this._isTextElement) {
                                            // Update the value of the hidden input
                                            this.passedElement.value = items.map(function (_a) {
                                                var value = _a.value;
                                                return value;
                                            }).join(this.config.delimiter);
                                        } else {
                                            // Update the options of the hidden input
                                            this.passedElement.options = items;
                                        }

                                        var addItemToFragment = function (item) {
                                            // Create new list element
                                            var listItem = _this._getTemplate('item', item, removeItemButton); // Append it to list


                                            fragment.appendChild(listItem);
                                        }; // Add each list item to list


                                        items.forEach(addItemToFragment);
                                        return fragment;
                                    };

                                    Choices.prototype._triggerChange = function (value) {
                                        if (value === undefined || value === null) {
                                            return;
                                        }

                                        this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                                            value: value
                                        });
                                    };

                                    Choices.prototype._selectPlaceholderChoice = function (placeholderChoice) {
                                        this._addItem({
                                            value: placeholderChoice.value,
                                            label: placeholderChoice.label,
                                            choiceId: placeholderChoice.id,
                                            groupId: placeholderChoice.groupId,
                                            placeholder: placeholderChoice.placeholder
                                        });

                                        this._triggerChange(placeholderChoice.value);
                                    };

                                    Choices.prototype._handleButtonAction = function (activeItems, element) {
                                        if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                                            return;
                                        }

                                        var itemId = element.parentNode && element.parentNode.dataset.id;
                                        var itemToRemove = itemId && activeItems.find(function (item) {
                                            return item.id === parseInt(itemId, 10);
                                        });

                                        if (!itemToRemove) {
                                            return;
                                        } // Remove item associated with button


                                        this._removeItem(itemToRemove);

                                        this._triggerChange(itemToRemove.value);

                                        if (this._isSelectOneElement && this._store.placeholderChoice) {
                                            this._selectPlaceholderChoice(this._store.placeholderChoice);
                                        }
                                    };

                                    Choices.prototype._handleItemAction = function (activeItems, element, hasShiftKey) {
                                        var _this = this;

                                        if (hasShiftKey === void 0) {
                                            hasShiftKey = false;
                                        }

                                        if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                                            return;
                                        }

                                        var passedId = element.dataset.id; // We only want to select one item with a click
                                        // so we deselect any items that aren't the target
                                        // unless shift is being pressed

                                        activeItems.forEach(function (item) {
                                            if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
                                                _this.highlightItem(item);
                                            } else if (!hasShiftKey && item.highlighted) {
                                                _this.unhighlightItem(item);
                                            }
                                        }); // Focus input as without focus, a user cannot do anything with a
                                        // highlighted item

                                        this.input.focus();
                                    };

                                    Choices.prototype._handleChoiceAction = function (activeItems, element) {
                                        if (!activeItems || !element) {
                                            return;
                                        } // If we are clicking on an option


                                        var id = element.dataset.id;

                                        var choice = id && this._store.getChoiceById(id);

                                        if (!choice) {
                                            return;
                                        }

                                        var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
                                        var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

                                        choice.keyCode = passedKeyCode;
                                        this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                                            choice: choice
                                        });

                                        if (!choice.selected && !choice.disabled) {
                                            var canAddItem = this._canAddItem(activeItems, choice.value);

                                            if (canAddItem.response) {
                                                this._addItem({
                                                    value: choice.value,
                                                    label: choice.label,
                                                    choiceId: choice.id,
                                                    groupId: choice.groupId,
                                                    customProperties: choice.customProperties,
                                                    placeholder: choice.placeholder,
                                                    keyCode: choice.keyCode
                                                });

                                                this._triggerChange(choice.value);
                                            }
                                        }

                                        this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

                                        if (hasActiveDropdown && this._isSelectOneElement) {
                                            this.hideDropdown(true);
                                            this.containerOuter.focus();
                                        }
                                    };

                                    Choices.prototype._handleBackspace = function (activeItems) {
                                        if (!this.config.removeItems || !activeItems) {
                                            return;
                                        }

                                        var lastItem = activeItems[activeItems.length - 1];
                                        var hasHighlightedItems = activeItems.some(function (item) {
                                            return item.highlighted;
                                        }); // If editing the last item is allowed and there are not other selected items,
                                        // we can edit the item value. Otherwise if we can remove items, remove all selected items

                                        if (this.config.editItems && !hasHighlightedItems && lastItem) {
                                            this.input.value = lastItem.value;
                                            this.input.setWidth();

                                            this._removeItem(lastItem);

                                            this._triggerChange(lastItem.value);
                                        } else {
                                            if (!hasHighlightedItems) {
                                                // Highlight last item if none already highlighted
                                                this.highlightItem(lastItem, false);
                                            }

                                            this.removeHighlightedItems(true);
                                        }
                                    };

                                    Choices.prototype._startLoading = function () {
                                        this._store.dispatch((0, misc_1.setIsLoading)(true));
                                    };

                                    Choices.prototype._stopLoading = function () {
                                        this._store.dispatch((0, misc_1.setIsLoading)(false));
                                    };

                                    Choices.prototype._handleLoadingState = function (setLoading) {
                                        if (setLoading === void 0) {
                                            setLoading = true;
                                        }

                                        var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));

                                        if (setLoading) {
                                            this.disable();
                                            this.containerOuter.addLoadingState();

                                            if (this._isSelectOneElement) {
                                                if (!placeholderItem) {
                                                    placeholderItem = this._getTemplate('placeholder', this.config.loadingText);

                                                    if (placeholderItem) {
                                                        this.itemList.append(placeholderItem);
                                                    }
                                                } else {
                                                    placeholderItem.innerHTML = this.config.loadingText;
                                                }
                                            } else {
                                                this.input.placeholder = this.config.loadingText;
                                            }
                                        } else {
                                            this.enable();
                                            this.containerOuter.removeLoadingState();

                                            if (this._isSelectOneElement) {
                                                if (placeholderItem) {
                                                    placeholderItem.innerHTML = this._placeholderValue || '';
                                                }
                                            } else {
                                                this.input.placeholder = this._placeholderValue || '';
                                            }
                                        }
                                    };

                                    Choices.prototype._handleSearch = function (value) {
                                        if (!this.input.isFocussed) {
                                            return;
                                        }

                                        var choices = this._store.choices;
                                        var _a = this.config,
                                            searchFloor = _a.searchFloor,
                                            searchChoices = _a.searchChoices;
                                        var hasUnactiveChoices = choices.some(function (option) {
                                            return !option.active;
                                        }); // Check that we have a value to search and the input was an alphanumeric character

                                        if (value !== null && typeof value !== 'undefined' && value.length >= searchFloor) {
                                            var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

                                            this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                                value: value,
                                                resultCount: resultCount
                                            });
                                        } else if (hasUnactiveChoices) {
                                            // Otherwise reset choices to active
                                            this._isSearching = false;

                                            this._store.dispatch((0, choices_1.activateChoices)(true));
                                        }
                                    };

                                    Choices.prototype._canAddItem = function (activeItems, value) {
                                        var canAddItem = true;
                                        var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;

                                        if (!this._isSelectOneElement) {
                                            var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);

                                            if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                                // If there is a max entry limit and we have reached that limit
                                                // don't update
                                                canAddItem = false;
                                                notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                                            }

                                            if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                                canAddItem = false;
                                                notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                                            }

                                            if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
                                                canAddItem = false;
                                                notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
                                            }
                                        }

                                        return {
                                            response: canAddItem,
                                            notice: notice
                                        };
                                    };

                                    Choices.prototype._searchChoices = function (value) {
                                        var newValue = typeof value === 'string' ? value.trim() : value;
                                        var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;

                                        if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
                                            return 0;
                                        } // If new value matches the desired length and is not the same as the current value with a space


                                        var haystack = this._store.searchableChoices;
                                        var needle = newValue;
                                        var options = Object.assign(this.config.fuseOptions, {
                                            keys: __spreadArray([], this.config.searchFields, true),
                                            includeMatches: true
                                        });
                                        var fuse = new fuse_js_1.default(haystack, options);
                                        var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303

                                        this._currentValue = newValue;
                                        this._highlightPosition = 0;
                                        this._isSearching = true;

                                        this._store.dispatch((0, choices_1.filterChoices)(results));

                                        return results.length;
                                    };

                                    Choices.prototype._addEventListeners = function () {
                                        var documentElement = document.documentElement; // capture events - can cancel event processing or propagation

                                        documentElement.addEventListener('touchend', this._onTouchEnd, true);
                                        this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
                                        this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

                                        documentElement.addEventListener('click', this._onClick, {
                                            passive: true
                                        });
                                        documentElement.addEventListener('touchmove', this._onTouchMove, {
                                            passive: true
                                        });
                                        this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
                                            passive: true
                                        });

                                        if (this._isSelectOneElement) {
                                            this.containerOuter.element.addEventListener('focus', this._onFocus, {
                                                passive: true
                                            });
                                            this.containerOuter.element.addEventListener('blur', this._onBlur, {
                                                passive: true
                                            });
                                        }

                                        this.input.element.addEventListener('keyup', this._onKeyUp, {
                                            passive: true
                                        });
                                        this.input.element.addEventListener('focus', this._onFocus, {
                                            passive: true
                                        });
                                        this.input.element.addEventListener('blur', this._onBlur, {
                                            passive: true
                                        });

                                        if (this.input.element.form) {
                                            this.input.element.form.addEventListener('reset', this._onFormReset, {
                                                passive: true
                                            });
                                        }

                                        this.input.addEventListeners();
                                    };

                                    Choices.prototype._removeEventListeners = function () {
                                        var documentElement = document.documentElement;
                                        documentElement.removeEventListener('touchend', this._onTouchEnd, true);
                                        this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
                                        this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
                                        documentElement.removeEventListener('click', this._onClick);
                                        documentElement.removeEventListener('touchmove', this._onTouchMove);
                                        this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

                                        if (this._isSelectOneElement) {
                                            this.containerOuter.element.removeEventListener('focus', this._onFocus);
                                            this.containerOuter.element.removeEventListener('blur', this._onBlur);
                                        }

                                        this.input.element.removeEventListener('keyup', this._onKeyUp);
                                        this.input.element.removeEventListener('focus', this._onFocus);
                                        this.input.element.removeEventListener('blur', this._onBlur);

                                        if (this.input.element.form) {
                                            this.input.element.form.removeEventListener('reset', this._onFormReset);
                                        }

                                        this.input.removeEventListeners();
                                    };

                                    Choices.prototype._onKeyDown = function (event) {
                                        var keyCode = event.keyCode;
                                        var activeItems = this._store.activeItems;
                                        var hasFocusedInput = this.input.isFocussed;
                                        var hasActiveDropdown = this.dropdown.isActive;
                                        var hasItems = this.itemList.hasChildren();
                                        var keyString = String.fromCharCode(keyCode);
                                        var wasAlphaNumericChar = /[a-zA-Z0-9-_ ]/.test(keyString);
                                        var BACK_KEY = constants_1.KEY_CODES.BACK_KEY,
                                            DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY,
                                            ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY,
                                            A_KEY = constants_1.KEY_CODES.A_KEY,
                                            ESC_KEY = constants_1.KEY_CODES.ESC_KEY,
                                            UP_KEY = constants_1.KEY_CODES.UP_KEY,
                                            DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY,
                                            PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY,
                                            PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;

                                        if (!this._isTextElement && !hasActiveDropdown && wasAlphaNumericChar) {
                                            this.showDropdown();

                                            if (!this.input.isFocussed) {
                                                /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */
                                                this.input.value += keyString.toLowerCase();
                                            }
                                        }

                                        switch (keyCode) {
                                            case A_KEY:
                                                return this._onSelectKey(event, hasItems);

                                            case ENTER_KEY:
                                                return this._onEnterKey(event, activeItems, hasActiveDropdown);

                                            case ESC_KEY:
                                                return this._onEscapeKey(hasActiveDropdown);

                                            case UP_KEY:
                                            case PAGE_UP_KEY:
                                            case DOWN_KEY:
                                            case PAGE_DOWN_KEY:
                                                return this._onDirectionKey(event, hasActiveDropdown);

                                            case DELETE_KEY:
                                            case BACK_KEY:
                                                return this._onDeleteKey(event, activeItems, hasFocusedInput);

                                            default:
                                        }
                                    };

                                    Choices.prototype._onKeyUp = function (_a) {
                                        var target = _a.target,
                                            keyCode = _a.keyCode;
                                        var value = this.input.value;
                                        var activeItems = this._store.activeItems;

                                        var canAddItem = this._canAddItem(activeItems, value);

                                        var backKey = constants_1.KEY_CODES.BACK_KEY,
                                            deleteKey = constants_1.KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
                                        // notice. Otherwise hide the dropdown

                                        if (this._isTextElement) {
                                            var canShowDropdownNotice = canAddItem.notice && value;

                                            if (canShowDropdownNotice) {
                                                var dropdownItem = this._getTemplate('notice', canAddItem.notice);

                                                this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                                this.showDropdown(true);
                                            } else {
                                                this.hideDropdown(true);
                                            }
                                        } else {
                                            var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                                            var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                                            var canReactivateChoices = !this._isTextElement && this._isSearching;
                                            var canSearch = this._canSearch && canAddItem.response;

                                            if (userHasRemovedValue && canReactivateChoices) {
                                                this._isSearching = false;

                                                this._store.dispatch((0, choices_1.activateChoices)(true));
                                            } else if (canSearch) {
                                                this._handleSearch(this.input.rawValue);
                                            }
                                        }

                                        this._canSearch = this.config.searchEnabled;
                                    };

                                    Choices.prototype._onSelectKey = function (event, hasItems) {
                                        var ctrlKey = event.ctrlKey,
                                            metaKey = event.metaKey;
                                        var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If CTRL + A or CMD + A have been pressed and there are items to select

                                        if (hasCtrlDownKeyPressed && hasItems) {
                                            this._canSearch = false;
                                            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

                                            if (shouldHightlightAll) {
                                                this.highlightAll();
                                            }
                                        }
                                    };

                                    Choices.prototype._onEnterKey = function (event, activeItems, hasActiveDropdown) {
                                        var target = event.target;
                                        var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                                        var targetWasButton = target && target.hasAttribute('data-button');

                                        if (this._isTextElement && target && target.value) {
                                            var value = this.input.value;

                                            var canAddItem = this._canAddItem(activeItems, value);

                                            if (canAddItem.response) {
                                                this.hideDropdown(true);

                                                this._addItem({
                                                    value: value
                                                });

                                                this._triggerChange(value);

                                                this.clearInput();
                                            }
                                        }

                                        if (targetWasButton) {
                                            this._handleButtonAction(activeItems, target);

                                            event.preventDefault();
                                        }

                                        if (hasActiveDropdown) {
                                            var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));

                                            if (highlightedChoice) {
                                                // add enter keyCode value
                                                if (activeItems[0]) {
                                                    activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                                                }

                                                this._handleChoiceAction(activeItems, highlightedChoice);
                                            }

                                            event.preventDefault();
                                        } else if (this._isSelectOneElement) {
                                            this.showDropdown();
                                            event.preventDefault();
                                        }
                                    };

                                    Choices.prototype._onEscapeKey = function (hasActiveDropdown) {
                                        if (hasActiveDropdown) {
                                            this.hideDropdown(true);
                                            this.containerOuter.focus();
                                        }
                                    };

                                    Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
                                        var keyCode = event.keyCode,
                                            metaKey = event.metaKey;
                                        var downKey = constants_1.KEY_CODES.DOWN_KEY,
                                            pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY,
                                            pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

                                        if (hasActiveDropdown || this._isSelectOneElement) {
                                            this.showDropdown();
                                            this._canSearch = false;
                                            var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                                            var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                                            var selectableChoiceIdentifier = '[data-choice-selectable]';
                                            var nextEl = void 0;

                                            if (skipKey) {
                                                if (directionInt > 0) {
                                                    nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                                                } else {
                                                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                                }
                                            } else {
                                                var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));

                                                if (currentEl) {
                                                    nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                                                } else {
                                                    nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                                }
                                            }

                                            if (nextEl) {
                                                // We prevent default to stop the cursor moving
                                                // when pressing the arrow
                                                if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
                                                    this.choiceList.scrollToChildElement(nextEl, directionInt);
                                                }

                                                this._highlightChoice(nextEl);
                                            } // Prevent default to maintain cursor position whilst
                                            // traversing dropdown options


                                            event.preventDefault();
                                        }
                                    };

                                    Choices.prototype._onDeleteKey = function (event, activeItems, hasFocusedInput) {
                                        var target = event.target; // If backspace or delete key is pressed and the input has no value

                                        if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                                            this._handleBackspace(activeItems);

                                            event.preventDefault();
                                        }
                                    };

                                    Choices.prototype._onTouchMove = function () {
                                        if (this._wasTap) {
                                            this._wasTap = false;
                                        }
                                    };

                                    Choices.prototype._onTouchEnd = function (event) {
                                        var target = (event || event.touches[0]).target;
                                        var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

                                        if (touchWasWithinContainer) {
                                            var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

                                            if (containerWasExactTarget) {
                                                if (this._isTextElement) {
                                                    this.input.focus();
                                                } else if (this._isSelectMultipleElement) {
                                                    this.showDropdown();
                                                }
                                            } // Prevents focus event firing


                                            event.stopPropagation();
                                        }

                                        this._wasTap = true;
                                    };
                                    /**
                                     * Handles mousedown event in capture mode for containetOuter.element
                                     */


                                    Choices.prototype._onMouseDown = function (event) {
                                        var target = event.target;

                                        if (!(target instanceof HTMLElement)) {
                                            return;
                                        } // If we have our mouse down on the scrollbar and are on IE11...


                                        if (IS_IE11 && this.choiceList.element.contains(target)) {
                                            // check if click was on a scrollbar area
                                            var firstChoice = this.choiceList.element.firstElementChild;
                                            var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                                            this._isScrollingOnIe = isOnScrollbar;
                                        }

                                        if (target === this.input.element) {
                                            return;
                                        }

                                        var item = target.closest('[data-button],[data-item],[data-choice]');

                                        if (item instanceof HTMLElement) {
                                            var hasShiftKey = event.shiftKey;
                                            var activeItems = this._store.activeItems;
                                            var dataset = item.dataset;

                                            if ('button' in dataset) {
                                                this._handleButtonAction(activeItems, item);
                                            } else if ('item' in dataset) {
                                                this._handleItemAction(activeItems, item, hasShiftKey);
                                            } else if ('choice' in dataset) {
                                                this._handleChoiceAction(activeItems, item);
                                            }
                                        }

                                        event.preventDefault();
                                    };
                                    /**
                                     * Handles mouseover event over this.dropdown
                                     * @param {MouseEvent} event
                                     */


                                    Choices.prototype._onMouseOver = function (_a) {
                                        var target = _a.target;

                                        if (target instanceof HTMLElement && 'choice' in target.dataset) {
                                            this._highlightChoice(target);
                                        }
                                    };

                                    Choices.prototype._onClick = function (_a) {
                                        var target = _a.target;
                                        var clickWasWithinContainer = this.containerOuter.element.contains(target);

                                        if (clickWasWithinContainer) {
                                            if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                                                if (this._isTextElement) {
                                                    if (document.activeElement !== this.input.element) {
                                                        this.input.focus();
                                                    }
                                                } else {
                                                    this.showDropdown();
                                                    this.containerOuter.focus();
                                                }
                                            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                                                this.hideDropdown();
                                            }
                                        } else {
                                            var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;

                                            if (hasHighlightedItems) {
                                                this.unhighlightAll();
                                            }

                                            this.containerOuter.removeFocusState();
                                            this.hideDropdown(true);
                                        }
                                    };

                                    Choices.prototype._onFocus = function (_a) {
                                        var _b;

                                        var _this = this;

                                        var target = _a.target;
                                        var focusWasWithinContainer = target && this.containerOuter.element.contains(target);

                                        if (!focusWasWithinContainer) {
                                            return;
                                        }

                                        var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.addFocusState();
                                            }
                                        }, _b[constants_1.SELECT_ONE_TYPE] = function () {
                                            _this.containerOuter.addFocusState();

                                            if (target === _this.input.element) {
                                                _this.showDropdown(true);
                                            }
                                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
                                            if (target === _this.input.element) {
                                                _this.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
                                                // isn't already open, focus and show dropdown


                                                _this.containerOuter.addFocusState();
                                            }
                                        }, _b);
                                        focusActions[this.passedElement.element.type]();
                                    };

                                    Choices.prototype._onBlur = function (_a) {
                                        var _b;

                                        var _this = this;

                                        var target = _a.target;
                                        var blurWasWithinContainer = target && this.containerOuter.element.contains(target);

                                        if (blurWasWithinContainer && !this._isScrollingOnIe) {
                                            var activeItems = this._store.activeItems;
                                            var hasHighlightedItems_1 = activeItems.some(function (item) {
                                                return item.highlighted;
                                            });
                                            var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
                                                if (target === _this.input.element) {
                                                    _this.containerOuter.removeFocusState();

                                                    if (hasHighlightedItems_1) {
                                                        _this.unhighlightAll();
                                                    }

                                                    _this.hideDropdown(true);
                                                }
                                            }, _b[constants_1.SELECT_ONE_TYPE] = function () {
                                                _this.containerOuter.removeFocusState();

                                                if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
                                                    _this.hideDropdown(true);
                                                }
                                            }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
                                                if (target === _this.input.element) {
                                                    _this.containerOuter.removeFocusState();

                                                    _this.hideDropdown(true);

                                                    if (hasHighlightedItems_1) {
                                                        _this.unhighlightAll();
                                                    }
                                                }
                                            }, _b);
                                            blurActions[this.passedElement.element.type]();
                                        } else {
                                            // On IE11, clicking the scollbar blurs our input and thus
                                            // closes the dropdown. To stop this, we refocus our input
                                            // if we know we are on IE *and* are scrolling.
                                            this._isScrollingOnIe = false;
                                            this.input.element.focus();
                                        }
                                    };

                                    Choices.prototype._onFormReset = function () {
                                        this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                                    };

                                    Choices.prototype._highlightChoice = function (el) {
                                        var _this = this;

                                        if (el === void 0) {
                                            el = null;
                                        }

                                        var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

                                        if (!choices.length) {
                                            return;
                                        }

                                        var passedEl = el;
                                        var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))); // Remove any highlighted choices

                                        highlightedChoices.forEach(function (choice) {
                                            choice.classList.remove(_this.config.classNames.highlightedState);
                                            choice.setAttribute('aria-selected', 'false');
                                        });

                                        if (passedEl) {
                                            this._highlightPosition = choices.indexOf(passedEl);
                                        } else {
                                            // Highlight choice based on last known highlight location
                                            if (choices.length > this._highlightPosition) {
                                                // If we have an option to highlight
                                                passedEl = choices[this._highlightPosition];
                                            } else {
                                                // Otherwise highlight the option before
                                                passedEl = choices[choices.length - 1];
                                            }

                                            if (!passedEl) {
                                                passedEl = choices[0];
                                            }
                                        }

                                        passedEl.classList.add(this.config.classNames.highlightedState);
                                        passedEl.setAttribute('aria-selected', 'true');
                                        this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                                            el: passedEl
                                        });

                                        if (this.dropdown.isActive) {
                                            // IE11 ignores aria-label and blocks virtual keyboard
                                            // if aria-activedescendant is set without a dropdown
                                            this.input.setActiveDescendant(passedEl.id);
                                            this.containerOuter.setActiveDescendant(passedEl.id);
                                        }
                                    };

                                    Choices.prototype._addItem = function (_a) {
                                        var value = _a.value,
                                            _b = _a.label,
                                            label = _b === void 0 ? null : _b,
                                            _c = _a.choiceId,
                                            choiceId = _c === void 0 ? -1 : _c,
                                            _d = _a.groupId,
                                            groupId = _d === void 0 ? -1 : _d,
                                            _e = _a.customProperties,
                                            customProperties = _e === void 0 ? {} : _e,
                                            _f = _a.placeholder,
                                            placeholder = _f === void 0 ? false : _f,
                                            _g = _a.keyCode,
                                            keyCode = _g === void 0 ? -1 : _g;
                                        var passedValue = typeof value === 'string' ? value.trim() : value;
                                        var items = this._store.items;
                                        var passedLabel = label || passedValue;
                                        var passedOptionId = choiceId || -1;
                                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                        var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

                                        if (this.config.prependValue) {
                                            passedValue = this.config.prependValue + passedValue.toString();
                                        } // If an appended value has been passed, append it


                                        if (this.config.appendValue) {
                                            passedValue += this.config.appendValue.toString();
                                        }

                                        this._store.dispatch((0, items_1.addItem)({
                                            value: passedValue,
                                            label: passedLabel,
                                            id: id,
                                            choiceId: passedOptionId,
                                            groupId: groupId,
                                            customProperties: customProperties,
                                            placeholder: placeholder,
                                            keyCode: keyCode
                                        }));

                                        if (this._isSelectOneElement) {
                                            this.removeActiveItems(id);
                                        } // Trigger change event


                                        this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                                            id: id,
                                            value: passedValue,
                                            label: passedLabel,
                                            customProperties: customProperties,
                                            groupValue: group && group.value ? group.value : null,
                                            keyCode: keyCode
                                        });
                                    };

                                    Choices.prototype._removeItem = function (item) {
                                        var id = item.id,
                                            value = item.value,
                                            label = item.label,
                                            customProperties = item.customProperties,
                                            choiceId = item.choiceId,
                                            groupId = item.groupId;
                                        var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;

                                        if (!id || !choiceId) {
                                            return;
                                        }

                                        this._store.dispatch((0, items_1.removeItem)(id, choiceId));

                                        this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                                            id: id,
                                            value: value,
                                            label: label,
                                            customProperties: customProperties,
                                            groupValue: group && group.value ? group.value : null
                                        });
                                    };

                                    Choices.prototype._addChoice = function (_a) {
                                        var value = _a.value,
                                            _b = _a.label,
                                            label = _b === void 0 ? null : _b,
                                            _c = _a.isSelected,
                                            isSelected = _c === void 0 ? false : _c,
                                            _d = _a.isDisabled,
                                            isDisabled = _d === void 0 ? false : _d,
                                            _e = _a.groupId,
                                            groupId = _e === void 0 ? -1 : _e,
                                            _f = _a.customProperties,
                                            customProperties = _f === void 0 ? {} : _f,
                                            _g = _a.placeholder,
                                            placeholder = _g === void 0 ? false : _g,
                                            _h = _a.keyCode,
                                            keyCode = _h === void 0 ? -1 : _h;

                                        if (typeof value === 'undefined' || value === null) {
                                            return;
                                        } // Generate unique id


                                        var choices = this._store.choices;
                                        var choiceLabel = label || value;
                                        var choiceId = choices ? choices.length + 1 : 1;
                                        var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);

                                        this._store.dispatch((0, choices_1.addChoice)({
                                            id: choiceId,
                                            groupId: groupId,
                                            elementId: choiceElementId,
                                            value: value,
                                            label: choiceLabel,
                                            disabled: isDisabled,
                                            customProperties: customProperties,
                                            placeholder: placeholder,
                                            keyCode: keyCode
                                        }));

                                        if (isSelected) {
                                            this._addItem({
                                                value: value,
                                                label: choiceLabel,
                                                choiceId: choiceId,
                                                customProperties: customProperties,
                                                placeholder: placeholder,
                                                keyCode: keyCode
                                            });
                                        }
                                    };

                                    Choices.prototype._addGroup = function (_a) {
                                        var _this = this;

                                        var group = _a.group,
                                            id = _a.id,
                                            _b = _a.valueKey,
                                            valueKey = _b === void 0 ? 'value' : _b,
                                            _c = _a.labelKey,
                                            labelKey = _c === void 0 ? 'label' : _c;
                                        var groupChoices = (0, utils_1.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
                                        var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                                        var isDisabled = group.disabled ? group.disabled : false;

                                        if (groupChoices) {
                                            this._store.dispatch((0, groups_1.addGroup)({
                                                value: group.label,
                                                id: groupId,
                                                active: true,
                                                disabled: isDisabled
                                            }));

                                            var addGroupChoices = function (choice) {
                                                var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

                                                _this._addChoice({
                                                    value: choice[valueKey],
                                                    label: (0, utils_1.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
                                                    isSelected: choice.selected,
                                                    isDisabled: isOptDisabled,
                                                    groupId: groupId,
                                                    customProperties: choice.customProperties,
                                                    placeholder: choice.placeholder
                                                });
                                            };

                                            groupChoices.forEach(addGroupChoices);
                                        } else {
                                            this._store.dispatch((0, groups_1.addGroup)({
                                                value: group.label,
                                                id: group.id,
                                                active: false,
                                                disabled: group.disabled
                                            }));
                                        }
                                    };

                                    Choices.prototype._getTemplate = function (template) {
                                        var _a;

                                        var args = [];

                                        for (var _i = 1; _i < arguments.length; _i++) {
                                            args[_i - 1] = arguments[_i];
                                        }

                                        return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
                                    };

                                    Choices.prototype._createTemplates = function () {
                                        var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                                        var userTemplates = {};

                                        if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
                                            userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                                        }

                                        this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                                    };

                                    Choices.prototype._createElements = function () {
                                        this.containerOuter = new components_1.Container({
                                            element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                            classNames: this.config.classNames,
                                            type: this.passedElement.element.type,
                                            position: this.config.position
                                        });
                                        this.containerInner = new components_1.Container({
                                            element: this._getTemplate('containerInner'),
                                            classNames: this.config.classNames,
                                            type: this.passedElement.element.type,
                                            position: this.config.position
                                        });
                                        this.input = new components_1.Input({
                                            element: this._getTemplate('input', this._placeholderValue),
                                            classNames: this.config.classNames,
                                            type: this.passedElement.element.type,
                                            preventPaste: !this.config.paste
                                        });
                                        this.choiceList = new components_1.List({
                                            element: this._getTemplate('choiceList', this._isSelectOneElement)
                                        });
                                        this.itemList = new components_1.List({
                                            element: this._getTemplate('itemList', this._isSelectOneElement)
                                        });
                                        this.dropdown = new components_1.Dropdown({
                                            element: this._getTemplate('dropdown'),
                                            classNames: this.config.classNames,
                                            type: this.passedElement.element.type
                                        });
                                    };

                                    Choices.prototype._createStructure = function () {
                                        // Hide original element
                                        this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

                                        this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

                                        this.containerOuter.wrap(this.containerInner.element);

                                        if (this._isSelectOneElement) {
                                            this.input.placeholder = this.config.searchPlaceholderValue || '';
                                        } else if (this._placeholderValue) {
                                            this.input.placeholder = this._placeholderValue;
                                            this.input.setWidth();
                                        }

                                        this.containerOuter.element.appendChild(this.containerInner.element);
                                        this.containerOuter.element.appendChild(this.dropdown.element);
                                        this.containerInner.element.appendChild(this.itemList.element);

                                        if (!this._isTextElement) {
                                            this.dropdown.element.appendChild(this.choiceList.element);
                                        }

                                        if (!this._isSelectOneElement) {
                                            this.containerInner.element.appendChild(this.input.element);
                                        } else if (this.config.searchEnabled) {
                                            this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                                        }

                                        if (this._isSelectElement) {
                                            this._highlightPosition = 0;
                                            this._isSearching = false;

                                            this._startLoading();

                                            if (this._presetGroups.length) {
                                                this._addPredefinedGroups(this._presetGroups);
                                            } else {
                                                this._addPredefinedChoices(this._presetChoices);
                                            }

                                            this._stopLoading();
                                        }

                                        if (this._isTextElement) {
                                            this._addPredefinedItems(this._presetItems);
                                        }
                                    };

                                    Choices.prototype._addPredefinedGroups = function (groups) {
                                        var _this = this; // If we have a placeholder option


                                        var placeholderChoice = this.passedElement.placeholderOption;

                                        if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === 'SELECT') {
                                            this._addChoice({
                                                value: placeholderChoice.value,
                                                label: placeholderChoice.innerHTML,
                                                isSelected: placeholderChoice.selected,
                                                isDisabled: placeholderChoice.disabled,
                                                placeholder: true
                                            });
                                        }

                                        groups.forEach(function (group) {
                                            return _this._addGroup({
                                                group: group,
                                                id: group.id || null
                                            });
                                        });
                                    };

                                    Choices.prototype._addPredefinedChoices = function (choices) {
                                        var _this = this; // If sorting is enabled or the user is searching, filter choices


                                        if (this.config.shouldSort) {
                                            choices.sort(this.config.sorter);
                                        }

                                        var hasSelectedChoice = choices.some(function (choice) {
                                            return choice.selected;
                                        });
                                        var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
                                            return choice.disabled === undefined || !choice.disabled;
                                        });
                                        choices.forEach(function (choice, index) {
                                            var _a = choice.value,
                                                value = _a === void 0 ? '' : _a,
                                                label = choice.label,
                                                customProperties = choice.customProperties,
                                                placeholder = choice.placeholder;

                                            if (_this._isSelectElement) {
                                                // If the choice is actually a group
                                                if (choice.choices) {
                                                    _this._addGroup({
                                                        group: choice,
                                                        id: choice.id || null
                                                    });
                                                } else {
                                                    /**
                                                     * If there is a selected choice already or the choice is not the first in
                                                     * the array, add each choice normally.
                                                     *
                                                     * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
                                                     */
                                                    var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                                    var isSelected = shouldPreselect ? true : choice.selected;
                                                    var isDisabled = choice.disabled;

                                                    _this._addChoice({
                                                        value: value,
                                                        label: label,
                                                        isSelected: !!isSelected,
                                                        isDisabled: !!isDisabled,
                                                        placeholder: !!placeholder,
                                                        customProperties: customProperties
                                                    });
                                                }
                                            } else {
                                                _this._addChoice({
                                                    value: value,
                                                    label: label,
                                                    isSelected: !!choice.selected,
                                                    isDisabled: !!choice.disabled,
                                                    placeholder: !!choice.placeholder,
                                                    customProperties: customProperties
                                                });
                                            }
                                        });
                                    };

                                    Choices.prototype._addPredefinedItems = function (items) {
                                        var _this = this;

                                        items.forEach(function (item) {
                                            if (typeof item === 'object' && item.value) {
                                                _this._addItem({
                                                    value: item.value,
                                                    label: item.label,
                                                    choiceId: item.id,
                                                    customProperties: item.customProperties,
                                                    placeholder: item.placeholder
                                                });
                                            }

                                            if (typeof item === 'string') {
                                                _this._addItem({
                                                    value: item
                                                });
                                            }
                                        });
                                    };

                                    Choices.prototype._setChoiceOrItem = function (item) {
                                        var _this = this;

                                        var itemType = (0, utils_1.getType)(item).toLowerCase();
                                        var handleType = {
                                            object: function () {
                                                if (!item.value) {
                                                    return;
                                                } // If we are dealing with a select input, we need to create an option first
                                                // that is then selected. For text inputs we can just add items normally.


                                                if (!_this._isTextElement) {
                                                    _this._addChoice({
                                                        value: item.value,
                                                        label: item.label,
                                                        isSelected: true,
                                                        isDisabled: false,
                                                        customProperties: item.customProperties,
                                                        placeholder: item.placeholder
                                                    });
                                                } else {
                                                    _this._addItem({
                                                        value: item.value,
                                                        label: item.label,
                                                        choiceId: item.id,
                                                        customProperties: item.customProperties,
                                                        placeholder: item.placeholder
                                                    });
                                                }
                                            },
                                            string: function () {
                                                if (!_this._isTextElement) {
                                                    _this._addChoice({
                                                        value: item,
                                                        label: item,
                                                        isSelected: true,
                                                        isDisabled: false
                                                    });
                                                } else {
                                                    _this._addItem({
                                                        value: item
                                                    });
                                                }
                                            }
                                        };
                                        handleType[itemType]();
                                    };

                                    Choices.prototype._findAndSelectChoiceByValue = function (value) {
                                        var _this = this;

                                        var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

                                        var foundChoice = choices.find(function (choice) {
                                            return _this.config.valueComparer(choice.value, value);
                                        });

                                        if (foundChoice && !foundChoice.selected) {
                                            this._addItem({
                                                value: foundChoice.value,
                                                label: foundChoice.label,
                                                choiceId: foundChoice.id,
                                                groupId: foundChoice.groupId,
                                                customProperties: foundChoice.customProperties,
                                                placeholder: foundChoice.placeholder,
                                                keyCode: foundChoice.keyCode
                                            });
                                        }
                                    };

                                    Choices.prototype._generatePlaceholderValue = function () {
                                        if (this._isSelectElement && this.passedElement.placeholderOption) {
                                            var placeholderOption = this.passedElement.placeholderOption;
                                            return placeholderOption ? placeholderOption.text : null;
                                        }

                                        var _a = this.config,
                                            placeholder = _a.placeholder,
                                            placeholderValue = _a.placeholderValue;
                                        var dataset = this.passedElement.element.dataset;

                                        if (placeholder) {
                                            if (placeholderValue) {
                                                return placeholderValue;
                                            }

                                            if (dataset.placeholder) {
                                                return dataset.placeholder;
                                            }
                                        }

                                        return null;
                                    };

                                    return Choices;
                                }();

                            exports["default"] = Choices;

                            /***/ }),

                        /***/ 613:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_75247__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var utils_1 = __nested_webpack_require_75247__(799);

                            var constants_1 = __nested_webpack_require_75247__(883);

                            var Container =
                                /** @class */
                                function () {
                                    function Container(_a) {
                                        var element = _a.element,
                                            type = _a.type,
                                            classNames = _a.classNames,
                                            position = _a.position;
                                        this.element = element;
                                        this.classNames = classNames;
                                        this.type = type;
                                        this.position = position;
                                        this.isOpen = false;
                                        this.isFlipped = false;
                                        this.isFocussed = false;
                                        this.isDisabled = false;
                                        this.isLoading = false;
                                        this._onFocus = this._onFocus.bind(this);
                                        this._onBlur = this._onBlur.bind(this);
                                    }

                                    Container.prototype.addEventListeners = function () {
                                        this.element.addEventListener('focus', this._onFocus);
                                        this.element.addEventListener('blur', this._onBlur);
                                    };

                                    Container.prototype.removeEventListeners = function () {
                                        this.element.removeEventListener('focus', this._onFocus);
                                        this.element.removeEventListener('blur', this._onBlur);
                                    };
                                    /**
                                     * Determine whether container should be flipped based on passed
                                     * dropdown position
                                     */


                                    Container.prototype.shouldFlip = function (dropdownPos) {
                                        if (typeof dropdownPos !== 'number') {
                                            return false;
                                        } // If flip is enabled and the dropdown bottom position is
                                        // greater than the window height flip the dropdown.


                                        var shouldFlip = false;

                                        if (this.position === 'auto') {
                                            shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
                                        } else if (this.position === 'top') {
                                            shouldFlip = true;
                                        }

                                        return shouldFlip;
                                    };

                                    Container.prototype.setActiveDescendant = function (activeDescendantID) {
                                        this.element.setAttribute('aria-activedescendant', activeDescendantID);
                                    };

                                    Container.prototype.removeActiveDescendant = function () {
                                        this.element.removeAttribute('aria-activedescendant');
                                    };

                                    Container.prototype.open = function (dropdownPos) {
                                        this.element.classList.add(this.classNames.openState);
                                        this.element.setAttribute('aria-expanded', 'true');
                                        this.isOpen = true;

                                        if (this.shouldFlip(dropdownPos)) {
                                            this.element.classList.add(this.classNames.flippedState);
                                            this.isFlipped = true;
                                        }
                                    };

                                    Container.prototype.close = function () {
                                        this.element.classList.remove(this.classNames.openState);
                                        this.element.setAttribute('aria-expanded', 'false');
                                        this.removeActiveDescendant();
                                        this.isOpen = false; // A dropdown flips if it does not have space within the page

                                        if (this.isFlipped) {
                                            this.element.classList.remove(this.classNames.flippedState);
                                            this.isFlipped = false;
                                        }
                                    };

                                    Container.prototype.focus = function () {
                                        if (!this.isFocussed) {
                                            this.element.focus();
                                        }
                                    };

                                    Container.prototype.addFocusState = function () {
                                        this.element.classList.add(this.classNames.focusState);
                                    };

                                    Container.prototype.removeFocusState = function () {
                                        this.element.classList.remove(this.classNames.focusState);
                                    };

                                    Container.prototype.enable = function () {
                                        this.element.classList.remove(this.classNames.disabledState);
                                        this.element.removeAttribute('aria-disabled');

                                        if (this.type === constants_1.SELECT_ONE_TYPE) {
                                            this.element.setAttribute('tabindex', '0');
                                        }

                                        this.isDisabled = false;
                                    };

                                    Container.prototype.disable = function () {
                                        this.element.classList.add(this.classNames.disabledState);
                                        this.element.setAttribute('aria-disabled', 'true');

                                        if (this.type === constants_1.SELECT_ONE_TYPE) {
                                            this.element.setAttribute('tabindex', '-1');
                                        }

                                        this.isDisabled = true;
                                    };

                                    Container.prototype.wrap = function (element) {
                                        (0, utils_1.wrap)(element, this.element);
                                    };

                                    Container.prototype.unwrap = function (element) {
                                        if (this.element.parentNode) {
                                            // Move passed element outside this element
                                            this.element.parentNode.insertBefore(element, this.element); // Remove this element

                                            this.element.parentNode.removeChild(this.element);
                                        }
                                    };

                                    Container.prototype.addLoadingState = function () {
                                        this.element.classList.add(this.classNames.loadingState);
                                        this.element.setAttribute('aria-busy', 'true');
                                        this.isLoading = true;
                                    };

                                    Container.prototype.removeLoadingState = function () {
                                        this.element.classList.remove(this.classNames.loadingState);
                                        this.element.removeAttribute('aria-busy');
                                        this.isLoading = false;
                                    };

                                    Container.prototype._onFocus = function () {
                                        this.isFocussed = true;
                                    };

                                    Container.prototype._onBlur = function () {
                                        this.isFocussed = false;
                                    };

                                    return Container;
                                }();

                            exports["default"] = Container;

                            /***/ }),

                        /***/ 217:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var Dropdown =
                                /** @class */
                                function () {
                                    function Dropdown(_a) {
                                        var element = _a.element,
                                            type = _a.type,
                                            classNames = _a.classNames;
                                        this.element = element;
                                        this.classNames = classNames;
                                        this.type = type;
                                        this.isActive = false;
                                    }

                                    Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                                        /**
                                         * Bottom position of dropdown in viewport coordinates
                                         */
                                        get: function () {
                                            return this.element.getBoundingClientRect().bottom;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });

                                    Dropdown.prototype.getChild = function (selector) {
                                        return this.element.querySelector(selector);
                                    };
                                    /**
                                     * Show dropdown to user by adding active state class
                                     */


                                    Dropdown.prototype.show = function () {
                                        this.element.classList.add(this.classNames.activeState);
                                        this.element.setAttribute('aria-expanded', 'true');
                                        this.isActive = true;
                                        return this;
                                    };
                                    /**
                                     * Hide dropdown from user
                                     */


                                    Dropdown.prototype.hide = function () {
                                        this.element.classList.remove(this.classNames.activeState);
                                        this.element.setAttribute('aria-expanded', 'false');
                                        this.isActive = false;
                                        return this;
                                    };

                                    return Dropdown;
                                }();

                            exports["default"] = Dropdown;

                            /***/ }),

                        /***/ 520:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_81463__) {



                            var __importDefault = this && this.__importDefault || function (mod) {
                                return mod && mod.__esModule ? mod : {
                                    "default": mod
                                };
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;

                            var dropdown_1 = __importDefault(__nested_webpack_require_81463__(217));

                            exports.Dropdown = dropdown_1.default;

                            var container_1 = __importDefault(__nested_webpack_require_81463__(613));

                            exports.Container = container_1.default;

                            var input_1 = __importDefault(__nested_webpack_require_81463__(11));

                            exports.Input = input_1.default;

                            var list_1 = __importDefault(__nested_webpack_require_81463__(624));

                            exports.List = list_1.default;

                            var wrapped_input_1 = __importDefault(__nested_webpack_require_81463__(541));

                            exports.WrappedInput = wrapped_input_1.default;

                            var wrapped_select_1 = __importDefault(__nested_webpack_require_81463__(982));

                            exports.WrappedSelect = wrapped_select_1.default;

                            /***/ }),

                        /***/ 11:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_82511__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var utils_1 = __nested_webpack_require_82511__(799);

                            var constants_1 = __nested_webpack_require_82511__(883);

                            var Input =
                                /** @class */
                                function () {
                                    function Input(_a) {
                                        var element = _a.element,
                                            type = _a.type,
                                            classNames = _a.classNames,
                                            preventPaste = _a.preventPaste;
                                        this.element = element;
                                        this.type = type;
                                        this.classNames = classNames;
                                        this.preventPaste = preventPaste;
                                        this.isFocussed = this.element.isEqualNode(document.activeElement);
                                        this.isDisabled = element.disabled;
                                        this._onPaste = this._onPaste.bind(this);
                                        this._onInput = this._onInput.bind(this);
                                        this._onFocus = this._onFocus.bind(this);
                                        this._onBlur = this._onBlur.bind(this);
                                    }

                                    Object.defineProperty(Input.prototype, "placeholder", {
                                        set: function (placeholder) {
                                            this.element.placeholder = placeholder;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Input.prototype, "value", {
                                        get: function () {
                                            return (0, utils_1.sanitise)(this.element.value);
                                        },
                                        set: function (value) {
                                            this.element.value = value;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Input.prototype, "rawValue", {
                                        get: function () {
                                            return this.element.value;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });

                                    Input.prototype.addEventListeners = function () {
                                        this.element.addEventListener('paste', this._onPaste);
                                        this.element.addEventListener('input', this._onInput, {
                                            passive: true
                                        });
                                        this.element.addEventListener('focus', this._onFocus, {
                                            passive: true
                                        });
                                        this.element.addEventListener('blur', this._onBlur, {
                                            passive: true
                                        });
                                    };

                                    Input.prototype.removeEventListeners = function () {
                                        this.element.removeEventListener('input', this._onInput);
                                        this.element.removeEventListener('paste', this._onPaste);
                                        this.element.removeEventListener('focus', this._onFocus);
                                        this.element.removeEventListener('blur', this._onBlur);
                                    };

                                    Input.prototype.enable = function () {
                                        this.element.removeAttribute('disabled');
                                        this.isDisabled = false;
                                    };

                                    Input.prototype.disable = function () {
                                        this.element.setAttribute('disabled', '');
                                        this.isDisabled = true;
                                    };

                                    Input.prototype.focus = function () {
                                        if (!this.isFocussed) {
                                            this.element.focus();
                                        }
                                    };

                                    Input.prototype.blur = function () {
                                        if (this.isFocussed) {
                                            this.element.blur();
                                        }
                                    };

                                    Input.prototype.clear = function (setWidth) {
                                        if (setWidth === void 0) {
                                            setWidth = true;
                                        }

                                        if (this.element.value) {
                                            this.element.value = '';
                                        }

                                        if (setWidth) {
                                            this.setWidth();
                                        }

                                        return this;
                                    };
                                    /**
                                     * Set the correct input width based on placeholder
                                     * value or input value
                                     */


                                    Input.prototype.setWidth = function () {
                                        // Resize input to contents or placeholder
                                        var _a = this.element,
                                            style = _a.style,
                                            value = _a.value,
                                            placeholder = _a.placeholder;
                                        style.minWidth = "".concat(placeholder.length + 1, "ch");
                                        style.width = "".concat(value.length + 1, "ch");
                                    };

                                    Input.prototype.setActiveDescendant = function (activeDescendantID) {
                                        this.element.setAttribute('aria-activedescendant', activeDescendantID);
                                    };

                                    Input.prototype.removeActiveDescendant = function () {
                                        this.element.removeAttribute('aria-activedescendant');
                                    };

                                    Input.prototype._onInput = function () {
                                        if (this.type !== constants_1.SELECT_ONE_TYPE) {
                                            this.setWidth();
                                        }
                                    };

                                    Input.prototype._onPaste = function (event) {
                                        if (this.preventPaste) {
                                            event.preventDefault();
                                        }
                                    };

                                    Input.prototype._onFocus = function () {
                                        this.isFocussed = true;
                                    };

                                    Input.prototype._onBlur = function () {
                                        this.isFocussed = false;
                                    };

                                    return Input;
                                }();

                            exports["default"] = Input;

                            /***/ }),

                        /***/ 624:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_86550__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var constants_1 = __nested_webpack_require_86550__(883);

                            var List =
                                /** @class */
                                function () {
                                    function List(_a) {
                                        var element = _a.element;
                                        this.element = element;
                                        this.scrollPos = this.element.scrollTop;
                                        this.height = this.element.offsetHeight;
                                    }

                                    List.prototype.clear = function () {
                                        this.element.innerHTML = '';
                                    };

                                    List.prototype.append = function (node) {
                                        this.element.appendChild(node);
                                    };

                                    List.prototype.getChild = function (selector) {
                                        return this.element.querySelector(selector);
                                    };

                                    List.prototype.hasChildren = function () {
                                        return this.element.hasChildNodes();
                                    };

                                    List.prototype.scrollToTop = function () {
                                        this.element.scrollTop = 0;
                                    };

                                    List.prototype.scrollToChildElement = function (element, direction) {
                                        var _this = this;

                                        if (!element) {
                                            return;
                                        }

                                        var listHeight = this.element.offsetHeight; // Scroll position of dropdown

                                        var listScrollPosition = this.element.scrollTop + listHeight;
                                        var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

                                        var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

                                        var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                                        requestAnimationFrame(function () {
                                            _this._animateScroll(destination, direction);
                                        });
                                    };

                                    List.prototype._scrollDown = function (scrollPos, strength, destination) {
                                        var easing = (destination - scrollPos) / strength;
                                        var distance = easing > 1 ? easing : 1;
                                        this.element.scrollTop = scrollPos + distance;
                                    };

                                    List.prototype._scrollUp = function (scrollPos, strength, destination) {
                                        var easing = (scrollPos - destination) / strength;
                                        var distance = easing > 1 ? easing : 1;
                                        this.element.scrollTop = scrollPos - distance;
                                    };

                                    List.prototype._animateScroll = function (destination, direction) {
                                        var _this = this;

                                        var strength = constants_1.SCROLLING_SPEED;
                                        var choiceListScrollTop = this.element.scrollTop;
                                        var continueAnimation = false;

                                        if (direction > 0) {
                                            this._scrollDown(choiceListScrollTop, strength, destination);

                                            if (choiceListScrollTop < destination) {
                                                continueAnimation = true;
                                            }
                                        } else {
                                            this._scrollUp(choiceListScrollTop, strength, destination);

                                            if (choiceListScrollTop > destination) {
                                                continueAnimation = true;
                                            }
                                        }

                                        if (continueAnimation) {
                                            requestAnimationFrame(function () {
                                                _this._animateScroll(destination, direction);
                                            });
                                        }
                                    };

                                    return List;
                                }();

                            exports["default"] = List;

                            /***/ }),

                        /***/ 730:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_89383__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var utils_1 = __nested_webpack_require_89383__(799);

                            var WrappedElement =
                                /** @class */
                                function () {
                                    function WrappedElement(_a) {
                                        var element = _a.element,
                                            classNames = _a.classNames;
                                        this.element = element;
                                        this.classNames = classNames;

                                        if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
                                            throw new TypeError('Invalid element passed');
                                        }

                                        this.isDisabled = false;
                                    }

                                    Object.defineProperty(WrappedElement.prototype, "isActive", {
                                        get: function () {
                                            return this.element.dataset.choice === 'active';
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(WrappedElement.prototype, "dir", {
                                        get: function () {
                                            return this.element.dir;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(WrappedElement.prototype, "value", {
                                        get: function () {
                                            return this.element.value;
                                        },
                                        set: function (value) {
                                            // you must define setter here otherwise it will be readonly property
                                            this.element.value = value;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });

                                    WrappedElement.prototype.conceal = function () {
                                        // Hide passed input
                                        this.element.classList.add(this.classNames.input);
                                        this.element.hidden = true; // Remove element from tab index

                                        this.element.tabIndex = -1; // Backup original styles if any

                                        var origStyle = this.element.getAttribute('style');

                                        if (origStyle) {
                                            this.element.setAttribute('data-choice-orig-style', origStyle);
                                        }

                                        this.element.setAttribute('data-choice', 'active');
                                    };

                                    WrappedElement.prototype.reveal = function () {
                                        // Reinstate passed element
                                        this.element.classList.remove(this.classNames.input);
                                        this.element.hidden = false;
                                        this.element.removeAttribute('tabindex'); // Recover original styles if any

                                        var origStyle = this.element.getAttribute('data-choice-orig-style');

                                        if (origStyle) {
                                            this.element.removeAttribute('data-choice-orig-style');
                                            this.element.setAttribute('style', origStyle);
                                        } else {
                                            this.element.removeAttribute('style');
                                        }

                                        this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
                                        // @todo Figure out why we need to do this

                                        this.element.value = this.element.value; // eslint-disable-line no-self-assign
                                    };

                                    WrappedElement.prototype.enable = function () {
                                        this.element.removeAttribute('disabled');
                                        this.element.disabled = false;
                                        this.isDisabled = false;
                                    };

                                    WrappedElement.prototype.disable = function () {
                                        this.element.setAttribute('disabled', '');
                                        this.element.disabled = true;
                                        this.isDisabled = true;
                                    };

                                    WrappedElement.prototype.triggerEvent = function (eventType, data) {
                                        (0, utils_1.dispatchEvent)(this.element, eventType, data);
                                    };

                                    return WrappedElement;
                                }();

                            exports["default"] = WrappedElement;

                            /***/ }),

                        /***/ 541:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_92462__) {



                            var __extends = this && this.__extends || function () {
                                var extendStatics = function (d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function (d, b) {
                                        d.__proto__ = b;
                                    } || function (d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };

                                    return extendStatics(d, b);
                                };

                                return function (d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);

                                    function __() {
                                        this.constructor = d;
                                    }

                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                                };
                            }();

                            var __importDefault = this && this.__importDefault || function (mod) {
                                return mod && mod.__esModule ? mod : {
                                    "default": mod
                                };
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var wrapped_element_1 = __importDefault(__nested_webpack_require_92462__(730));

                            var WrappedInput =
                                /** @class */
                                function (_super) {
                                    __extends(WrappedInput, _super);

                                    function WrappedInput(_a) {
                                        var element = _a.element,
                                            classNames = _a.classNames,
                                            delimiter = _a.delimiter;

                                        var _this = _super.call(this, {
                                            element: element,
                                            classNames: classNames
                                        }) || this;

                                        _this.delimiter = delimiter;
                                        return _this;
                                    }

                                    Object.defineProperty(WrappedInput.prototype, "value", {
                                        get: function () {
                                            return this.element.value;
                                        },
                                        set: function (value) {
                                            this.element.setAttribute('value', value);
                                            this.element.value = value;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    return WrappedInput;
                                }(wrapped_element_1.default);

                            exports["default"] = WrappedInput;

                            /***/ }),

                        /***/ 982:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_94334__) {



                            var __extends = this && this.__extends || function () {
                                var extendStatics = function (d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function (d, b) {
                                        d.__proto__ = b;
                                    } || function (d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };

                                    return extendStatics(d, b);
                                };

                                return function (d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);

                                    function __() {
                                        this.constructor = d;
                                    }

                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                                };
                            }();

                            var __importDefault = this && this.__importDefault || function (mod) {
                                return mod && mod.__esModule ? mod : {
                                    "default": mod
                                };
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            var wrapped_element_1 = __importDefault(__nested_webpack_require_94334__(730));

                            var WrappedSelect =
                                /** @class */
                                function (_super) {
                                    __extends(WrappedSelect, _super);

                                    function WrappedSelect(_a) {
                                        var element = _a.element,
                                            classNames = _a.classNames,
                                            template = _a.template;

                                        var _this = _super.call(this, {
                                            element: element,
                                            classNames: classNames
                                        }) || this;

                                        _this.template = template;
                                        return _this;
                                    }

                                    Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                                        get: function () {
                                            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                                                this.element.querySelector('option[placeholder]');
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                                        get: function () {
                                            return Array.from(this.element.getElementsByTagName('OPTGROUP'));
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(WrappedSelect.prototype, "options", {
                                        get: function () {
                                            return Array.from(this.element.options);
                                        },
                                        set: function (options) {
                                            var _this = this;

                                            var fragment = document.createDocumentFragment();

                                            var addOptionToFragment = function (data) {
                                                // Create a standard select option
                                                var option = _this.template(data); // Append it to fragment


                                                fragment.appendChild(option);
                                            }; // Add each list item to list


                                            options.forEach(function (optionData) {
                                                return addOptionToFragment(optionData);
                                            });
                                            this.appendDocFragment(fragment);
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });

                                    WrappedSelect.prototype.appendDocFragment = function (fragment) {
                                        this.element.innerHTML = '';
                                        this.element.appendChild(fragment);
                                    };

                                    return WrappedSelect;
                                }(wrapped_element_1.default);

                            exports["default"] = WrappedSelect;

                            /***/ }),

                        /***/ 883:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                            exports.EVENTS = {
                                showDropdown: 'showDropdown',
                                hideDropdown: 'hideDropdown',
                                change: 'change',
                                choice: 'choice',
                                search: 'search',
                                addItem: 'addItem',
                                removeItem: 'removeItem',
                                highlightItem: 'highlightItem',
                                highlightChoice: 'highlightChoice',
                                unhighlightItem: 'unhighlightItem'
                            };
                            exports.ACTION_TYPES = {
                                ADD_CHOICE: 'ADD_CHOICE',
                                FILTER_CHOICES: 'FILTER_CHOICES',
                                ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
                                CLEAR_CHOICES: 'CLEAR_CHOICES',
                                ADD_GROUP: 'ADD_GROUP',
                                ADD_ITEM: 'ADD_ITEM',
                                REMOVE_ITEM: 'REMOVE_ITEM',
                                HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
                                CLEAR_ALL: 'CLEAR_ALL',
                                RESET_TO: 'RESET_TO',
                                SET_IS_LOADING: 'SET_IS_LOADING'
                            };
                            exports.KEY_CODES = {
                                BACK_KEY: 46,
                                DELETE_KEY: 8,
                                ENTER_KEY: 13,
                                A_KEY: 65,
                                ESC_KEY: 27,
                                UP_KEY: 38,
                                DOWN_KEY: 40,
                                PAGE_UP_KEY: 33,
                                PAGE_DOWN_KEY: 34
                            };
                            exports.TEXT_TYPE = 'text';
                            exports.SELECT_ONE_TYPE = 'select-one';
                            exports.SELECT_MULTIPLE_TYPE = 'select-multiple';
                            exports.SCROLLING_SPEED = 4;

                            /***/ }),

                        /***/ 789:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_98665__) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;

                            var utils_1 = __nested_webpack_require_98665__(799);

                            exports.DEFAULT_CLASSNAMES = {
                                containerOuter: 'choices',
                                containerInner: 'choices__inner',
                                input: 'choices__input',
                                inputCloned: 'choices__input--cloned',
                                list: 'choices__list',
                                listItems: 'choices__list--multiple',
                                listSingle: 'choices__list--single',
                                listDropdown: 'choices__list--dropdown',
                                item: 'choices__item',
                                itemSelectable: 'choices__item--selectable',
                                itemDisabled: 'choices__item--disabled',
                                itemChoice: 'choices__item--choice',
                                placeholder: 'choices__placeholder',
                                group: 'choices__group',
                                groupHeading: 'choices__heading',
                                button: 'choices__button',
                                activeState: 'is-active',
                                focusState: 'is-focused',
                                openState: 'is-open',
                                disabledState: 'is-disabled',
                                highlightedState: 'is-highlighted',
                                selectedState: 'is-selected',
                                flippedState: 'is-flipped',
                                loadingState: 'is-loading',
                                noResults: 'has-no-results',
                                noChoices: 'has-no-choices'
                            };
                            exports.DEFAULT_CONFIG = {
                                items: [],
                                choices: [],
                                silent: false,
                                renderChoiceLimit: -1,
                                maxItemCount: -1,
                                addItems: true,
                                addItemFilter: null,
                                removeItems: true,
                                removeItemButton: false,
                                editItems: false,
                                allowHTML: true,
                                duplicateItemsAllowed: true,
                                delimiter: ',',
                                paste: true,
                                searchEnabled: true,
                                searchChoices: true,
                                searchFloor: 1,
                                searchResultLimit: 4,
                                searchFields: ['label', 'value'],
                                position: 'auto',
                                resetScrollPosition: true,
                                shouldSort: true,
                                shouldSortItems: false,
                                sorter: utils_1.sortByAlpha,
                                placeholder: true,
                                placeholderValue: null,
                                searchPlaceholderValue: null,
                                prependValue: null,
                                appendValue: null,
                                renderSelectedChoices: 'auto',
                                loadingText: 'Loading...',
                                noResultsText: 'No results found',
                                noChoicesText: 'No choices to choose from',
                                itemSelectText: 'Press to select',
                                uniqueItemText: 'Only unique values can be added',
                                customAddItemText: 'Only values matching specific conditions can be added',
                                addItemText: function (value) {
                                    return "Press Enter to add <b>\"".concat((0, utils_1.sanitise)(value), "\"</b>");
                                },
                                maxItemText: function (maxItemCount) {
                                    return "Only ".concat(maxItemCount, " values can be added");
                                },
                                valueComparer: function (value1, value2) {
                                    return value1 === value2;
                                },
                                fuseOptions: {
                                    includeScore: true
                                },
                                labelId: '',
                                callbackOnInit: null,
                                callbackOnCreateTemplates: null,
                                classNames: exports.DEFAULT_CLASSNAMES
                            };

                            /***/ }),

                        /***/ 18:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 978:
                        /***/ (function(__unused_webpack_module, exports) {


                            /* eslint-disable @typescript-eslint/no-explicit-any */

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 948:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 359:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 285:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 533:
                        /***/ (function(__unused_webpack_module, exports) {


                            /* eslint-disable @typescript-eslint/no-explicit-any */

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 187:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_102291__) {



                            var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
                                if (k2 === undefined) k2 = k;
                                Object.defineProperty(o, k2, {
                                    enumerable: true,
                                    get: function () {
                                        return m[k];
                                    }
                                });
                            } : function (o, m, k, k2) {
                                if (k2 === undefined) k2 = k;
                                o[k2] = m[k];
                            });

                            var __exportStar = this && this.__exportStar || function (m, exports) {
                                for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            __exportStar(__nested_webpack_require_102291__(18), exports);

                            __exportStar(__nested_webpack_require_102291__(978), exports);

                            __exportStar(__nested_webpack_require_102291__(948), exports);

                            __exportStar(__nested_webpack_require_102291__(359), exports);

                            __exportStar(__nested_webpack_require_102291__(285), exports);

                            __exportStar(__nested_webpack_require_102291__(533), exports);

                            __exportStar(__nested_webpack_require_102291__(287), exports);

                            __exportStar(__nested_webpack_require_102291__(132), exports);

                            __exportStar(__nested_webpack_require_102291__(837), exports);

                            __exportStar(__nested_webpack_require_102291__(598), exports);

                            __exportStar(__nested_webpack_require_102291__(369), exports);

                            __exportStar(__nested_webpack_require_102291__(37), exports);

                            __exportStar(__nested_webpack_require_102291__(47), exports);

                            __exportStar(__nested_webpack_require_102291__(923), exports);

                            __exportStar(__nested_webpack_require_102291__(876), exports);

                            /***/ }),

                        /***/ 287:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 132:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 837:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 598:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 37:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 369:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 47:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 923:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 876:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));

                            /***/ }),

                        /***/ 799:
                        /***/ (function(__unused_webpack_module, exports) {


                            /* eslint-disable @typescript-eslint/no-explicit-any */

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;

                            var getRandomNumber = function (min, max) {
                                return Math.floor(Math.random() * (max - min) + min);
                            };

                            exports.getRandomNumber = getRandomNumber;

                            var generateChars = function (length) {
                                return Array.from({
                                    length: length
                                }, function () {
                                    return (0, exports.getRandomNumber)(0, 36).toString(36);
                                }).join('');
                            };

                            exports.generateChars = generateChars;

                            var generateId = function (element, prefix) {
                                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
                                id = id.replace(/(:|\.|\[|\]|,)/g, '');
                                id = "".concat(prefix, "-").concat(id);
                                return id;
                            };

                            exports.generateId = generateId;

                            var getType = function (obj) {
                                return Object.prototype.toString.call(obj).slice(8, -1);
                            };

                            exports.getType = getType;

                            var isType = function (type, obj) {
                                return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
                            };

                            exports.isType = isType;

                            var wrap = function (element, wrapper) {
                                if (wrapper === void 0) {
                                    wrapper = document.createElement('div');
                                }

                                if (element.parentNode) {
                                    if (element.nextSibling) {
                                        element.parentNode.insertBefore(wrapper, element.nextSibling);
                                    } else {
                                        element.parentNode.appendChild(wrapper);
                                    }
                                }

                                return wrapper.appendChild(element);
                            };

                            exports.wrap = wrap;

                            var getAdjacentEl = function (startEl, selector, direction) {
                                if (direction === void 0) {
                                    direction = 1;
                                }

                                var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
                                var sibling = startEl[prop];

                                while (sibling) {
                                    if (sibling.matches(selector)) {
                                        return sibling;
                                    }

                                    sibling = sibling[prop];
                                }

                                return sibling;
                            };

                            exports.getAdjacentEl = getAdjacentEl;

                            var isScrolledIntoView = function (element, parent, direction) {
                                if (direction === void 0) {
                                    direction = 1;
                                }

                                if (!element) {
                                    return false;
                                }

                                var isVisible;

                                if (direction > 0) {
                                    // In view from bottom
                                    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                                } else {
                                    // In view from top
                                    isVisible = element.offsetTop >= parent.scrollTop;
                                }

                                return isVisible;
                            };

                            exports.isScrolledIntoView = isScrolledIntoView;

                            var sanitise = function (value) {
                                if (typeof value !== 'string') {
                                    return value;
                                }

                                return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
                            };

                            exports.sanitise = sanitise;

                            exports.strToEl = function () {
                                var tmpEl = document.createElement('div');
                                return function (str) {
                                    var cleanedInput = str.trim();
                                    tmpEl.innerHTML = cleanedInput;
                                    var firldChild = tmpEl.children[0];

                                    while (tmpEl.firstChild) {
                                        tmpEl.removeChild(tmpEl.firstChild);
                                    }

                                    return firldChild;
                                };
                            }();

                            var sortByAlpha = function (_a, _b) {
                                var value = _a.value,
                                    _c = _a.label,
                                    label = _c === void 0 ? value : _c;
                                var value2 = _b.value,
                                    _d = _b.label,
                                    label2 = _d === void 0 ? value2 : _d;
                                return label.localeCompare(label2, [], {
                                    sensitivity: 'base',
                                    ignorePunctuation: true,
                                    numeric: true
                                });
                            };

                            exports.sortByAlpha = sortByAlpha;

                            var sortByScore = function (a, b) {
                                var _a = a.score,
                                    scoreA = _a === void 0 ? 0 : _a;
                                var _b = b.score,
                                    scoreB = _b === void 0 ? 0 : _b;
                                return scoreA - scoreB;
                            };

                            exports.sortByScore = sortByScore;

                            var dispatchEvent = function (element, type, customArgs) {
                                if (customArgs === void 0) {
                                    customArgs = null;
                                }

                                var event = new CustomEvent(type, {
                                    detail: customArgs,
                                    bubbles: true,
                                    cancelable: true
                                });
                                return element.dispatchEvent(event);
                            };

                            exports.dispatchEvent = dispatchEvent;

                            var existsInArray = function (array, value, key) {
                                if (key === void 0) {
                                    key = 'value';
                                }

                                return array.some(function (item) {
                                    if (typeof value === 'string') {
                                        return item[key] === value.trim();
                                    }

                                    return item[key] === value;
                                });
                            };

                            exports.existsInArray = existsInArray;

                            var cloneObject = function (obj) {
                                return JSON.parse(JSON.stringify(obj));
                            };

                            exports.cloneObject = cloneObject;
                            /**
                             * Returns an array of keys present on the first but missing on the second object
                             */

                            var diff = function (a, b) {
                                var aKeys = Object.keys(a).sort();
                                var bKeys = Object.keys(b).sort();
                                return aKeys.filter(function (i) {
                                    return bKeys.indexOf(i) < 0;
                                });
                            };

                            exports.diff = diff;

                            /***/ }),

                        /***/ 273:
                        /***/ (function(__unused_webpack_module, exports) {



                            var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
                                if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                                    if (ar || !(i in from)) {
                                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                        ar[i] = from[i];
                                    }
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.defaultState = void 0;
                            exports.defaultState = [];

                            function choices(state, action) {
                                if (state === void 0) {
                                    state = exports.defaultState;
                                }

                                if (action === void 0) {
                                    action = {};
                                }

                                switch (action.type) {
                                    case 'ADD_CHOICE':
                                    {
                                        var addChoiceAction = action;
                                        var choice = {
                                            id: addChoiceAction.id,
                                            elementId: addChoiceAction.elementId,
                                            groupId: addChoiceAction.groupId,
                                            value: addChoiceAction.value,
                                            label: addChoiceAction.label || addChoiceAction.value,
                                            disabled: addChoiceAction.disabled || false,
                                            selected: false,
                                            active: true,
                                            score: 9999,
                                            customProperties: addChoiceAction.customProperties,
                                            placeholder: addChoiceAction.placeholder || false
                                        };
                                        /*
          A disabled choice appears in the choice dropdown but cannot be selected
          A selected choice has been added to the passed input's value (added as an item)
          An active choice appears within the choice dropdown
        */

                                        return __spreadArray(__spreadArray([], state, true), [choice], false);
                                    }

                                    case 'ADD_ITEM':
                                    {
                                        var addItemAction_1 = action; // When an item is added and it has an associated choice,
                                        // we want to disable it so it can't be chosen again

                                        if (addItemAction_1.choiceId > -1) {
                                            return state.map(function (obj) {
                                                var choice = obj;

                                                if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
                                                    choice.selected = true;
                                                }

                                                return choice;
                                            });
                                        }

                                        return state;
                                    }

                                    case 'REMOVE_ITEM':
                                    {
                                        var removeItemAction_1 = action; // When an item is removed and it has an associated choice,
                                        // we want to re-enable it so it can be chosen again

                                        if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
                                            return state.map(function (obj) {
                                                var choice = obj;

                                                if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
                                                    choice.selected = false;
                                                }

                                                return choice;
                                            });
                                        }

                                        return state;
                                    }

                                    case 'FILTER_CHOICES':
                                    {
                                        var filterChoicesAction_1 = action;
                                        return state.map(function (obj) {
                                            var choice = obj; // Set active state based on whether choice is
                                            // within filtered results

                                            choice.active = filterChoicesAction_1.results.some(function (_a) {
                                                var item = _a.item,
                                                    score = _a.score;

                                                if (item.id === choice.id) {
                                                    choice.score = score;
                                                    return true;
                                                }

                                                return false;
                                            });
                                            return choice;
                                        });
                                    }

                                    case 'ACTIVATE_CHOICES':
                                    {
                                        var activateChoicesAction_1 = action;
                                        return state.map(function (obj) {
                                            var choice = obj;
                                            choice.active = activateChoicesAction_1.active;
                                            return choice;
                                        });
                                    }

                                    case 'CLEAR_CHOICES':
                                    {
                                        return exports.defaultState;
                                    }

                                    default:
                                    {
                                        return state;
                                    }
                                }
                            }

                            exports["default"] = choices;

                            /***/ }),

                        /***/ 871:
                        /***/ (function(__unused_webpack_module, exports) {



                            var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
                                if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                                    if (ar || !(i in from)) {
                                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                        ar[i] = from[i];
                                    }
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.defaultState = void 0;
                            exports.defaultState = [];

                            function groups(state, action) {
                                if (state === void 0) {
                                    state = exports.defaultState;
                                }

                                if (action === void 0) {
                                    action = {};
                                }

                                switch (action.type) {
                                    case 'ADD_GROUP':
                                    {
                                        var addGroupAction = action;
                                        return __spreadArray(__spreadArray([], state, true), [{
                                            id: addGroupAction.id,
                                            value: addGroupAction.value,
                                            active: addGroupAction.active,
                                            disabled: addGroupAction.disabled
                                        }], false);
                                    }

                                    case 'CLEAR_CHOICES':
                                    {
                                        return [];
                                    }

                                    default:
                                    {
                                        return state;
                                    }
                                }
                            }

                            exports["default"] = groups;

                            /***/ }),

                        /***/ 655:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_114973__) {



                            var __importDefault = this && this.__importDefault || function (mod) {
                                return mod && mod.__esModule ? mod : {
                                    "default": mod
                                };
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.defaultState = void 0;

                            var redux_1 = __nested_webpack_require_114973__(857);

                            var items_1 = __importDefault(__nested_webpack_require_114973__(52));

                            var groups_1 = __importDefault(__nested_webpack_require_114973__(871));

                            var choices_1 = __importDefault(__nested_webpack_require_114973__(273));

                            var loading_1 = __importDefault(__nested_webpack_require_114973__(502));

                            var utils_1 = __nested_webpack_require_114973__(799);

                            exports.defaultState = {
                                groups: [],
                                items: [],
                                choices: [],
                                loading: false
                            };
                            var appReducer = (0, redux_1.combineReducers)({
                                items: items_1.default,
                                groups: groups_1.default,
                                choices: choices_1.default,
                                loading: loading_1.default
                            });

                            var rootReducer = function (passedState, action) {
                                var state = passedState; // If we are clearing all items, groups and options we reassign
                                // state and then pass that state to our proper reducer. This isn't
                                // mutating our actual state
                                // See: http://stackoverflow.com/a/35641992

                                if (action.type === 'CLEAR_ALL') {
                                    state = exports.defaultState;
                                } else if (action.type === 'RESET_TO') {
                                    return (0, utils_1.cloneObject)(action.state);
                                }

                                return appReducer(state, action);
                            };

                            exports["default"] = rootReducer;

                            /***/ }),

                        /***/ 52:
                        /***/ (function(__unused_webpack_module, exports) {



                            var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
                                if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                                    if (ar || !(i in from)) {
                                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                        ar[i] = from[i];
                                    }
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.defaultState = void 0;
                            exports.defaultState = [];

                            function items(state, action) {
                                if (state === void 0) {
                                    state = exports.defaultState;
                                }

                                if (action === void 0) {
                                    action = {};
                                }

                                switch (action.type) {
                                    case 'ADD_ITEM':
                                    {
                                        var addItemAction = action; // Add object to items array

                                        var newState = __spreadArray(__spreadArray([], state, true), [{
                                            id: addItemAction.id,
                                            choiceId: addItemAction.choiceId,
                                            groupId: addItemAction.groupId,
                                            value: addItemAction.value,
                                            label: addItemAction.label,
                                            active: true,
                                            highlighted: false,
                                            customProperties: addItemAction.customProperties,
                                            placeholder: addItemAction.placeholder || false,
                                            keyCode: null
                                        }], false);

                                        return newState.map(function (obj) {
                                            var item = obj;
                                            item.highlighted = false;
                                            return item;
                                        });
                                    }

                                    case 'REMOVE_ITEM':
                                    {
                                        // Set item to inactive
                                        return state.map(function (obj) {
                                            var item = obj;

                                            if (item.id === action.id) {
                                                item.active = false;
                                            }

                                            return item;
                                        });
                                    }

                                    case 'HIGHLIGHT_ITEM':
                                    {
                                        var highlightItemAction_1 = action;
                                        return state.map(function (obj) {
                                            var item = obj;

                                            if (item.id === highlightItemAction_1.id) {
                                                item.highlighted = highlightItemAction_1.highlighted;
                                            }

                                            return item;
                                        });
                                    }

                                    default:
                                    {
                                        return state;
                                    }
                                }
                            }

                            exports["default"] = items;

                            /***/ }),

                        /***/ 502:
                        /***/ (function(__unused_webpack_module, exports) {



                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            exports.defaultState = void 0;
                            exports.defaultState = false;

                            var general = function (state, action) {
                                if (state === void 0) {
                                    state = exports.defaultState;
                                }

                                if (action === void 0) {
                                    action = {};
                                }

                                switch (action.type) {
                                    case 'SET_IS_LOADING':
                                    {
                                        return action.isLoading;
                                    }

                                    default:
                                    {
                                        return state;
                                    }
                                }
                            };

                            exports["default"] = general;

                            /***/ }),

                        /***/ 744:
                        /***/ (function(__unused_webpack_module, exports, __nested_webpack_require_119100__) {



                            var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
                                if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                                    if (ar || !(i in from)) {
                                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                        ar[i] = from[i];
                                    }
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };

                            var __importDefault = this && this.__importDefault || function (mod) {
                                return mod && mod.__esModule ? mod : {
                                    "default": mod
                                };
                            };

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            /* eslint-disable @typescript-eslint/no-explicit-any */

                            var redux_1 = __nested_webpack_require_119100__(857);

                            var index_1 = __importDefault(__nested_webpack_require_119100__(655));

                            var Store =
                                /** @class */
                                function () {
                                    function Store() {
                                        this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                                    }
                                    /**
                                     * Subscribe store to function call (wrapped Redux method)
                                     */


                                    Store.prototype.subscribe = function (onChange) {
                                        this._store.subscribe(onChange);
                                    };
                                    /**
                                     * Dispatch event to store (wrapped Redux method)
                                     */


                                    Store.prototype.dispatch = function (action) {
                                        this._store.dispatch(action);
                                    };

                                    Object.defineProperty(Store.prototype, "state", {
                                        /**
                                         * Get store object (wrapping Redux method)
                                         */
                                        get: function () {
                                            return this._store.getState();
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "items", {
                                        /**
                                         * Get items from store
                                         */
                                        get: function () {
                                            return this.state.items;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "activeItems", {
                                        /**
                                         * Get active items from store
                                         */
                                        get: function () {
                                            return this.items.filter(function (item) {
                                                return item.active === true;
                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                                        /**
                                         * Get highlighted items from store
                                         */
                                        get: function () {
                                            return this.items.filter(function (item) {
                                                return item.active && item.highlighted;
                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "choices", {
                                        /**
                                         * Get choices from store
                                         */
                                        get: function () {
                                            return this.state.choices;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "activeChoices", {
                                        /**
                                         * Get active choices from store
                                         */
                                        get: function () {
                                            return this.choices.filter(function (choice) {
                                                return choice.active === true;
                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "selectableChoices", {
                                        /**
                                         * Get selectable choices from store
                                         */
                                        get: function () {
                                            return this.choices.filter(function (choice) {
                                                return choice.disabled !== true;
                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "searchableChoices", {
                                        /**
                                         * Get choices that can be searched (excluding placeholders)
                                         */
                                        get: function () {
                                            return this.selectableChoices.filter(function (choice) {
                                                return choice.placeholder !== true;
                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "placeholderChoice", {
                                        /**
                                         * Get placeholder choice from store
                                         */
                                        get: function () {
                                            return __spreadArray([], this.choices, true).reverse().find(function (choice) {
                                                return choice.placeholder === true;
                                            });
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "groups", {
                                        /**
                                         * Get groups from store
                                         */
                                        get: function () {
                                            return this.state.groups;
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    Object.defineProperty(Store.prototype, "activeGroups", {
                                        /**
                                         * Get active groups from store
                                         */
                                        get: function () {
                                            var _a = this,
                                                groups = _a.groups,
                                                choices = _a.choices;

                                            return groups.filter(function (group) {
                                                var isActive = group.active === true && group.disabled === false;
                                                var hasActiveOptions = choices.some(function (choice) {
                                                    return choice.active === true && choice.disabled === false;
                                                });
                                                return isActive && hasActiveOptions;
                                            }, []);
                                        },
                                        enumerable: false,
                                        configurable: true
                                    });
                                    /**
                                     * Get loading state from store
                                     */

                                    Store.prototype.isLoading = function () {
                                        return this.state.loading;
                                    };
                                    /**
                                     * Get single choice by it's ID
                                     */


                                    Store.prototype.getChoiceById = function (id) {
                                        return this.activeChoices.find(function (choice) {
                                            return choice.id === parseInt(id, 10);
                                        });
                                    };
                                    /**
                                     * Get group by group id
                                     */


                                    Store.prototype.getGroupById = function (id) {
                                        return this.groups.find(function (group) {
                                            return group.id === id;
                                        });
                                    };

                                    return Store;
                                }();

                            exports["default"] = Store;

                            /***/ }),

                        /***/ 686:
                        /***/ (function(__unused_webpack_module, exports) {


                            /**
                             * Helpers to create HTML elements used by Choices
                             * Can be overridden by providing `callbackOnCreateTemplates` option
                             */

                            Object.defineProperty(exports, "__esModule", ({
                                value: true
                            }));
                            var templates = {
                                containerOuter: function (_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                                    var containerOuter = _a.classNames.containerOuter;
                                    var div = Object.assign(document.createElement('div'), {
                                        className: containerOuter
                                    });
                                    div.dataset.type = passedElementType;

                                    if (dir) {
                                        div.dir = dir;
                                    }

                                    if (isSelectOneElement) {
                                        div.tabIndex = 0;
                                    }

                                    if (isSelectElement) {
                                        div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

                                        if (searchEnabled) {
                                            div.setAttribute('aria-autocomplete', 'list');
                                        }
                                    }

                                    div.setAttribute('aria-haspopup', 'true');
                                    div.setAttribute('aria-expanded', 'false');

                                    if (labelId) {
                                        div.setAttribute('aria-labeledby', labelId);
                                    }

                                    return div;
                                },
                                containerInner: function (_a) {
                                    var containerInner = _a.classNames.containerInner;
                                    return Object.assign(document.createElement('div'), {
                                        className: containerInner
                                    });
                                },
                                itemList: function (_a, isSelectOneElement) {
                                    var _b = _a.classNames,
                                        list = _b.list,
                                        listSingle = _b.listSingle,
                                        listItems = _b.listItems;
                                    return Object.assign(document.createElement('div'), {
                                        className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                                    });
                                },
                                placeholder: function (_a, value) {
                                    var _b;

                                    var allowHTML = _a.allowHTML,
                                        placeholder = _a.classNames.placeholder;
                                    return Object.assign(document.createElement('div'), (_b = {
                                        className: placeholder
                                    }, _b[allowHTML ? 'innerHTML' : 'innerText'] = value, _b));
                                },
                                item: function (_a, _b, removeItemButton) {
                                    var _c, _d;

                                    var allowHTML = _a.allowHTML,
                                        _e = _a.classNames,
                                        item = _e.item,
                                        button = _e.button,
                                        highlightedState = _e.highlightedState,
                                        itemSelectable = _e.itemSelectable,
                                        placeholder = _e.placeholder;
                                    var id = _b.id,
                                        value = _b.value,
                                        label = _b.label,
                                        customProperties = _b.customProperties,
                                        active = _b.active,
                                        disabled = _b.disabled,
                                        highlighted = _b.highlighted,
                                        isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement('div'), (_c = {
                                        className: item
                                    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c));
                                    Object.assign(div.dataset, {
                                        item: '',
                                        id: id,
                                        value: value,
                                        customProperties: customProperties
                                    });

                                    if (active) {
                                        div.setAttribute('aria-selected', 'true');
                                    }

                                    if (disabled) {
                                        div.setAttribute('aria-disabled', 'true');
                                    }

                                    if (isPlaceholder) {
                                        div.classList.add(placeholder);
                                    }

                                    div.classList.add(highlighted ? highlightedState : itemSelectable);

                                    if (removeItemButton) {
                                        if (disabled) {
                                            div.classList.remove(itemSelectable);
                                        }

                                        div.dataset.deletable = '';
                                        /** @todo This MUST be localizable, not hardcoded! */

                                        var REMOVE_ITEM_TEXT = 'Remove item';
                                        var removeButton = Object.assign(document.createElement('button'), (_d = {
                                            type: 'button',
                                            className: button
                                        }, _d[allowHTML ? 'innerHTML' : 'innerText'] = REMOVE_ITEM_TEXT, _d));
                                        removeButton.setAttribute('aria-label', "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                                        removeButton.dataset.button = '';
                                        div.appendChild(removeButton);
                                    }

                                    return div;
                                },
                                choiceList: function (_a, isSelectOneElement) {
                                    var list = _a.classNames.list;
                                    var div = Object.assign(document.createElement('div'), {
                                        className: list
                                    });

                                    if (!isSelectOneElement) {
                                        div.setAttribute('aria-multiselectable', 'true');
                                    }

                                    div.setAttribute('role', 'listbox');
                                    return div;
                                },
                                choiceGroup: function (_a, _b) {
                                    var _c;

                                    var allowHTML = _a.allowHTML,
                                        _d = _a.classNames,
                                        group = _d.group,
                                        groupHeading = _d.groupHeading,
                                        itemDisabled = _d.itemDisabled;
                                    var id = _b.id,
                                        value = _b.value,
                                        disabled = _b.disabled;
                                    var div = Object.assign(document.createElement('div'), {
                                        className: "".concat(group, " ").concat(disabled ? itemDisabled : '')
                                    });
                                    div.setAttribute('role', 'group');
                                    Object.assign(div.dataset, {
                                        group: '',
                                        id: id,
                                        value: value
                                    });

                                    if (disabled) {
                                        div.setAttribute('aria-disabled', 'true');
                                    }

                                    div.appendChild(Object.assign(document.createElement('div'), (_c = {
                                        className: groupHeading
                                    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = value, _c)));
                                    return div;
                                },
                                choice: function (_a, _b, selectText) {
                                    var _c;

                                    var allowHTML = _a.allowHTML,
                                        _d = _a.classNames,
                                        item = _d.item,
                                        itemChoice = _d.itemChoice,
                                        itemSelectable = _d.itemSelectable,
                                        selectedState = _d.selectedState,
                                        itemDisabled = _d.itemDisabled,
                                        placeholder = _d.placeholder;
                                    var id = _b.id,
                                        value = _b.value,
                                        label = _b.label,
                                        groupId = _b.groupId,
                                        elementId = _b.elementId,
                                        isDisabled = _b.disabled,
                                        isSelected = _b.selected,
                                        isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement('div'), (_c = {
                                        id: elementId
                                    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));

                                    if (isSelected) {
                                        div.classList.add(selectedState);
                                    }

                                    if (isPlaceholder) {
                                        div.classList.add(placeholder);
                                    }

                                    div.setAttribute('role', groupId && groupId > 0 ? 'treeitem' : 'option');
                                    Object.assign(div.dataset, {
                                        choice: '',
                                        id: id,
                                        value: value,
                                        selectText: selectText
                                    });

                                    if (isDisabled) {
                                        div.classList.add(itemDisabled);
                                        div.dataset.choiceDisabled = '';
                                        div.setAttribute('aria-disabled', 'true');
                                    } else {
                                        div.classList.add(itemSelectable);
                                        div.dataset.choiceSelectable = '';
                                    }

                                    return div;
                                },
                                input: function (_a, placeholderValue) {
                                    var _b = _a.classNames,
                                        input = _b.input,
                                        inputCloned = _b.inputCloned;
                                    var inp = Object.assign(document.createElement('input'), {
                                        type: 'search',
                                        name: 'search_terms',
                                        className: "".concat(input, " ").concat(inputCloned),
                                        autocomplete: 'off',
                                        autocapitalize: 'off',
                                        spellcheck: false
                                    });
                                    inp.setAttribute('role', 'textbox');
                                    inp.setAttribute('aria-autocomplete', 'list');
                                    inp.setAttribute('aria-label', placeholderValue);
                                    return inp;
                                },
                                dropdown: function (_a) {
                                    var _b = _a.classNames,
                                        list = _b.list,
                                        listDropdown = _b.listDropdown;
                                    var div = document.createElement('div');
                                    div.classList.add(list, listDropdown);
                                    div.setAttribute('aria-expanded', 'false');
                                    return div;
                                },
                                notice: function (_a, innerText, type) {
                                    var _b;

                                    var allowHTML = _a.allowHTML,
                                        _c = _a.classNames,
                                        item = _c.item,
                                        itemChoice = _c.itemChoice,
                                        noResults = _c.noResults,
                                        noChoices = _c.noChoices;

                                    if (type === void 0) {
                                        type = '';
                                    }

                                    var classes = [item, itemChoice];

                                    if (type === 'no-choices') {
                                        classes.push(noChoices);
                                    } else if (type === 'no-results') {
                                        classes.push(noResults);
                                    }

                                    return Object.assign(document.createElement('div'), (_b = {}, _b[allowHTML ? 'innerHTML' : 'innerText'] = innerText, _b.className = classes.join(' '), _b));
                                },
                                option: function (_a) {
                                    var label = _a.label,
                                        value = _a.value,
                                        customProperties = _a.customProperties,
                                        active = _a.active,
                                        disabled = _a.disabled;
                                    var opt = new Option(label, value, false, active);

                                    if (customProperties) {
                                        opt.dataset.customProperties = "".concat(customProperties);
                                    }

                                    opt.disabled = !!disabled;
                                    return opt;
                                }
                            };
                            exports["default"] = templates;

                            /***/ }),

                        /***/ 996:
                        /***/ (function(module) {



                            var isMergeableObject = function isMergeableObject(value) {
                                return isNonNullObject(value)
                                    && !isSpecial(value)
                            };

                            function isNonNullObject(value) {
                                return !!value && typeof value === 'object'
                            }

                            function isSpecial(value) {
                                var stringValue = Object.prototype.toString.call(value);

                                return stringValue === '[object RegExp]'
                                    || stringValue === '[object Date]'
                                    || isReactElement(value)
                            }

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
                            var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
                            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

                            function isReactElement(value) {
                                return value.$$typeof === REACT_ELEMENT_TYPE
                            }

                            function emptyTarget(val) {
                                return Array.isArray(val) ? [] : {}
                            }

                            function cloneUnlessOtherwiseSpecified(value, options) {
                                return (options.clone !== false && options.isMergeableObject(value))
                                    ? deepmerge(emptyTarget(value), value, options)
                                    : value
                            }

                            function defaultArrayMerge(target, source, options) {
                                return target.concat(source).map(function(element) {
                                    return cloneUnlessOtherwiseSpecified(element, options)
                                })
                            }

                            function getMergeFunction(key, options) {
                                if (!options.customMerge) {
                                    return deepmerge
                                }
                                var customMerge = options.customMerge(key);
                                return typeof customMerge === 'function' ? customMerge : deepmerge
                            }

                            function getEnumerableOwnPropertySymbols(target) {
                                return Object.getOwnPropertySymbols
                                    ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                                        return target.propertyIsEnumerable(symbol)
                                    })
                                    : []
                            }

                            function getKeys(target) {
                                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
                            }

                            function propertyIsOnObject(object, property) {
                                try {
                                    return property in object
                                } catch(_) {
                                    return false
                                }
                            }

// Protects from prototype poisoning and unexpected merging up the prototype chain.
                            function propertyIsUnsafe(target, key) {
                                return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
                                    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                                        && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
                            }

                            function mergeObject(target, source, options) {
                                var destination = {};
                                if (options.isMergeableObject(target)) {
                                    getKeys(target).forEach(function(key) {
                                        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                                    });
                                }
                                getKeys(source).forEach(function(key) {
                                    if (propertyIsUnsafe(target, key)) {
                                        return
                                    }

                                    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                                        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                                    } else {
                                        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                                    }
                                });
                                return destination
                            }

                            function deepmerge(target, source, options) {
                                options = options || {};
                                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                                // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
                                // implementations can use it. The caller may not replace it.
                                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

                                var sourceIsArray = Array.isArray(source);
                                var targetIsArray = Array.isArray(target);
                                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

                                if (!sourceAndTargetTypesMatch) {
                                    return cloneUnlessOtherwiseSpecified(source, options)
                                } else if (sourceIsArray) {
                                    return options.arrayMerge(target, source, options)
                                } else {
                                    return mergeObject(target, source, options)
                                }
                            }

                            deepmerge.all = function deepmergeAll(array, options) {
                                if (!Array.isArray(array)) {
                                    throw new Error('first argument should be an array')
                                }

                                return array.reduce(function(prev, next) {
                                    return deepmerge(prev, next, options)
                                }, {})
                            };

                            var deepmerge_1 = deepmerge;

                            module.exports = deepmerge_1;


                            /***/ }),

                        /***/ 221:
                        /***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_136676__) {

                            __nested_webpack_require_136676__.r(__webpack_exports__);
                            /* harmony export */ __nested_webpack_require_136676__.d(__webpack_exports__, {
                                /* harmony export */   "default": function() { return /* binding */ Fuse; }
                                /* harmony export */ });
                            /**
                             * Fuse.js v6.5.3 - Lightweight fuzzy-search (http://fusejs.io)
                             *
                             * Copyright (c) 2021 Kiro Risk (http://kiro.me)
                             * All Rights Reserved. Apache Software License 2.0
                             *
                             * http://www.apache.org/licenses/LICENSE-2.0
                             */

                            function isArray(value) {
                                return !Array.isArray
                                    ? getTag(value) === '[object Array]'
                                    : Array.isArray(value)
                            }

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
                            const INFINITY = 1 / 0;
                            function baseToString(value) {
                                // Exit early for strings to avoid a performance hit in some environments.
                                if (typeof value == 'string') {
                                    return value
                                }
                                let result = value + '';
                                return result == '0' && 1 / value == -INFINITY ? '-0' : result
                            }

                            function toString(value) {
                                return value == null ? '' : baseToString(value)
                            }

                            function isString(value) {
                                return typeof value === 'string'
                            }

                            function isNumber(value) {
                                return typeof value === 'number'
                            }

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
                            function isBoolean(value) {
                                return (
                                    value === true ||
                                    value === false ||
                                    (isObjectLike(value) && getTag(value) == '[object Boolean]')
                                )
                            }

                            function isObject(value) {
                                return typeof value === 'object'
                            }

// Checks if `value` is object-like.
                            function isObjectLike(value) {
                                return isObject(value) && value !== null
                            }

                            function isDefined(value) {
                                return value !== undefined && value !== null
                            }

                            function isBlank(value) {
                                return !value.trim().length
                            }

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
                            function getTag(value) {
                                return value == null
                                    ? value === undefined
                                        ? '[object Undefined]'
                                        : '[object Null]'
                                    : Object.prototype.toString.call(value)
                            }

                            const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

                            const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

                            const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
                                `Invalid value for key ${key}`;

                            const PATTERN_LENGTH_TOO_LARGE = (max) =>
                                `Pattern length exceeds max of ${max}.`;

                            const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

                            const INVALID_KEY_WEIGHT_VALUE = (key) =>
                                `Property 'weight' in key '${key}' must be a positive integer`;

                            const hasOwn = Object.prototype.hasOwnProperty;

                            class KeyStore {
                                constructor(keys) {
                                    this._keys = [];
                                    this._keyMap = {};

                                    let totalWeight = 0;

                                    keys.forEach((key) => {
                                        let obj = createKey(key);

                                        totalWeight += obj.weight;

                                        this._keys.push(obj);
                                        this._keyMap[obj.id] = obj;

                                        totalWeight += obj.weight;
                                    });

                                    // Normalize weights so that their sum is equal to 1
                                    this._keys.forEach((key) => {
                                        key.weight /= totalWeight;
                                    });
                                }
                                get(keyId) {
                                    return this._keyMap[keyId]
                                }
                                keys() {
                                    return this._keys
                                }
                                toJSON() {
                                    return JSON.stringify(this._keys)
                                }
                            }

                            function createKey(key) {
                                let path = null;
                                let id = null;
                                let src = null;
                                let weight = 1;

                                if (isString(key) || isArray(key)) {
                                    src = key;
                                    path = createKeyPath(key);
                                    id = createKeyId(key);
                                } else {
                                    if (!hasOwn.call(key, 'name')) {
                                        throw new Error(MISSING_KEY_PROPERTY('name'))
                                    }

                                    const name = key.name;
                                    src = name;

                                    if (hasOwn.call(key, 'weight')) {
                                        weight = key.weight;

                                        if (weight <= 0) {
                                            throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
                                        }
                                    }

                                    path = createKeyPath(name);
                                    id = createKeyId(name);
                                }

                                return { path, id, weight, src }
                            }

                            function createKeyPath(key) {
                                return isArray(key) ? key : key.split('.')
                            }

                            function createKeyId(key) {
                                return isArray(key) ? key.join('.') : key
                            }

                            function get(obj, path) {
                                let list = [];
                                let arr = false;

                                const deepGet = (obj, path, index) => {
                                    if (!isDefined(obj)) {
                                        return
                                    }
                                    if (!path[index]) {
                                        // If there's no path left, we've arrived at the object we care about.
                                        list.push(obj);
                                    } else {
                                        let key = path[index];

                                        const value = obj[key];

                                        if (!isDefined(value)) {
                                            return
                                        }

                                        // If we're at the last value in the path, and if it's a string/number/bool,
                                        // add it to the list
                                        if (
                                            index === path.length - 1 &&
                                            (isString(value) || isNumber(value) || isBoolean(value))
                                        ) {
                                            list.push(toString(value));
                                        } else if (isArray(value)) {
                                            arr = true;
                                            // Search each item in the array.
                                            for (let i = 0, len = value.length; i < len; i += 1) {
                                                deepGet(value[i], path, index + 1);
                                            }
                                        } else if (path.length) {
                                            // An object. Recurse further.
                                            deepGet(value, path, index + 1);
                                        }
                                    }
                                };

                                // Backwards compatibility (since path used to be a string)
                                deepGet(obj, isString(path) ? path.split('.') : path, 0);

                                return arr ? list : list[0]
                            }

                            const MatchOptions = {
                                // Whether the matches should be included in the result set. When `true`, each record in the result
                                // set will include the indices of the matched characters.
                                // These can consequently be used for highlighting purposes.
                                includeMatches: false,
                                // When `true`, the matching function will continue to the end of a search pattern even if
                                // a perfect match has already been located in the string.
                                findAllMatches: false,
                                // Minimum number of characters that must be matched before a result is considered a match
                                minMatchCharLength: 1
                            };

                            const BasicOptions = {
                                // When `true`, the algorithm continues searching to the end of the input even if a perfect
                                // match is found before the end of the same input.
                                isCaseSensitive: false,
                                // When true, the matching function will continue to the end of a search pattern even if
                                includeScore: false,
                                // List of properties that will be searched. This also supports nested properties.
                                keys: [],
                                // Whether to sort the result list, by score
                                shouldSort: true,
                                // Default sort function: sort by ascending score, ascending index
                                sortFn: (a, b) =>
                                    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
                            };

                            const FuzzyOptions = {
                                // Approximately where in the text is the pattern expected to be found?
                                location: 0,
                                // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
                                // (of both letters and location), a threshold of '1.0' would match anything.
                                threshold: 0.6,
                                // Determines how close the match must be to the fuzzy location (specified above).
                                // An exact letter match which is 'distance' characters away from the fuzzy location
                                // would score as a complete mismatch. A distance of '0' requires the match be at
                                // the exact location specified, a threshold of '1000' would require a perfect match
                                // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
                                distance: 100
                            };

                            const AdvancedOptions = {
                                // When `true`, it enables the use of unix-like search commands
                                useExtendedSearch: false,
                                // The get function to use when fetching an object's properties.
                                // The default will search nested paths *ie foo.bar.baz*
                                getFn: get,
                                // When `true`, search will ignore `location` and `distance`, so it won't matter
                                // where in the string the pattern appears.
                                // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
                                ignoreLocation: false,
                                // When `true`, the calculation for the relevance score (used for sorting) will
                                // ignore the field-length norm.
                                // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
                                ignoreFieldNorm: false,
                                // The weight to determine how much field length norm effects scoring.
                                fieldNormWeight: 1
                            };

                            var Config = {
                                ...BasicOptions,
                                ...MatchOptions,
                                ...FuzzyOptions,
                                ...AdvancedOptions
                            };

                            const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
                            function norm(weight = 1, mantissa = 3) {
                                const cache = new Map();
                                const m = Math.pow(10, mantissa);

                                return {
                                    get(value) {
                                        const numTokens = value.match(SPACE).length;

                                        if (cache.has(numTokens)) {
                                            return cache.get(numTokens)
                                        }

                                        // Default function is 1/sqrt(x), weight makes that variable
                                        const norm = 1 / Math.pow(numTokens, 0.5 * weight);

                                        // In place of `toFixed(mantissa)`, for faster computation
                                        const n = parseFloat(Math.round(norm * m) / m);

                                        cache.set(numTokens, n);

                                        return n
                                    },
                                    clear() {
                                        cache.clear();
                                    }
                                }
                            }

                            class FuseIndex {
                                constructor({
                                                getFn = Config.getFn,
                                                fieldNormWeight = Config.fieldNormWeight
                                            } = {}) {
                                    this.norm = norm(fieldNormWeight, 3);
                                    this.getFn = getFn;
                                    this.isCreated = false;

                                    this.setIndexRecords();
                                }
                                setSources(docs = []) {
                                    this.docs = docs;
                                }
                                setIndexRecords(records = []) {
                                    this.records = records;
                                }
                                setKeys(keys = []) {
                                    this.keys = keys;
                                    this._keysMap = {};
                                    keys.forEach((key, idx) => {
                                        this._keysMap[key.id] = idx;
                                    });
                                }
                                create() {
                                    if (this.isCreated || !this.docs.length) {
                                        return
                                    }

                                    this.isCreated = true;

                                    // List is Array<String>
                                    if (isString(this.docs[0])) {
                                        this.docs.forEach((doc, docIndex) => {
                                            this._addString(doc, docIndex);
                                        });
                                    } else {
                                        // List is Array<Object>
                                        this.docs.forEach((doc, docIndex) => {
                                            this._addObject(doc, docIndex);
                                        });
                                    }

                                    this.norm.clear();
                                }
                                // Adds a doc to the end of the index
                                add(doc) {
                                    const idx = this.size();

                                    if (isString(doc)) {
                                        this._addString(doc, idx);
                                    } else {
                                        this._addObject(doc, idx);
                                    }
                                }
                                // Removes the doc at the specified index of the index
                                removeAt(idx) {
                                    this.records.splice(idx, 1);

                                    // Change ref index of every subsquent doc
                                    for (let i = idx, len = this.size(); i < len; i += 1) {
                                        this.records[i].i -= 1;
                                    }
                                }
                                getValueForItemAtKeyId(item, keyId) {
                                    return item[this._keysMap[keyId]]
                                }
                                size() {
                                    return this.records.length
                                }
                                _addString(doc, docIndex) {
                                    if (!isDefined(doc) || isBlank(doc)) {
                                        return
                                    }

                                    let record = {
                                        v: doc,
                                        i: docIndex,
                                        n: this.norm.get(doc)
                                    };

                                    this.records.push(record);
                                }
                                _addObject(doc, docIndex) {
                                    let record = { i: docIndex, $: {} };

                                    // Iterate over every key (i.e, path), and fetch the value at that key
                                    this.keys.forEach((key, keyIndex) => {
                                        // console.log(key)
                                        let value = this.getFn(doc, key.path);

                                        if (!isDefined(value)) {
                                            return
                                        }

                                        if (isArray(value)) {
                                            let subRecords = [];
                                            const stack = [{ nestedArrIndex: -1, value }];

                                            while (stack.length) {
                                                const { nestedArrIndex, value } = stack.pop();

                                                if (!isDefined(value)) {
                                                    continue
                                                }

                                                if (isString(value) && !isBlank(value)) {
                                                    let subRecord = {
                                                        v: value,
                                                        i: nestedArrIndex,
                                                        n: this.norm.get(value)
                                                    };

                                                    subRecords.push(subRecord);
                                                } else if (isArray(value)) {
                                                    value.forEach((item, k) => {
                                                        stack.push({
                                                            nestedArrIndex: k,
                                                            value: item
                                                        });
                                                    });
                                                } else ;
                                            }
                                            record.$[keyIndex] = subRecords;
                                        } else if (!isBlank(value)) {
                                            let subRecord = {
                                                v: value,
                                                n: this.norm.get(value)
                                            };

                                            record.$[keyIndex] = subRecord;
                                        }
                                    });

                                    this.records.push(record);
                                }
                                toJSON() {
                                    return {
                                        keys: this.keys,
                                        records: this.records
                                    }
                                }
                            }

                            function createIndex(
                                keys,
                                docs,
                                { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
                            ) {
                                const myIndex = new FuseIndex({ getFn, fieldNormWeight });
                                myIndex.setKeys(keys.map(createKey));
                                myIndex.setSources(docs);
                                myIndex.create();
                                return myIndex
                            }

                            function parseIndex(
                                data,
                                { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
                            ) {
                                const { keys, records } = data;
                                const myIndex = new FuseIndex({ getFn, fieldNormWeight });
                                myIndex.setKeys(keys);
                                myIndex.setIndexRecords(records);
                                return myIndex
                            }

                            function computeScore$1(
                                pattern,
                                {
                                    errors = 0,
                                    currentLocation = 0,
                                    expectedLocation = 0,
                                    distance = Config.distance,
                                    ignoreLocation = Config.ignoreLocation
                                } = {}
                            ) {
                                const accuracy = errors / pattern.length;

                                if (ignoreLocation) {
                                    return accuracy
                                }

                                const proximity = Math.abs(expectedLocation - currentLocation);

                                if (!distance) {
                                    // Dodge divide by zero error.
                                    return proximity ? 1.0 : accuracy
                                }

                                return accuracy + proximity / distance
                            }

                            function convertMaskToIndices(
                                matchmask = [],
                                minMatchCharLength = Config.minMatchCharLength
                            ) {
                                let indices = [];
                                let start = -1;
                                let end = -1;
                                let i = 0;

                                for (let len = matchmask.length; i < len; i += 1) {
                                    let match = matchmask[i];
                                    if (match && start === -1) {
                                        start = i;
                                    } else if (!match && start !== -1) {
                                        end = i - 1;
                                        if (end - start + 1 >= minMatchCharLength) {
                                            indices.push([start, end]);
                                        }
                                        start = -1;
                                    }
                                }

                                // (i-1 - start) + 1 => i - start
                                if (matchmask[i - 1] && i - start >= minMatchCharLength) {
                                    indices.push([start, i - 1]);
                                }

                                return indices
                            }

// Machine word size
                            const MAX_BITS = 32;

                            function search(
                                text,
                                pattern,
                                patternAlphabet,
                                {
                                    location = Config.location,
                                    distance = Config.distance,
                                    threshold = Config.threshold,
                                    findAllMatches = Config.findAllMatches,
                                    minMatchCharLength = Config.minMatchCharLength,
                                    includeMatches = Config.includeMatches,
                                    ignoreLocation = Config.ignoreLocation
                                } = {}
                            ) {
                                if (pattern.length > MAX_BITS) {
                                    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
                                }

                                const patternLen = pattern.length;
                                // Set starting location at beginning text and initialize the alphabet.
                                const textLen = text.length;
                                // Handle the case when location > text.length
                                const expectedLocation = Math.max(0, Math.min(location, textLen));
                                // Highest score beyond which we give up.
                                let currentThreshold = threshold;
                                // Is there a nearby exact match? (speedup)
                                let bestLocation = expectedLocation;

                                // Performance: only computer matches when the minMatchCharLength > 1
                                // OR if `includeMatches` is true.
                                const computeMatches = minMatchCharLength > 1 || includeMatches;
                                // A mask of the matches, used for building the indices
                                const matchMask = computeMatches ? Array(textLen) : [];

                                let index;

                                // Get all exact matches, here for speed up
                                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                                    let score = computeScore$1(pattern, {
                                        currentLocation: index,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });

                                    currentThreshold = Math.min(score, currentThreshold);
                                    bestLocation = index + patternLen;

                                    if (computeMatches) {
                                        let i = 0;
                                        while (i < patternLen) {
                                            matchMask[index + i] = 1;
                                            i += 1;
                                        }
                                    }
                                }

                                // Reset the best location
                                bestLocation = -1;

                                let lastBitArr = [];
                                let finalScore = 1;
                                let binMax = patternLen + textLen;

                                const mask = 1 << (patternLen - 1);

                                for (let i = 0; i < patternLen; i += 1) {
                                    // Scan for the best match; each iteration allows for one more error.
                                    // Run a binary search to determine how far from the match location we can stray
                                    // at this error level.
                                    let binMin = 0;
                                    let binMid = binMax;

                                    while (binMin < binMid) {
                                        const score = computeScore$1(pattern, {
                                            errors: i,
                                            currentLocation: expectedLocation + binMid,
                                            expectedLocation,
                                            distance,
                                            ignoreLocation
                                        });

                                        if (score <= currentThreshold) {
                                            binMin = binMid;
                                        } else {
                                            binMax = binMid;
                                        }

                                        binMid = Math.floor((binMax - binMin) / 2 + binMin);
                                    }

                                    // Use the result from this iteration as the maximum for the next.
                                    binMax = binMid;

                                    let start = Math.max(1, expectedLocation - binMid + 1);
                                    let finish = findAllMatches
                                        ? textLen
                                        : Math.min(expectedLocation + binMid, textLen) + patternLen;

                                    // Initialize the bit array
                                    let bitArr = Array(finish + 2);

                                    bitArr[finish + 1] = (1 << i) - 1;

                                    for (let j = finish; j >= start; j -= 1) {
                                        let currentLocation = j - 1;
                                        let charMatch = patternAlphabet[text.charAt(currentLocation)];

                                        if (computeMatches) {
                                            // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
                                            matchMask[currentLocation] = +!!charMatch;
                                        }

                                        // First pass: exact match
                                        bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

                                        // Subsequent passes: fuzzy match
                                        if (i) {
                                            bitArr[j] |=
                                                ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
                                        }

                                        if (bitArr[j] & mask) {
                                            finalScore = computeScore$1(pattern, {
                                                errors: i,
                                                currentLocation,
                                                expectedLocation,
                                                distance,
                                                ignoreLocation
                                            });

                                            // This match will almost certainly be better than any existing match.
                                            // But check anyway.
                                            if (finalScore <= currentThreshold) {
                                                // Indeed it is
                                                currentThreshold = finalScore;
                                                bestLocation = currentLocation;

                                                // Already passed `loc`, downhill from here on in.
                                                if (bestLocation <= expectedLocation) {
                                                    break
                                                }

                                                // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                                                start = Math.max(1, 2 * expectedLocation - bestLocation);
                                            }
                                        }
                                    }

                                    // No hope for a (better) match at greater error levels.
                                    const score = computeScore$1(pattern, {
                                        errors: i + 1,
                                        currentLocation: expectedLocation,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });

                                    if (score > currentThreshold) {
                                        break
                                    }

                                    lastBitArr = bitArr;
                                }

                                const result = {
                                    isMatch: bestLocation >= 0,
                                    // Count exact matches (those with a score of 0) to be "almost" exact
                                    score: Math.max(0.001, finalScore)
                                };

                                if (computeMatches) {
                                    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                                    if (!indices.length) {
                                        result.isMatch = false;
                                    } else if (includeMatches) {
                                        result.indices = indices;
                                    }
                                }

                                return result
                            }

                            function createPatternAlphabet(pattern) {
                                let mask = {};

                                for (let i = 0, len = pattern.length; i < len; i += 1) {
                                    const char = pattern.charAt(i);
                                    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
                                }

                                return mask
                            }

                            class BitapSearch {
                                constructor(
                                    pattern,
                                    {
                                        location = Config.location,
                                        threshold = Config.threshold,
                                        distance = Config.distance,
                                        includeMatches = Config.includeMatches,
                                        findAllMatches = Config.findAllMatches,
                                        minMatchCharLength = Config.minMatchCharLength,
                                        isCaseSensitive = Config.isCaseSensitive,
                                        ignoreLocation = Config.ignoreLocation
                                    } = {}
                                ) {
                                    this.options = {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    };

                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

                                    this.chunks = [];

                                    if (!this.pattern.length) {
                                        return
                                    }

                                    const addChunk = (pattern, startIndex) => {
                                        this.chunks.push({
                                            pattern,
                                            alphabet: createPatternAlphabet(pattern),
                                            startIndex
                                        });
                                    };

                                    const len = this.pattern.length;

                                    if (len > MAX_BITS) {
                                        let i = 0;
                                        const remainder = len % MAX_BITS;
                                        const end = len - remainder;

                                        while (i < end) {
                                            addChunk(this.pattern.substr(i, MAX_BITS), i);
                                            i += MAX_BITS;
                                        }

                                        if (remainder) {
                                            const startIndex = len - MAX_BITS;
                                            addChunk(this.pattern.substr(startIndex), startIndex);
                                        }
                                    } else {
                                        addChunk(this.pattern, 0);
                                    }
                                }

                                searchIn(text) {
                                    const { isCaseSensitive, includeMatches } = this.options;

                                    if (!isCaseSensitive) {
                                        text = text.toLowerCase();
                                    }

                                    // Exact match
                                    if (this.pattern === text) {
                                        let result = {
                                            isMatch: true,
                                            score: 0
                                        };

                                        if (includeMatches) {
                                            result.indices = [[0, text.length - 1]];
                                        }

                                        return result
                                    }

                                    // Otherwise, use Bitap algorithm
                                    const {
                                        location,
                                        distance,
                                        threshold,
                                        findAllMatches,
                                        minMatchCharLength,
                                        ignoreLocation
                                    } = this.options;

                                    let allIndices = [];
                                    let totalScore = 0;
                                    let hasMatches = false;

                                    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
                                        const { isMatch, score, indices } = search(text, pattern, alphabet, {
                                            location: location + startIndex,
                                            distance,
                                            threshold,
                                            findAllMatches,
                                            minMatchCharLength,
                                            includeMatches,
                                            ignoreLocation
                                        });

                                        if (isMatch) {
                                            hasMatches = true;
                                        }

                                        totalScore += score;

                                        if (isMatch && indices) {
                                            allIndices = [...allIndices, ...indices];
                                        }
                                    });

                                    let result = {
                                        isMatch: hasMatches,
                                        score: hasMatches ? totalScore / this.chunks.length : 1
                                    };

                                    if (hasMatches && includeMatches) {
                                        result.indices = allIndices;
                                    }

                                    return result
                                }
                            }

                            class BaseMatch {
                                constructor(pattern) {
                                    this.pattern = pattern;
                                }
                                static isMultiMatch(pattern) {
                                    return getMatch(pattern, this.multiRegex)
                                }
                                static isSingleMatch(pattern) {
                                    return getMatch(pattern, this.singleRegex)
                                }
                                search(/*text*/) {}
                            }

                            function getMatch(pattern, exp) {
                                const matches = pattern.match(exp);
                                return matches ? matches[1] : null
                            }

// Token: 'file

                            class ExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'exact'
                                }
                                static get multiRegex() {
                                    return /^="(.*)"$/
                                }
                                static get singleRegex() {
                                    return /^=(.*)$/
                                }
                                search(text) {
                                    const isMatch = text === this.pattern;

                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [0, this.pattern.length - 1]
                                    }
                                }
                            }

// Token: !fire

                            class InverseExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'inverse-exact'
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"$/
                                }
                                static get singleRegex() {
                                    return /^!(.*)$/
                                }
                                search(text) {
                                    const index = text.indexOf(this.pattern);
                                    const isMatch = index === -1;

                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [0, text.length - 1]
                                    }
                                }
                            }

// Token: ^file

                            class PrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'prefix-exact'
                                }
                                static get multiRegex() {
                                    return /^\^"(.*)"$/
                                }
                                static get singleRegex() {
                                    return /^\^(.*)$/
                                }
                                search(text) {
                                    const isMatch = text.startsWith(this.pattern);

                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [0, this.pattern.length - 1]
                                    }
                                }
                            }

// Token: !^fire

                            class InversePrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'inverse-prefix-exact'
                                }
                                static get multiRegex() {
                                    return /^!\^"(.*)"$/
                                }
                                static get singleRegex() {
                                    return /^!\^(.*)$/
                                }
                                search(text) {
                                    const isMatch = !text.startsWith(this.pattern);

                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [0, text.length - 1]
                                    }
                                }
                            }

// Token: .file$

                            class SuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'suffix-exact'
                                }
                                static get multiRegex() {
                                    return /^"(.*)"\$$/
                                }
                                static get singleRegex() {
                                    return /^(.*)\$$/
                                }
                                search(text) {
                                    const isMatch = text.endsWith(this.pattern);

                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [text.length - this.pattern.length, text.length - 1]
                                    }
                                }
                            }

// Token: !.file$

                            class InverseSuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'inverse-suffix-exact'
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"\$$/
                                }
                                static get singleRegex() {
                                    return /^!(.*)\$$/
                                }
                                search(text) {
                                    const isMatch = !text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [0, text.length - 1]
                                    }
                                }
                            }

                            class FuzzyMatch extends BaseMatch {
                                constructor(
                                    pattern,
                                    {
                                        location = Config.location,
                                        threshold = Config.threshold,
                                        distance = Config.distance,
                                        includeMatches = Config.includeMatches,
                                        findAllMatches = Config.findAllMatches,
                                        minMatchCharLength = Config.minMatchCharLength,
                                        isCaseSensitive = Config.isCaseSensitive,
                                        ignoreLocation = Config.ignoreLocation
                                    } = {}
                                ) {
                                    super(pattern);
                                    this._bitapSearch = new BitapSearch(pattern, {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    });
                                }
                                static get type() {
                                    return 'fuzzy'
                                }
                                static get multiRegex() {
                                    return /^"(.*)"$/
                                }
                                static get singleRegex() {
                                    return /^(.*)$/
                                }
                                search(text) {
                                    return this._bitapSearch.searchIn(text)
                                }
                            }

// Token: 'file

                            class IncludeMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return 'include'
                                }
                                static get multiRegex() {
                                    return /^'"(.*)"$/
                                }
                                static get singleRegex() {
                                    return /^'(.*)$/
                                }
                                search(text) {
                                    let location = 0;
                                    let index;

                                    const indices = [];
                                    const patternLen = this.pattern.length;

                                    // Get all exact matches
                                    while ((index = text.indexOf(this.pattern, location)) > -1) {
                                        location = index + patternLen;
                                        indices.push([index, location - 1]);
                                    }

                                    const isMatch = !!indices.length;

                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices
                                    }
                                }
                            }

// ❗Order is important. DO NOT CHANGE.
                            const searchers = [
                                ExactMatch,
                                IncludeMatch,
                                PrefixExactMatch,
                                InversePrefixExactMatch,
                                InverseSuffixExactMatch,
                                SuffixExactMatch,
                                InverseExactMatch,
                                FuzzyMatch
                            ];

                            const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
                            const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
                            const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
                            function parseQuery(pattern, options = {}) {
                                return pattern.split(OR_TOKEN).map((item) => {
                                    let query = item
                                        .trim()
                                        .split(SPACE_RE)
                                        .filter((item) => item && !!item.trim());

                                    let results = [];
                                    for (let i = 0, len = query.length; i < len; i += 1) {
                                        const queryItem = query[i];

                                        // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
                                        let found = false;
                                        let idx = -1;
                                        while (!found && ++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isMultiMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                found = true;
                                            }
                                        }

                                        if (found) {
                                            continue
                                        }

                                        // 2. Handle single query matches (i.e, once that are *not* quoted)
                                        idx = -1;
                                        while (++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isSingleMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                break
                                            }
                                        }
                                    }

                                    return results
                                })
                            }

// These extended matchers can return an array of matches, as opposed
// to a singl match
                            const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

                            /**
                             * Command-like searching
                             * ======================
                             *
                             * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
                             * search in a given text.
                             *
                             * Search syntax:
                             *
                             * | Token       | Match type                 | Description                            |
                             * | ----------- | -------------------------- | -------------------------------------- |
                             * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
                             * | `=scheme`   | exact-match                | Items that are `scheme`                |
                             * | `'python`   | include-match              | Items that include `python`            |
                             * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
                             * | `^java`     | prefix-exact-match         | Items that start with `java`           |
                             * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
                             * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
                             * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
                             *
                             * A single pipe character acts as an OR operator. For example, the following
                             * query matches entries that start with `core` and end with either`go`, `rb`,
                             * or`py`.
                             *
                             * ```
                             * ^core go$ | rb$ | py$
                             * ```
                             */
                            class ExtendedSearch {
                                constructor(
                                    pattern,
                                    {
                                        isCaseSensitive = Config.isCaseSensitive,
                                        includeMatches = Config.includeMatches,
                                        minMatchCharLength = Config.minMatchCharLength,
                                        ignoreLocation = Config.ignoreLocation,
                                        findAllMatches = Config.findAllMatches,
                                        location = Config.location,
                                        threshold = Config.threshold,
                                        distance = Config.distance
                                    } = {}
                                ) {
                                    this.query = null;
                                    this.options = {
                                        isCaseSensitive,
                                        includeMatches,
                                        minMatchCharLength,
                                        findAllMatches,
                                        ignoreLocation,
                                        location,
                                        threshold,
                                        distance
                                    };

                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.query = parseQuery(this.pattern, this.options);
                                }

                                static condition(_, options) {
                                    return options.useExtendedSearch
                                }

                                searchIn(text) {
                                    const query = this.query;

                                    if (!query) {
                                        return {
                                            isMatch: false,
                                            score: 1
                                        }
                                    }

                                    const { includeMatches, isCaseSensitive } = this.options;

                                    text = isCaseSensitive ? text : text.toLowerCase();

                                    let numMatches = 0;
                                    let allIndices = [];
                                    let totalScore = 0;

                                    // ORs
                                    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                                        const searchers = query[i];

                                        // Reset indices
                                        allIndices.length = 0;
                                        numMatches = 0;

                                        // ANDs
                                        for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
                                            const searcher = searchers[j];
                                            const { isMatch, indices, score } = searcher.search(text);

                                            if (isMatch) {
                                                numMatches += 1;
                                                totalScore += score;
                                                if (includeMatches) {
                                                    const type = searcher.constructor.type;
                                                    if (MultiMatchSet.has(type)) {
                                                        allIndices = [...allIndices, ...indices];
                                                    } else {
                                                        allIndices.push(indices);
                                                    }
                                                }
                                            } else {
                                                totalScore = 0;
                                                numMatches = 0;
                                                allIndices.length = 0;
                                                break
                                            }
                                        }

                                        // OR condition, so if TRUE, return
                                        if (numMatches) {
                                            let result = {
                                                isMatch: true,
                                                score: totalScore / numMatches
                                            };

                                            if (includeMatches) {
                                                result.indices = allIndices;
                                            }

                                            return result
                                        }
                                    }

                                    // Nothing was matched
                                    return {
                                        isMatch: false,
                                        score: 1
                                    }
                                }
                            }

                            const registeredSearchers = [];

                            function register(...args) {
                                registeredSearchers.push(...args);
                            }

                            function createSearcher(pattern, options) {
                                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                                    let searcherClass = registeredSearchers[i];
                                    if (searcherClass.condition(pattern, options)) {
                                        return new searcherClass(pattern, options)
                                    }
                                }

                                return new BitapSearch(pattern, options)
                            }

                            const LogicalOperator = {
                                AND: '$and',
                                OR: '$or'
                            };

                            const KeyType = {
                                PATH: '$path',
                                PATTERN: '$val'
                            };

                            const isExpression = (query) =>
                                !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

                            const isPath = (query) => !!query[KeyType.PATH];

                            const isLeaf = (query) =>
                                !isArray(query) && isObject(query) && !isExpression(query);

                            const convertToExplicit = (query) => ({
                                [LogicalOperator.AND]: Object.keys(query).map((key) => ({
                                    [key]: query[key]
                                }))
                            });

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
                            function parse(query, options, { auto = true } = {}) {
                                const next = (query) => {
                                    let keys = Object.keys(query);

                                    const isQueryPath = isPath(query);

                                    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
                                        return next(convertToExplicit(query))
                                    }

                                    if (isLeaf(query)) {
                                        const key = isQueryPath ? query[KeyType.PATH] : keys[0];

                                        const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

                                        if (!isString(pattern)) {
                                            throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
                                        }

                                        const obj = {
                                            keyId: createKeyId(key),
                                            pattern
                                        };

                                        if (auto) {
                                            obj.searcher = createSearcher(pattern, options);
                                        }

                                        return obj
                                    }

                                    let node = {
                                        children: [],
                                        operator: keys[0]
                                    };

                                    keys.forEach((key) => {
                                        const value = query[key];

                                        if (isArray(value)) {
                                            value.forEach((item) => {
                                                node.children.push(next(item));
                                            });
                                        }
                                    });

                                    return node
                                };

                                if (!isExpression(query)) {
                                    query = convertToExplicit(query);
                                }

                                return next(query)
                            }

// Practical scoring function
                            function computeScore(
                                results,
                                { ignoreFieldNorm = Config.ignoreFieldNorm }
                            ) {
                                results.forEach((result) => {
                                    let totalScore = 1;

                                    result.matches.forEach(({ key, norm, score }) => {
                                        const weight = key ? key.weight : null;

                                        totalScore *= Math.pow(
                                            score === 0 && weight ? Number.EPSILON : score,
                                            (weight || 1) * (ignoreFieldNorm ? 1 : norm)
                                        );
                                    });

                                    result.score = totalScore;
                                });
                            }

                            function transformMatches(result, data) {
                                const matches = result.matches;
                                data.matches = [];

                                if (!isDefined(matches)) {
                                    return
                                }

                                matches.forEach((match) => {
                                    if (!isDefined(match.indices) || !match.indices.length) {
                                        return
                                    }

                                    const { indices, value } = match;

                                    let obj = {
                                        indices,
                                        value
                                    };

                                    if (match.key) {
                                        obj.key = match.key.src;
                                    }

                                    if (match.idx > -1) {
                                        obj.refIndex = match.idx;
                                    }

                                    data.matches.push(obj);
                                });
                            }

                            function transformScore(result, data) {
                                data.score = result.score;
                            }

                            function format(
                                results,
                                docs,
                                {
                                    includeMatches = Config.includeMatches,
                                    includeScore = Config.includeScore
                                } = {}
                            ) {
                                const transformers = [];

                                if (includeMatches) transformers.push(transformMatches);
                                if (includeScore) transformers.push(transformScore);

                                return results.map((result) => {
                                    const { idx } = result;

                                    const data = {
                                        item: docs[idx],
                                        refIndex: idx
                                    };

                                    if (transformers.length) {
                                        transformers.forEach((transformer) => {
                                            transformer(result, data);
                                        });
                                    }

                                    return data
                                })
                            }

                            class Fuse {
                                constructor(docs, options = {}, index) {
                                    this.options = { ...Config, ...options };

                                    if (
                                        this.options.useExtendedSearch &&
                                        !true
                                    ) {}

                                    this._keyStore = new KeyStore(this.options.keys);

                                    this.setCollection(docs, index);
                                }

                                setCollection(docs, index) {
                                    this._docs = docs;

                                    if (index && !(index instanceof FuseIndex)) {
                                        throw new Error(INCORRECT_INDEX_TYPE)
                                    }

                                    this._myIndex =
                                        index ||
                                        createIndex(this.options.keys, this._docs, {
                                            getFn: this.options.getFn,
                                            fieldNormWeight: this.options.fieldNormWeight
                                        });
                                }

                                add(doc) {
                                    if (!isDefined(doc)) {
                                        return
                                    }

                                    this._docs.push(doc);
                                    this._myIndex.add(doc);
                                }

                                remove(predicate = (/* doc, idx */) => false) {
                                    const results = [];

                                    for (let i = 0, len = this._docs.length; i < len; i += 1) {
                                        const doc = this._docs[i];
                                        if (predicate(doc, i)) {
                                            this.removeAt(i);
                                            i -= 1;
                                            len -= 1;

                                            results.push(doc);
                                        }
                                    }

                                    return results
                                }

                                removeAt(idx) {
                                    this._docs.splice(idx, 1);
                                    this._myIndex.removeAt(idx);
                                }

                                getIndex() {
                                    return this._myIndex
                                }

                                search(query, { limit = -1 } = {}) {
                                    const {
                                        includeMatches,
                                        includeScore,
                                        shouldSort,
                                        sortFn,
                                        ignoreFieldNorm
                                    } = this.options;

                                    let results = isString(query)
                                        ? isString(this._docs[0])
                                            ? this._searchStringList(query)
                                            : this._searchObjectList(query)
                                        : this._searchLogical(query);

                                    computeScore(results, { ignoreFieldNorm });

                                    if (shouldSort) {
                                        results.sort(sortFn);
                                    }

                                    if (isNumber(limit) && limit > -1) {
                                        results = results.slice(0, limit);
                                    }

                                    return format(results, this._docs, {
                                        includeMatches,
                                        includeScore
                                    })
                                }

                                _searchStringList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const { records } = this._myIndex;
                                    const results = [];

                                    // Iterate over every string in the index
                                    records.forEach(({ v: text, i: idx, n: norm }) => {
                                        if (!isDefined(text)) {
                                            return
                                        }

                                        const { isMatch, score, indices } = searcher.searchIn(text);

                                        if (isMatch) {
                                            results.push({
                                                item: text,
                                                idx,
                                                matches: [{ score, value: text, norm, indices }]
                                            });
                                        }
                                    });

                                    return results
                                }

                                _searchLogical(query) {

                                    const expression = parse(query, this.options);

                                    const evaluate = (node, item, idx) => {
                                        if (!node.children) {
                                            const { keyId, searcher } = node;

                                            const matches = this._findMatches({
                                                key: this._keyStore.get(keyId),
                                                value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                                searcher
                                            });

                                            if (matches && matches.length) {
                                                return [
                                                    {
                                                        idx,
                                                        item,
                                                        matches
                                                    }
                                                ]
                                            }

                                            return []
                                        }

                                        const res = [];
                                        for (let i = 0, len = node.children.length; i < len; i += 1) {
                                            const child = node.children[i];
                                            const result = evaluate(child, item, idx);
                                            if (result.length) {
                                                res.push(...result);
                                            } else if (node.operator === LogicalOperator.AND) {
                                                return []
                                            }
                                        }
                                        return res
                                    };

                                    const records = this._myIndex.records;
                                    const resultMap = {};
                                    const results = [];

                                    records.forEach(({ $: item, i: idx }) => {
                                        if (isDefined(item)) {
                                            let expResults = evaluate(expression, item, idx);

                                            if (expResults.length) {
                                                // Dedupe when adding
                                                if (!resultMap[idx]) {
                                                    resultMap[idx] = { idx, item, matches: [] };
                                                    results.push(resultMap[idx]);
                                                }
                                                expResults.forEach(({ matches }) => {
                                                    resultMap[idx].matches.push(...matches);
                                                });
                                            }
                                        }
                                    });

                                    return results
                                }

                                _searchObjectList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const { keys, records } = this._myIndex;
                                    const results = [];

                                    // List is Array<Object>
                                    records.forEach(({ $: item, i: idx }) => {
                                        if (!isDefined(item)) {
                                            return
                                        }

                                        let matches = [];

                                        // Iterate over every key (i.e, path), and fetch the value at that key
                                        keys.forEach((key, keyIndex) => {
                                            matches.push(
                                                ...this._findMatches({
                                                    key,
                                                    value: item[keyIndex],
                                                    searcher
                                                })
                                            );
                                        });

                                        if (matches.length) {
                                            results.push({
                                                idx,
                                                item,
                                                matches
                                            });
                                        }
                                    });

                                    return results
                                }
                                _findMatches({ key, value, searcher }) {
                                    if (!isDefined(value)) {
                                        return []
                                    }

                                    let matches = [];

                                    if (isArray(value)) {
                                        value.forEach(({ v: text, i: idx, n: norm }) => {
                                            if (!isDefined(text)) {
                                                return
                                            }

                                            const { isMatch, score, indices } = searcher.searchIn(text);

                                            if (isMatch) {
                                                matches.push({
                                                    score,
                                                    key,
                                                    value: text,
                                                    idx,
                                                    norm,
                                                    indices
                                                });
                                            }
                                        });
                                    } else {
                                        const { v: text, n: norm } = value;

                                        const { isMatch, score, indices } = searcher.searchIn(text);

                                        if (isMatch) {
                                            matches.push({ score, key, value: text, norm, indices });
                                        }
                                    }

                                    return matches
                                }
                            }

                            Fuse.version = '6.5.3';
                            Fuse.createIndex = createIndex;
                            Fuse.parseIndex = parseIndex;
                            Fuse.config = Config;

                            {
                                Fuse.parseQuery = parse;
                            }

                            {
                                register(ExtendedSearch);
                            }




                            /***/ }),

                        /***/ 857:
                        /***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_178160__) {

// ESM COMPAT FLAG
                            __nested_webpack_require_178160__.r(__webpack_exports__);

// EXPORTS
                            __nested_webpack_require_178160__.d(__webpack_exports__, {
                                "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
                                "applyMiddleware": function() { return /* binding */ applyMiddleware; },
                                "bindActionCreators": function() { return /* binding */ bindActionCreators; },
                                "combineReducers": function() { return /* binding */ combineReducers; },
                                "compose": function() { return /* binding */ compose; },
                                "createStore": function() { return /* binding */ createStore; }
                            });

                            ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
                            function _defineProperty(obj, key, value) {
                                if (key in obj) {
                                    Object.defineProperty(obj, key, {
                                        value: value,
                                        enumerable: true,
                                        configurable: true,
                                        writable: true
                                    });
                                } else {
                                    obj[key] = value;
                                }

                                return obj;
                            }
                            ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js


                            function ownKeys(object, enumerableOnly) {
                                var keys = Object.keys(object);

                                if (Object.getOwnPropertySymbols) {
                                    var symbols = Object.getOwnPropertySymbols(object);
                                    enumerableOnly && (symbols = symbols.filter(function (sym) {
                                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                                    })), keys.push.apply(keys, symbols);
                                }

                                return keys;
                            }

                            function _objectSpread2(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
                                        _defineProperty(target, key, source[key]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
                                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                                    });
                                }

                                return target;
                            }
                            ;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


                            /**
                             * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
                             *
                             * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
                             * during build.
                             * @param {number} code
                             */
                            function formatProdErrorMessage(code) {
                                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
                            }

// Inlined version of the `symbol-observable` polyfill
                            var $$observable = (function () {
                                return typeof Symbol === 'function' && Symbol.observable || '@@observable';
                            })();

                            /**
                             * These are private action types reserved by Redux.
                             * For any unknown actions, you must return the current state.
                             * If the current state is undefined, you must return the initial state.
                             * Do not reference these action types directly in your code.
                             */
                            var randomString = function randomString() {
                                return Math.random().toString(36).substring(7).split('').join('.');
                            };

                            var ActionTypes = {
                                INIT: "@@redux/INIT" + randomString(),
                                REPLACE: "@@redux/REPLACE" + randomString(),
                                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                                    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                                }
                            };

                            /**
                             * @param {any} obj The object to inspect.
                             * @returns {boolean} True if the argument appears to be a plain object.
                             */
                            function isPlainObject(obj) {
                                if (typeof obj !== 'object' || obj === null) return false;
                                var proto = obj;

                                while (Object.getPrototypeOf(proto) !== null) {
                                    proto = Object.getPrototypeOf(proto);
                                }

                                return Object.getPrototypeOf(obj) === proto;
                            }

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
                            function miniKindOf(val) {
                                if (val === void 0) return 'undefined';
                                if (val === null) return 'null';
                                var type = typeof val;

                                switch (type) {
                                    case 'boolean':
                                    case 'string':
                                    case 'number':
                                    case 'symbol':
                                    case 'function':
                                    {
                                        return type;
                                    }
                                }

                                if (Array.isArray(val)) return 'array';
                                if (isDate(val)) return 'date';
                                if (isError(val)) return 'error';
                                var constructorName = ctorName(val);

                                switch (constructorName) {
                                    case 'Symbol':
                                    case 'Promise':
                                    case 'WeakMap':
                                    case 'WeakSet':
                                    case 'Map':
                                    case 'Set':
                                        return constructorName;
                                } // other


                                return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
                            }

                            function ctorName(val) {
                                return typeof val.constructor === 'function' ? val.constructor.name : null;
                            }

                            function isError(val) {
                                return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
                            }

                            function isDate(val) {
                                if (val instanceof Date) return true;
                                return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
                            }

                            function kindOf(val) {
                                var typeOfVal = typeof val;

                                if (false) {}

                                return typeOfVal;
                            }

                            /**
                             * Creates a Redux store that holds the state tree.
                             * The only way to change the data in the store is to call `dispatch()` on it.
                             *
                             * There should only be a single store in your app. To specify how different
                             * parts of the state tree respond to actions, you may combine several reducers
                             * into a single reducer function by using `combineReducers`.
                             *
                             * @param {Function} reducer A function that returns the next state tree, given
                             * the current state tree and the action to handle.
                             *
                             * @param {any} [preloadedState] The initial state. You may optionally specify it
                             * to hydrate the state from the server in universal apps, or to restore a
                             * previously serialized user session.
                             * If you use `combineReducers` to produce the root reducer function, this must be
                             * an object with the same shape as `combineReducers` keys.
                             *
                             * @param {Function} [enhancer] The store enhancer. You may optionally specify it
                             * to enhance the store with third-party capabilities such as middleware,
                             * time travel, persistence, etc. The only store enhancer that ships with Redux
                             * is `applyMiddleware()`.
                             *
                             * @returns {Store} A Redux store that lets you read the state, dispatch actions
                             * and subscribe to changes.
                             */

                            function createStore(reducer, preloadedState, enhancer) {
                                var _ref2;

                                if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
                                    throw new Error(  true ? formatProdErrorMessage(0) : 0);
                                }

                                if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
                                    enhancer = preloadedState;
                                    preloadedState = undefined;
                                }

                                if (typeof enhancer !== 'undefined') {
                                    if (typeof enhancer !== 'function') {
                                        throw new Error(  true ? formatProdErrorMessage(1) : 0);
                                    }

                                    return enhancer(createStore)(reducer, preloadedState);
                                }

                                if (typeof reducer !== 'function') {
                                    throw new Error(  true ? formatProdErrorMessage(2) : 0);
                                }

                                var currentReducer = reducer;
                                var currentState = preloadedState;
                                var currentListeners = [];
                                var nextListeners = currentListeners;
                                var isDispatching = false;
                                /**
                                 * This makes a shallow copy of currentListeners so we can use
                                 * nextListeners as a temporary list while dispatching.
                                 *
                                 * This prevents any bugs around consumers calling
                                 * subscribe/unsubscribe in the middle of a dispatch.
                                 */

                                function ensureCanMutateNextListeners() {
                                    if (nextListeners === currentListeners) {
                                        nextListeners = currentListeners.slice();
                                    }
                                }
                                /**
                                 * Reads the state tree managed by the store.
                                 *
                                 * @returns {any} The current state tree of your application.
                                 */


                                function getState() {
                                    if (isDispatching) {
                                        throw new Error(  true ? formatProdErrorMessage(3) : 0);
                                    }

                                    return currentState;
                                }
                                /**
                                 * Adds a change listener. It will be called any time an action is dispatched,
                                 * and some part of the state tree may potentially have changed. You may then
                                 * call `getState()` to read the current state tree inside the callback.
                                 *
                                 * You may call `dispatch()` from a change listener, with the following
                                 * caveats:
                                 *
                                 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
                                 * If you subscribe or unsubscribe while the listeners are being invoked, this
                                 * will not have any effect on the `dispatch()` that is currently in progress.
                                 * However, the next `dispatch()` call, whether nested or not, will use a more
                                 * recent snapshot of the subscription list.
                                 *
                                 * 2. The listener should not expect to see all state changes, as the state
                                 * might have been updated multiple times during a nested `dispatch()` before
                                 * the listener is called. It is, however, guaranteed that all subscribers
                                 * registered before the `dispatch()` started will be called with the latest
                                 * state by the time it exits.
                                 *
                                 * @param {Function} listener A callback to be invoked on every dispatch.
                                 * @returns {Function} A function to remove this change listener.
                                 */


                                function subscribe(listener) {
                                    if (typeof listener !== 'function') {
                                        throw new Error(  true ? formatProdErrorMessage(4) : 0);
                                    }

                                    if (isDispatching) {
                                        throw new Error(  true ? formatProdErrorMessage(5) : 0);
                                    }

                                    var isSubscribed = true;
                                    ensureCanMutateNextListeners();
                                    nextListeners.push(listener);
                                    return function unsubscribe() {
                                        if (!isSubscribed) {
                                            return;
                                        }

                                        if (isDispatching) {
                                            throw new Error(  true ? formatProdErrorMessage(6) : 0);
                                        }

                                        isSubscribed = false;
                                        ensureCanMutateNextListeners();
                                        var index = nextListeners.indexOf(listener);
                                        nextListeners.splice(index, 1);
                                        currentListeners = null;
                                    };
                                }
                                /**
                                 * Dispatches an action. It is the only way to trigger a state change.
                                 *
                                 * The `reducer` function, used to create the store, will be called with the
                                 * current state tree and the given `action`. Its return value will
                                 * be considered the **next** state of the tree, and the change listeners
                                 * will be notified.
                                 *
                                 * The base implementation only supports plain object actions. If you want to
                                 * dispatch a Promise, an Observable, a thunk, or something else, you need to
                                 * wrap your store creating function into the corresponding middleware. For
                                 * example, see the documentation for the `redux-thunk` package. Even the
                                 * middleware will eventually dispatch plain object actions using this method.
                                 *
                                 * @param {Object} action A plain object representing “what changed”. It is
                                 * a good idea to keep actions serializable so you can record and replay user
                                 * sessions, or use the time travelling `redux-devtools`. An action must have
                                 * a `type` property which may not be `undefined`. It is a good idea to use
                                 * string constants for action types.
                                 *
                                 * @returns {Object} For convenience, the same action object you dispatched.
                                 *
                                 * Note that, if you use a custom middleware, it may wrap `dispatch()` to
                                 * return something else (for example, a Promise you can await).
                                 */


                                function dispatch(action) {
                                    if (!isPlainObject(action)) {
                                        throw new Error(  true ? formatProdErrorMessage(7) : 0);
                                    }

                                    if (typeof action.type === 'undefined') {
                                        throw new Error(  true ? formatProdErrorMessage(8) : 0);
                                    }

                                    if (isDispatching) {
                                        throw new Error(  true ? formatProdErrorMessage(9) : 0);
                                    }

                                    try {
                                        isDispatching = true;
                                        currentState = currentReducer(currentState, action);
                                    } finally {
                                        isDispatching = false;
                                    }

                                    var listeners = currentListeners = nextListeners;

                                    for (var i = 0; i < listeners.length; i++) {
                                        var listener = listeners[i];
                                        listener();
                                    }

                                    return action;
                                }
                                /**
                                 * Replaces the reducer currently used by the store to calculate the state.
                                 *
                                 * You might need this if your app implements code splitting and you want to
                                 * load some of the reducers dynamically. You might also need this if you
                                 * implement a hot reloading mechanism for Redux.
                                 *
                                 * @param {Function} nextReducer The reducer for the store to use instead.
                                 * @returns {void}
                                 */


                                function replaceReducer(nextReducer) {
                                    if (typeof nextReducer !== 'function') {
                                        throw new Error(  true ? formatProdErrorMessage(10) : 0);
                                    }

                                    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
                                    // Any reducers that existed in both the new and old rootReducer
                                    // will receive the previous state. This effectively populates
                                    // the new state tree with any relevant data from the old one.

                                    dispatch({
                                        type: ActionTypes.REPLACE
                                    });
                                }
                                /**
                                 * Interoperability point for observable/reactive libraries.
                                 * @returns {observable} A minimal observable of state changes.
                                 * For more information, see the observable proposal:
                                 * https://github.com/tc39/proposal-observable
                                 */


                                function observable() {
                                    var _ref;

                                    var outerSubscribe = subscribe;
                                    return _ref = {
                                        /**
                                         * The minimal observable subscription method.
                                         * @param {Object} observer Any object that can be used as an observer.
                                         * The observer object should have a `next` method.
                                         * @returns {subscription} An object with an `unsubscribe` method that can
                                         * be used to unsubscribe the observable from the store, and prevent further
                                         * emission of values from the observable.
                                         */
                                        subscribe: function subscribe(observer) {
                                            if (typeof observer !== 'object' || observer === null) {
                                                throw new Error(  true ? formatProdErrorMessage(11) : 0);
                                            }

                                            function observeState() {
                                                if (observer.next) {
                                                    observer.next(getState());
                                                }
                                            }

                                            observeState();
                                            var unsubscribe = outerSubscribe(observeState);
                                            return {
                                                unsubscribe: unsubscribe
                                            };
                                        }
                                    }, _ref[$$observable] = function () {
                                        return this;
                                    }, _ref;
                                } // When a store is created, an "INIT" action is dispatched so that every
                                // reducer returns their initial state. This effectively populates
                                // the initial state tree.


                                dispatch({
                                    type: ActionTypes.INIT
                                });
                                return _ref2 = {
                                    dispatch: dispatch,
                                    subscribe: subscribe,
                                    getState: getState,
                                    replaceReducer: replaceReducer
                                }, _ref2[$$observable] = observable, _ref2;
                            }

                            /**
                             * Prints a warning in the console if it exists.
                             *
                             * @param {String} message The warning message.
                             * @returns {void}
                             */
                            function warning(message) {
                                /* eslint-disable no-console */
                                if (typeof console !== 'undefined' && typeof console.error === 'function') {
                                    console.error(message);
                                }
                                /* eslint-enable no-console */


                                try {
                                    // This error was thrown as a convenience so that if you enable
                                    // "break on all exceptions" in your console,
                                    // it would pause the execution at this line.
                                    throw new Error(message);
                                } catch (e) {} // eslint-disable-line no-empty

                            }

                            function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                                var reducerKeys = Object.keys(reducers);
                                var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

                                if (reducerKeys.length === 0) {
                                    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
                                }

                                if (!isPlainObject(inputState)) {
                                    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
                                }

                                var unexpectedKeys = Object.keys(inputState).filter(function (key) {
                                    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                                });
                                unexpectedKeys.forEach(function (key) {
                                    unexpectedKeyCache[key] = true;
                                });
                                if (action && action.type === ActionTypes.REPLACE) return;

                                if (unexpectedKeys.length > 0) {
                                    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
                                }
                            }

                            function assertReducerShape(reducers) {
                                Object.keys(reducers).forEach(function (key) {
                                    var reducer = reducers[key];
                                    var initialState = reducer(undefined, {
                                        type: ActionTypes.INIT
                                    });

                                    if (typeof initialState === 'undefined') {
                                        throw new Error(  true ? formatProdErrorMessage(12) : 0);
                                    }

                                    if (typeof reducer(undefined, {
                                        type: ActionTypes.PROBE_UNKNOWN_ACTION()
                                    }) === 'undefined') {
                                        throw new Error(  true ? formatProdErrorMessage(13) : 0);
                                    }
                                });
                            }
                            /**
                             * Turns an object whose values are different reducer functions, into a single
                             * reducer function. It will call every child reducer, and gather their results
                             * into a single state object, whose keys correspond to the keys of the passed
                             * reducer functions.
                             *
                             * @param {Object} reducers An object whose values correspond to different
                             * reducer functions that need to be combined into one. One handy way to obtain
                             * it is to use ES6 `import * as reducers` syntax. The reducers may never return
                             * undefined for any action. Instead, they should return their initial state
                             * if the state passed to them was undefined, and the current state for any
                             * unrecognized action.
                             *
                             * @returns {Function} A reducer function that invokes every reducer inside the
                             * passed object, and builds a state object with the same shape.
                             */


                            function combineReducers(reducers) {
                                var reducerKeys = Object.keys(reducers);
                                var finalReducers = {};

                                for (var i = 0; i < reducerKeys.length; i++) {
                                    var key = reducerKeys[i];

                                    if (false) {}

                                    if (typeof reducers[key] === 'function') {
                                        finalReducers[key] = reducers[key];
                                    }
                                }

                                var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
                                // keys multiple times.

                                var unexpectedKeyCache;

                                if (false) {}

                                var shapeAssertionError;

                                try {
                                    assertReducerShape(finalReducers);
                                } catch (e) {
                                    shapeAssertionError = e;
                                }

                                return function combination(state, action) {
                                    if (state === void 0) {
                                        state = {};
                                    }

                                    if (shapeAssertionError) {
                                        throw shapeAssertionError;
                                    }

                                    if (false) { var warningMessage; }

                                    var hasChanged = false;
                                    var nextState = {};

                                    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                                        var _key = finalReducerKeys[_i];
                                        var reducer = finalReducers[_key];
                                        var previousStateForKey = state[_key];
                                        var nextStateForKey = reducer(previousStateForKey, action);

                                        if (typeof nextStateForKey === 'undefined') {
                                            var actionType = action && action.type;
                                            throw new Error(  true ? formatProdErrorMessage(14) : 0);
                                        }

                                        nextState[_key] = nextStateForKey;
                                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                                    }

                                    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                                    return hasChanged ? nextState : state;
                                };
                            }

                            function bindActionCreator(actionCreator, dispatch) {
                                return function () {
                                    return dispatch(actionCreator.apply(this, arguments));
                                };
                            }
                            /**
                             * Turns an object whose values are action creators, into an object with the
                             * same keys, but with every function wrapped into a `dispatch` call so they
                             * may be invoked directly. This is just a convenience method, as you can call
                             * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
                             *
                             * For convenience, you can also pass an action creator as the first argument,
                             * and get a dispatch wrapped function in return.
                             *
                             * @param {Function|Object} actionCreators An object whose values are action
                             * creator functions. One handy way to obtain it is to use ES6 `import * as`
                             * syntax. You may also pass a single function.
                             *
                             * @param {Function} dispatch The `dispatch` function available on your Redux
                             * store.
                             *
                             * @returns {Function|Object} The object mimicking the original object, but with
                             * every action creator wrapped into the `dispatch` call. If you passed a
                             * function as `actionCreators`, the return value will also be a single
                             * function.
                             */


                            function bindActionCreators(actionCreators, dispatch) {
                                if (typeof actionCreators === 'function') {
                                    return bindActionCreator(actionCreators, dispatch);
                                }

                                if (typeof actionCreators !== 'object' || actionCreators === null) {
                                    throw new Error(  true ? formatProdErrorMessage(16) : 0);
                                }

                                var boundActionCreators = {};

                                for (var key in actionCreators) {
                                    var actionCreator = actionCreators[key];

                                    if (typeof actionCreator === 'function') {
                                        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                                    }
                                }

                                return boundActionCreators;
                            }

                            /**
                             * Composes single-argument functions from right to left. The rightmost
                             * function can take multiple arguments as it provides the signature for
                             * the resulting composite function.
                             *
                             * @param {...Function} funcs The functions to compose.
                             * @returns {Function} A function obtained by composing the argument functions
                             * from right to left. For example, compose(f, g, h) is identical to doing
                             * (...args) => f(g(h(...args))).
                             */
                            function compose() {
                                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
                                    funcs[_key] = arguments[_key];
                                }

                                if (funcs.length === 0) {
                                    return function (arg) {
                                        return arg;
                                    };
                                }

                                if (funcs.length === 1) {
                                    return funcs[0];
                                }

                                return funcs.reduce(function (a, b) {
                                    return function () {
                                        return a(b.apply(void 0, arguments));
                                    };
                                });
                            }

                            /**
                             * Creates a store enhancer that applies middleware to the dispatch method
                             * of the Redux store. This is handy for a variety of tasks, such as expressing
                             * asynchronous actions in a concise manner, or logging every action payload.
                             *
                             * See `redux-thunk` package as an example of the Redux middleware.
                             *
                             * Because middleware is potentially asynchronous, this should be the first
                             * store enhancer in the composition chain.
                             *
                             * Note that each middleware will be given the `dispatch` and `getState` functions
                             * as named arguments.
                             *
                             * @param {...Function} middlewares The middleware chain to be applied.
                             * @returns {Function} A store enhancer applying the middleware.
                             */

                            function applyMiddleware() {
                                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
                                    middlewares[_key] = arguments[_key];
                                }

                                return function (createStore) {
                                    return function () {
                                        var store = createStore.apply(void 0, arguments);

                                        var _dispatch = function dispatch() {
                                            throw new Error(  true ? formatProdErrorMessage(15) : 0);
                                        };

                                        var middlewareAPI = {
                                            getState: store.getState,
                                            dispatch: function dispatch() {
                                                return _dispatch.apply(void 0, arguments);
                                            }
                                        };
                                        var chain = middlewares.map(function (middleware) {
                                            return middleware(middlewareAPI);
                                        });
                                        _dispatch = compose.apply(void 0, chain)(store.dispatch);
                                        return _objectSpread2(_objectSpread2({}, store), {}, {
                                            dispatch: _dispatch
                                        });
                                    };
                                };
                            }

                            /*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

                            function isCrushed() {}

                            if (false) {}




                            /***/ })

                        /******/ 	});
                    /************************************************************************/
                    /******/ 	// The module cache
                    /******/ 	var __webpack_module_cache__ = {};
                    /******/
                    /******/ 	// The require function
                    /******/ 	function __nested_webpack_require_201985__(moduleId) {
                        /******/ 		// Check if module is in cache
                        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
                        /******/ 		if (cachedModule !== undefined) {
                            /******/ 			return cachedModule.exports;
                            /******/ 		}
                        /******/ 		// Create a new module (and put it into the cache)
                        /******/ 		var module = __webpack_module_cache__[moduleId] = {
                            /******/ 			// no module.id needed
                            /******/ 			// no module.loaded needed
                            /******/ 			exports: {}
                            /******/ 		};
                        /******/
                        /******/ 		// Execute the module function
                        /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_201985__);
                        /******/
                        /******/ 		// Return the exports of the module
                        /******/ 		return module.exports;
                        /******/ 	}
                    /******/
                    /************************************************************************/
                    /******/ 	/* webpack/runtime/compat get default export */
                    /******/ 	!function() {
                        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
                        /******/ 		__nested_webpack_require_201985__.n = function(module) {
                            /******/ 			var getter = module && module.__esModule ?
                                /******/ 				function() { return module['default']; } :
                                /******/ 				function() { return module; };
                            /******/ 			__nested_webpack_require_201985__.d(getter, { a: getter });
                            /******/ 			return getter;
                            /******/ 		};
                        /******/ 	}();
                    /******/
                    /******/ 	/* webpack/runtime/define property getters */
                    /******/ 	!function() {
                        /******/ 		// define getter functions for harmony exports
                        /******/ 		__nested_webpack_require_201985__.d = function(exports, definition) {
                            /******/ 			for(var key in definition) {
                                /******/ 				if(__nested_webpack_require_201985__.o(definition, key) && !__nested_webpack_require_201985__.o(exports, key)) {
                                    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                                    /******/ 				}
                                /******/ 			}
                            /******/ 		};
                        /******/ 	}();
                    /******/
                    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
                    /******/ 	!function() {
                        /******/ 		__nested_webpack_require_201985__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
                        /******/ 	}();
                    /******/
                    /******/ 	/* webpack/runtime/make namespace object */
                    /******/ 	!function() {
                        /******/ 		// define __esModule on exports
                        /******/ 		__nested_webpack_require_201985__.r = function(exports) {
                            /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                                /******/ 			}
                            /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
                            /******/ 		};
                        /******/ 	}();
                    /******/
                    /************************************************************************/
                    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
                    !function() {
                        /* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_201985__(373);
                        /* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_201985__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
                        /* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_201985__(187);
                        /* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_201985__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
                        /* harmony import */ var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_201985__(883);
                        /* harmony import */ var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_201985__(789);
                        /* harmony import */ var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_201985__(686);







                        /* harmony default export */ __webpack_exports__["default"] = ((_scripts_choices__WEBPACK_IMPORTED_MODULE_0___default()));

                    }();
                    __webpack_exports__ = __webpack_exports__["default"];
                    /******/ 	return __webpack_exports__;
                    /******/ })()
                    ;
            });

            /***/ }),

        /***/ 18:
        /***/ (function(module, exports) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(factory) {
                if (true) {
                    // AMD. Register as an anonymous module.
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {}
            })(function() {
                "use strict";

                var FormatOptions = [
                    "decimals",
                    "thousand",
                    "mark",
                    "prefix",
                    "suffix",
                    "encoder",
                    "decoder",
                    "negativeBefore",
                    "negative",
                    "edit",
                    "undo"
                ];

                // General

                // Reverse a string
                function strReverse(a) {
                    return a
                        .split("")
                        .reverse()
                        .join("");
                }

                // Check if a string starts with a specified prefix.
                function strStartsWith(input, match) {
                    return input.substring(0, match.length) === match;
                }

                // Check is a string ends in a specified suffix.
                function strEndsWith(input, match) {
                    return input.slice(-1 * match.length) === match;
                }

                // Throw an error if formatting options are incompatible.
                function throwEqualError(F, a, b) {
                    if ((F[a] || F[b]) && F[a] === F[b]) {
                        throw new Error(a);
                    }
                }

                // Check if a number is finite and not NaN
                function isValidNumber(input) {
                    return typeof input === "number" && isFinite(input);
                }

                // Provide rounding-accurate toFixed method.
                // Borrowed: http://stackoverflow.com/a/21323330/775265
                function toFixed(value, exp) {
                    value = value.toString().split("e");
                    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
                    value = value.toString().split("e");
                    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
                }

                // Formatting

                // Accept a number as input, output formatted string.
                function formatTo(
                    decimals,
                    thousand,
                    mark,
                    prefix,
                    suffix,
                    encoder,
                    decoder,
                    negativeBefore,
                    negative,
                    edit,
                    undo,
                    input
                ) {
                    var originalInput = input,
                        inputIsNegative,
                        inputPieces,
                        inputBase,
                        inputDecimals = "",
                        output = "";

                    // Apply user encoder to the input.
                    // Expected outcome: number.
                    if (encoder) {
                        input = encoder(input);
                    }

                    // Stop if no valid number was provided, the number is infinite or NaN.
                    if (!isValidNumber(input)) {
                        return false;
                    }

                    // Rounding away decimals might cause a value of -0
                    // when using very small ranges. Remove those cases.
                    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
                        input = 0;
                    }

                    // Formatting is done on absolute numbers,
                    // decorated by an optional negative symbol.
                    if (input < 0) {
                        inputIsNegative = true;
                        input = Math.abs(input);
                    }

                    // Reduce the number of decimals to the specified option.
                    if (decimals !== false) {
                        input = toFixed(input, decimals);
                    }

                    // Transform the number into a string, so it can be split.
                    input = input.toString();

                    // Break the number on the decimal separator.
                    if (input.indexOf(".") !== -1) {
                        inputPieces = input.split(".");

                        inputBase = inputPieces[0];

                        if (mark) {
                            inputDecimals = mark + inputPieces[1];
                        }
                    } else {
                        // If it isn't split, the entire number will do.
                        inputBase = input;
                    }

                    // Group numbers in sets of three.
                    if (thousand) {
                        inputBase = strReverse(inputBase).match(/.{1,3}/g);
                        inputBase = strReverse(inputBase.join(strReverse(thousand)));
                    }

                    // If the number is negative, prefix with negation symbol.
                    if (inputIsNegative && negativeBefore) {
                        output += negativeBefore;
                    }

                    // Prefix the number
                    if (prefix) {
                        output += prefix;
                    }

                    // Normal negative option comes after the prefix. Defaults to '-'.
                    if (inputIsNegative && negative) {
                        output += negative;
                    }

                    // Append the actual number.
                    output += inputBase;
                    output += inputDecimals;

                    // Apply the suffix.
                    if (suffix) {
                        output += suffix;
                    }

                    // Run the output through a user-specified post-formatter.
                    if (edit) {
                        output = edit(output, originalInput);
                    }

                    // All done.
                    return output;
                }

                // Accept a sting as input, output decoded number.
                function formatFrom(
                    decimals,
                    thousand,
                    mark,
                    prefix,
                    suffix,
                    encoder,
                    decoder,
                    negativeBefore,
                    negative,
                    edit,
                    undo,
                    input
                ) {
                    var originalInput = input,
                        inputIsNegative,
                        output = "";

                    // User defined pre-decoder. Result must be a non empty string.
                    if (undo) {
                        input = undo(input);
                    }

                    // Test the input. Can't be empty.
                    if (!input || typeof input !== "string") {
                        return false;
                    }

                    // If the string starts with the negativeBefore value: remove it.
                    // Remember is was there, the number is negative.
                    if (negativeBefore && strStartsWith(input, negativeBefore)) {
                        input = input.replace(negativeBefore, "");
                        inputIsNegative = true;
                    }

                    // Repeat the same procedure for the prefix.
                    if (prefix && strStartsWith(input, prefix)) {
                        input = input.replace(prefix, "");
                    }

                    // And again for negative.
                    if (negative && strStartsWith(input, negative)) {
                        input = input.replace(negative, "");
                        inputIsNegative = true;
                    }

                    // Remove the suffix.
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
                    if (suffix && strEndsWith(input, suffix)) {
                        input = input.slice(0, -1 * suffix.length);
                    }

                    // Remove the thousand grouping.
                    if (thousand) {
                        input = input.split(thousand).join("");
                    }

                    // Set the decimal separator back to period.
                    if (mark) {
                        input = input.replace(mark, ".");
                    }

                    // Prepend the negative symbol.
                    if (inputIsNegative) {
                        output += "-";
                    }

                    // Add the number
                    output += input;

                    // Trim all non-numeric characters (allow '.' and '-');
                    output = output.replace(/[^0-9\.\-.]/g, "");

                    // The value contains no parse-able number.
                    if (output === "") {
                        return false;
                    }

                    // Covert to number.
                    output = Number(output);

                    // Run the user-specified post-decoder.
                    if (decoder) {
                        output = decoder(output);
                    }

                    // Check is the output is valid, otherwise: return false.
                    if (!isValidNumber(output)) {
                        return false;
                    }

                    return output;
                }

                // Framework

                // Validate formatting options
                function validate(inputOptions) {
                    var i,
                        optionName,
                        optionValue,
                        filteredOptions = {};

                    if (inputOptions["suffix"] === undefined) {
                        inputOptions["suffix"] = inputOptions["postfix"];
                    }

                    for (i = 0; i < FormatOptions.length; i += 1) {
                        optionName = FormatOptions[i];
                        optionValue = inputOptions[optionName];

                        if (optionValue === undefined) {
                            // Only default if negativeBefore isn't set.
                            if (optionName === "negative" && !filteredOptions.negativeBefore) {
                                filteredOptions[optionName] = "-";
                                // Don't set a default for mark when 'thousand' is set.
                            } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
                                filteredOptions[optionName] = ".";
                            } else {
                                filteredOptions[optionName] = false;
                            }

                            // Floating points in JS are stable up to 7 decimals.
                        } else if (optionName === "decimals") {
                            if (optionValue >= 0 && optionValue < 8) {
                                filteredOptions[optionName] = optionValue;
                            } else {
                                throw new Error(optionName);
                            }

                            // These options, when provided, must be functions.
                        } else if (
                            optionName === "encoder" ||
                            optionName === "decoder" ||
                            optionName === "edit" ||
                            optionName === "undo"
                        ) {
                            if (typeof optionValue === "function") {
                                filteredOptions[optionName] = optionValue;
                            } else {
                                throw new Error(optionName);
                            }

                            // Other options are strings.
                        } else {
                            if (typeof optionValue === "string") {
                                filteredOptions[optionName] = optionValue;
                            } else {
                                throw new Error(optionName);
                            }
                        }
                    }

                    // Some values can't be extracted from a
                    // string if certain combinations are present.
                    throwEqualError(filteredOptions, "mark", "thousand");
                    throwEqualError(filteredOptions, "prefix", "negative");
                    throwEqualError(filteredOptions, "prefix", "negativeBefore");

                    return filteredOptions;
                }

                // Pass all options as function arguments
                function passAll(options, method, input) {
                    var i,
                        args = [];

                    // Add all options in order of FormatOptions
                    for (i = 0; i < FormatOptions.length; i += 1) {
                        args.push(options[FormatOptions[i]]);
                    }

                    // Append the input, then call the method, presenting all
                    // options as arguments.
                    args.push(input);
                    return method.apply("", args);
                }

                function wNumb(options) {
                    if (!(this instanceof wNumb)) {
                        return new wNumb(options);
                    }

                    if (typeof options !== "object") {
                        return;
                    }

                    options = validate(options);

                    // Call 'formatTo' with proper arguments.
                    this.to = function(input) {
                        return passAll(options, formatTo, input);
                    };

                    // Call 'formatFrom' with proper arguments.
                    this.from = function(input) {
                        return passAll(options, formatFrom, input);
                    };
                }

                return wNumb;
            });


            /***/ })

        /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	!function() {
        /******/ 		// define getter functions for harmony exports
        /******/ 		__webpack_require__.d = function(exports, definition) {
            /******/ 			for(var key in definition) {
                /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ 				}
                /******/ 			}
            /******/ 		};
        /******/ 	}();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	!function() {
        /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
        /******/ 	}();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	!function() {
        /******/ 		// define __esModule on exports
        /******/ 		__webpack_require__.r = function(exports) {
            /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 			}
            /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 		};
        /******/ 	}();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
    !function() {
        "use strict";

// NAMESPACE OBJECT: ./node_modules/@popperjs/core/lib/index.js
        var lib_namespaceObject = {};
        __webpack_require__.r(lib_namespaceObject);
        __webpack_require__.d(lib_namespaceObject, {
            "afterMain": function() { return afterMain; },
            "afterRead": function() { return afterRead; },
            "afterWrite": function() { return afterWrite; },
            "applyStyles": function() { return modifiers_applyStyles; },
            "arrow": function() { return modifiers_arrow; },
            "auto": function() { return auto; },
            "basePlacements": function() { return basePlacements; },
            "beforeMain": function() { return beforeMain; },
            "beforeRead": function() { return beforeRead; },
            "beforeWrite": function() { return beforeWrite; },
            "bottom": function() { return bottom; },
            "clippingParents": function() { return clippingParents; },
            "computeStyles": function() { return modifiers_computeStyles; },
            "createPopper": function() { return popper_createPopper; },
            "createPopperBase": function() { return createPopper; },
            "createPopperLite": function() { return popper_lite_createPopper; },
            "detectOverflow": function() { return detectOverflow; },
            "end": function() { return end; },
            "eventListeners": function() { return eventListeners; },
            "flip": function() { return modifiers_flip; },
            "hide": function() { return modifiers_hide; },
            "left": function() { return left; },
            "main": function() { return main; },
            "modifierPhases": function() { return modifierPhases; },
            "offset": function() { return modifiers_offset; },
            "placements": function() { return enums_placements; },
            "popper": function() { return popper; },
            "popperGenerator": function() { return popperGenerator; },
            "popperOffsets": function() { return modifiers_popperOffsets; },
            "preventOverflow": function() { return modifiers_preventOverflow; },
            "read": function() { return read; },
            "reference": function() { return reference; },
            "right": function() { return right; },
            "start": function() { return start; },
            "top": function() { return enums_top; },
            "variationPlacements": function() { return variationPlacements; },
            "viewport": function() { return viewport; },
            "write": function() { return write; }
        });

        ;// CONCATENATED MODULE: ./src/assets/js/components/themeSwitch.js
        const themeSwitch = () => {
            const themeBtn = document.getElementById('themeBtn');

            const setTheme = () => {
                const currentTheme = localStorage.getItem('theme');
                if (!currentTheme) {
                    localStorage.setItem('theme', 'light');
                    document.documentElement.dataset.theme = 'light';
                    return;
                }
                document.documentElement.dataset.theme = currentTheme;
            }

            setTheme();

            const transition = () => {
                document.documentElement.classList.add('transition');
                setTimeout(() => {
                    document.documentElement.classList.remove('transition');
                }, 1000)
            }

            if(themeBtn){

                themeBtn.addEventListener('click', () => {
                    const { theme } = document.documentElement.dataset;
                    const themeTo = theme === 'light' ? 'dark' : 'light';
                    document.documentElement.dataset.theme = themeTo;
                    localStorage.setItem('theme', themeTo);
                    transition();
                });
            }


        }

        /* harmony default export */ var components_themeSwitch = (themeSwitch);
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/raf.js
        var win = window;

        var raf = win.requestAnimationFrame
            || win.webkitRequestAnimationFrame
            || win.mozRequestAnimationFrame
            || win.msRequestAnimationFrame
            || function(cb) { return setTimeout(cb, 16); };

        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/caf.js
        var caf_win = window;

        var caf = caf_win.cancelAnimationFrame
            || caf_win.mozCancelAnimationFrame
            || function(id){ clearTimeout(id); };

        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/extend.js
        function extend() {
            var obj, name, copy,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length;

            for (; i < length; i++) {
                if ((obj = arguments[i]) !== null) {
                    for (name in obj) {
                        copy = obj[name];

                        if (target === copy) {
                            continue;
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/checkStorageValue.js
        function checkStorageValue (value) {
            return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setLocalStorage.js
        function setLocalStorage(storage, key, value, access) {
            if (access) {
                try { storage.setItem(key, value); } catch (e) {}
            }
            return value;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getSlideId.js
        function getSlideId() {
            var id = window.tnsId;
            window.tnsId = !id ? 1 : id + 1;

            return 'tns' + window.tnsId;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getBody.js
        function getBody () {
            var doc = document,
                body = doc.body;

            if (!body) {
                body = doc.createElement('body');
                body.fake = true;
            }

            return body;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/docElement.js
        var docElement = document.documentElement;
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setFakeBody.js


        function setFakeBody (body) {
            var docOverflow = '';
            if (body.fake) {
                docOverflow = docElement.style.overflow;
                //avoid crashing IE8, if background image is used
                body.style.background = '';
                //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
                body.style.overflow = docElement.style.overflow = 'hidden';
                docElement.appendChild(body);
            }

            return docOverflow;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/resetFakeBody.js


        function resetFakeBody (body, docOverflow) {
            if (body.fake) {
                body.remove();
                docElement.style.overflow = docOverflow;
                // Trigger layout so kinetic scrolling isn't disabled in iOS6+
                // eslint-disable-next-line
                docElement.offsetHeight;
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/calc.js
// get css-calc
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc();




        function calc() {
            var doc = document,
                body = getBody(),
                docOverflow = setFakeBody(body),
                div = doc.createElement('div'),
                result = false;

            body.appendChild(div);
            try {
                var str = '(10px * 10)',
                    vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
                    val;
                for (var i = 0; i < 3; i++) {
                    val = vals[i];
                    div.style.width = val;
                    if (div.offsetWidth === 100) {
                        result = val.replace(str, '');
                        break;
                    }
                }
            } catch (e) {}

            body.fake ? resetFakeBody(body, docOverflow) : div.remove();

            return result;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/percentageLayout.js
// get subpixel support value
// @return - boolean




        function percentageLayout() {
            // check subpixel layout supporting
            var doc = document,
                body = getBody(),
                docOverflow = setFakeBody(body),
                wrapper = doc.createElement('div'),
                outer = doc.createElement('div'),
                str = '',
                count = 70,
                perPage = 3,
                supported = false;

            wrapper.className = "tns-t-subp2";
            outer.className = "tns-t-ct";

            for (var i = 0; i < count; i++) {
                str += '<div></div>';
            }

            outer.innerHTML = str;
            wrapper.appendChild(outer);
            body.appendChild(wrapper);

            supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

            body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();

            return supported;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js




        function mediaquerySupport () {
            if (window.matchMedia || window.msMatchMedia) {
                return true;
            }

            var doc = document,
                body = getBody(),
                docOverflow = setFakeBody(body),
                div = doc.createElement('div'),
                style = doc.createElement('style'),
                rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
                position;

            style.type = 'text/css';
            div.className = 'tns-mq-test';

            body.appendChild(style);
            body.appendChild(div);

            if (style.styleSheet) {
                style.styleSheet.cssText = rule;
            } else {
                style.appendChild(doc.createTextNode(rule));
            }

            position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

            body.fake ? resetFakeBody(body, docOverflow) : div.remove();

            return position === "absolute";
        }

        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/createStyleSheet.js
// create and append style sheet
        function createStyleSheet (media, nonce) {
            // Create the <style> tag
            var style = document.createElement("style");
            // style.setAttribute("type", "text/css");

            // Add a media (and/or media query) here if you'd like!
            // style.setAttribute("media", "screen")
            // style.setAttribute("media", "only screen and (max-width : 1024px)")
            if (media) { style.setAttribute("media", media); }

            // Add nonce attribute for Content Security Policy
            if (nonce) { style.setAttribute("nonce", nonce); }

            // WebKit hack :(
            // style.appendChild(document.createTextNode(""));

            // Add the <style> element to the page
            document.querySelector('head').appendChild(style);

            return style.sheet ? style.sheet : style.styleSheet;
        };
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addCSSRule.js
// cross browsers addRule method

        function addCSSRule(sheet, selector, rules, index) {
            // return raf(function() {
            'insertRule' in sheet ?
                sheet.insertRule(selector + '{' + rules + '}', index) :
                sheet.addRule(selector, rules, index);
            // });
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeCSSRule.js
// cross browsers addRule method

        function removeCSSRule(sheet, index) {
            // return raf(function() {
            'deleteRule' in sheet ?
                sheet.deleteRule(index) :
                sheet.removeRule(index);
            // });
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js
        function getCssRulesLength(sheet) {
            var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
            return rule.length;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/toDegree.js
        function toDegree (y, x) {
            return Math.atan2(y, x) * (180 / Math.PI);
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getTouchDirection.js
        function getTouchDirection(angle, range) {
            var direction = false,
                gap = Math.abs(90 - Math.abs(angle));

            if (gap >= 90 - range) {
                direction = 'horizontal';
            } else if (gap <= range) {
                direction = 'vertical';
            }

            return direction;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/forEach.js
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
        function forEach (arr, callback, scope) {
            for (var i = 0, l = arr.length; i < l; i++) {
                callback.call(scope, arr[i], i);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/classListSupport.js
        var classListSupport = 'classList' in document.createElement('_');
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hasClass.js


        var hasClass = classListSupport ?
            function (el, str) { return el.classList.contains(str); } :
            function (el, str) { return el.className.indexOf(str) >= 0; };


        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addClass.js

        var addClass = classListSupport ?
            function (el, str) {
                if (!hasClass(el,  str)) { el.classList.add(str); }
            } :
            function (el, str) {
                if (!hasClass(el,  str)) { el.className += ' ' + str; }
            };


        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeClass.js

        var removeClass = classListSupport ?
            function (el, str) {
                if (hasClass(el,  str)) { el.classList.remove(str); }
            } :
            function (el, str) {
                if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
            };


        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hasAttr.js
        function hasAttr(el, attr) {
            return el.hasAttribute(attr);
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getAttr.js
        function getAttr(el, attr) {
            return el.getAttribute(attr);
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isNodeList.js
        function isNodeList(el) {
            // Only NodeList has the "item()" function
            return typeof el.item !== "undefined";
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setAttrs.js


        function setAttrs(els, attrs) {
            els = (isNodeList(els) || els instanceof Array) ? els : [els];
            if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

            for (var i = els.length; i--;) {
                for(var key in attrs) {
                    els[i].setAttribute(key, attrs[key]);
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeAttrs.js


        function removeAttrs(els, attrs) {
            els = (isNodeList(els) || els instanceof Array) ? els : [els];
            attrs = (attrs instanceof Array) ? attrs : [attrs];

            var attrLength = attrs.length;
            for (var i = els.length; i--;) {
                for (var j = attrLength; j--;) {
                    els[i].removeAttribute(attrs[j]);
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
        function arrayFromNodeList (nl) {
            var arr = [];
            for (var i = 0, l = nl.length; i < l; i++) {
                arr.push(nl[i]);
            }
            return arr;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hideElement.js
        function hideElement(el, forceHide) {
            if (el.style.display !== 'none') { el.style.display = 'none'; }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/showElement.js
        function showElement(el, forceHide) {
            if (el.style.display === 'none') { el.style.display = ''; }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isVisible.js
        function isVisible(el) {
            return window.getComputedStyle(el).display !== 'none';
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/whichProperty.js
        function whichProperty(props){
            if (typeof props === 'string') {
                var arr = [props],
                    Props = props.charAt(0).toUpperCase() + props.substr(1),
                    prefixes = ['Webkit', 'Moz', 'ms', 'O'];

                prefixes.forEach(function(prefix) {
                    if (prefix !== 'ms' || props === 'transform') {
                        arr.push(prefix + Props);
                    }
                });

                props = arr;
            }

            var el = document.createElement('fakeelement'),
                len = props.length;
            for(var i = 0; i < props.length; i++){
                var prop = props[i];
                if( el.style[prop] !== undefined ){ return prop; }
            }

            return false; // explicit for ie9-
        }

        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/has3DTransforms.js




        function has3DTransforms(tf){
            if (!tf) { return false; }
            if (!window.getComputedStyle) { return false; }

            var doc = document,
                body = getBody(),
                docOverflow = setFakeBody(body),
                el = doc.createElement('p'),
                has3d,
                cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

            cssTF += 'transform';

            // Add it to the body to get the computed style
            body.insertBefore(el, null);

            el.style[tf] = 'translate3d(1px,1px,1px)';
            has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

            body.fake ? resetFakeBody(body, docOverflow) : el.remove();

            return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
        }

        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getEndProperty.js
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
        function getEndProperty(propIn, propOut) {
            var endProp = false;
            if (/^Webkit/.test(propIn)) {
                endProp = 'webkit' + propOut + 'End';
            } else if (/^O/.test(propIn)) {
                endProp = 'o' + propOut + 'End';
            } else if (propIn) {
                endProp = propOut.toLowerCase() + 'end';
            }
            return endProp;
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/passiveOption.js
// Test via a getter in the options object to see if the passive property is accessed
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("test", null, opts);
        } catch (e) {}
        var passiveOption = supportsPassive ? { passive: true } : false;
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addEvents.js


        function addEvents(el, obj, preventScrolling) {
            for (var prop in obj) {
                var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
                el.addEventListener(prop, obj[prop], option);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeEvents.js


        function removeEvents(el, obj) {
            for (var prop in obj) {
                var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
                el.removeEventListener(prop, obj[prop], option);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/events.js
        function Events() {
            return {
                topics: {},
                on: function (eventName, fn) {
                    this.topics[eventName] = this.topics[eventName] || [];
                    this.topics[eventName].push(fn);
                },
                off: function(eventName, fn) {
                    if (this.topics[eventName]) {
                        for (var i = 0; i < this.topics[eventName].length; i++) {
                            if (this.topics[eventName][i] === fn) {
                                this.topics[eventName].splice(i, 1);
                                break;
                            }
                        }
                    }
                },
                emit: function (eventName, data) {
                    data.type = eventName;
                    if (this.topics[eventName]) {
                        this.topics[eventName].forEach(function(fn) {
                            fn(data, eventName);
                        });
                    }
                }
            };
        };
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/jsTransform.js
        function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
            var tick = Math.min(duration, 10),
                unit = (to.indexOf('%') >= 0) ? '%' : 'px',
                to = to.replace(unit, ''),
                from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
                positionTick = (to - from) / duration * tick,
                running;

            setTimeout(moveElement, tick);
            function moveElement() {
                duration -= tick;
                from += positionTick;
                element.style[attr] = prefix + from + unit + postfix;
                if (duration > 0) {
                    setTimeout(moveElement, tick);
                } else {
                    callback();
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/tiny-slider/src/tiny-slider.js
// Object.keys
        if (!Object.keys) {
            Object.keys = function(object) {
                var keys = [];
                for (var name in object) {
                    if (Object.prototype.hasOwnProperty.call(object, name)) {
                        keys.push(name);
                    }
                }
                return keys;
            };
        }

// ChildNode.remove
        if(!("remove" in Element.prototype)){
            Element.prototype.remove = function(){
                if(this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }




































        var tns = function(options) {
            options = extend({
                container: '.slider',
                mode: 'carousel',
                axis: 'horizontal',
                items: 1,
                gutter: 0,
                edgePadding: 0,
                fixedWidth: false,
                autoWidth: false,
                viewportMax: false,
                slideBy: 1,
                center: false,
                controls: true,
                controlsPosition: 'top',
                controlsText: ['prev', 'next'],
                controlsContainer: false,
                prevButton: false,
                nextButton: false,
                nav: true,
                navPosition: 'top',
                navContainer: false,
                navAsThumbnails: false,
                arrowKeys: false,
                speed: 300,
                autoplay: false,
                autoplayPosition: 'top',
                autoplayTimeout: 5000,
                autoplayDirection: 'forward',
                autoplayText: ['start', 'stop'],
                autoplayHoverPause: false,
                autoplayButton: false,
                autoplayButtonOutput: true,
                autoplayResetOnVisibility: true,
                animateIn: 'tns-fadeIn',
                animateOut: 'tns-fadeOut',
                animateNormal: 'tns-normal',
                animateDelay: false,
                loop: true,
                rewind: false,
                autoHeight: false,
                responsive: false,
                lazyload: false,
                lazyloadSelector: '.tns-lazy-img',
                touch: true,
                mouseDrag: false,
                swipeAngle: 15,
                nested: false,
                preventActionWhenRunning: false,
                preventScrollOnTouch: false,
                freezable: true,
                onInit: false,
                useLocalStorage: true,
                nonce: false
            }, options || {});

            var doc = document,
                win = window,
                KEYS = {
                    ENTER: 13,
                    SPACE: 32,
                    LEFT: 37,
                    RIGHT: 39
                },
                tnsStorage = {},
                localStorageAccess = options.useLocalStorage;

            if (localStorageAccess) {
                // check browser version and local storage access
                var browserInfo = navigator.userAgent;
                var uid = new Date;

                try {
                    tnsStorage = win.localStorage;
                    if (tnsStorage) {
                        tnsStorage.setItem(uid, uid);
                        localStorageAccess = tnsStorage.getItem(uid) == uid;
                        tnsStorage.removeItem(uid);
                    } else {
                        localStorageAccess = false;
                    }
                    if (!localStorageAccess) { tnsStorage = {}; }
                } catch(e) {
                    localStorageAccess = false;
                }

                if (localStorageAccess) {
                    // remove storage when browser version changes
                    if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
                        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
                    }
                    // update browserInfo
                    localStorage['tnsApp'] = browserInfo;
                }
            }

            var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
                PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
                CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
                TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
                HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
                TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
                TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
                ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
                ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
                TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
                ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);

            // get element nodes from selectors
            var supportConsoleWarn = win.console && typeof win.console.warn === "function",
                tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
                optionsElements = {};

            tnsList.forEach(function(item) {
                if (typeof options[item] === 'string') {
                    var str = options[item],
                        el = doc.querySelector(str);
                    optionsElements[item] = str;

                    if (el && el.nodeName) {
                        options[item] = el;
                    } else {
                        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
                        return;
                    }
                }
            });

            // make sure at least 1 slide
            if (options.container.children.length < 1) {
                if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
                return;
            }

            // update options
            var responsive = options.responsive,
                nested = options.nested,
                carousel = options.mode === 'carousel' ? true : false;

            if (responsive) {
                // apply responsive[0] to options and remove it
                if (0 in responsive) {
                    options = extend(options, responsive[0]);
                    delete responsive[0];
                }

                var responsiveTem = {};
                for (var key in responsive) {
                    var val = responsive[key];
                    // update responsive
                    // from: 300: 2
                    // to:
                    //   300: {
                    //     items: 2
                    //   }
                    val = typeof val === 'number' ? {items: val} : val;
                    responsiveTem[key] = val;
                }
                responsive = responsiveTem;
                responsiveTem = null;
            }

            // update options
            function updateOptions (obj) {
                for (var key in obj) {
                    if (!carousel) {
                        if (key === 'slideBy') { obj[key] = 'page'; }
                        if (key === 'edgePadding') { obj[key] = false; }
                        if (key === 'autoHeight') { obj[key] = false; }
                    }

                    // update responsive options
                    if (key === 'responsive') { updateOptions(obj[key]); }
                }
            }
            if (!carousel) { updateOptions(options); }


            // === define and set variables ===
            if (!carousel) {
                options.axis = 'horizontal';
                options.slideBy = 'page';
                options.edgePadding = false;

                var animateIn = options.animateIn,
                    animateOut = options.animateOut,
                    animateDelay = options.animateDelay,
                    animateNormal = options.animateNormal;
            }

            var horizontal = options.axis === 'horizontal' ? true : false,
                outerWrapper = doc.createElement('div'),
                innerWrapper = doc.createElement('div'),
                middleWrapper,
                container = options.container,
                containerParent = container.parentNode,
                containerHTML = container.outerHTML,
                slideItems = container.children,
                slideCount = slideItems.length,
                breakpointZone,
                windowWidth = getWindowWidth(),
                isOn = false;
            if (responsive) { setBreakpointZone(); }
            if (carousel) { container.className += ' tns-vpfix'; }

            // fixedWidth: viewport > rightBoundary > indexMax
            var autoWidth = options.autoWidth,
                fixedWidth = getOption('fixedWidth'),
                edgePadding = getOption('edgePadding'),
                gutter = getOption('gutter'),
                viewport = getViewportWidth(),
                center = getOption('center'),
                items = !autoWidth ? Math.floor(getOption('items')) : 1,
                slideBy = getOption('slideBy'),
                viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
                arrowKeys = getOption('arrowKeys'),
                speed = getOption('speed'),
                rewind = options.rewind,
                loop = rewind ? false : options.loop,
                autoHeight = getOption('autoHeight'),
                controls = getOption('controls'),
                controlsText = getOption('controlsText'),
                nav = getOption('nav'),
                touch = getOption('touch'),
                mouseDrag = getOption('mouseDrag'),
                autoplay = getOption('autoplay'),
                autoplayTimeout = getOption('autoplayTimeout'),
                autoplayText = getOption('autoplayText'),
                autoplayHoverPause = getOption('autoplayHoverPause'),
                autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
                sheet = createStyleSheet(null, getOption('nonce')),
                lazyload = options.lazyload,
                lazyloadSelector = options.lazyloadSelector,
                slidePositions, // collection of slide positions
                slideItemsOut = [],
                cloneCount = loop ? getCloneCountForLoop() : 0,
                slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
                hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
                rightBoundary = fixedWidth ? getRightBoundary() : null,
                updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
                // transform
                transformAttr = horizontal ? 'left' : 'top',
                transformPrefix = '',
                transformPostfix = '',
                // index
                getIndexMax = (function () {
                    if (fixedWidth) {
                        return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
                    } else if (autoWidth) {
                        return function() {
                            for (var i = 0; i < slideCountNew; i++) {
                                if (slidePositions[i] >= - rightBoundary) { return i; }
                            }
                        };
                    } else {
                        return function() {
                            if (center && carousel && !loop) {
                                return slideCount - 1;
                            } else {
                                return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
                            }
                        };
                    }
                })(),
                index = getStartIndex(getOption('startIndex')),
                indexCached = index,
                displayIndex = getCurrentSlide(),
                indexMin = 0,
                indexMax = !autoWidth ? getIndexMax() : null,
                // resize
                resizeTimer,
                preventActionWhenRunning = options.preventActionWhenRunning,
                swipeAngle = options.swipeAngle,
                moveDirectionExpected = swipeAngle ? '?' : true,
                running = false,
                onInit = options.onInit,
                events = new Events(),
                // id, class
                newContainerClasses = ' tns-slider tns-' + options.mode,
                slideId = container.id || getSlideId(),
                disable = getOption('disable'),
                disabled = false,
                freezable = options.freezable,
                freeze = freezable && !autoWidth ? getFreeze() : false,
                frozen = false,
                controlsEvents = {
                    'click': onControlsClick,
                    'keydown': onControlsKeydown
                },
                navEvents = {
                    'click': onNavClick,
                    'keydown': onNavKeydown
                },
                hoverEvents = {
                    'mouseover': mouseoverPause,
                    'mouseout': mouseoutRestart
                },
                visibilityEvent = {'visibilitychange': onVisibilityChange},
                docmentKeydownEvent = {'keydown': onDocumentKeydown},
                touchEvents = {
                    'touchstart': onPanStart,
                    'touchmove': onPanMove,
                    'touchend': onPanEnd,
                    'touchcancel': onPanEnd
                }, dragEvents = {
                    'mousedown': onPanStart,
                    'mousemove': onPanMove,
                    'mouseup': onPanEnd,
                    'mouseleave': onPanEnd
                },
                hasControls = hasOption('controls'),
                hasNav = hasOption('nav'),
                navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
                hasAutoplay = hasOption('autoplay'),
                hasTouch = hasOption('touch'),
                hasMouseDrag = hasOption('mouseDrag'),
                slideActiveClass = 'tns-slide-active',
                slideClonedClass = 'tns-slide-cloned',
                imgCompleteClass = 'tns-complete',
                imgEvents = {
                    'load': onImgLoaded,
                    'error': onImgFailed
                },
                imgsComplete,
                liveregionCurrent,
                preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

            // controls
            if (hasControls) {
                var controlsContainer = options.controlsContainer,
                    controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
                    prevButton = options.prevButton,
                    nextButton = options.nextButton,
                    prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
                    nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
                    prevIsButton,
                    nextIsButton;
            }

            // nav
            if (hasNav) {
                var navContainer = options.navContainer,
                    navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
                    navItems,
                    pages = autoWidth ? slideCount : getPages(),
                    pagesCached = 0,
                    navClicked = -1,
                    navCurrentIndex = getCurrentNavIndex(),
                    navCurrentIndexCached = navCurrentIndex,
                    navActiveClass = 'tns-nav-active',
                    navStr = 'Carousel Page ',
                    navStrCurrent = ' (Current Slide)';
            }

            // autoplay
            if (hasAutoplay) {
                var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
                    autoplayButton = options.autoplayButton,
                    autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
                    autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
                    autoplayTimer,
                    animating,
                    autoplayHoverPaused,
                    autoplayUserPaused,
                    autoplayVisibilityPaused;
            }

            if (hasTouch || hasMouseDrag) {
                var initPosition = {},
                    lastPosition = {},
                    translateInit,
                    disX,
                    disY,
                    panStart = false,
                    rafIndex,
                    getDist = horizontal ?
                        function(a, b) { return a.x - b.x; } :
                        function(a, b) { return a.y - b.y; };
            }

            // disable slider when slidecount <= items
            if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

            if (TRANSFORM) {
                transformAttr = TRANSFORM;
                transformPrefix = 'translate';

                if (HAS3DTRANSFORMS) {
                    transformPrefix += horizontal ? '3d(' : '3d(0px, ';
                    transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
                } else {
                    transformPrefix += horizontal ? 'X(' : 'Y(';
                    transformPostfix = ')';
                }

            }

            if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
            initStructure();
            initSheet();
            initSliderTransform();

            // === COMMON FUNCTIONS === //
            function resetVariblesWhenDisable (condition) {
                if (condition) {
                    controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
                }
            }

            function getCurrentSlide () {
                var tem = carousel ? index - cloneCount : index;
                while (tem < 0) { tem += slideCount; }
                return tem%slideCount + 1;
            }

            function getStartIndex (ind) {
                ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
                return carousel ? ind + cloneCount : ind;
            }

            function getAbsIndex (i) {
                if (i == null) { i = index; }

                if (carousel) { i -= cloneCount; }
                while (i < 0) { i += slideCount; }

                return Math.floor(i%slideCount);
            }

            function getCurrentNavIndex () {
                var absIndex = getAbsIndex(),
                    result;

                result = navAsThumbnails ? absIndex :
                    fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
                        Math.floor(absIndex / items);

                // set active nav to the last one when reaches the right edge
                if (!loop && carousel && index === indexMax) { result = pages - 1; }

                return result;
            }

            function getItemsMax () {
                // fixedWidth or autoWidth while viewportMax is not available
                if (autoWidth || (fixedWidth && !viewportMax)) {
                    return slideCount - 1;
                    // most cases
                } else {
                    var str = fixedWidth ? 'fixedWidth' : 'items',
                        arr = [];

                    if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

                    if (responsive) {
                        for (var bp in responsive) {
                            var tem = responsive[bp][str];
                            if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
                        }
                    }

                    if (!arr.length) { arr.push(0); }

                    return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
                }
            }

            function getCloneCountForLoop () {
                var itemsMax = getItemsMax(),
                    result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
                result = Math.max(itemsMax, result);

                return hasOption('edgePadding') ? result + 1 : result;
            }

            function getWindowWidth () {
                return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
            }

            function getInsertPosition (pos) {
                return pos === 'top' ? 'afterbegin' : 'beforeend';
            }

            function getClientWidth (el) {
                if (el == null) { return; }
                var div = doc.createElement('div'), rect, width;
                el.appendChild(div);
                rect = div.getBoundingClientRect();
                width = rect.right - rect.left;
                div.remove();
                return width || getClientWidth(el.parentNode);
            }

            function getViewportWidth () {
                var gap = edgePadding ? edgePadding * 2 - gutter : 0;
                return getClientWidth(containerParent) - gap;
            }

            function hasOption (item) {
                if (options[item]) {
                    return true;
                } else {
                    if (responsive) {
                        for (var bp in responsive) {
                            if (responsive[bp][item]) { return true; }
                        }
                    }
                    return false;
                }
            }

            // get option:
            // fixed width: viewport, fixedWidth, gutter => items
            // others: window width => all variables
            // all: items => slideBy
            function getOption (item, ww) {
                if (ww == null) { ww = windowWidth; }

                if (item === 'items' && fixedWidth) {
                    return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

                } else {
                    var result = options[item];

                    if (responsive) {
                        for (var bp in responsive) {
                            // bp: convert string to number
                            if (ww >= parseInt(bp)) {
                                if (item in responsive[bp]) { result = responsive[bp][item]; }
                            }
                        }
                    }

                    if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
                    if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

                    return result;
                }
            }

            function getSlideMarginLeft (i) {
                return CALC ?
                    CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
                    i * 100 / slideCountNew + '%';
            }

            function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
                var str = '';

                if (edgePaddingTem !== undefined) {
                    var gap = edgePaddingTem;
                    if (gutterTem) { gap -= gutterTem; }
                    str = horizontal ?
                        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
                        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
                } else if (gutterTem && !fixedWidthTem) {
                    var gutterTemUnit = '-' + gutterTem + 'px',
                        dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
                    str = 'margin: 0 ' + dir + ';'
                }

                if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
                return str;
            }

            function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
                if (fixedWidthTem) {
                    return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
                } else {
                    return CALC ?
                        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
                        slideCountNew * 100 / itemsTem + '%';
                }
            }

            function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
                var width;

                if (fixedWidthTem) {
                    width = (fixedWidthTem + gutterTem) + 'px';
                } else {
                    if (!carousel) { itemsTem = Math.floor(itemsTem); }
                    var dividend = carousel ? slideCountNew : itemsTem;
                    width = CALC ?
                        CALC + '(100% / ' + dividend + ')' :
                        100 / dividend + '%';
                }

                width = 'width:' + width;

                // inner slider: overwrite outer slider styles
                return nested !== 'inner' ? width + ';' : width + ' !important;';
            }

            function getSlideGutterStyle (gutterTem) {
                var str = '';

                // gutter maybe interger || 0
                // so can't use 'if (gutter)'
                if (gutterTem !== false) {
                    var prop = horizontal ? 'padding-' : 'margin-',
                        dir = horizontal ? 'right' : 'bottom';
                    str = prop +  dir + ': ' + gutterTem + 'px;';
                }

                return str;
            }

            function getCSSPrefix (name, num) {
                var prefix = name.substring(0, name.length - num).toLowerCase();
                if (prefix) { prefix = '-' + prefix + '-'; }

                return prefix;
            }

            function getTransitionDurationStyle (speed) {
                return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
            }

            function getAnimationDurationStyle (speed) {
                return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
            }

            function initStructure () {
                var classOuter = 'tns-outer',
                    classInner = 'tns-inner',
                    hasGutter = hasOption('gutter');

                outerWrapper.className = classOuter;
                innerWrapper.className = classInner;
                outerWrapper.id = slideId + '-ow';
                innerWrapper.id = slideId + '-iw';

                // set container properties
                if (container.id === '') { container.id = slideId; }
                newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
                newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
                if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
                newContainerClasses += ' tns-' + options.axis;
                container.className += newContainerClasses;

                // add constrain layer for carousel
                if (carousel) {
                    middleWrapper = doc.createElement('div');
                    middleWrapper.id = slideId + '-mw';
                    middleWrapper.className = 'tns-ovh';

                    outerWrapper.appendChild(middleWrapper);
                    middleWrapper.appendChild(innerWrapper);
                } else {
                    outerWrapper.appendChild(innerWrapper);
                }

                if (autoHeight) {
                    var wp = middleWrapper ? middleWrapper : innerWrapper;
                    wp.className += ' tns-ah';
                }

                containerParent.insertBefore(outerWrapper, container);
                innerWrapper.appendChild(container);

                // add id, class, aria attributes
                // before clone slides
                forEach(slideItems, function(item, i) {
                    addClass(item, 'tns-item');
                    if (!item.id) { item.id = slideId + '-item' + i; }
                    if (!carousel && animateNormal) { addClass(item, animateNormal); }
                    setAttrs(item, {
                        'aria-hidden': 'true',
                        'tabindex': '-1'
                    });
                });

                // ## clone slides
                // carousel: n + slides + n
                // gallery:      slides + n
                if (cloneCount) {
                    var fragmentBefore = doc.createDocumentFragment(),
                        fragmentAfter = doc.createDocumentFragment();

                    for (var j = cloneCount; j--;) {
                        var num = j%slideCount,
                            cloneFirst = slideItems[num].cloneNode(true);
                        addClass(cloneFirst, slideClonedClass);
                        removeAttrs(cloneFirst, 'id');
                        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

                        if (carousel) {
                            var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                            addClass(cloneLast, slideClonedClass);
                            removeAttrs(cloneLast, 'id');
                            fragmentBefore.appendChild(cloneLast);
                        }
                    }

                    container.insertBefore(fragmentBefore, container.firstChild);
                    container.appendChild(fragmentAfter);
                    slideItems = container.children;
                }

            }

            function initSliderTransform () {
                // ## images loaded/failed
                if (hasOption('autoHeight') || autoWidth || !horizontal) {
                    var imgs = container.querySelectorAll('img');

                    // add img load event listener
                    forEach(imgs, function(img) {
                        var src = img.src;

                        if (!lazyload) {
                            // not data img
                            if (src && src.indexOf('data:image') < 0) {
                                img.src = '';
                                addEvents(img, imgEvents);
                                addClass(img, 'loading');

                                img.src = src;
                                // data img
                            } else {
                                imgLoaded(img);
                            }
                        }
                    });

                    // set imgsComplete
                    raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), function() { imgsComplete = true; }); });

                    // reset imgs for auto height: check visible imgs only
                    if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

                    lazyload ? initSliderTransformStyleCheck() : raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck); });

                } else {
                    // set container transform property
                    if (carousel) { doContainerTransformSilent(); }

                    // update slider tools and events
                    initTools();
                    initEvents();
                }
            }

            function initSliderTransformStyleCheck () {
                if (autoWidth && slideCount > 1) {
                    // check styles application
                    var num = loop ? index : slideCount - 1;

                    (function stylesApplicationCheck() {
                        var left = slideItems[num].getBoundingClientRect().left;
                        var right = slideItems[num - 1].getBoundingClientRect().right;

                        (Math.abs(left - right) <= 1) ?
                            initSliderTransformCore() :
                            setTimeout(function(){ stylesApplicationCheck() }, 16);
                    })();

                } else {
                    initSliderTransformCore();
                }
            }


            function initSliderTransformCore () {
                // run Fn()s which are rely on image loading
                if (!horizontal || autoWidth) {
                    setSlidePositions();

                    if (autoWidth) {
                        rightBoundary = getRightBoundary();
                        if (freezable) { freeze = getFreeze(); }
                        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
                        resetVariblesWhenDisable(disable || freeze);
                    } else {
                        updateContentWrapperHeight();
                    }
                }

                // set container transform property
                if (carousel) { doContainerTransformSilent(); }

                // update slider tools and events
                initTools();
                initEvents();
            }

            function initSheet () {
                // gallery:
                // set animation classes and left value for gallery slider
                if (!carousel) {
                    for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
                        var item = slideItems[i];
                        item.style.left = (i - index) * 100 / items + '%';
                        addClass(item, animateIn);
                        removeClass(item, animateNormal);
                    }
                }

                // #### LAYOUT

                // ## INLINE-BLOCK VS FLOAT

                // ## PercentageLayout:
                // slides: inline-block
                // remove blank space between slides by set font-size: 0

                // ## Non PercentageLayout:
                // slides: float
                //         margin-right: -100%
                //         margin-left: ~

                // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
                if (horizontal) {
                    if (PERCENTAGELAYOUT || autoWidth) {
                        addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
                        addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
                    } else if (carousel) {
                        forEach(slideItems, function (slide, i) {
                            slide.style.marginLeft = getSlideMarginLeft(i);
                        });
                    }
                }


                // ## BASIC STYLES
                if (CSSMQ) {
                    // middle wrapper style
                    if (TRANSITIONDURATION) {
                        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
                        addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
                    }

                    // inner wrapper styles
                    str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
                    addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));

                    // container styles
                    if (carousel) {
                        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
                        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
                        addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
                    }

                    // slide styles
                    str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
                    if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
                    // set gallery items transition-duration
                    if (!carousel) {
                        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
                        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
                    }
                    if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }

                    // non CSS mediaqueries: IE8
                    // ## update inner wrapper, container, slides if needed
                    // set inline styles for inner wrapper & container
                    // insert stylesheet (one line) for slides only (since slides are many)
                } else {
                    // middle wrapper styles
                    update_carousel_transition_duration();

                    // inner wrapper styles
                    innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

                    // container styles
                    if (carousel && horizontal && !autoWidth) {
                        container.style.width = getContainerWidth(fixedWidth, gutter, items);
                    }

                    // slide styles
                    var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
                    if (gutter) { str += getSlideGutterStyle(gutter); }

                    // append to the last line
                    if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
                }

                // ## MEDIAQUERIES
                if (responsive && CSSMQ) {
                    for (var bp in responsive) {
                        // bp: convert string to number
                        bp = parseInt(bp);

                        var opts = responsive[bp],
                            str = '',
                            middleWrapperStr = '',
                            innerWrapperStr = '',
                            containerStr = '',
                            slideStr = '',
                            itemsBP = !autoWidth ? getOption('items', bp) : null,
                            fixedWidthBP = getOption('fixedWidth', bp),
                            speedBP = getOption('speed', bp),
                            edgePaddingBP = getOption('edgePadding', bp),
                            autoHeightBP = getOption('autoHeight', bp),
                            gutterBP = getOption('gutter', bp);

                        // middle wrapper string
                        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
                            middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
                        }

                        // inner wrapper string
                        if ('edgePadding' in opts || 'gutter' in opts) {
                            innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
                        }

                        // container string
                        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
                            containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
                        }
                        if (TRANSITIONDURATION && 'speed' in opts) {
                            containerStr += getTransitionDurationStyle(speedBP);
                        }
                        if (containerStr) {
                            containerStr = '#' + slideId + '{' + containerStr + '}';
                        }

                        // slide string
                        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
                            slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
                        }
                        if ('gutter' in opts) {
                            slideStr += getSlideGutterStyle(gutterBP);
                        }
                        // set gallery items transition-duration
                        if (!carousel && 'speed' in opts) {
                            if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
                            if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
                        }
                        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

                        // add up
                        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

                        if (str) {
                            sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
                        }
                    }
                }
            }

            function initTools () {
                // == slides ==
                updateSlideStatus();

                // == live region ==
                outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
                liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

                // == autoplayInit ==
                if (hasAutoplay) {
                    var txt = autoplay ? 'stop' : 'start';
                    if (autoplayButton) {
                        setAttrs(autoplayButton, {'data-action': txt});
                    } else if (options.autoplayButtonOutput) {
                        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
                        autoplayButton = outerWrapper.querySelector('[data-action]');
                    }

                    // add event
                    if (autoplayButton) {
                        addEvents(autoplayButton, {'click': toggleAutoplay});
                    }

                    if (autoplay) {
                        startAutoplay();
                        if (autoplayHoverPause) { addEvents(container, hoverEvents); }
                        if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
                    }
                }

                // == navInit ==
                if (hasNav) {
                    var initIndex = !carousel ? 0 : cloneCount;
                    // customized nav
                    // will not hide the navs in case they're thumbnails
                    if (navContainer) {
                        setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
                        navItems = navContainer.children;
                        forEach(navItems, function(item, i) {
                            setAttrs(item, {
                                'data-nav': i,
                                'tabindex': '-1',
                                'aria-label': navStr + (i + 1),
                                'aria-controls': slideId,
                            });
                        });

                        // generated nav
                    } else {
                        var navHtml = '',
                            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
                        for (var i = 0; i < slideCount; i++) {
                            // hide nav items by default
                            navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
                        }
                        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
                        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

                        navContainer = outerWrapper.querySelector('.tns-nav');
                        navItems = navContainer.children;
                    }

                    updateNavVisibility();

                    // add transition
                    if (TRANSITIONDURATION) {
                        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
                            str = 'transition: all ' + speed / 1000 + 's';

                        if (prefix) {
                            str = '-' + prefix + '-' + str;
                        }

                        addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
                    }

                    setAttrs(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
                    removeAttrs(navItems[navCurrentIndex], 'tabindex');
                    addClass(navItems[navCurrentIndex], navActiveClass);

                    // add events
                    addEvents(navContainer, navEvents);
                }



                // == controlsInit ==
                if (hasControls) {
                    if (!controlsContainer && (!prevButton || !nextButton)) {
                        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

                        controlsContainer = outerWrapper.querySelector('.tns-controls');
                    }

                    if (!prevButton || !nextButton) {
                        prevButton = controlsContainer.children[0];
                        nextButton = controlsContainer.children[1];
                    }

                    if (options.controlsContainer) {
                        setAttrs(controlsContainer, {
                            'aria-label': 'Carousel Navigation',
                            'tabindex': '0'
                        });
                    }

                    if (options.controlsContainer || (options.prevButton && options.nextButton)) {
                        setAttrs([prevButton, nextButton], {
                            'aria-controls': slideId,
                            'tabindex': '-1',
                        });
                    }

                    if (options.controlsContainer || (options.prevButton && options.nextButton)) {
                        setAttrs(prevButton, {'data-controls' : 'prev'});
                        setAttrs(nextButton, {'data-controls' : 'next'});
                    }

                    prevIsButton = isButton(prevButton);
                    nextIsButton = isButton(nextButton);

                    updateControlsStatus();

                    // add events
                    if (controlsContainer) {
                        addEvents(controlsContainer, controlsEvents);
                    } else {
                        addEvents(prevButton, controlsEvents);
                        addEvents(nextButton, controlsEvents);
                    }
                }

                // hide tools if needed
                disableUI();
            }

            function initEvents () {
                // add events
                if (carousel && TRANSITIONEND) {
                    var eve = {};
                    eve[TRANSITIONEND] = onTransitionEnd;
                    addEvents(container, eve);
                }

                if (touch) { addEvents(container, touchEvents, options.preventScrollOnTouch); }
                if (mouseDrag) { addEvents(container, dragEvents); }
                if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }

                if (nested === 'inner') {
                    events.on('outerResized', function () {
                        resizeTasks();
                        events.emit('innerLoaded', info());
                    });
                } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
                    addEvents(win, {'resize': onResize});
                }

                if (autoHeight) {
                    if (nested === 'outer') {
                        events.on('innerLoaded', doAutoHeight);
                    } else if (!disable) { doAutoHeight(); }
                }

                doLazyLoad();
                if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

                events.on('indexChanged', additionalUpdates);
                if (nested === 'inner') { events.emit('innerLoaded', info()); }
                if (typeof onInit === 'function') { onInit(info()); }
                isOn = true;
            }

            function destroy () {
                // sheet
                sheet.disabled = true;
                if (sheet.ownerNode) { sheet.ownerNode.remove(); }

                // remove win event listeners
                removeEvents(win, {'resize': onResize});

                // arrowKeys, controls, nav
                if (arrowKeys) { removeEvents(doc, docmentKeydownEvent); }
                if (controlsContainer) { removeEvents(controlsContainer, controlsEvents); }
                if (navContainer) { removeEvents(navContainer, navEvents); }

                // autoplay
                removeEvents(container, hoverEvents);
                removeEvents(container, visibilityEvent);
                if (autoplayButton) { removeEvents(autoplayButton, {'click': toggleAutoplay}); }
                if (autoplay) { clearInterval(autoplayTimer); }

                // container
                if (carousel && TRANSITIONEND) {
                    var eve = {};
                    eve[TRANSITIONEND] = onTransitionEnd;
                    removeEvents(container, eve);
                }
                if (touch) { removeEvents(container, touchEvents); }
                if (mouseDrag) { removeEvents(container, dragEvents); }

                // cache Object values in options && reset HTML
                var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

                tnsList.forEach(function(item, i) {
                    var el = item === 'container' ? outerWrapper : options[item];

                    if (typeof el === 'object' && el) {
                        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
                            parentEl = el.parentNode;
                        el.outerHTML = htmlList[i];
                        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
                    }
                });


                // reset variables
                tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
                // check variables
                // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

                for (var a in this) {
                    if (a !== 'rebuild') { this[a] = null; }
                }
                isOn = false;
            }

// === ON RESIZE ===
            // responsive || fixedWidth || autoWidth || !horizontal
            function onResize (e) {
                raf(function(){ resizeTasks(getEvent(e)); });
            }

            function resizeTasks (e) {
                if (!isOn) { return; }
                if (nested === 'outer') { events.emit('outerResized', info(e)); }
                windowWidth = getWindowWidth();
                var bpChanged,
                    breakpointZoneTem = breakpointZone,
                    needContainerTransform = false;

                if (responsive) {
                    setBreakpointZone();
                    bpChanged = breakpointZoneTem !== breakpointZone;
                    // if (hasRightDeadZone) { needContainerTransform = true; } // *?
                    if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
                }

                var indChanged,
                    itemsChanged,
                    itemsTem = items,
                    disableTem = disable,
                    freezeTem = freeze,
                    arrowKeysTem = arrowKeys,
                    controlsTem = controls,
                    navTem = nav,
                    touchTem = touch,
                    mouseDragTem = mouseDrag,
                    autoplayTem = autoplay,
                    autoplayHoverPauseTem = autoplayHoverPause,
                    autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
                    indexTem = index;

                if (bpChanged) {
                    var fixedWidthTem = fixedWidth,
                        autoHeightTem = autoHeight,
                        controlsTextTem = controlsText,
                        centerTem = center,
                        autoplayTextTem = autoplayText;

                    if (!CSSMQ) {
                        var gutterTem = gutter,
                            edgePaddingTem = edgePadding;
                    }
                }

                // get option:
                // fixed width: viewport, fixedWidth, gutter => items
                // others: window width => all variables
                // all: items => slideBy
                arrowKeys = getOption('arrowKeys');
                controls = getOption('controls');
                nav = getOption('nav');
                touch = getOption('touch');
                center = getOption('center');
                mouseDrag = getOption('mouseDrag');
                autoplay = getOption('autoplay');
                autoplayHoverPause = getOption('autoplayHoverPause');
                autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

                if (bpChanged) {
                    disable = getOption('disable');
                    fixedWidth = getOption('fixedWidth');
                    speed = getOption('speed');
                    autoHeight = getOption('autoHeight');
                    controlsText = getOption('controlsText');
                    autoplayText = getOption('autoplayText');
                    autoplayTimeout = getOption('autoplayTimeout');

                    if (!CSSMQ) {
                        edgePadding = getOption('edgePadding');
                        gutter = getOption('gutter');
                    }
                }
                // update options
                resetVariblesWhenDisable(disable);

                viewport = getViewportWidth(); // <= edgePadding, gutter
                if ((!horizontal || autoWidth) && !disable) {
                    setSlidePositions();
                    if (!horizontal) {
                        updateContentWrapperHeight(); // <= setSlidePositions
                        needContainerTransform = true;
                    }
                }
                if (fixedWidth || autoWidth) {
                    rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                                        // fixedWidth: <= viewport, fixedWidth, gutter
                    indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                              // fixedWidth: <= rightBoundary, fixedWidth, gutter
                }

                if (bpChanged || fixedWidth) {
                    items = getOption('items');
                    slideBy = getOption('slideBy');
                    itemsChanged = items !== itemsTem;

                    if (itemsChanged) {
                        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
                        // check index before transform in case
                        // slider reach the right edge then items become bigger
                        updateIndex();
                    }
                }

                if (bpChanged) {
                    if (disable !== disableTem) {
                        if (disable) {
                            disableSlider();
                        } else {
                            enableSlider(); // <= slidePositions, rightBoundary, indexMax
                        }
                    }
                }

                if (freezable && (bpChanged || fixedWidth || autoWidth)) {
                    freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                                          // <= fixedWidth: fixedWidth, gutter, rightBoundary
                                          // <= others: items

                    if (freeze !== freezeTem) {
                        if (freeze) {
                            doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                            freezeSlider();
                        } else {
                            unfreezeSlider();
                            needContainerTransform = true;
                        }
                    }
                }

                resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
                if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

                if (arrowKeys !== arrowKeysTem) {
                    arrowKeys ?
                        addEvents(doc, docmentKeydownEvent) :
                        removeEvents(doc, docmentKeydownEvent);
                }
                if (controls !== controlsTem) {
                    if (controls) {
                        if (controlsContainer) {
                            showElement(controlsContainer);
                        } else {
                            if (prevButton) { showElement(prevButton); }
                            if (nextButton) { showElement(nextButton); }
                        }
                    } else {
                        if (controlsContainer) {
                            hideElement(controlsContainer);
                        } else {
                            if (prevButton) { hideElement(prevButton); }
                            if (nextButton) { hideElement(nextButton); }
                        }
                    }
                }
                if (nav !== navTem) {
                    if (nav) {
                        showElement(navContainer);
                        updateNavVisibility();
                    } else {
                        hideElement(navContainer)
                    }
                }
                if (touch !== touchTem) {
                    touch ?
                        addEvents(container, touchEvents, options.preventScrollOnTouch) :
                        removeEvents(container, touchEvents);
                }
                if (mouseDrag !== mouseDragTem) {
                    mouseDrag ?
                        addEvents(container, dragEvents) :
                        removeEvents(container, dragEvents);
                }
                if (autoplay !== autoplayTem) {
                    if (autoplay) {
                        if (autoplayButton) { showElement(autoplayButton); }
                        if (!animating && !autoplayUserPaused) { startAutoplay(); }
                    } else {
                        if (autoplayButton) { hideElement(autoplayButton); }
                        if (animating) { stopAutoplay(); }
                    }
                }
                if (autoplayHoverPause !== autoplayHoverPauseTem) {
                    autoplayHoverPause ?
                        addEvents(container, hoverEvents) :
                        removeEvents(container, hoverEvents);
                }
                if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
                    autoplayResetOnVisibility ?
                        addEvents(doc, visibilityEvent) :
                        removeEvents(doc, visibilityEvent);
                }

                if (bpChanged) {
                    if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

                    if (autoHeight !== autoHeightTem) {
                        if (!autoHeight) { innerWrapper.style.height = ''; }
                    }

                    if (controls && controlsText !== controlsTextTem) {
                        prevButton.innerHTML = controlsText[0];
                        nextButton.innerHTML = controlsText[1];
                    }

                    if (autoplayButton && autoplayText !== autoplayTextTem) {
                        var i = autoplay ? 1 : 0,
                            html = autoplayButton.innerHTML,
                            len = html.length - autoplayTextTem[i].length;
                        if (html.substring(len) === autoplayTextTem[i]) {
                            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
                        }
                    }
                } else {
                    if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
                }

                if (itemsChanged || fixedWidth && !autoWidth) {
                    pages = getPages();
                    updateNavVisibility();
                }

                indChanged = index !== indexTem;
                if (indChanged) {
                    events.emit('indexChanged', info());
                    needContainerTransform = true;
                } else if (itemsChanged) {
                    if (!indChanged) { additionalUpdates(); }
                } else if (fixedWidth || autoWidth) {
                    doLazyLoad();
                    updateSlideStatus();
                    updateLiveRegion();
                }

                if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

                if (!disable && !freeze) {
                    // non-mediaqueries: IE8
                    if (bpChanged && !CSSMQ) {
                        // middle wrapper styles

                        // inner wrapper styles
                        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
                            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
                        }

                        if (horizontal) {
                            // container styles
                            if (carousel) {
                                container.style.width = getContainerWidth(fixedWidth, gutter, items);
                            }

                            // slide styles
                            var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                                getSlideGutterStyle(gutter);

                            // remove the last line and
                            // add new styles
                            removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
                            addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
                        }
                    }

                    // auto height
                    if (autoHeight) { doAutoHeight(); }

                    if (needContainerTransform) {
                        doContainerTransformSilent();
                        indexCached = index;
                    }
                }

                if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
            }





            // === INITIALIZATION FUNCTIONS === //
            function getFreeze () {
                if (!fixedWidth && !autoWidth) {
                    var a = center ? items - (items - 1) / 2 : items;
                    return  slideCount <= a;
                }

                var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
                    vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

                if (center) {
                    vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
                }

                return width <= vp;
            }

            function setBreakpointZone () {
                breakpointZone = 0;
                for (var bp in responsive) {
                    bp = parseInt(bp); // convert string to number
                    if (windowWidth >= bp) { breakpointZone = bp; }
                }
            }

            // (slideBy, indexMin, indexMax) => index
            var updateIndex = (function () {
                return loop ?
                    carousel ?
                        // loop + carousel
                        function () {
                            var leftEdge = indexMin,
                                rightEdge = indexMax;

                            leftEdge += slideBy;
                            rightEdge -= slideBy;

                            // adjust edges when has edge paddings
                            // or fixed-width slider with extra space on the right side
                            if (edgePadding) {
                                leftEdge += 1;
                                rightEdge -= 1;
                            } else if (fixedWidth) {
                                if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
                            }

                            if (cloneCount) {
                                if (index > rightEdge) {
                                    index -= slideCount;
                                } else if (index < leftEdge) {
                                    index += slideCount;
                                }
                            }
                        } :
                        // loop + gallery
                        function() {
                            if (index > indexMax) {
                                while (index >= indexMin + slideCount) { index -= slideCount; }
                            } else if (index < indexMin) {
                                while (index <= indexMax - slideCount) { index += slideCount; }
                            }
                        } :
                    // non-loop
                    function() {
                        index = Math.max(indexMin, Math.min(indexMax, index));
                    };
            })();

            function disableUI () {
                if (!autoplay && autoplayButton) { hideElement(autoplayButton); }
                if (!nav && navContainer) { hideElement(navContainer); }
                if (!controls) {
                    if (controlsContainer) {
                        hideElement(controlsContainer);
                    } else {
                        if (prevButton) { hideElement(prevButton); }
                        if (nextButton) { hideElement(nextButton); }
                    }
                }
            }

            function enableUI () {
                if (autoplay && autoplayButton) { showElement(autoplayButton); }
                if (nav && navContainer) { showElement(navContainer); }
                if (controls) {
                    if (controlsContainer) {
                        showElement(controlsContainer);
                    } else {
                        if (prevButton) { showElement(prevButton); }
                        if (nextButton) { showElement(nextButton); }
                    }
                }
            }

            function freezeSlider () {
                if (frozen) { return; }

                // remove edge padding from inner wrapper
                if (edgePadding) { innerWrapper.style.margin = '0px'; }

                // add class tns-transparent to cloned slides
                if (cloneCount) {
                    var str = 'tns-transparent';
                    for (var i = cloneCount; i--;) {
                        if (carousel) { addClass(slideItems[i], str); }
                        addClass(slideItems[slideCountNew - i - 1], str);
                    }
                }

                // update tools
                disableUI();

                frozen = true;
            }

            function unfreezeSlider () {
                if (!frozen) { return; }

                // restore edge padding for inner wrapper
                // for mordern browsers
                if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

                // remove class tns-transparent to cloned slides
                if (cloneCount) {
                    var str = 'tns-transparent';
                    for (var i = cloneCount; i--;) {
                        if (carousel) { removeClass(slideItems[i], str); }
                        removeClass(slideItems[slideCountNew - i - 1], str);
                    }
                }

                // update tools
                enableUI();

                frozen = false;
            }

            function disableSlider () {
                if (disabled) { return; }

                sheet.disabled = true;
                container.className = container.className.replace(newContainerClasses.substring(1), '');
                removeAttrs(container, ['style']);
                if (loop) {
                    for (var j = cloneCount; j--;) {
                        if (carousel) { hideElement(slideItems[j]); }
                        hideElement(slideItems[slideCountNew - j - 1]);
                    }
                }

                // vertical slider
                if (!horizontal || !carousel) { removeAttrs(innerWrapper, ['style']); }

                // gallery
                if (!carousel) {
                    for (var i = index, l = index + slideCount; i < l; i++) {
                        var item = slideItems[i];
                        removeAttrs(item, ['style']);
                        removeClass(item, animateIn);
                        removeClass(item, animateNormal);
                    }
                }

                // update tools
                disableUI();

                disabled = true;
            }

            function enableSlider () {
                if (!disabled) { return; }

                sheet.disabled = false;
                container.className += newContainerClasses;
                doContainerTransformSilent();

                if (loop) {
                    for (var j = cloneCount; j--;) {
                        if (carousel) { showElement(slideItems[j]); }
                        showElement(slideItems[slideCountNew - j - 1]);
                    }
                }

                // gallery
                if (!carousel) {
                    for (var i = index, l = index + slideCount; i < l; i++) {
                        var item = slideItems[i],
                            classN = i < index + items ? animateIn : animateNormal;
                        item.style.left = (i - index) * 100 / items + '%';
                        addClass(item, classN);
                    }
                }

                // update tools
                enableUI();

                disabled = false;
            }

            function updateLiveRegion () {
                var str = getLiveRegionStr();
                if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
            }

            function getLiveRegionStr () {
                var arr = getVisibleSlideRange(),
                    start = arr[0] + 1,
                    end = arr[1] + 1;
                return start === end ? start + '' : start + ' to ' + end;
            }

            function getVisibleSlideRange (val) {
                if (val == null) { val = getContainerTransformValue(); }
                var start = index, end, rangestart, rangeend;

                // get range start, range end for autoWidth and fixedWidth
                if (center || edgePadding) {
                    if (autoWidth || fixedWidth) {
                        rangestart = - (parseFloat(val) + edgePadding);
                        rangeend = rangestart + viewport + edgePadding * 2;
                    }
                } else {
                    if (autoWidth) {
                        rangestart = slidePositions[index];
                        rangeend = rangestart + viewport;
                    }
                }

                // get start, end
                // - check auto width
                if (autoWidth) {
                    slidePositions.forEach(function(point, i) {
                        if (i < slideCountNew) {
                            if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
                            if (rangeend - point >= 0.5) { end = i; }
                        }
                    });

                    // - check percentage width, fixed width
                } else {

                    if (fixedWidth) {
                        var cell = fixedWidth + gutter;
                        if (center || edgePadding) {
                            start = Math.floor(rangestart/cell);
                            end = Math.ceil(rangeend/cell - 1);
                        } else {
                            end = start + Math.ceil(viewport/cell) - 1;
                        }

                    } else {
                        if (center || edgePadding) {
                            var a = items - 1;
                            if (center) {
                                start -= a / 2;
                                end = index + a / 2;
                            } else {
                                end = index + a;
                            }

                            if (edgePadding) {
                                var b = edgePadding * items / viewport;
                                start -= b;
                                end += b;
                            }

                            start = Math.floor(start);
                            end = Math.ceil(end);
                        } else {
                            end = start + items - 1;
                        }
                    }

                    start = Math.max(start, 0);
                    end = Math.min(end, slideCountNew - 1);
                }

                return [start, end];
            }

            function doLazyLoad () {
                if (lazyload && !disable) {
                    var arg = getVisibleSlideRange();
                    arg.push(lazyloadSelector);

                    getImageArray.apply(null, arg).forEach(function (img) {
                        if (!hasClass(img, imgCompleteClass)) {
                            // stop propagation transitionend event to container
                            var eve = {};
                            eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
                            addEvents(img, eve);

                            addEvents(img, imgEvents);

                            // update src
                            img.src = getAttr(img, 'data-src');

                            // update srcset
                            var srcset = getAttr(img, 'data-srcset');
                            if (srcset) { img.srcset = srcset; }

                            addClass(img, 'loading');
                        }
                    });
                }
            }

            function onImgLoaded (e) {
                imgLoaded(getTarget(e));
            }

            function onImgFailed (e) {
                imgFailed(getTarget(e));
            }

            function imgLoaded (img) {
                addClass(img, 'loaded');
                imgCompleted(img);
            }

            function imgFailed (img) {
                addClass(img, 'failed');
                imgCompleted(img);
            }

            function imgCompleted (img) {
                addClass(img, imgCompleteClass);
                removeClass(img, 'loading');
                removeEvents(img, imgEvents);
            }

            function getImageArray (start, end, imgSelector) {
                var imgs = [];
                if (!imgSelector) { imgSelector = 'img'; }

                while (start <= end) {
                    forEach(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
                    start++;
                }

                return imgs;
            }

            // check if all visible images are loaded
            // and update container height if it's done
            function doAutoHeight () {
                var imgs = getImageArray.apply(null, getVisibleSlideRange());
                raf(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
            }

            function imgsLoadedCheck (imgs, cb) {
                // execute callback function if all images are complete
                if (imgsComplete) { return cb(); }

                // check image classes
                imgs.forEach(function (img, index) {
                    if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
                    if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
                });

                // execute callback function if selected images are all complete
                if (!imgs.length) { return cb(); }

                // otherwise execute this functiona again
                raf(function(){ imgsLoadedCheck(imgs, cb); });
            }

            function additionalUpdates () {
                doLazyLoad();
                updateSlideStatus();
                updateLiveRegion();
                updateControlsStatus();
                updateNavStatus();
            }


            function update_carousel_transition_duration () {
                if (carousel && autoHeight) {
                    middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
                }
            }

            function getMaxSlideHeight (slideStart, slideRange) {
                var heights = [];
                for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
                    heights.push(slideItems[i].offsetHeight);
                }

                return Math.max.apply(null, heights);
            }

            // update inner wrapper height
            // 1. get the max-height of the visible slides
            // 2. set transitionDuration to speed
            // 3. update inner wrapper height to max-height
            // 4. set transitionDuration to 0s after transition done
            function updateInnerWrapperHeight () {
                var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
                    wp = middleWrapper ? middleWrapper : innerWrapper;

                if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
            }

            // get the distance from the top edge of the first slide to each slide
            // (init) => slidePositions
            function setSlidePositions () {
                slidePositions = [0];
                var attr = horizontal ? 'left' : 'top',
                    attr2 = horizontal ? 'right' : 'bottom',
                    base = slideItems[0].getBoundingClientRect()[attr];

                forEach(slideItems, function(item, i) {
                    // skip the first slide
                    if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
                    // add the end edge
                    if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
                });
            }

            // update slide
            function updateSlideStatus () {
                var range = getVisibleSlideRange(),
                    start = range[0],
                    end = range[1];

                forEach(slideItems, function(item, i) {
                    // show slides
                    if (i >= start && i <= end) {
                        if (hasAttr(item, 'aria-hidden')) {
                            removeAttrs(item, ['aria-hidden', 'tabindex']);
                            addClass(item, slideActiveClass);
                        }
                        // hide slides
                    } else {
                        if (!hasAttr(item, 'aria-hidden')) {
                            setAttrs(item, {
                                'aria-hidden': 'true',
                                'tabindex': '-1'
                            });
                            removeClass(item, slideActiveClass);
                        }
                    }
                });
            }

            // gallery: update slide position
            function updateGallerySlidePositions () {
                var l = index + Math.min(slideCount, items);
                for (var i = slideCountNew; i--;) {
                    var item = slideItems[i];

                    if (i >= index && i < l) {
                        // add transitions to visible slides when adjusting their positions
                        addClass(item, 'tns-moving');

                        item.style.left = (i - index) * 100 / items + '%';
                        addClass(item, animateIn);
                        removeClass(item, animateNormal);
                    } else if (item.style.left) {
                        item.style.left = '';
                        addClass(item, animateNormal);
                        removeClass(item, animateIn);
                    }

                    // remove outlet animation
                    removeClass(item, animateOut);
                }

                // removing '.tns-moving'
                setTimeout(function() {
                    forEach(slideItems, function(el) {
                        removeClass(el, 'tns-moving');
                    });
                }, 300);
            }

            // set tabindex on Nav
            function updateNavStatus () {
                // get current nav
                if (nav) {
                    navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
                    navClicked = -1;

                    if (navCurrentIndex !== navCurrentIndexCached) {
                        var navPrev = navItems[navCurrentIndexCached],
                            navCurrent = navItems[navCurrentIndex];

                        setAttrs(navPrev, {
                            'tabindex': '-1',
                            'aria-label': navStr + (navCurrentIndexCached + 1)
                        });
                        removeClass(navPrev, navActiveClass);

                        setAttrs(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
                        removeAttrs(navCurrent, 'tabindex');
                        addClass(navCurrent, navActiveClass);

                        navCurrentIndexCached = navCurrentIndex;
                    }
                }
            }

            function getLowerCaseNodeName (el) {
                return el.nodeName.toLowerCase();
            }

            function isButton (el) {
                return getLowerCaseNodeName(el) === 'button';
            }

            function isAriaDisabled (el) {
                return el.getAttribute('aria-disabled') === 'true';
            }

            function disEnableElement (isButton, el, val) {
                if (isButton) {
                    el.disabled = val;
                } else {
                    el.setAttribute('aria-disabled', val.toString());
                }
            }

            // set 'disabled' to true on controls when reach the edges
            function updateControlsStatus () {
                if (!controls || rewind || loop) { return; }

                var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
                    nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
                    disablePrev = (index <= indexMin) ? true : false,
                    disableNext = (!rewind && index >= indexMax) ? true : false;

                if (disablePrev && !prevDisabled) {
                    disEnableElement(prevIsButton, prevButton, true);
                }
                if (!disablePrev && prevDisabled) {
                    disEnableElement(prevIsButton, prevButton, false);
                }
                if (disableNext && !nextDisabled) {
                    disEnableElement(nextIsButton, nextButton, true);
                }
                if (!disableNext && nextDisabled) {
                    disEnableElement(nextIsButton, nextButton, false);
                }
            }

            // set duration
            function resetDuration (el, str) {
                if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
            }

            function getSliderWidth () {
                return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
            }

            function getCenterGap (num) {
                if (num == null) { num = index; }

                var gap = edgePadding ? gutter : 0;
                return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
                    fixedWidth ? (viewport - fixedWidth) / 2 :
                        (items - 1) / 2;
            }

            function getRightBoundary () {
                var gap = edgePadding ? gutter : 0,
                    result = (viewport + gap) - getSliderWidth();

                if (center && !loop) {
                    result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
                        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
                }
                if (result > 0) { result = 0; }

                return result;
            }

            function getContainerTransformValue (num) {
                if (num == null) { num = index; }

                var val;
                if (horizontal && !autoWidth) {
                    if (fixedWidth) {
                        val = - (fixedWidth + gutter) * num;
                        if (center) { val += getCenterGap(); }
                    } else {
                        var denominator = TRANSFORM ? slideCountNew : items;
                        if (center) { num -= getCenterGap(); }
                        val = - num * 100 / denominator;
                    }
                } else {
                    val = - slidePositions[num];
                    if (center && autoWidth) {
                        val += getCenterGap();
                    }
                }

                if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

                val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

                return val;
            }

            function doContainerTransformSilent (val) {
                resetDuration(container, '0s');
                doContainerTransform(val);
            }

            function doContainerTransform (val) {
                if (val == null) { val = getContainerTransformValue(); }
                container.style[transformAttr] = transformPrefix + val + transformPostfix;
            }

            function animateSlide (number, classOut, classIn, isOut) {
                var l = number + items;
                if (!loop) { l = Math.min(l, slideCountNew); }

                for (var i = number; i < l; i++) {
                    var item = slideItems[i];

                    // set item positions
                    if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

                    if (animateDelay && TRANSITIONDELAY) {
                        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
                    }
                    removeClass(item, classOut);
                    addClass(item, classIn);

                    if (isOut) { slideItemsOut.push(item); }
                }
            }

            // make transfer after click/drag:
            // 1. change 'transform' property for mordern browsers
            // 2. change 'left' property for legacy browsers
            var transformCore = (function () {
                return carousel ?
                    function () {
                        resetDuration(container, '');
                        if (TRANSITIONDURATION || !speed) {
                            // for morden browsers with non-zero duration or
                            // zero duration for all browsers
                            doContainerTransform();
                            // run fallback function manually
                            // when duration is 0 / container is hidden
                            if (!speed || !isVisible(container)) { onTransitionEnd(); }

                        } else {
                            // for old browser with non-zero duration
                            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
                        }

                        if (!horizontal) { updateContentWrapperHeight(); }
                    } :
                    function () {
                        slideItemsOut = [];

                        var eve = {};
                        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
                        removeEvents(slideItems[indexCached], eve);
                        addEvents(slideItems[index], eve);

                        animateSlide(indexCached, animateIn, animateOut, true);
                        animateSlide(index, animateNormal, animateIn);

                        // run fallback function manually
                        // when transition or animation not supported / duration is 0
                        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) { onTransitionEnd(); }
                    };
            })();

            function render (e, sliderMoved) {
                if (updateIndexBeforeTransform) { updateIndex(); }

                // render when slider was moved (touch or drag) even though index may not change
                if (index !== indexCached || sliderMoved) {
                    // events
                    events.emit('indexChanged', info());
                    events.emit('transitionStart', info());
                    if (autoHeight) { doAutoHeight(); }

                    // pause autoplay when click or keydown from user
                    if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

                    running = true;
                    transformCore();
                }
            }

            /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
            function strTrans (str) {
                return str.toLowerCase().replace(/-/g, '');
            }

            // AFTER TRANSFORM
            // Things need to be done after a transfer:
            // 1. check index
            // 2. add classes to visible slide
            // 3. disable controls buttons when reach the first/last slide in non-loop slider
            // 4. update nav status
            // 5. lazyload images
            // 6. update container height
            function onTransitionEnd (event) {
                // check running on gallery mode
                // make sure trantionend/animationend events run only once
                if (carousel || running) {
                    events.emit('transitionEnd', info(event));

                    if (!carousel && slideItemsOut.length > 0) {
                        for (var i = 0; i < slideItemsOut.length; i++) {
                            var item = slideItemsOut[i];
                            // set item positions
                            item.style.left = '';

                            if (ANIMATIONDELAY && TRANSITIONDELAY) {
                                item.style[ANIMATIONDELAY] = '';
                                item.style[TRANSITIONDELAY] = '';
                            }
                            removeClass(item, animateOut);
                            addClass(item, animateNormal);
                        }
                    }

                    /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
                    if (!event ||
                        !carousel && event.target.parentNode === container ||
                        event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

                        if (!updateIndexBeforeTransform) {
                            var indexTem = index;
                            updateIndex();
                            if (index !== indexTem) {
                                events.emit('indexChanged', info());

                                doContainerTransformSilent();
                            }
                        }

                        if (nested === 'inner') { events.emit('innerLoaded', info()); }
                        running = false;
                        indexCached = index;
                    }
                }

            }

            // # ACTIONS
            function goTo (targetIndex, e) {
                if (freeze) { return; }

                // prev slideBy
                if (targetIndex === 'prev') {
                    onControlsClick(e, -1);

                    // next slideBy
                } else if (targetIndex === 'next') {
                    onControlsClick(e, 1);

                    // go to exact slide
                } else {
                    if (running) {
                        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                    }

                    var absIndex = getAbsIndex(),
                        indexGap = 0;

                    if (targetIndex === 'first') {
                        indexGap = - absIndex;
                    } else if (targetIndex === 'last') {
                        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
                    } else {
                        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

                        if (!isNaN(targetIndex)) {
                            // from directly called goTo function
                            if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

                            indexGap = targetIndex - absIndex;
                        }
                    }

                    // gallery: make sure new page won't overlap with current page
                    if (!carousel && indexGap && Math.abs(indexGap) < items) {
                        var factor = indexGap > 0 ? 1 : -1;
                        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
                    }

                    index += indexGap;

                    // make sure index is in range
                    if (carousel && loop) {
                        if (index < indexMin) { index += slideCount; }
                        if (index > indexMax) { index -= slideCount; }
                    }

                    // if index is changed, start rendering
                    if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
                        render(e);
                    }

                }
            }

            // on controls click
            function onControlsClick (e, dir) {
                if (running) {
                    if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                }
                var passEventObject;

                if (!dir) {
                    e = getEvent(e);
                    var target = getTarget(e);

                    while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

                    var targetIn = [prevButton, nextButton].indexOf(target);
                    if (targetIn >= 0) {
                        passEventObject = true;
                        dir = targetIn === 0 ? -1 : 1;
                    }
                }

                if (rewind) {
                    if (index === indexMin && dir === -1) {
                        goTo('last', e);
                        return;
                    } else if (index === indexMax && dir === 1) {
                        goTo('first', e);
                        return;
                    }
                }

                if (dir) {
                    index += slideBy * dir;
                    if (autoWidth) { index = Math.floor(index); }
                    // pass e when click control buttons or keydown
                    render((passEventObject || (e && e.type === 'keydown')) ? e : null);
                }
            }

            // on nav click
            function onNavClick (e) {
                if (running) {
                    if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                }

                e = getEvent(e);
                var target = getTarget(e), navIndex;

                // find the clicked nav item
                while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
                if (hasAttr(target, 'data-nav')) {
                    var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
                        targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
                        targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
                    goTo(targetIndex, e);

                    if (navCurrentIndex === navIndex) {
                        if (animating) { stopAutoplay(); }
                        navClicked = -1; // reset navClicked
                    }
                }
            }

            // autoplay functions
            function setAutoplayTimer () {
                autoplayTimer = setInterval(function () {
                    onControlsClick(null, autoplayDirection);
                }, autoplayTimeout);

                animating = true;
            }

            function stopAutoplayTimer () {
                clearInterval(autoplayTimer);
                animating = false;
            }

            function updateAutoplayButton (action, txt) {
                setAttrs(autoplayButton, {'data-action': action});
                autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
            }

            function startAutoplay () {
                setAutoplayTimer();
                if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
            }

            function stopAutoplay () {
                stopAutoplayTimer();
                if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
            }

            // programaitcally play/pause the slider
            function play () {
                if (autoplay && !animating) {
                    startAutoplay();
                    autoplayUserPaused = false;
                }
            }
            function pause () {
                if (animating) {
                    stopAutoplay();
                    autoplayUserPaused = true;
                }
            }

            function toggleAutoplay () {
                if (animating) {
                    stopAutoplay();
                    autoplayUserPaused = true;
                } else {
                    startAutoplay();
                    autoplayUserPaused = false;
                }
            }

            function onVisibilityChange () {
                if (doc.hidden) {
                    if (animating) {
                        stopAutoplayTimer();
                        autoplayVisibilityPaused = true;
                    }
                } else if (autoplayVisibilityPaused) {
                    setAutoplayTimer();
                    autoplayVisibilityPaused = false;
                }
            }

            function mouseoverPause () {
                if (animating) {
                    stopAutoplayTimer();
                    autoplayHoverPaused = true;
                }
            }

            function mouseoutRestart () {
                if (autoplayHoverPaused) {
                    setAutoplayTimer();
                    autoplayHoverPaused = false;
                }
            }

            // keydown events on document
            function onDocumentKeydown (e) {
                e = getEvent(e);
                var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

                if (keyIndex >= 0) {
                    onControlsClick(e, keyIndex === 0 ? -1 : 1);
                }
            }

            // on key control
            function onControlsKeydown (e) {
                e = getEvent(e);
                var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

                if (keyIndex >= 0) {
                    if (keyIndex === 0) {
                        if (!prevButton.disabled) { onControlsClick(e, -1); }
                    } else if (!nextButton.disabled) {
                        onControlsClick(e, 1);
                    }
                }
            }

            // set focus
            function setFocus (el) {
                el.focus();
            }

            // on key nav
            function onNavKeydown (e) {
                e = getEvent(e);
                var curElement = doc.activeElement;
                if (!hasAttr(curElement, 'data-nav')) { return; }

                // var code = e.keyCode,
                var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
                    navIndex = Number(getAttr(curElement, 'data-nav'));

                if (keyIndex >= 0) {
                    if (keyIndex === 0) {
                        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
                    } else if (keyIndex === 1) {
                        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
                    } else {
                        navClicked = navIndex;
                        goTo(navIndex, e);
                    }
                }
            }

            function getEvent (e) {
                e = e || win.event;
                return isTouchEvent(e) ? e.changedTouches[0] : e;
            }
            function getTarget (e) {
                return e.target || win.event.srcElement;
            }

            function isTouchEvent (e) {
                return e.type.indexOf('touch') >= 0;
            }

            function preventDefaultBehavior (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
            }

            function getMoveDirectionExpected () {
                return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
            }

            function onPanStart (e) {
                if (running) {
                    if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                }

                if (autoplay && animating) { stopAutoplayTimer(); }

                panStart = true;
                if (rafIndex) {
                    caf(rafIndex);
                    rafIndex = null;
                }

                var $ = getEvent(e);
                events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

                if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
                    preventDefaultBehavior(e);
                }

                lastPosition.x = initPosition.x = $.clientX;
                lastPosition.y = initPosition.y = $.clientY;
                if (carousel) {
                    translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
                    resetDuration(container, '0s');
                }
            }

            function onPanMove (e) {
                if (panStart) {
                    var $ = getEvent(e);
                    lastPosition.x = $.clientX;
                    lastPosition.y = $.clientY;

                    if (carousel) {
                        if (!rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
                    } else {
                        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
                        if (moveDirectionExpected) { preventScroll = true; }
                    }

                    if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
                        e.preventDefault();
                    }
                }
            }

            function panUpdate (e) {
                if (!moveDirectionExpected) {
                    panStart = false;
                    return;
                }
                caf(rafIndex);
                if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }

                if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
                if (moveDirectionExpected) {
                    if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

                    try {
                        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
                    } catch(err) {}

                    var x = translateInit,
                        dist = getDist(lastPosition, initPosition);
                    if (!horizontal || fixedWidth || autoWidth) {
                        x += dist;
                        x += 'px';
                    } else {
                        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
                        x += percentageX;
                        x += '%';
                    }

                    container.style[transformAttr] = transformPrefix + x + transformPostfix;
                }
            }

            function onPanEnd (e) {
                if (panStart) {
                    if (rafIndex) {
                        caf(rafIndex);
                        rafIndex = null;
                    }
                    if (carousel) { resetDuration(container, ''); }
                    panStart = false;

                    var $ = getEvent(e);
                    lastPosition.x = $.clientX;
                    lastPosition.y = $.clientY;
                    var dist = getDist(lastPosition, initPosition);

                    if (Math.abs(dist)) {
                        // drag vs click
                        if (!isTouchEvent(e)) {
                            // prevent "click"
                            var target = getTarget(e);
                            addEvents(target, {'click': function preventClick (e) {
                                    preventDefaultBehavior(e);
                                    removeEvents(target, {'click': preventClick});
                                }});
                        }

                        if (carousel) {
                            rafIndex = raf(function() {
                                if (horizontal && !autoWidth) {
                                    var indexMoved = - dist * items / (viewport + gutter);
                                    indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                                    index += indexMoved;
                                } else {
                                    var moved = - (translateInit + dist);
                                    if (moved <= 0) {
                                        index = indexMin;
                                    } else if (moved >= slidePositions[slideCountNew - 1]) {
                                        index = indexMax;
                                    } else {
                                        var i = 0;
                                        while (i < slideCountNew && moved >= slidePositions[i]) {
                                            index = i;
                                            if (moved > slidePositions[i] && dist < 0) { index += 1; }
                                            i++;
                                        }
                                    }
                                }

                                render(e, dist);
                                events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
                            });
                        } else {
                            if (moveDirectionExpected) {
                                onControlsClick(e, dist > 0 ? -1 : 1);
                            }
                        }
                    }
                }

                // reset
                if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
                if (swipeAngle) { moveDirectionExpected = '?'; }
                if (autoplay && !animating) { setAutoplayTimer(); }
            }

            // === RESIZE FUNCTIONS === //
            // (slidePositions, index, items) => vertical_conentWrapper.height
            function updateContentWrapperHeight () {
                var wp = middleWrapper ? middleWrapper : innerWrapper;
                wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
            }

            function getPages () {
                var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
                return Math.min(Math.ceil(rough), slideCount);
            }

            /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
            function updateNavVisibility () {
                if (!nav || navAsThumbnails) { return; }

                if (pages !== pagesCached) {
                    var min = pagesCached,
                        max = pages,
                        fn = showElement;

                    if (pagesCached > pages) {
                        min = pages;
                        max = pagesCached;
                        fn = hideElement;
                    }

                    while (min < max) {
                        fn(navItems[min]);
                        min++;
                    }

                    // cache pages
                    pagesCached = pages;
                }
            }

            function info (e) {
                return {
                    container: container,
                    slideItems: slideItems,
                    navContainer: navContainer,
                    navItems: navItems,
                    controlsContainer: controlsContainer,
                    hasControls: hasControls,
                    prevButton: prevButton,
                    nextButton: nextButton,
                    items: items,
                    slideBy: slideBy,
                    cloneCount: cloneCount,
                    slideCount: slideCount,
                    slideCountNew: slideCountNew,
                    index: index,
                    indexCached: indexCached,
                    displayIndex: getCurrentSlide(),
                    navCurrentIndex: navCurrentIndex,
                    navCurrentIndexCached: navCurrentIndexCached,
                    pages: pages,
                    pagesCached: pagesCached,
                    sheet: sheet,
                    isOn: isOn,
                    event: e || {},
                };
            }

            return {
                version: '2.9.4',
                getInfo: info,
                events: events,
                goTo: goTo,
                play: play,
                pause: pause,
                isOn: isOn,
                updateSliderHeight: updateInnerWrapperHeight,
                refresh: initSliderTransform,
                destroy: destroy,
                rebuild: function() {
                    return tns(extend(options, optionsElements));
                }
            };
        };

        ;// CONCATENATED MODULE: ./src/assets/js/components/slider.js


        const slider = (selector, options) => {
            const element = document.querySelectorAll(selector);
            if(element.length>0){
                tns(options);
            }
        }


        /* harmony default export */ var components_slider = (slider);
// EXTERNAL MODULE: ./node_modules/choices.js/public/assets/scripts/choices.js
        var choices = __webpack_require__(529);
        ;// CONCATENATED MODULE: ./src/assets/js/components/select.js


        const select_select = (item) => {
            const selectItems = document.querySelectorAll(item);
            selectItems.forEach( (select) => {
                new choices(select, {
                    searchEnabled: false,
                    itemSelectText: ''
                })
            })

        }

        /* harmony default export */ var components_select = (select_select);
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
        var enums_top = 'top';
        var bottom = 'bottom';
        var right = 'right';
        var left = 'left';
        var auto = 'auto';
        var basePlacements = [enums_top, bottom, right, left];
        var start = 'start';
        var end = 'end';
        var clippingParents = 'clippingParents';
        var viewport = 'viewport';
        var popper = 'popper';
        var reference = 'reference';
        var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
            return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
            return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM

        var beforeRead = 'beforeRead';
        var read = 'read';
        var afterRead = 'afterRead'; // pure-logic modifiers

        var beforeMain = 'beforeMain';
        var main = 'main';
        var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

        var beforeWrite = 'beforeWrite';
        var write = 'write';
        var afterWrite = 'afterWrite';
        var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
        function getNodeName(element) {
            return element ? (element.nodeName || '').toLowerCase() : null;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
        function getWindow(node) {
            if (node == null) {
                return window;
            }

            if (node.toString() !== '[object Window]') {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }

            return node;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


        function isElement(node) {
            var OwnElement = getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }

        function isHTMLElement(node) {
            var OwnElement = getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }

        function isShadowRoot(node) {
            // IE 11 has no ShadowRoot
            if (typeof ShadowRoot === 'undefined') {
                return false;
            }

            var OwnElement = getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }


        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

        // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach(function (name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name]; // arrow is optional + virtual elements

                if (!isHTMLElement(element) || !getNodeName(element)) {
                    return;
                } // Flow doesn't support to extend this property, but it's the most
                // effective way to apply styles to an HTMLElement
                // $FlowFixMe[cannot-write]


                Object.assign(element.style, style);
                Object.keys(attributes).forEach(function (name) {
                    var value = attributes[name];

                    if (value === false) {
                        element.removeAttribute(name);
                    } else {
                        element.setAttribute(name, value === true ? '' : value);
                    }
                });
            });
        }

        function effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0'
                },
                arrow: {
                    position: 'absolute'
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;

            if (state.elements.arrow) {
                Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }

            return function () {
                Object.keys(state.elements).forEach(function (name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

                    var style = styleProperties.reduce(function (style, property) {
                        style[property] = '';
                        return style;
                    }, {}); // arrow is optional + virtual elements

                    if (!isHTMLElement(element) || !getNodeName(element)) {
                        return;
                    }

                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach(function (attribute) {
                        element.removeAttribute(attribute);
                    });
                });
            };
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_applyStyles = ({
            name: 'applyStyles',
            enabled: true,
            phase: 'write',
            fn: applyStyles,
            effect: effect,
            requires: ['computeStyles']
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

        function getBasePlacement(placement) {
            return placement.split('-')[0];
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js


        function getBoundingClientRect(element, includeScale) {
            if (includeScale === void 0) {
                includeScale = false;
            }

            var rect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;

            if (isHTMLElement(element) && includeScale) {
                var offsetHeight = element.offsetHeight;
                var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
                // Fallback to 1 in case both values are `0`

                if (offsetWidth > 0) {
                    scaleX = round(rect.width) / offsetWidth || 1;
                }

                if (offsetHeight > 0) {
                    scaleY = round(rect.height) / offsetHeight || 1;
                }
            }

            return {
                width: rect.width / scaleX,
                height: rect.height / scaleY,
                top: rect.top / scaleY,
                right: rect.right / scaleX,
                bottom: rect.bottom / scaleY,
                left: rect.left / scaleX,
                x: rect.left / scaleX,
                y: rect.top / scaleY
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
         // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
            // Fixes https://github.com/popperjs/popper-core/issues/1223

            var width = element.offsetWidth;
            var height = element.offsetHeight;

            if (Math.abs(clientRect.width - width) <= 1) {
                width = clientRect.width;
            }

            if (Math.abs(clientRect.height - height) <= 1) {
                height = clientRect.height;
            }

            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: width,
                height: height
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

            if (parent.contains(child)) {
                return true;
            } // then fallback to custom implementation with Shadow DOM support
            else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;

                do {
                    if (next && parent.isSameNode(next)) {
                        return true;
                    } // $FlowFixMe[prop-missing]: need a better way to handle this...


                    next = next.parentNode || next.host;
                } while (next);
            } // Give up, the result is false


            return false;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

        function getComputedStyle_getComputedStyle(element) {
            return getWindow(element).getComputedStyle(element);
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

        function isTableElement(element) {
            return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

        function getDocumentElement(element) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
                element.document) || window.document).documentElement;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



        function getParentNode(element) {
            if (getNodeName(element) === 'html') {
                return element;
            }

            return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
                // $FlowFixMe[incompatible-return]
                // $FlowFixMe[prop-missing]
                element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
                element.parentNode || ( // DOM Element detected
                    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
                // $FlowFixMe[incompatible-call]: HTMLElement is a Node
                getDocumentElement(element) // fallback

            );
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
                getComputedStyle_getComputedStyle(element).position === 'fixed') {
                return null;
            }

            return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


        function getContainingBlock(element) {
            var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
            var isIE = navigator.userAgent.indexOf('Trident') !== -1;

            if (isIE && isHTMLElement(element)) {
                // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
                var elementCss = getComputedStyle_getComputedStyle(element);

                if (elementCss.position === 'fixed') {
                    return null;
                }
            }

            var currentNode = getParentNode(element);

            if (isShadowRoot(currentNode)) {
                currentNode = currentNode.host;
            }

            while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle_getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
                // create a containing block.
                // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

                if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
                    return currentNode;
                } else {
                    currentNode = currentNode.parentNode;
                }
            }

            return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


        function getOffsetParent(element) {
            var window = getWindow(element);
            var offsetParent = getTrueOffsetParent(element);

            while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === 'static') {
                offsetParent = getTrueOffsetParent(offsetParent);
            }

            if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle_getComputedStyle(offsetParent).position === 'static')) {
                return window;
            }

            return offsetParent || getContainingBlock(element) || window;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
        function getMainAxisFromPlacement(placement) {
            return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
        function expandToHashMap(value, keys) {
            return keys.reduce(function (hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }, {});
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









        // eslint-disable-next-line import/no-unused-modules

        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        };

        function arrow(_ref) {
            var _state$modifiersData$;

            var state = _ref.state,
                name = _ref.name,
                options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [left, right].indexOf(basePlacement) >= 0;
            var len = isVertical ? 'height' : 'width';

            if (!arrowElement || !popperOffsets) {
                return;
            }

            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === 'y' ? enums_top : left;
            var maxProp = axis === 'y' ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
            // outside of the popper bounds

            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max); // Prevents breaking syntax highlighting...

            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }

        function arrow_effect(_ref2) {
            var state = _ref2.state,
                options = _ref2.options;
            var _options$element = options.element,
                arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

            if (arrowElement == null) {
                return;
            } // CSS selector


            if (typeof arrowElement === 'string') {
                arrowElement = state.elements.popper.querySelector(arrowElement);

                if (!arrowElement) {
                    return;
                }
            }

            if (false) {}

            if (!contains(state.elements.popper, arrowElement)) {
                if (false) {}

                return;
            }

            state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_arrow = ({
            name: 'arrow',
            enabled: true,
            phase: 'main',
            fn: arrow,
            effect: arrow_effect,
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow']
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
        function getVariation(placement) {
            return placement.split('-')[1];
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







        // eslint-disable-next-line import/no-unused-modules

        var unsetSides = {
            top: 'auto',
            right: 'auto',
            bottom: 'auto',
            left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

        function roundOffsetsByDPR(_ref) {
            var x = _ref.x,
                y = _ref.y;
            var win = window;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }

        function mapToStyles(_ref2) {
            var _Object$assign2;

            var popper = _ref2.popper,
                popperRect = _ref2.popperRect,
                placement = _ref2.placement,
                variation = _ref2.variation,
                offsets = _ref2.offsets,
                position = _ref2.position,
                gpuAcceleration = _ref2.gpuAcceleration,
                adaptive = _ref2.adaptive,
                roundOffsets = _ref2.roundOffsets,
                isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x,
                x = _offsets$x === void 0 ? 0 : _offsets$x,
                _offsets$y = offsets.y,
                y = _offsets$y === void 0 ? 0 : _offsets$y;

            var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
                x: x,
                y: y
            }) : {
                x: x,
                y: y
            };

            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty('x');
            var hasY = offsets.hasOwnProperty('y');
            var sideX = left;
            var sideY = enums_top;
            var win = window;

            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = 'clientHeight';
                var widthProp = 'clientWidth';

                if (offsetParent === getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);

                    if (getComputedStyle_getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
                        heightProp = 'scrollHeight';
                        widthProp = 'scrollWidth';
                    }
                } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


                offsetParent = offsetParent;

                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
                        offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }

                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
                        offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }

            var commonStyles = Object.assign({
                position: position
            }, adaptive && unsetSides);

            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x: x,
                y: y
            }) : {
                x: x,
                y: y
            };

            x = _ref4.x;
            y = _ref4.y;

            if (gpuAcceleration) {
                var _Object$assign;

                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
            }

            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }

        function computeStyles(_ref5) {
            var state = _ref5.state,
                options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration,
                gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
                _options$adaptive = options.adaptive,
                adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
                _options$roundOffsets = options.roundOffsets,
                roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

            if (false) { var transitionProperty; }

            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration: gpuAcceleration,
                isFixed: state.options.strategy === 'fixed'
            };

            if (state.modifiersData.popperOffsets != null) {
                state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                    offsets: state.modifiersData.popperOffsets,
                    position: state.options.strategy,
                    adaptive: adaptive,
                    roundOffsets: roundOffsets
                })));
            }

            if (state.modifiersData.arrow != null) {
                state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                    offsets: state.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: false,
                    roundOffsets: roundOffsets
                })));
            }

            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                'data-popper-placement': state.placement
            });
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_computeStyles = ({
            name: 'computeStyles',
            enabled: true,
            phase: 'beforeWrite',
            fn: computeStyles,
            data: {}
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
         // eslint-disable-next-line import/no-unused-modules

        var passive = {
            passive: true
        };

        function eventListeners_effect(_ref) {
            var state = _ref.state,
                instance = _ref.instance,
                options = _ref.options;
            var _options$scroll = options.scroll,
                scroll = _options$scroll === void 0 ? true : _options$scroll,
                _options$resize = options.resize,
                resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

            if (scroll) {
                scrollParents.forEach(function (scrollParent) {
                    scrollParent.addEventListener('scroll', instance.update, passive);
                });
            }

            if (resize) {
                window.addEventListener('resize', instance.update, passive);
            }

            return function () {
                if (scroll) {
                    scrollParents.forEach(function (scrollParent) {
                        scrollParent.removeEventListener('scroll', instance.update, passive);
                    });
                }

                if (resize) {
                    window.removeEventListener('resize', instance.update, passive);
                }
            };
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var eventListeners = ({
            name: 'eventListeners',
            enabled: true,
            phase: 'write',
            fn: function fn() {},
            effect: eventListeners_effect,
            data: {}
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
        var hash = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, function (matched) {
                return hash[matched];
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
        var getOppositeVariationPlacement_hash = {
            start: 'end',
            end: 'start'
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, function (matched) {
                return getOppositeVariationPlacement_hash[matched];
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

        function getWindowScroll(node) {
            var win = getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



        function getWindowScrollBarX(element) {
            // If <html> has a CSS width greater than the viewport, then this will be
            // incorrect for RTL.
            // Popper 1 is broken in this case and never had a bug report so let's assume
            // it's not an issue. I don't think anyone ever specifies width on <html>
            // anyway.
            // Browsers where the left scrollbar doesn't cause an issue report `0` for
            // this (e.g. Edge 2019, IE11, Safari)
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



        function getViewportRect(element) {
            var win = getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
            // can be obscured underneath it.
            // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
            // if it isn't open, so if this isn't available, the popper will be detected
            // to overflow the bottom of the screen too early.

            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
                // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
                // errors due to floating point numbers, so we need to check precision.
                // Safari returns a number <= 0, usually < -1 when pinch-zoomed
                // Feature detection fails in mobile emulation mode in Chrome.
                // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
                // 0.001
                // Fallback here: "Not Safari" userAgent

                if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }

            return {
                width: width,
                height: height,
                x: x + getWindowScrollBarX(element),
                y: y
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




        // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

        function getDocumentRect(element) {
            var _element$ownerDocumen;

            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;

            if (getComputedStyle_getComputedStyle(body || html).direction === 'rtl') {
                x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            }

            return {
                width: width,
                height: height,
                x: x,
                y: y
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

        function isScrollParent(element) {
            // Firefox wants us to check `-x` and `-y` variations as well
            var _getComputedStyle = getComputedStyle_getComputedStyle(element),
                overflow = _getComputedStyle.overflow,
                overflowX = _getComputedStyle.overflowX,
                overflowY = _getComputedStyle.overflowY;

            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




        function getScrollParent(node) {
            if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
                // $FlowFixMe[incompatible-return]: assume body is always available
                return node.ownerDocument.body;
            }

            if (isHTMLElement(node) && isScrollParent(node)) {
                return node;
            }

            return getScrollParent(getParentNode(node));
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




        /*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

        function listScrollParents(element, list) {
            var _element$ownerDocumen;

            if (list === void 0) {
                list = [];
            }

            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow(scrollParent);
            var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
                updatedList.concat(listScrollParents(getParentNode(target)));
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















        function getInnerBoundingClientRect(element) {
            var rect = getBoundingClientRect(element);
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }

        function getClientRectFromMixedType(element, clippingParent) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

            if (!isElement(clipperElement)) {
                return [];
            } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


            return clippingParents.filter(function (clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
            });
        } // Gets the maximum area that the element is visible in due to any number of
// clipping parents


        function getClippingRect(element, boundary, rootBoundary) {
            var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }, getClientRectFromMixedType(element, firstClippingParent));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




        function computeOffsets(_ref) {
            var reference = _ref.reference,
                element = _ref.element,
                placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;

            switch (basePlacement) {
                case enums_top:
                    offsets = {
                        x: commonX,
                        y: reference.y - element.height
                    };
                    break;

                case bottom:
                    offsets = {
                        x: commonX,
                        y: reference.y + reference.height
                    };
                    break;

                case right:
                    offsets = {
                        x: reference.x + reference.width,
                        y: commonY
                    };
                    break;

                case left:
                    offsets = {
                        x: reference.x - element.width,
                        y: commonY
                    };
                    break;

                default:
                    offsets = {
                        x: reference.x,
                        y: reference.y
                    };
            }

            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

            if (mainAxis != null) {
                var len = mainAxis === 'y' ? 'height' : 'width';

                switch (variation) {
                    case start:
                        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                        break;

                    case end:
                        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                        break;

                    default:
                }
            }

            return offsets;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








        // eslint-disable-next-line import/no-unused-modules

        function detectOverflow(state, options) {
            if (options === void 0) {
                options = {};
            }

            var _options = options,
                _options$placement = _options.placement,
                placement = _options$placement === void 0 ? state.placement : _options$placement,
                _options$boundary = _options.boundary,
                boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
                _options$rootBoundary = _options.rootBoundary,
                rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
                _options$elementConte = _options.elementContext,
                elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
                _options$altBoundary = _options.altBoundary,
                altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
                _options$padding = _options.padding,
                padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: 'absolute',
                placement: placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
            // 0 or negative = within the clipping rect

            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach(function (key) {
                    var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
                    overflowOffsets[key] += offset[axis] * multiply;
                });
            }

            return overflowOffsets;
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




        function computeAutoPlacement(state, options) {
            if (options === void 0) {
                options = {};
            }

            var _options = options,
                placement = _options.placement,
                boundary = _options.boundary,
                rootBoundary = _options.rootBoundary,
                padding = _options.padding,
                flipVariations = _options.flipVariations,
                _options$allowedAutoP = _options.allowedAutoPlacements,
                allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
                return getVariation(placement) === variation;
            }) : basePlacements;
            var allowedPlacements = placements.filter(function (placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            });

            if (allowedPlacements.length === 0) {
                allowedPlacements = placements;

                if (false) {}
            } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


            var overflows = allowedPlacements.reduce(function (acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding
                })[getBasePlacement(placement)];
                return acc;
            }, {});
            return Object.keys(overflows).sort(function (a, b) {
                return overflows[a] - overflows[b];
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






        // eslint-disable-next-line import/no-unused-modules

        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) {
                return [];
            }

            var oppositePlacement = getOppositePlacement(placement);
            return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
        }

        function flip(_ref) {
            var state = _ref.state,
                options = _ref.options,
                name = _ref.name;

            if (state.modifiersData[name]._skip) {
                return;
            }

            var _options$mainAxis = options.mainAxis,
                checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                _options$altAxis = options.altAxis,
                checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
                specifiedFallbackPlacements = options.fallbackPlacements,
                padding = options.padding,
                boundary = options.boundary,
                rootBoundary = options.rootBoundary,
                altBoundary = options.altBoundary,
                _options$flipVariatio = options.flipVariations,
                flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
                allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding,
                    flipVariations: flipVariations,
                    allowedAutoPlacements: allowedAutoPlacements
                }) : placement);
            }, []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map();
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];

            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];

                var _basePlacement = getBasePlacement(placement);

                var isStartVariation = getVariation(placement) === start;
                var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
                var len = isVertical ? 'width' : 'height';
                var overflow = detectOverflow(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    altBoundary: altBoundary,
                    padding: padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

                if (referenceRect[len] > popperRect[len]) {
                    mainVariationSide = getOppositePlacement(mainVariationSide);
                }

                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];

                if (checkMainAxis) {
                    checks.push(overflow[_basePlacement] <= 0);
                }

                if (checkAltAxis) {
                    checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                }

                if (checks.every(function (check) {
                    return check;
                })) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }

                checksMap.set(placement, checks);
            }

            if (makeFallbackChecks) {
                // `2` may be desired in some cases – research later
                var numberOfChecks = flipVariations ? 3 : 1;

                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find(function (placement) {
                        var checks = checksMap.get(placement);

                        if (checks) {
                            return checks.slice(0, _i).every(function (check) {
                                return check;
                            });
                        }
                    });

                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };

                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);

                    if (_ret === "break") break;
                }
            }

            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_flip = ({
            name: 'flip',
            enabled: true,
            phase: 'main',
            fn: flip,
            requiresIfExists: ['offset'],
            data: {
                _skip: false
            }
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) {
                preventedOffsets = {
                    x: 0,
                    y: 0
                };
            }

            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }

        function isAnySideFullyClipped(overflow) {
            return [enums_top, right, bottom, left].some(function (side) {
                return overflow[side] >= 0;
            });
        }

        function hide(_ref) {
            var state = _ref.state,
                name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: 'reference'
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets: referenceClippingOffsets,
                popperEscapeOffsets: popperEscapeOffsets,
                isReferenceHidden: isReferenceHidden,
                hasPopperEscaped: hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                'data-popper-reference-hidden': isReferenceHidden,
                'data-popper-escaped': hasPopperEscaped
            });
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_hide = ({
            name: 'hide',
            enabled: true,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: hide
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

        // eslint-disable-next-line import/no-unused-modules

        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

            var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
                    placement: placement
                })) : offset,
                skidding = _ref[0],
                distance = _ref[1];

            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [left, right].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }

        function offset(_ref2) {
            var state = _ref2.state,
                options = _ref2.options,
                name = _ref2.name;
            var _options$offset = options.offset,
                offset = _options$offset === void 0 ? [0, 0] : _options$offset;
            var data = enums_placements.reduce(function (acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }, {});
            var _data$state$placement = data[state.placement],
                x = _data$state$placement.x,
                y = _data$state$placement.y;

            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }

            state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_offset = ({
            name: 'offset',
            enabled: true,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: offset
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


        function popperOffsets(_ref) {
            var state = _ref.state,
                name = _ref.name;
            // Offsets are the actual position the popper needs to have to be
            // properly positioned near its reference element
            // This is the most basic placement, and will be adjusted by
            // the modifiers in the next step
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: 'absolute',
                placement: state.placement
            });
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_popperOffsets = ({
            name: 'popperOffsets',
            enabled: true,
            phase: 'read',
            fn: popperOffsets,
            data: {}
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
        function getAltAxis(axis) {
            return axis === 'x' ? 'y' : 'x';
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












        function preventOverflow(_ref) {
            var state = _ref.state,
                options = _ref.options,
                name = _ref.name;
            var _options$mainAxis = options.mainAxis,
                checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                _options$altAxis = options.altAxis,
                checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
                boundary = options.boundary,
                rootBoundary = options.rootBoundary,
                altBoundary = options.altBoundary,
                padding = options.padding,
                _options$tether = options.tether,
                tether = _options$tether === void 0 ? true : _options$tether,
                _options$tetherOffset = options.tetherOffset,
                tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                altBoundary: altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };

            if (!popperOffsets) {
                return;
            }

            if (checkMainAxis) {
                var _offsetModifierState$;

                var mainSide = mainAxis === 'y' ? enums_top : left;
                var altSide = mainAxis === 'y' ? bottom : right;
                var len = mainAxis === 'y' ? 'height' : 'width';
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
                // outside the reference bounds

                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
                // to include its full size in the calculation. If the reference is small
                // and near the edge of a boundary, the popper can overflow even if the
                // reference is not overflowing as well (e.g. virtual elements with no
                // width or height)

                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }

            if (checkAltAxis) {
                var _offsetModifierState$2;

                var _mainSide = mainAxis === 'x' ? enums_top : left;

                var _altSide = mainAxis === 'x' ? bottom : right;

                var _offset = popperOffsets[altAxis];

                var _len = altAxis === 'y' ? 'height' : 'width';

                var _min = _offset + overflow[_mainSide];

                var _max = _offset - overflow[_altSide];

                var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }

            state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules


        /* harmony default export */ var modifiers_preventOverflow = ({
            name: 'preventOverflow',
            enabled: true,
            phase: 'main',
            fn: preventOverflow,
            requiresIfExists: ['offset']
        });
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




        function getNodeScroll(node) {
            if (node === getWindow(node) || !isHTMLElement(node)) {
                return getWindowScroll(node);
            } else {
                return getHTMLElementScroll(node);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) {
                isFixed = false;
            }

            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };

            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
                    isScrollParent(documentElement)) {
                    scroll = getNodeScroll(offsetParent);
                }

                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) {
                    offsets.x = getWindowScrollBarX(documentElement);
                }
            }

            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
         // source: https://stackoverflow.com/questions/49875255

        function order(modifiers) {
            var map = new Map();
            var visited = new Set();
            var result = [];
            modifiers.forEach(function (modifier) {
                map.set(modifier.name, modifier);
            }); // On visiting object, check for its dependencies and visit them recursively

            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach(function (dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);

                        if (depModifier) {
                            sort(depModifier);
                        }
                    }
                });
                result.push(modifier);
            }

            modifiers.forEach(function (modifier) {
                if (!visited.has(modifier.name)) {
                    // check for visited object
                    sort(modifier);
                }
            });
            return result;
        }

        function orderModifiers(modifiers) {
            // order based on dependencies
            var orderedModifiers = order(modifiers); // order based on phase

            return modifierPhases.reduce(function (acc, phase) {
                return acc.concat(orderedModifiers.filter(function (modifier) {
                    return modifier.phase === phase;
                }));
            }, []);
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
        function debounce(fn) {
            var pending;
            return function () {
                if (!pending) {
                    pending = new Promise(function (resolve) {
                        Promise.resolve().then(function () {
                            pending = undefined;
                            resolve(fn());
                        });
                    });
                }

                return pending;
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
        function mergeByName(modifiers) {
            var merged = modifiers.reduce(function (merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }, {}); // IE11 does not support Object.values

            return Object.keys(merged).map(function (key) {
                return merged[key];
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














        var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
        var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
        var DEFAULT_OPTIONS = {
            placement: 'bottom',
            modifiers: [],
            strategy: 'absolute'
        };

        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return !args.some(function (element) {
                return !(element && typeof element.getBoundingClientRect === 'function');
            });
        }

        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) {
                generatorOptions = {};
            }

            var _generatorOptions = generatorOptions,
                _generatorOptions$def = _generatorOptions.defaultModifiers,
                defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
                _generatorOptions$def2 = _generatorOptions.defaultOptions,
                defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) {
                    options = defaultOptions;
                }

                var state = {
                    placement: 'bottom',
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference: reference,
                        popper: popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state: state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        }; // Orders the modifiers based on their dependencies and `phase`
                        // properties

                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                        state.orderedModifiers = orderedModifiers.filter(function (m) {
                            return m.enabled;
                        }); // Validate the provided modifiers so that the consumer will get warned
                        // if one of the modifiers is invalid for any reason

                        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

                        runModifierEffects();
                        return instance.update();
                    },
                    // Sync update – it will always be executed, even if not necessary. This
                    // is useful for low frequency updates where sync behavior simplifies the
                    // logic.
                    // For high frequency updates (e.g. `resize` and `scroll` events), always
                    // prefer the async Popper#update method
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) {
                            return;
                        }

                        var _state$elements = state.elements,
                            reference = _state$elements.reference,
                            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                        // anymore

                        if (!areValidElements(reference, popper)) {
                            if (false) {}

                            return;
                        } // Store the reference and popper rects to be read by modifiers


                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                            popper: getLayoutRect(popper)
                        }; // Modifiers have the ability to reset the current update cycle. The
                        // most common use case for this is the `flip` modifier changing the
                        // placement, which then needs to re-run all the modifiers, because the
                        // logic was previously ran for the previous placement and is therefore
                        // stale/incorrect

                        state.reset = false;
                        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                        // is filled with the initial data specified by the modifier. This means
                        // it doesn't persist and is fresh on each update.
                        // To ensure persistent data, use `${name}#persistent`

                        state.orderedModifiers.forEach(function (modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        });
                        var __debug_loops__ = 0;

                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (false) {}

                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }

                            var _state$orderedModifie = state.orderedModifiers[index],
                                fn = _state$orderedModifie.fn,
                                _state$orderedModifie2 = _state$orderedModifie.options,
                                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                                name = _state$orderedModifie.name;

                            if (typeof fn === 'function') {
                                state = fn({
                                    state: state,
                                    options: _options,
                                    name: name,
                                    instance: instance
                                }) || state;
                            }
                        }
                    },
                    // Async and optimistically optimized update – it will not be executed if
                    // not necessary (debounced to run at most once-per-tick)
                    update: debounce(function () {
                        return new Promise(function (resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        });
                    }),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };

                if (!areValidElements(reference, popper)) {
                    if (false) {}

                    return instance;
                }

                instance.setOptions(options).then(function (state) {
                    if (!isDestroyed && options.onFirstUpdate) {
                        options.onFirstUpdate(state);
                    }
                }); // Modifiers have the ability to execute arbitrary code before the first
                // update cycle runs. They will be executed in the same order as the update
                // cycle. This is useful when a modifier adds some persistent data that
                // other modifiers need to use, but the modifier is run after the dependent
                // one.

                function runModifierEffects() {
                    state.orderedModifiers.forEach(function (_ref3) {
                        var name = _ref3.name,
                            _ref3$options = _ref3.options,
                            options = _ref3$options === void 0 ? {} : _ref3$options,
                            effect = _ref3.effect;

                        if (typeof effect === 'function') {
                            var cleanupFn = effect({
                                state: state,
                                name: name,
                                instance: instance,
                                options: options
                            });

                            var noopFn = function noopFn() {};

                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    });
                }

                function cleanupModifierEffects() {
                    effectCleanupFns.forEach(function (fn) {
                        return fn();
                    });
                    effectCleanupFns = [];
                }

                return instance;
            };
        }
        var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










        var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
        var popper_createPopper = /*#__PURE__*/popperGenerator({
            defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules

        // eslint-disable-next-line import/no-unused-modules

        // eslint-disable-next-line import/no-unused-modules


        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





        var popper_lite_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
        var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
            defaultModifiers: popper_lite_defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules


        ;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/index.js

        // eslint-disable-next-line import/no-unused-modules

        // eslint-disable-next-line import/no-unused-modules

        // eslint-disable-next-line import/no-unused-modules


        ;// CONCATENATED MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js
        /*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): util/index.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        const MAX_UID = 1000000;
        const MILLISECONDS_MULTIPLIER = 1000;
        const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

        const toType = obj => {
            if (obj === null || obj === undefined) {
                return `${obj}`;
            }

            return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        /**
         * --------------------------------------------------------------------------
         * Public Util Api
         * --------------------------------------------------------------------------
         */


        const getUID = prefix => {
            do {
                prefix += Math.floor(Math.random() * MAX_UID);
            } while (document.getElementById(prefix));

            return prefix;
        };

        const getSelector = element => {
            let selector = element.getAttribute('data-bs-target');

            if (!selector || selector === '#') {
                let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
                // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
                // `document.querySelector` will rightfully complain it is invalid.
                // See https://github.com/twbs/bootstrap/issues/32273

                if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
                    return null;
                } // Just in case some CMS puts out a full URL with the anchor appended


                if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
                    hrefAttr = `#${hrefAttr.split('#')[1]}`;
                }

                selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
            }

            return selector;
        };

        const getSelectorFromElement = element => {
            const selector = getSelector(element);

            if (selector) {
                return document.querySelector(selector) ? selector : null;
            }

            return null;
        };

        const getElementFromSelector = element => {
            const selector = getSelector(element);
            return selector ? document.querySelector(selector) : null;
        };

        const getTransitionDurationFromElement = element => {
            if (!element) {
                return 0;
            } // Get transition-duration of the element


            let {
                transitionDuration,
                transitionDelay
            } = window.getComputedStyle(element);
            const floatTransitionDuration = Number.parseFloat(transitionDuration);
            const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

            if (!floatTransitionDuration && !floatTransitionDelay) {
                return 0;
            } // If multiple durations are defined, take the first


            transitionDuration = transitionDuration.split(',')[0];
            transitionDelay = transitionDelay.split(',')[0];
            return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };

        const triggerTransitionEnd = element => {
            element.dispatchEvent(new Event(TRANSITION_END));
        };

        const bootstrap_esm_isElement = obj => {
            if (!obj || typeof obj !== 'object') {
                return false;
            }

            if (typeof obj.jquery !== 'undefined') {
                obj = obj[0];
            }

            return typeof obj.nodeType !== 'undefined';
        };

        const getElement = obj => {
            if (bootstrap_esm_isElement(obj)) {
                // it's a jQuery object or a node element
                return obj.jquery ? obj[0] : obj;
            }

            if (typeof obj === 'string' && obj.length > 0) {
                return document.querySelector(obj);
            }

            return null;
        };

        const typeCheckConfig = (componentName, config, configTypes) => {
            Object.keys(configTypes).forEach(property => {
                const expectedTypes = configTypes[property];
                const value = config[property];
                const valueType = value && bootstrap_esm_isElement(value) ? 'element' : toType(value);

                if (!new RegExp(expectedTypes).test(valueType)) {
                    throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
                }
            });
        };

        const bootstrap_esm_isVisible = element => {
            if (!bootstrap_esm_isElement(element) || element.getClientRects().length === 0) {
                return false;
            }

            return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
        };

        const isDisabled = element => {
            if (!element || element.nodeType !== Node.ELEMENT_NODE) {
                return true;
            }

            if (element.classList.contains('disabled')) {
                return true;
            }

            if (typeof element.disabled !== 'undefined') {
                return element.disabled;
            }

            return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
        };

        const findShadowRoot = element => {
            if (!document.documentElement.attachShadow) {
                return null;
            } // Can find the shadow root otherwise it'll return the document


            if (typeof element.getRootNode === 'function') {
                const root = element.getRootNode();
                return root instanceof ShadowRoot ? root : null;
            }

            if (element instanceof ShadowRoot) {
                return element;
            } // when we don't find a shadow root


            if (!element.parentNode) {
                return null;
            }

            return findShadowRoot(element.parentNode);
        };

        const noop = () => {};
        /**
         * Trick to restart an element's animation
         *
         * @param {HTMLElement} element
         * @return void
         *
         * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
         */


        const reflow = element => {
            // eslint-disable-next-line no-unused-expressions
            element.offsetHeight;
        };

        const getjQuery = () => {
            const {
                jQuery
            } = window;

            if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
                return jQuery;
            }

            return null;
        };

        const DOMContentLoadedCallbacks = [];

        const onDOMContentLoaded = callback => {
            if (document.readyState === 'loading') {
                // add listener on the first call when the document is in loading state
                if (!DOMContentLoadedCallbacks.length) {
                    document.addEventListener('DOMContentLoaded', () => {
                        DOMContentLoadedCallbacks.forEach(callback => callback());
                    });
                }

                DOMContentLoadedCallbacks.push(callback);
            } else {
                callback();
            }
        };

        const isRTL = () => document.documentElement.dir === 'rtl';

        const defineJQueryPlugin = plugin => {
            onDOMContentLoaded(() => {
                const $ = getjQuery();
                /* istanbul ignore if */

                if ($) {
                    const name = plugin.NAME;
                    const JQUERY_NO_CONFLICT = $.fn[name];
                    $.fn[name] = plugin.jQueryInterface;
                    $.fn[name].Constructor = plugin;

                    $.fn[name].noConflict = () => {
                        $.fn[name] = JQUERY_NO_CONFLICT;
                        return plugin.jQueryInterface;
                    };
                }
            });
        };

        const execute = callback => {
            if (typeof callback === 'function') {
                callback();
            }
        };

        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
            if (!waitForTransition) {
                execute(callback);
                return;
            }

            const durationPadding = 5;
            const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
            let called = false;

            const handler = ({
                                 target
                             }) => {
                if (target !== transitionElement) {
                    return;
                }

                called = true;
                transitionElement.removeEventListener(TRANSITION_END, handler);
                execute(callback);
            };

            transitionElement.addEventListener(TRANSITION_END, handler);
            setTimeout(() => {
                if (!called) {
                    triggerTransitionEnd(transitionElement);
                }
            }, emulatedDuration);
        };
        /**
         * Return the previous/next element of a list.
         *
         * @param {array} list    The list of elements
         * @param activeElement   The active element
         * @param shouldGetNext   Choose to get next or previous element
         * @param isCycleAllowed
         * @return {Element|elem} The proper element
         */


        const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
            let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

            if (index === -1) {
                return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
            }

            const listLength = list.length;
            index += shouldGetNext ? 1 : -1;

            if (isCycleAllowed) {
                index = (index + listLength) % listLength;
            }

            return list[Math.max(0, Math.min(index, listLength - 1))];
        };

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): dom/event-handler.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {}; // Events storage

        let uidEvent = 1;
        const customEvents = {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout'
        };
        const customEventsRegex = /^(mouseenter|mouseleave)/i;
        const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
        /**
         * ------------------------------------------------------------------------
         * Private methods
         * ------------------------------------------------------------------------
         */

        function getUidEvent(element, uid) {
            return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }

        function getEvent(element) {
            const uid = getUidEvent(element);
            element.uidEvent = uid;
            eventRegistry[uid] = eventRegistry[uid] || {};
            return eventRegistry[uid];
        }

        function bootstrapHandler(element, fn) {
            return function handler(event) {
                event.delegateTarget = element;

                if (handler.oneOff) {
                    EventHandler.off(element, event.type, fn);
                }

                return fn.apply(element, [event]);
            };
        }

        function bootstrapDelegationHandler(element, selector, fn) {
            return function handler(event) {
                const domElements = element.querySelectorAll(selector);

                for (let {
                    target
                } = event; target && target !== this; target = target.parentNode) {
                    for (let i = domElements.length; i--;) {
                        if (domElements[i] === target) {
                            event.delegateTarget = target;

                            if (handler.oneOff) {
                                EventHandler.off(element, event.type, selector, fn);
                            }

                            return fn.apply(target, [event]);
                        }
                    }
                } // To please ESLint


                return null;
            };
        }

        function findHandler(events, handler, delegationSelector = null) {
            const uidEventList = Object.keys(events);

            for (let i = 0, len = uidEventList.length; i < len; i++) {
                const event = events[uidEventList[i]];

                if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
                    return event;
                }
            }

            return null;
        }

        function normalizeParams(originalTypeEvent, handler, delegationFn) {
            const delegation = typeof handler === 'string';
            const originalHandler = delegation ? delegationFn : handler;
            let typeEvent = getTypeEvent(originalTypeEvent);
            const isNative = nativeEvents.has(typeEvent);

            if (!isNative) {
                typeEvent = originalTypeEvent;
            }

            return [delegation, originalHandler, typeEvent];
        }

        function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
            if (typeof originalTypeEvent !== 'string' || !element) {
                return;
            }

            if (!handler) {
                handler = delegationFn;
                delegationFn = null;
            } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
            // this prevents the handler from being dispatched the same way as mouseover or mouseout does


            if (customEventsRegex.test(originalTypeEvent)) {
                const wrapFn = fn => {
                    return function (event) {
                        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                            return fn.call(this, event);
                        }
                    };
                };

                if (delegationFn) {
                    delegationFn = wrapFn(delegationFn);
                } else {
                    handler = wrapFn(handler);
                }
            }

            const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
            const events = getEvent(element);
            const handlers = events[typeEvent] || (events[typeEvent] = {});
            const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

            if (previousFn) {
                previousFn.oneOff = previousFn.oneOff && oneOff;
                return;
            }

            const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
            const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
            fn.delegationSelector = delegation ? handler : null;
            fn.originalHandler = originalHandler;
            fn.oneOff = oneOff;
            fn.uidEvent = uid;
            handlers[uid] = fn;
            element.addEventListener(typeEvent, fn, delegation);
        }

        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
            const fn = findHandler(events[typeEvent], handler, delegationSelector);

            if (!fn) {
                return;
            }

            element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
            delete events[typeEvent][fn.uidEvent];
        }

        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
            const storeElementEvent = events[typeEvent] || {};
            Object.keys(storeElementEvent).forEach(handlerKey => {
                if (handlerKey.includes(namespace)) {
                    const event = storeElementEvent[handlerKey];
                    removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
                }
            });
        }

        function getTypeEvent(event) {
            // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
            event = event.replace(stripNameRegex, '');
            return customEvents[event] || event;
        }

        const EventHandler = {
            on(element, event, handler, delegationFn) {
                addHandler(element, event, handler, delegationFn, false);
            },

            one(element, event, handler, delegationFn) {
                addHandler(element, event, handler, delegationFn, true);
            },

            off(element, originalTypeEvent, handler, delegationFn) {
                if (typeof originalTypeEvent !== 'string' || !element) {
                    return;
                }

                const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
                const inNamespace = typeEvent !== originalTypeEvent;
                const events = getEvent(element);
                const isNamespace = originalTypeEvent.startsWith('.');

                if (typeof originalHandler !== 'undefined') {
                    // Simplest case: handler is passed, remove that listener ONLY.
                    if (!events || !events[typeEvent]) {
                        return;
                    }

                    removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
                    return;
                }

                if (isNamespace) {
                    Object.keys(events).forEach(elementEvent => {
                        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
                    });
                }

                const storeElementEvent = events[typeEvent] || {};
                Object.keys(storeElementEvent).forEach(keyHandlers => {
                    const handlerKey = keyHandlers.replace(stripUidRegex, '');

                    if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                        const event = storeElementEvent[keyHandlers];
                        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
                    }
                });
            },

            trigger(element, event, args) {
                if (typeof event !== 'string' || !element) {
                    return null;
                }

                const $ = getjQuery();
                const typeEvent = getTypeEvent(event);
                const inNamespace = event !== typeEvent;
                const isNative = nativeEvents.has(typeEvent);
                let jQueryEvent;
                let bubbles = true;
                let nativeDispatch = true;
                let defaultPrevented = false;
                let evt = null;

                if (inNamespace && $) {
                    jQueryEvent = $.Event(event, args);
                    $(element).trigger(jQueryEvent);
                    bubbles = !jQueryEvent.isPropagationStopped();
                    nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                    defaultPrevented = jQueryEvent.isDefaultPrevented();
                }

                if (isNative) {
                    evt = document.createEvent('HTMLEvents');
                    evt.initEvent(typeEvent, bubbles, true);
                } else {
                    evt = new CustomEvent(event, {
                        bubbles,
                        cancelable: true
                    });
                } // merge custom information in our event


                if (typeof args !== 'undefined') {
                    Object.keys(args).forEach(key => {
                        Object.defineProperty(evt, key, {
                            get() {
                                return args[key];
                            }

                        });
                    });
                }

                if (defaultPrevented) {
                    evt.preventDefault();
                }

                if (nativeDispatch) {
                    element.dispatchEvent(evt);
                }

                if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
                    jQueryEvent.preventDefault();
                }

                return evt;
            }

        };

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): dom/data.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */
        const elementMap = new Map();
        const Data = {
            set(element, key, instance) {
                if (!elementMap.has(element)) {
                    elementMap.set(element, new Map());
                }

                const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
                // can be removed later when multiple key/instances are fine to be used

                if (!instanceMap.has(key) && instanceMap.size !== 0) {
                    // eslint-disable-next-line no-console
                    console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
                    return;
                }

                instanceMap.set(key, instance);
            },

            get(element, key) {
                if (elementMap.has(element)) {
                    return elementMap.get(element).get(key) || null;
                }

                return null;
            },

            remove(element, key) {
                if (!elementMap.has(element)) {
                    return;
                }

                const instanceMap = elementMap.get(element);
                instanceMap.delete(key); // free up element references if there are no instances left for an element

                if (instanceMap.size === 0) {
                    elementMap.delete(element);
                }
            }

        };

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): base-component.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const VERSION = '5.1.3';

        class BaseComponent {
            constructor(element) {
                element = getElement(element);

                if (!element) {
                    return;
                }

                this._element = element;
                Data.set(this._element, this.constructor.DATA_KEY, this);
            }

            dispose() {
                Data.remove(this._element, this.constructor.DATA_KEY);
                EventHandler.off(this._element, this.constructor.EVENT_KEY);
                Object.getOwnPropertyNames(this).forEach(propertyName => {
                    this[propertyName] = null;
                });
            }

            _queueCallback(callback, element, isAnimated = true) {
                executeAfterTransition(callback, element, isAnimated);
            }
            /** Static */


            static getInstance(element) {
                return Data.get(getElement(element), this.DATA_KEY);
            }

            static getOrCreateInstance(element, config = {}) {
                return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
            }

            static get VERSION() {
                return VERSION;
            }

            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }

            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }

            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }

        }

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): util/component-functions.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */

        const enableDismissTrigger = (component, method = 'hide') => {
            const clickEvent = `click.dismiss${component.EVENT_KEY}`;
            const name = component.NAME;
            EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
                if (['A', 'AREA'].includes(this.tagName)) {
                    event.preventDefault();
                }

                if (isDisabled(this)) {
                    return;
                }

                const target = getElementFromSelector(this) || this.closest(`.${name}`);
                const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

                instance[method]();
            });
        };

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): alert.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$d = 'alert';
        const DATA_KEY$c = 'bs.alert';
        const EVENT_KEY$c = `.${DATA_KEY$c}`;
        const EVENT_CLOSE = `close${EVENT_KEY$c}`;
        const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
        const CLASS_NAME_FADE$5 = 'fade';
        const CLASS_NAME_SHOW$8 = 'show';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Alert extends BaseComponent {
            // Getters
            static get NAME() {
                return NAME$d;
            } // Public


            close() {
                const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

                if (closeEvent.defaultPrevented) {
                    return;
                }

                this._element.classList.remove(CLASS_NAME_SHOW$8);

                const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

                this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
            } // Private


            _destroyElement() {
                this._element.remove();

                EventHandler.trigger(this._element, EVENT_CLOSED);
                this.dispose();
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Alert.getOrCreateInstance(this);

                    if (typeof config !== 'string') {
                        return;
                    }

                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError(`No method named "${config}"`);
                    }

                    data[config](this);
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        enableDismissTrigger(Alert, 'close');
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Alert to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Alert);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): button.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$c = 'button';
        const DATA_KEY$b = 'bs.button';
        const EVENT_KEY$b = `.${DATA_KEY$b}`;
        const DATA_API_KEY$7 = '.data-api';
        const CLASS_NAME_ACTIVE$3 = 'active';
        const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
        const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Button extends BaseComponent {
            // Getters
            static get NAME() {
                return NAME$c;
            } // Public


            toggle() {
                // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
                this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Button.getOrCreateInstance(this);

                    if (config === 'toggle') {
                        data[config]();
                    }
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
            event.preventDefault();
            const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
            const data = Button.getOrCreateInstance(button);
            data.toggle();
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Button to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Button);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): dom/manipulator.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        function normalizeData(val) {
            if (val === 'true') {
                return true;
            }

            if (val === 'false') {
                return false;
            }

            if (val === Number(val).toString()) {
                return Number(val);
            }

            if (val === '' || val === 'null') {
                return null;
            }

            return val;
        }

        function normalizeDataKey(key) {
            return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
        }

        const Manipulator = {
            setDataAttribute(element, key, value) {
                element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
            },

            removeDataAttribute(element, key) {
                element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
            },

            getDataAttributes(element) {
                if (!element) {
                    return {};
                }

                const attributes = {};
                Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
                    let pureKey = key.replace(/^bs/, '');
                    pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                    attributes[pureKey] = normalizeData(element.dataset[key]);
                });
                return attributes;
            },

            getDataAttribute(element, key) {
                return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
            },

            offset(element) {
                const rect = element.getBoundingClientRect();
                return {
                    top: rect.top + window.pageYOffset,
                    left: rect.left + window.pageXOffset
                };
            },

            position(element) {
                return {
                    top: element.offsetTop,
                    left: element.offsetLeft
                };
            }

        };

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): dom/selector-engine.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        const NODE_TEXT = 3;
        const SelectorEngine = {
            find(selector, element = document.documentElement) {
                return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
            },

            findOne(selector, element = document.documentElement) {
                return Element.prototype.querySelector.call(element, selector);
            },

            children(element, selector) {
                return [].concat(...element.children).filter(child => child.matches(selector));
            },

            parents(element, selector) {
                const parents = [];
                let ancestor = element.parentNode;

                while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
                    if (ancestor.matches(selector)) {
                        parents.push(ancestor);
                    }

                    ancestor = ancestor.parentNode;
                }

                return parents;
            },

            prev(element, selector) {
                let previous = element.previousElementSibling;

                while (previous) {
                    if (previous.matches(selector)) {
                        return [previous];
                    }

                    previous = previous.previousElementSibling;
                }

                return [];
            },

            next(element, selector) {
                let next = element.nextElementSibling;

                while (next) {
                    if (next.matches(selector)) {
                        return [next];
                    }

                    next = next.nextElementSibling;
                }

                return [];
            },

            focusableChildren(element) {
                const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
                return this.find(focusables, element).filter(el => !isDisabled(el) && bootstrap_esm_isVisible(el));
            }

        };

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): carousel.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$b = 'carousel';
        const DATA_KEY$a = 'bs.carousel';
        const EVENT_KEY$a = `.${DATA_KEY$a}`;
        const DATA_API_KEY$6 = '.data-api';
        const ARROW_LEFT_KEY = 'ArrowLeft';
        const ARROW_RIGHT_KEY = 'ArrowRight';
        const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

        const SWIPE_THRESHOLD = 40;
        const Default$a = {
            interval: 5000,
            keyboard: true,
            slide: false,
            pause: 'hover',
            wrap: true,
            touch: true
        };
        const DefaultType$a = {
            interval: '(number|boolean)',
            keyboard: 'boolean',
            slide: '(boolean|string)',
            pause: '(string|boolean)',
            wrap: 'boolean',
            touch: 'boolean'
        };
        const ORDER_NEXT = 'next';
        const ORDER_PREV = 'prev';
        const DIRECTION_LEFT = 'left';
        const DIRECTION_RIGHT = 'right';
        const KEY_TO_DIRECTION = {
            [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
            [ARROW_RIGHT_KEY]: DIRECTION_LEFT
        };
        const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
        const EVENT_SLID = `slid${EVENT_KEY$a}`;
        const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
        const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
        const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
        const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
        const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
        const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
        const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
        const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
        const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
        const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
        const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
        const CLASS_NAME_CAROUSEL = 'carousel';
        const CLASS_NAME_ACTIVE$2 = 'active';
        const CLASS_NAME_SLIDE = 'slide';
        const CLASS_NAME_END = 'carousel-item-end';
        const CLASS_NAME_START = 'carousel-item-start';
        const CLASS_NAME_NEXT = 'carousel-item-next';
        const CLASS_NAME_PREV = 'carousel-item-prev';
        const CLASS_NAME_POINTER_EVENT = 'pointer-event';
        const SELECTOR_ACTIVE$1 = '.active';
        const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
        const SELECTOR_ITEM = '.carousel-item';
        const SELECTOR_ITEM_IMG = '.carousel-item img';
        const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
        const SELECTOR_INDICATORS = '.carousel-indicators';
        const SELECTOR_INDICATOR = '[data-bs-target]';
        const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
        const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
        const POINTER_TYPE_TOUCH = 'touch';
        const POINTER_TYPE_PEN = 'pen';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Carousel extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = false;
                this._isSliding = false;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(config);
                this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
                this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
                this._pointerEvent = Boolean(window.PointerEvent);

                this._addEventListeners();
            } // Getters


            static get Default() {
                return Default$a;
            }

            static get NAME() {
                return NAME$b;
            } // Public


            next() {
                this._slide(ORDER_NEXT);
            }

            nextWhenVisible() {
                // Don't call next when the page isn't visible
                // or the carousel or its parent isn't visible
                if (!document.hidden && bootstrap_esm_isVisible(this._element)) {
                    this.next();
                }
            }

            prev() {
                this._slide(ORDER_PREV);
            }

            pause(event) {
                if (!event) {
                    this._isPaused = true;
                }

                if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
                    triggerTransitionEnd(this._element);
                    this.cycle(true);
                }

                clearInterval(this._interval);
                this._interval = null;
            }

            cycle(event) {
                if (!event) {
                    this._isPaused = false;
                }

                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }

                if (this._config && this._config.interval && !this._isPaused) {
                    this._updateInterval();

                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                }
            }

            to(index) {
                this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

                const activeIndex = this._getItemIndex(this._activeElement);

                if (index > this._items.length - 1 || index < 0) {
                    return;
                }

                if (this._isSliding) {
                    EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
                    return;
                }

                if (activeIndex === index) {
                    this.pause();
                    this.cycle();
                    return;
                }

                const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

                this._slide(order, this._items[index]);
            } // Private


            _getConfig(config) {
                config = { ...Default$a,
                    ...Manipulator.getDataAttributes(this._element),
                    ...(typeof config === 'object' ? config : {})
                };
                typeCheckConfig(NAME$b, config, DefaultType$a);
                return config;
            }

            _handleSwipe() {
                const absDeltax = Math.abs(this.touchDeltaX);

                if (absDeltax <= SWIPE_THRESHOLD) {
                    return;
                }

                const direction = absDeltax / this.touchDeltaX;
                this.touchDeltaX = 0;

                if (!direction) {
                    return;
                }

                this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
            }

            _addEventListeners() {
                if (this._config.keyboard) {
                    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
                }

                if (this._config.pause === 'hover') {
                    EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
                    EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
                }

                if (this._config.touch && this._touchSupported) {
                    this._addTouchEventListeners();
                }
            }

            _addTouchEventListeners() {
                const hasPointerPenTouch = event => {
                    return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
                };

                const start = event => {
                    if (hasPointerPenTouch(event)) {
                        this.touchStartX = event.clientX;
                    } else if (!this._pointerEvent) {
                        this.touchStartX = event.touches[0].clientX;
                    }
                };

                const move = event => {
                    // ensure swiping with one touch and not pinching
                    this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
                };

                const end = event => {
                    if (hasPointerPenTouch(event)) {
                        this.touchDeltaX = event.clientX - this.touchStartX;
                    }

                    this._handleSwipe();

                    if (this._config.pause === 'hover') {
                        // If it's a touch-enabled device, mouseenter/leave are fired as
                        // part of the mouse compatibility events on first tap - the carousel
                        // would stop cycling until user tapped out of it;
                        // here, we listen for touchend, explicitly pause the carousel
                        // (as if it's the second time we tap on it, mouseenter compat event
                        // is NOT fired) and after a timeout (to allow for mouse compatibility
                        // events to fire) we explicitly restart cycling
                        this.pause();

                        if (this.touchTimeout) {
                            clearTimeout(this.touchTimeout);
                        }

                        this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
                    }
                };

                SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
                    EventHandler.on(itemImg, EVENT_DRAG_START, event => event.preventDefault());
                });

                if (this._pointerEvent) {
                    EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
                    EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

                    this._element.classList.add(CLASS_NAME_POINTER_EVENT);
                } else {
                    EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
                    EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
                    EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
                }
            }

            _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) {
                    return;
                }

                const direction = KEY_TO_DIRECTION[event.key];

                if (direction) {
                    event.preventDefault();

                    this._slide(direction);
                }
            }

            _getItemIndex(element) {
                this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
                return this._items.indexOf(element);
            }

            _getItemByOrder(order, activeElement) {
                const isNext = order === ORDER_NEXT;
                return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
            }

            _triggerSlideEvent(relatedTarget, eventDirectionName) {
                const targetIndex = this._getItemIndex(relatedTarget);

                const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

                return EventHandler.trigger(this._element, EVENT_SLIDE, {
                    relatedTarget,
                    direction: eventDirectionName,
                    from: fromIndex,
                    to: targetIndex
                });
            }

            _setActiveIndicatorElement(element) {
                if (this._indicatorsElement) {
                    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
                    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                    activeIndicator.removeAttribute('aria-current');
                    const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

                    for (let i = 0; i < indicators.length; i++) {
                        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
                            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
                            indicators[i].setAttribute('aria-current', 'true');
                            break;
                        }
                    }
                }
            }

            _updateInterval() {
                const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

                if (!element) {
                    return;
                }

                const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

                if (elementInterval) {
                    this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                    this._config.interval = elementInterval;
                } else {
                    this._config.interval = this._config.defaultInterval || this._config.interval;
                }
            }

            _slide(directionOrOrder, element) {
                const order = this._directionToOrder(directionOrOrder);

                const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

                const activeElementIndex = this._getItemIndex(activeElement);

                const nextElement = element || this._getItemByOrder(order, activeElement);

                const nextElementIndex = this._getItemIndex(nextElement);

                const isCycling = Boolean(this._interval);
                const isNext = order === ORDER_NEXT;
                const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
                const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

                const eventDirectionName = this._orderToDirection(order);

                if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
                    this._isSliding = false;
                    return;
                }

                if (this._isSliding) {
                    return;
                }

                const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

                if (slideEvent.defaultPrevented) {
                    return;
                }

                if (!activeElement || !nextElement) {
                    // Some weirdness is happening, so we bail
                    return;
                }

                this._isSliding = true;

                if (isCycling) {
                    this.pause();
                }

                this._setActiveIndicatorElement(nextElement);

                this._activeElement = nextElement;

                const triggerSlidEvent = () => {
                    EventHandler.trigger(this._element, EVENT_SLID, {
                        relatedTarget: nextElement,
                        direction: eventDirectionName,
                        from: activeElementIndex,
                        to: nextElementIndex
                    });
                };

                if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
                    nextElement.classList.add(orderClassName);
                    reflow(nextElement);
                    activeElement.classList.add(directionalClassName);
                    nextElement.classList.add(directionalClassName);

                    const completeCallBack = () => {
                        nextElement.classList.remove(directionalClassName, orderClassName);
                        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                        this._isSliding = false;
                        setTimeout(triggerSlidEvent, 0);
                    };

                    this._queueCallback(completeCallBack, activeElement, true);
                } else {
                    activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
                    nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                    this._isSliding = false;
                    triggerSlidEvent();
                }

                if (isCycling) {
                    this.cycle();
                }
            }

            _directionToOrder(direction) {
                if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
                    return direction;
                }

                if (isRTL()) {
                    return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
                }

                return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
            }

            _orderToDirection(order) {
                if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
                    return order;
                }

                if (isRTL()) {
                    return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
                }

                return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
            } // Static


            static carouselInterface(element, config) {
                const data = Carousel.getOrCreateInstance(element, config);
                let {
                    _config
                } = data;

                if (typeof config === 'object') {
                    _config = { ..._config,
                        ...config
                    };
                }

                const action = typeof config === 'string' ? config : _config.slide;

                if (typeof config === 'number') {
                    data.to(config);
                } else if (typeof action === 'string') {
                    if (typeof data[action] === 'undefined') {
                        throw new TypeError(`No method named "${action}"`);
                    }

                    data[action]();
                } else if (_config.interval && _config.ride) {
                    data.pause();
                    data.cycle();
                }
            }

            static jQueryInterface(config) {
                return this.each(function () {
                    Carousel.carouselInterface(this, config);
                });
            }

            static dataApiClickHandler(event) {
                const target = getElementFromSelector(this);

                if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
                    return;
                }

                const config = { ...Manipulator.getDataAttributes(target),
                    ...Manipulator.getDataAttributes(this)
                };
                const slideIndex = this.getAttribute('data-bs-slide-to');

                if (slideIndex) {
                    config.interval = false;
                }

                Carousel.carouselInterface(target, config);

                if (slideIndex) {
                    Carousel.getInstance(target).to(slideIndex);
                }

                event.preventDefault();
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
        EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
            const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

            for (let i = 0, len = carousels.length; i < len; i++) {
                Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
            }
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Carousel to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Carousel);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): collapse.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$a = 'collapse';
        const DATA_KEY$9 = 'bs.collapse';
        const EVENT_KEY$9 = `.${DATA_KEY$9}`;
        const DATA_API_KEY$5 = '.data-api';
        const Default$9 = {
            toggle: true,
            parent: null
        };
        const DefaultType$9 = {
            toggle: 'boolean',
            parent: '(null|element)'
        };
        const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
        const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
        const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
        const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
        const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
        const CLASS_NAME_SHOW$7 = 'show';
        const CLASS_NAME_COLLAPSE = 'collapse';
        const CLASS_NAME_COLLAPSING = 'collapsing';
        const CLASS_NAME_COLLAPSED = 'collapsed';
        const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
        const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
        const WIDTH = 'width';
        const HEIGHT = 'height';
        const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
        const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Collapse extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._isTransitioning = false;
                this._config = this._getConfig(config);
                this._triggerArray = [];
                const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

                for (let i = 0, len = toggleList.length; i < len; i++) {
                    const elem = toggleList[i];
                    const selector = getSelectorFromElement(elem);
                    const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

                    if (selector !== null && filterElement.length) {
                        this._selector = selector;

                        this._triggerArray.push(elem);
                    }
                }

                this._initializeChildren();

                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
                }

                if (this._config.toggle) {
                    this.toggle();
                }
            } // Getters


            static get Default() {
                return Default$9;
            }

            static get NAME() {
                return NAME$a;
            } // Public


            toggle() {
                if (this._isShown()) {
                    this.hide();
                } else {
                    this.show();
                }
            }

            show() {
                if (this._isTransitioning || this._isShown()) {
                    return;
                }

                let actives = [];
                let activesData;

                if (this._config.parent) {
                    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                    actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
                }

                const container = SelectorEngine.findOne(this._selector);

                if (actives.length) {
                    const tempActiveData = actives.find(elem => container !== elem);
                    activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

                    if (activesData && activesData._isTransitioning) {
                        return;
                    }
                }

                const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

                if (startEvent.defaultPrevented) {
                    return;
                }

                actives.forEach(elemActive => {
                    if (container !== elemActive) {
                        Collapse.getOrCreateInstance(elemActive, {
                            toggle: false
                        }).hide();
                    }

                    if (!activesData) {
                        Data.set(elemActive, DATA_KEY$9, null);
                    }
                });

                const dimension = this._getDimension();

                this._element.classList.remove(CLASS_NAME_COLLAPSE);

                this._element.classList.add(CLASS_NAME_COLLAPSING);

                this._element.style[dimension] = 0;

                this._addAriaAndCollapsedClass(this._triggerArray, true);

                this._isTransitioning = true;

                const complete = () => {
                    this._isTransitioning = false;

                    this._element.classList.remove(CLASS_NAME_COLLAPSING);

                    this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

                    this._element.style[dimension] = '';
                    EventHandler.trigger(this._element, EVENT_SHOWN$5);
                };

                const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                const scrollSize = `scroll${capitalizedDimension}`;

                this._queueCallback(complete, this._element, true);

                this._element.style[dimension] = `${this._element[scrollSize]}px`;
            }

            hide() {
                if (this._isTransitioning || !this._isShown()) {
                    return;
                }

                const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

                if (startEvent.defaultPrevented) {
                    return;
                }

                const dimension = this._getDimension();

                this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
                reflow(this._element);

                this._element.classList.add(CLASS_NAME_COLLAPSING);

                this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

                const triggerArrayLength = this._triggerArray.length;

                for (let i = 0; i < triggerArrayLength; i++) {
                    const trigger = this._triggerArray[i];
                    const elem = getElementFromSelector(trigger);

                    if (elem && !this._isShown(elem)) {
                        this._addAriaAndCollapsedClass([trigger], false);
                    }
                }

                this._isTransitioning = true;

                const complete = () => {
                    this._isTransitioning = false;

                    this._element.classList.remove(CLASS_NAME_COLLAPSING);

                    this._element.classList.add(CLASS_NAME_COLLAPSE);

                    EventHandler.trigger(this._element, EVENT_HIDDEN$5);
                };

                this._element.style[dimension] = '';

                this._queueCallback(complete, this._element, true);
            }

            _isShown(element = this._element) {
                return element.classList.contains(CLASS_NAME_SHOW$7);
            } // Private


            _getConfig(config) {
                config = { ...Default$9,
                    ...Manipulator.getDataAttributes(this._element),
                    ...config
                };
                config.toggle = Boolean(config.toggle); // Coerce string values

                config.parent = getElement(config.parent);
                typeCheckConfig(NAME$a, config, DefaultType$9);
                return config;
            }

            _getDimension() {
                return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
            }

            _initializeChildren() {
                if (!this._config.parent) {
                    return;
                }

                const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
                    const selected = getElementFromSelector(element);

                    if (selected) {
                        this._addAriaAndCollapsedClass([element], this._isShown(selected));
                    }
                });
            }

            _addAriaAndCollapsedClass(triggerArray, isOpen) {
                if (!triggerArray.length) {
                    return;
                }

                triggerArray.forEach(elem => {
                    if (isOpen) {
                        elem.classList.remove(CLASS_NAME_COLLAPSED);
                    } else {
                        elem.classList.add(CLASS_NAME_COLLAPSED);
                    }

                    elem.setAttribute('aria-expanded', isOpen);
                });
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const _config = {};

                    if (typeof config === 'string' && /show|hide/.test(config)) {
                        _config.toggle = false;
                    }

                    const data = Collapse.getOrCreateInstance(this, _config);

                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError(`No method named "${config}"`);
                        }

                        data[config]();
                    }
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
                event.preventDefault();
            }

            const selector = getSelectorFromElement(this);
            const selectorElements = SelectorEngine.find(selector);
            selectorElements.forEach(element => {
                Collapse.getOrCreateInstance(element, {
                    toggle: false
                }).toggle();
            });
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Collapse to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Collapse);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): dropdown.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$9 = 'dropdown';
        const DATA_KEY$8 = 'bs.dropdown';
        const EVENT_KEY$8 = `.${DATA_KEY$8}`;
        const DATA_API_KEY$4 = '.data-api';
        const ESCAPE_KEY$2 = 'Escape';
        const SPACE_KEY = 'Space';
        const TAB_KEY$1 = 'Tab';
        const ARROW_UP_KEY = 'ArrowUp';
        const ARROW_DOWN_KEY = 'ArrowDown';
        const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

        const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
        const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
        const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
        const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
        const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
        const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
        const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
        const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
        const CLASS_NAME_SHOW$6 = 'show';
        const CLASS_NAME_DROPUP = 'dropup';
        const CLASS_NAME_DROPEND = 'dropend';
        const CLASS_NAME_DROPSTART = 'dropstart';
        const CLASS_NAME_NAVBAR = 'navbar';
        const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
        const SELECTOR_MENU = '.dropdown-menu';
        const SELECTOR_NAVBAR_NAV = '.navbar-nav';
        const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
        const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
        const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
        const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
        const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
        const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
        const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
        const Default$8 = {
            offset: [0, 2],
            boundary: 'clippingParents',
            reference: 'toggle',
            display: 'dynamic',
            popperConfig: null,
            autoClose: true
        };
        const DefaultType$8 = {
            offset: '(array|string|function)',
            boundary: '(string|element)',
            reference: '(string|element|object)',
            display: 'string',
            popperConfig: '(null|object|function)',
            autoClose: '(boolean|string)'
        };
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Dropdown extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._popper = null;
                this._config = this._getConfig(config);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
            } // Getters


            static get Default() {
                return Default$8;
            }

            static get DefaultType() {
                return DefaultType$8;
            }

            static get NAME() {
                return NAME$9;
            } // Public


            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }

            show() {
                if (isDisabled(this._element) || this._isShown(this._menu)) {
                    return;
                }

                const relatedTarget = {
                    relatedTarget: this._element
                };
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

                if (showEvent.defaultPrevented) {
                    return;
                }

                const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

                if (this._inNavbar) {
                    Manipulator.setDataAttribute(this._menu, 'popper', 'none');
                } else {
                    this._createPopper(parent);
                } // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


                if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
                    [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
                }

                this._element.focus();

                this._element.setAttribute('aria-expanded', true);

                this._menu.classList.add(CLASS_NAME_SHOW$6);

                this._element.classList.add(CLASS_NAME_SHOW$6);

                EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
            }

            hide() {
                if (isDisabled(this._element) || !this._isShown(this._menu)) {
                    return;
                }

                const relatedTarget = {
                    relatedTarget: this._element
                };

                this._completeHide(relatedTarget);
            }

            dispose() {
                if (this._popper) {
                    this._popper.destroy();
                }

                super.dispose();
            }

            update() {
                this._inNavbar = this._detectNavbar();

                if (this._popper) {
                    this._popper.update();
                }
            } // Private


            _completeHide(relatedTarget) {
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

                if (hideEvent.defaultPrevented) {
                    return;
                } // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support


                if ('ontouchstart' in document.documentElement) {
                    [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
                }

                if (this._popper) {
                    this._popper.destroy();
                }

                this._menu.classList.remove(CLASS_NAME_SHOW$6);

                this._element.classList.remove(CLASS_NAME_SHOW$6);

                this._element.setAttribute('aria-expanded', 'false');

                Manipulator.removeDataAttribute(this._menu, 'popper');
                EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
            }

            _getConfig(config) {
                config = { ...this.constructor.Default,
                    ...Manipulator.getDataAttributes(this._element),
                    ...config
                };
                typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

                if (typeof config.reference === 'object' && !bootstrap_esm_isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
                    // Popper virtual elements require a getBoundingClientRect method
                    throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                }

                return config;
            }

            _createPopper(parent) {
                if (typeof lib_namespaceObject === 'undefined') {
                    throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
                }

                let referenceElement = this._element;

                if (this._config.reference === 'parent') {
                    referenceElement = parent;
                } else if (bootstrap_esm_isElement(this._config.reference)) {
                    referenceElement = getElement(this._config.reference);
                } else if (typeof this._config.reference === 'object') {
                    referenceElement = this._config.reference;
                }

                const popperConfig = this._getPopperConfig();

                const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
                this._popper = popper_createPopper(referenceElement, this._menu, popperConfig);

                if (isDisplayStatic) {
                    Manipulator.setDataAttribute(this._menu, 'popper', 'static');
                }
            }

            _isShown(element = this._element) {
                return element.classList.contains(CLASS_NAME_SHOW$6);
            }

            _getMenuElement() {
                return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
            }

            _getPlacement() {
                const parentDropdown = this._element.parentNode;

                if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
                    return PLACEMENT_RIGHT;
                }

                if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
                    return PLACEMENT_LEFT;
                } // We need to trim the value because custom properties can also include spaces


                const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

                if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
                    return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
                }

                return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
            }

            _detectNavbar() {
                return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
            }

            _getOffset() {
                const {
                    offset
                } = this._config;

                if (typeof offset === 'string') {
                    return offset.split(',').map(val => Number.parseInt(val, 10));
                }

                if (typeof offset === 'function') {
                    return popperData => offset(popperData, this._element);
                }

                return offset;
            }

            _getPopperConfig() {
                const defaultBsPopperConfig = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: 'preventOverflow',
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: 'offset',
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                }; // Disable Popper if we have a static display

                if (this._config.display === 'static') {
                    defaultBsPopperConfig.modifiers = [{
                        name: 'applyStyles',
                        enabled: false
                    }];
                }

                return { ...defaultBsPopperConfig,
                    ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
                };
            }

            _selectMenuItem({
                                key,
                                target
                            }) {
                const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(bootstrap_esm_isVisible);

                if (!items.length) {
                    return;
                } // if target isn't included in items (e.g. when expanding the dropdown)
                // allow cycling to get the last item in case key equals ARROW_UP_KEY


                getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Dropdown.getOrCreateInstance(this, config);

                    if (typeof config !== 'string') {
                        return;
                    }

                    if (typeof data[config] === 'undefined') {
                        throw new TypeError(`No method named "${config}"`);
                    }

                    data[config]();
                });
            }

            static clearMenus(event) {
                if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
                    return;
                }

                const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

                for (let i = 0, len = toggles.length; i < len; i++) {
                    const context = Dropdown.getInstance(toggles[i]);

                    if (!context || context._config.autoClose === false) {
                        continue;
                    }

                    if (!context._isShown()) {
                        continue;
                    }

                    const relatedTarget = {
                        relatedTarget: context._element
                    };

                    if (event) {
                        const composedPath = event.composedPath();
                        const isMenuTarget = composedPath.includes(context._menu);

                        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
                            continue;
                        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


                        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                            continue;
                        }

                        if (event.type === 'click') {
                            relatedTarget.clickEvent = event;
                        }
                    }

                    context._completeHide(relatedTarget);
                }
            }

            static getParentFromElement(element) {
                return getElementFromSelector(element) || element.parentNode;
            }

            static dataApiKeydownHandler(event) {
                // If not input/textarea:
                //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
                // If input/textarea:
                //  - If space key => not a dropdown command
                //  - If key is other than escape
                //    - If key is not up or down => not a dropdown command
                //    - If trigger inside the menu => not a dropdown command
                if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
                    return;
                }

                const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

                if (!isActive && event.key === ESCAPE_KEY$2) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                if (isDisabled(this)) {
                    return;
                }

                const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
                const instance = Dropdown.getOrCreateInstance(getToggleButton);

                if (event.key === ESCAPE_KEY$2) {
                    instance.hide();
                    return;
                }

                if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
                    if (!isActive) {
                        instance.show();
                    }

                    instance._selectMenuItem(event);

                    return;
                }

                if (!isActive || event.key === SPACE_KEY) {
                    Dropdown.clearMenus();
                }
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
            event.preventDefault();
            Dropdown.getOrCreateInstance(this).toggle();
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Dropdown to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Dropdown);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): util/scrollBar.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
        const SELECTOR_STICKY_CONTENT = '.sticky-top';

        class ScrollBarHelper {
            constructor() {
                this._element = document.body;
            }

            getWidth() {
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
                const documentWidth = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - documentWidth);
            }

            hide() {
                const width = this.getWidth();

                this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


                this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


                this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

                this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
            }

            _disableOverFlow() {
                this._saveInitialAttribute(this._element, 'overflow');

                this._element.style.overflow = 'hidden';
            }

            _setElementAttributes(selector, styleProp, callback) {
                const scrollbarWidth = this.getWidth();

                const manipulationCallBack = element => {
                    if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                        return;
                    }

                    this._saveInitialAttribute(element, styleProp);

                    const calculatedValue = window.getComputedStyle(element)[styleProp];
                    element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
                };

                this._applyManipulationCallback(selector, manipulationCallBack);
            }

            reset() {
                this._resetElementAttributes(this._element, 'overflow');

                this._resetElementAttributes(this._element, 'paddingRight');

                this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

                this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
            }

            _saveInitialAttribute(element, styleProp) {
                const actualValue = element.style[styleProp];

                if (actualValue) {
                    Manipulator.setDataAttribute(element, styleProp, actualValue);
                }
            }

            _resetElementAttributes(selector, styleProp) {
                const manipulationCallBack = element => {
                    const value = Manipulator.getDataAttribute(element, styleProp);

                    if (typeof value === 'undefined') {
                        element.style.removeProperty(styleProp);
                    } else {
                        Manipulator.removeDataAttribute(element, styleProp);
                        element.style[styleProp] = value;
                    }
                };

                this._applyManipulationCallback(selector, manipulationCallBack);
            }

            _applyManipulationCallback(selector, callBack) {
                if (bootstrap_esm_isElement(selector)) {
                    callBack(selector);
                } else {
                    SelectorEngine.find(selector, this._element).forEach(callBack);
                }
            }

            isOverflowing() {
                return this.getWidth() > 0;
            }

        }

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): util/backdrop.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        const Default$7 = {
            className: 'modal-backdrop',
            isVisible: true,
            // if false, we use the backdrop helper without adding any element to the dom
            isAnimated: false,
            rootElement: 'body',
            // give the choice to place backdrop under different elements
            clickCallback: null
        };
        const DefaultType$7 = {
            className: 'string',
            isVisible: 'boolean',
            isAnimated: 'boolean',
            rootElement: '(element|string)',
            clickCallback: '(function|null)'
        };
        const NAME$8 = 'backdrop';
        const CLASS_NAME_FADE$4 = 'fade';
        const CLASS_NAME_SHOW$5 = 'show';
        const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;

        class Backdrop {
            constructor(config) {
                this._config = this._getConfig(config);
                this._isAppended = false;
                this._element = null;
            }

            show(callback) {
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }

                this._append();

                if (this._config.isAnimated) {
                    reflow(this._getElement());
                }

                this._getElement().classList.add(CLASS_NAME_SHOW$5);

                this._emulateAnimation(() => {
                    execute(callback);
                });
            }

            hide(callback) {
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }

                this._getElement().classList.remove(CLASS_NAME_SHOW$5);

                this._emulateAnimation(() => {
                    this.dispose();
                    execute(callback);
                });
            } // Private


            _getElement() {
                if (!this._element) {
                    const backdrop = document.createElement('div');
                    backdrop.className = this._config.className;

                    if (this._config.isAnimated) {
                        backdrop.classList.add(CLASS_NAME_FADE$4);
                    }

                    this._element = backdrop;
                }

                return this._element;
            }

            _getConfig(config) {
                config = { ...Default$7,
                    ...(typeof config === 'object' ? config : {})
                }; // use getElement() with the default "body" to get a fresh Element on each instantiation

                config.rootElement = getElement(config.rootElement);
                typeCheckConfig(NAME$8, config, DefaultType$7);
                return config;
            }

            _append() {
                if (this._isAppended) {
                    return;
                }

                this._config.rootElement.append(this._getElement());

                EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
                    execute(this._config.clickCallback);
                });
                this._isAppended = true;
            }

            dispose() {
                if (!this._isAppended) {
                    return;
                }

                EventHandler.off(this._element, EVENT_MOUSEDOWN);

                this._element.remove();

                this._isAppended = false;
            }

            _emulateAnimation(callback) {
                executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
            }

        }

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): util/focustrap.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        const Default$6 = {
            trapElement: null,
            // The element to trap focus inside of
            autofocus: true
        };
        const DefaultType$6 = {
            trapElement: 'element',
            autofocus: 'boolean'
        };
        const NAME$7 = 'focustrap';
        const DATA_KEY$7 = 'bs.focustrap';
        const EVENT_KEY$7 = `.${DATA_KEY$7}`;
        const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
        const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
        const TAB_KEY = 'Tab';
        const TAB_NAV_FORWARD = 'forward';
        const TAB_NAV_BACKWARD = 'backward';

        class FocusTrap {
            constructor(config) {
                this._config = this._getConfig(config);
                this._isActive = false;
                this._lastTabNavDirection = null;
            }

            activate() {
                const {
                    trapElement,
                    autofocus
                } = this._config;

                if (this._isActive) {
                    return;
                }

                if (autofocus) {
                    trapElement.focus();
                }

                EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

                EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
                EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
                this._isActive = true;
            }

            deactivate() {
                if (!this._isActive) {
                    return;
                }

                this._isActive = false;
                EventHandler.off(document, EVENT_KEY$7);
            } // Private


            _handleFocusin(event) {
                const {
                    target
                } = event;
                const {
                    trapElement
                } = this._config;

                if (target === document || target === trapElement || trapElement.contains(target)) {
                    return;
                }

                const elements = SelectorEngine.focusableChildren(trapElement);

                if (elements.length === 0) {
                    trapElement.focus();
                } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
                    elements[elements.length - 1].focus();
                } else {
                    elements[0].focus();
                }
            }

            _handleKeydown(event) {
                if (event.key !== TAB_KEY) {
                    return;
                }

                this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
            }

            _getConfig(config) {
                config = { ...Default$6,
                    ...(typeof config === 'object' ? config : {})
                };
                typeCheckConfig(NAME$7, config, DefaultType$6);
                return config;
            }

        }

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): modal.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$6 = 'modal';
        const DATA_KEY$6 = 'bs.modal';
        const EVENT_KEY$6 = `.${DATA_KEY$6}`;
        const DATA_API_KEY$3 = '.data-api';
        const ESCAPE_KEY$1 = 'Escape';
        const Default$5 = {
            backdrop: true,
            keyboard: true,
            focus: true
        };
        const DefaultType$5 = {
            backdrop: '(boolean|string)',
            keyboard: 'boolean',
            focus: 'boolean'
        };
        const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
        const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
        const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
        const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
        const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
        const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
        const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
        const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
        const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
        const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
        const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
        const CLASS_NAME_OPEN = 'modal-open';
        const CLASS_NAME_FADE$3 = 'fade';
        const CLASS_NAME_SHOW$4 = 'show';
        const CLASS_NAME_STATIC = 'modal-static';
        const OPEN_SELECTOR$1 = '.modal.show';
        const SELECTOR_DIALOG = '.modal-dialog';
        const SELECTOR_MODAL_BODY = '.modal-body';
        const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Modal extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._config = this._getConfig(config);
                this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
                this._backdrop = this._initializeBackDrop();
                this._focustrap = this._initializeFocusTrap();
                this._isShown = false;
                this._ignoreBackdropClick = false;
                this._isTransitioning = false;
                this._scrollBar = new ScrollBarHelper();
            } // Getters


            static get Default() {
                return Default$5;
            }

            static get NAME() {
                return NAME$6;
            } // Public


            toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }

            show(relatedTarget) {
                if (this._isShown || this._isTransitioning) {
                    return;
                }

                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                    relatedTarget
                });

                if (showEvent.defaultPrevented) {
                    return;
                }

                this._isShown = true;

                if (this._isAnimated()) {
                    this._isTransitioning = true;
                }

                this._scrollBar.hide();

                document.body.classList.add(CLASS_NAME_OPEN);

                this._adjustDialog();

                this._setEscapeEvent();

                this._setResizeEvent();

                EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
                    EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
                        if (event.target === this._element) {
                            this._ignoreBackdropClick = true;
                        }
                    });
                });

                this._showBackdrop(() => this._showElement(relatedTarget));
            }

            hide() {
                if (!this._isShown || this._isTransitioning) {
                    return;
                }

                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

                if (hideEvent.defaultPrevented) {
                    return;
                }

                this._isShown = false;

                const isAnimated = this._isAnimated();

                if (isAnimated) {
                    this._isTransitioning = true;
                }

                this._setEscapeEvent();

                this._setResizeEvent();

                this._focustrap.deactivate();

                this._element.classList.remove(CLASS_NAME_SHOW$4);

                EventHandler.off(this._element, EVENT_CLICK_DISMISS);
                EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

                this._queueCallback(() => this._hideModal(), this._element, isAnimated);
            }

            dispose() {
                [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

                this._backdrop.dispose();

                this._focustrap.deactivate();

                super.dispose();
            }

            handleUpdate() {
                this._adjustDialog();
            } // Private


            _initializeBackDrop() {
                return new Backdrop({
                    isVisible: Boolean(this._config.backdrop),
                    // 'static' option will be translated to true, and booleans will keep their value
                    isAnimated: this._isAnimated()
                });
            }

            _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            }

            _getConfig(config) {
                config = { ...Default$5,
                    ...Manipulator.getDataAttributes(this._element),
                    ...(typeof config === 'object' ? config : {})
                };
                typeCheckConfig(NAME$6, config, DefaultType$5);
                return config;
            }

            _showElement(relatedTarget) {
                const isAnimated = this._isAnimated();

                const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    // Don't move modal's DOM position
                    document.body.append(this._element);
                }

                this._element.style.display = 'block';

                this._element.removeAttribute('aria-hidden');

                this._element.setAttribute('aria-modal', true);

                this._element.setAttribute('role', 'dialog');

                this._element.scrollTop = 0;

                if (modalBody) {
                    modalBody.scrollTop = 0;
                }

                if (isAnimated) {
                    reflow(this._element);
                }

                this._element.classList.add(CLASS_NAME_SHOW$4);

                const transitionComplete = () => {
                    if (this._config.focus) {
                        this._focustrap.activate();
                    }

                    this._isTransitioning = false;
                    EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                        relatedTarget
                    });
                };

                this._queueCallback(transitionComplete, this._dialog, isAnimated);
            }

            _setEscapeEvent() {
                if (this._isShown) {
                    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
                        if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
                            event.preventDefault();
                            this.hide();
                        } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
                            this._triggerBackdropTransition();
                        }
                    });
                } else {
                    EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
                }
            }

            _setResizeEvent() {
                if (this._isShown) {
                    EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
                } else {
                    EventHandler.off(window, EVENT_RESIZE);
                }
            }

            _hideModal() {
                this._element.style.display = 'none';

                this._element.setAttribute('aria-hidden', true);

                this._element.removeAttribute('aria-modal');

                this._element.removeAttribute('role');

                this._isTransitioning = false;

                this._backdrop.hide(() => {
                    document.body.classList.remove(CLASS_NAME_OPEN);

                    this._resetAdjustments();

                    this._scrollBar.reset();

                    EventHandler.trigger(this._element, EVENT_HIDDEN$3);
                });
            }

            _showBackdrop(callback) {
                EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => {
                    if (this._ignoreBackdropClick) {
                        this._ignoreBackdropClick = false;
                        return;
                    }

                    if (event.target !== event.currentTarget) {
                        return;
                    }

                    if (this._config.backdrop === true) {
                        this.hide();
                    } else if (this._config.backdrop === 'static') {
                        this._triggerBackdropTransition();
                    }
                });

                this._backdrop.show(callback);
            }

            _isAnimated() {
                return this._element.classList.contains(CLASS_NAME_FADE$3);
            }

            _triggerBackdropTransition() {
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

                if (hideEvent.defaultPrevented) {
                    return;
                }

                const {
                    classList,
                    scrollHeight,
                    style
                } = this._element;
                const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

                if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
                    return;
                }

                if (!isModalOverflowing) {
                    style.overflowY = 'hidden';
                }

                classList.add(CLASS_NAME_STATIC);

                this._queueCallback(() => {
                    classList.remove(CLASS_NAME_STATIC);

                    if (!isModalOverflowing) {
                        this._queueCallback(() => {
                            style.overflowY = '';
                        }, this._dialog);
                    }
                }, this._dialog);

                this._element.focus();
            } // ----------------------------------------------------------------------
            // the following methods are used to handle overflowing modals
            // ----------------------------------------------------------------------


            _adjustDialog() {
                const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

                const scrollbarWidth = this._scrollBar.getWidth();

                const isBodyOverflowing = scrollbarWidth > 0;

                if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
                    this._element.style.paddingLeft = `${scrollbarWidth}px`;
                }

                if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
                    this._element.style.paddingRight = `${scrollbarWidth}px`;
                }
            }

            _resetAdjustments() {
                this._element.style.paddingLeft = '';
                this._element.style.paddingRight = '';
            } // Static


            static jQueryInterface(config, relatedTarget) {
                return this.each(function () {
                    const data = Modal.getOrCreateInstance(this, config);

                    if (typeof config !== 'string') {
                        return;
                    }

                    if (typeof data[config] === 'undefined') {
                        throw new TypeError(`No method named "${config}"`);
                    }

                    data[config](relatedTarget);
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
            const target = getElementFromSelector(this);

            if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
            }

            EventHandler.one(target, EVENT_SHOW$3, showEvent => {
                if (showEvent.defaultPrevented) {
                    // only register focus restorer if modal will actually get shown
                    return;
                }

                EventHandler.one(target, EVENT_HIDDEN$3, () => {
                    if (bootstrap_esm_isVisible(this)) {
                        this.focus();
                    }
                });
            }); // avoid conflict when clicking moddal toggler while another one is open

            const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

            if (allReadyOpen) {
                Modal.getInstance(allReadyOpen).hide();
            }

            const data = Modal.getOrCreateInstance(target);
            data.toggle(this);
        });
        enableDismissTrigger(Modal);
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Modal to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Modal);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): offcanvas.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$5 = 'offcanvas';
        const DATA_KEY$5 = 'bs.offcanvas';
        const EVENT_KEY$5 = `.${DATA_KEY$5}`;
        const DATA_API_KEY$2 = '.data-api';
        const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
        const ESCAPE_KEY = 'Escape';
        const Default$4 = {
            backdrop: true,
            keyboard: true,
            scroll: false
        };
        const DefaultType$4 = {
            backdrop: 'boolean',
            keyboard: 'boolean',
            scroll: 'boolean'
        };
        const CLASS_NAME_SHOW$3 = 'show';
        const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
        const OPEN_SELECTOR = '.offcanvas.show';
        const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
        const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
        const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
        const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
        const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
        const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
        const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Offcanvas extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._config = this._getConfig(config);
                this._isShown = false;
                this._backdrop = this._initializeBackDrop();
                this._focustrap = this._initializeFocusTrap();

                this._addEventListeners();
            } // Getters


            static get NAME() {
                return NAME$5;
            }

            static get Default() {
                return Default$4;
            } // Public


            toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }

            show(relatedTarget) {
                if (this._isShown) {
                    return;
                }

                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
                    relatedTarget
                });

                if (showEvent.defaultPrevented) {
                    return;
                }

                this._isShown = true;
                this._element.style.visibility = 'visible';

                this._backdrop.show();

                if (!this._config.scroll) {
                    new ScrollBarHelper().hide();
                }

                this._element.removeAttribute('aria-hidden');

                this._element.setAttribute('aria-modal', true);

                this._element.setAttribute('role', 'dialog');

                this._element.classList.add(CLASS_NAME_SHOW$3);

                const completeCallBack = () => {
                    if (!this._config.scroll) {
                        this._focustrap.activate();
                    }

                    EventHandler.trigger(this._element, EVENT_SHOWN$2, {
                        relatedTarget
                    });
                };

                this._queueCallback(completeCallBack, this._element, true);
            }

            hide() {
                if (!this._isShown) {
                    return;
                }

                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

                if (hideEvent.defaultPrevented) {
                    return;
                }

                this._focustrap.deactivate();

                this._element.blur();

                this._isShown = false;

                this._element.classList.remove(CLASS_NAME_SHOW$3);

                this._backdrop.hide();

                const completeCallback = () => {
                    this._element.setAttribute('aria-hidden', true);

                    this._element.removeAttribute('aria-modal');

                    this._element.removeAttribute('role');

                    this._element.style.visibility = 'hidden';

                    if (!this._config.scroll) {
                        new ScrollBarHelper().reset();
                    }

                    EventHandler.trigger(this._element, EVENT_HIDDEN$2);
                };

                this._queueCallback(completeCallback, this._element, true);
            }

            dispose() {
                this._backdrop.dispose();

                this._focustrap.deactivate();

                super.dispose();
            } // Private


            _getConfig(config) {
                config = { ...Default$4,
                    ...Manipulator.getDataAttributes(this._element),
                    ...(typeof config === 'object' ? config : {})
                };
                typeCheckConfig(NAME$5, config, DefaultType$4);
                return config;
            }

            _initializeBackDrop() {
                return new Backdrop({
                    className: CLASS_NAME_BACKDROP,
                    isVisible: this._config.backdrop,
                    isAnimated: true,
                    rootElement: this._element.parentNode,
                    clickCallback: () => this.hide()
                });
            }

            _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            }

            _addEventListeners() {
                EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
                    if (this._config.keyboard && event.key === ESCAPE_KEY) {
                        this.hide();
                    }
                });
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Offcanvas.getOrCreateInstance(this, config);

                    if (typeof config !== 'string') {
                        return;
                    }

                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError(`No method named "${config}"`);
                    }

                    data[config](this);
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
            const target = getElementFromSelector(this);

            if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
            }

            if (isDisabled(this)) {
                return;
            }

            EventHandler.one(target, EVENT_HIDDEN$2, () => {
                // focus on trigger when it is closed
                if (bootstrap_esm_isVisible(this)) {
                    this.focus();
                }
            }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

            const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

            if (allReadyOpen && allReadyOpen !== target) {
                Offcanvas.getInstance(allReadyOpen).hide();
            }

            const data = Offcanvas.getOrCreateInstance(target);
            data.toggle(this);
        });
        EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
        enableDismissTrigger(Offcanvas);
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        defineJQueryPlugin(Offcanvas);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): util/sanitizer.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
        const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
        /**
         * A pattern that recognizes a commonly useful subset of URLs that are safe.
         *
         * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
         */

        const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
        /**
         * A pattern that matches safe data URLs. Only matches image, video and audio types.
         *
         * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
         */

        const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        const allowedAttribute = (attribute, allowedAttributeList) => {
            const attributeName = attribute.nodeName.toLowerCase();

            if (allowedAttributeList.includes(attributeName)) {
                if (uriAttributes.has(attributeName)) {
                    return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
                }

                return true;
            }

            const regExp = allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp); // Check if a regular expression validates the attribute.

            for (let i = 0, len = regExp.length; i < len; i++) {
                if (regExp[i].test(attributeName)) {
                    return true;
                }
            }

            return false;
        };

        const DefaultAllowlist = {
            // Global attributes allowed on any supplied element below.
            '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
            a: ['target', 'href', 'title', 'rel'],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };
        function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
            if (!unsafeHtml.length) {
                return unsafeHtml;
            }

            if (sanitizeFn && typeof sanitizeFn === 'function') {
                return sanitizeFn(unsafeHtml);
            }

            const domParser = new window.DOMParser();
            const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
            const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

            for (let i = 0, len = elements.length; i < len; i++) {
                const element = elements[i];
                const elementName = element.nodeName.toLowerCase();

                if (!Object.keys(allowList).includes(elementName)) {
                    element.remove();
                    continue;
                }

                const attributeList = [].concat(...element.attributes);
                const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
                attributeList.forEach(attribute => {
                    if (!allowedAttribute(attribute, allowedAttributes)) {
                        element.removeAttribute(attribute.nodeName);
                    }
                });
            }

            return createdDocument.body.innerHTML;
        }

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): tooltip.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$4 = 'tooltip';
        const DATA_KEY$4 = 'bs.tooltip';
        const EVENT_KEY$4 = `.${DATA_KEY$4}`;
        const CLASS_PREFIX$1 = 'bs-tooltip';
        const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
        const DefaultType$3 = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(array|string|function)',
            container: '(string|element|boolean)',
            fallbackPlacements: 'array',
            boundary: '(string|element)',
            customClass: '(string|function)',
            sanitize: 'boolean',
            sanitizeFn: '(null|function)',
            allowList: 'object',
            popperConfig: '(null|object|function)'
        };
        const AttachmentMap = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: isRTL() ? 'left' : 'right',
            BOTTOM: 'bottom',
            LEFT: isRTL() ? 'right' : 'left'
        };
        const Default$3 = {
            animation: true,
            template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: false,
            selector: false,
            placement: 'top',
            offset: [0, 0],
            container: false,
            fallbackPlacements: ['top', 'right', 'bottom', 'left'],
            boundary: 'clippingParents',
            customClass: '',
            sanitize: true,
            sanitizeFn: null,
            allowList: DefaultAllowlist,
            popperConfig: null
        };
        const Event$2 = {
            HIDE: `hide${EVENT_KEY$4}`,
            HIDDEN: `hidden${EVENT_KEY$4}`,
            SHOW: `show${EVENT_KEY$4}`,
            SHOWN: `shown${EVENT_KEY$4}`,
            INSERTED: `inserted${EVENT_KEY$4}`,
            CLICK: `click${EVENT_KEY$4}`,
            FOCUSIN: `focusin${EVENT_KEY$4}`,
            FOCUSOUT: `focusout${EVENT_KEY$4}`,
            MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
            MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
        };
        const CLASS_NAME_FADE$2 = 'fade';
        const CLASS_NAME_MODAL = 'modal';
        const CLASS_NAME_SHOW$2 = 'show';
        const HOVER_STATE_SHOW = 'show';
        const HOVER_STATE_OUT = 'out';
        const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
        const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
        const EVENT_MODAL_HIDE = 'hide.bs.modal';
        const TRIGGER_HOVER = 'hover';
        const TRIGGER_FOCUS = 'focus';
        const TRIGGER_CLICK = 'click';
        const TRIGGER_MANUAL = 'manual';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Tooltip extends BaseComponent {
            constructor(element, config) {
                if (typeof lib_namespaceObject === 'undefined') {
                    throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
                }

                super(element); // private

                this._isEnabled = true;
                this._timeout = 0;
                this._hoverState = '';
                this._activeTrigger = {};
                this._popper = null; // Protected

                this._config = this._getConfig(config);
                this.tip = null;

                this._setListeners();
            } // Getters


            static get Default() {
                return Default$3;
            }

            static get NAME() {
                return NAME$4;
            }

            static get Event() {
                return Event$2;
            }

            static get DefaultType() {
                return DefaultType$3;
            } // Public


            enable() {
                this._isEnabled = true;
            }

            disable() {
                this._isEnabled = false;
            }

            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }

            toggle(event) {
                if (!this._isEnabled) {
                    return;
                }

                if (event) {
                    const context = this._initializeOnDelegatedTarget(event);

                    context._activeTrigger.click = !context._activeTrigger.click;

                    if (context._isWithActiveTrigger()) {
                        context._enter(null, context);
                    } else {
                        context._leave(null, context);
                    }
                } else {
                    if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
                        this._leave(null, this);

                        return;
                    }

                    this._enter(null, this);
                }
            }

            dispose() {
                clearTimeout(this._timeout);
                EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

                if (this.tip) {
                    this.tip.remove();
                }

                this._disposePopper();

                super.dispose();
            }

            show() {
                if (this._element.style.display === 'none') {
                    throw new Error('Please use show on visible elements');
                }

                if (!(this.isWithContent() && this._isEnabled)) {
                    return;
                }

                const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
                const shadowRoot = findShadowRoot(this._element);
                const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

                if (showEvent.defaultPrevented || !isInTheDom) {
                    return;
                } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
                // This will be removed later in favor of a `setContent` method


                if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
                    this._disposePopper();

                    this.tip.remove();
                    this.tip = null;
                }

                const tip = this.getTipElement();
                const tipId = getUID(this.constructor.NAME);
                tip.setAttribute('id', tipId);

                this._element.setAttribute('aria-describedby', tipId);

                if (this._config.animation) {
                    tip.classList.add(CLASS_NAME_FADE$2);
                }

                const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

                const attachment = this._getAttachment(placement);

                this._addAttachmentClass(attachment);

                const {
                    container
                } = this._config;
                Data.set(tip, this.constructor.DATA_KEY, this);

                if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                    container.append(tip);
                    EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
                }

                if (this._popper) {
                    this._popper.update();
                } else {
                    this._popper = popper_createPopper(this._element, tip, this._getPopperConfig(attachment));
                }

                tip.classList.add(CLASS_NAME_SHOW$2);

                const customClass = this._resolvePossibleFunction(this._config.customClass);

                if (customClass) {
                    tip.classList.add(...customClass.split(' '));
                } // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


                if ('ontouchstart' in document.documentElement) {
                    [].concat(...document.body.children).forEach(element => {
                        EventHandler.on(element, 'mouseover', noop);
                    });
                }

                const complete = () => {
                    const prevHoverState = this._hoverState;
                    this._hoverState = null;
                    EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

                    if (prevHoverState === HOVER_STATE_OUT) {
                        this._leave(null, this);
                    }
                };

                const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

                this._queueCallback(complete, this.tip, isAnimated);
            }

            hide() {
                if (!this._popper) {
                    return;
                }

                const tip = this.getTipElement();

                const complete = () => {
                    if (this._isWithActiveTrigger()) {
                        return;
                    }

                    if (this._hoverState !== HOVER_STATE_SHOW) {
                        tip.remove();
                    }

                    this._cleanTipClass();

                    this._element.removeAttribute('aria-describedby');

                    EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

                    this._disposePopper();
                };

                const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

                if (hideEvent.defaultPrevented) {
                    return;
                }

                tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support

                if ('ontouchstart' in document.documentElement) {
                    [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
                }

                this._activeTrigger[TRIGGER_CLICK] = false;
                this._activeTrigger[TRIGGER_FOCUS] = false;
                this._activeTrigger[TRIGGER_HOVER] = false;
                const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

                this._queueCallback(complete, this.tip, isAnimated);

                this._hoverState = '';
            }

            update() {
                if (this._popper !== null) {
                    this._popper.update();
                }
            } // Protected


            isWithContent() {
                return Boolean(this.getTitle());
            }

            getTipElement() {
                if (this.tip) {
                    return this.tip;
                }

                const element = document.createElement('div');
                element.innerHTML = this._config.template;
                const tip = element.children[0];
                this.setContent(tip);
                tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
                this.tip = tip;
                return this.tip;
            }

            setContent(tip) {
                this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
            }

            _sanitizeAndSetContent(template, content, selector) {
                const templateElement = SelectorEngine.findOne(selector, template);

                if (!content && templateElement) {
                    templateElement.remove();
                    return;
                } // we use append for html objects to maintain js events


                this.setElementContent(templateElement, content);
            }

            setElementContent(element, content) {
                if (element === null) {
                    return;
                }

                if (bootstrap_esm_isElement(content)) {
                    content = getElement(content); // content is a DOM node or a jQuery

                    if (this._config.html) {
                        if (content.parentNode !== element) {
                            element.innerHTML = '';
                            element.append(content);
                        }
                    } else {
                        element.textContent = content.textContent;
                    }

                    return;
                }

                if (this._config.html) {
                    if (this._config.sanitize) {
                        content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
                    }

                    element.innerHTML = content;
                } else {
                    element.textContent = content;
                }
            }

            getTitle() {
                const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

                return this._resolvePossibleFunction(title);
            }

            updateAttachment(attachment) {
                if (attachment === 'right') {
                    return 'end';
                }

                if (attachment === 'left') {
                    return 'start';
                }

                return attachment;
            } // Private


            _initializeOnDelegatedTarget(event, context) {
                return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
            }

            _getOffset() {
                const {
                    offset
                } = this._config;

                if (typeof offset === 'string') {
                    return offset.split(',').map(val => Number.parseInt(val, 10));
                }

                if (typeof offset === 'function') {
                    return popperData => offset(popperData, this._element);
                }

                return offset;
            }

            _resolvePossibleFunction(content) {
                return typeof content === 'function' ? content.call(this._element) : content;
            }

            _getPopperConfig(attachment) {
                const defaultBsPopperConfig = {
                    placement: attachment,
                    modifiers: [{
                        name: 'flip',
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: 'offset',
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: 'preventOverflow',
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: 'arrow',
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: 'onChange',
                        enabled: true,
                        phase: 'afterWrite',
                        fn: data => this._handlePopperPlacementChange(data)
                    }],
                    onFirstUpdate: data => {
                        if (data.options.placement !== data.placement) {
                            this._handlePopperPlacementChange(data);
                        }
                    }
                };
                return { ...defaultBsPopperConfig,
                    ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
                };
            }

            _addAttachmentClass(attachment) {
                this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
            }

            _getAttachment(placement) {
                return AttachmentMap[placement.toUpperCase()];
            }

            _setListeners() {
                const triggers = this._config.trigger.split(' ');

                triggers.forEach(trigger => {
                    if (trigger === 'click') {
                        EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
                    } else if (trigger !== TRIGGER_MANUAL) {
                        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
                        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                        EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
                        EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
                    }
                });

                this._hideModalHandler = () => {
                    if (this._element) {
                        this.hide();
                    }
                };

                EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

                if (this._config.selector) {
                    this._config = { ...this._config,
                        trigger: 'manual',
                        selector: ''
                    };
                } else {
                    this._fixTitle();
                }
            }

            _fixTitle() {
                const title = this._element.getAttribute('title');

                const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

                if (title || originalTitleType !== 'string') {
                    this._element.setAttribute('data-bs-original-title', title || '');

                    if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
                        this._element.setAttribute('aria-label', title);
                    }

                    this._element.setAttribute('title', '');
                }
            }

            _enter(event, context) {
                context = this._initializeOnDelegatedTarget(event, context);

                if (event) {
                    context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                }

                if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
                    context._hoverState = HOVER_STATE_SHOW;
                    return;
                }

                clearTimeout(context._timeout);
                context._hoverState = HOVER_STATE_SHOW;

                if (!context._config.delay || !context._config.delay.show) {
                    context.show();
                    return;
                }

                context._timeout = setTimeout(() => {
                    if (context._hoverState === HOVER_STATE_SHOW) {
                        context.show();
                    }
                }, context._config.delay.show);
            }

            _leave(event, context) {
                context = this._initializeOnDelegatedTarget(event, context);

                if (event) {
                    context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                }

                if (context._isWithActiveTrigger()) {
                    return;
                }

                clearTimeout(context._timeout);
                context._hoverState = HOVER_STATE_OUT;

                if (!context._config.delay || !context._config.delay.hide) {
                    context.hide();
                    return;
                }

                context._timeout = setTimeout(() => {
                    if (context._hoverState === HOVER_STATE_OUT) {
                        context.hide();
                    }
                }, context._config.delay.hide);
            }

            _isWithActiveTrigger() {
                for (const trigger in this._activeTrigger) {
                    if (this._activeTrigger[trigger]) {
                        return true;
                    }
                }

                return false;
            }

            _getConfig(config) {
                const dataAttributes = Manipulator.getDataAttributes(this._element);
                Object.keys(dataAttributes).forEach(dataAttr => {
                    if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
                        delete dataAttributes[dataAttr];
                    }
                });
                config = { ...this.constructor.Default,
                    ...dataAttributes,
                    ...(typeof config === 'object' && config ? config : {})
                };
                config.container = config.container === false ? document.body : getElement(config.container);

                if (typeof config.delay === 'number') {
                    config.delay = {
                        show: config.delay,
                        hide: config.delay
                    };
                }

                if (typeof config.title === 'number') {
                    config.title = config.title.toString();
                }

                if (typeof config.content === 'number') {
                    config.content = config.content.toString();
                }

                typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

                if (config.sanitize) {
                    config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
                }

                return config;
            }

            _getDelegateConfig() {
                const config = {};

                for (const key in this._config) {
                    if (this.constructor.Default[key] !== this._config[key]) {
                        config[key] = this._config[key];
                    }
                } // In the future can be replaced with:
                // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
                // `Object.fromEntries(keysWithDifferentValues)`


                return config;
            }

            _cleanTipClass() {
                const tip = this.getTipElement();
                const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
                const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

                if (tabClass !== null && tabClass.length > 0) {
                    tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
                }
            }

            _getBasicClassPrefix() {
                return CLASS_PREFIX$1;
            }

            _handlePopperPlacementChange(popperData) {
                const {
                    state
                } = popperData;

                if (!state) {
                    return;
                }

                this.tip = state.elements.popper;

                this._cleanTipClass();

                this._addAttachmentClass(this._getAttachment(state.placement));
            }

            _disposePopper() {
                if (this._popper) {
                    this._popper.destroy();

                    this._popper = null;
                }
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Tooltip.getOrCreateInstance(this, config);

                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError(`No method named "${config}"`);
                        }

                        data[config]();
                    }
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Tooltip to jQuery only if jQuery is present
         */


        defineJQueryPlugin(Tooltip);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): popover.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$3 = 'popover';
        const DATA_KEY$3 = 'bs.popover';
        const EVENT_KEY$3 = `.${DATA_KEY$3}`;
        const CLASS_PREFIX = 'bs-popover';
        const Default$2 = { ...Tooltip.Default,
            placement: 'right',
            offset: [0, 8],
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
        };
        const DefaultType$2 = { ...Tooltip.DefaultType,
            content: '(string|element|function)'
        };
        const Event$1 = {
            HIDE: `hide${EVENT_KEY$3}`,
            HIDDEN: `hidden${EVENT_KEY$3}`,
            SHOW: `show${EVENT_KEY$3}`,
            SHOWN: `shown${EVENT_KEY$3}`,
            INSERTED: `inserted${EVENT_KEY$3}`,
            CLICK: `click${EVENT_KEY$3}`,
            FOCUSIN: `focusin${EVENT_KEY$3}`,
            FOCUSOUT: `focusout${EVENT_KEY$3}`,
            MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
            MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
        };
        const SELECTOR_TITLE = '.popover-header';
        const SELECTOR_CONTENT = '.popover-body';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Popover extends Tooltip {
            // Getters
            static get Default() {
                return Default$2;
            }

            static get NAME() {
                return NAME$3;
            }

            static get Event() {
                return Event$1;
            }

            static get DefaultType() {
                return DefaultType$2;
            } // Overrides


            isWithContent() {
                return this.getTitle() || this._getContent();
            }

            setContent(tip) {
                this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

                this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
            } // Private


            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }

            _getBasicClassPrefix() {
                return CLASS_PREFIX;
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Popover.getOrCreateInstance(this, config);

                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError(`No method named "${config}"`);
                        }

                        data[config]();
                    }
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Popover to jQuery only if jQuery is present
         */


        defineJQueryPlugin(Popover);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): scrollspy.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$2 = 'scrollspy';
        const DATA_KEY$2 = 'bs.scrollspy';
        const EVENT_KEY$2 = `.${DATA_KEY$2}`;
        const DATA_API_KEY$1 = '.data-api';
        const Default$1 = {
            offset: 10,
            method: 'auto',
            target: ''
        };
        const DefaultType$1 = {
            offset: 'number',
            method: 'string',
            target: '(string|element)'
        };
        const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
        const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
        const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
        const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
        const CLASS_NAME_ACTIVE$1 = 'active';
        const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
        const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
        const SELECTOR_NAV_LINKS = '.nav-link';
        const SELECTOR_NAV_ITEMS = '.nav-item';
        const SELECTOR_LIST_ITEMS = '.list-group-item';
        const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
        const SELECTOR_DROPDOWN$1 = '.dropdown';
        const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
        const METHOD_OFFSET = 'offset';
        const METHOD_POSITION = 'position';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class ScrollSpy extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
                this._config = this._getConfig(config);
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
                this.refresh();

                this._process();
            } // Getters


            static get Default() {
                return Default$1;
            }

            static get NAME() {
                return NAME$2;
            } // Public


            refresh() {
                const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
                const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
                const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
                targets.map(element => {
                    const targetSelector = getSelectorFromElement(element);
                    const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

                    if (target) {
                        const targetBCR = target.getBoundingClientRect();

                        if (targetBCR.width || targetBCR.height) {
                            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
                        }
                    }

                    return null;
                }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
                    this._offsets.push(item[0]);

                    this._targets.push(item[1]);
                });
            }

            dispose() {
                EventHandler.off(this._scrollElement, EVENT_KEY$2);
                super.dispose();
            } // Private


            _getConfig(config) {
                config = { ...Default$1,
                    ...Manipulator.getDataAttributes(this._element),
                    ...(typeof config === 'object' && config ? config : {})
                };
                config.target = getElement(config.target) || document.documentElement;
                typeCheckConfig(NAME$2, config, DefaultType$1);
                return config;
            }

            _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }

            _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }

            _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }

            _process() {
                const scrollTop = this._getScrollTop() + this._config.offset;

                const scrollHeight = this._getScrollHeight();

                const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

                if (this._scrollHeight !== scrollHeight) {
                    this.refresh();
                }

                if (scrollTop >= maxScroll) {
                    const target = this._targets[this._targets.length - 1];

                    if (this._activeTarget !== target) {
                        this._activate(target);
                    }

                    return;
                }

                if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;

                    this._clear();

                    return;
                }

                for (let i = this._offsets.length; i--;) {
                    const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

                    if (isActiveTarget) {
                        this._activate(this._targets[i]);
                    }
                }
            }

            _activate(target) {
                this._activeTarget = target;

                this._clear();

                const queries = SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
                const link = SelectorEngine.findOne(queries.join(','), this._config.target);
                link.classList.add(CLASS_NAME_ACTIVE$1);

                if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                    SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
                } else {
                    SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
                        // Set triggered links parents as active
                        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                        SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

                        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
                            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
                        });
                    });
                }

                EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
                    relatedTarget: target
                });
            }

            _clear() {
                SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = ScrollSpy.getOrCreateInstance(this, config);

                    if (typeof config !== 'string') {
                        return;
                    }

                    if (typeof data[config] === 'undefined') {
                        throw new TypeError(`No method named "${config}"`);
                    }

                    data[config]();
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
            SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .ScrollSpy to jQuery only if jQuery is present
         */

        defineJQueryPlugin(ScrollSpy);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): tab.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME$1 = 'tab';
        const DATA_KEY$1 = 'bs.tab';
        const EVENT_KEY$1 = `.${DATA_KEY$1}`;
        const DATA_API_KEY = '.data-api';
        const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
        const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
        const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
        const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
        const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
        const CLASS_NAME_ACTIVE = 'active';
        const CLASS_NAME_FADE$1 = 'fade';
        const CLASS_NAME_SHOW$1 = 'show';
        const SELECTOR_DROPDOWN = '.dropdown';
        const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
        const SELECTOR_ACTIVE = '.active';
        const SELECTOR_ACTIVE_UL = ':scope > li > .active';
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
        const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
        const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Tab extends BaseComponent {
            // Getters
            static get NAME() {
                return NAME$1;
            } // Public


            show() {
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
                    return;
                }

                let previous;
                const target = getElementFromSelector(this._element);

                const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

                if (listElement) {
                    const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
                    previous = SelectorEngine.find(itemSelector, listElement);
                    previous = previous[previous.length - 1];
                }

                const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
                    relatedTarget: this._element
                }) : null;
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
                    relatedTarget: previous
                });

                if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
                    return;
                }

                this._activate(this._element, listElement);

                const complete = () => {
                    EventHandler.trigger(previous, EVENT_HIDDEN$1, {
                        relatedTarget: this._element
                    });
                    EventHandler.trigger(this._element, EVENT_SHOWN$1, {
                        relatedTarget: previous
                    });
                };

                if (target) {
                    this._activate(target, target.parentNode, complete);
                } else {
                    complete();
                }
            } // Private


            _activate(element, container, callback) {
                const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
                const active = activeElements[0];
                const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

                const complete = () => this._transitionComplete(element, active, callback);

                if (active && isTransitioning) {
                    active.classList.remove(CLASS_NAME_SHOW$1);

                    this._queueCallback(complete, element, true);
                } else {
                    complete();
                }
            }

            _transitionComplete(element, active, callback) {
                if (active) {
                    active.classList.remove(CLASS_NAME_ACTIVE);
                    const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

                    if (dropdownChild) {
                        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
                    }

                    if (active.getAttribute('role') === 'tab') {
                        active.setAttribute('aria-selected', false);
                    }
                }

                element.classList.add(CLASS_NAME_ACTIVE);

                if (element.getAttribute('role') === 'tab') {
                    element.setAttribute('aria-selected', true);
                }

                reflow(element);

                if (element.classList.contains(CLASS_NAME_FADE$1)) {
                    element.classList.add(CLASS_NAME_SHOW$1);
                }

                let parent = element.parentNode;

                if (parent && parent.nodeName === 'LI') {
                    parent = parent.parentNode;
                }

                if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
                    const dropdownElement = element.closest(SELECTOR_DROPDOWN);

                    if (dropdownElement) {
                        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
                    }

                    element.setAttribute('aria-expanded', true);
                }

                if (callback) {
                    callback();
                }
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Tab.getOrCreateInstance(this);

                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError(`No method named "${config}"`);
                        }

                        data[config]();
                    }
                });
            }

        }
        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */


        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
            if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
            }

            if (isDisabled(this)) {
                return;
            }

            const data = Tab.getOrCreateInstance(this);
            data.show();
        });
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Tab to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Tab);

        /**
         * --------------------------------------------------------------------------
         * Bootstrap (v5.1.3): toast.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        const NAME = 'toast';
        const DATA_KEY = 'bs.toast';
        const EVENT_KEY = `.${DATA_KEY}`;
        const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
        const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
        const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
        const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const CLASS_NAME_FADE = 'fade';
        const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

        const CLASS_NAME_SHOW = 'show';
        const CLASS_NAME_SHOWING = 'showing';
        const DefaultType = {
            animation: 'boolean',
            autohide: 'boolean',
            delay: 'number'
        };
        const Default = {
            animation: true,
            autohide: true,
            delay: 5000
        };
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */

        class Toast extends BaseComponent {
            constructor(element, config) {
                super(element);
                this._config = this._getConfig(config);
                this._timeout = null;
                this._hasMouseInteraction = false;
                this._hasKeyboardInteraction = false;

                this._setListeners();
            } // Getters


            static get DefaultType() {
                return DefaultType;
            }

            static get Default() {
                return Default;
            }

            static get NAME() {
                return NAME;
            } // Public


            show() {
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

                if (showEvent.defaultPrevented) {
                    return;
                }

                this._clearTimeout();

                if (this._config.animation) {
                    this._element.classList.add(CLASS_NAME_FADE);
                }

                const complete = () => {
                    this._element.classList.remove(CLASS_NAME_SHOWING);

                    EventHandler.trigger(this._element, EVENT_SHOWN);

                    this._maybeScheduleHide();
                };

                this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


                reflow(this._element);

                this._element.classList.add(CLASS_NAME_SHOW);

                this._element.classList.add(CLASS_NAME_SHOWING);

                this._queueCallback(complete, this._element, this._config.animation);
            }

            hide() {
                if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
                    return;
                }

                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

                if (hideEvent.defaultPrevented) {
                    return;
                }

                const complete = () => {
                    this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


                    this._element.classList.remove(CLASS_NAME_SHOWING);

                    this._element.classList.remove(CLASS_NAME_SHOW);

                    EventHandler.trigger(this._element, EVENT_HIDDEN);
                };

                this._element.classList.add(CLASS_NAME_SHOWING);

                this._queueCallback(complete, this._element, this._config.animation);
            }

            dispose() {
                this._clearTimeout();

                if (this._element.classList.contains(CLASS_NAME_SHOW)) {
                    this._element.classList.remove(CLASS_NAME_SHOW);
                }

                super.dispose();
            } // Private


            _getConfig(config) {
                config = { ...Default,
                    ...Manipulator.getDataAttributes(this._element),
                    ...(typeof config === 'object' && config ? config : {})
                };
                typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config;
            }

            _maybeScheduleHide() {
                if (!this._config.autohide) {
                    return;
                }

                if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
                    return;
                }

                this._timeout = setTimeout(() => {
                    this.hide();
                }, this._config.delay);
            }

            _onInteraction(event, isInteracting) {
                switch (event.type) {
                    case 'mouseover':
                    case 'mouseout':
                        this._hasMouseInteraction = isInteracting;
                        break;

                    case 'focusin':
                    case 'focusout':
                        this._hasKeyboardInteraction = isInteracting;
                        break;
                }

                if (isInteracting) {
                    this._clearTimeout();

                    return;
                }

                const nextElement = event.relatedTarget;

                if (this._element === nextElement || this._element.contains(nextElement)) {
                    return;
                }

                this._maybeScheduleHide();
            }

            _setListeners() {
                EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
                EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
                EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
                EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
            }

            _clearTimeout() {
                clearTimeout(this._timeout);
                this._timeout = null;
            } // Static


            static jQueryInterface(config) {
                return this.each(function () {
                    const data = Toast.getOrCreateInstance(this, config);

                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError(`No method named "${config}"`);
                        }

                        data[config](this);
                    }
                });
            }

        }

        enableDismissTrigger(Toast);
        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         * add .Toast to jQuery only if jQuery is present
         */

        defineJQueryPlugin(Toast);


//# sourceMappingURL=bootstrap.esm.js.map

// EXTERNAL MODULE: ./node_modules/wnumb/wNumb.js
        var wNumb = __webpack_require__(18);
        ;// CONCATENATED MODULE: ./src/assets/js/components/range.js


        const numberFormat = wNumb({
            decimals: 0,
            thousand: ' '
        });

        const Range = (selector) => {
            const sliders = document.querySelectorAll(selector)

            sliders.forEach(slider => {
                const parent = slider.parentElement;
                const input = parent.querySelector('.range__value');

                const setVal = (range) => {
                    const value = range.value;
                    const newValue = Number((value - range.min) * 100 / (range.max - range.min));
                    range.style.setProperty("--range-progress", `${newValue}%`);
                }

                setVal(slider)

                slider.addEventListener('input', () => {
                    setVal(slider)
                    input.value = numberFormat.to(+slider.value);
                });
                input.addEventListener('keypress', (e)=> {
                    const key = (e.which) ? e.which : eevent.keyCode
                    if (key != 46 && key > 31 && (key < 48 || key > 57)) {
                        e.preventDefault()
                    }
                })
                input.addEventListener('input', (e) => {
                    let val = e.target.value;
                    let newStr = val.replace(/\s/g, '');
                    slider.value = newStr
                    setVal(slider, e.target)
                });

                input.addEventListener('change', (e) => {
                    let value = e.target.value
                    const newVal = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
                    e.target.value = newVal;
                })

            });





        }

        /* harmony default export */ var range = (Range);
        ;// CONCATENATED MODULE: ./src/assets/js/components/slideDownModal.js
        const slideDownModal = (selector) => {
            const btn = document.querySelectorAll(selector);
            const body = document.body;
            const overlay = document.getElementById('backdrop');

            const closeModal = (element) => {
                element.classList.remove('show');
                body.classList.remove('modal-open');
            }

            if(btn.length>0){
                btn.forEach((item)=>{

                    const target = item.dataset.target;
                    const modal = document.getElementById(target);
                    const close = modal.querySelector('[data-dismiss="modal"]');

                    item.addEventListener('click', ()=>{
                        modal.classList.add('show');
                        body.classList.add('modal-open');
                    });

                    if(close) close.addEventListener('click', ()=> closeModal(modal));
                    overlay.addEventListener('click', ()=> closeModal(modal));
                })

            }
        }

        /* harmony default export */ var components_slideDownModal = (slideDownModal);
        ;// CONCATENATED MODULE: ./src/assets/js/components/mobileMenu.js
        const mobileMenu = () => {
            const burger = document.getElementById('btnMenu');
            const body = document.body;
            const links = document.querySelectorAll('.navigation__item-link');
            const btnBack = document.getElementById('btn__submenu-back')
            burger.addEventListener('click', () => {
                body.classList.toggle('is-show');
                if(body.classList.contains('sub-open')) {
                    body.classList.remove('sub-open');
                    document.querySelector('.sub-visible').classList.remove('sub-visible');
                }
            })
            if(links.length>0){
                links.forEach( (btn)=> {
                    btn.addEventListener('click', (e)=>{
                        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        if(width < 768) {
                            e.preventDefault()
                            const sub = e.target.nextElementSibling;
                            sub.classList.add('sub-visible');
                            body.classList.add('sub-open');
                        }
                    })
                });
            }
            if(btnBack){
                btnBack.addEventListener('click', ()=> {
                    body.classList.remove('sub-open');
                    document.querySelector('.sub-visible').classList.remove('sub-visible')
                })
            }

        }

        /* harmony default export */ var components_mobileMenu = (mobileMenu);
        ;// CONCATENATED MODULE: ./src/assets/js/components/showAllComments.js
        const showAllComments = () => {
            const btn = document.getElementById('show__comments');
            if(btn) {
                const hiddenItems = document.querySelectorAll('.comments__hidden')
                btn.addEventListener('click', (e) => {
                    e.preventDefault()
                    e.target.style.display = "none";
                    hiddenItems.forEach((item)=> {
                        item.style.display = "block";

                    })
                })
            }
        }

        /* harmony default export */ var components_showAllComments = (showAllComments);
        ;// CONCATENATED MODULE: ./src/assets/js/components/comparePagination.js
        const comparePagination = () => {

            // Compare header fixed on scroll
            const fixedSelector = document.getElementById('compare__fixed');
            if(fixedSelector) {

                function initCompareFixed(){
                    window.addEventListener('scroll', compareFixedHeader);
                    compareFixedHeader();
                }
                function compareFixedHeader(){
                    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
                    const detailsContainer = document.getElementById('compare__details');
                    const topNextElement = detailsContainer.getBoundingClientRect().top  + window.scrollY - fixedSelector.offsetHeight;
                    const endScroll = detailsContainer.getBoundingClientRect().top + detailsContainer.offsetHeight + window.scrollY - fixedSelector.offsetHeight;
                    if ( scrolled >= topNextElement && scrolled <= endScroll) {
                        fixedSelector.classList.add('fixed-show');
                    } else {
                        fixedSelector.classList.remove('fixed-show');
                    }
                }
                initCompareFixed()
            }

            // Compare pagination
            const itemsContainer = document.querySelectorAll('.compare__row');

            if(itemsContainer.length>0) {
                const paginationContainer = document.querySelectorAll('.card__pagination-item');

                function setFirstActive(selector, pagination) {
                    const container = document.querySelector(selector)
                    const pag = container.querySelectorAll(pagination)
                    if (pag[0]) pag[0].children[0].classList.add('active');
                    if (pag[1]) pag[1].children[1].classList.add('active');
                }

                function swapElements(obj1, obj2) {
                    let temp = document.createElement("div");
                    obj1.parentNode.insertBefore(temp, obj1);
                    obj2.parentNode.insertBefore(obj1, obj2);
                    temp.parentNode.insertBefore(obj2, temp);
                    temp.parentNode.removeChild(temp);
                }

                setFirstActive('.compare__list-header', '.card__pagination')

                setFirstActive('.compare__list-fixed', '.card__pagination')

                paginationContainer.forEach((btn) => {
                    btn.addEventListener('click', (e) => {
                        const selectedElement = e.target.dataset.item;
                        const currentElement = e.target.closest('.compare__item').dataset.index;

                        itemsContainer.forEach(element => {
                            const nodeItems = element.children

                            let currentNode = null;
                            let selectedNode = null;

                            for (const node of nodeItems) {
                                if (node.dataset.index == currentElement) {
                                    const oldPagActive = node.querySelectorAll('.card__pagination-item')[currentElement - 1]
                                    if (oldPagActive) oldPagActive.classList.add('active')
                                    currentNode = node
                                }
                                if (node.dataset.index == selectedElement) {
                                    const newPagActive = node.querySelectorAll('.card__pagination-item')[selectedElement - 1]
                                    if (newPagActive) newPagActive.classList.add('active')
                                    selectedNode = node
                                }
                            }
                            swapElements(currentNode, selectedNode)
                        });
                    })
                })
            }
        }

        /* harmony default export */ var components_comparePagination = (comparePagination);
        ;// CONCATENATED MODULE: ./src/assets/js/helpers/nextAll.js
        const nextAll = (element) => {
                const nextElements = []
                let nextElement = element
                while (nextElement.nextElementSibling) {
                    nextElements.push(nextElement.nextElementSibling)
                    nextElement = nextElement.nextElementSibling
                }
                return nextElements
            }
        ;// CONCATENATED MODULE: ./src/assets/js/components/btnShowNext.js


        const btnShowNext = (selector) => {
            const btn = document.querySelectorAll(selector);

            if (btn.length > 0) {
                btn.forEach((item) => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        const elements = nextAll(item);
                        elements.forEach((i)=> {
                            i.style.display = ''
                        })
                        item.remove()
                        //item.style.display = 'none';

                    })
                })
            }

        }
        /* harmony default export */ var components_btnShowNext = (btnShowNext);
        ;// CONCATENATED MODULE: ./src/assets/js/components/btnScroll.js
        const btnScroll = (selector, containerHeight) => {
            const buttons = document.querySelectorAll(selector);

            buttons.forEach( (btn) =>{
                const id = document.getElementById(btn.dataset.target);
                let parentHeight = 0;

                if(containerHeight) {
                    parentHeight = containerHeight;
                }
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.scroll({
                        behavior: 'smooth',
                        left: 0,
                        top: id.getBoundingClientRect().top + window.scrollY - parentHeight
                    });
                });
            })


        }

        /* harmony default export */ var components_btnScroll = (btnScroll);


        ;// CONCATENATED MODULE: ./src/assets/js/components/btnShow.js
        const btnShow = (selector, hiddenTrClass) => {
            const btn = document.querySelectorAll(selector);

            btn.forEach( (item)=> {
                const target = document.getElementById(item.dataset.target);
                const arrTr = target.querySelectorAll('tr');
                let hiddenTr = [];
                let textShowHide = false;

                // create array of hidden elements
                arrTr.forEach( (tr)=>{
                    if(tr.classList.contains(hiddenTrClass)) {
                        hiddenTr.push(tr)
                    }
                });

                item.addEventListener('click', (e)=>{
                    e.preventDefault();
                    // toggle text onClick
                    item.lastChild.previousSibling.innerText = textShowHide ? item.dataset.textOpen : item.dataset.textHide;
                    textShowHide = !textShowHide;

                    // toggle class onClick
                    item.classList.toggle('visible__items');

                    // toggle visible elements
                    if(hiddenTr.length>0) {
                        hiddenTr.forEach((tr)=>{
                            tr.classList.toggle(hiddenTrClass)
                        })
                    }

                })

            })
        }

        /* harmony default export */ var components_btnShow = (btnShow);
        ;// CONCATENATED MODULE: ./src/assets/js/components/pageNav.js


        const pageNav = (selector, container) => {
            const buttons = document.querySelectorAll(selector);


            if(buttons.length>0){
                const parent = document.getElementById(container);
                const parentHeight = parent.offsetHeight + 26; // 26 maring-bottom

                let lastId;

                const scrollItems = Array.from(buttons).map( (item)=>{
                    const arr = document.getElementById(item.dataset.target)
                    return arr;
                });

                components_btnScroll(selector, parentHeight)

                window.addEventListener('scroll', (e)=>{

                    const yOffset = window.pageYOffset + 10 + parentHeight;
                    let currentSection = scrollItems.filter((item)=>{
                        const top = item.getBoundingClientRect().top + window.scrollY;

                        if( top < yOffset ) {
                            return item
                        }
                    });

                    currentSection = currentSection[currentSection.length-1];
                    let id = currentSection ? currentSection.id : "";

                    if( lastId !== id ) {
                        lastId = id;
                    }

                    buttons.forEach( (item)=>{
                        if(id){
                            item.classList.remove('active');
                            parent.querySelector(`[data-target="${id}"]`).classList.add('active')
                        }
                    })
                })
            }

        }

        /* harmony default export */ var components_pageNav = (pageNav);
        ;// CONCATENATED MODULE: ./src/assets/js/helpers/date.js
        function addMonths(date, months) {
            var d = date.getDate();
            date.setMonth(date.getMonth() + +months);
            if (date.getDate() != d) {
                date.setDate(0);
            }
            return date.toLocaleString("ru", {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC'
            });
        }
        ;// CONCATENATED MODULE: ./src/assets/js/helpers/percent.js
        const getInt = (val) => {
            let v = parseFloat(val);
            if (v % 1 === 0) {
                return v;
            } else {
                let n = v.toString().split('.').join('');
                return parseInt(n);
            }
        }

        const percentValue = (input) => {
            input.addEventListener('keypress', (e)=>{
                const key = (e.which) ? e.which : e.keyCode
                if (key != 46 && key > 31 && (key < 48 || key > 57)) {
                    e.preventDefault()
                }
            });

            let int = input.value.slice(0, input.value.length - 1);
            if (int.includes('%')) {
                input.value = '%';
            }
            else if (int.length >= 3 && int.length <= 4 && !int.includes('.')) {
                input.value = int.slice(0, 2) + '.' + int.slice(2, 3) + '%';
                input.setSelectionRange(4, 4);
            }
            else if (int.length >= 5 & int.length <= 6) {
                let whole = int.slice(0, 2);
                let fraction = int.slice(3, 5);
                input.value = whole + '.' + fraction + '%';
            }

            else {
                console.log(input.value)

                input.value = int + '%';
                input.setSelectionRange(input.value.length - 1, input.value.length - 1);
            }
            //console.log(getInt(input.value));
        }

        /* harmony default export */ var percent = (percentValue);
        ;// CONCATENATED MODULE: ./src/assets/js/helpers/numberFormat.js


        const numberFormat_numberFormat = wNumb({
            decimals: 0,
            thousand: ' '
        });

        /* harmony default export */ var helpers_numberFormat = (numberFormat_numberFormat);
        ;// CONCATENATED MODULE: ./src/assets/js/components/calc/creditCalc.js








            const creditCalc = (input) => {

                const amountCredit = helpers_numberFormat.from(calc_calc.querySelector('input[data-field="limit"]').value);  // Полная сумма кредита
                const rateVal = calc_calc.querySelector('input[data-field="percent"]').value;
                const rate = helpers_numberFormat.from(rateVal) / 100;                                                  // Процентная ставка
                const creditDateInput = calc_calc.querySelector('input[data-field="date"]');                         // Дата кредита
                let creditTerm = creditDateInput.value;

                if(input.dataset.field === 'percent') percent(input);

                if(helpers_numberFormat.from(creditDateInput.value) > helpers_numberFormat.from(creditDateInput.max)) {
                    creditTerm = creditDateInput.max;
                    creditDateInput.value = creditDateInput.max;
                }
                if(helpers_numberFormat.from(creditDateInput.value) < helpers_numberFormat.from(creditDateInput.min)) {
                    creditTerm = creditDateInput.min;
                    creditDateInput.value = creditDateInput.min;
                }
                const date = addMonths(new Date(), creditTerm)                                                  // Дата окончания кредита
                const paymentType = calc_calc.querySelector('input[data-field="type"]:checked').value;               // Тип платежей (Аннуентный/Дифференцированный)

                let mainDebt = 0;                                                                               // Основной долг
                let currentLoanBalance = amountCredit;                                                          // Остаток задолженности
                let accruedInterest = currentLoanBalance * rate / 12;                                           // Процентные начисления

                let firstPayment = 0,
                    lastPayment = 0,
                    overpayment = 0,
                    amountPayment = 0;

                if(paymentType == 1) amountPayment = (amountCredit * rate / 12) / (1 - Math.pow(1 + rate / 12, - creditTerm )) ;
                if(paymentType == 2) mainDebt = amountCredit / creditTerm;

                for(let i = 0; i < creditTerm; i++) {
                    if(i == 0) firstPayment = mainDebt + accruedInterest;
                    if(i + 1 == creditTerm)
                        lastPayment = mainDebt + accruedInterest
                    else
                        calcDateEnd.innerText = date;

                    accruedInterest = Number(currentLoanBalance * rate / 12);
                    overpayment += Number(accruedInterest);

                    if(paymentType == 1) mainDebt = amountPayment - accruedInterest;
                    if(paymentType == 2) amountPayment = mainDebt + accruedInterest;

                    currentLoanBalance -= Number(mainDebt);
                    accruedInterest = Number(currentLoanBalance * rate / 12);
                }

                if(paymentType == 1) calcPayments.innerText = helpers_numberFormat.to(amountPayment);
                if(paymentType == 2) calcPayments.innerText = `${helpers_numberFormat.to(firstPayment)} ... ${helpers_numberFormat.to(lastPayment)}`;

                // Progress bar
                if(calcProgess) {
                    const circle = calcProgess.querySelector('.progress__circle');
                    const circleText = calcProgess.querySelectorAll('.progress__percent');
                    const graphText = (100 - (overpayment / (amountCredit + overpayment) * 100)).toFixed()
                    const graphDanger = `${(overpayment / (amountCredit + overpayment) * 100)}%`;
                    const graphWarning = `0%`;

                    if(graphText > 0){


                        if(circle){
                            circle.style.cssText = `--graph-danger: ${graphDanger}; --graph-warning: ${graphWarning}`;
                        }



                        circleText.forEach( item => item.innerText = graphText)

                        const progress_bar_v1_items = document.querySelectorAll('.progress-bar-v1_item');
                        const procent_for_zakrasit = Number(graphText) / 10;
                        var pbv1i_count = 0;


                        // console.log(progress_bar_v1_items.length)

                        progress_bar_v1_items.forEach( item => {
                            // console.log(item)
                            if(procent_for_zakrasit < pbv1i_count){
                                item.style.fill="#DDDDE4"
                            }else {
                                item.style.fill="#14B8AD"
                            }

                            pbv1i_count++;
                        })




                        // console.log(progress_bar_v1_items)


                        // Делим на 10, чтоб получить, какую часть закрасить
                        // Number(graphText) / 10;
                    }


                }

                calcSum.innerText = helpers_numberFormat.to(amountCredit);
                calcOverpay.innerText = helpers_numberFormat.to(overpayment);
                calcTotal.innerText = helpers_numberFormat.to(amountCredit + overpayment);

            }

            /* harmony default export */ var calc_creditCalc = (creditCalc);
            ;// CONCATENATED MODULE: ./src/assets/js/components/calc/cashbackCalc.js



            const cashbackCalc = (input) => {
                const cashbackType = document.getElementById('cashbackTypeSelect');
                const cashbackTypeValue = helpers_numberFormat.from(cashbackType.value);
                const amountCashback = calc_calc.querySelector('input[data-field="limit"]');
                const amountCashbackValue = helpers_numberFormat.from(amountCashback.value);
                const cashbackPercent =  calc_calc.querySelector('input[data-field="percent"]');

                const percentSum = helpers_numberFormat.from(amountCashback.value) * helpers_numberFormat.from(cashbackPercent.value) / 100;

                if(input.dataset.field === 'type') {
                    amountCashback.value = helpers_numberFormat.to(cashbackTypeValue)
                }


                calcSum.innerText = helpers_numberFormat.to(amountCashbackValue);
                cashbackSum.innerText = helpers_numberFormat.to(percentSum);
            }

            /* harmony default export */ var calc_cashbackCalc = (cashbackCalc);
            ;// CONCATENATED MODULE: ./src/assets/js/components/calc/loanCalc.js



            const loanCalc = (input) => {
                if(input.dataset.field === 'percent') percent(input);

                const amountCredit = helpers_numberFormat.from(calc_calc.querySelector('input[data-field="limit"]').value);      // Полная сумма кредита
                const creditDateInput = helpers_numberFormat.from(calc_calc.querySelector('input[data-field="date"]').value);    // Дата кредита
                const rateVal = calc_calc.querySelector('input[data-field="percent"]').value;
                const rate = helpers_numberFormat.from(rateVal) / 100;                                                      // Процентная ставка

                const overpayment = amountCredit * creditDateInput * rate;                                          // Переплата
                const procents = helpers_numberFormat.from(rateVal) * 365;                                                  // Полная стоимость займа %

                calcSum.innerText = helpers_numberFormat.to(amountCredit);
                calcOverpay.innerText = helpers_numberFormat.to(overpayment);
                calcTotal.innerText = helpers_numberFormat.to(amountCredit + overpayment);
                calcPsk.innerText = helpers_numberFormat.to(procents);

                if(calcProgess) {
                    const circle = calcProgess.querySelector('.progress__circle');
                    const circleText = calcProgess.querySelectorAll('.progress__percent');
                    const graphText = (100 - (overpayment / (amountCredit + overpayment) * 100)).toFixed()
                    const graphDanger = `${(overpayment / (amountCredit + overpayment) * 100)}%`;
                    const graphWarning = `0%`;

                    circle.style.cssText = `--graph-danger: ${graphDanger}; --graph-warning: ${graphWarning}`;
                    circleText.forEach( item => item.innerText = graphText)
                }
            }

            /* harmony default export */ var calc_loanCalc = (loanCalc);
            ;// CONCATENATED MODULE: ./src/assets/js/components/calc/index.js

            var calc_calc,calcSum, calcOverpay, calcTotal, calcDateEnd, calcPayments, calcProgess, calcPsk, cashbackSum;

             setTimeout( () => {
                 calc_calc = document.getElementById('calc');                       // Контейнер калькулятора


                // Поля вывода результата
                 calcSum = document.getElementById('calc__sum');               // Сумма кредита/займов
                 calcOverpay = document.getElementById('calc__overpay');       // Переплата
                 calcTotal = document.getElementById('calc__total');           // Общая сумма выплат
                 calcDateEnd = document.getElementById('calc__dateEnd');       // Окончание кредита
                 calcPayments = document.getElementById('calc__payments');     // Платежи в месяц
                 calcProgess = document.getElementById('calc__progress');      // Индикатор результата
                 calcPsk = document.getElementById('calc__psk');               // Полная стоимость займа
                 cashbackSum = document.getElementById('calc__cashbackSum');   // Суммарный кэшбэк в рублях

             }, 200);




            function calculator () {

                console.log('calculatroe start')

                if(calc_calc) {
                    const type = calc_calc.dataset.type;
                    const calcInput = calc_calc.querySelectorAll('.calc__input');

                    switch (type) {
                        case 'creditCalc':
                            calcInput.forEach((input)=>{
                                calc_creditCalc(input);
                                input.addEventListener('change', () => calc_creditCalc(input));
                            })
                            break;
                        case 'cashbackCalc':
                            calcInput.forEach((input)=>{
                                calc_cashbackCalc(input);
                                input.addEventListener('change', () => calc_cashbackCalc(input));
                            })
                            break;
                        case 'loanCalc':
                            calcInput.forEach((input)=>{
                                calc_loanCalc(input);
                                input.addEventListener('change', () => calc_loanCalc(input));
                            })
                            break;
                        case 'mortgageCalc':
                            break;
                        default:
                            console.error('Не определен тип калькулятора');
                    }
                }
            }


            /* harmony default export */

        
            var components_calc = (calculator);



        const multipleSelect = (selector) => {
            const select = document.querySelectorAll(selector);
            select.forEach((item)=>{
                const btn = item.querySelector('button');
                const checkboxes = item.querySelectorAll(`${selector}__item-checkbox`)
                const counter = btn.querySelector(`${selector}__btn-count`)
                checkboxes.forEach((checkbox)=>{
                    checkbox.addEventListener('change', ()=>{
                        let count = item.querySelectorAll(`${selector}__item-checkbox:checked`).length;
                        if(!count == 0) {
                            counter.classList.add('.selected')
                            counter.innerText = count;
                        } else {
                            counter.classList.remove('.selected')
                            counter.innerText = '';
                        }
                    })
                });
            })
        }

        /* harmony default export */ var components_multipleSelect = (multipleSelect);
        ;// CONCATENATED MODULE: ./src/assets/js/components/btnScrollUp.js
        const btnScrollUp = (selector) => {
            const btn = document.getElementById(selector);
            if(btn){
                btn.addEventListener('click', (e)=>{
                    e.preventDefault();
                    window.scroll({
                        behavior: 'smooth',
                        left: 0,
                        top: 0
                    });
                });
            }
        }

        /* harmony default export */ var components_btnScrollUp = (btnScrollUp);
        ;// CONCATENATED MODULE: ./src/assets/js/components/mobileHeader.js
        const mobileHeader = () => {
            const body = document.body;
            const headerHeight = document.querySelector('.header').offsetHeight;
            let lastScroll = headerHeight;
            const width = window.innerWidth;
            if( width < 768 ) {
                winScroll();
            }

            window.addEventListener('resize', ()=> { window.innerWidth < 768 ? winScroll() : ''} )

            function winScroll(){

                window.addEventListener('scroll', () => {
                    const currentScroll = window.pageYOffset;
                    if (currentScroll <= 0) {
                        body.classList.remove('scroll-up');
                        return;
                    }
                    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
                        // down
                        body.classList.remove('scroll-up');
                        body.classList.add('scroll-down');

                    } else if ( currentScroll < lastScroll  && body.classList.contains('scroll-down') ) {
                        // up
                        body.classList.remove('scroll-down');
                        body.classList.add('scroll-up');
                    }
                    lastScroll = currentScroll;
                })
            }
        }


        /* harmony default export */ var components_mobileHeader = (mobileHeader);
        ;// CONCATENATED MODULE: ./src/assets/js/index.js


















// Theme swithcer
        components_themeSwitch();

        document.addEventListener('DOMContentLoaded', function() {

            // // wellcome slider
            // components_slider('.slider', {
            //     container: '.slider',
            //     controlsContainer: '.slider__button_container',
            //     prev: '.slider__button-prev',
            //     next: '.slider__button-next',
            //     pagination: '.slider__pagination',
            //     items: 1,
            //     autoplay: true,
            //     autoplay: false,
            //     autoplayButtonOutput: false,
            //     autoplayTimeout: 3000,
            //     mouseDrag: true,
            //     speed: 1000,
            //     nav: true,
            //     navPosition: 'bottom',
            //     controls: true,
            //     prevButton: '.slider__button-prev',
            //     nextButton: '.slider__button-next',
            //     responsive: {
            //         "1200": {
            //             center: true,
            //             edgePadding: 125,
            //             controls: true,
            //         }
            //     }
            //
            // })
            // // experts slider
            // components_slider('.expert__slider-container', {
            //     container: '.expert__slider-container ',
            //     items: 1,
            //     autoplay: true,
            //     autoplay: false,
            //     autoplayButtonOutput: false,
            //     autoplayTimeout: 3000,
            //     mouseDrag: true,
            //     speed: 1000,
            //     nav: false,
            //     mode: 'gallery',
            //     navPosition: 'bottom',
            //     controls: true,
            //     center: false,
            //     edgePadding: 0,
            //     prevButton: '.expert__slider-nav .prev',
            //     nextButton: '.expert__slider-nav .next'
            //
            // });


            //    setTimeout(() => {
                var themePreme = '.themeBtn';

                document.querySelectorAll(themePreme).forEach((e => {

                    e.addEventListener("click", ((f) => {

                        console.log(this);

                        const {
                                theme: e
                            } = document.documentElement.dataset,
                            t = "light" === e ? "dark" : "light";
                        document.documentElement.dataset.theme = t,
                            localStorage.setItem("theme", t),
                            console.log(f)

                        if(t == 'dark'){
                            // f.checked = true
                            document.querySelector('.themeBtn_input').checked = true;
                        }else{
                            // f.checked = false
                            document.querySelector('.themeBtn_input').checked = false;
                        }
                    }))

                }))

            // }, 1000)

            setTimeout( () => {

                // Select
                components_select('.styledSelect')

                // Range input slider
                range('.range__input');

                // Slide down modal like search & region
                components_slideDownModal('.btn__modal-show');

                // Mobile menu
                components_mobileMenu();

                // Show all comments
                components_showAllComments();

                // Mobile compare pagination
                components_comparePagination();

                // Show more button
                components_btnShowNext('.btn__view-all');

                // Button scroll
                components_btnScroll('.btn-scroll')

                // Show hidden table
                components_btnShow('.btn__details', 'tr__hidden');

                // Page navigation
                components_pageNav('.btn-pageNav', 'pageNav');

                // Calculator
                components_calc()

                components_multipleSelect('.multipleSelect');

                components_btnScrollUp('btnScrollUp');

                // Toggle Header Depending on Scrolling Direction
                components_mobileHeader();

                // Tooltips
                const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
                const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

            }, 300);


        });

    }();
    /******/ })()
;

// }, 1000);