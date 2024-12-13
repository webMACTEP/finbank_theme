/*! For license information please see main.js.LICENSE.txt */ !

function slider_activetor() {
    var e = {
            529: function(e) {
                var t;
                window, t = function() {
                    return function() {
                        "use strict";
                        var e = {
                                282: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
                                    var i = n(883);
                                    t.addChoice = function(e) {
                                        var t = e.value,
                                            n = e.label,
                                            o = e.id,
                                            s = e.groupId,
                                            r = e.disabled,
                                            a = e.elementId,
                                            c = e.customProperties,
                                            l = e.placeholder,
                                            u = e.keyCode;
                                        return {
                                            type: i.ACTION_TYPES.ADD_CHOICE,
                                            value: t,
                                            label: n,
                                            id: o,
                                            groupId: s,
                                            disabled: r,
                                            elementId: a,
                                            customProperties: c,
                                            placeholder: l,
                                            keyCode: u
                                        }
                                    }, t.filterChoices = function(e) {
                                        return {
                                            type: i.ACTION_TYPES.FILTER_CHOICES,
                                            results: e
                                        }
                                    }, t.activateChoices = function(e) {
                                        return void 0 === e && (e = !0), {
                                            type: i.ACTION_TYPES.ACTIVATE_CHOICES,
                                            active: e
                                        }
                                    }, t.clearChoices = function() {
                                        return {
                                            type: i.ACTION_TYPES.CLEAR_CHOICES
                                        }
                                    }
                                },
                                783: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.addGroup = void 0;
                                    var i = n(883);
                                    t.addGroup = function(e) {
                                        var t = e.value,
                                            n = e.id,
                                            o = e.active,
                                            s = e.disabled;
                                        return {
                                            type: i.ACTION_TYPES.ADD_GROUP,
                                            value: t,
                                            id: n,
                                            active: o,
                                            disabled: s
                                        }
                                    }
                                },
                                464: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.highlightItem = t.removeItem = t.addItem = void 0;
                                    var i = n(883);
                                    t.addItem = function(e) {
                                        var t = e.value,
                                            n = e.label,
                                            o = e.id,
                                            s = e.choiceId,
                                            r = e.groupId,
                                            a = e.customProperties,
                                            c = e.placeholder,
                                            l = e.keyCode;
                                        return {
                                            type: i.ACTION_TYPES.ADD_ITEM,
                                            value: t,
                                            label: n,
                                            id: o,
                                            choiceId: s,
                                            groupId: r,
                                            customProperties: a,
                                            placeholder: c,
                                            keyCode: l
                                        }
                                    }, t.removeItem = function(e, t) {
                                        return {
                                            type: i.ACTION_TYPES.REMOVE_ITEM,
                                            id: e,
                                            choiceId: t
                                        }
                                    }, t.highlightItem = function(e, t) {
                                        return {
                                            type: i.ACTION_TYPES.HIGHLIGHT_ITEM,
                                            id: e,
                                            highlighted: t
                                        }
                                    }
                                },
                                137: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
                                    var i = n(883);
                                    t.clearAll = function() {
                                        return {
                                            type: i.ACTION_TYPES.CLEAR_ALL
                                        }
                                    }, t.resetTo = function(e) {
                                        return {
                                            type: i.ACTION_TYPES.RESET_TO,
                                            state: e
                                        }
                                    }, t.setIsLoading = function(e) {
                                        return {
                                            type: i.ACTION_TYPES.SET_IS_LOADING,
                                            isLoading: e
                                        }
                                    }
                                },
                                373: function(e, t, n) {
                                    var i = this && this.__spreadArray || function(e, t, n) {
                                            if (n || 2 === arguments.length)
                                                for (var i, o = 0, s = t.length; o < s; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                                            return e.concat(i || Array.prototype.slice.call(t))
                                        },
                                        o = this && this.__importDefault || function(e) {
                                            return e && e.__esModule ? e : {
                                                default: e
                                            }
                                        };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var s = o(n(996)),
                                        r = o(n(221)),
                                        a = n(282),
                                        c = n(783),
                                        l = n(464),
                                        u = n(137),
                                        h = n(520),
                                        d = n(883),
                                        f = n(789),
                                        p = n(799),
                                        m = n(655),
                                        g = o(n(744)),
                                        v = o(n(686)),
                                        _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
                                        y = {},
                                        b = function() {
                                            function e(t, n) {
                                                var o = this;
                                                void 0 === t && (t = "[data-choice]"), void 0 === n && (n = {}), void 0 === n.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = s.default.all([f.DEFAULT_CONFIG, e.defaults.options, n], {
                                                    arrayMerge: function(e, t) {
                                                        return i([], t, !0)
                                                    }
                                                });
                                                var r = (0, p.diff)(this.config, f.DEFAULT_CONFIG);
                                                r.length && console.warn("Unknown config option(s) passed", r.join(", "));
                                                var a = "string" == typeof t ? document.querySelector(t) : t;
                                                if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                                                if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), n.addItemFilter && "function" != typeof n.addItemFilter) {
                                                    var c = n.addItemFilter instanceof RegExp ? n.addItemFilter : new RegExp(n.addItemFilter);
                                                    this.config.addItemFilter = c.test.bind(c)
                                                }
                                                if (this._isTextElement ? this.passedElement = new h.WrappedInput({
                                                    element: a,
                                                    classNames: this.config.classNames,
                                                    delimiter: this.config.delimiter
                                                }) : this.passedElement = new h.WrappedSelect({
                                                    element: a,
                                                    classNames: this.config.classNames,
                                                    template: function(e) {
                                                        return o._templates.option(e)
                                                    }
                                                }), this.initialised = !1, this._store = new g.default, this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, p.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                                                    var l = window.getComputedStyle(this.passedElement.element).direction;
                                                    l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l)
                                                }
                                                if (this._idNames = {
                                                    itemChoice: "item-choice"
                                                }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
                                                    var u = this.passedElement.value.split(this.config.delimiter);
                                                    this._presetItems = this._presetItems.concat(u)
                                                }
                                                if (this.passedElement.options && this.passedElement.options.forEach((function(e) {
                                                    o._presetChoices.push({
                                                        value: e.value,
                                                        label: e.innerHTML,
                                                        selected: !!e.selected,
                                                        disabled: e.disabled || e.parentNode.disabled,
                                                        placeholder: "" === e.value || e.hasAttribute("placeholder"),
                                                        customProperties: e.dataset["custom-properties"]
                                                    })
                                                })), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
                                                    element: t
                                                }), void(this.initialised = !0);
                                                this.init()
                                            }
                                            return Object.defineProperty(e, "defaults", {
                                                get: function() {
                                                    return Object.preventExtensions({
                                                        get options() {
                                                            return y
                                                        },
                                                        get templates() {
                                                            return v.default
                                                        }
                                                    })
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), e.prototype.init = function() {
                                                if (!this.initialised) {
                                                    this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
                                                    var e = this.config.callbackOnInit;
                                                    e && "function" == typeof e && e.call(this)
                                                }
                                            }, e.prototype.destroy = function() {
                                                this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = v.default, this.initialised = !1)
                                            }, e.prototype.enable = function() {
                                                return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this
                                            }, e.prototype.disable = function() {
                                                return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this
                                            }, e.prototype.highlightItem = function(e, t) {
                                                if (void 0 === t && (t = !0), !e || !e.id) return this;
                                                var n = e.id,
                                                    i = e.groupId,
                                                    o = void 0 === i ? -1 : i,
                                                    s = e.value,
                                                    r = void 0 === s ? "" : s,
                                                    a = e.label,
                                                    c = void 0 === a ? "" : a,
                                                    u = o >= 0 ? this._store.getGroupById(o) : null;
                                                return this._store.dispatch((0, l.highlightItem)(n, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                                                    id: n,
                                                    value: r,
                                                    label: c,
                                                    groupValue: u && u.value ? u.value : null
                                                }), this
                                            }, e.prototype.unhighlightItem = function(e) {
                                                if (!e || !e.id) return this;
                                                var t = e.id,
                                                    n = e.groupId,
                                                    i = void 0 === n ? -1 : n,
                                                    o = e.value,
                                                    s = void 0 === o ? "" : o,
                                                    r = e.label,
                                                    a = void 0 === r ? "" : r,
                                                    c = i >= 0 ? this._store.getGroupById(i) : null;
                                                return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                                                    id: t,
                                                    value: s,
                                                    label: a,
                                                    groupValue: c && c.value ? c.value : null
                                                }), this
                                            }, e.prototype.highlightAll = function() {
                                                var e = this;
                                                return this._store.items.forEach((function(t) {
                                                    return e.highlightItem(t)
                                                })), this
                                            }, e.prototype.unhighlightAll = function() {
                                                var e = this;
                                                return this._store.items.forEach((function(t) {
                                                    return e.unhighlightItem(t)
                                                })), this
                                            }, e.prototype.removeActiveItemsByValue = function(e) {
                                                var t = this;
                                                return this._store.activeItems.filter((function(t) {
                                                    return t.value === e
                                                })).forEach((function(e) {
                                                    return t._removeItem(e)
                                                })), this
                                            }, e.prototype.removeActiveItems = function(e) {
                                                var t = this;
                                                return this._store.activeItems.filter((function(t) {
                                                    return t.id !== e
                                                })).forEach((function(e) {
                                                    return t._removeItem(e)
                                                })), this
                                            }, e.prototype.removeHighlightedItems = function(e) {
                                                var t = this;
                                                return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach((function(n) {
                                                    t._removeItem(n), e && t._triggerChange(n.value)
                                                })), this
                                            }, e.prototype.showDropdown = function(e) {
                                                var t = this;
                                                return this.dropdown.isActive || requestAnimationFrame((function() {
                                                    t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {})
                                                })), this
                                            }, e.prototype.hideDropdown = function(e) {
                                                var t = this;
                                                return this.dropdown.isActive ? (requestAnimationFrame((function() {
                                                    t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {})
                                                })), this) : this
                                            }, e.prototype.getValue = function(e) {
                                                void 0 === e && (e = !1);
                                                var t = this._store.activeItems.reduce((function(t, n) {
                                                    var i = e ? n.value : n;
                                                    return t.push(i), t
                                                }), []);
                                                return this._isSelectOneElement ? t[0] : t
                                            }, e.prototype.setValue = function(e) {
                                                var t = this;
                                                return this.initialised ? (e.forEach((function(e) {
                                                    return t._setChoiceOrItem(e)
                                                })), this) : this
                                            }, e.prototype.setChoiceByValue = function(e) {
                                                var t = this;
                                                return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                                    return t._findAndSelectChoiceByValue(e)
                                                })), this
                                            }, e.prototype.setChoices = function(e, t, n, i) {
                                                var o = this;
                                                if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === n && (n = "label"), void 0 === i && (i = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                                                if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                                                if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                                                if (i && this.clearChoices(), "function" == typeof e) {
                                                    var s = e(this);
                                                    if ("function" == typeof Promise && s instanceof Promise) return new Promise((function(e) {
                                                        return requestAnimationFrame(e)
                                                    })).then((function() {
                                                        return o._handleLoadingState(!0)
                                                    })).then((function() {
                                                        return s
                                                    })).then((function(e) {
                                                        return o.setChoices(e, t, n, i)
                                                    })).catch((function(e) {
                                                        o.config.silent || console.error(e)
                                                    })).then((function() {
                                                        return o._handleLoadingState(!1)
                                                    })).then((function() {
                                                        return o
                                                    }));
                                                    if (!Array.isArray(s)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof s));
                                                    return this.setChoices(s, t, n, !1)
                                                }
                                                if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                                                return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach((function(e) {
                                                    if (e.choices) o._addGroup({
                                                        id: e.id ? parseInt("".concat(e.id), 10) : null,
                                                        group: e,
                                                        valueKey: t,
                                                        labelKey: n
                                                    });
                                                    else {
                                                        var i = e;
                                                        o._addChoice({
                                                            value: i[t],
                                                            label: i[n],
                                                            isSelected: !!i.selected,
                                                            isDisabled: !!i.disabled,
                                                            placeholder: !!i.placeholder,
                                                            customProperties: i.customProperties
                                                        })
                                                    }
                                                })), this._stopLoading(), this
                                            }, e.prototype.clearChoices = function() {
                                                return this._store.dispatch((0, a.clearChoices)()), this
                                            }, e.prototype.clearStore = function() {
                                                return this._store.dispatch((0, u.clearAll)()), this
                                            }, e.prototype.clearInput = function() {
                                                var e = !this._isSelectOneElement;
                                                return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this
                                            }, e.prototype._render = function() {
                                                if (!this._store.isLoading()) {
                                                    this._currentState = this._store.state;
                                                    var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                                                        t = this._isSelectElement,
                                                        n = this._currentState.items !== this._prevState.items;
                                                    e && (t && this._renderChoices(), n && this._renderItems(), this._prevState = this._currentState)
                                                }
                                            }, e.prototype._renderChoices = function() {
                                                var e = this,
                                                    t = this._store,
                                                    n = t.activeGroups,
                                                    i = t.activeChoices,
                                                    o = document.createDocumentFragment();
                                                if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame((function() {
                                                    return e.choiceList.scrollToTop()
                                                })), n.length >= 1 && !this._isSearching) {
                                                    var s = i.filter((function(e) {
                                                        return !0 === e.placeholder && -1 === e.groupId
                                                    }));
                                                    s.length >= 1 && (o = this._createChoicesFragment(s, o)), o = this._createGroupsFragment(n, i, o)
                                                } else i.length >= 1 && (o = this._createChoicesFragment(i, o));
                                                if (o.childNodes && o.childNodes.length > 0) {
                                                    var r = this._store.activeItems,
                                                        a = this._canAddItem(r, this.input.value);
                                                    if (a.response) this.choiceList.append(o), this._highlightChoice();
                                                    else {
                                                        var c = this._getTemplate("notice", a.notice);
                                                        this.choiceList.append(c)
                                                    }
                                                } else {
                                                    var l = void 0;
                                                    c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l)
                                                }
                                            }, e.prototype._renderItems = function() {
                                                var e = this._store.activeItems || [];
                                                this.itemList.clear();
                                                var t = this._createItemsFragment(e);
                                                t.childNodes && this.itemList.append(t)
                                            }, e.prototype._createGroupsFragment = function(e, t, n) {
                                                var i = this;
                                                return void 0 === n && (n = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach((function(e) {
                                                    var o = function(e) {
                                                        return t.filter((function(t) {
                                                            return i._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === i.config.renderSelectedChoices || !t.selected)
                                                        }))
                                                    }(e);
                                                    if (o.length >= 1) {
                                                        var s = i._getTemplate("choiceGroup", e);
                                                        n.appendChild(s), i._createChoicesFragment(o, n, !0)
                                                    }
                                                })), n
                                            }, e.prototype._createChoicesFragment = function(e, t, n) {
                                                var o = this;
                                                void 0 === t && (t = document.createDocumentFragment()), void 0 === n && (n = !1);
                                                var s = this.config,
                                                    r = s.renderSelectedChoices,
                                                    a = s.searchResultLimit,
                                                    c = s.renderChoiceLimit,
                                                    l = this._isSearching ? p.sortByScore : this.config.sorter,
                                                    u = function(e) {
                                                        if ("auto" !== r || o._isSelectOneElement || !e.selected) {
                                                            var n = o._getTemplate("choice", e, o.config.itemSelectText);
                                                            t.appendChild(n)
                                                        }
                                                    },
                                                    h = e;
                                                "auto" !== r || this._isSelectOneElement || (h = e.filter((function(e) {
                                                    return !e.selected
                                                })));
                                                var d = h.reduce((function(e, t) {
                                                        return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e
                                                    }), {
                                                        placeholderChoices: [],
                                                        normalChoices: []
                                                    }),
                                                    f = d.placeholderChoices,
                                                    m = d.normalChoices;
                                                (this.config.shouldSort || this._isSearching) && m.sort(l);
                                                var g = h.length,
                                                    v = this._isSelectOneElement ? i(i([], f, !0), m, !0) : m;
                                                this._isSearching ? g = a : c && c > 0 && !n && (g = c);
                                                for (var _ = 0; _ < g; _ += 1) v[_] && u(v[_]);
                                                return t
                                            }, e.prototype._createItemsFragment = function(e, t) {
                                                var n = this;
                                                void 0 === t && (t = document.createDocumentFragment());
                                                var i = this.config,
                                                    o = i.shouldSortItems,
                                                    s = i.sorter,
                                                    r = i.removeItemButton;
                                                return o && !this._isSelectOneElement && e.sort(s), this._isTextElement ? this.passedElement.value = e.map((function(e) {
                                                    return e.value
                                                })).join(this.config.delimiter) : this.passedElement.options = e, e.forEach((function(e) {
                                                    var i = n._getTemplate("item", e, r);
                                                    t.appendChild(i)
                                                })), t
                                            }, e.prototype._triggerChange = function(e) {
                                                null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
                                                    value: e
                                                })
                                            }, e.prototype._selectPlaceholderChoice = function(e) {
                                                this._addItem({
                                                    value: e.value,
                                                    label: e.label,
                                                    choiceId: e.id,
                                                    groupId: e.groupId,
                                                    placeholder: e.placeholder
                                                }), this._triggerChange(e.value)
                                            }, e.prototype._handleButtonAction = function(e, t) {
                                                if (e && t && this.config.removeItems && this.config.removeItemButton) {
                                                    var n = t.parentNode && t.parentNode.dataset.id,
                                                        i = n && e.find((function(e) {
                                                            return e.id === parseInt(n, 10)
                                                        }));
                                                    i && (this._removeItem(i), this._triggerChange(i.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice))
                                                }
                                            }, e.prototype._handleItemAction = function(e, t, n) {
                                                var i = this;
                                                if (void 0 === n && (n = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                                                    var o = t.dataset.id;
                                                    e.forEach((function(e) {
                                                        e.id !== parseInt("".concat(o), 10) || e.highlighted ? !n && e.highlighted && i.unhighlightItem(e) : i.highlightItem(e)
                                                    })), this.input.focus()
                                                }
                                            }, e.prototype._handleChoiceAction = function(e, t) {
                                                if (e && t) {
                                                    var n = t.dataset.id,
                                                        i = n && this._store.getChoiceById(n);
                                                    if (i) {
                                                        var o = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                                                            s = this.dropdown.isActive;
                                                        i.keyCode = o, this.passedElement.triggerEvent(d.EVENTS.choice, {
                                                            choice: i
                                                        }), i.selected || i.disabled || this._canAddItem(e, i.value).response && (this._addItem({
                                                            value: i.value,
                                                            label: i.label,
                                                            choiceId: i.id,
                                                            groupId: i.groupId,
                                                            customProperties: i.customProperties,
                                                            placeholder: i.placeholder,
                                                            keyCode: i.keyCode
                                                        }), this._triggerChange(i.value)), this.clearInput(), s && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus())
                                                    }
                                                }
                                            }, e.prototype._handleBackspace = function(e) {
                                                if (this.config.removeItems && e) {
                                                    var t = e[e.length - 1],
                                                        n = e.some((function(e) {
                                                            return e.highlighted
                                                        }));
                                                    this.config.editItems && !n && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (n || this.highlightItem(t, !1), this.removeHighlightedItems(!0))
                                                }
                                            }, e.prototype._startLoading = function() {
                                                this._store.dispatch((0, u.setIsLoading)(!0))
                                            }, e.prototype._stopLoading = function() {
                                                this._store.dispatch((0, u.setIsLoading)(!1))
                                            }, e.prototype._handleLoadingState = function(e) {
                                                void 0 === e && (e = !0);
                                                var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                                                e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "")
                                            }, e.prototype._handleSearch = function(e) {
                                                if (this.input.isFocussed) {
                                                    var t = this._store.choices,
                                                        n = this.config,
                                                        i = n.searchFloor,
                                                        o = n.searchChoices,
                                                        s = t.some((function(e) {
                                                            return !e.active
                                                        }));
                                                    if (null != e && e.length >= i) {
                                                        var r = o ? this._searchChoices(e) : 0;
                                                        this.passedElement.triggerEvent(d.EVENTS.search, {
                                                            value: e,
                                                            resultCount: r
                                                        })
                                                    } else s && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)))
                                                }
                                            }, e.prototype._canAddItem = function(e, t) {
                                                var n = !0,
                                                    i = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
                                                if (!this._isSelectOneElement) {
                                                    var o = (0, p.existsInArray)(e, t);
                                                    this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (n = !1, i = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && o && n && (n = !1, i = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && n && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (n = !1, i = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText)
                                                }
                                                return {
                                                    response: n,
                                                    notice: i
                                                }
                                            }, e.prototype._searchChoices = function(e) {
                                                var t = "string" == typeof e ? e.trim() : e,
                                                    n = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
                                                if (t.length < 1 && t === "".concat(n, " ")) return 0;
                                                var o = this._store.searchableChoices,
                                                    s = t,
                                                    c = Object.assign(this.config.fuseOptions, {
                                                        keys: i([], this.config.searchFields, !0),
                                                        includeMatches: !0
                                                    }),
                                                    l = new r.default(o, c).search(s);
                                                return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length
                                            }, e.prototype._addEventListeners = function() {
                                                var e = document.documentElement;
                                                e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
                                                    passive: !0
                                                }), e.addEventListener("touchmove", this._onTouchMove, {
                                                    passive: !0
                                                }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                                                    passive: !0
                                                }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                                    passive: !0
                                                }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                                    passive: !0
                                                })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                                                    passive: !0
                                                }), this.input.element.addEventListener("focus", this._onFocus, {
                                                    passive: !0
                                                }), this.input.element.addEventListener("blur", this._onBlur, {
                                                    passive: !0
                                                }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                                                    passive: !0
                                                }), this.input.addEventListeners()
                                            }, e.prototype._removeEventListeners = function() {
                                                var e = document.documentElement;
                                                e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners()
                                            }, e.prototype._onKeyDown = function(e) {
                                                var t = e.keyCode,
                                                    n = this._store.activeItems,
                                                    i = this.input.isFocussed,
                                                    o = this.dropdown.isActive,
                                                    s = this.itemList.hasChildren(),
                                                    r = String.fromCharCode(t),
                                                    a = /[a-zA-Z0-9-_ ]/.test(r),
                                                    c = d.KEY_CODES.BACK_KEY,
                                                    l = d.KEY_CODES.DELETE_KEY,
                                                    u = d.KEY_CODES.ENTER_KEY,
                                                    h = d.KEY_CODES.A_KEY,
                                                    f = d.KEY_CODES.ESC_KEY,
                                                    p = d.KEY_CODES.UP_KEY,
                                                    m = d.KEY_CODES.DOWN_KEY,
                                                    g = d.KEY_CODES.PAGE_UP_KEY,
                                                    v = d.KEY_CODES.PAGE_DOWN_KEY;
                                                switch (this._isTextElement || o || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += r.toLowerCase())), t) {
                                                    case h:
                                                        return this._onSelectKey(e, s);
                                                    case u:
                                                        return this._onEnterKey(e, n, o);
                                                    case f:
                                                        return this._onEscapeKey(o);
                                                    case p:
                                                    case g:
                                                    case m:
                                                    case v:
                                                        return this._onDirectionKey(e, o);
                                                    case l:
                                                    case c:
                                                        return this._onDeleteKey(e, n, i)
                                                }
                                            }, e.prototype._onKeyUp = function(e) {
                                                var t = e.target,
                                                    n = e.keyCode,
                                                    i = this.input.value,
                                                    o = this._store.activeItems,
                                                    s = this._canAddItem(o, i),
                                                    r = d.KEY_CODES.BACK_KEY,
                                                    c = d.KEY_CODES.DELETE_KEY;
                                                if (this._isTextElement)
                                                    if (s.notice && i) {
                                                        var l = this._getTemplate("notice", s.notice);
                                                        this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0)
                                                    } else this.hideDropdown(!0);
                                                else {
                                                    var u = (n === r || n === c) && t && !t.value,
                                                        h = !this._isTextElement && this._isSearching,
                                                        f = this._canSearch && s.response;
                                                    u && h ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : f && this._handleSearch(this.input.rawValue)
                                                }
                                                this._canSearch = this.config.searchEnabled
                                            }, e.prototype._onSelectKey = function(e, t) {
                                                var n = e.ctrlKey,
                                                    i = e.metaKey;
                                                (n || i) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll())
                                            }, e.prototype._onEnterKey = function(e, t, n) {
                                                var i = e.target,
                                                    o = d.KEY_CODES.ENTER_KEY,
                                                    s = i && i.hasAttribute("data-button");
                                                if (this._isTextElement && i && i.value) {
                                                    var r = this.input.value;
                                                    this._canAddItem(t, r).response && (this.hideDropdown(!0), this._addItem({
                                                        value: r
                                                    }), this._triggerChange(r), this.clearInput())
                                                }
                                                if (s && (this._handleButtonAction(t, i), e.preventDefault()), n) {
                                                    var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                                    a && (t[0] && (t[0].keyCode = o), this._handleChoiceAction(t, a)), e.preventDefault()
                                                } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault())
                                            }, e.prototype._onEscapeKey = function(e) {
                                                e && (this.hideDropdown(!0), this.containerOuter.focus())
                                            }, e.prototype._onDirectionKey = function(e, t) {
                                                var n = e.keyCode,
                                                    i = e.metaKey,
                                                    o = d.KEY_CODES.DOWN_KEY,
                                                    s = d.KEY_CODES.PAGE_UP_KEY,
                                                    r = d.KEY_CODES.PAGE_DOWN_KEY;
                                                if (t || this._isSelectOneElement) {
                                                    this.showDropdown(), this._canSearch = !1;
                                                    var a = n === o || n === r ? 1 : -1,
                                                        c = "[data-choice-selectable]",
                                                        l = void 0;
                                                    if (i || n === r || n === s) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);
                                                    else {
                                                        var u = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                                        l = u ? (0, p.getAdjacentEl)(u, c, a) : this.dropdown.element.querySelector(c)
                                                    }
                                                    l && ((0, p.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault()
                                                }
                                            }, e.prototype._onDeleteKey = function(e, t, n) {
                                                var i = e.target;
                                                this._isSelectOneElement || i.value || !n || (this._handleBackspace(t), e.preventDefault())
                                            }, e.prototype._onTouchMove = function() {
                                                this._wasTap && (this._wasTap = !1)
                                            }, e.prototype._onTouchEnd = function(e) {
                                                var t = (e || e.touches[0]).target;
                                                this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0
                                            }, e.prototype._onMouseDown = function(e) {
                                                var t = e.target;
                                                if (t instanceof HTMLElement) {
                                                    if (_ && this.choiceList.element.contains(t)) {
                                                        var n = this.choiceList.element.firstElementChild,
                                                            i = "ltr" === this._direction ? e.offsetX >= n.offsetWidth : e.offsetX < n.offsetLeft;
                                                        this._isScrollingOnIe = i
                                                    }
                                                    if (t !== this.input.element) {
                                                        var o = t.closest("[data-button],[data-item],[data-choice]");
                                                        if (o instanceof HTMLElement) {
                                                            var s = e.shiftKey,
                                                                r = this._store.activeItems,
                                                                a = o.dataset;
                                                            "button" in a ? this._handleButtonAction(r, o) : "item" in a ? this._handleItemAction(r, o, s) : "choice" in a && this._handleChoiceAction(r, o)
                                                        }
                                                        e.preventDefault()
                                                    }
                                                }
                                            }, e.prototype._onMouseOver = function(e) {
                                                var t = e.target;
                                                t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t)
                                            }, e.prototype._onClick = function(e) {
                                                var t = e.target;
                                                this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0))
                                            }, e.prototype._onFocus = function(e) {
                                                var t, n = this,
                                                    i = e.target;
                                                i && this.containerOuter.element.contains(i) && ((t = {})[d.TEXT_TYPE] = function() {
                                                    i === n.input.element && n.containerOuter.addFocusState()
                                                }, t[d.SELECT_ONE_TYPE] = function() {
                                                    n.containerOuter.addFocusState(), i === n.input.element && n.showDropdown(!0)
                                                }, t[d.SELECT_MULTIPLE_TYPE] = function() {
                                                    i === n.input.element && (n.showDropdown(!0), n.containerOuter.addFocusState())
                                                }, t)[this.passedElement.element.type]()
                                            }, e.prototype._onBlur = function(e) {
                                                var t, n = this,
                                                    i = e.target;
                                                if (i && this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
                                                    var o = this._store.activeItems.some((function(e) {
                                                        return e.highlighted
                                                    }));
                                                    ((t = {})[d.TEXT_TYPE] = function() {
                                                        i === n.input.element && (n.containerOuter.removeFocusState(), o && n.unhighlightAll(), n.hideDropdown(!0))
                                                    }, t[d.SELECT_ONE_TYPE] = function() {
                                                        n.containerOuter.removeFocusState(), (i === n.input.element || i === n.containerOuter.element && !n._canSearch) && n.hideDropdown(!0)
                                                    }, t[d.SELECT_MULTIPLE_TYPE] = function() {
                                                        i === n.input.element && (n.containerOuter.removeFocusState(), n.hideDropdown(!0), o && n.unhighlightAll())
                                                    }, t)[this.passedElement.element.type]()
                                                } else this._isScrollingOnIe = !1, this.input.element.focus()
                                            }, e.prototype._onFormReset = function() {
                                                this._store.dispatch((0, u.resetTo)(this._initialState))
                                            }, e.prototype._highlightChoice = function(e) {
                                                var t = this;
                                                void 0 === e && (e = null);
                                                var n = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                                                if (n.length) {
                                                    var i = e;
                                                    Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach((function(e) {
                                                        e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false")
                                                    })), i ? this._highlightPosition = n.indexOf(i) : (i = n.length > this._highlightPosition ? n[this._highlightPosition] : n[n.length - 1]) || (i = n[0]), i.classList.add(this.config.classNames.highlightedState), i.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
                                                        el: i
                                                    }), this.dropdown.isActive && (this.input.setActiveDescendant(i.id), this.containerOuter.setActiveDescendant(i.id))
                                                }
                                            }, e.prototype._addItem = function(e) {
                                                var t = e.value,
                                                    n = e.label,
                                                    i = void 0 === n ? null : n,
                                                    o = e.choiceId,
                                                    s = void 0 === o ? -1 : o,
                                                    r = e.groupId,
                                                    a = void 0 === r ? -1 : r,
                                                    c = e.customProperties,
                                                    u = void 0 === c ? {} : c,
                                                    h = e.placeholder,
                                                    f = void 0 !== h && h,
                                                    p = e.keyCode,
                                                    m = void 0 === p ? -1 : p,
                                                    g = "string" == typeof t ? t.trim() : t,
                                                    v = this._store.items,
                                                    _ = i || g,
                                                    y = s || -1,
                                                    b = a >= 0 ? this._store.getGroupById(a) : null,
                                                    E = v ? v.length + 1 : 1;
                                                this.config.prependValue && (g = this.config.prependValue + g.toString()), this.config.appendValue && (g += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({
                                                    value: g,
                                                    label: _,
                                                    id: E,
                                                    choiceId: y,
                                                    groupId: a,
                                                    customProperties: u,
                                                    placeholder: f,
                                                    keyCode: m
                                                })), this._isSelectOneElement && this.removeActiveItems(E), this.passedElement.triggerEvent(d.EVENTS.addItem, {
                                                    id: E,
                                                    value: g,
                                                    label: _,
                                                    customProperties: u,
                                                    groupValue: b && b.value ? b.value : null,
                                                    keyCode: m
                                                })
                                            }, e.prototype._removeItem = function(e) {
                                                var t = e.id,
                                                    n = e.value,
                                                    i = e.label,
                                                    o = e.customProperties,
                                                    s = e.choiceId,
                                                    r = e.groupId,
                                                    a = r && r >= 0 ? this._store.getGroupById(r) : null;
                                                t && s && (this._store.dispatch((0, l.removeItem)(t, s)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
                                                    id: t,
                                                    value: n,
                                                    label: i,
                                                    customProperties: o,
                                                    groupValue: a && a.value ? a.value : null
                                                }))
                                            }, e.prototype._addChoice = function(e) {
                                                var t = e.value,
                                                    n = e.label,
                                                    i = void 0 === n ? null : n,
                                                    o = e.isSelected,
                                                    s = void 0 !== o && o,
                                                    r = e.isDisabled,
                                                    c = void 0 !== r && r,
                                                    l = e.groupId,
                                                    u = void 0 === l ? -1 : l,
                                                    h = e.customProperties,
                                                    d = void 0 === h ? {} : h,
                                                    f = e.placeholder,
                                                    p = void 0 !== f && f,
                                                    m = e.keyCode,
                                                    g = void 0 === m ? -1 : m;
                                                if (null != t) {
                                                    var v = this._store.choices,
                                                        _ = i || t,
                                                        y = v ? v.length + 1 : 1,
                                                        b = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);
                                                    this._store.dispatch((0, a.addChoice)({
                                                        id: y,
                                                        groupId: u,
                                                        elementId: b,
                                                        value: t,
                                                        label: _,
                                                        disabled: c,
                                                        customProperties: d,
                                                        placeholder: p,
                                                        keyCode: g
                                                    })), s && this._addItem({
                                                        value: t,
                                                        label: _,
                                                        choiceId: y,
                                                        customProperties: d,
                                                        placeholder: p,
                                                        keyCode: g
                                                    })
                                                }
                                            }, e.prototype._addGroup = function(e) {
                                                var t = this,
                                                    n = e.group,
                                                    i = e.id,
                                                    o = e.valueKey,
                                                    s = void 0 === o ? "value" : o,
                                                    r = e.labelKey,
                                                    a = void 0 === r ? "label" : r,
                                                    l = (0, p.isType)("Object", n) ? n.choices : Array.from(n.getElementsByTagName("OPTION")),
                                                    u = i || Math.floor((new Date).valueOf() * Math.random()),
                                                    h = !!n.disabled && n.disabled;
                                                l ? (this._store.dispatch((0, c.addGroup)({
                                                    value: n.label,
                                                    id: u,
                                                    active: !0,
                                                    disabled: h
                                                })), l.forEach((function(e) {
                                                    var n = e.disabled || e.parentNode && e.parentNode.disabled;
                                                    t._addChoice({
                                                        value: e[s],
                                                        label: (0, p.isType)("Object", e) ? e[a] : e.innerHTML,
                                                        isSelected: e.selected,
                                                        isDisabled: n,
                                                        groupId: u,
                                                        customProperties: e.customProperties,
                                                        placeholder: e.placeholder
                                                    })
                                                }))) : this._store.dispatch((0, c.addGroup)({
                                                    value: n.label,
                                                    id: n.id,
                                                    active: !1,
                                                    disabled: n.disabled
                                                }))
                                            }, e.prototype._getTemplate = function(e) {
                                                for (var t, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                                                return (t = this._templates[e]).call.apply(t, i([this, this.config], n, !1))
                                            }, e.prototype._createTemplates = function() {
                                                var e = this.config.callbackOnCreateTemplates,
                                                    t = {};
                                                e && "function" == typeof e && (t = e.call(this, p.strToEl)), this._templates = (0, s.default)(v.default, t)
                                            }, e.prototype._createElements = function() {
                                                this.containerOuter = new h.Container({
                                                    element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                                    classNames: this.config.classNames,
                                                    type: this.passedElement.element.type,
                                                    position: this.config.position
                                                }), this.containerInner = new h.Container({
                                                    element: this._getTemplate("containerInner"),
                                                    classNames: this.config.classNames,
                                                    type: this.passedElement.element.type,
                                                    position: this.config.position
                                                }), this.input = new h.Input({
                                                    element: this._getTemplate("input", this._placeholderValue),
                                                    classNames: this.config.classNames,
                                                    type: this.passedElement.element.type,
                                                    preventPaste: !this.config.paste
                                                }), this.choiceList = new h.List({
                                                    element: this._getTemplate("choiceList", this._isSelectOneElement)
                                                }), this.itemList = new h.List({
                                                    element: this._getTemplate("itemList", this._isSelectOneElement)
                                                }), this.dropdown = new h.Dropdown({
                                                    element: this._getTemplate("dropdown"),
                                                    classNames: this.config.classNames,
                                                    type: this.passedElement.element.type
                                                })
                                            }, e.prototype._createStructure = function() {
                                                this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems)
                                            }, e.prototype._addPredefinedGroups = function(e) {
                                                var t = this,
                                                    n = this.passedElement.placeholderOption;
                                                n && n.parentNode && "SELECT" === n.parentNode.tagName && this._addChoice({
                                                    value: n.value,
                                                    label: n.innerHTML,
                                                    isSelected: n.selected,
                                                    isDisabled: n.disabled,
                                                    placeholder: !0
                                                }), e.forEach((function(e) {
                                                    return t._addGroup({
                                                        group: e,
                                                        id: e.id || null
                                                    })
                                                }))
                                            }, e.prototype._addPredefinedChoices = function(e) {
                                                var t = this;
                                                this.config.shouldSort && e.sort(this.config.sorter);
                                                var n = e.some((function(e) {
                                                        return e.selected
                                                    })),
                                                    i = e.findIndex((function(e) {
                                                        return void 0 === e.disabled || !e.disabled
                                                    }));
                                                e.forEach((function(e, o) {
                                                    var s = e.value,
                                                        r = void 0 === s ? "" : s,
                                                        a = e.label,
                                                        c = e.customProperties,
                                                        l = e.placeholder;
                                                    if (t._isSelectElement)
                                                        if (e.choices) t._addGroup({
                                                            group: e,
                                                            id: e.id || null
                                                        });
                                                        else {
                                                            var u = !(!t._isSelectOneElement || n || o !== i) || e.selected,
                                                                h = e.disabled;
                                                            t._addChoice({
                                                                value: r,
                                                                label: a,
                                                                isSelected: !!u,
                                                                isDisabled: !!h,
                                                                placeholder: !!l,
                                                                customProperties: c
                                                            })
                                                        }
                                                    else t._addChoice({
                                                        value: r,
                                                        label: a,
                                                        isSelected: !!e.selected,
                                                        isDisabled: !!e.disabled,
                                                        placeholder: !!e.placeholder,
                                                        customProperties: c
                                                    })
                                                }))
                                            }, e.prototype._addPredefinedItems = function(e) {
                                                var t = this;
                                                e.forEach((function(e) {
                                                    "object" == typeof e && e.value && t._addItem({
                                                        value: e.value,
                                                        label: e.label,
                                                        choiceId: e.id,
                                                        customProperties: e.customProperties,
                                                        placeholder: e.placeholder
                                                    }), "string" == typeof e && t._addItem({
                                                        value: e
                                                    })
                                                }))
                                            }, e.prototype._setChoiceOrItem = function(e) {
                                                var t = this;
                                                ({
                                                    object: function() {
                                                        e.value && (t._isTextElement ? t._addItem({
                                                            value: e.value,
                                                            label: e.label,
                                                            choiceId: e.id,
                                                            customProperties: e.customProperties,
                                                            placeholder: e.placeholder
                                                        }) : t._addChoice({
                                                            value: e.value,
                                                            label: e.label,
                                                            isSelected: !0,
                                                            isDisabled: !1,
                                                            customProperties: e.customProperties,
                                                            placeholder: e.placeholder
                                                        }))
                                                    },
                                                    string: function() {
                                                        t._isTextElement ? t._addItem({
                                                            value: e
                                                        }) : t._addChoice({
                                                            value: e,
                                                            label: e,
                                                            isSelected: !0,
                                                            isDisabled: !1
                                                        })
                                                    }
                                                })[(0, p.getType)(e).toLowerCase()]()
                                            }, e.prototype._findAndSelectChoiceByValue = function(e) {
                                                var t = this,
                                                    n = this._store.choices.find((function(n) {
                                                        return t.config.valueComparer(n.value, e)
                                                    }));
                                                n && !n.selected && this._addItem({
                                                    value: n.value,
                                                    label: n.label,
                                                    choiceId: n.id,
                                                    groupId: n.groupId,
                                                    customProperties: n.customProperties,
                                                    placeholder: n.placeholder,
                                                    keyCode: n.keyCode
                                                })
                                            }, e.prototype._generatePlaceholderValue = function() {
                                                if (this._isSelectElement && this.passedElement.placeholderOption) {
                                                    var e = this.passedElement.placeholderOption;
                                                    return e ? e.text : null
                                                }
                                                var t = this.config,
                                                    n = t.placeholder,
                                                    i = t.placeholderValue,
                                                    o = this.passedElement.element.dataset;
                                                if (n) {
                                                    if (i) return i;
                                                    if (o.placeholder) return o.placeholder
                                                }
                                                return null
                                            }, e
                                        }();
                                    t.default = b
                                },
                                613: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var i = n(799),
                                        o = n(883),
                                        s = function() {
                                            function e(e) {
                                                var t = e.element,
                                                    n = e.type,
                                                    i = e.classNames,
                                                    o = e.position;
                                                this.element = t, this.classNames = i, this.type = n, this.position = o, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
                                            }
                                            return e.prototype.addEventListeners = function() {
                                                this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur)
                                            }, e.prototype.removeEventListeners = function() {
                                                this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur)
                                            }, e.prototype.shouldFlip = function(e) {
                                                if ("number" != typeof e) return !1;
                                                var t = !1;
                                                return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t
                                            }, e.prototype.setActiveDescendant = function(e) {
                                                this.element.setAttribute("aria-activedescendant", e)
                                            }, e.prototype.removeActiveDescendant = function() {
                                                this.element.removeAttribute("aria-activedescendant")
                                            }, e.prototype.open = function(e) {
                                                this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0)
                                            }, e.prototype.close = function() {
                                                this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1)
                                            }, e.prototype.focus = function() {
                                                this.isFocussed || this.element.focus()
                                            }, e.prototype.addFocusState = function() {
                                                this.element.classList.add(this.classNames.focusState)
                                            }, e.prototype.removeFocusState = function() {
                                                this.element.classList.remove(this.classNames.focusState)
                                            }, e.prototype.enable = function() {
                                                this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === o.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1
                                            }, e.prototype.disable = function() {
                                                this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === o.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0
                                            }, e.prototype.wrap = function(e) {
                                                (0, i.wrap)(e, this.element)
                                            }, e.prototype.unwrap = function(e) {
                                                this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element))
                                            }, e.prototype.addLoadingState = function() {
                                                this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0
                                            }, e.prototype.removeLoadingState = function() {
                                                this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1
                                            }, e.prototype._onFocus = function() {
                                                this.isFocussed = !0
                                            }, e.prototype._onBlur = function() {
                                                this.isFocussed = !1
                                            }, e
                                        }();
                                    t.default = s
                                },
                                217: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var n = function() {
                                        function e(e) {
                                            var t = e.element,
                                                n = e.type,
                                                i = e.classNames;
                                            this.element = t, this.classNames = i, this.type = n, this.isActive = !1
                                        }
                                        return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
                                            get: function() {
                                                return this.element.getBoundingClientRect().bottom
                                            },
                                            enumerable: !1,
                                            configurable: !0
                                        }), e.prototype.getChild = function(e) {
                                            return this.element.querySelector(e)
                                        }, e.prototype.show = function() {
                                            return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this
                                        }, e.prototype.hide = function() {
                                            return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this
                                        }, e
                                    }();
                                    t.default = n
                                },
                                520: function(e, t, n) {
                                    var i = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
                                    var o = i(n(217));
                                    t.Dropdown = o.default;
                                    var s = i(n(613));
                                    t.Container = s.default;
                                    var r = i(n(11));
                                    t.Input = r.default;
                                    var a = i(n(624));
                                    t.List = a.default;
                                    var c = i(n(541));
                                    t.WrappedInput = c.default;
                                    var l = i(n(982));
                                    t.WrappedSelect = l.default
                                },
                                11: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var i = n(799),
                                        o = n(883),
                                        s = function() {
                                            function e(e) {
                                                var t = e.element,
                                                    n = e.type,
                                                    i = e.classNames,
                                                    o = e.preventPaste;
                                                this.element = t, this.type = n, this.classNames = i, this.preventPaste = o, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
                                            }
                                            return Object.defineProperty(e.prototype, "placeholder", {
                                                set: function(e) {
                                                    this.element.placeholder = e
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "value", {
                                                get: function() {
                                                    return (0, i.sanitise)(this.element.value)
                                                },
                                                set: function(e) {
                                                    this.element.value = e
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "rawValue", {
                                                get: function() {
                                                    return this.element.value
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), e.prototype.addEventListeners = function() {
                                                this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                                                    passive: !0
                                                }), this.element.addEventListener("focus", this._onFocus, {
                                                    passive: !0
                                                }), this.element.addEventListener("blur", this._onBlur, {
                                                    passive: !0
                                                })
                                            }, e.prototype.removeEventListeners = function() {
                                                this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur)
                                            }, e.prototype.enable = function() {
                                                this.element.removeAttribute("disabled"), this.isDisabled = !1
                                            }, e.prototype.disable = function() {
                                                this.element.setAttribute("disabled", ""), this.isDisabled = !0
                                            }, e.prototype.focus = function() {
                                                this.isFocussed || this.element.focus()
                                            }, e.prototype.blur = function() {
                                                this.isFocussed && this.element.blur()
                                            }, e.prototype.clear = function(e) {
                                                return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this
                                            }, e.prototype.setWidth = function() {
                                                var e = this.element,
                                                    t = e.style,
                                                    n = e.value,
                                                    i = e.placeholder;
                                                t.minWidth = "".concat(i.length + 1, "ch"), t.width = "".concat(n.length + 1, "ch")
                                            }, e.prototype.setActiveDescendant = function(e) {
                                                this.element.setAttribute("aria-activedescendant", e)
                                            }, e.prototype.removeActiveDescendant = function() {
                                                this.element.removeAttribute("aria-activedescendant")
                                            }, e.prototype._onInput = function() {
                                                this.type !== o.SELECT_ONE_TYPE && this.setWidth()
                                            }, e.prototype._onPaste = function(e) {
                                                this.preventPaste && e.preventDefault()
                                            }, e.prototype._onFocus = function() {
                                                this.isFocussed = !0
                                            }, e.prototype._onBlur = function() {
                                                this.isFocussed = !1
                                            }, e
                                        }();
                                    t.default = s
                                },
                                624: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var i = n(883),
                                        o = function() {
                                            function e(e) {
                                                var t = e.element;
                                                this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight
                                            }
                                            return e.prototype.clear = function() {
                                                this.element.innerHTML = ""
                                            }, e.prototype.append = function(e) {
                                                this.element.appendChild(e)
                                            }, e.prototype.getChild = function(e) {
                                                return this.element.querySelector(e)
                                            }, e.prototype.hasChildren = function() {
                                                return this.element.hasChildNodes()
                                            }, e.prototype.scrollToTop = function() {
                                                this.element.scrollTop = 0
                                            }, e.prototype.scrollToChildElement = function(e, t) {
                                                var n = this;
                                                if (e) {
                                                    var i = this.element.offsetHeight,
                                                        o = this.element.scrollTop + i,
                                                        s = e.offsetHeight,
                                                        r = e.offsetTop + s,
                                                        a = t > 0 ? this.element.scrollTop + r - o : e.offsetTop;
                                                    requestAnimationFrame((function() {
                                                        n._animateScroll(a, t)
                                                    }))
                                                }
                                            }, e.prototype._scrollDown = function(e, t, n) {
                                                var i = (n - e) / t,
                                                    o = i > 1 ? i : 1;
                                                this.element.scrollTop = e + o
                                            }, e.prototype._scrollUp = function(e, t, n) {
                                                var i = (e - n) / t,
                                                    o = i > 1 ? i : 1;
                                                this.element.scrollTop = e - o
                                            }, e.prototype._animateScroll = function(e, t) {
                                                var n = this,
                                                    o = i.SCROLLING_SPEED,
                                                    s = this.element.scrollTop,
                                                    r = !1;
                                                t > 0 ? (this._scrollDown(s, o, e), s < e && (r = !0)) : (this._scrollUp(s, o, e), s > e && (r = !0)), r && requestAnimationFrame((function() {
                                                    n._animateScroll(e, t)
                                                }))
                                            }, e
                                        }();
                                    t.default = o
                                },
                                730: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var i = n(799),
                                        o = function() {
                                            function e(e) {
                                                var t = e.element,
                                                    n = e.classNames;
                                                if (this.element = t, this.classNames = n, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                                                this.isDisabled = !1
                                            }
                                            return Object.defineProperty(e.prototype, "isActive", {
                                                get: function() {
                                                    return "active" === this.element.dataset.choice
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "dir", {
                                                get: function() {
                                                    return this.element.dir
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "value", {
                                                get: function() {
                                                    return this.element.value
                                                },
                                                set: function(e) {
                                                    this.element.value = e
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), e.prototype.conceal = function() {
                                                this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
                                                var e = this.element.getAttribute("style");
                                                e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active")
                                            }, e.prototype.reveal = function() {
                                                this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
                                                var e = this.element.getAttribute("data-choice-orig-style");
                                                e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value
                                            }, e.prototype.enable = function() {
                                                this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1
                                            }, e.prototype.disable = function() {
                                                this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0
                                            }, e.prototype.triggerEvent = function(e, t) {
                                                (0, i.dispatchEvent)(this.element, e, t)
                                            }, e
                                        }();
                                    t.default = o
                                },
                                541: function(e, t, n) {
                                    var i, o = this && this.__extends || (i = function(e, t) {
                                            return i = Object.setPrototypeOf || {
                                                    __proto__: []
                                                }
                                                instanceof Array && function(e, t) {
                                                    e.__proto__ = t
                                                } || function(e, t) {
                                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                                }, i(e, t)
                                        }, function(e, t) {
                                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                                            function n() {
                                                this.constructor = e
                                            }
                                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                                        }),
                                        s = this && this.__importDefault || function(e) {
                                            return e && e.__esModule ? e : {
                                                default: e
                                            }
                                        };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var r = function(e) {
                                        function t(t) {
                                            var n = t.element,
                                                i = t.classNames,
                                                o = t.delimiter,
                                                s = e.call(this, {
                                                    element: n,
                                                    classNames: i
                                                }) || this;
                                            return s.delimiter = o, s
                                        }
                                        return o(t, e), Object.defineProperty(t.prototype, "value", {
                                            get: function() {
                                                return this.element.value
                                            },
                                            set: function(e) {
                                                this.element.setAttribute("value", e), this.element.value = e
                                            },
                                            enumerable: !1,
                                            configurable: !0
                                        }), t
                                    }(s(n(730)).default);
                                    t.default = r
                                },
                                982: function(e, t, n) {
                                    var i, o = this && this.__extends || (i = function(e, t) {
                                            return i = Object.setPrototypeOf || {
                                                    __proto__: []
                                                }
                                                instanceof Array && function(e, t) {
                                                    e.__proto__ = t
                                                } || function(e, t) {
                                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                                }, i(e, t)
                                        }, function(e, t) {
                                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                                            function n() {
                                                this.constructor = e
                                            }
                                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                                        }),
                                        s = this && this.__importDefault || function(e) {
                                            return e && e.__esModule ? e : {
                                                default: e
                                            }
                                        };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var r = function(e) {
                                        function t(t) {
                                            var n = t.element,
                                                i = t.classNames,
                                                o = t.template,
                                                s = e.call(this, {
                                                    element: n,
                                                    classNames: i
                                                }) || this;
                                            return s.template = o, s
                                        }
                                        return o(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
                                            get: function() {
                                                return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]")
                                            },
                                            enumerable: !1,
                                            configurable: !0
                                        }), Object.defineProperty(t.prototype, "optionGroups", {
                                            get: function() {
                                                return Array.from(this.element.getElementsByTagName("OPTGROUP"))
                                            },
                                            enumerable: !1,
                                            configurable: !0
                                        }), Object.defineProperty(t.prototype, "options", {
                                            get: function() {
                                                return Array.from(this.element.options)
                                            },
                                            set: function(e) {
                                                var t = this,
                                                    n = document.createDocumentFragment();
                                                e.forEach((function(e) {
                                                    return i = e, o = t.template(i), void n.appendChild(o);
                                                    var i, o
                                                })), this.appendDocFragment(n)
                                            },
                                            enumerable: !1,
                                            configurable: !0
                                        }), t.prototype.appendDocFragment = function(e) {
                                            this.element.innerHTML = "", this.element.appendChild(e)
                                        }, t
                                    }(s(n(730)).default);
                                    t.default = r
                                },
                                883: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = {
                                        showDropdown: "showDropdown",
                                        hideDropdown: "hideDropdown",
                                        change: "change",
                                        choice: "choice",
                                        search: "search",
                                        addItem: "addItem",
                                        removeItem: "removeItem",
                                        highlightItem: "highlightItem",
                                        highlightChoice: "highlightChoice",
                                        unhighlightItem: "unhighlightItem"
                                    }, t.ACTION_TYPES = {
                                        ADD_CHOICE: "ADD_CHOICE",
                                        FILTER_CHOICES: "FILTER_CHOICES",
                                        ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                                        CLEAR_CHOICES: "CLEAR_CHOICES",
                                        ADD_GROUP: "ADD_GROUP",
                                        ADD_ITEM: "ADD_ITEM",
                                        REMOVE_ITEM: "REMOVE_ITEM",
                                        HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                                        CLEAR_ALL: "CLEAR_ALL",
                                        RESET_TO: "RESET_TO",
                                        SET_IS_LOADING: "SET_IS_LOADING"
                                    }, t.KEY_CODES = {
                                        BACK_KEY: 46,
                                        DELETE_KEY: 8,
                                        ENTER_KEY: 13,
                                        A_KEY: 65,
                                        ESC_KEY: 27,
                                        UP_KEY: 38,
                                        DOWN_KEY: 40,
                                        PAGE_UP_KEY: 33,
                                        PAGE_DOWN_KEY: 34
                                    }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4
                                },
                                789: function(e, t, n) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
                                    var i = n(799);
                                    t.DEFAULT_CLASSNAMES = {
                                        containerOuter: "choices",
                                        containerInner: "choices__inner",
                                        input: "choices__input",
                                        inputCloned: "choices__input--cloned",
                                        list: "choices__list",
                                        listItems: "choices__list--multiple",
                                        listSingle: "choices__list--single",
                                        listDropdown: "choices__list--dropdown",
                                        item: "choices__item",
                                        itemSelectable: "choices__item--selectable",
                                        itemDisabled: "choices__item--disabled",
                                        itemChoice: "choices__item--choice",
                                        placeholder: "choices__placeholder",
                                        group: "choices__group",
                                        groupHeading: "choices__heading",
                                        button: "choices__button",
                                        activeState: "is-active",
                                        focusState: "is-focused",
                                        openState: "is-open",
                                        disabledState: "is-disabled",
                                        highlightedState: "is-highlighted",
                                        selectedState: "is-selected",
                                        flippedState: "is-flipped",
                                        loadingState: "is-loading",
                                        noResults: "has-no-results",
                                        noChoices: "has-no-choices"
                                    }, t.DEFAULT_CONFIG = {
                                        items: [],
                                        choices: [],
                                        silent: !1,
                                        renderChoiceLimit: -1,
                                        maxItemCount: -1,
                                        addItems: !0,
                                        addItemFilter: null,
                                        removeItems: !0,
                                        removeItemButton: !1,
                                        editItems: !1,
                                        allowHTML: !0,
                                        duplicateItemsAllowed: !0,
                                        delimiter: ",",
                                        paste: !0,
                                        searchEnabled: !0,
                                        searchChoices: !0,
                                        searchFloor: 1,
                                        searchResultLimit: 4,
                                        searchFields: ["label", "value"],
                                        position: "auto",
                                        resetScrollPosition: !0,
                                        shouldSort: !0,
                                        shouldSortItems: !1,
                                        sorter: i.sortByAlpha,
                                        placeholder: !0,
                                        placeholderValue: null,
                                        searchPlaceholderValue: null,
                                        prependValue: null,
                                        appendValue: null,
                                        renderSelectedChoices: "auto",
                                        loadingText: "Loading...",
                                        noResultsText: "No results found",
                                        noChoicesText: "No choices to choose from",
                                        itemSelectText: "Press to select",
                                        uniqueItemText: "Only unique values can be added",
                                        customAddItemText: "Only values matching specific conditions can be added",
                                        addItemText: function(e) {
                                            return 'Press Enter to add <b>"'.concat((0, i.sanitise)(e), '"</b>')
                                        },
                                        maxItemText: function(e) {
                                            return "Only ".concat(e, " values can be added")
                                        },
                                        valueComparer: function(e, t) {
                                            return e === t
                                        },
                                        fuseOptions: {
                                            includeScore: !0
                                        },
                                        labelId: "",
                                        callbackOnInit: null,
                                        callbackOnCreateTemplates: null,
                                        classNames: t.DEFAULT_CLASSNAMES
                                    }
                                },
                                18: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                978: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                948: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                359: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                285: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                533: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                187: function(e, t, n) {
                                    var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                                            void 0 === i && (i = n), Object.defineProperty(e, i, {
                                                enumerable: !0,
                                                get: function() {
                                                    return t[n]
                                                }
                                            })
                                        } : function(e, t, n, i) {
                                            void 0 === i && (i = n), e[i] = t[n]
                                        }),
                                        o = this && this.__exportStar || function(e, t) {
                                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                                        };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), o(n(18), t), o(n(978), t), o(n(948), t), o(n(359), t), o(n(285), t), o(n(533), t), o(n(287), t), o(n(132), t), o(n(837), t), o(n(598), t), o(n(369), t), o(n(37), t), o(n(47), t), o(n(923), t), o(n(876), t)
                                },
                                287: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                132: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                837: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                598: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                37: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                369: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                47: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                923: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                876: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    })
                                },
                                799: function(e, t) {
                                    var n;
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function(e, t) {
                                        return Math.floor(Math.random() * (t - e) + e)
                                    }, t.generateChars = function(e) {
                                        return Array.from({
                                            length: e
                                        }, (function() {
                                            return (0, t.getRandomNumber)(0, 36).toString(36)
                                        })).join("")
                                    }, t.generateId = function(e, n) {
                                        var i = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4);
                                        return i = i.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(n, "-").concat(i)
                                    }, t.getType = function(e) {
                                        return Object.prototype.toString.call(e).slice(8, -1)
                                    }, t.isType = function(e, n) {
                                        return null != n && (0, t.getType)(n) === e
                                    }, t.wrap = function(e, t) {
                                        return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e)
                                    }, t.getAdjacentEl = function(e, t, n) {
                                        void 0 === n && (n = 1);
                                        for (var i = "".concat(n > 0 ? "next" : "previous", "ElementSibling"), o = e[i]; o;) {
                                            if (o.matches(t)) return o;
                                            o = o[i]
                                        }
                                        return o
                                    }, t.isScrolledIntoView = function(e, t, n) {
                                        return void 0 === n && (n = 1), !!e && (n > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop)
                                    }, t.sanitise = function(e) {
                                        return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
                                    }, t.strToEl = (n = document.createElement("div"), function(e) {
                                        var t = e.trim();
                                        n.innerHTML = t;
                                        for (var i = n.children[0]; n.firstChild;) n.removeChild(n.firstChild);
                                        return i
                                    }), t.sortByAlpha = function(e, t) {
                                        var n = e.value,
                                            i = e.label,
                                            o = void 0 === i ? n : i,
                                            s = t.value,
                                            r = t.label,
                                            a = void 0 === r ? s : r;
                                        return o.localeCompare(a, [], {
                                            sensitivity: "base",
                                            ignorePunctuation: !0,
                                            numeric: !0
                                        })
                                    }, t.sortByScore = function(e, t) {
                                        var n = e.score,
                                            i = void 0 === n ? 0 : n,
                                            o = t.score;
                                        return i - (void 0 === o ? 0 : o)
                                    }, t.dispatchEvent = function(e, t, n) {
                                        void 0 === n && (n = null);
                                        var i = new CustomEvent(t, {
                                            detail: n,
                                            bubbles: !0,
                                            cancelable: !0
                                        });
                                        return e.dispatchEvent(i)
                                    }, t.existsInArray = function(e, t, n) {
                                        return void 0 === n && (n = "value"), e.some((function(e) {
                                            return "string" == typeof t ? e[n] === t.trim() : e[n] === t
                                        }))
                                    }, t.cloneObject = function(e) {
                                        return JSON.parse(JSON.stringify(e))
                                    }, t.diff = function(e, t) {
                                        var n = Object.keys(e).sort(),
                                            i = Object.keys(t).sort();
                                        return n.filter((function(e) {
                                            return i.indexOf(e) < 0
                                        }))
                                    }
                                },
                                273: function(e, t) {
                                    var n = this && this.__spreadArray || function(e, t, n) {
                                        if (n || 2 === arguments.length)
                                            for (var i, o = 0, s = t.length; o < s; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                                        return e.concat(i || Array.prototype.slice.call(t))
                                    };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, i) {
                                        switch (void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), i.type) {
                                            case "ADD_CHOICE":
                                                var o = i,
                                                    s = {
                                                        id: o.id,
                                                        elementId: o.elementId,
                                                        groupId: o.groupId,
                                                        value: o.value,
                                                        label: o.label || o.value,
                                                        disabled: o.disabled || !1,
                                                        selected: !1,
                                                        active: !0,
                                                        score: 9999,
                                                        customProperties: o.customProperties,
                                                        placeholder: o.placeholder || !1
                                                    };
                                                return n(n([], e, !0), [s], !1);
                                            case "ADD_ITEM":
                                                var r = i;
                                                return r.choiceId > -1 ? e.map((function(e) {
                                                    var t = e;
                                                    return t.id === parseInt("".concat(r.choiceId), 10) && (t.selected = !0), t
                                                })) : e;
                                            case "REMOVE_ITEM":
                                                var a = i;
                                                return a.choiceId && a.choiceId > -1 ? e.map((function(e) {
                                                    var t = e;
                                                    return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t
                                                })) : e;
                                            case "FILTER_CHOICES":
                                                var c = i;
                                                return e.map((function(e) {
                                                    var t = e;
                                                    return t.active = c.results.some((function(e) {
                                                        var n = e.item,
                                                            i = e.score;
                                                        return n.id === t.id && (t.score = i, !0)
                                                    })), t
                                                }));
                                            case "ACTIVATE_CHOICES":
                                                var l = i;
                                                return e.map((function(e) {
                                                    var t = e;
                                                    return t.active = l.active, t
                                                }));
                                            case "CLEAR_CHOICES":
                                                return t.defaultState;
                                            default:
                                                return e
                                        }
                                    }
                                },
                                871: function(e, t) {
                                    var n = this && this.__spreadArray || function(e, t, n) {
                                        if (n || 2 === arguments.length)
                                            for (var i, o = 0, s = t.length; o < s; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                                        return e.concat(i || Array.prototype.slice.call(t))
                                    };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, i) {
                                        switch (void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), i.type) {
                                            case "ADD_GROUP":
                                                var o = i;
                                                return n(n([], e, !0), [{
                                                    id: o.id,
                                                    value: o.value,
                                                    active: o.active,
                                                    disabled: o.disabled
                                                }], !1);
                                            case "CLEAR_CHOICES":
                                                return [];
                                            default:
                                                return e
                                        }
                                    }
                                },
                                655: function(e, t, n) {
                                    var i = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.defaultState = void 0;
                                    var o = n(857),
                                        s = i(n(52)),
                                        r = i(n(871)),
                                        a = i(n(273)),
                                        c = i(n(502)),
                                        l = n(799);
                                    t.defaultState = {
                                        groups: [],
                                        items: [],
                                        choices: [],
                                        loading: !1
                                    };
                                    var u = (0, o.combineReducers)({
                                        items: s.default,
                                        groups: r.default,
                                        choices: a.default,
                                        loading: c.default
                                    });
                                    t.default = function(e, n) {
                                        var i = e;
                                        if ("CLEAR_ALL" === n.type) i = t.defaultState;
                                        else if ("RESET_TO" === n.type) return (0, l.cloneObject)(n.state);
                                        return u(i, n)
                                    }
                                },
                                52: function(e, t) {
                                    var n = this && this.__spreadArray || function(e, t, n) {
                                        if (n || 2 === arguments.length)
                                            for (var i, o = 0, s = t.length; o < s; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                                        return e.concat(i || Array.prototype.slice.call(t))
                                    };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, i) {
                                        switch (void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), i.type) {
                                            case "ADD_ITEM":
                                                var o = i;
                                                return n(n([], e, !0), [{
                                                    id: o.id,
                                                    choiceId: o.choiceId,
                                                    groupId: o.groupId,
                                                    value: o.value,
                                                    label: o.label,
                                                    active: !0,
                                                    highlighted: !1,
                                                    customProperties: o.customProperties,
                                                    placeholder: o.placeholder || !1,
                                                    keyCode: null
                                                }], !1).map((function(e) {
                                                    var t = e;
                                                    return t.highlighted = !1, t
                                                }));
                                            case "REMOVE_ITEM":
                                                return e.map((function(e) {
                                                    var t = e;
                                                    return t.id === i.id && (t.active = !1), t
                                                }));
                                            case "HIGHLIGHT_ITEM":
                                                var s = i;
                                                return e.map((function(e) {
                                                    var t = e;
                                                    return t.id === s.id && (t.highlighted = s.highlighted), t
                                                }));
                                            default:
                                                return e
                                        }
                                    }
                                },
                                502: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    }), t.defaultState = void 0, t.defaultState = !1, t.default = function(e, n) {
                                        return void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), "SET_IS_LOADING" === n.type ? n.isLoading : e
                                    }
                                },
                                744: function(e, t, n) {
                                    var i = this && this.__spreadArray || function(e, t, n) {
                                            if (n || 2 === arguments.length)
                                                for (var i, o = 0, s = t.length; o < s; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                                            return e.concat(i || Array.prototype.slice.call(t))
                                        },
                                        o = this && this.__importDefault || function(e) {
                                            return e && e.__esModule ? e : {
                                                default: e
                                            }
                                        };
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var s = n(857),
                                        r = o(n(655)),
                                        a = function() {
                                            function e() {
                                                this._store = (0, s.createStore)(r.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                                            }
                                            return e.prototype.subscribe = function(e) {
                                                this._store.subscribe(e)
                                            }, e.prototype.dispatch = function(e) {
                                                this._store.dispatch(e)
                                            }, Object.defineProperty(e.prototype, "state", {
                                                get: function() {
                                                    return this._store.getState()
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "items", {
                                                get: function() {
                                                    return this.state.items
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "activeItems", {
                                                get: function() {
                                                    return this.items.filter((function(e) {
                                                        return !0 === e.active
                                                    }))
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
                                                get: function() {
                                                    return this.items.filter((function(e) {
                                                        return e.active && e.highlighted
                                                    }))
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "choices", {
                                                get: function() {
                                                    return this.state.choices
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "activeChoices", {
                                                get: function() {
                                                    return this.choices.filter((function(e) {
                                                        return !0 === e.active
                                                    }))
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "selectableChoices", {
                                                get: function() {
                                                    return this.choices.filter((function(e) {
                                                        return !0 !== e.disabled
                                                    }))
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "searchableChoices", {
                                                get: function() {
                                                    return this.selectableChoices.filter((function(e) {
                                                        return !0 !== e.placeholder
                                                    }))
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "placeholderChoice", {
                                                get: function() {
                                                    return i([], this.choices, !0).reverse().find((function(e) {
                                                        return !0 === e.placeholder
                                                    }))
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "groups", {
                                                get: function() {
                                                    return this.state.groups
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), Object.defineProperty(e.prototype, "activeGroups", {
                                                get: function() {
                                                    var e = this.groups,
                                                        t = this.choices;
                                                    return e.filter((function(e) {
                                                        var n = !0 === e.active && !1 === e.disabled,
                                                            i = t.some((function(e) {
                                                                return !0 === e.active && !1 === e.disabled
                                                            }));
                                                        return n && i
                                                    }), [])
                                                },
                                                enumerable: !1,
                                                configurable: !0
                                            }), e.prototype.isLoading = function() {
                                                return this.state.loading
                                            }, e.prototype.getChoiceById = function(e) {
                                                return this.activeChoices.find((function(t) {
                                                    return t.id === parseInt(e, 10)
                                                }))
                                            }, e.prototype.getGroupById = function(e) {
                                                return this.groups.find((function(t) {
                                                    return t.id === e
                                                }))
                                            }, e
                                        }();
                                    t.default = a
                                },
                                686: function(e, t) {
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0
                                    });
                                    var n = {
                                        containerOuter: function(e, t, n, i, o, s, r) {
                                            var a = e.classNames.containerOuter,
                                                c = Object.assign(document.createElement("div"), {
                                                    className: a
                                                });
                                            return c.dataset.type = s, t && (c.dir = t), i && (c.tabIndex = 0), n && (c.setAttribute("role", o ? "combobox" : "listbox"), o && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), r && c.setAttribute("aria-labeledby", r), c
                                        },
                                        containerInner: function(e) {
                                            var t = e.classNames.containerInner;
                                            return Object.assign(document.createElement("div"), {
                                                className: t
                                            })
                                        },
                                        itemList: function(e, t) {
                                            var n = e.classNames,
                                                i = n.list,
                                                o = n.listSingle,
                                                s = n.listItems;
                                            return Object.assign(document.createElement("div"), {
                                                className: "".concat(i, " ").concat(t ? o : s)
                                            })
                                        },
                                        placeholder: function(e, t) {
                                            var n, i = e.allowHTML,
                                                o = e.classNames.placeholder;
                                            return Object.assign(document.createElement("div"), ((n = {
                                                className: o
                                            })[i ? "innerHTML" : "innerText"] = t, n))
                                        },
                                        item: function(e, t, n) {
                                            var i, o, s = e.allowHTML,
                                                r = e.classNames,
                                                a = r.item,
                                                c = r.button,
                                                l = r.highlightedState,
                                                u = r.itemSelectable,
                                                h = r.placeholder,
                                                d = t.id,
                                                f = t.value,
                                                p = t.label,
                                                m = t.customProperties,
                                                g = t.active,
                                                v = t.disabled,
                                                _ = t.highlighted,
                                                y = t.placeholder,
                                                b = Object.assign(document.createElement("div"), ((i = {
                                                    className: a
                                                })[s ? "innerHTML" : "innerText"] = p, i));
                                            if (Object.assign(b.dataset, {
                                                item: "",
                                                id: d,
                                                value: f,
                                                customProperties: m
                                            }), g && b.setAttribute("aria-selected", "true"), v && b.setAttribute("aria-disabled", "true"), y && b.classList.add(h), b.classList.add(_ ? l : u), n) {
                                                v && b.classList.remove(u), b.dataset.deletable = "";
                                                var E = "Remove item",
                                                    w = Object.assign(document.createElement("button"), ((o = {
                                                        type: "button",
                                                        className: c
                                                    })[s ? "innerHTML" : "innerText"] = E, o));
                                                w.setAttribute("aria-label", "".concat(E, ": '").concat(f, "'")), w.dataset.button = "", b.appendChild(w)
                                            }
                                            return b
                                        },
                                        choiceList: function(e, t) {
                                            var n = e.classNames.list,
                                                i = Object.assign(document.createElement("div"), {
                                                    className: n
                                                });
                                            return t || i.setAttribute("aria-multiselectable", "true"), i.setAttribute("role", "listbox"), i
                                        },
                                        choiceGroup: function(e, t) {
                                            var n, i = e.allowHTML,
                                                o = e.classNames,
                                                s = o.group,
                                                r = o.groupHeading,
                                                a = o.itemDisabled,
                                                c = t.id,
                                                l = t.value,
                                                u = t.disabled,
                                                h = Object.assign(document.createElement("div"), {
                                                    className: "".concat(s, " ").concat(u ? a : "")
                                                });
                                            return h.setAttribute("role", "group"), Object.assign(h.dataset, {
                                                group: "",
                                                id: c,
                                                value: l
                                            }), u && h.setAttribute("aria-disabled", "true"), h.appendChild(Object.assign(document.createElement("div"), ((n = {
                                                className: r
                                            })[i ? "innerHTML" : "innerText"] = l, n))), h
                                        },
                                        choice: function(e, t, n) {
                                            var i, o = e.allowHTML,
                                                s = e.classNames,
                                                r = s.item,
                                                a = s.itemChoice,
                                                c = s.itemSelectable,
                                                l = s.selectedState,
                                                u = s.itemDisabled,
                                                h = s.placeholder,
                                                d = t.id,
                                                f = t.value,
                                                p = t.label,
                                                m = t.groupId,
                                                g = t.elementId,
                                                v = t.disabled,
                                                _ = t.selected,
                                                y = t.placeholder,
                                                b = Object.assign(document.createElement("div"), ((i = {
                                                    id: g
                                                })[o ? "innerHTML" : "innerText"] = p, i.className = "".concat(r, " ").concat(a), i));
                                            return _ && b.classList.add(l), y && b.classList.add(h), b.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(b.dataset, {
                                                choice: "",
                                                id: d,
                                                value: f,
                                                selectText: n
                                            }), v ? (b.classList.add(u), b.dataset.choiceDisabled = "", b.setAttribute("aria-disabled", "true")) : (b.classList.add(c), b.dataset.choiceSelectable = ""), b
                                        },
                                        input: function(e, t) {
                                            var n = e.classNames,
                                                i = n.input,
                                                o = n.inputCloned,
                                                s = Object.assign(document.createElement("input"), {
                                                    type: "search",
                                                    name: "search_terms",
                                                    className: "".concat(i, " ").concat(o),
                                                    autocomplete: "off",
                                                    autocapitalize: "off",
                                                    spellcheck: !1
                                                });
                                            return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s
                                        },
                                        dropdown: function(e) {
                                            var t = e.classNames,
                                                n = t.list,
                                                i = t.listDropdown,
                                                o = document.createElement("div");
                                            return o.classList.add(n, i), o.setAttribute("aria-expanded", "false"), o
                                        },
                                        notice: function(e, t, n) {
                                            var i, o = e.allowHTML,
                                                s = e.classNames,
                                                r = s.item,
                                                a = s.itemChoice,
                                                c = s.noResults,
                                                l = s.noChoices;
                                            void 0 === n && (n = "");
                                            var u = [r, a];
                                            return "no-choices" === n ? u.push(l) : "no-results" === n && u.push(c), Object.assign(document.createElement("div"), ((i = {})[o ? "innerHTML" : "innerText"] = t, i.className = u.join(" "), i))
                                        },
                                        option: function(e) {
                                            var t = e.label,
                                                n = e.value,
                                                i = e.customProperties,
                                                o = e.active,
                                                s = e.disabled,
                                                r = new Option(t, n, !1, o);
                                            return i && (r.dataset.customProperties = "".concat(i)), r.disabled = !!s, r
                                        }
                                    };
                                    t.default = n
                                },
                                996: function(e) {
                                    var t = function(e) {
                                            return function(e) {
                                                return !!e && "object" == typeof e
                                            }(e) && ! function(e) {
                                                var t = Object.prototype.toString.call(e);
                                                return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                                                    return e.$$typeof === n
                                                }(e)
                                            }(e)
                                        },
                                        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

                                    function i(e, t) {
                                        return !1 !== t.clone && t.isMergeableObject(e) ? a((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                                        var n
                                    }

                                    function o(e, t, n) {
                                        return e.concat(t).map((function(e) {
                                            return i(e, n)
                                        }))
                                    }

                                    function s(e) {
                                        return Object.keys(e).concat(function(e) {
                                            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                                                return e.propertyIsEnumerable(t)
                                            })) : []
                                        }(e))
                                    }

                                    function r(e, t) {
                                        try {
                                            return t in e
                                        } catch (e) {
                                            return !1
                                        }
                                    }

                                    function a(e, n, c) {
                                        (c = c || {}).arrayMerge = c.arrayMerge || o, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = i;
                                        var l = Array.isArray(n);
                                        return l === Array.isArray(e) ? l ? c.arrayMerge(e, n, c) : function(e, t, n) {
                                            var o = {};
                                            return n.isMergeableObject(e) && s(e).forEach((function(t) {
                                                o[t] = i(e[t], n)
                                            })), s(t).forEach((function(s) {
                                                (function(e, t) {
                                                    return r(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                                                })(e, s) || (r(e, s) && n.isMergeableObject(t[s]) ? o[s] = function(e, t) {
                                                    if (!t.customMerge) return a;
                                                    var n = t.customMerge(e);
                                                    return "function" == typeof n ? n : a
                                                }(s, n)(e[s], t[s], n) : o[s] = i(t[s], n))
                                            })), o
                                        }(e, n, c) : i(n, c)
                                    }
                                    a.all = function(e, t) {
                                        if (!Array.isArray(e)) throw new Error("first argument should be an array");
                                        return e.reduce((function(e, n) {
                                            return a(e, n, t)
                                        }), {})
                                    };
                                    var c = a;
                                    e.exports = c
                                },
                                221: function(e, t, n) {
                                    function i(e) {
                                        return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e)
                                    }

                                    function o(e) {
                                        return "string" == typeof e
                                    }

                                    function s(e) {
                                        return "number" == typeof e
                                    }

                                    function r(e) {
                                        return "object" == typeof e
                                    }

                                    function a(e) {
                                        return null != e
                                    }

                                    function c(e) {
                                        return !e.trim().length
                                    }

                                    function l(e) {
                                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
                                    }
                                    n.r(t), n.d(t, {
                                        default: function() {
                                            return R
                                        }
                                    });
                                    const u = Object.prototype.hasOwnProperty;
                                    class h {
                                        constructor(e) {
                                            this._keys = [], this._keyMap = {};
                                            let t = 0;
                                            e.forEach((e => {
                                                let n = d(e);
                                                t += n.weight, this._keys.push(n), this._keyMap[n.id] = n, t += n.weight
                                            })), this._keys.forEach((e => {
                                                e.weight /= t
                                            }))
                                        }
                                        get(e) {
                                            return this._keyMap[e]
                                        }
                                        keys() {
                                            return this._keys
                                        }
                                        toJSON() {
                                            return JSON.stringify(this._keys)
                                        }
                                    }

                                    function d(e) {
                                        let t = null,
                                            n = null,
                                            s = null,
                                            r = 1;
                                        if (o(e) || i(e)) s = e, t = f(e), n = p(e);
                                        else {
                                            if (!u.call(e, "name")) throw new Error("Missing name property in key");
                                            const i = e.name;
                                            if (s = i, u.call(e, "weight") && (r = e.weight, r <= 0)) throw new Error((e => `Property 'weight' in key '${e}' must be a positive integer`)(i));
                                            t = f(i), n = p(i)
                                        }
                                        return {
                                            path: t,
                                            id: n,
                                            weight: r,
                                            src: s
                                        }
                                    }

                                    function f(e) {
                                        return i(e) ? e : e.split(".")
                                    }

                                    function p(e) {
                                        return i(e) ? e.join(".") : e
                                    }
                                    var m = {
                                        isCaseSensitive: !1,
                                        includeScore: !1,
                                        keys: [],
                                        shouldSort: !0,
                                        sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1,
                                        includeMatches: !1,
                                        findAllMatches: !1,
                                        minMatchCharLength: 1,
                                        location: 0,
                                        threshold: .6,
                                        distance: 100,
                                        useExtendedSearch: !1,
                                        getFn: function(e, t) {
                                            let n = [],
                                                c = !1;
                                            const u = (e, t, h) => {
                                                if (a(e))
                                                    if (t[h]) {
                                                        const d = e[t[h]];
                                                        if (!a(d)) return;
                                                        if (h === t.length - 1 && (o(d) || s(d) || function(e) {
                                                            return !0 === e || !1 === e || function(e) {
                                                                return r(e) && null !== e
                                                            }(e) && "[object Boolean]" == l(e)
                                                        }(d))) n.push(function(e) {
                                                            return null == e ? "" : function(e) {
                                                                if ("string" == typeof e) return e;
                                                                let t = e + "";
                                                                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                                                            }(e)
                                                        }(d));
                                                        else if (i(d)) {
                                                            c = !0;
                                                            for (let e = 0, n = d.length; e < n; e += 1) u(d[e], t, h + 1)
                                                        } else t.length && u(d, t, h + 1)
                                                    } else n.push(e)
                                            };
                                            return u(e, o(t) ? t.split(".") : t, 0), c ? n : n[0]
                                        },
                                        ignoreLocation: !1,
                                        ignoreFieldNorm: !1,
                                        fieldNormWeight: 1
                                    };
                                    const g = /[^ ]+/g;
                                    class v {
                                        constructor({
                                                        getFn: e = m.getFn,
                                                        fieldNormWeight: t = m.fieldNormWeight
                                                    } = {}) {
                                            this.norm = function(e = 1, t = 3) {
                                                const n = new Map,
                                                    i = Math.pow(10, t);
                                                return {
                                                    get(t) {
                                                        const o = t.match(g).length;
                                                        if (n.has(o)) return n.get(o);
                                                        const s = 1 / Math.pow(o, .5 * e),
                                                            r = parseFloat(Math.round(s * i) / i);
                                                        return n.set(o, r), r
                                                    },
                                                    clear() {
                                                        n.clear()
                                                    }
                                                }
                                            }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords()
                                        }
                                        setSources(e = []) {
                                            this.docs = e
                                        }
                                        setIndexRecords(e = []) {
                                            this.records = e
                                        }
                                        setKeys(e = []) {
                                            this.keys = e, this._keysMap = {}, e.forEach(((e, t) => {
                                                this._keysMap[e.id] = t
                                            }))
                                        }
                                        create() {
                                            !this.isCreated && this.docs.length && (this.isCreated = !0, o(this.docs[0]) ? this.docs.forEach(((e, t) => {
                                                this._addString(e, t)
                                            })) : this.docs.forEach(((e, t) => {
                                                this._addObject(e, t)
                                            })), this.norm.clear())
                                        }
                                        add(e) {
                                            const t = this.size();
                                            o(e) ? this._addString(e, t) : this._addObject(e, t)
                                        }
                                        removeAt(e) {
                                            this.records.splice(e, 1);
                                            for (let t = e, n = this.size(); t < n; t += 1) this.records[t].i -= 1
                                        }
                                        getValueForItemAtKeyId(e, t) {
                                            return e[this._keysMap[t]]
                                        }
                                        size() {
                                            return this.records.length
                                        }
                                        _addString(e, t) {
                                            if (!a(e) || c(e)) return;
                                            let n = {
                                                v: e,
                                                i: t,
                                                n: this.norm.get(e)
                                            };
                                            this.records.push(n)
                                        }
                                        _addObject(e, t) {
                                            let n = {
                                                i: t,
                                                $: {}
                                            };
                                            this.keys.forEach(((t, s) => {
                                                let r = this.getFn(e, t.path);
                                                if (a(r))
                                                    if (i(r)) {
                                                        let e = [];
                                                        const t = [{
                                                            nestedArrIndex: -1,
                                                            value: r
                                                        }];
                                                        for (; t.length;) {
                                                            const {
                                                                nestedArrIndex: n,
                                                                value: s
                                                            } = t.pop();
                                                            if (a(s))
                                                                if (o(s) && !c(s)) {
                                                                    let t = {
                                                                        v: s,
                                                                        i: n,
                                                                        n: this.norm.get(s)
                                                                    };
                                                                    e.push(t)
                                                                } else i(s) && s.forEach(((e, n) => {
                                                                    t.push({
                                                                        nestedArrIndex: n,
                                                                        value: e
                                                                    })
                                                                }))
                                                        }
                                                        n.$[s] = e
                                                    } else if (!c(r)) {
                                                        let e = {
                                                            v: r,
                                                            n: this.norm.get(r)
                                                        };
                                                        n.$[s] = e
                                                    }
                                            })), this.records.push(n)
                                        }
                                        toJSON() {
                                            return {
                                                keys: this.keys,
                                                records: this.records
                                            }
                                        }
                                    }

                                    function _(e, t, {
                                        getFn: n = m.getFn,
                                        fieldNormWeight: i = m.fieldNormWeight
                                    } = {}) {
                                        const o = new v({
                                            getFn: n,
                                            fieldNormWeight: i
                                        });
                                        return o.setKeys(e.map(d)), o.setSources(t), o.create(), o
                                    }

                                    function y(e, {
                                        errors: t = 0,
                                        currentLocation: n = 0,
                                        expectedLocation: i = 0,
                                        distance: o = m.distance,
                                        ignoreLocation: s = m.ignoreLocation
                                    } = {}) {
                                        const r = t / e.length;
                                        if (s) return r;
                                        const a = Math.abs(i - n);
                                        return o ? r + a / o : a ? 1 : r
                                    }
                                    const b = 32;

                                    function E(e) {
                                        let t = {};
                                        for (let n = 0, i = e.length; n < i; n += 1) {
                                            const o = e.charAt(n);
                                            t[o] = (t[o] || 0) | 1 << i - n - 1
                                        }
                                        return t
                                    }
                                    class w {
                                        constructor(e, {
                                            location: t = m.location,
                                            threshold: n = m.threshold,
                                            distance: i = m.distance,
                                            includeMatches: o = m.includeMatches,
                                            findAllMatches: s = m.findAllMatches,
                                            minMatchCharLength: r = m.minMatchCharLength,
                                            isCaseSensitive: a = m.isCaseSensitive,
                                            ignoreLocation: c = m.ignoreLocation
                                        } = {}) {
                                            if (this.options = {
                                                location: t,
                                                threshold: n,
                                                distance: i,
                                                includeMatches: o,
                                                findAllMatches: s,
                                                minMatchCharLength: r,
                                                isCaseSensitive: a,
                                                ignoreLocation: c
                                            }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
                                            const l = (e, t) => {
                                                    this.chunks.push({
                                                        pattern: e,
                                                        alphabet: E(e),
                                                        startIndex: t
                                                    })
                                                },
                                                u = this.pattern.length;
                                            if (u > b) {
                                                let e = 0;
                                                const t = u % b,
                                                    n = u - t;
                                                for (; e < n;) l(this.pattern.substr(e, b), e), e += b;
                                                if (t) {
                                                    const e = u - b;
                                                    l(this.pattern.substr(e), e)
                                                }
                                            } else l(this.pattern, 0)
                                        }
                                        searchIn(e) {
                                            const {
                                                isCaseSensitive: t,
                                                includeMatches: n
                                            } = this.options;
                                            if (t || (e = e.toLowerCase()), this.pattern === e) {
                                                let t = {
                                                    isMatch: !0,
                                                    score: 0
                                                };
                                                return n && (t.indices = [
                                                    [0, e.length - 1]
                                                ]), t
                                            }
                                            const {
                                                location: i,
                                                distance: o,
                                                threshold: s,
                                                findAllMatches: r,
                                                minMatchCharLength: a,
                                                ignoreLocation: c
                                            } = this.options;
                                            let l = [],
                                                u = 0,
                                                h = !1;
                                            this.chunks.forEach((({
                                                                      pattern: t,
                                                                      alphabet: d,
                                                                      startIndex: f
                                                                  }) => {
                                                const {
                                                    isMatch: p,
                                                    score: g,
                                                    indices: v
                                                } = function(e, t, n, {
                                                    location: i = m.location,
                                                    distance: o = m.distance,
                                                    threshold: s = m.threshold,
                                                    findAllMatches: r = m.findAllMatches,
                                                    minMatchCharLength: a = m.minMatchCharLength,
                                                    includeMatches: c = m.includeMatches,
                                                    ignoreLocation: l = m.ignoreLocation
                                                } = {}) {
                                                    if (t.length > b) throw new Error("Pattern length exceeds max of 32.");
                                                    const u = t.length,
                                                        h = e.length,
                                                        d = Math.max(0, Math.min(i, h));
                                                    let f = s,
                                                        p = d;
                                                    const g = a > 1 || c,
                                                        v = g ? Array(h) : [];
                                                    let _;
                                                    for (;
                                                        (_ = e.indexOf(t, p)) > -1;) {
                                                        let e = y(t, {
                                                            currentLocation: _,
                                                            expectedLocation: d,
                                                            distance: o,
                                                            ignoreLocation: l
                                                        });
                                                        if (f = Math.min(e, f), p = _ + u, g) {
                                                            let e = 0;
                                                            for (; e < u;) v[_ + e] = 1, e += 1
                                                        }
                                                    }
                                                    p = -1;
                                                    let E = [],
                                                        w = 1,
                                                        S = u + h;
                                                    const C = 1 << u - 1;
                                                    for (let i = 0; i < u; i += 1) {
                                                        let s = 0,
                                                            a = S;
                                                        for (; s < a;) y(t, {
                                                            errors: i,
                                                            currentLocation: d + a,
                                                            expectedLocation: d,
                                                            distance: o,
                                                            ignoreLocation: l
                                                        }) <= f ? s = a : S = a, a = Math.floor((S - s) / 2 + s);
                                                        S = a;
                                                        let c = Math.max(1, d - a + 1),
                                                            m = r ? h : Math.min(d + a, h) + u,
                                                            _ = Array(m + 2);
                                                        _[m + 1] = (1 << i) - 1;
                                                        for (let s = m; s >= c; s -= 1) {
                                                            let r = s - 1,
                                                                a = n[e.charAt(r)];
                                                            if (g && (v[r] = +!!a), _[s] = (_[s + 1] << 1 | 1) & a, i && (_[s] |= (E[s + 1] | E[s]) << 1 | 1 | E[s + 1]), _[s] & C && (w = y(t, {
                                                                errors: i,
                                                                currentLocation: r,
                                                                expectedLocation: d,
                                                                distance: o,
                                                                ignoreLocation: l
                                                            }), w <= f)) {
                                                                if (f = w, p = r, p <= d) break;
                                                                c = Math.max(1, 2 * d - p)
                                                            }
                                                        }
                                                        if (y(t, {
                                                            errors: i + 1,
                                                            currentLocation: d,
                                                            expectedLocation: d,
                                                            distance: o,
                                                            ignoreLocation: l
                                                        }) > f) break;
                                                        E = _
                                                    }
                                                    const O = {
                                                        isMatch: p >= 0,
                                                        score: Math.max(.001, w)
                                                    };
                                                    if (g) {
                                                        const e = function(e = [], t = m.minMatchCharLength) {
                                                            let n = [],
                                                                i = -1,
                                                                o = -1,
                                                                s = 0;
                                                            for (let r = e.length; s < r; s += 1) {
                                                                let r = e[s];
                                                                r && -1 === i ? i = s : r || -1 === i || (o = s - 1, o - i + 1 >= t && n.push([i, o]), i = -1)
                                                            }
                                                            return e[s - 1] && s - i >= t && n.push([i, s - 1]), n
                                                        }(v, a);
                                                        e.length ? c && (O.indices = e) : O.isMatch = !1
                                                    }
                                                    return O
                                                }(e, t, d, {
                                                    location: i + f,
                                                    distance: o,
                                                    threshold: s,
                                                    findAllMatches: r,
                                                    minMatchCharLength: a,
                                                    includeMatches: n,
                                                    ignoreLocation: c
                                                });
                                                p && (h = !0), u += g, p && v && (l = [...l, ...v])
                                            }));
                                            let d = {
                                                isMatch: h,
                                                score: h ? u / this.chunks.length : 1
                                            };
                                            return h && n && (d.indices = l), d
                                        }
                                    }
                                    class S {
                                        constructor(e) {
                                            this.pattern = e
                                        }
                                        static isMultiMatch(e) {
                                            return C(e, this.multiRegex)
                                        }
                                        static isSingleMatch(e) {
                                            return C(e, this.singleRegex)
                                        }
                                        search() {}
                                    }

                                    function C(e, t) {
                                        const n = e.match(t);
                                        return n ? n[1] : null
                                    }
                                    class O extends S {
                                        constructor(e, {
                                            location: t = m.location,
                                            threshold: n = m.threshold,
                                            distance: i = m.distance,
                                            includeMatches: o = m.includeMatches,
                                            findAllMatches: s = m.findAllMatches,
                                            minMatchCharLength: r = m.minMatchCharLength,
                                            isCaseSensitive: a = m.isCaseSensitive,
                                            ignoreLocation: c = m.ignoreLocation
                                        } = {}) {
                                            super(e), this._bitapSearch = new w(e, {
                                                location: t,
                                                threshold: n,
                                                distance: i,
                                                includeMatches: o,
                                                findAllMatches: s,
                                                minMatchCharLength: r,
                                                isCaseSensitive: a,
                                                ignoreLocation: c
                                            })
                                        }
                                        static get type() {
                                            return "fuzzy"
                                        }
                                        static get multiRegex() {
                                            return /^"(.*)"$/
                                        }
                                        static get singleRegex() {
                                            return /^(.*)$/
                                        }
                                        search(e) {
                                            return this._bitapSearch.searchIn(e)
                                        }
                                    }
                                    class T extends S {
                                        constructor(e) {
                                            super(e)
                                        }
                                        static get type() {
                                            return "include"
                                        }
                                        static get multiRegex() {
                                            return /^'"(.*)"$/
                                        }
                                        static get singleRegex() {
                                            return /^'(.*)$/
                                        }
                                        search(e) {
                                            let t, n = 0;
                                            const i = [],
                                                o = this.pattern.length;
                                            for (;
                                                (t = e.indexOf(this.pattern, n)) > -1;) n = t + o, i.push([t, n - 1]);
                                            const s = !!i.length;
                                            return {
                                                isMatch: s,
                                                score: s ? 0 : 1,
                                                indices: i
                                            }
                                        }
                                    }
                                    const A = [class extends S {
                                            constructor(e) {
                                                super(e)
                                            }
                                            static get type() {
                                                return "exact"
                                            }
                                            static get multiRegex() {
                                                return /^="(.*)"$/
                                            }
                                            static get singleRegex() {
                                                return /^=(.*)$/
                                            }
                                            search(e) {
                                                const t = e === this.pattern;
                                                return {
                                                    isMatch: t,
                                                    score: t ? 0 : 1,
                                                    indices: [0, this.pattern.length - 1]
                                                }
                                            }
                                        }, T, class extends S {
                                            constructor(e) {
                                                super(e)
                                            }
                                            static get type() {
                                                return "prefix-exact"
                                            }
                                            static get multiRegex() {
                                                return /^\^"(.*)"$/
                                            }
                                            static get singleRegex() {
                                                return /^\^(.*)$/
                                            }
                                            search(e) {
                                                const t = e.startsWith(this.pattern);
                                                return {
                                                    isMatch: t,
                                                    score: t ? 0 : 1,
                                                    indices: [0, this.pattern.length - 1]
                                                }
                                            }
                                        }, class extends S {
                                            constructor(e) {
                                                super(e)
                                            }
                                            static get type() {
                                                return "inverse-prefix-exact"
                                            }
                                            static get multiRegex() {
                                                return /^!\^"(.*)"$/
                                            }
                                            static get singleRegex() {
                                                return /^!\^(.*)$/
                                            }
                                            search(e) {
                                                const t = !e.startsWith(this.pattern);
                                                return {
                                                    isMatch: t,
                                                    score: t ? 0 : 1,
                                                    indices: [0, e.length - 1]
                                                }
                                            }
                                        }, class extends S {
                                            constructor(e) {
                                                super(e)
                                            }
                                            static get type() {
                                                return "inverse-suffix-exact"
                                            }
                                            static get multiRegex() {
                                                return /^!"(.*)"\$$/
                                            }
                                            static get singleRegex() {
                                                return /^!(.*)\$$/
                                            }
                                            search(e) {
                                                const t = !e.endsWith(this.pattern);
                                                return {
                                                    isMatch: t,
                                                    score: t ? 0 : 1,
                                                    indices: [0, e.length - 1]
                                                }
                                            }
                                        }, class extends S {
                                            constructor(e) {
                                                super(e)
                                            }
                                            static get type() {
                                                return "suffix-exact"
                                            }
                                            static get multiRegex() {
                                                return /^"(.*)"\$$/
                                            }
                                            static get singleRegex() {
                                                return /^(.*)\$$/
                                            }
                                            search(e) {
                                                const t = e.endsWith(this.pattern);
                                                return {
                                                    isMatch: t,
                                                    score: t ? 0 : 1,
                                                    indices: [e.length - this.pattern.length, e.length - 1]
                                                }
                                            }
                                        }, class extends S {
                                            constructor(e) {
                                                super(e)
                                            }
                                            static get type() {
                                                return "inverse-exact"
                                            }
                                            static get multiRegex() {
                                                return /^!"(.*)"$/
                                            }
                                            static get singleRegex() {
                                                return /^!(.*)$/
                                            }
                                            search(e) {
                                                const t = -1 === e.indexOf(this.pattern);
                                                return {
                                                    isMatch: t,
                                                    score: t ? 0 : 1,
                                                    indices: [0, e.length - 1]
                                                }
                                            }
                                        }, O],
                                        L = A.length,
                                        x = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,
                                        I = new Set([O.type, T.type]);
                                    const M = [];

                                    function N(e, t) {
                                        for (let n = 0, i = M.length; n < i; n += 1) {
                                            let i = M[n];
                                            if (i.condition(e, t)) return new i(e, t)
                                        }
                                        return new w(e, t)
                                    }
                                    const D = "$and",
                                        P = e => !(!e.$and && !e.$or),
                                        k = e => ({
                                            [D]: Object.keys(e).map((t => ({
                                                [t]: e[t]
                                            })))
                                        });

                                    function j(e, t, {
                                        auto: n = !0
                                    } = {}) {
                                        const s = e => {
                                            let a = Object.keys(e);
                                            const c = (e => !!e.$path)(e);
                                            if (!c && a.length > 1 && !P(e)) return s(k(e));
                                            if ((e => !i(e) && r(e) && !P(e))(e)) {
                                                const i = c ? e.$path : a[0],
                                                    s = c ? e.$val : e[i];
                                                if (!o(s)) throw new Error((e => `Invalid value for key ${e}`)(i));
                                                const r = {
                                                    keyId: p(i),
                                                    pattern: s
                                                };
                                                return n && (r.searcher = N(s, t)), r
                                            }
                                            let l = {
                                                children: [],
                                                operator: a[0]
                                            };
                                            return a.forEach((t => {
                                                const n = e[t];
                                                i(n) && n.forEach((e => {
                                                    l.children.push(s(e))
                                                }))
                                            })), l
                                        };
                                        return P(e) || (e = k(e)), s(e)
                                    }

                                    function B(e, t) {
                                        const n = e.matches;
                                        t.matches = [], a(n) && n.forEach((e => {
                                            if (!a(e.indices) || !e.indices.length) return;
                                            const {
                                                indices: n,
                                                value: i
                                            } = e;
                                            let o = {
                                                indices: n,
                                                value: i
                                            };
                                            e.key && (o.key = e.key.src), e.idx > -1 && (o.refIndex = e.idx), t.matches.push(o)
                                        }))
                                    }

                                    function H(e, t) {
                                        t.score = e.score
                                    }
                                    class R {
                                        constructor(e, t = {}, n) {
                                            this.options = { ...m,
                                                ...t
                                            }, this.options.useExtendedSearch, this._keyStore = new h(this.options.keys), this.setCollection(e, n)
                                        }
                                        setCollection(e, t) {
                                            if (this._docs = e, t && !(t instanceof v)) throw new Error("Incorrect 'index' type");
                                            this._myIndex = t || _(this.options.keys, this._docs, {
                                                getFn: this.options.getFn,
                                                fieldNormWeight: this.options.fieldNormWeight
                                            })
                                        }
                                        add(e) {
                                            a(e) && (this._docs.push(e), this._myIndex.add(e))
                                        }
                                        remove(e = (() => !1)) {
                                            const t = [];
                                            for (let n = 0, i = this._docs.length; n < i; n += 1) {
                                                const o = this._docs[n];
                                                e(o, n) && (this.removeAt(n), n -= 1, i -= 1, t.push(o))
                                            }
                                            return t
                                        }
                                        removeAt(e) {
                                            this._docs.splice(e, 1), this._myIndex.removeAt(e)
                                        }
                                        getIndex() {
                                            return this._myIndex
                                        }
                                        search(e, {
                                            limit: t = -1
                                        } = {}) {
                                            const {
                                                includeMatches: n,
                                                includeScore: i,
                                                shouldSort: r,
                                                sortFn: a,
                                                ignoreFieldNorm: c
                                            } = this.options;
                                            let l = o(e) ? o(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                                            return function(e, {
                                                ignoreFieldNorm: t = m.ignoreFieldNorm
                                            }) {
                                                e.forEach((e => {
                                                    let n = 1;
                                                    e.matches.forEach((({
                                                                            key: e,
                                                                            norm: i,
                                                                            score: o
                                                                        }) => {
                                                        const s = e ? e.weight : null;
                                                        n *= Math.pow(0 === o && s ? Number.EPSILON : o, (s || 1) * (t ? 1 : i))
                                                    })), e.score = n
                                                }))
                                            }(l, {
                                                ignoreFieldNorm: c
                                            }), r && l.sort(a), s(t) && t > -1 && (l = l.slice(0, t)),
                                                function(e, t, {
                                                    includeMatches: n = m.includeMatches,
                                                    includeScore: i = m.includeScore
                                                } = {}) {
                                                    const o = [];
                                                    return n && o.push(B), i && o.push(H), e.map((e => {
                                                        const {
                                                            idx: n
                                                        } = e, i = {
                                                            item: t[n],
                                                            refIndex: n
                                                        };
                                                        return o.length && o.forEach((t => {
                                                            t(e, i)
                                                        })), i
                                                    }))
                                                }(l, this._docs, {
                                                    includeMatches: n,
                                                    includeScore: i
                                                })
                                        }
                                        _searchStringList(e) {
                                            const t = N(e, this.options),
                                                {
                                                    records: n
                                                } = this._myIndex,
                                                i = [];
                                            return n.forEach((({
                                                                   v: e,
                                                                   i: n,
                                                                   n: o
                                                               }) => {
                                                if (!a(e)) return;
                                                const {
                                                    isMatch: s,
                                                    score: r,
                                                    indices: c
                                                } = t.searchIn(e);
                                                s && i.push({
                                                    item: e,
                                                    idx: n,
                                                    matches: [{
                                                        score: r,
                                                        value: e,
                                                        norm: o,
                                                        indices: c
                                                    }]
                                                })
                                            })), i
                                        }
                                        _searchLogical(e) {
                                            const t = j(e, this.options),
                                                n = (e, t, i) => {
                                                    if (!e.children) {
                                                        const {
                                                            keyId: n,
                                                            searcher: o
                                                        } = e, s = this._findMatches({
                                                            key: this._keyStore.get(n),
                                                            value: this._myIndex.getValueForItemAtKeyId(t, n),
                                                            searcher: o
                                                        });
                                                        return s && s.length ? [{
                                                            idx: i,
                                                            item: t,
                                                            matches: s
                                                        }] : []
                                                    }
                                                    const o = [];
                                                    for (let s = 0, r = e.children.length; s < r; s += 1) {
                                                        const r = e.children[s],
                                                            a = n(r, t, i);
                                                        if (a.length) o.push(...a);
                                                        else if (e.operator === D) return []
                                                    }
                                                    return o
                                                },
                                                i = this._myIndex.records,
                                                o = {},
                                                s = [];
                                            return i.forEach((({
                                                                   $: e,
                                                                   i: i
                                                               }) => {
                                                if (a(e)) {
                                                    let r = n(t, e, i);
                                                    r.length && (o[i] || (o[i] = {
                                                        idx: i,
                                                        item: e,
                                                        matches: []
                                                    }, s.push(o[i])), r.forEach((({
                                                                                      matches: e
                                                                                  }) => {
                                                        o[i].matches.push(...e)
                                                    })))
                                                }
                                            })), s
                                        }
                                        _searchObjectList(e) {
                                            const t = N(e, this.options),
                                                {
                                                    keys: n,
                                                    records: i
                                                } = this._myIndex,
                                                o = [];
                                            return i.forEach((({
                                                                   $: e,
                                                                   i: i
                                                               }) => {
                                                if (!a(e)) return;
                                                let s = [];
                                                n.forEach(((n, i) => {
                                                    s.push(...this._findMatches({
                                                        key: n,
                                                        value: e[i],
                                                        searcher: t
                                                    }))
                                                })), s.length && o.push({
                                                    idx: i,
                                                    item: e,
                                                    matches: s
                                                })
                                            })), o
                                        }
                                        _findMatches({
                                                         key: e,
                                                         value: t,
                                                         searcher: n
                                                     }) {
                                            if (!a(t)) return [];
                                            let o = [];
                                            if (i(t)) t.forEach((({
                                                                      v: t,
                                                                      i: i,
                                                                      n: s
                                                                  }) => {
                                                if (!a(t)) return;
                                                const {
                                                    isMatch: r,
                                                    score: c,
                                                    indices: l
                                                } = n.searchIn(t);
                                                r && o.push({
                                                    score: c,
                                                    key: e,
                                                    value: t,
                                                    idx: i,
                                                    norm: s,
                                                    indices: l
                                                })
                                            }));
                                            else {
                                                const {
                                                    v: i,
                                                    n: s
                                                } = t, {
                                                    isMatch: r,
                                                    score: a,
                                                    indices: c
                                                } = n.searchIn(i);
                                                r && o.push({
                                                    score: a,
                                                    key: e,
                                                    value: i,
                                                    norm: s,
                                                    indices: c
                                                })
                                            }
                                            return o
                                        }
                                    }
                                    R.version = "6.5.3", R.createIndex = _, R.parseIndex = function(e, {
                                        getFn: t = m.getFn,
                                        fieldNormWeight: n = m.fieldNormWeight
                                    } = {}) {
                                        const {
                                            keys: i,
                                            records: o
                                        } = e, s = new v({
                                            getFn: t,
                                            fieldNormWeight: n
                                        });
                                        return s.setKeys(i), s.setIndexRecords(o), s
                                    }, R.config = m, R.parseQuery = j,
                                        function(...e) {
                                            M.push(...e)
                                        }(class {
                                            constructor(e, {
                                                isCaseSensitive: t = m.isCaseSensitive,
                                                includeMatches: n = m.includeMatches,
                                                minMatchCharLength: i = m.minMatchCharLength,
                                                ignoreLocation: o = m.ignoreLocation,
                                                findAllMatches: s = m.findAllMatches,
                                                location: r = m.location,
                                                threshold: a = m.threshold,
                                                distance: c = m.distance
                                            } = {}) {
                                                this.query = null, this.options = {
                                                    isCaseSensitive: t,
                                                    includeMatches: n,
                                                    minMatchCharLength: i,
                                                    findAllMatches: s,
                                                    ignoreLocation: o,
                                                    location: r,
                                                    threshold: a,
                                                    distance: c
                                                }, this.pattern = t ? e : e.toLowerCase(), this.query = function(e, t = {}) {
                                                    return e.split("|").map((e => {
                                                        let n = e.trim().split(x).filter((e => e && !!e.trim())),
                                                            i = [];
                                                        for (let e = 0, o = n.length; e < o; e += 1) {
                                                            const o = n[e];
                                                            let s = !1,
                                                                r = -1;
                                                            for (; !s && ++r < L;) {
                                                                const e = A[r];
                                                                let n = e.isMultiMatch(o);
                                                                n && (i.push(new e(n, t)), s = !0)
                                                            }
                                                            if (!s)
                                                                for (r = -1; ++r < L;) {
                                                                    const e = A[r];
                                                                    let n = e.isSingleMatch(o);
                                                                    if (n) {
                                                                        i.push(new e(n, t));
                                                                        break
                                                                    }
                                                                }
                                                        }
                                                        return i
                                                    }))
                                                }(this.pattern, this.options)
                                            }
                                            static condition(e, t) {
                                                return t.useExtendedSearch
                                            }
                                            searchIn(e) {
                                                const t = this.query;
                                                if (!t) return {
                                                    isMatch: !1,
                                                    score: 1
                                                };
                                                const {
                                                    includeMatches: n,
                                                    isCaseSensitive: i
                                                } = this.options;
                                                e = i ? e : e.toLowerCase();
                                                let o = 0,
                                                    s = [],
                                                    r = 0;
                                                for (let i = 0, a = t.length; i < a; i += 1) {
                                                    const a = t[i];
                                                    s.length = 0, o = 0;
                                                    for (let t = 0, i = a.length; t < i; t += 1) {
                                                        const i = a[t],
                                                            {
                                                                isMatch: c,
                                                                indices: l,
                                                                score: u
                                                            } = i.search(e);
                                                        if (!c) {
                                                            r = 0, o = 0, s.length = 0;
                                                            break
                                                        }
                                                        if (o += 1, r += u, n) {
                                                            const e = i.constructor.type;
                                                            I.has(e) ? s = [...s, ...l] : s.push(l)
                                                        }
                                                    }
                                                    if (o) {
                                                        let e = {
                                                            isMatch: !0,
                                                            score: r / o
                                                        };
                                                        return n && (e.indices = s), e
                                                    }
                                                }
                                                return {
                                                    isMatch: !1,
                                                    score: 1
                                                }
                                            }
                                        })
                                },
                                857: function(e, t, n) {
                                    function i(e, t, n) {
                                        return t in e ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = n, e
                                    }

                                    function o(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            t && (i = i.filter((function(t) {
                                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                                            }))), n.push.apply(n, i)
                                        }
                                        return n
                                    }

                                    function s(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                                i(e, t, n[t])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            }))
                                        }
                                        return e
                                    }

                                    function r(e) {
                                        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
                                    }
                                    n.r(t), n.d(t, {
                                        __DO_NOT_USE__ActionTypes: function() {
                                            return l
                                        },
                                        applyMiddleware: function() {
                                            return g
                                        },
                                        bindActionCreators: function() {
                                            return p
                                        },
                                        combineReducers: function() {
                                            return d
                                        },
                                        compose: function() {
                                            return m
                                        },
                                        createStore: function() {
                                            return h
                                        }
                                    });
                                    var a = "function" == typeof Symbol && Symbol.observable || "@@observable",
                                        c = function() {
                                            return Math.random().toString(36).substring(7).split("").join(".")
                                        },
                                        l = {
                                            INIT: "@@redux/INIT" + c(),
                                            REPLACE: "@@redux/REPLACE" + c(),
                                            PROBE_UNKNOWN_ACTION: function() {
                                                return "@@redux/PROBE_UNKNOWN_ACTION" + c()
                                            }
                                        };

                                    function u(e) {
                                        if ("object" != typeof e || null === e) return !1;
                                        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                                        return Object.getPrototypeOf(e) === t
                                    }

                                    function h(e, t, n) {
                                        var i;
                                        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(r(0));
                                        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                                            if ("function" != typeof n) throw new Error(r(1));
                                            return n(h)(e, t)
                                        }
                                        if ("function" != typeof e) throw new Error(r(2));
                                        var o = e,
                                            s = t,
                                            c = [],
                                            d = c,
                                            f = !1;

                                        function p() {
                                            d === c && (d = c.slice())
                                        }

                                        function m() {
                                            if (f) throw new Error(r(3));
                                            return s
                                        }

                                        function g(e) {
                                            if ("function" != typeof e) throw new Error(r(4));
                                            if (f) throw new Error(r(5));
                                            var t = !0;
                                            return p(), d.push(e),
                                                function() {
                                                    if (t) {
                                                        if (f) throw new Error(r(6));
                                                        t = !1, p();
                                                        var n = d.indexOf(e);
                                                        d.splice(n, 1), c = null
                                                    }
                                                }
                                        }

                                        function v(e) {
                                            if (!u(e)) throw new Error(r(7));
                                            if (void 0 === e.type) throw new Error(r(8));
                                            if (f) throw new Error(r(9));
                                            try {
                                                f = !0, s = o(s, e)
                                            } finally {
                                                f = !1
                                            }
                                            for (var t = c = d, n = 0; n < t.length; n++)(0, t[n])();
                                            return e
                                        }

                                        function _(e) {
                                            if ("function" != typeof e) throw new Error(r(10));
                                            o = e, v({
                                                type: l.REPLACE
                                            })
                                        }

                                        function y() {
                                            var e, t = g;
                                            return (e = {
                                                subscribe: function(e) {
                                                    if ("object" != typeof e || null === e) throw new Error(r(11));

                                                    function n() {
                                                        e.next && e.next(m())
                                                    }
                                                    return n(), {
                                                        unsubscribe: t(n)
                                                    }
                                                }
                                            })[a] = function() {
                                                return this
                                            }, e
                                        }
                                        return v({
                                            type: l.INIT
                                        }), (i = {
                                            dispatch: v,
                                            subscribe: g,
                                            getState: m,
                                            replaceReducer: _
                                        })[a] = y, i
                                    }

                                    function d(e) {
                                        for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
                                            var o = t[i];
                                            "function" == typeof e[o] && (n[o] = e[o])
                                        }
                                        var s, a = Object.keys(n);
                                        try {
                                            ! function(e) {
                                                Object.keys(e).forEach((function(t) {
                                                    var n = e[t];
                                                    if (void 0 === n(void 0, {
                                                        type: l.INIT
                                                    })) throw new Error(r(12));
                                                    if (void 0 === n(void 0, {
                                                        type: l.PROBE_UNKNOWN_ACTION()
                                                    })) throw new Error(r(13))
                                                }))
                                            }(n)
                                        } catch (e) {
                                            s = e
                                        }
                                        return function(e, t) {
                                            if (void 0 === e && (e = {}), s) throw s;
                                            for (var i = !1, o = {}, c = 0; c < a.length; c++) {
                                                var l = a[c],
                                                    u = n[l],
                                                    h = e[l],
                                                    d = u(h, t);
                                                if (void 0 === d) throw t && t.type, new Error(r(14));
                                                o[l] = d, i = i || d !== h
                                            }
                                            return (i = i || a.length !== Object.keys(e).length) ? o : e
                                        }
                                    }

                                    function f(e, t) {
                                        return function() {
                                            return t(e.apply(this, arguments))
                                        }
                                    }

                                    function p(e, t) {
                                        if ("function" == typeof e) return f(e, t);
                                        if ("object" != typeof e || null === e) throw new Error(r(16));
                                        var n = {};
                                        for (var i in e) {
                                            var o = e[i];
                                            "function" == typeof o && (n[i] = f(o, t))
                                        }
                                        return n
                                    }

                                    function m() {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        return 0 === t.length ? function(e) {
                                            return e
                                        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                                            return function() {
                                                return e(t.apply(void 0, arguments))
                                            }
                                        }))
                                    }

                                    function g() {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        return function(e) {
                                            return function() {
                                                var n = e.apply(void 0, arguments),
                                                    i = function() {
                                                        throw new Error(r(15))
                                                    },
                                                    o = {
                                                        getState: n.getState,
                                                        dispatch: function() {
                                                            return i.apply(void 0, arguments)
                                                        }
                                                    },
                                                    a = t.map((function(e) {
                                                        return e(o)
                                                    }));
                                                return i = m.apply(void 0, a)(n.dispatch), s(s({}, n), {}, {
                                                    dispatch: i
                                                })
                                            }
                                        }
                                    }
                                }
                            },
                            t = {};

                        function n(i) {
                            var o = t[i];
                            if (void 0 !== o) return o.exports;
                            var s = t[i] = {
                                exports: {}
                            };
                            return e[i].call(s.exports, s, s.exports, n), s.exports
                        }
                        n.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return n.d(t, {
                                a: t
                            }), t
                        }, n.d = function(e, t) {
                            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                                enumerable: !0,
                                get: t[i]
                            })
                        }, n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        };
                        var i, o, s = {};
                        return i = n(373), o = n.n(i), n(187), n(883), n(789), n(686), s.default = o(), s.default
                    }()
                }, e.exports = t()
            },
            18: function(e, t) {
                var n, i;
                void 0 === (i = "function" == typeof(n = function() {
                    "use strict";
                    var e = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

                    function t(e) {
                        return e.split("").reverse().join("")
                    }

                    function n(e, t) {
                        return e.substring(0, t.length) === t
                    }

                    function i(e, t, n) {
                        if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
                    }

                    function o(e) {
                        return "number" == typeof e && isFinite(e)
                    }

                    function s(e, n, i, s, r, a, c, l, u, h, d, f) {
                        var p, m, g, v, _, y = f,
                            b = "",
                            E = "";
                        return a && (f = a(f)), !!o(f) && (!1 !== e && 0 === parseFloat(f.toFixed(e)) && (f = 0), f < 0 && (p = !0, f = Math.abs(f)), !1 !== e && (_ = e, v = (v = f).toString().split("e"), f = (+((v = (v = Math.round(+(v[0] + "e" + (v[1] ? +v[1] + _ : _)))).toString().split("e"))[0] + "e" + (v[1] ? +v[1] - _ : -_))).toFixed(_)), -1 !== (f = f.toString()).indexOf(".") ? (g = (m = f.split("."))[0], i && (b = i + m[1])) : g = f, n && (g = t(g).match(/.{1,3}/g), g = t(g.join(t(n)))), p && l && (E += l), s && (E += s), p && u && (E += u), E += g, E += b, r && (E += r), h && (E = h(E, y)), E)
                    }

                    function r(e, t, i, s, r, a, c, l, u, h, d, f) {
                        var p, m = "";
                        return d && (f = d(f)), !(!f || "string" != typeof f) && (l && n(f, l) && (f = f.replace(l, ""), p = !0), s && n(f, s) && (f = f.replace(s, "")), u && n(f, u) && (f = f.replace(u, ""), p = !0), r && function(e, t) {
                            return e.slice(-1 * t.length) === t
                        }(f, r) && (f = f.slice(0, -1 * r.length)), t && (f = f.split(t).join("")), i && (f = f.replace(i, ".")), p && (m += "-"), "" !== (m = (m += f).replace(/[^0-9\.\-.]/g, "")) && (m = Number(m), c && (m = c(m)), !!o(m) && m))
                    }

                    function a(t, n, i) {
                        var o, s = [];
                        for (o = 0; o < e.length; o += 1) s.push(t[e[o]]);
                        return s.push(i), n.apply("", s)
                    }
                    return function t(n) {
                        if (!(this instanceof t)) return new t(n);
                        "object" == typeof n && (n = function(t) {
                            var n, o, s, r = {};
                            for (void 0 === t.suffix && (t.suffix = t.postfix), n = 0; n < e.length; n += 1)
                                if (void 0 === (s = t[o = e[n]])) "negative" !== o || r.negativeBefore ? "mark" === o && "." !== r.thousand ? r[o] = "." : r[o] = !1 : r[o] = "-";
                                else if ("decimals" === o) {
                                    if (!(s >= 0 && s < 8)) throw new Error(o);
                                    r[o] = s
                                } else if ("encoder" === o || "decoder" === o || "edit" === o || "undo" === o) {
                                    if ("function" != typeof s) throw new Error(o);
                                    r[o] = s
                                } else {
                                    if ("string" != typeof s) throw new Error(o);
                                    r[o] = s
                                }
                            return i(r, "mark", "thousand"), i(r, "prefix", "negative"), i(r, "prefix", "negativeBefore"), r
                        }(n), this.to = function(e) {
                            return a(n, s, e)
                        }, this.from = function(e) {
                            return a(n, r, e)
                        })
                    }
                }) ? n.apply(t, []) : n) || (e.exports = i)
            }
        },
        t = {};


    function n(i) {
        var o = t[i];
        if (void 0 !== o) return o.exports;
        var s = t[i] = {
            exports: {}
        };
        return e[i](s, s.exports, n), s.exports
    }
    n.d = function(e, t) {
        for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
        function() {
            "use strict";
            var e = {};
            n.r(e), n.d(e, {
                afterMain: function() {
                    return se
                },
                afterRead: function() {
                    return ne
                },
                afterWrite: function() {
                    return ce
                },
                applyStyles: function() {
                    return me
                },
                arrow: function() {
                    return De
                },
                auto: function() {
                    return Y
                },
                basePlacements: function() {
                    return V
                },
                beforeMain: function() {
                    return ie
                },
                beforeRead: function() {
                    return ee
                },
                beforeWrite: function() {
                    return re
                },
                bottom: function() {
                    return q
                },
                clippingParents: function() {
                    return U
                },
                computeStyles: function() {
                    return Be
                },
                createPopper: function() {
                    return dt
                },
                createPopperBase: function() {
                    return ht
                },
                createPopperLite: function() {
                    return ft
                },
                detectOverflow: function() {
                    return Je
                },
                end: function() {
                    return z
                },
                eventListeners: function() {
                    return Re
                },
                flip: function() {
                    return Ze
                },
                hide: function() {
                    return nt
                },
                left: function() {
                    return K
                },
                main: function() {
                    return oe
                },
                modifierPhases: function() {
                    return le
                },
                offset: function() {
                    return it
                },
                placements: function() {
                    return Z
                },
                popper: function() {
                    return X
                },
                popperGenerator: function() {
                    return ut
                },
                popperOffsets: function() {
                    return ot
                },
                preventOverflow: function() {
                    return st
                },
                read: function() {
                    return te
                },
                reference: function() {
                    return Q
                },
                right: function() {
                    return W
                },
                start: function() {
                    return $
                },
                top: function() {
                    return F
                },
                variationPlacements: function() {
                    return J
                },
                viewport: function() {
                    return G
                },
                write: function() {
                    return ae
                }
            });
            var t = window,
                i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                    return setTimeout(e, 16)
                },
                o = window,
                s = o.cancelAnimationFrame || o.mozCancelAnimationFrame || function(e) {
                    clearTimeout(e)
                };

            function r() {
                for (var e, t, n, i = arguments[0] || {}, o = 1, s = arguments.length; o < s; o++)
                    if (null !== (e = arguments[o]))
                        for (t in e) i !== (n = e[t]) && void 0 !== n && (i[t] = n);
                return i
            }

            function a(e) {
                return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e
            }

            function c(e, t, n, i) {
                if (i) try {
                    e.setItem(t, n)
                } catch (e) {}
                return n
            }

            function l() {
                var e = document,
                    t = e.body;
                return t || ((t = e.createElement("body")).fake = !0), t
            }
            var u = document.documentElement;

            function h(e) {
                var t = "";
                return e.fake && (t = u.style.overflow, e.style.background = "", e.style.overflow = u.style.overflow = "hidden", u.appendChild(e)), t
            }

            function d(e, t) {
                e.fake && (e.remove(), u.style.overflow = t, u.offsetHeight)
            }

            function f(e, t, n, i) {
                "insertRule" in e ? e.insertRule(t + "{" + n + "}", i) : e.addRule(t, n, i)
            }

            function p(e) {
                return ("insertRule" in e ? e.cssRules : e.rules).length
            }

            function m(e, t, n) {
                for (var i = 0, o = e.length; i < o; i++) t.call(n, e[i], i)
            }
            var g = "classList" in document.createElement("_"),
                v = g ? function(e, t) {
                    return e.classList.contains(t)
                } : function(e, t) {
                    return e.className.indexOf(t) >= 0
                },
                _ = g ? function(e, t) {
                    v(e, t) || e.classList.add(t)
                } : function(e, t) {
                    v(e, t) || (e.className += " " + t)
                },
                y = g ? function(e, t) {
                    v(e, t) && e.classList.remove(t)
                } : function(e, t) {
                    v(e, t) && (e.className = e.className.replace(t, ""))
                };

            function b(e, t) {
                return e.hasAttribute(t)
            }

            function E(e, t) {
                return e.getAttribute(t)
            }

            function w(e) {
                return void 0 !== e.item
            }

            function S(e, t) {
                if (e = w(e) || e instanceof Array ? e : [e], "[object Object]" === Object.prototype.toString.call(t))
                    for (var n = e.length; n--;)
                        for (var i in t) e[n].setAttribute(i, t[i])
            }

            function C(e, t) {
                e = w(e) || e instanceof Array ? e : [e];
                for (var n = (t = t instanceof Array ? t : [t]).length, i = e.length; i--;)
                    for (var o = n; o--;) e[i].removeAttribute(t[o])
            }

            function O(e) {
                for (var t = [], n = 0, i = e.length; n < i; n++) t.push(e[n]);
                return t
            }

            function T(e, t) {
                "none" !== e.style.display && (e.style.display = "none")
            }

            function A(e, t) {
                "none" === e.style.display && (e.style.display = "")
            }

            function L(e) {
                return "none" !== window.getComputedStyle(e).display
            }

            function x(e) {
                if ("string" == typeof e) {
                    var t = [e],
                        n = e.charAt(0).toUpperCase() + e.substr(1);
                    ["Webkit", "Moz", "ms", "O"].forEach((function(i) {
                        "ms" === i && "transform" !== e || t.push(i + n)
                    })), e = t
                }
                for (var i = document.createElement("fakeelement"), o = (e.length, 0); o < e.length; o++) {
                    var s = e[o];
                    if (void 0 !== i.style[s]) return s
                }
                return !1
            }

            function I(e, t) {
                var n = !1;
                return /^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end"), n
            }
            var M = !1;
            try {
                var N = Object.defineProperty({}, "passive", {
                    get: function() {
                        M = !0
                    }
                });
                window.addEventListener("test", null, N)
            } catch (e) {}
            var D = !!M && {
                passive: !0
            };

            function P(e, t, n) {
                for (var i in t) {
                    var o = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && D;
                    e.addEventListener(i, t[i], o)
                }
            }

            function k(e, t) {
                for (var n in t) {
                    var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && D;
                    e.removeEventListener(n, t[n], i)
                }
            }

            function j() {
                return {
                    topics: {},
                    on: function(e, t) {
                        this.topics[e] = this.topics[e] || [], this.topics[e].push(t)
                    },
                    off: function(e, t) {
                        if (this.topics[e])
                            for (var n = 0; n < this.topics[e].length; n++)
                                if (this.topics[e][n] === t) {
                                    this.topics[e].splice(n, 1);
                                    break
                                }
                    },
                    emit: function(e, t) {
                        t.type = e, this.topics[e] && this.topics[e].forEach((function(n) {
                            n(t, e)
                        }))
                    }
                }
            }
            Object.keys || (Object.keys = function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }), "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            });

            var B = function(e) {
                    e = r({
                        container: ".slider-main",
                        mode: "carousel",
                        axis: "horizontal",
                        items: 1,
                        gutter: 0,
                        edgePadding: 0,
                        fixedWidth: !1,
                        autoWidth: !1,
                        viewportMax: !1,
                        slideBy: 1,
                        center: !1,
                        controls: !0,
                        controlsPosition: "top",
                        controlsText: ["prev", "next"],
                        controlsContainer: !1,
                        prevButton: !1,
                        nextButton: !1,
                        nav: !0,
                        navPosition: "top",
                        navContainer: !1,
                        navAsThumbnails: !1,
                        arrowKeys: !1,
                        speed: 300,
                        autoplay: !1,
                        autoplayPosition: "top",
                        autoplayTimeout: 5e3,
                        autoplayDirection: "forward",
                        autoplayText: ["start", "stop"],
                        autoplayHoverPause: !1,
                        autoplayButton: !1,
                        autoplayButtonOutput: !0,
                        autoplayResetOnVisibility: !0,
                        animateIn: "tns-fadeIn",
                        animateOut: "tns-fadeOut",
                        animateNormal: "tns-normal",
                        animateDelay: !1,
                        loop: !0,
                        rewind: !1,
                        autoHeight: !1,
                        responsive: !1,
                        lazyload: !1,
                        lazyloadSelector: ".tns-lazy-img",
                        touch: !0,
                        mouseDrag: !1,
                        swipeAngle: 15,
                        nested: !1,
                        preventActionWhenRunning: !1,
                        preventScrollOnTouch: !1,
                        freezable: !0,
                        onInit: !1,
                        useLocalStorage: !0,
                        nonce: !1
                    }, e || {});
                    var t = document,
                        n = window,
                        o = {
                            ENTER: 13,
                            SPACE: 32,
                            LEFT: 37,
                            RIGHT: 39
                        },
                        u = {},
                        g = e.useLocalStorage;
                    if (g) {
                        var w = navigator.userAgent,
                            M = new Date;
                        try {
                            (u = n.localStorage) ? (u.setItem(M, M), g = u.getItem(M) == M, u.removeItem(M)) : g = !1, g || (u = {})
                        } catch (e) {
                            g = !1
                        }
                        g && (u.tnsApp && u.tnsApp !== w && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(e) {
                            u.removeItem(e)
                        })), localStorage.tnsApp = w)
                    }
                    var N = u.tC ? a(u.tC) : c(u, "tC", function() {
                            var e = document,
                                t = l(),
                                n = h(t),
                                i = e.createElement("div"),
                                o = !1;
                            t.appendChild(i);
                            try {
                                for (var s, r = "(10px * 10)", a = ["calc" + r, "-moz-calc" + r, "-webkit-calc" + r], c = 0; c < 3; c++)
                                    if (s = a[c], i.style.width = s, 100 === i.offsetWidth) {
                                        o = s.replace(r, "");
                                        break
                                    }
                            } catch (e) {}
                            return t.fake ? d(t, n) : i.remove(), o
                        }(), g),
                        D = u.tPL ? a(u.tPL) : c(u, "tPL", function() {
                            var e, t = document,
                                n = l(),
                                i = h(n),
                                o = t.createElement("div"),
                                s = t.createElement("div"),
                                r = "";
                            o.className = "tns-t-subp2", s.className = "tns-t-ct";
                            for (var a = 0; a < 70; a++) r += "<div></div>";
                            return s.innerHTML = r, o.appendChild(s), n.appendChild(o), e = Math.abs(o.getBoundingClientRect().left - s.children[67].getBoundingClientRect().left) < 2, n.fake ? d(n, i) : o.remove(), e
                        }(), g),
                        H = u.tMQ ? a(u.tMQ) : c(u, "tMQ", function() {
                            if (window.matchMedia || window.msMatchMedia) return !0;
                            var e, t = document,
                                n = l(),
                                i = h(n),
                                o = t.createElement("div"),
                                s = t.createElement("style"),
                                r = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                            return s.type = "text/css", o.className = "tns-mq-test", n.appendChild(s), n.appendChild(o), s.styleSheet ? s.styleSheet.cssText = r : s.appendChild(t.createTextNode(r)), e = window.getComputedStyle ? window.getComputedStyle(o).position : o.currentStyle.position, n.fake ? d(n, i) : o.remove(), "absolute" === e
                        }(), g),
                        R = u.tTf ? a(u.tTf) : c(u, "tTf", x("transform"), g),
                        F = u.t3D ? a(u.t3D) : c(u, "t3D", function(e) {
                            if (!e) return !1;
                            if (!window.getComputedStyle) return !1;
                            var t, n = document,
                                i = l(),
                                o = h(i),
                                s = n.createElement("p"),
                                r = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
                            return r += "transform", i.insertBefore(s, null), s.style[e] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(s).getPropertyValue(r), i.fake ? d(i, o) : s.remove(), void 0 !== t && t.length > 0 && "none" !== t
                        }(R), g),
                        q = u.tTDu ? a(u.tTDu) : c(u, "tTDu", x("transitionDuration"), g),
                        W = u.tTDe ? a(u.tTDe) : c(u, "tTDe", x("transitionDelay"), g),
                        K = u.tADu ? a(u.tADu) : c(u, "tADu", x("animationDuration"), g),
                        Y = u.tADe ? a(u.tADe) : c(u, "tADe", x("animationDelay"), g),
                        V = u.tTE ? a(u.tTE) : c(u, "tTE", I(q, "Transition"), g),
                        $ = u.tAE ? a(u.tAE) : c(u, "tAE", I(K, "Animation"), g),
                        z = n.console && "function" == typeof n.console.warn,
                        U = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
                        G = {};
                    if (U.forEach((function(n) {
                        if ("string" == typeof e[n]) {
                            var i = e[n],
                                o = t.querySelector(i);
                            if (G[n] = i, !o || !o.nodeName) return void(z && console.warn("Can't find", e[n]));
                            e[n] = o
                        }
                    })), !(e.container.children.length < 1)) {
                        var X = e.responsive,
                            Q = e.nested,
                            J = "carousel" === e.mode;
                        if (X) {
                            0 in X && (e = r(e, X[0]), delete X[0]);
                            var Z = {};
                            for (var ee in X) {
                                var te = X[ee];
                                te = "number" == typeof te ? {
                                    items: te
                                } : te, Z[ee] = te
                            }
                            X = Z, Z = null
                        }
                        if (J || function e(t) {
                            for (var n in t) J || ("slideBy" === n && (t[n] = "page"), "edgePadding" === n && (t[n] = !1), "autoHeight" === n && (t[n] = !1)), "responsive" === n && e(t[n])
                        }(e), !J) {
                            e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;
                            var ne = e.animateIn,
                                ie = e.animateOut,
                                oe = e.animateDelay,
                                se = e.animateNormal
                        }
                        var re, ae, ce = "horizontal" === e.axis,
                            le = t.createElement("div"),
                            ue = t.createElement("div"),
                            he = e.container,
                            de = he.parentNode,
                            fe = he.outerHTML,
                            pe = he.children,
                            me = pe.length,
                            ge = Nn(),
                            ve = !1;
                        X && Zn(), J && (he.className += " tns-vpfix");
                        var _e, ye, be, Ee, we, Se, Ce, Oe, Te = e.autoWidth,
                            Ae = Bn("fixedWidth"),
                            Le = Bn("edgePadding"),
                            xe = Bn("gutter"),
                            Ie = kn(),
                            Me = Bn("center"),
                            Ne = Te ? 1 : Math.floor(Bn("items")),
                            De = Bn("slideBy"),
                            Pe = e.viewportMax || e.fixedWidthViewportWidth,
                            ke = Bn("arrowKeys"),
                            je = Bn("speed"),
                            Be = e.rewind,
                            He = !Be && e.loop,
                            Re = Bn("autoHeight"),
                            Fe = Bn("controls"),
                            qe = Bn("controlsText"),
                            We = Bn("nav"),
                            Ke = Bn("touch"),
                            Ye = Bn("mouseDrag"),
                            Ve = Bn("autoplay"),
                            $e = Bn("autoplayTimeout"),
                            ze = Bn("autoplayText"),
                            Ue = Bn("autoplayHoverPause"),
                            Ge = Bn("autoplayResetOnVisibility"),
                            Xe = (null, Ce = Bn("nonce"), Oe = document.createElement("style"), Ce && Oe.setAttribute("nonce", Ce), document.querySelector("head").appendChild(Oe), Oe.sheet ? Oe.sheet : Oe.styleSheet),
                            Qe = e.lazyload,
                            Je = e.lazyloadSelector,
                            Ze = [],
                            et = He ? (we = function() {
                                if (Te || Ae && !Pe) return me - 1;
                                var t = Ae ? "fixedWidth" : "items",
                                    n = [];
                                if ((Ae || e[t] < me) && n.push(e[t]), X)
                                    for (var i in X) {
                                        var o = X[i][t];
                                        o && (Ae || o < me) && n.push(o)
                                    }
                                return n.length || n.push(0), Math.ceil(Ae ? Pe / Math.min.apply(null, n) : Math.max.apply(null, n))
                            }(), Se = J ? Math.ceil((5 * we - me) / 2) : 4 * we - me, Se = Math.max(we, Se), jn("edgePadding") ? Se + 1 : Se) : 0,
                            tt = J ? me + 2 * et : me + et,
                            nt = !(!Ae && !Te || He),
                            it = Ae ? Oi() : null,
                            ot = !J || !He,
                            st = ce ? "left" : "top",
                            rt = "",
                            at = "",
                            ct = Ae ? function() {
                                return Me && !He ? me - 1 : Math.ceil(-it / (Ae + xe))
                            } : Te ? function() {
                                for (var e = 0; e < tt; e++)
                                    if (_e[e] >= -it) return e
                            } : function() {
                                return Me && J && !He ? me - 1 : He || J ? Math.max(0, tt - Math.ceil(Ne)) : tt - 1
                            },
                            lt = xn(Bn("startIndex")),
                            ut = lt,
                            ht = (Ln(), 0),
                            dt = Te ? null : ct(),
                            ft = e.preventActionWhenRunning,
                            pt = e.swipeAngle,
                            mt = !pt || "?",
                            gt = !1,
                            vt = e.onInit,
                            _t = new j,
                            yt = " tns-slider tns-" + e.mode,
                            bt = he.id || (Ee = window.tnsId, window.tnsId = Ee ? Ee + 1 : 1, "tns" + window.tnsId),
                            Et = Bn("disable"),
                            wt = !1,
                            St = e.freezable,
                            Ct = !(!St || Te) && Jn(),
                            Ot = !1,
                            Tt = {
                                click: Pi,
                                keydown: function(e) {
                                    e = Wi(e);
                                    var t = [o.LEFT, o.RIGHT].indexOf(e.keyCode);
                                    t >= 0 && (0 === t ? Ut.disabled || Pi(e, -1) : Gt.disabled || Pi(e, 1))
                                }
                            },
                            At = {
                                click: function(e) {
                                    if (gt) {
                                        if (ft) return;
                                        Ni()
                                    }
                                    for (var t = Ki(e = Wi(e)); t !== Zt && !b(t, "data-nav");) t = t.parentNode;
                                    if (b(t, "data-nav")) {
                                        var n = on = Number(E(t, "data-nav")),
                                            i = Ae || Te ? n * me / tn : n * Ne;
                                        Di(kt ? n : Math.min(Math.ceil(i), me - 1), e), sn === n && (hn && Ri(), on = -1)
                                    }
                                },
                                keydown: function(e) {
                                    e = Wi(e);
                                    var n = t.activeElement;
                                    if (b(n, "data-nav")) {
                                        var i = [o.LEFT, o.RIGHT, o.ENTER, o.SPACE].indexOf(e.keyCode),
                                            s = Number(E(n, "data-nav"));
                                        i >= 0 && (0 === i ? s > 0 && qi(Jt[s - 1]) : 1 === i ? s < tn - 1 && qi(Jt[s + 1]) : (on = s, Di(s, e)))
                                    }
                                }
                            },
                            Lt = {
                                mouseover: function() {
                                    hn && (ji(), dn = !0)
                                },
                                mouseout: function() {
                                    dn && (ki(), dn = !1)
                                }
                            },
                            xt = {
                                visibilitychange: function() {
                                    t.hidden ? hn && (ji(), pn = !0) : pn && (ki(), pn = !1)
                                }
                            },
                            It = {
                                keydown: function(e) {
                                    e = Wi(e);
                                    var t = [o.LEFT, o.RIGHT].indexOf(e.keyCode);
                                    t >= 0 && Pi(e, 0 === t ? -1 : 1)
                                }
                            },
                            Mt = {
                                touchstart: zi,
                                touchmove: Ui,
                                touchend: Xi,
                                touchcancel: Xi
                            },
                            Nt = {
                                mousedown: zi,
                                mousemove: Ui,
                                mouseup: Xi,
                                mouseleave: Xi
                            },
                            Dt = jn("controls"),
                            Pt = jn("nav"),
                            kt = !!Te || e.navAsThumbnails,
                            jt = jn("autoplay"),
                            Bt = jn("touch"),
                            Ht = jn("mouseDrag"),
                            Rt = "tns-slide-active",
                            Ft = "tns-slide-cloned",
                            qt = "tns-complete",
                            Wt = {
                                load: function(e) {
                                    ci(Ki(e))
                                },
                                error: function(e) {
                                    var t;
                                    t = Ki(e), _(t, "failed"), li(t)
                                }
                            },
                            Kt = "force" === e.preventScrollOnTouch;
                        if (Dt) var Yt, Vt, $t = e.controlsContainer,
                            zt = e.controlsContainer ? e.controlsContainer.outerHTML : "",
                            Ut = e.prevButton,
                            Gt = e.nextButton,
                            Xt = e.prevButton ? e.prevButton.outerHTML : "",
                            Qt = e.nextButton ? e.nextButton.outerHTML : "";
                        if (Pt) var Jt, Zt = e.navContainer,
                            en = e.navContainer ? e.navContainer.outerHTML : "",
                            tn = Te ? me : Ji(),
                            nn = 0,
                            on = -1,
                            sn = Mn(),
                            rn = sn,
                            an = "tns-nav-active",
                            cn = "Carousel Page ",
                            ln = " (Current Slide)";
                        if (jt) var un, hn, dn, fn, pn, mn = "forward" === e.autoplayDirection ? 1 : -1,
                            gn = e.autoplayButton,
                            vn = e.autoplayButton ? e.autoplayButton.outerHTML : "",
                            _n = ["<span class='tns-visually-hidden'>", " animation</span>"];
                        if (Bt || Ht) var yn, bn, En = {},
                            wn = {},
                            Sn = !1,
                            Cn = ce ? function(e, t) {
                                return e.x - t.x
                            } : function(e, t) {
                                return e.y - t.y
                            };
                        Te || An(Et || Ct), R && (st = R, rt = "translate", F ? (rt += ce ? "3d(" : "3d(0px, ", at = ce ? ", 0px, 0px)" : ", 0px)") : (rt += ce ? "X(" : "Y(", at = ")")), J && (he.className = he.className.replace("tns-vpfix", "")),
                            function() {
                                if (jn("gutter"), le.className = "tns-outer", ue.className = "tns-inner", le.id = bt + "-ow", ue.id = bt + "-iw", "" === he.id && (he.id = bt), yt += D || Te ? " tns-subpixel" : " tns-no-subpixel", yt += N ? " tns-calc" : " tns-no-calc", Te && (yt += " tns-autowidth"), yt += " tns-" + e.axis, he.className += yt, J ? ((re = t.createElement("div")).id = bt + "-mw", re.className = "tns-ovh", le.appendChild(re), re.appendChild(ue)) : le.appendChild(ue), Re && ((re || ue).className += " tns-ah"), de.insertBefore(le, he), ue.appendChild(he), m(pe, (function(e, t) {
                                    _(e, "tns-item"), e.id || (e.id = bt + "-item" + t), !J && se && _(e, se), S(e, {
                                        "aria-hidden": "true",
                                        tabindex: "-1"
                                    })
                                })), et) {
                                    for (var n = t.createDocumentFragment(), i = t.createDocumentFragment(), o = et; o--;) {
                                        var s = o % me,
                                            r = pe[s].cloneNode(!0);
                                        if (_(r, Ft), C(r, "id"), i.insertBefore(r, i.firstChild), J) {
                                            var a = pe[me - 1 - s].cloneNode(!0);
                                            _(a, Ft), C(a, "id"), n.appendChild(a)
                                        }
                                    }
                                    he.insertBefore(n, he.firstChild), he.appendChild(i), pe = he.children
                                }
                            }(),
                            function() {
                                if (!J)
                                    for (var t = lt, i = lt + Math.min(me, Ne); t < i; t++) {
                                        var o = pe[t];
                                        o.style.left = 100 * (t - lt) / Ne + "%", _(o, ne), y(o, se)
                                    }
                                if (ce && (D || Te ? (f(Xe, "#" + bt + " > .tns-item", "font-size:" + n.getComputedStyle(pe[0]).fontSize + ";", p(Xe)), f(Xe, "#" + bt, "font-size:0;", p(Xe))) : J && m(pe, (function(e, t) {
                                    e.style.marginLeft = function(e) {
                                        return N ? N + "(" + 100 * e + "% / " + tt + ")" : 100 * e / tt + "%"
                                    }(t)
                                }))), H) {
                                    if (q) {
                                        var s = re && e.autoHeight ? Kn(e.speed) : "";
                                        f(Xe, "#" + bt + "-mw", s, p(Xe))
                                    }
                                    s = Hn(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), f(Xe, "#" + bt + "-iw", s, p(Xe)), J && (s = ce && !Te ? "width:" + Rn(e.fixedWidth, e.gutter, e.items) + ";" : "", q && (s += Kn(je)), f(Xe, "#" + bt, s, p(Xe))), s = ce && !Te ? Fn(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (s += qn(e.gutter)), J || (q && (s += Kn(je)), K && (s += Yn(je))), s && f(Xe, "#" + bt + " > .tns-item", s, p(Xe))
                                } else J && Re && (re.style[q] = je / 1e3 + "s"), ue.style.cssText = Hn(Le, xe, Ae, Re), J && ce && !Te && (he.style.width = Rn(Ae, xe, Ne)), s = ce && !Te ? Fn(Ae, xe, Ne) : "", xe && (s += qn(xe)), s && f(Xe, "#" + bt + " > .tns-item", s, p(Xe));
                                if (X && H)
                                    for (var r in X) {
                                        r = parseInt(r);
                                        var a = X[r],
                                            c = (s = "", ""),
                                            l = "",
                                            u = "",
                                            h = "",
                                            d = Te ? null : Bn("items", r),
                                            g = Bn("fixedWidth", r),
                                            v = Bn("speed", r),
                                            b = Bn("edgePadding", r),
                                            E = Bn("autoHeight", r),
                                            w = Bn("gutter", r);
                                        q && re && Bn("autoHeight", r) && "speed" in a && (c = "#" + bt + "-mw{" + Kn(v) + "}"), ("edgePadding" in a || "gutter" in a) && (l = "#" + bt + "-iw{" + Hn(b, w, g, v, E) + "}"), J && ce && !Te && ("fixedWidth" in a || "items" in a || Ae && "gutter" in a) && (u = "width:" + Rn(g, w, d) + ";"), q && "speed" in a && (u += Kn(v)), u && (u = "#" + bt + "{" + u + "}"), ("fixedWidth" in a || Ae && "gutter" in a || !J && "items" in a) && (h += Fn(g, w, d)), "gutter" in a && (h += qn(w)), !J && "speed" in a && (q && (h += Kn(v)), K && (h += Yn(v))), h && (h = "#" + bt + " > .tns-item{" + h + "}"), (s = c + l + u + h) && Xe.insertRule("@media (min-width: " + r / 16 + "em) {" + s + "}", Xe.cssRules.length)
                                    }
                            }(), Vn();
                        var On = He ? J ? function() {
                                var e = ht,
                                    t = dt;
                                e += De, t -= De, Le ? (e += 1, t -= 1) : Ae && (Ie + xe) % (Ae + xe) && (t -= 1), et && (lt > t ? lt -= me : lt < e && (lt += me))
                            } : function() {
                                if (lt > dt)
                                    for (; lt >= ht + me;) lt -= me;
                                else if (lt < ht)
                                    for (; lt <= dt - me;) lt += me
                            } : function() {
                                lt = Math.max(ht, Math.min(dt, lt))
                            },
                            Tn = J ? function() {
                                var e, t, n, i, o, s, r, a, c, l, u;
                                Si(he, ""), q || !je ? (Li(), je && L(he) || Ni()) : (e = he, t = st, n = rt, i = at, o = Ti(), s = je, r = Ni, a = Math.min(s, 10), c = o.indexOf("%") >= 0 ? "%" : "px", o = o.replace(c, ""), l = Number(e.style[t].replace(n, "").replace(i, "").replace(c, "")), u = (o - l) / s * a, setTimeout((function o() {
                                    s -= a, l += u, e.style[t] = n + l + c + i, s > 0 ? setTimeout(o, a) : r()
                                }), a)), ce || Qi()
                            } : function() {
                                Ze = [];
                                var e = {};
                                e[V] = e[$] = Ni, k(pe[ut], e), P(pe[lt], e), xi(ut, ne, ie, !0), xi(lt, se, ne), V && $ && je && L(he) || Ni()
                            };
                        return {
                            version: "2.9.4",
                            getInfo: eo,
                            events: _t,
                            goTo: Di,
                            play: function() {
                                Ve && !hn && (Hi(), fn = !1)
                            },
                            pause: function() {
                                hn && (Ri(), fn = !0)
                            },
                            isOn: ve,
                            updateSliderHeight: mi,
                            refresh: Vn,
                            destroy: function() {
                                if (Xe.disabled = !0, Xe.ownerNode && Xe.ownerNode.remove(), k(n, {
                                    resize: Xn
                                }), ke && k(t, It), $t && k($t, Tt), Zt && k(Zt, At), k(he, Lt), k(he, xt), gn && k(gn, {
                                    click: Fi
                                }), Ve && clearInterval(un), J && V) {
                                    var i = {};
                                    i[V] = Ni, k(he, i)
                                }
                                Ke && k(he, Mt), Ye && k(he, Nt);
                                var o = [fe, zt, Xt, Qt, en, vn];
                                for (var s in U.forEach((function(t, n) {
                                    var i = "container" === t ? le : e[t];
                                    if ("object" == typeof i && i) {
                                        var s = !!i.previousElementSibling && i.previousElementSibling,
                                            r = i.parentNode;
                                        i.outerHTML = o[n], e[t] = s ? s.nextElementSibling : r.firstElementChild
                                    }
                                })), U = ne = ie = oe = se = ce = le = ue = he = de = fe = pe = me = ae = ge = Te = Ae = Le = xe = Ie = Ne = De = Pe = ke = je = Be = He = Re = Xe = Qe = _e = Ze = et = tt = nt = it = ot = st = rt = at = ct = lt = ut = ht = dt = pt = mt = gt = vt = _t = yt = bt = Et = wt = St = Ct = Ot = Tt = At = Lt = xt = It = Mt = Nt = Dt = Pt = kt = jt = Bt = Ht = Rt = qt = Wt = ye = Fe = qe = $t = zt = Ut = Gt = Yt = Vt = We = Zt = en = Jt = tn = nn = on = sn = rn = an = cn = ln = Ve = $e = mn = ze = Ue = gn = vn = Ge = _n = un = hn = dn = fn = pn = En = wn = yn = Sn = bn = Cn = Ke = Ye = null, this) "rebuild" !== s && (this[s] = null);
                                ve = !1
                            },
                            rebuild: function() {
                                return B(r(e, G))
                            }
                        }
                    }

                    function An(e) {
                        e && (Fe = We = Ke = Ye = ke = Ve = Ue = Ge = !1)
                    }

                    function Ln() {
                        for (var e = J ? lt - et : lt; e < 0;) e += me;
                        return e % me + 1
                    }

                    function xn(e) {
                        return e = e ? Math.max(0, Math.min(He ? me - 1 : me - Ne, e)) : 0, J ? e + et : e
                    }

                    function In(e) {
                        for (null == e && (e = lt), J && (e -= et); e < 0;) e += me;
                        return Math.floor(e % me)
                    }

                    function Mn() {
                        var e, t = In();
                        return e = kt ? t : Ae || Te ? Math.ceil((t + 1) * tn / me - 1) : Math.floor(t / Ne), !He && J && lt === dt && (e = tn - 1), e
                    }

                    function Nn() {
                        return n.innerWidth || t.documentElement.clientWidth || t.body.clientWidth
                    }

                    function Dn(e) {
                        return "top" === e ? "afterbegin" : "beforeend"
                    }

                    function Pn(e) {
                        if (null != e) {
                            var n, i, o = t.createElement("div");
                            return e.appendChild(o), i = (n = o.getBoundingClientRect()).right - n.left, o.remove(), i || Pn(e.parentNode)
                        }
                    }

                    function kn() {
                        var e = Le ? 2 * Le - xe : 0;
                        return Pn(de) - e
                    }

                    function jn(t) {
                        if (e[t]) return !0;
                        if (X)
                            for (var n in X)
                                if (X[n][t]) return !0;
                        return !1
                    }

                    function Bn(t, n) {
                        if (null == n && (n = ge), "items" === t && Ae) return Math.floor((Ie + xe) / (Ae + xe)) || 1;
                        var i = e[t];
                        if (X)
                            for (var o in X) n >= parseInt(o) && t in X[o] && (i = X[o][t]);
                        return "slideBy" === t && "page" === i && (i = Bn("items")), J || "slideBy" !== t && "items" !== t || (i = Math.floor(i)), i
                    }

                    function Hn(e, t, n, i, o) {
                        var s = "";
                        if (void 0 !== e) {
                            var r = e;
                            t && (r -= t), s = ce ? "margin: 0 " + r + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + r + "px 0;"
                        } else if (t && !n) {
                            var a = "-" + t + "px";
                            s = "margin: 0 " + (ce ? a + " 0 0" : "0 " + a + " 0") + ";"
                        }
                        return !J && o && q && i && (s += Kn(i)), s
                    }

                    function Rn(e, t, n) {
                        return e ? (e + t) * tt + "px" : N ? N + "(" + 100 * tt + "% / " + n + ")" : 100 * tt / n + "%"
                    }

                    function Fn(e, t, n) {
                        var i;
                        if (e) i = e + t + "px";
                        else {
                            J || (n = Math.floor(n));
                            var o = J ? tt : n;
                            i = N ? N + "(100% / " + o + ")" : 100 / o + "%"
                        }
                        return i = "width:" + i, "inner" !== Q ? i + ";" : i + " !important;"
                    }

                    function qn(e) {
                        var t = "";
                        return !1 !== e && (t = (ce ? "padding-" : "margin-") + (ce ? "right" : "bottom") + ": " + e + "px;"), t
                    }

                    function Wn(e, t) {
                        var n = e.substring(0, e.length - t).toLowerCase();
                        return n && (n = "-" + n + "-"), n
                    }

                    function Kn(e) {
                        return Wn(q, 18) + "transition-duration:" + e / 1e3 + "s;"
                    }

                    function Yn(e) {
                        return Wn(K, 17) + "animation-duration:" + e / 1e3 + "s;"
                    }

                    function Vn() {
                        if (jn("autoHeight") || Te || !ce) {
                            var e = he.querySelectorAll("img");
                            m(e, (function(e) {
                                var t = e.src;
                                Qe || (t && t.indexOf("data:image") < 0 ? (e.src = "", P(e, Wt), _(e, "loading"), e.src = t) : ci(e))
                            })), i((function() {
                                di(O(e), (function() {
                                    ye = !0
                                }))
                            })), jn("autoHeight") && (e = ui(lt, Math.min(lt + Ne - 1, tt - 1))), Qe ? $n() : i((function() {
                                di(O(e), $n)
                            }))
                        } else J && Ai(), Un(), Gn()
                    }

                    function $n() {
                        if (Te && me > 1) {
                            var e = He ? lt : me - 1;
                            ! function t() {
                                var n = pe[e].getBoundingClientRect().left,
                                    i = pe[e - 1].getBoundingClientRect().right;
                                Math.abs(n - i) <= 1 ? zn() : setTimeout((function() {
                                    t()
                                }), 16)
                            }()
                        } else zn()
                    }

                    function zn() {
                        ce && !Te || (gi(), Te ? (it = Oi(), St && (Ct = Jn()), dt = ct(), An(Et || Ct)) : Qi()), J && Ai(), Un(), Gn()
                    }

                    function Un() {
                        if (vi(), le.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + si() + "</span>  of " + me + "</div>"), be = le.querySelector(".tns-liveregion .current"), jt) {
                            var t = Ve ? "stop" : "start";
                            gn ? S(gn, {
                                "data-action": t
                            }) : e.autoplayButtonOutput && (le.insertAdjacentHTML(Dn(e.autoplayPosition), '<button type="button" data-action="' + t + '">' + _n[0] + t + _n[1] + ze[0] + "</button>"), gn = le.querySelector("[data-action]")), gn && P(gn, {
                                click: Fi
                            }), Ve && (Hi(), Ue && P(he, Lt), Ge && P(he, xt))
                        }
                        if (Pt) {
                            if (Zt) S(Zt, {
                                "aria-label": "Carousel Pagination"
                            }), m(Jt = Zt.children, (function(e, t) {
                                S(e, {
                                    "data-nav": t,
                                    tabindex: "-1",
                                    "aria-label": cn + (t + 1),
                                    "aria-controls": bt
                                })
                            }));
                            else {
                                for (var n = "", i = kt ? "" : 'style="display:none"', o = 0; o < me; o++) n += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + bt + '" ' + i + ' aria-label="' + cn + (o + 1) + '"></button>';
                                n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", le.insertAdjacentHTML(Dn(e.navPosition), n), Zt = le.querySelector(".tns-nav"), Jt = Zt.children
                            }
                            if (Zi(), q) {
                                var s = q.substring(0, q.length - 18).toLowerCase(),
                                    r = "transition: all " + je / 1e3 + "s";
                                s && (r = "-" + s + "-" + r), f(Xe, "[aria-controls^=" + bt + "-item]", r, p(Xe))
                            }
                            S(Jt[sn], {
                                "aria-label": cn + (sn + 1) + ln
                            }), C(Jt[sn], "tabindex"), _(Jt[sn], an), P(Zt, At)
                        }
                        Dt && ($t || Ut && Gt || (le.insertAdjacentHTML(Dn(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + bt + '">' + qe[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + bt + '">' + qe[1] + "</button></div>"), $t = le.querySelector(".tns-controls")), Ut && Gt || (Ut = $t.children[0], Gt = $t.children[1]), e.controlsContainer && S($t, {
                            "aria-label": "Carousel Navigation",
                            tabindex: "0"
                        }), (e.controlsContainer || e.prevButton && e.nextButton) && S([Ut, Gt], {
                            "aria-controls": bt,
                            tabindex: "-1"
                        }), (e.controlsContainer || e.prevButton && e.nextButton) && (S(Ut, {
                            "data-controls": "prev"
                        }), S(Gt, {
                            "data-controls": "next"
                        })), Yt = yi(Ut), Vt = yi(Gt), wi(), $t ? P($t, Tt) : (P(Ut, Tt), P(Gt, Tt))), ei()
                    }

                    function Gn() {
                        if (J && V) {
                            var i = {};
                            i[V] = Ni, P(he, i)
                        }
                        Ke && P(he, Mt, e.preventScrollOnTouch), Ye && P(he, Nt), ke && P(t, It), "inner" === Q ? _t.on("outerResized", (function() {
                            Qn(), _t.emit("innerLoaded", eo())
                        })) : (X || Ae || Te || Re || !ce) && P(n, {
                            resize: Xn
                        }), Re && ("outer" === Q ? _t.on("innerLoaded", hi) : Et || hi()), ai(), Et ? ii() : Ct && ni(), _t.on("indexChanged", fi), "inner" === Q && _t.emit("innerLoaded", eo()), "function" == typeof vt && vt(eo()), ve = !0
                    }

                    function Xn(e) {
                        i((function() {
                            Qn(Wi(e))
                        }))
                    }

                    function Qn(n) {
                        if (ve) {
                            "outer" === Q && _t.emit("outerResized", eo(n)), ge = Nn();
                            var i, o = ae,
                                s = !1;
                            X && (Zn(), (i = o !== ae) && _t.emit("newBreakpointStart", eo(n)));
                            var r, a, c = Ne,
                                l = Et,
                                u = Ct,
                                h = ke,
                                d = Fe,
                                g = We,
                                v = Ke,
                                b = Ye,
                                E = Ve,
                                w = Ue,
                                S = Ge,
                                C = lt;
                            if (i) {
                                var O = Ae,
                                    L = Re,
                                    x = qe,
                                    I = Me,
                                    M = ze;
                                if (!H) var N = xe,
                                    D = Le
                            }
                            if (ke = Bn("arrowKeys"), Fe = Bn("controls"), We = Bn("nav"), Ke = Bn("touch"), Me = Bn("center"), Ye = Bn("mouseDrag"), Ve = Bn("autoplay"), Ue = Bn("autoplayHoverPause"), Ge = Bn("autoplayResetOnVisibility"), i && (Et = Bn("disable"), Ae = Bn("fixedWidth"), je = Bn("speed"), Re = Bn("autoHeight"), qe = Bn("controlsText"), ze = Bn("autoplayText"), $e = Bn("autoplayTimeout"), H || (Le = Bn("edgePadding"), xe = Bn("gutter"))), An(Et), Ie = kn(), ce && !Te || Et || (gi(), ce || (Qi(), s = !0)), (Ae || Te) && (it = Oi(), dt = ct()), (i || Ae) && (Ne = Bn("items"), De = Bn("slideBy"), (a = Ne !== c) && (Ae || Te || (dt = ct()), On())), i && Et !== l && (Et ? ii() : function() {
                                if (wt) {
                                    if (Xe.disabled = !1, he.className += yt, Ai(), He)
                                        for (var e = et; e--;) J && A(pe[e]), A(pe[tt - e - 1]);
                                    if (!J)
                                        for (var t = lt, n = lt + me; t < n; t++) {
                                            var i = pe[t],
                                                o = t < lt + Ne ? ne : se;
                                            i.style.left = 100 * (t - lt) / Ne + "%", _(i, o)
                                        }
                                    ti(), wt = !1
                                }
                            }()), St && (i || Ae || Te) && (Ct = Jn()) !== u && (Ct ? (Li(Ti(xn(0))), ni()) : (function() {
                                if (Ot) {
                                    if (Le && H && (ue.style.margin = ""), et)
                                        for (var e = "tns-transparent", t = et; t--;) J && y(pe[t], e), y(pe[tt - t - 1], e);
                                    ti(), Ot = !1
                                }
                            }(), s = !0)), An(Et || Ct), Ve || (Ue = Ge = !1), ke !== h && (ke ? P(t, It) : k(t, It)), Fe !== d && (Fe ? $t ? A($t) : (Ut && A(Ut), Gt && A(Gt)) : $t ? T($t) : (Ut && T(Ut), Gt && T(Gt))), We !== g && (We ? (A(Zt), Zi()) : T(Zt)), Ke !== v && (Ke ? P(he, Mt, e.preventScrollOnTouch) : k(he, Mt)), Ye !== b && (Ye ? P(he, Nt) : k(he, Nt)), Ve !== E && (Ve ? (gn && A(gn), hn || fn || Hi()) : (gn && T(gn), hn && Ri())), Ue !== w && (Ue ? P(he, Lt) : k(he, Lt)), Ge !== S && (Ge ? P(t, xt) : k(t, xt)), i) {
                                if (Ae === O && Me === I || (s = !0), Re !== L && (Re || (ue.style.height = "")), Fe && qe !== x && (Ut.innerHTML = qe[0], Gt.innerHTML = qe[1]), gn && ze !== M) {
                                    var j = Ve ? 1 : 0,
                                        B = gn.innerHTML,
                                        R = B.length - M[j].length;
                                    B.substring(R) === M[j] && (gn.innerHTML = B.substring(0, R) + ze[j])
                                }
                            } else Me && (Ae || Te) && (s = !0);
                            if ((a || Ae && !Te) && (tn = Ji(), Zi()), (r = lt !== C) ? (_t.emit("indexChanged", eo()), s = !0) : a ? r || fi() : (Ae || Te) && (ai(), vi(), oi()), a && !J && function() {
                                for (var e = lt + Math.min(me, Ne), t = tt; t--;) {
                                    var n = pe[t];
                                    t >= lt && t < e ? (_(n, "tns-moving"), n.style.left = 100 * (t - lt) / Ne + "%", _(n, ne), y(n, se)) : n.style.left && (n.style.left = "", _(n, se), y(n, ne)), y(n, ie)
                                }
                                setTimeout((function() {
                                    m(pe, (function(e) {
                                        y(e, "tns-moving")
                                    }))
                                }), 300)
                            }(), !Et && !Ct) {
                                if (i && !H && (Le === D && xe === N || (ue.style.cssText = Hn(Le, xe, Ae, je, Re)), ce)) {
                                    J && (he.style.width = Rn(Ae, xe, Ne));
                                    var F = Fn(Ae, xe, Ne) + qn(xe);
                                    ! function(e, t) {
                                        "deleteRule" in e ? e.deleteRule(t) : e.removeRule(t)
                                    }(Xe, p(Xe) - 1), f(Xe, "#" + bt + " > .tns-item", F, p(Xe))
                                }
                                Re && hi(), s && (Ai(), ut = lt)
                            }
                            i && _t.emit("newBreakpointEnd", eo(n))
                        }
                    }

                    function Jn() {
                        if (!Ae && !Te) return me <= (Me ? Ne - (Ne - 1) / 2 : Ne);
                        var e = Ae ? (Ae + xe) * me : _e[me],
                            t = Le ? Ie + 2 * Le : Ie + xe;
                        return Me && (t -= Ae ? (Ie - Ae) / 2 : (Ie - (_e[lt + 1] - _e[lt] - xe)) / 2), e <= t
                    }

                    function Zn() {
                        for (var e in ae = 0, X) e = parseInt(e), ge >= e && (ae = e)
                    }

                    function ei() {
                        !Ve && gn && T(gn), !We && Zt && T(Zt), Fe || ($t ? T($t) : (Ut && T(Ut), Gt && T(Gt)))
                    }

                    function ti() {
                        Ve && gn && A(gn), We && Zt && A(Zt), Fe && ($t ? A($t) : (Ut && A(Ut), Gt && A(Gt)))
                    }

                    function ni() {
                        if (!Ot) {
                            if (Le && (ue.style.margin = "0px"), et)
                                for (var e = "tns-transparent", t = et; t--;) J && _(pe[t], e), _(pe[tt - t - 1], e);
                            ei(), Ot = !0
                        }
                    }

                    function ii() {
                        if (!wt) {
                            if (Xe.disabled = !0, he.className = he.className.replace(yt.substring(1), ""), C(he, ["style"]), He)
                                for (var e = et; e--;) J && T(pe[e]), T(pe[tt - e - 1]);
                            if (ce && J || C(ue, ["style"]), !J)
                                for (var t = lt, n = lt + me; t < n; t++) {
                                    var i = pe[t];
                                    C(i, ["style"]), y(i, ne), y(i, se)
                                }
                            ei(), wt = !0
                        }
                    }

                    function oi() {
                        var e = si();
                        be.innerHTML !== e && (be.innerHTML = e)
                    }

                    function si() {
                        var e = ri(),
                            t = e[0] + 1,
                            n = e[1] + 1;
                        return t === n ? t + "" : t + " to " + n
                    }

                    function ri(e) {
                        null == e && (e = Ti());
                        var t, n, i, o = lt;
                        if (Me || Le ? (Te || Ae) && (n = -(parseFloat(e) + Le), i = n + Ie + 2 * Le) : Te && (n = _e[lt], i = n + Ie), Te) _e.forEach((function(e, s) {
                            s < tt && ((Me || Le) && e <= n + .5 && (o = s), i - e >= .5 && (t = s))
                        }));
                        else {
                            if (Ae) {
                                var s = Ae + xe;
                                Me || Le ? (o = Math.floor(n / s), t = Math.ceil(i / s - 1)) : t = o + Math.ceil(Ie / s) - 1
                            } else if (Me || Le) {
                                var r = Ne - 1;
                                if (Me ? (o -= r / 2, t = lt + r / 2) : t = lt + r, Le) {
                                    var a = Le * Ne / Ie;
                                    o -= a, t += a
                                }
                                o = Math.floor(o), t = Math.ceil(t)
                            } else t = o + Ne - 1;
                            o = Math.max(o, 0), t = Math.min(t, tt - 1)
                        }
                        return [o, t]
                    }

                    function ai() {
                        if (Qe && !Et) {
                            var e = ri();
                            e.push(Je), ui.apply(null, e).forEach((function(e) {
                                if (!v(e, qt)) {
                                    var t = {};
                                    t[V] = function(e) {
                                        e.stopPropagation()
                                    }, P(e, t), P(e, Wt), e.src = E(e, "data-src");
                                    var n = E(e, "data-srcset");
                                    n && (e.srcset = n), _(e, "loading")
                                }
                            }))
                        }
                    }

                    function ci(e) {
                        _(e, "loaded"), li(e)
                    }

                    function li(e) {
                        _(e, qt), y(e, "loading"), k(e, Wt)
                    }

                    function ui(e, t, n) {
                        var i = [];
                        for (n || (n = "img"); e <= t;) m(pe[e].querySelectorAll(n), (function(e) {
                            i.push(e)
                        })), e++;
                        return i
                    }

                    function hi() {
                        var e = ui.apply(null, ri());
                        i((function() {
                            di(e, mi)
                        }))
                    }

                    function di(e, t) {
                        return ye ? t() : (e.forEach((function(t, n) {
                            !Qe && t.complete && li(t), v(t, qt) && e.splice(n, 1)
                        })), e.length ? void i((function() {
                            di(e, t)
                        })) : t())
                    }

                    function fi() {
                        ai(), vi(), oi(), wi(),
                            function() {
                                if (We && (sn = on >= 0 ? on : Mn(), on = -1, sn !== rn)) {
                                    var e = Jt[rn],
                                        t = Jt[sn];
                                    S(e, {
                                        tabindex: "-1",
                                        "aria-label": cn + (rn + 1)
                                    }), y(e, an), S(t, {
                                        "aria-label": cn + (sn + 1) + ln
                                    }), C(t, "tabindex"), _(t, an), rn = sn
                                }
                            }()
                    }

                    function pi(e, t) {
                        for (var n = [], i = e, o = Math.min(e + t, tt); i < o; i++) n.push(pe[i].offsetHeight);
                        return Math.max.apply(null, n)
                    }

                    function mi() {
                        var e = Re ? pi(lt, Ne) : pi(et, me),
                            t = re || ue;
                        t.style.height !== e && (t.style.height = e + "px")
                    }

                    function gi() {
                        _e = [0];
                        var e = ce ? "left" : "top",
                            t = ce ? "right" : "bottom",
                            n = pe[0].getBoundingClientRect()[e];
                        m(pe, (function(i, o) {
                            o && _e.push(i.getBoundingClientRect()[e] - n), o === tt - 1 && _e.push(i.getBoundingClientRect()[t] - n)
                        }))
                    }

                    function vi() {
                        var e = ri(),
                            t = e[0],
                            n = e[1];
                        m(pe, (function(e, i) {
                            i >= t && i <= n ? b(e, "aria-hidden") && (C(e, ["aria-hidden", "tabindex"]), _(e, Rt)) : b(e, "aria-hidden") || (S(e, {
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }), y(e, Rt))
                        }))
                    }

                    function _i(e) {
                        return e.nodeName.toLowerCase()
                    }

                    function yi(e) {
                        return "button" === _i(e)
                    }

                    function bi(e) {
                        return "true" === e.getAttribute("aria-disabled")
                    }

                    function Ei(e, t, n) {
                        e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString())
                    }

                    function wi() {
                        if (Fe && !Be && !He) {
                            var e = Yt ? Ut.disabled : bi(Ut),
                                t = Vt ? Gt.disabled : bi(Gt),
                                n = lt <= ht,
                                i = !Be && lt >= dt;
                            n && !e && Ei(Yt, Ut, !0), !n && e && Ei(Yt, Ut, !1), i && !t && Ei(Vt, Gt, !0), !i && t && Ei(Vt, Gt, !1)
                        }
                    }

                    function Si(e, t) {
                        q && (e.style[q] = t)
                    }

                    function Ci(e) {
                        return null == e && (e = lt), Te ? (Ie - (Le ? xe : 0) - (_e[e + 1] - _e[e] - xe)) / 2 : Ae ? (Ie - Ae) / 2 : (Ne - 1) / 2
                    }

                    function Oi() {
                        var e = Ie + (Le ? xe : 0) - (Ae ? (Ae + xe) * tt : _e[tt]);
                        return Me && !He && (e = Ae ? -(Ae + xe) * (tt - 1) - Ci() : Ci(tt - 1) - _e[tt - 1]), e > 0 && (e = 0), e
                    }

                    function Ti(e) {
                        var t;
                        if (null == e && (e = lt), ce && !Te)
                            if (Ae) t = -(Ae + xe) * e, Me && (t += Ci());
                            else {
                                var n = R ? tt : Ne;
                                Me && (e -= Ci()), t = 100 * -e / n
                            }
                        else t = -_e[e], Me && Te && (t += Ci());
                        return nt && (t = Math.max(t, it)), t + (!ce || Te || Ae ? "px" : "%")
                    }

                    function Ai(e) {
                        Si(he, "0s"), Li(e)
                    }

                    function Li(e) {
                        null == e && (e = Ti()), he.style[st] = rt + e + at
                    }

                    function xi(e, t, n, i) {
                        var o = e + Ne;
                        He || (o = Math.min(o, tt));
                        for (var s = e; s < o; s++) {
                            var r = pe[s];
                            i || (r.style.left = 100 * (s - lt) / Ne + "%"), oe && W && (r.style[W] = r.style[Y] = oe * (s - e) / 1e3 + "s"), y(r, t), _(r, n), i && Ze.push(r)
                        }
                    }

                    function Ii(e, t) {
                        ot && On(), (lt !== ut || t) && (_t.emit("indexChanged", eo()), _t.emit("transitionStart", eo()), Re && hi(), hn && e && ["click", "keydown"].indexOf(e.type) >= 0 && Ri(), gt = !0, Tn())
                    }

                    function Mi(e) {
                        return e.toLowerCase().replace(/-/g, "")
                    }

                    function Ni(e) {
                        if (J || gt) {
                            if (_t.emit("transitionEnd", eo(e)), !J && Ze.length > 0)
                                for (var t = 0; t < Ze.length; t++) {
                                    var n = Ze[t];
                                    n.style.left = "", Y && W && (n.style[Y] = "", n.style[W] = ""), y(n, ie), _(n, se)
                                }
                            if (!e || !J && e.target.parentNode === he || e.target === he && Mi(e.propertyName) === Mi(st)) {
                                if (!ot) {
                                    var i = lt;
                                    On(), lt !== i && (_t.emit("indexChanged", eo()), Ai())
                                }
                                "inner" === Q && _t.emit("innerLoaded", eo()), gt = !1, ut = lt
                            }
                        }
                    }

                    function Di(e, t) {
                        if (!Ct)
                            if ("prev" === e) Pi(t, -1);
                            else if ("next" === e) Pi(t, 1);
                            else {
                                if (gt) {
                                    if (ft) return;
                                    Ni()
                                }
                                var n = In(),
                                    i = 0;
                                if ("first" === e ? i = -n : "last" === e ? i = J ? me - Ne - n : me - 1 - n : ("number" != typeof e && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(me - 1, e))), i = e - n)), !J && i && Math.abs(i) < Ne) {
                                    var o = i > 0 ? 1 : -1;
                                    i += lt + i - me >= ht ? me * o : 2 * me * o * -1
                                }
                                lt += i, J && He && (lt < ht && (lt += me), lt > dt && (lt -= me)), In(lt) !== In(ut) && Ii(t)
                            }
                    }

                    function Pi(e, t) {
                        if (gt) {
                            if (ft) return;
                            Ni()
                        }
                        var n;
                        if (!t) {
                            for (var i = Ki(e = Wi(e)); i !== $t && [Ut, Gt].indexOf(i) < 0;) i = i.parentNode;
                            var o = [Ut, Gt].indexOf(i);
                            o >= 0 && (n = !0, t = 0 === o ? -1 : 1)
                        }
                        if (Be) {
                            if (lt === ht && -1 === t) return void Di("last", e);
                            if (lt === dt && 1 === t) return void Di("first", e)
                        }
                        t && (lt += De * t, Te && (lt = Math.floor(lt)), Ii(n || e && "keydown" === e.type ? e : null))
                    }

                    function ki() {
                        un = setInterval((function() {
                            Pi(null, mn)
                        }), $e), hn = !0
                    }

                    function ji() {
                        clearInterval(un), hn = !1
                    }

                    function Bi(e, t) {
                        S(gn, {
                            "data-action": e
                        }), gn.innerHTML = _n[0] + e + _n[1] + t
                    }

                    function Hi() {
                        ki(), gn && Bi("stop", ze[1])
                    }

                    function Ri() {
                        ji(), gn && Bi("start", ze[0])
                    }

                    function Fi() {
                        hn ? (Ri(), fn = !0) : (Hi(), fn = !1)
                    }

                    function qi(e) {
                        e.focus()
                    }

                    function Wi(e) {
                        return Yi(e = e || n.event) ? e.changedTouches[0] : e
                    }

                    function Ki(e) {
                        return e.target || n.event.srcElement
                    }

                    function Yi(e) {
                        return e.type.indexOf("touch") >= 0
                    }

                    function Vi(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                    }

                    function $i() {
                        return function(e, t) {
                            var n = !1,
                                i = Math.abs(90 - Math.abs(e));
                            return i >= 90 - t ? n = "horizontal" : i <= t && (n = "vertical"), n
                        }((t = wn.y - En.y, n = wn.x - En.x, Math.atan2(t, n) * (180 / Math.PI)), pt) === e.axis;
                        var t, n
                    }

                    function zi(e) {
                        if (gt) {
                            if (ft) return;
                            Ni()
                        }
                        Ve && hn && ji(), Sn = !0, bn && (s(bn), bn = null);
                        var t = Wi(e);
                        _t.emit(Yi(e) ? "touchStart" : "dragStart", eo(e)), !Yi(e) && ["img", "a"].indexOf(_i(Ki(e))) >= 0 && Vi(e), wn.x = En.x = t.clientX, wn.y = En.y = t.clientY, J && (yn = parseFloat(he.style[st].replace(rt, "")), Si(he, "0s"))
                    }

                    function Ui(e) {
                        if (Sn) {
                            var t = Wi(e);
                            wn.x = t.clientX, wn.y = t.clientY, J ? bn || (bn = i((function() {
                                Gi(e)
                            }))) : ("?" === mt && (mt = $i()), mt && (Kt = !0)), ("boolean" != typeof e.cancelable || e.cancelable) && Kt && e.preventDefault()
                        }
                    }

                    function Gi(e) {
                        if (mt) {
                            if (s(bn), Sn && (bn = i((function() {
                                Gi(e)
                            }))), "?" === mt && (mt = $i()), mt) {
                                !Kt && Yi(e) && (Kt = !0);
                                try {
                                    e.type && _t.emit(Yi(e) ? "touchMove" : "dragMove", eo(e))
                                } catch (e) {}
                                var t = yn,
                                    n = Cn(wn, En);
                                !ce || Ae || Te ? (t += n, t += "px") : (t += R ? n * Ne * 100 / ((Ie + xe) * tt) : 100 * n / (Ie + xe), t += "%"), he.style[st] = rt + t + at
                            }
                        } else Sn = !1
                    }

                    function Xi(t) {
                        if (Sn) {
                            bn && (s(bn), bn = null), J && Si(he, ""), Sn = !1;
                            var n = Wi(t);
                            wn.x = n.clientX, wn.y = n.clientY;
                            var o = Cn(wn, En);
                            if (Math.abs(o)) {
                                if (!Yi(t)) {
                                    var r = Ki(t);
                                    P(r, {
                                        click: function e(t) {
                                            Vi(t), k(r, {
                                                click: e
                                            })
                                        }
                                    })
                                }
                                J ? bn = i((function() {
                                    if (ce && !Te) {
                                        var e = -o * Ne / (Ie + xe);
                                        e = o > 0 ? Math.floor(e) : Math.ceil(e), lt += e
                                    } else {
                                        var n = -(yn + o);
                                        if (n <= 0) lt = ht;
                                        else if (n >= _e[tt - 1]) lt = dt;
                                        else
                                            for (var i = 0; i < tt && n >= _e[i];) lt = i, n > _e[i] && o < 0 && (lt += 1), i++
                                    }
                                    Ii(t, o), _t.emit(Yi(t) ? "touchEnd" : "dragEnd", eo(t))
                                })) : mt && Pi(t, o > 0 ? -1 : 1)
                            }
                        }
                        "auto" === e.preventScrollOnTouch && (Kt = !1), pt && (mt = "?"), Ve && !hn && ki()
                    }

                    function Qi() {
                        (re || ue).style.height = _e[lt + Ne] - _e[lt] + "px"
                    }

                    function Ji() {
                        var e = Ae ? (Ae + xe) * me / Ie : me / Ne;
                        return Math.min(Math.ceil(e), me)
                    }

                    function Zi() {
                        if (We && !kt && tn !== nn) {
                            var e = nn,
                                t = tn,
                                n = A;
                            for (nn > tn && (e = tn, t = nn, n = T); e < t;) n(Jt[e]), e++;
                            nn = tn
                        }
                    }

                    function eo(e) {
                        return {
                            container: he,
                            slideItems: pe,
                            navContainer: Zt,
                            navItems: Jt,
                            controlsContainer: $t,
                            hasControls: Dt,
                            prevButton: Ut,
                            nextButton: Gt,
                            items: Ne,
                            slideBy: De,
                            cloneCount: et,
                            slideCount: me,
                            slideCountNew: tt,
                            index: lt,
                            indexCached: ut,
                            displayIndex: Ln(),
                            navCurrentIndex: sn,
                            navCurrentIndexCached: rn,
                            pages: tn,
                            pagesCached: nn,
                            sheet: Xe,
                            isOn: ve,
                            event: e || {}
                        }
                    }
                    z && console.warn("No slides found in", e.container)
                },
                H = (e, t) => {
                    document.querySelectorAll(e).length > 0 && B(t)
                },
                R = n(529),
                F = "top",
                q = "bottom",
                W = "right",
                K = "left",
                Y = "auto",
                V = [F, q, W, K],
                $ = "start",
                z = "end",
                U = "clippingParents",
                G = "viewport",
                X = "popper",
                Q = "reference",
                J = V.reduce((function(e, t) {
                    return e.concat([t + "-" + $, t + "-" + z])
                }), []),
                Z = [].concat(V, [Y]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + $, t + "-" + z])
                }), []),
                ee = "beforeRead",
                te = "read",
                ne = "afterRead",
                ie = "beforeMain",
                oe = "main",
                se = "afterMain",
                re = "beforeWrite",
                ae = "write",
                ce = "afterWrite",
                le = [ee, te, ne, ie, oe, se, re, ae, ce];

            function ue(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function he(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function de(e) {
                return e instanceof he(e).Element || e instanceof Element
            }

            function fe(e) {
                return e instanceof he(e).HTMLElement || e instanceof HTMLElement
            }

            function pe(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof he(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var me = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach((function(e) {
                        var n = t.styles[e] || {},
                            i = t.attributes[e] || {},
                            o = t.elements[e];
                        fe(o) && ue(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function(e) {
                            var t = i[e];
                            !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                        })))
                    }))
                },
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(t.elements).forEach((function(e) {
                                var i = t.elements[e],
                                    o = t.attributes[e] || {},
                                    s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                        return e[t] = "", e
                                    }), {});
                                fe(i) && ue(i) && (Object.assign(i.style, s), Object.keys(o).forEach((function(e) {
                                    i.removeAttribute(e)
                                })))
                            }))
                        }
                },
                requires: ["computeStyles"]
            };

            function ge(e) {
                return e.split("-")[0]
            }
            var ve = Math.max,
                _e = Math.min,
                ye = Math.round;

            function be(e, t) {
                void 0 === t && (t = !1);
                var n = e.getBoundingClientRect(),
                    i = 1,
                    o = 1;
                if (fe(e) && t) {
                    var s = e.offsetHeight,
                        r = e.offsetWidth;
                    r > 0 && (i = ye(n.width) / r || 1), s > 0 && (o = ye(n.height) / s || 1)
                }
                return {
                    width: n.width / i,
                    height: n.height / o,
                    top: n.top / o,
                    right: n.right / i,
                    bottom: n.bottom / o,
                    left: n.left / i,
                    x: n.left / i,
                    y: n.top / o
                }
            }

            function Ee(e) {
                var t = be(e),
                    n = e.offsetWidth,
                    i = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: i
                }
            }

            function we(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && pe(n)) {
                    var i = t;
                    do {
                        if (i && e.isSameNode(i)) return !0;
                        i = i.parentNode || i.host
                    } while (i)
                }
                return !1
            }

            function Se(e) {
                return he(e).getComputedStyle(e)
            }

            function Ce(e) {
                return ["table", "td", "th"].indexOf(ue(e)) >= 0
            }

            function Oe(e) {
                return ((de(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function Te(e) {
                return "html" === ue(e) ? e : e.assignedSlot || e.parentNode || (pe(e) ? e.host : null) || Oe(e)
            }

            function Ae(e) {
                return fe(e) && "fixed" !== Se(e).position ? e.offsetParent : null
            }

            function Le(e) {
                for (var t = he(e), n = Ae(e); n && Ce(n) && "static" === Se(n).position;) n = Ae(n);
                return n && ("html" === ue(n) || "body" === ue(n) && "static" === Se(n).position) ? t : n || function(e) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && fe(e) && "fixed" === Se(e).position) return null;
                    var n = Te(e);
                    for (pe(n) && (n = n.host); fe(n) && ["html", "body"].indexOf(ue(n)) < 0;) {
                        var i = Se(n);
                        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }

            function xe(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function Ie(e, t, n) {
                return ve(e, _e(t, n))
            }

            function Me(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function Ne(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }
            var De = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        i = e.name,
                        o = e.options,
                        s = n.elements.arrow,
                        r = n.modifiersData.popperOffsets,
                        a = ge(n.placement),
                        c = xe(a),
                        l = [K, W].indexOf(a) >= 0 ? "height" : "width";
                    if (s && r) {
                        var u = function(e, t) {
                                return Me("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : Ne(e, V))
                            }(o.padding, n),
                            h = Ee(s),
                            d = "y" === c ? F : K,
                            f = "y" === c ? q : W,
                            p = n.rects.reference[l] + n.rects.reference[c] - r[c] - n.rects.popper[l],
                            m = r[c] - n.rects.reference[c],
                            g = Le(s),
                            v = g ? "y" === c ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                            _ = p / 2 - m / 2,
                            y = u[d],
                            b = v - h[l] - u[f],
                            E = v / 2 - h[l] / 2 + _,
                            w = Ie(y, E, b),
                            S = c;
                        n.modifiersData[i] = ((t = {})[S] = w, t.centerOffset = w - E, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        i = void 0 === n ? "[data-popper-arrow]" : n;
                    null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && we(t.elements.popper, i) && (t.elements.arrow = i)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function Pe(e) {
                return e.split("-")[1]
            }
            var ke = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function je(e) {
                var t, n = e.popper,
                    i = e.popperRect,
                    o = e.placement,
                    s = e.variation,
                    r = e.offsets,
                    a = e.position,
                    c = e.gpuAcceleration,
                    l = e.adaptive,
                    u = e.roundOffsets,
                    h = e.isFixed,
                    d = r.x,
                    f = void 0 === d ? 0 : d,
                    p = r.y,
                    m = void 0 === p ? 0 : p,
                    g = "function" == typeof u ? u({
                        x: f,
                        y: m
                    }) : {
                        x: f,
                        y: m
                    };
                f = g.x, m = g.y;
                var v = r.hasOwnProperty("x"),
                    _ = r.hasOwnProperty("y"),
                    y = K,
                    b = F,
                    E = window;
                if (l) {
                    var w = Le(n),
                        S = "clientHeight",
                        C = "clientWidth";
                    w === he(n) && "static" !== Se(w = Oe(n)).position && "absolute" === a && (S = "scrollHeight", C = "scrollWidth"), w = w, (o === F || (o === K || o === W) && s === z) && (b = q, m -= (h && w === E && E.visualViewport ? E.visualViewport.height : w[S]) - i.height, m *= c ? 1 : -1), o !== K && (o !== F && o !== q || s !== z) || (y = W, f -= (h && w === E && E.visualViewport ? E.visualViewport.width : w[C]) - i.width, f *= c ? 1 : -1)
                }
                var O, T = Object.assign({
                        position: a
                    }, l && ke),
                    A = !0 === u ? function(e) {
                        var t = e.x,
                            n = e.y,
                            i = window.devicePixelRatio || 1;
                        return {
                            x: ye(t * i) / i || 0,
                            y: ye(n * i) / i || 0
                        }
                    }({
                        x: f,
                        y: m
                    }) : {
                        x: f,
                        y: m
                    };
                return f = A.x, m = A.y, c ? Object.assign({}, T, ((O = {})[b] = _ ? "0" : "", O[y] = v ? "0" : "", O.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", O)) : Object.assign({}, T, ((t = {})[b] = _ ? m + "px" : "", t[y] = v ? f + "px" : "", t.transform = "", t))
            }
            var Be = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            i = n.gpuAcceleration,
                            o = void 0 === i || i,
                            s = n.adaptive,
                            r = void 0 === s || s,
                            a = n.roundOffsets,
                            c = void 0 === a || a,
                            l = {
                                placement: ge(t.placement),
                                variation: Pe(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, je(Object.assign({}, l, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: r,
                            roundOffsets: c
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, je(Object.assign({}, l, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: c
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                },
                He = {
                    passive: !0
                },
                Re = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            i = e.options,
                            o = i.scroll,
                            s = void 0 === o || o,
                            r = i.resize,
                            a = void 0 === r || r,
                            c = he(t.elements.popper),
                            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return s && l.forEach((function(e) {
                            e.addEventListener("scroll", n.update, He)
                        })), a && c.addEventListener("resize", n.update, He),
                            function() {
                                s && l.forEach((function(e) {
                                    e.removeEventListener("scroll", n.update, He)
                                })), a && c.removeEventListener("resize", n.update, He)
                            }
                    },
                    data: {}
                },
                Fe = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function qe(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Fe[e]
                }))
            }
            var We = {
                start: "end",
                end: "start"
            };

            function Ke(e) {
                return e.replace(/start|end/g, (function(e) {
                    return We[e]
                }))
            }

            function Ye(e) {
                var t = he(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function Ve(e) {
                return be(Oe(e)).left + Ye(e).scrollLeft
            }

            function $e(e) {
                var t = Se(e),
                    n = t.overflow,
                    i = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + i)
            }

            function ze(e) {
                return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : fe(e) && $e(e) ? e : ze(Te(e))
            }

            function Ue(e, t) {
                var n;
                void 0 === t && (t = []);
                var i = ze(e),
                    o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    s = he(i),
                    r = o ? [s].concat(s.visualViewport || [], $e(i) ? i : []) : i,
                    a = t.concat(r);
                return o ? a : a.concat(Ue(Te(r)))
            }

            function Ge(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Xe(e, t) {
                return t === G ? Ge(function(e) {
                    var t = he(e),
                        n = Oe(e),
                        i = t.visualViewport,
                        o = n.clientWidth,
                        s = n.clientHeight,
                        r = 0,
                        a = 0;
                    return i && (o = i.width, s = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft, a = i.offsetTop)), {
                        width: o,
                        height: s,
                        x: r + Ve(e),
                        y: a
                    }
                }(e)) : de(t) ? function(e) {
                    var t = be(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : Ge(function(e) {
                    var t, n = Oe(e),
                        i = Ye(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        s = ve(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        r = ve(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        a = -i.scrollLeft + Ve(e),
                        c = -i.scrollTop;
                    return "rtl" === Se(o || n).direction && (a += ve(n.clientWidth, o ? o.clientWidth : 0) - s), {
                        width: s,
                        height: r,
                        x: a,
                        y: c
                    }
                }(Oe(e)))
            }

            function Qe(e) {
                var t, n = e.reference,
                    i = e.element,
                    o = e.placement,
                    s = o ? ge(o) : null,
                    r = o ? Pe(o) : null,
                    a = n.x + n.width / 2 - i.width / 2,
                    c = n.y + n.height / 2 - i.height / 2;
                switch (s) {
                    case F:
                        t = {
                            x: a,
                            y: n.y - i.height
                        };
                        break;
                    case q:
                        t = {
                            x: a,
                            y: n.y + n.height
                        };
                        break;
                    case W:
                        t = {
                            x: n.x + n.width,
                            y: c
                        };
                        break;
                    case K:
                        t = {
                            x: n.x - i.width,
                            y: c
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = s ? xe(s) : null;
                if (null != l) {
                    var u = "y" === l ? "height" : "width";
                    switch (r) {
                        case $:
                            t[l] = t[l] - (n[u] / 2 - i[u] / 2);
                            break;
                        case z:
                            t[l] = t[l] + (n[u] / 2 - i[u] / 2)
                    }
                }
                return t
            }

            function Je(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    i = n.placement,
                    o = void 0 === i ? e.placement : i,
                    s = n.boundary,
                    r = void 0 === s ? U : s,
                    a = n.rootBoundary,
                    c = void 0 === a ? G : a,
                    l = n.elementContext,
                    u = void 0 === l ? X : l,
                    h = n.altBoundary,
                    d = void 0 !== h && h,
                    f = n.padding,
                    p = void 0 === f ? 0 : f,
                    m = Me("number" != typeof p ? p : Ne(p, V)),
                    g = u === X ? Q : X,
                    v = e.rects.popper,
                    _ = e.elements[d ? g : u],
                    y = function(e, t, n) {
                        var i = "clippingParents" === t ? function(e) {
                                var t = Ue(Te(e)),
                                    n = ["absolute", "fixed"].indexOf(Se(e).position) >= 0 && fe(e) ? Le(e) : e;
                                return de(n) ? t.filter((function(e) {
                                    return de(e) && we(e, n) && "body" !== ue(e)
                                })) : []
                            }(e) : [].concat(t),
                            o = [].concat(i, [n]),
                            s = o[0],
                            r = o.reduce((function(t, n) {
                                var i = Xe(e, n);
                                return t.top = ve(i.top, t.top), t.right = _e(i.right, t.right), t.bottom = _e(i.bottom, t.bottom), t.left = ve(i.left, t.left), t
                            }), Xe(e, s));
                        return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
                    }(de(_) ? _ : _.contextElement || Oe(e.elements.popper), r, c),
                    b = be(e.elements.reference),
                    E = Qe({
                        reference: b,
                        element: v,
                        strategy: "absolute",
                        placement: o
                    }),
                    w = Ge(Object.assign({}, v, E)),
                    S = u === X ? w : b,
                    C = {
                        top: y.top - S.top + m.top,
                        bottom: S.bottom - y.bottom + m.bottom,
                        left: y.left - S.left + m.left,
                        right: S.right - y.right + m.right
                    },
                    O = e.modifiersData.offset;
                if (u === X && O) {
                    var T = O[o];
                    Object.keys(C).forEach((function(e) {
                        var t = [W, q].indexOf(e) >= 0 ? 1 : -1,
                            n = [F, q].indexOf(e) >= 0 ? "y" : "x";
                        C[e] += T[n] * t
                    }))
                }
                return C
            }
            var Ze = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        i = e.name;
                    if (!t.modifiersData[i]._skip) {
                        for (var o = n.mainAxis, s = void 0 === o || o, r = n.altAxis, a = void 0 === r || r, c = n.fallbackPlacements, l = n.padding, u = n.boundary, h = n.rootBoundary, d = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, m = n.allowedAutoPlacements, g = t.options.placement, v = ge(g), _ = c || (v !== g && p ? function(e) {
                            if (ge(e) === Y) return [];
                            var t = qe(e);
                            return [Ke(e), t, Ke(t)]
                        }(g) : [qe(g)]), y = [g].concat(_).reduce((function(e, n) {
                            return e.concat(ge(n) === Y ? function(e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                    i = n.placement,
                                    o = n.boundary,
                                    s = n.rootBoundary,
                                    r = n.padding,
                                    a = n.flipVariations,
                                    c = n.allowedAutoPlacements,
                                    l = void 0 === c ? Z : c,
                                    u = Pe(i),
                                    h = u ? a ? J : J.filter((function(e) {
                                        return Pe(e) === u
                                    })) : V,
                                    d = h.filter((function(e) {
                                        return l.indexOf(e) >= 0
                                    }));
                                0 === d.length && (d = h);
                                var f = d.reduce((function(t, n) {
                                    return t[n] = Je(e, {
                                        placement: n,
                                        boundary: o,
                                        rootBoundary: s,
                                        padding: r
                                    })[ge(n)], t
                                }), {});
                                return Object.keys(f).sort((function(e, t) {
                                    return f[e] - f[t]
                                }))
                            }(t, {
                                placement: n,
                                boundary: u,
                                rootBoundary: h,
                                padding: l,
                                flipVariations: p,
                                allowedAutoPlacements: m
                            }) : n)
                        }), []), b = t.rects.reference, E = t.rects.popper, w = new Map, S = !0, C = y[0], O = 0; O < y.length; O++) {
                            var T = y[O],
                                A = ge(T),
                                L = Pe(T) === $,
                                x = [F, q].indexOf(A) >= 0,
                                I = x ? "width" : "height",
                                M = Je(t, {
                                    placement: T,
                                    boundary: u,
                                    rootBoundary: h,
                                    altBoundary: d,
                                    padding: l
                                }),
                                N = x ? L ? W : K : L ? q : F;
                            b[I] > E[I] && (N = qe(N));
                            var D = qe(N),
                                P = [];
                            if (s && P.push(M[A] <= 0), a && P.push(M[N] <= 0, M[D] <= 0), P.every((function(e) {
                                return e
                            }))) {
                                C = T, S = !1;
                                break
                            }
                            w.set(T, P)
                        }
                        if (S)
                            for (var k = function(e) {
                                var t = y.find((function(t) {
                                    var n = w.get(t);
                                    if (n) return n.slice(0, e).every((function(e) {
                                        return e
                                    }))
                                }));
                                if (t) return C = t, "break"
                            }, j = p ? 3 : 1; j > 0 && "break" !== k(j); j--);
                        t.placement !== C && (t.modifiersData[i]._skip = !0, t.placement = C, t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            };

            function et(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function tt(e) {
                return [F, W, q, K].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var nt = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            i = t.rects.reference,
                            o = t.rects.popper,
                            s = t.modifiersData.preventOverflow,
                            r = Je(t, {
                                elementContext: "reference"
                            }),
                            a = Je(t, {
                                altBoundary: !0
                            }),
                            c = et(r, i),
                            l = et(a, o, s),
                            u = tt(c),
                            h = tt(l);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: c,
                            popperEscapeOffsets: l,
                            isReferenceHidden: u,
                            hasPopperEscaped: h
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": u,
                            "data-popper-escaped": h
                        })
                    }
                },
                it = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            i = e.name,
                            o = n.offset,
                            s = void 0 === o ? [0, 0] : o,
                            r = Z.reduce((function(e, n) {
                                return e[n] = function(e, t, n) {
                                    var i = ge(e),
                                        o = [K, F].indexOf(i) >= 0 ? -1 : 1,
                                        s = "function" == typeof n ? n(Object.assign({}, t, {
                                            placement: e
                                        })) : n,
                                        r = s[0],
                                        a = s[1];
                                    return r = r || 0, a = (a || 0) * o, [K, W].indexOf(i) >= 0 ? {
                                        x: a,
                                        y: r
                                    } : {
                                        x: r,
                                        y: a
                                    }
                                }(n, t.rects, s), e
                            }), {}),
                            a = r[t.placement],
                            c = a.x,
                            l = a.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[i] = r
                    }
                },
                ot = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = Qe({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                },
                st = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            i = e.name,
                            o = n.mainAxis,
                            s = void 0 === o || o,
                            r = n.altAxis,
                            a = void 0 !== r && r,
                            c = n.boundary,
                            l = n.rootBoundary,
                            u = n.altBoundary,
                            h = n.padding,
                            d = n.tether,
                            f = void 0 === d || d,
                            p = n.tetherOffset,
                            m = void 0 === p ? 0 : p,
                            g = Je(t, {
                                boundary: c,
                                rootBoundary: l,
                                padding: h,
                                altBoundary: u
                            }),
                            v = ge(t.placement),
                            _ = Pe(t.placement),
                            y = !_,
                            b = xe(v),
                            E = "x" === b ? "y" : "x",
                            w = t.modifiersData.popperOffsets,
                            S = t.rects.reference,
                            C = t.rects.popper,
                            O = "function" == typeof m ? m(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : m,
                            T = "number" == typeof O ? {
                                mainAxis: O,
                                altAxis: O
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, O),
                            A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            L = {
                                x: 0,
                                y: 0
                            };
                        if (w) {
                            if (s) {
                                var x, I = "y" === b ? F : K,
                                    M = "y" === b ? q : W,
                                    N = "y" === b ? "height" : "width",
                                    D = w[b],
                                    P = D + g[I],
                                    k = D - g[M],
                                    j = f ? -C[N] / 2 : 0,
                                    B = _ === $ ? S[N] : C[N],
                                    H = _ === $ ? -C[N] : -S[N],
                                    R = t.elements.arrow,
                                    Y = f && R ? Ee(R) : {
                                        width: 0,
                                        height: 0
                                    },
                                    V = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    z = V[I],
                                    U = V[M],
                                    G = Ie(0, S[N], Y[N]),
                                    X = y ? S[N] / 2 - j - G - z - T.mainAxis : B - G - z - T.mainAxis,
                                    Q = y ? -S[N] / 2 + j + G + U + T.mainAxis : H + G + U + T.mainAxis,
                                    J = t.elements.arrow && Le(t.elements.arrow),
                                    Z = J ? "y" === b ? J.clientTop || 0 : J.clientLeft || 0 : 0,
                                    ee = null != (x = null == A ? void 0 : A[b]) ? x : 0,
                                    te = D + Q - ee,
                                    ne = Ie(f ? _e(P, D + X - ee - Z) : P, D, f ? ve(k, te) : k);
                                w[b] = ne, L[b] = ne - D
                            }
                            if (a) {
                                var ie, oe = "x" === b ? F : K,
                                    se = "x" === b ? q : W,
                                    re = w[E],
                                    ae = "y" === E ? "height" : "width",
                                    ce = re + g[oe],
                                    le = re - g[se],
                                    ue = -1 !== [F, K].indexOf(v),
                                    he = null != (ie = null == A ? void 0 : A[E]) ? ie : 0,
                                    de = ue ? ce : re - S[ae] - C[ae] - he + T.altAxis,
                                    fe = ue ? re + S[ae] + C[ae] - he - T.altAxis : le,
                                    pe = f && ue ? function(e, t, n) {
                                        var i = Ie(e, t, n);
                                        return i > n ? n : i
                                    }(de, re, fe) : Ie(f ? de : ce, re, f ? fe : le);
                                w[E] = pe, L[E] = pe - re
                            }
                            t.modifiersData[i] = L
                        }
                    },
                    requiresIfExists: ["offset"]
                };

            function rt(e, t, n) {
                void 0 === n && (n = !1);
                var i, o, s = fe(t),
                    r = fe(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = ye(t.width) / e.offsetWidth || 1,
                            i = ye(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== i
                    }(t),
                    a = Oe(t),
                    c = be(e, r),
                    l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    u = {
                        x: 0,
                        y: 0
                    };
                return (s || !s && !n) && (("body" !== ue(t) || $e(a)) && (l = (i = t) !== he(i) && fe(i) ? {
                    scrollLeft: (o = i).scrollLeft,
                    scrollTop: o.scrollTop
                } : Ye(i)), fe(t) ? ((u = be(t, !0)).x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Ve(a))), {
                    x: c.left + l.scrollLeft - u.x,
                    y: c.top + l.scrollTop - u.y,
                    width: c.width,
                    height: c.height
                }
            }

            function at(e) {
                var t = new Map,
                    n = new Set,
                    i = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var i = t.get(e);
                            i && o(i)
                        }
                    })), i.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), i
            }
            var ct = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function lt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                }))
            }

            function ut(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    i = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    s = void 0 === o ? ct : o;
                return function(e, t, n) {
                    void 0 === n && (n = s);
                    var o, r, a = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, ct, s),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        c = [],
                        l = !1,
                        u = {
                            state: a,
                            setOptions: function(n) {
                                var o = "function" == typeof n ? n(a.options) : n;
                                h(), a.options = Object.assign({}, s, a.options, o), a.scrollParents = {
                                    reference: de(e) ? Ue(e) : e.contextElement ? Ue(e.contextElement) : [],
                                    popper: Ue(t)
                                };
                                var r, l, d = function(e) {
                                    var t = at(e);
                                    return le.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }((r = [].concat(i, a.options.modifiers), l = r.reduce((function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, t, {
                                        options: Object.assign({}, n.options, t.options),
                                        data: Object.assign({}, n.data, t.data)
                                    }) : t, e
                                }), {}), Object.keys(l).map((function(e) {
                                    return l[e]
                                }))));
                                return a.orderedModifiers = d.filter((function(e) {
                                    return e.enabled
                                })), a.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        i = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" == typeof o) {
                                        var s = o({
                                            state: a,
                                            name: t,
                                            instance: u,
                                            options: i
                                        });
                                        c.push(s || function() {})
                                    }
                                })), u.update()
                            },
                            forceUpdate: function() {
                                if (!l) {
                                    var e = a.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (lt(t, n)) {
                                        a.rects = {
                                            reference: rt(t, Le(n), "fixed" === a.options.strategy),
                                            popper: Ee(n)
                                        }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                                            return a.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var i = 0; i < a.orderedModifiers.length; i++)
                                            if (!0 !== a.reset) {
                                                var o = a.orderedModifiers[i],
                                                    s = o.fn,
                                                    r = o.options,
                                                    c = void 0 === r ? {} : r,
                                                    h = o.name;
                                                "function" == typeof s && (a = s({
                                                    state: a,
                                                    options: c,
                                                    name: h,
                                                    instance: u
                                                }) || a)
                                            } else a.reset = !1, i = -1
                                    }
                                }
                            },
                            update: (o = function() {
                                return new Promise((function(e) {
                                    u.forceUpdate(), e(a)
                                }))
                            }, function() {
                                return r || (r = new Promise((function(e) {
                                    Promise.resolve().then((function() {
                                        r = void 0, e(o())
                                    }))
                                }))), r
                            }),
                            destroy: function() {
                                h(), l = !0
                            }
                        };
                    if (!lt(e, t)) return u;

                    function h() {
                        c.forEach((function(e) {
                            return e()
                        })), c = []
                    }
                    return u.setOptions(n).then((function(e) {
                        !l && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), u
                }
            }
            var ht = ut(),
                dt = ut({
                    defaultModifiers: [Re, ot, Be, me, it, Ze, st, De, nt]
                }),
                ft = ut({
                    defaultModifiers: [Re, ot, Be, me]
                });
            const pt = "transitionend",
                mt = e => {
                    let t = e.getAttribute("data-bs-target");
                    if (!t || "#" === t) {
                        let n = e.getAttribute("href");
                        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? n.trim() : null
                    }
                    return t
                },
                gt = e => {
                    const t = mt(e);
                    return t && document.querySelector(t) ? t : null
                },
                vt = e => {
                    const t = mt(e);
                    return t ? document.querySelector(t) : null
                },
                _t = e => {
                    e.dispatchEvent(new Event(pt))
                },
                yt = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
                bt = e => yt(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
                Et = (e, t, n) => {
                    Object.keys(n).forEach((i => {
                        const o = n[i],
                            s = t[i],
                            r = s && yt(s) ? "element" : null == (a = s) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                        var a;
                        if (!new RegExp(o).test(r)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${o}".`)
                    }))
                },
                wt = e => !(!yt(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                St = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
                Ct = e => {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof e.getRootNode) {
                        const t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? Ct(e.parentNode) : null
                },
                Ot = () => {},
                Tt = e => {
                    e.offsetHeight
                },
                At = () => {
                    const {
                        jQuery: e
                    } = window;
                    return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
                },
                Lt = [],
                xt = () => "rtl" === document.documentElement.dir,
                It = e => {
                    var t;
                    t = () => {
                        const t = At();
                        if (t) {
                            const n = e.NAME,
                                i = t.fn[n];
                            t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                        }
                    }, "loading" === document.readyState ? (Lt.length || document.addEventListener("DOMContentLoaded", (() => {
                        Lt.forEach((e => e()))
                    })), Lt.push(t)) : t()
                },
                Mt = e => {
                    "function" == typeof e && e()
                },
                Nt = (e, t, n = !0) => {
                    if (!n) return void Mt(e);
                    const i = (e => {
                        if (!e) return 0;
                        let {
                            transitionDuration: t,
                            transitionDelay: n
                        } = window.getComputedStyle(e);
                        const i = Number.parseFloat(t),
                            o = Number.parseFloat(n);
                        return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
                    })(t) + 5;
                    let o = !1;
                    const s = ({
                                   target: n
                               }) => {
                        n === t && (o = !0, t.removeEventListener(pt, s), Mt(e))
                    };
                    t.addEventListener(pt, s), setTimeout((() => {
                        o || _t(t)
                    }), i)
                },
                Dt = (e, t, n, i) => {
                    let o = e.indexOf(t);
                    if (-1 === o) return e[!n && i ? e.length - 1 : 0];
                    const s = e.length;
                    return o += n ? 1 : -1, i && (o = (o + s) % s), e[Math.max(0, Math.min(o, s - 1))]
                },
                Pt = /[^.]*(?=\..*)\.|.*/,
                kt = /\..*/,
                jt = /::\d+$/,
                Bt = {};
            let Ht = 1;
            const Rt = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                Ft = /^(mouseenter|mouseleave)/i,
                qt = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

            function Wt(e, t) {
                return t && `${t}::${Ht++}` || e.uidEvent || Ht++
            }

            function Kt(e) {
                const t = Wt(e);
                return e.uidEvent = t, Bt[t] = Bt[t] || {}, Bt[t]
            }

            function Yt(e, t, n = null) {
                const i = Object.keys(e);
                for (let o = 0, s = i.length; o < s; o++) {
                    const s = e[i[o]];
                    if (s.originalHandler === t && s.delegationSelector === n) return s
                }
                return null
            }

            function Vt(e, t, n) {
                const i = "string" == typeof t,
                    o = i ? n : t;
                let s = Ut(e);
                return qt.has(s) || (s = e), [i, o, s]
            }

            function $t(e, t, n, i, o) {
                if ("string" != typeof t || !e) return;
                if (n || (n = i, i = null), Ft.test(t)) {
                    const e = e => function(t) {
                        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
                    };
                    i ? i = e(i) : n = e(n)
                }
                const [s, r, a] = Vt(t, n, i), c = Kt(e), l = c[a] || (c[a] = {}), u = Yt(l, r, s ? n : null);
                if (u) return void(u.oneOff = u.oneOff && o);
                const h = Wt(r, t.replace(Pt, "")),
                    d = s ? function(e, t, n) {
                        return function i(o) {
                            const s = e.querySelectorAll(t);
                            for (let {
                                target: r
                            } = o; r && r !== this; r = r.parentNode)
                                for (let a = s.length; a--;)
                                    if (s[a] === r) return o.delegateTarget = r, i.oneOff && Gt.off(e, o.type, t, n), n.apply(r, [o]);
                            return null
                        }
                    }(e, n, i) : function(e, t) {
                        return function n(i) {
                            return i.delegateTarget = e, n.oneOff && Gt.off(e, i.type, t), t.apply(e, [i])
                        }
                    }(e, n);
                d.delegationSelector = s ? n : null, d.originalHandler = r, d.oneOff = o, d.uidEvent = h, l[h] = d, e.addEventListener(a, d, s)
            }

            function zt(e, t, n, i, o) {
                const s = Yt(t[n], i, o);
                s && (e.removeEventListener(n, s, Boolean(o)), delete t[n][s.uidEvent])
            }

            function Ut(e) {
                return e = e.replace(kt, ""), Rt[e] || e
            }
            const Gt = {
                    on(e, t, n, i) {
                        $t(e, t, n, i, !1)
                    },
                    one(e, t, n, i) {
                        $t(e, t, n, i, !0)
                    },
                    off(e, t, n, i) {
                        if ("string" != typeof t || !e) return;
                        const [o, s, r] = Vt(t, n, i), a = r !== t, c = Kt(e), l = t.startsWith(".");
                        if (void 0 !== s) {
                            if (!c || !c[r]) return;
                            return void zt(e, c, r, s, o ? n : null)
                        }
                        l && Object.keys(c).forEach((n => {
                            ! function(e, t, n, i) {
                                const o = t[n] || {};
                                Object.keys(o).forEach((s => {
                                    if (s.includes(i)) {
                                        const i = o[s];
                                        zt(e, t, n, i.originalHandler, i.delegationSelector)
                                    }
                                }))
                            }(e, c, n, t.slice(1))
                        }));
                        const u = c[r] || {};
                        Object.keys(u).forEach((n => {
                            const i = n.replace(jt, "");
                            if (!a || t.includes(i)) {
                                const t = u[n];
                                zt(e, c, r, t.originalHandler, t.delegationSelector)
                            }
                        }))
                    },
                    trigger(e, t, n) {
                        if ("string" != typeof t || !e) return null;
                        const i = At(),
                            o = Ut(t),
                            s = t !== o,
                            r = qt.has(o);
                        let a, c = !0,
                            l = !0,
                            u = !1,
                            h = null;
                        return s && i && (a = i.Event(t, n), i(e).trigger(a), c = !a.isPropagationStopped(), l = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(o, c, !0)) : h = new CustomEvent(t, {
                            bubbles: c,
                            cancelable: !0
                        }), void 0 !== n && Object.keys(n).forEach((e => {
                            Object.defineProperty(h, e, {
                                get: () => n[e]
                            })
                        })), u && h.preventDefault(), l && e.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
                    }
                },
                Xt = new Map,
                Qt = {
                    set(e, t, n) {
                        Xt.has(e) || Xt.set(e, new Map);
                        const i = Xt.get(e);
                        i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
                    },
                    get: (e, t) => Xt.has(e) && Xt.get(e).get(t) || null,
                    remove(e, t) {
                        if (!Xt.has(e)) return;
                        const n = Xt.get(e);
                        n.delete(t), 0 === n.size && Xt.delete(e)
                    }
                };
            class Jt {
                constructor(e) {
                    (e = bt(e)) && (this._element = e, Qt.set(this._element, this.constructor.DATA_KEY, this))
                }
                dispose() {
                    Qt.remove(this._element, this.constructor.DATA_KEY), Gt.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e => {
                        this[e] = null
                    }))
                }
                _queueCallback(e, t, n = !0) {
                    Nt(e, t, n)
                }
                static getInstance(e) {
                    return Qt.get(bt(e), this.DATA_KEY)
                }
                static getOrCreateInstance(e, t = {}) {
                    return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
                }
                static get VERSION() {
                    return "5.1.3"
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!')
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`
                }
            }
            const Zt = (e, t = "hide") => {
                const n = `click.dismiss${e.EVENT_KEY}`,
                    i = e.NAME;
                Gt.on(document, n, `[data-bs-dismiss="${i}"]`, (function(n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), St(this)) return;
                    const o = vt(this) || this.closest(`.${i}`);
                    e.getOrCreateInstance(o)[t]()
                }))
            };
            class en extends Jt {
                static get NAME() {
                    return "alert"
                }
                close() {
                    if (Gt.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                    this._element.classList.remove("show");
                    const e = this._element.classList.contains("fade");
                    this._queueCallback((() => this._destroyElement()), this._element, e)
                }
                _destroyElement() {
                    this._element.remove(), Gt.trigger(this._element, "closed.bs.alert"), this.dispose()
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = en.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e](this)
                        }
                    }))
                }
            }
            Zt(en, "close"), It(en);
            const tn = '[data-bs-toggle="button"]';
            class nn extends Jt {
                static get NAME() {
                    return "button"
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = nn.getOrCreateInstance(this);
                        "toggle" === e && t[e]()
                    }))
                }
            }

            function on(e) {
                return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
            }

            function sn(e) {
                return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
            }
            Gt.on(document, "click.bs.button.data-api", tn, (e => {
                e.preventDefault();
                const t = e.target.closest(tn);
                nn.getOrCreateInstance(t).toggle()
            })), It(nn);
            const rn = {
                    setDataAttribute(e, t, n) {
                        e.setAttribute(`data-bs-${sn(t)}`, n)
                    },
                    removeDataAttribute(e, t) {
                        e.removeAttribute(`data-bs-${sn(t)}`)
                    },
                    getDataAttributes(e) {
                        if (!e) return {};
                        const t = {};
                        return Object.keys(e.dataset).filter((e => e.startsWith("bs"))).forEach((n => {
                            let i = n.replace(/^bs/, "");
                            i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = on(e.dataset[n])
                        })), t
                    },
                    getDataAttribute: (e, t) => on(e.getAttribute(`data-bs-${sn(t)}`)),
                    offset(e) {
                        const t = e.getBoundingClientRect();
                        return {
                            top: t.top + window.pageYOffset,
                            left: t.left + window.pageXOffset
                        }
                    },
                    position: e => ({
                        top: e.offsetTop,
                        left: e.offsetLeft
                    })
                },
                an = {
                    find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                    findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                    children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
                    parents(e, t) {
                        const n = [];
                        let i = e.parentNode;
                        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(t) && n.push(i), i = i.parentNode;
                        return n
                    },
                    prev(e, t) {
                        let n = e.previousElementSibling;
                        for (; n;) {
                            if (n.matches(t)) return [n];
                            n = n.previousElementSibling
                        }
                        return []
                    },
                    next(e, t) {
                        let n = e.nextElementSibling;
                        for (; n;) {
                            if (n.matches(t)) return [n];
                            n = n.nextElementSibling
                        }
                        return []
                    },
                    focusableChildren(e) {
                        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(", ");
                        return this.find(t, e).filter((e => !St(e) && wt(e)))
                    }
                },
                cn = "carousel",
                ln = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                },
                un = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                hn = "next",
                dn = "prev",
                fn = "left",
                pn = "right",
                mn = {
                    ArrowLeft: pn,
                    ArrowRight: fn
                },
                gn = "slid.bs.carousel",
                vn = "active",
                _n = ".active.carousel-item";
            class yn extends Jt {
                constructor(e, t) {
                    super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = an.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                }
                static get Default() {
                    return ln
                }
                static get NAME() {
                    return cn
                }
                next() {
                    this._slide(hn)
                }
                nextWhenVisible() {
                    !document.hidden && wt(this._element) && this.next()
                }
                prev() {
                    this._slide(dn)
                }
                pause(e) {
                    e || (this._isPaused = !0), an.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (_t(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }
                cycle(e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                to(e) {
                    this._activeElement = an.findOne(_n, this._element);
                    const t = this._getItemIndex(this._activeElement);
                    if (e > this._items.length - 1 || e < 0) return;
                    if (this._isSliding) return void Gt.one(this._element, gn, (() => this.to(e)));
                    if (t === e) return this.pause(), void this.cycle();
                    const n = e > t ? hn : dn;
                    this._slide(n, this._items[e])
                }
                _getConfig(e) {
                    return e = { ...ln,
                        ...rn.getDataAttributes(this._element),
                        ..."object" == typeof e ? e : {}
                    }, Et(cn, e, un), e
                }
                _handleSwipe() {
                    const e = Math.abs(this.touchDeltaX);
                    if (e <= 40) return;
                    const t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t && this._slide(t > 0 ? pn : fn)
                }
                _addEventListeners() {
                    this._config.keyboard && Gt.on(this._element, "keydown.bs.carousel", (e => this._keydown(e))), "hover" === this._config.pause && (Gt.on(this._element, "mouseenter.bs.carousel", (e => this.pause(e))), Gt.on(this._element, "mouseleave.bs.carousel", (e => this.cycle(e)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                }
                _addTouchEventListeners() {
                    const e = e => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
                        t = t => {
                            e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
                        },
                        n = e => {
                            this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
                        },
                        i = t => {
                            e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e => this.cycle(e)), 500 + this._config.interval))
                        };
                    an.find(".carousel-item img", this._element).forEach((e => {
                        Gt.on(e, "dragstart.bs.carousel", (e => e.preventDefault()))
                    })), this._pointerEvent ? (Gt.on(this._element, "pointerdown.bs.carousel", (e => t(e))), Gt.on(this._element, "pointerup.bs.carousel", (e => i(e))), this._element.classList.add("pointer-event")) : (Gt.on(this._element, "touchstart.bs.carousel", (e => t(e))), Gt.on(this._element, "touchmove.bs.carousel", (e => n(e))), Gt.on(this._element, "touchend.bs.carousel", (e => i(e))))
                }
                _keydown(e) {
                    if (/input|textarea/i.test(e.target.tagName)) return;
                    const t = mn[e.key];
                    t && (e.preventDefault(), this._slide(t))
                }
                _getItemIndex(e) {
                    return this._items = e && e.parentNode ? an.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
                }
                _getItemByOrder(e, t) {
                    const n = e === hn;
                    return Dt(this._items, t, n, this._config.wrap)
                }
                _triggerSlideEvent(e, t) {
                    const n = this._getItemIndex(e),
                        i = this._getItemIndex(an.findOne(_n, this._element));
                    return Gt.trigger(this._element, "slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    })
                }
                _setActiveIndicatorElement(e) {
                    if (this._indicatorsElement) {
                        const t = an.findOne(".active", this._indicatorsElement);
                        t.classList.remove(vn), t.removeAttribute("aria-current");
                        const n = an.find("[data-bs-target]", this._indicatorsElement);
                        for (let t = 0; t < n.length; t++)
                            if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                                n[t].classList.add(vn), n[t].setAttribute("aria-current", "true");
                                break
                            }
                    }
                }
                _updateInterval() {
                    const e = this._activeElement || an.findOne(_n, this._element);
                    if (!e) return;
                    const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
                _slide(e, t) {
                    const n = this._directionToOrder(e),
                        i = an.findOne(_n, this._element),
                        o = this._getItemIndex(i),
                        s = t || this._getItemByOrder(n, i),
                        r = this._getItemIndex(s),
                        a = Boolean(this._interval),
                        c = n === hn,
                        l = c ? "carousel-item-start" : "carousel-item-end",
                        u = c ? "carousel-item-next" : "carousel-item-prev",
                        h = this._orderToDirection(n);
                    if (s && s.classList.contains(vn)) return void(this._isSliding = !1);
                    if (this._isSliding) return;
                    if (this._triggerSlideEvent(s, h).defaultPrevented) return;
                    if (!i || !s) return;
                    this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s;
                    const d = () => {
                        Gt.trigger(this._element, gn, {
                            relatedTarget: s,
                            direction: h,
                            from: o,
                            to: r
                        })
                    };
                    if (this._element.classList.contains("slide")) {
                        s.classList.add(u), Tt(s), i.classList.add(l), s.classList.add(l);
                        const e = () => {
                            s.classList.remove(l, u), s.classList.add(vn), i.classList.remove(vn, u, l), this._isSliding = !1, setTimeout(d, 0)
                        };
                        this._queueCallback(e, i, !0)
                    } else i.classList.remove(vn), s.classList.add(vn), this._isSliding = !1, d();
                    a && this.cycle()
                }
                _directionToOrder(e) {
                    return [pn, fn].includes(e) ? xt() ? e === fn ? dn : hn : e === fn ? hn : dn : e
                }
                _orderToDirection(e) {
                    return [hn, dn].includes(e) ? xt() ? e === dn ? fn : pn : e === dn ? pn : fn : e
                }
                static carouselInterface(e, t) {
                    const n = yn.getOrCreateInstance(e, t);
                    let {
                        _config: i
                    } = n;
                    "object" == typeof t && (i = { ...i,
                        ...t
                    });
                    const o = "string" == typeof t ? t : i.slide;
                    if ("number" == typeof t) n.to(t);
                    else if ("string" == typeof o) {
                        if (void 0 === n[o]) throw new TypeError(`No method named "${o}"`);
                        n[o]()
                    } else i.interval && i.ride && (n.pause(), n.cycle())
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        yn.carouselInterface(this, e)
                    }))
                }
                static dataApiClickHandler(e) {
                    const t = vt(this);
                    if (!t || !t.classList.contains("carousel")) return;
                    const n = { ...rn.getDataAttributes(t),
                            ...rn.getDataAttributes(this)
                        },
                        i = this.getAttribute("data-bs-slide-to");
                    i && (n.interval = !1), yn.carouselInterface(t, n), i && yn.getInstance(t).to(i), e.preventDefault()
                }
            }
            Gt.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", yn.dataApiClickHandler), Gt.on(window, "load.bs.carousel.data-api", (() => {
                const e = an.find('[data-bs-ride="carousel"]');
                for (let t = 0, n = e.length; t < n; t++) yn.carouselInterface(e[t], yn.getInstance(e[t]))
            })), It(yn);
            const bn = "collapse",
                En = {
                    toggle: !0,
                    parent: null
                },
                wn = {
                    toggle: "boolean",
                    parent: "(null|element)"
                },
                Sn = "show",
                Cn = "collapse",
                On = "collapsing",
                Tn = "collapsed",
                An = ":scope .collapse .collapse",
                Ln = '[data-bs-toggle="collapse"]';
            class xn extends Jt {
                constructor(e, t) {
                    super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = [];
                    const n = an.find(Ln);
                    for (let e = 0, t = n.length; e < t; e++) {
                        const t = n[e],
                            i = gt(t),
                            o = an.find(i).filter((e => e === this._element));
                        null !== i && o.length && (this._selector = i, this._triggerArray.push(t))
                    }
                    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                }
                static get Default() {
                    return En
                }
                static get NAME() {
                    return bn
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let e, t = [];
                    if (this._config.parent) {
                        const e = an.find(An, this._config.parent);
                        t = an.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((t => !e.includes(t)))
                    }
                    const n = an.findOne(this._selector);
                    if (t.length) {
                        const i = t.find((e => n !== e));
                        if (e = i ? xn.getInstance(i) : null, e && e._isTransitioning) return
                    }
                    if (Gt.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                    t.forEach((t => {
                        n !== t && xn.getOrCreateInstance(t, {
                            toggle: !1
                        }).hide(), e || Qt.set(t, "bs.collapse", null)
                    }));
                    const i = this._getDimension();
                    this._element.classList.remove(Cn), this._element.classList.add(On), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                    const o = `scroll${i[0].toUpperCase()+i.slice(1)}`;
                    this._queueCallback((() => {
                        this._isTransitioning = !1, this._element.classList.remove(On), this._element.classList.add(Cn, Sn), this._element.style[i] = "", Gt.trigger(this._element, "shown.bs.collapse")
                    }), this._element, !0), this._element.style[i] = `${this._element[o]}px`
                }
                hide() {
                    if (this._isTransitioning || !this._isShown()) return;
                    if (Gt.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                    const e = this._getDimension();
                    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Tt(this._element), this._element.classList.add(On), this._element.classList.remove(Cn, Sn);
                    const t = this._triggerArray.length;
                    for (let e = 0; e < t; e++) {
                        const t = this._triggerArray[e],
                            n = vt(t);
                        n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1)
                    }
                    this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => {
                        this._isTransitioning = !1, this._element.classList.remove(On), this._element.classList.add(Cn), Gt.trigger(this._element, "hidden.bs.collapse")
                    }), this._element, !0)
                }
                _isShown(e = this._element) {
                    return e.classList.contains(Sn)
                }
                _getConfig(e) {
                    return (e = { ...En,
                        ...rn.getDataAttributes(this._element),
                        ...e
                    }).toggle = Boolean(e.toggle), e.parent = bt(e.parent), Et(bn, e, wn), e
                }
                _getDimension() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const e = an.find(An, this._config.parent);
                    an.find(Ln, this._config.parent).filter((t => !e.includes(t))).forEach((e => {
                        const t = vt(e);
                        t && this._addAriaAndCollapsedClass([e], this._isShown(t))
                    }))
                }
                _addAriaAndCollapsedClass(e, t) {
                    e.length && e.forEach((e => {
                        t ? e.classList.remove(Tn) : e.classList.add(Tn), e.setAttribute("aria-expanded", t)
                    }))
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = {};
                        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                        const n = xn.getOrCreateInstance(this, t);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e]()
                        }
                    }))
                }
            }
            Gt.on(document, "click.bs.collapse.data-api", Ln, (function(e) {
                ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
                const t = gt(this);
                an.find(t).forEach((e => {
                    xn.getOrCreateInstance(e, {
                        toggle: !1
                    }).toggle()
                }))
            })), It(xn);
            const In = "dropdown",
                Mn = "Escape",
                Nn = "Space",
                Dn = "ArrowUp",
                Pn = "ArrowDown",
                kn = new RegExp("ArrowUp|ArrowDown|Escape"),
                jn = "click.bs.dropdown.data-api",
                Bn = "keydown.bs.dropdown.data-api",
                Hn = "show",
                Rn = '[data-bs-toggle="dropdown"]',
                Fn = ".dropdown-menu",
                qn = xt() ? "top-end" : "top-start",
                Wn = xt() ? "top-start" : "top-end",
                Kn = xt() ? "bottom-end" : "bottom-start",
                Yn = xt() ? "bottom-start" : "bottom-end",
                Vn = xt() ? "left-start" : "right-start",
                $n = xt() ? "right-start" : "left-start",
                zn = {
                    offset: [0, 2],
                    boundary: "clippingParents",
                    reference: "toggle",
                    display: "dynamic",
                    popperConfig: null,
                    autoClose: !0
                },
                Un = {
                    offset: "(array|string|function)",
                    boundary: "(string|element)",
                    reference: "(string|element|object)",
                    display: "string",
                    popperConfig: "(null|object|function)",
                    autoClose: "(boolean|string)"
                };
            class Gn extends Jt {
                constructor(e, t) {
                    super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
                }
                static get Default() {
                    return zn
                }
                static get DefaultType() {
                    return Un
                }
                static get NAME() {
                    return In
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (St(this._element) || this._isShown(this._menu)) return;
                    const e = {
                        relatedTarget: this._element
                    };
                    if (Gt.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) return;
                    const t = Gn.getParentFromElement(this._element);
                    this._inNavbar ? rn.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e => Gt.on(e, "mouseover", Ot))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Hn), this._element.classList.add(Hn), Gt.trigger(this._element, "shown.bs.dropdown", e)
                }
                hide() {
                    if (St(this._element) || !this._isShown(this._menu)) return;
                    const e = {
                        relatedTarget: this._element
                    };
                    this._completeHide(e)
                }
                dispose() {
                    this._popper && this._popper.destroy(), super.dispose()
                }
                update() {
                    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                }
                _completeHide(e) {
                    Gt.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => Gt.off(e, "mouseover", Ot))), this._popper && this._popper.destroy(), this._menu.classList.remove(Hn), this._element.classList.remove(Hn), this._element.setAttribute("aria-expanded", "false"), rn.removeDataAttribute(this._menu, "popper"), Gt.trigger(this._element, "hidden.bs.dropdown", e))
                }
                _getConfig(e) {
                    if (e = { ...this.constructor.Default,
                        ...rn.getDataAttributes(this._element),
                        ...e
                    }, Et(In, e, this.constructor.DefaultType), "object" == typeof e.reference && !yt(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${In.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return e
                }
                _createPopper(t) {
                    if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let n = this._element;
                    "parent" === this._config.reference ? n = t : yt(this._config.reference) ? n = bt(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
                    const i = this._getPopperConfig(),
                        o = i.modifiers.find((e => "applyStyles" === e.name && !1 === e.enabled));
                    this._popper = dt(n, this._menu, i), o && rn.setDataAttribute(this._menu, "popper", "static")
                }
                _isShown(e = this._element) {
                    return e.classList.contains(Hn)
                }
                _getMenuElement() {
                    return an.next(this._element, Fn)[0]
                }
                _getPlacement() {
                    const e = this._element.parentNode;
                    if (e.classList.contains("dropend")) return Vn;
                    if (e.classList.contains("dropstart")) return $n;
                    const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return e.classList.contains("dropup") ? t ? Wn : qn : t ? Yn : Kn
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar")
                }
                _getOffset() {
                    const {
                        offset: e
                    } = this._config;
                    return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
                }
                _getPopperConfig() {
                    const e = {
                        placement: this._getPlacement(),
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }]
                    };
                    return "static" === this._config.display && (e.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]), { ...e,
                        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                    }
                }
                _selectMenuItem({
                                    key: e,
                                    target: t
                                }) {
                    const n = an.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(wt);
                    n.length && Dt(n, t, e === Pn, !n.includes(t)).focus()
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = Gn.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    }))
                }
                static clearMenus(e) {
                    if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
                    const t = an.find(Rn);
                    for (let n = 0, i = t.length; n < i; n++) {
                        const i = Gn.getInstance(t[n]);
                        if (!i || !1 === i._config.autoClose) continue;
                        if (!i._isShown()) continue;
                        const o = {
                            relatedTarget: i._element
                        };
                        if (e) {
                            const t = e.composedPath(),
                                n = t.includes(i._menu);
                            if (t.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                            if (i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                            "click" === e.type && (o.clickEvent = e)
                        }
                        i._completeHide(o)
                    }
                }
                static getParentFromElement(e) {
                    return vt(e) || e.parentNode
                }
                static dataApiKeydownHandler(e) {
                    if (/input|textarea/i.test(e.target.tagName) ? e.key === Nn || e.key !== Mn && (e.key !== Pn && e.key !== Dn || e.target.closest(Fn)) : !kn.test(e.key)) return;
                    const t = this.classList.contains(Hn);
                    if (!t && e.key === Mn) return;
                    if (e.preventDefault(), e.stopPropagation(), St(this)) return;
                    const n = this.matches(Rn) ? this : an.prev(this, Rn)[0],
                        i = Gn.getOrCreateInstance(n);
                    if (e.key !== Mn) return e.key === Dn || e.key === Pn ? (t || i.show(), void i._selectMenuItem(e)) : void(t && e.key !== Nn || Gn.clearMenus());
                    i.hide()
                }
            }
            Gt.on(document, Bn, Rn, Gn.dataApiKeydownHandler), Gt.on(document, Bn, Fn, Gn.dataApiKeydownHandler), Gt.on(document, jn, Gn.clearMenus), Gt.on(document, "keyup.bs.dropdown.data-api", Gn.clearMenus), Gt.on(document, jn, Rn, (function(e) {
                e.preventDefault(), Gn.getOrCreateInstance(this).toggle()
            })), It(Gn);
            const Xn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                Qn = ".sticky-top";
            class Jn {
                constructor() {
                    this._element = document.body
                }
                getWidth() {
                    const e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e)
                }
                hide() {
                    const e = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t => t + e)), this._setElementAttributes(Xn, "paddingRight", (t => t + e)), this._setElementAttributes(Qn, "marginRight", (t => t - e))
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                }
                _setElementAttributes(e, t, n) {
                    const i = this.getWidth();
                    this._applyManipulationCallback(e, (e => {
                        if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                        this._saveInitialAttribute(e, t);
                        const o = window.getComputedStyle(e)[t];
                        e.style[t] = `${n(Number.parseFloat(o))}px`
                    }))
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Xn, "paddingRight"), this._resetElementAttributes(Qn, "marginRight")
                }
                _saveInitialAttribute(e, t) {
                    const n = e.style[t];
                    n && rn.setDataAttribute(e, t, n)
                }
                _resetElementAttributes(e, t) {
                    this._applyManipulationCallback(e, (e => {
                        const n = rn.getDataAttribute(e, t);
                        void 0 === n ? e.style.removeProperty(t) : (rn.removeDataAttribute(e, t), e.style[t] = n)
                    }))
                }
                _applyManipulationCallback(e, t) {
                    yt(e) ? t(e) : an.find(e, this._element).forEach(t)
                }
                isOverflowing() {
                    return this.getWidth() > 0
                }
            }
            const Zn = {
                    className: "modal-backdrop",
                    isVisible: !0,
                    isAnimated: !1,
                    rootElement: "body",
                    clickCallback: null
                },
                ei = {
                    className: "string",
                    isVisible: "boolean",
                    isAnimated: "boolean",
                    rootElement: "(element|string)",
                    clickCallback: "(function|null)"
                },
                ti = "show",
                ni = "mousedown.bs.backdrop";
            class ii {
                constructor(e) {
                    this._config = this._getConfig(e), this._isAppended = !1, this._element = null
                }
                show(e) {
                    this._config.isVisible ? (this._append(), this._config.isAnimated && Tt(this._getElement()), this._getElement().classList.add(ti), this._emulateAnimation((() => {
                        Mt(e)
                    }))) : Mt(e)
                }
                hide(e) {
                    this._config.isVisible ? (this._getElement().classList.remove(ti), this._emulateAnimation((() => {
                        this.dispose(), Mt(e)
                    }))) : Mt(e)
                }
                _getElement() {
                    if (!this._element) {
                        const e = document.createElement("div");
                        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
                    }
                    return this._element
                }
                _getConfig(e) {
                    return (e = { ...Zn,
                        ..."object" == typeof e ? e : {}
                    }).rootElement = bt(e.rootElement), Et("backdrop", e, ei), e
                }
                _append() {
                    this._isAppended || (this._config.rootElement.append(this._getElement()), Gt.on(this._getElement(), ni, (() => {
                        Mt(this._config.clickCallback)
                    })), this._isAppended = !0)
                }
                dispose() {
                    this._isAppended && (Gt.off(this._element, ni), this._element.remove(), this._isAppended = !1)
                }
                _emulateAnimation(e) {
                    Nt(e, this._getElement(), this._config.isAnimated)
                }
            }
            const oi = {
                    trapElement: null,
                    autofocus: !0
                },
                si = {
                    trapElement: "element",
                    autofocus: "boolean"
                },
                ri = ".bs.focustrap",
                ai = "backward";
            class ci {
                constructor(e) {
                    this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
                }
                activate() {
                    const {
                        trapElement: e,
                        autofocus: t
                    } = this._config;
                    this._isActive || (t && e.focus(), Gt.off(document, ri), Gt.on(document, "focusin.bs.focustrap", (e => this._handleFocusin(e))), Gt.on(document, "keydown.tab.bs.focustrap", (e => this._handleKeydown(e))), this._isActive = !0)
                }
                deactivate() {
                    this._isActive && (this._isActive = !1, Gt.off(document, ri))
                }
                _handleFocusin(e) {
                    const {
                        target: t
                    } = e, {
                        trapElement: n
                    } = this._config;
                    if (t === document || t === n || n.contains(t)) return;
                    const i = an.focusableChildren(n);
                    0 === i.length ? n.focus() : this._lastTabNavDirection === ai ? i[i.length - 1].focus() : i[0].focus()
                }
                _handleKeydown(e) {
                    "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? ai : "forward")
                }
                _getConfig(e) {
                    return e = { ...oi,
                        ..."object" == typeof e ? e : {}
                    }, Et("focustrap", e, si), e
                }
            }
            const li = "modal",
                ui = "Escape",
                hi = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0
                },
                di = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean"
                },
                fi = "hidden.bs.modal",
                pi = "show.bs.modal",
                mi = "resize.bs.modal",
                gi = "click.dismiss.bs.modal",
                vi = "keydown.dismiss.bs.modal",
                _i = "mousedown.dismiss.bs.modal",
                yi = "modal-open",
                bi = "show",
                Ei = "modal-static";
            class wi extends Jt {
                constructor(e, t) {
                    super(e), this._config = this._getConfig(t), this._dialog = an.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Jn
                }
                static get Default() {
                    return hi
                }
                static get NAME() {
                    return li
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
                show(e) {
                    this._isShown || this._isTransitioning || Gt.trigger(this._element, pi, {
                        relatedTarget: e
                    }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(yi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), Gt.on(this._dialog, _i, (() => {
                        Gt.one(this._element, "mouseup.dismiss.bs.modal", (e => {
                            e.target === this._element && (this._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((() => this._showElement(e))))
                }
                hide() {
                    if (!this._isShown || this._isTransitioning) return;
                    if (Gt.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                    this._isShown = !1;
                    const e = this._isAnimated();
                    e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(bi), Gt.off(this._element, gi), Gt.off(this._dialog, _i), this._queueCallback((() => this._hideModal()), this._element, e)
                }
                dispose() {
                    [window, this._dialog].forEach((e => Gt.off(e, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                handleUpdate() {
                    this._adjustDialog()
                }
                _initializeBackDrop() {
                    return new ii({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated()
                    })
                }
                _initializeFocusTrap() {
                    return new ci({
                        trapElement: this._element
                    })
                }
                _getConfig(e) {
                    return e = { ...hi,
                        ...rn.getDataAttributes(this._element),
                        ..."object" == typeof e ? e : {}
                    }, Et(li, e, di), e
                }
                _showElement(e) {
                    const t = this._isAnimated(),
                        n = an.findOne(".modal-body", this._dialog);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && Tt(this._element), this._element.classList.add(bi), this._queueCallback((() => {
                        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Gt.trigger(this._element, "shown.bs.modal", {
                            relatedTarget: e
                        })
                    }), this._dialog, t)
                }
                _setEscapeEvent() {
                    this._isShown ? Gt.on(this._element, vi, (e => {
                        this._config.keyboard && e.key === ui ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== ui || this._triggerBackdropTransition()
                    })) : Gt.off(this._element, vi)
                }
                _setResizeEvent() {
                    this._isShown ? Gt.on(window, mi, (() => this._adjustDialog())) : Gt.off(window, mi)
                }
                _hideModal() {
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                        document.body.classList.remove(yi), this._resetAdjustments(), this._scrollBar.reset(), Gt.trigger(this._element, fi)
                    }))
                }
                _showBackdrop(e) {
                    Gt.on(this._element, gi, (e => {
                        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                    })), this._backdrop.show(e)
                }
                _isAnimated() {
                    return this._element.classList.contains("fade")
                }
                _triggerBackdropTransition() {
                    if (Gt.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                    const {
                        classList: e,
                        scrollHeight: t,
                        style: n
                    } = this._element, i = t > document.documentElement.clientHeight;
                    !i && "hidden" === n.overflowY || e.contains(Ei) || (i || (n.overflowY = "hidden"), e.add(Ei), this._queueCallback((() => {
                        e.remove(Ei), i || this._queueCallback((() => {
                            n.overflowY = ""
                        }), this._dialog)
                    }), this._dialog), this._element.focus())
                }
                _adjustDialog() {
                    const e = this._element.scrollHeight > document.documentElement.clientHeight,
                        t = this._scrollBar.getWidth(),
                        n = t > 0;
                    (!n && e && !xt() || n && !e && xt()) && (this._element.style.paddingLeft = `${t}px`), (n && !e && !xt() || !n && e && xt()) && (this._element.style.paddingRight = `${t}px`)
                }
                _resetAdjustments() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }
                static jQueryInterface(e, t) {
                    return this.each((function() {
                        const n = wi.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                            n[e](t)
                        }
                    }))
                }
            }
            Gt.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(e) {
                const t = vt(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(), Gt.one(t, pi, (e => {
                    e.defaultPrevented || Gt.one(t, fi, (() => {
                        wt(this) && this.focus()
                    }))
                }));
                const n = an.findOne(".modal.show");
                n && wi.getInstance(n).hide(), wi.getOrCreateInstance(t).toggle(this)
            })), Zt(wi), It(wi);
            const Si = "offcanvas",
                Ci = {
                    backdrop: !0,
                    keyboard: !0,
                    scroll: !1
                },
                Oi = {
                    backdrop: "boolean",
                    keyboard: "boolean",
                    scroll: "boolean"
                },
                Ti = "show",
                Ai = ".offcanvas.show",
                Li = "hidden.bs.offcanvas";
            class xi extends Jt {
                constructor(e, t) {
                    super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
                }
                static get NAME() {
                    return Si
                }
                static get Default() {
                    return Ci
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
                show(e) {
                    this._isShown || Gt.trigger(this._element, "show.bs.offcanvas", {
                        relatedTarget: e
                    }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new Jn).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ti), this._queueCallback((() => {
                        this._config.scroll || this._focustrap.activate(), Gt.trigger(this._element, "shown.bs.offcanvas", {
                            relatedTarget: e
                        })
                    }), this._element, !0))
                }
                hide() {
                    this._isShown && (Gt.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Ti), this._backdrop.hide(), this._queueCallback((() => {
                        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new Jn).reset(), Gt.trigger(this._element, Li)
                    }), this._element, !0)))
                }
                dispose() {
                    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                _getConfig(e) {
                    return e = { ...Ci,
                        ...rn.getDataAttributes(this._element),
                        ..."object" == typeof e ? e : {}
                    }, Et(Si, e, Oi), e
                }
                _initializeBackDrop() {
                    return new ii({
                        className: "offcanvas-backdrop",
                        isVisible: this._config.backdrop,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: () => this.hide()
                    })
                }
                _initializeFocusTrap() {
                    return new ci({
                        trapElement: this._element
                    })
                }
                _addEventListeners() {
                    Gt.on(this._element, "keydown.dismiss.bs.offcanvas", (e => {
                        this._config.keyboard && "Escape" === e.key && this.hide()
                    }))
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = xi.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e](this)
                        }
                    }))
                }
            }
            Gt.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(e) {
                const t = vt(this);
                if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), St(this)) return;
                Gt.one(t, Li, (() => {
                    wt(this) && this.focus()
                }));
                const n = an.findOne(Ai);
                n && n !== t && xi.getInstance(n).hide(), xi.getOrCreateInstance(t).toggle(this)
            })), Gt.on(window, "load.bs.offcanvas.data-api", (() => an.find(Ai).forEach((e => xi.getOrCreateInstance(e).show())))), Zt(xi), It(xi);
            const Ii = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                Mi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                Ni = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                Di = (e, t) => {
                    const n = e.nodeName.toLowerCase();
                    if (t.includes(n)) return !Ii.has(n) || Boolean(Mi.test(e.nodeValue) || Ni.test(e.nodeValue));
                    const i = t.filter((e => e instanceof RegExp));
                    for (let e = 0, t = i.length; e < t; e++)
                        if (i[e].test(n)) return !0;
                    return !1
                };

            function Pi(e, t, n) {
                if (!e.length) return e;
                if (n && "function" == typeof n) return n(e);
                const i = (new window.DOMParser).parseFromString(e, "text/html"),
                    o = [].concat(...i.body.querySelectorAll("*"));
                for (let e = 0, n = o.length; e < n; e++) {
                    const n = o[e],
                        i = n.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(i)) {
                        n.remove();
                        continue
                    }
                    const s = [].concat(...n.attributes),
                        r = [].concat(t["*"] || [], t[i] || []);
                    s.forEach((e => {
                        Di(e, r) || n.removeAttribute(e.nodeName)
                    }))
                }
                return i.body.innerHTML
            }
            const ki = "tooltip",
                ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
                Bi = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(array|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacements: "array",
                    boundary: "(string|element)",
                    customClass: "(string|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    allowList: "object",
                    popperConfig: "(null|object|function)"
                },
                Hi = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: xt() ? "left" : "right",
                    BOTTOM: "bottom",
                    LEFT: xt() ? "right" : "left"
                },
                Ri = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: [0, 0],
                    container: !1,
                    fallbackPlacements: ["top", "right", "bottom", "left"],
                    boundary: "clippingParents",
                    customClass: "",
                    sanitize: !0,
                    sanitizeFn: null,
                    allowList: {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
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
                        img: ["src", "srcset", "alt", "title", "width", "height"],
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
                    },
                    popperConfig: null
                },
                Fi = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                },
                qi = "fade",
                Wi = "show",
                Ki = "show",
                Yi = "out",
                Vi = ".tooltip-inner",
                $i = ".modal",
                zi = "hide.bs.modal",
                Ui = "hover",
                Gi = "focus";
            class Xi extends Jt {
                constructor(t, n) {
                    if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(n), this.tip = null, this._setListeners()
                }
                static get Default() {
                    return Ri
                }
                static get NAME() {
                    return ki
                }
                static get Event() {
                    return Fi
                }
                static get DefaultType() {
                    return Bi
                }
                enable() {
                    this._isEnabled = !0
                }
                disable() {
                    this._isEnabled = !1
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled
                }
                toggle(e) {
                    if (this._isEnabled)
                        if (e) {
                            const t = this._initializeOnDelegatedTarget(e);
                            t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                        } else {
                            if (this.getTipElement().classList.contains(Wi)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                dispose() {
                    clearTimeout(this._timeout), Gt.off(this._element.closest($i), zi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
                }
                show() {
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (!this.isWithContent() || !this._isEnabled) return;
                    const e = Gt.trigger(this._element, this.constructor.Event.SHOW),
                        t = Ct(this._element),
                        n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
                    if (e.defaultPrevented || !n) return;
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Vi).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                    const i = this.getTipElement(),
                        o = (e => {
                            do {
                                e += Math.floor(1e6 * Math.random())
                            } while (document.getElementById(e));
                            return e
                        })(this.constructor.NAME);
                    i.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && i.classList.add(qi);
                    const s = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                        r = this._getAttachment(s);
                    this._addAttachmentClass(r);
                    const {
                        container: a
                    } = this._config;
                    Qt.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), Gt.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = dt(this._element, i, this._getPopperConfig(r)), i.classList.add(Wi);
                    const c = this._resolvePossibleFunction(this._config.customClass);
                    c && i.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => {
                        Gt.on(e, "mouseover", Ot)
                    }));
                    const l = this.tip.classList.contains(qi);
                    this._queueCallback((() => {
                        const e = this._hoverState;
                        this._hoverState = null, Gt.trigger(this._element, this.constructor.Event.SHOWN), e === Yi && this._leave(null, this)
                    }), this.tip, l)
                }
                hide() {
                    if (!this._popper) return;
                    const e = this.getTipElement();
                    if (Gt.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                    e.classList.remove(Wi), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => Gt.off(e, "mouseover", Ot))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                    const t = this.tip.classList.contains(qi);
                    this._queueCallback((() => {
                        this._isWithActiveTrigger() || (this._hoverState !== Ki && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), Gt.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
                    }), this.tip, t), this._hoverState = ""
                }
                update() {
                    null !== this._popper && this._popper.update()
                }
                isWithContent() {
                    return Boolean(this.getTitle())
                }
                getTipElement() {
                    if (this.tip) return this.tip;
                    const e = document.createElement("div");
                    e.innerHTML = this._config.template;
                    const t = e.children[0];
                    return this.setContent(t), t.classList.remove(qi, Wi), this.tip = t, this.tip
                }
                setContent(e) {
                    this._sanitizeAndSetContent(e, this.getTitle(), Vi)
                }
                _sanitizeAndSetContent(e, t, n) {
                    const i = an.findOne(n, e);
                    t || !i ? this.setElementContent(i, t) : i.remove()
                }
                setElementContent(e, t) {
                    if (null !== e) return yt(t) ? (t = bt(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = Pi(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
                }
                getTitle() {
                    const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
                    return this._resolvePossibleFunction(e)
                }
                updateAttachment(e) {
                    return "right" === e ? "end" : "left" === e ? "start" : e
                }
                _initializeOnDelegatedTarget(e, t) {
                    return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
                }
                _getOffset() {
                    const {
                        offset: e
                    } = this._config;
                    return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
                }
                _resolvePossibleFunction(e) {
                    return "function" == typeof e ? e.call(this._element) : e
                }
                _getPopperConfig(e) {
                    const t = {
                        placement: e,
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`
                            }
                        }, {
                            name: "onChange",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: e => this._handlePopperPlacementChange(e)
                        }],
                        onFirstUpdate: e => {
                            e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                        }
                    };
                    return { ...t,
                        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                    }
                }
                _addAttachmentClass(e) {
                    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)
                }
                _getAttachment(e) {
                    return Hi[e.toUpperCase()]
                }
                _setListeners() {
                    this._config.trigger.split(" ").forEach((e => {
                        if ("click" === e) Gt.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e => this.toggle(e)));
                        else if ("manual" !== e) {
                            const t = e === Ui ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                n = e === Ui ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                            Gt.on(this._element, t, this._config.selector, (e => this._enter(e))), Gt.on(this._element, n, this._config.selector, (e => this._leave(e)))
                        }
                    })), this._hideModalHandler = () => {
                        this._element && this.hide()
                    }, Gt.on(this._element.closest($i), zi, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                        trigger: "manual",
                        selector: ""
                    } : this._fixTitle()
                }
                _fixTitle() {
                    const e = this._element.getAttribute("title"),
                        t = typeof this._element.getAttribute("data-bs-original-title");
                    (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
                }
                _enter(e, t) {
                    t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? Gi : Ui] = !0), t.getTipElement().classList.contains(Wi) || t._hoverState === Ki ? t._hoverState = Ki : (clearTimeout(t._timeout), t._hoverState = Ki, t._config.delay && t._config.delay.show ? t._timeout = setTimeout((() => {
                        t._hoverState === Ki && t.show()
                    }), t._config.delay.show) : t.show())
                }
                _leave(e, t) {
                    t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? Gi : Ui] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Yi, t._config.delay && t._config.delay.hide ? t._timeout = setTimeout((() => {
                        t._hoverState === Yi && t.hide()
                    }), t._config.delay.hide) : t.hide())
                }
                _isWithActiveTrigger() {
                    for (const e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }
                _getConfig(e) {
                    const t = rn.getDataAttributes(this._element);
                    return Object.keys(t).forEach((e => {
                        ji.has(e) && delete t[e]
                    })), (e = { ...this.constructor.Default,
                        ...t,
                        ..."object" == typeof e && e ? e : {}
                    }).container = !1 === e.container ? document.body : bt(e.container), "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Et(ki, e, this.constructor.DefaultType), e.sanitize && (e.template = Pi(e.template, e.allowList, e.sanitizeFn)), e
                }
                _getDelegateConfig() {
                    const e = {};
                    for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                    return e
                }
                _cleanTipClass() {
                    const e = this.getTipElement(),
                        t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                        n = e.getAttribute("class").match(t);
                    null !== n && n.length > 0 && n.map((e => e.trim())).forEach((t => e.classList.remove(t)))
                }
                _getBasicClassPrefix() {
                    return "bs-tooltip"
                }
                _handlePopperPlacementChange(e) {
                    const {
                        state: t
                    } = e;
                    t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
                }
                _disposePopper() {
                    this._popper && (this._popper.destroy(), this._popper = null)
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = Xi.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    }))
                }
            }
            It(Xi);
            const Qi = { ...Xi.Default,
                    placement: "right",
                    offset: [0, 8],
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                },
                Ji = { ...Xi.DefaultType,
                    content: "(string|element|function)"
                },
                Zi = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover"
                };
            class eo extends Xi {
                static get Default() {
                    return Qi
                }
                static get NAME() {
                    return "popover"
                }
                static get Event() {
                    return Zi
                }
                static get DefaultType() {
                    return Ji
                }
                isWithContent() {
                    return this.getTitle() || this._getContent()
                }
                setContent(e) {
                    this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content)
                }
                _getBasicClassPrefix() {
                    return "bs-popover"
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = eo.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    }))
                }
            }
            It(eo);
            const to = "scrollspy",
                no = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                io = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                oo = "active",
                so = ".nav-link, .list-group-item, .dropdown-item",
                ro = "position";
            class ao extends Jt {
                constructor(e, t) {
                    super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Gt.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
                }
                static get Default() {
                    return no
                }
                static get NAME() {
                    return to
                }
                refresh() {
                    const e = this._scrollElement === this._scrollElement.window ? "offset" : ro,
                        t = "auto" === this._config.method ? e : this._config.method,
                        n = t === ro ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), an.find(so, this._config.target).map((e => {
                        const i = gt(e),
                            o = i ? an.findOne(i) : null;
                        if (o) {
                            const e = o.getBoundingClientRect();
                            if (e.width || e.height) return [rn[t](o).top + n, i]
                        }
                        return null
                    })).filter((e => e)).sort(((e, t) => e[0] - t[0])).forEach((e => {
                        this._offsets.push(e[0]), this._targets.push(e[1])
                    }))
                }
                dispose() {
                    Gt.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
                }
                _getConfig(e) {
                    return (e = { ...no,
                        ...rn.getDataAttributes(this._element),
                        ..."object" == typeof e && e ? e : {}
                    }).target = bt(e.target) || document.documentElement, Et(to, e, io), e
                }
                _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                _process() {
                    const e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        const e = this._targets[this._targets.length - 1];
                        this._activeTarget !== e && this._activate(e)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
                    }
                }
                _activate(e) {
                    this._activeTarget = e, this._clear();
                    const t = so.split(",").map((t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),
                        n = an.findOne(t.join(","), this._config.target);
                    n.classList.add(oo), n.classList.contains("dropdown-item") ? an.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(oo) : an.parents(n, ".nav, .list-group").forEach((e => {
                        an.prev(e, ".nav-link, .list-group-item").forEach((e => e.classList.add(oo))), an.prev(e, ".nav-item").forEach((e => {
                            an.children(e, ".nav-link").forEach((e => e.classList.add(oo)))
                        }))
                    })), Gt.trigger(this._scrollElement, "activate.bs.scrollspy", {
                        relatedTarget: e
                    })
                }
                _clear() {
                    an.find(so, this._config.target).filter((e => e.classList.contains(oo))).forEach((e => e.classList.remove(oo)))
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = ao.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    }))
                }
            }
            Gt.on(window, "load.bs.scrollspy.data-api", (() => {
                an.find('[data-bs-spy="scroll"]').forEach((e => new ao(e)))
            })), It(ao);
            const co = "active",
                lo = "fade",
                uo = "show",
                ho = ".active",
                fo = ":scope > li > .active";
            class po extends Jt {
                static get NAME() {
                    return "tab"
                }
                show() {
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(co)) return;
                    let e;
                    const t = vt(this._element),
                        n = this._element.closest(".nav, .list-group");
                    if (n) {
                        const t = "UL" === n.nodeName || "OL" === n.nodeName ? fo : ho;
                        e = an.find(t, n), e = e[e.length - 1]
                    }
                    const i = e ? Gt.trigger(e, "hide.bs.tab", {
                        relatedTarget: this._element
                    }) : null;
                    if (Gt.trigger(this._element, "show.bs.tab", {
                        relatedTarget: e
                    }).defaultPrevented || null !== i && i.defaultPrevented) return;
                    this._activate(this._element, n);
                    const o = () => {
                        Gt.trigger(e, "hidden.bs.tab", {
                            relatedTarget: this._element
                        }), Gt.trigger(this._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    t ? this._activate(t, t.parentNode, o) : o()
                }
                _activate(e, t, n) {
                    const i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? an.children(t, ho) : an.find(fo, t))[0],
                        o = n && i && i.classList.contains(lo),
                        s = () => this._transitionComplete(e, i, n);
                    i && o ? (i.classList.remove(uo), this._queueCallback(s, e, !0)) : s()
                }
                _transitionComplete(e, t, n) {
                    if (t) {
                        t.classList.remove(co);
                        const e = an.findOne(":scope > .dropdown-menu .active", t.parentNode);
                        e && e.classList.remove(co), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    e.classList.add(co), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Tt(e), e.classList.contains(lo) && e.classList.add(uo);
                    let i = e.parentNode;
                    if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
                        const t = e.closest(".dropdown");
                        t && an.find(".dropdown-toggle", t).forEach((e => e.classList.add(co))), e.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = po.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    }))
                }
            }
            Gt.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(e) {
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(), St(this) || po.getOrCreateInstance(this).show()
            })), It(po);
            const mo = "toast",
                go = "hide",
                vo = "show",
                _o = "showing",
                yo = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                bo = {
                    animation: !0,
                    autohide: !0,
                    delay: 5e3
                };
            class Eo extends Jt {
                constructor(e, t) {
                    super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                }
                static get DefaultType() {
                    return yo
                }
                static get Default() {
                    return bo
                }
                static get NAME() {
                    return mo
                }
                show() {
                    Gt.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(go), Tt(this._element), this._element.classList.add(vo), this._element.classList.add(_o), this._queueCallback((() => {
                        this._element.classList.remove(_o), Gt.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
                    }), this._element, this._config.animation))
                }
                hide() {
                    this._element.classList.contains(vo) && (Gt.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(_o), this._queueCallback((() => {
                        this._element.classList.add(go), this._element.classList.remove(_o), this._element.classList.remove(vo), Gt.trigger(this._element, "hidden.bs.toast")
                    }), this._element, this._config.animation)))
                }
                dispose() {
                    this._clearTimeout(), this._element.classList.contains(vo) && this._element.classList.remove(vo), super.dispose()
                }
                _getConfig(e) {
                    return e = { ...bo,
                        ...rn.getDataAttributes(this._element),
                        ..."object" == typeof e && e ? e : {}
                    }, Et(mo, e, this.constructor.DefaultType), e
                }
                _maybeScheduleHide() {
                    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                        this.hide()
                    }), this._config.delay)))
                }
                _onInteraction(e, t) {
                    switch (e.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = t;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = t
                    }
                    if (t) return void this._clearTimeout();
                    const n = e.relatedTarget;
                    this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                }
                _setListeners() {
                    Gt.on(this._element, "mouseover.bs.toast", (e => this._onInteraction(e, !0))), Gt.on(this._element, "mouseout.bs.toast", (e => this._onInteraction(e, !1))), Gt.on(this._element, "focusin.bs.toast", (e => this._onInteraction(e, !0))), Gt.on(this._element, "focusout.bs.toast", (e => this._onInteraction(e, !1)))
                }
                _clearTimeout() {
                    clearTimeout(this._timeout), this._timeout = null
                }
                static jQueryInterface(e) {
                    return this.each((function() {
                        const t = Eo.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e](this)
                        }
                    }))
                }
            }
            Zt(Eo), It(Eo);
            var wo = n(18);
            const So = wo({
                decimals: 0,
                thousand: " "
            });

            // document.addEventListener("DOMContentLoaded", (function() {

                var Co = (e, t) => {
                        document.querySelectorAll(e).forEach((e => {
                            const n = document.getElementById(e.dataset.target);
                            let i = 0;
                            t && (i = t), e.addEventListener("click", (e => {
                                e.preventDefault(), window.scroll({
                                    behavior: "smooth",
                                    left: 0,
                                    top: n.getBoundingClientRect().top + window.scrollY - i
                                })
                            }))
                        }))
                    },
                    Oo = e => {
                        e.addEventListener("keypress", (e => {
                            const t = e.which ? e.which : e.keyCode;
                            46 != t && t > 31 && (t < 48 || t > 57) && e.preventDefault()
                        }));
                        let t = e.value.slice(0, e.value.length - 1);
                        if (t.includes("%")) e.value = "%";
                        else if (t.length >= 3 && t.length <= 4 && !t.includes(".")) e.value = t.slice(0, 2) + "." + t.slice(2, 3) + "%", e.setSelectionRange(4, 4);
                        else if (t.length >= 5 & t.length <= 6) {
                            let n = t.slice(0, 2),
                                i = t.slice(3, 5);
                            e.value = n + "." + i + "%"
                        } else e.value = t + "%", e.setSelectionRange(e.value.length - 1, e.value.length - 1)
                    },
                    To = wo({
                        decimals: 0,
                        thousand: " "
                    }),
                    Ao = e => {
                        const t = To.from(Io.querySelector('input[data-field="limit"]').value),
                            n = Io.querySelector('input[data-field="percent"]').value,
                            i = To.from(n) / 100,
                            o = Io.querySelector('input[data-field="date"]');
                        let s = o.value;
                        "percent" === e.dataset.field && Oo(e), To.from(o.value) > To.from(o.max) && (s = o.max, o.value = o.max), To.from(o.value) < To.from(o.min) && (s = o.min, o.value = o.min);
                        const r = function(e, t) {
                                var n = e.getDate();
                                return e.setMonth(e.getMonth() + +t), e.getDate() != n && e.setDate(0), e.toLocaleString("ru", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                    timezone: "UTC"
                                })
                            }(new Date, s),
                            a = Io.querySelector('input[data-field="type"]:checked').value;
                        let c = 0,
                            l = t,
                            u = l * i / 12,
                            h = 0,
                            d = 0,
                            f = 0,
                            p = 0;
                        1 == a && (p = t * i / 12 / (1 - Math.pow(1 + i / 12, -s))), 2 == a && (c = t / s);
                        for (let e = 0; e < s; e++) 0 == e && (h = c + u), e + 1 == s ? d = c + u : Po.innerText = r, u = Number(l * i / 12), f += Number(u), 1 == a && (c = p - u), 2 == a && (p = c + u), l -= Number(c), u = Number(l * i / 12);
                        if (1 == a && (ko.innerText = To.to(p)), 2 == a && (ko.innerText = `${To.to(h)} ... ${To.to(d)}`), jo) {
                            const e = jo.querySelector(".progress__circle"),
                                n = jo.querySelectorAll(".progress__percent"),
                                i = (100 - f / (t + f) * 100).toFixed(),
                                o = f / (t + f) * 100 + "%",
                                s = "0%";
                            e.style.cssText = `--graph-danger: ${o}; --graph-warning: ${s}`, n.forEach((e => e.innerText = i))
                        }
                        Mo.innerText = To.to(t), No.innerText = To.to(f), Do.innerText = To.to(t + f)
                    },
                    Lo = e => {
                        const t = document.getElementById("cashbackTypeSelect"),
                            n = To.from(t.value),
                            i = Io.querySelector('input[data-field="limit"]'),
                            o = To.from(i.value),
                            s = Io.querySelector('input[data-field="percent"]'),
                            r = To.from(i.value) * To.from(s.value) / 100;
                        "type" === e.dataset.field && (i.value = To.to(n)), Mo.innerText = To.to(o), Ho.innerText = To.to(r)
                    },
                    xo = e => {
                        "percent" === e.dataset.field && Oo(e);
                        const t = To.from(Io.querySelector('input[data-field="limit"]').value),
                            n = To.from(Io.querySelector('input[data-field="date"]').value),
                            i = Io.querySelector('input[data-field="percent"]').value,
                            o = t * n * (To.from(i) / 100),
                            s = 365 * To.from(i);
                        if (Mo.innerText = To.to(t), No.innerText = To.to(o), Do.innerText = To.to(t + o), Bo.innerText = To.to(s), jo) {
                            const e = jo.querySelector(".progress__circle"),
                                n = jo.querySelectorAll(".progress__percent"),
                                i = (100 - o / (t + o) * 100).toFixed(),
                                s = o / (t + o) * 100 + "%",
                                r = "0%";
                            e.style.cssText = `--graph-danger: ${s}; --graph-warning: ${r}`, n.forEach((e => e.innerText = i))
                        }
                    };


                const Io = document.getElementById("calc"),
                    Mo = document.getElementById("calc__sum"),
                    No = document.getElementById("calc__overpay"),
                    Do = document.getElementById("calc__total"),
                    Po = document.getElementById("calc__dateEnd"),
                    ko = document.getElementById("calc__payments"),
                    jo = document.getElementById("calc__progress"),
                    Bo = document.getElementById("calc__psk"),
                    Ho = document.getElementById("calc__cashbackSum");

            // }, false),



                // console.log(Io);

            (() => {
                const e = document.getElementById("themeBtn");
                var themePreme = '.themeBtn';


                //const e = document.querySelectorAll('.themeBtn')

                (() => {
                    const e = localStorage.getItem("theme");

                    console.log(e)

                    if (!e) return localStorage.setItem("theme", "light"), void(document.documentElement.dataset.theme = "light");
                    document.documentElement.dataset.theme = e
                })(),


                    setTimeout(() => {

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

                    }, 1000)





            })(), document.addEventListener("DOMContentLoaded", (function() {

                //console.log(123);



                if(localStorage.getItem("theme") == 'dark'){
                    // f.checked = true
                    document.querySelector('.themeBtn_input').checked = false;
                }else{
                    // f.checked = false
                    document.querySelector('.themeBtn_input').checked = true;
                }

                var e, t;

                t = ".styledSelect", document.querySelectorAll(t).forEach((e => {
                new R(e, {
                    searchEnabled: !1,
                    itemSelectText: ""
                })
                })), e = ".range__input", document.querySelectorAll(e).forEach((e => {
                    const t = e.parentElement.querySelector(".range__value"),
                        n = e => {
                            const t = e.value,
                                n = Number(100 * (t - e.min) / (e.max - e.min));
                            e.style.setProperty("--range-progress", `${n}%`)
                        };
                    n(e), e.addEventListener("input", (() => {
                        n(e), t.value = So.to(+e.value)
                    })), t.addEventListener("keypress", (e => {
                        const t = e.which ? e.which : eevent.keyCode;
                        46 != t && t > 31 && (t < 48 || t > 57) && e.preventDefault()
                    })), t.addEventListener("input", (t => {
                        let i = t.target.value.replace(/\s/g, "");
                        e.value = i, n(e, t.target)
                    })), t.addEventListener("change", (e => {
                        const t = e.target.value.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
                        e.target.value = t
                    }))
                })), (e => {
                    const t = document.querySelectorAll(e),
                        n = document.body,
                        i = document.getElementById("backdrop"),
                        o = e => {
                            e.classList.remove("show"), n.classList.remove("modal-open")
                        };
                    t.length > 0 && t.forEach((e => {
                        const t = e.dataset.target,
                            s = document.getElementById(t),
                            r = s.querySelector('[data-dismiss="modal"]');
                        e.addEventListener("click", (() => {
                            s.classList.add("show"), n.classList.add("modal-open")
                        })), r && r.addEventListener("click", (() => o(s))), i.addEventListener("click", (() => o(s)))
                    }))
                })(".btn__modal-show"), (() => {
                    const e = document.getElementById("btnMenu"),
                        t = document.body,
                        n = document.querySelectorAll(".navigation__item-link"),
                        i = document.getElementById("btn__submenu-back");
                    e.addEventListener("click", (() => {
                        t.classList.toggle("is-show"), t.classList.contains("sub-open") && (t.classList.remove("sub-open"), document.querySelector(".sub-visible").classList.remove("sub-visible"))
                    })), n.length > 0 && n.forEach((e => {
                        e.addEventListener("click", (e => {
                            (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 768 && (e.preventDefault(), e.target.nextElementSibling.classList.add("sub-visible"), t.classList.add("sub-open"))
                        }))
                    })), i && i.addEventListener("click", (() => {
                        t.classList.remove("sub-open"), document.querySelector(".sub-visible").classList.remove("sub-visible")
                    }))
                })
                    (), (() => {
                    const e = document.getElementById("show__comments");
                    if (e) {
                        const t = document.querySelectorAll(".comments__hidden");
                        e.addEventListener("click", (e => {
                            e.preventDefault(), e.target.style.display = "none", t.forEach((e => {
                                e.style.display = "block"
                            }))
                        }))
                    }
                })(), (() => {
                    const e = document.getElementById("compare__fixed");
                    if (e) {
                        function n() {
                            window.addEventListener("scroll", i), i()
                        }

                        function i() {
                            let t = window.pageYOffset || document.documentElement.scrollTop;
                            const n = document.getElementById("compare__details"),
                                i = n.getBoundingClientRect().top + window.scrollY - e.offsetHeight,
                                o = n.getBoundingClientRect().top + n.offsetHeight + window.scrollY - e.offsetHeight;
                            t >= i && t <= o ? e.classList.add("fixed-show") : e.classList.remove("fixed-show")
                        }
                        n()
                    }
                    const t = document.querySelectorAll(".compare__row");
                    if (t.length > 0) {
                        const o = document.querySelectorAll(".card__pagination-item");

                        function s(e, t) {
                            const n = document.querySelector(e).querySelectorAll(t);
                            n[0] && n[0].children[0].classList.add("active"), n[1] && n[1].children[1].classList.add("active")
                        }

                        function r(e, t) {
                            let n = document.createElement("div");
                            e.parentNode.insertBefore(n, e), t.parentNode.insertBefore(e, t), n.parentNode.insertBefore(t, n), n.parentNode.removeChild(n)
                        }
                        s(".compare__list-header", ".card__pagination"), s(".compare__list-fixed", ".card__pagination"), o.forEach((e => {
                            e.addEventListener("click", (e => {
                                const n = e.target.dataset.item,
                                    i = e.target.closest(".compare__item").dataset.index;
                                t.forEach((e => {
                                    const t = e.children;
                                    let o = null,
                                        s = null;
                                    for (const e of t) {
                                        if (e.dataset.index == i) {
                                            const t = e.querySelectorAll(".card__pagination-item")[i - 1];
                                            t && t.classList.add("active"), o = e
                                        }
                                        if (e.dataset.index == n) {
                                            const t = e.querySelectorAll(".card__pagination-item")[n - 1];
                                            t && t.classList.add("active"), s = e
                                        }
                                    }
                                    r(o, s)
                                }))
                            }))
                        }))
                    }
                })(), (e => {
                    const t = document.querySelectorAll(e);
                    t.length > 0 && t.forEach((e => {
                        e.addEventListener("click", (t => {
                            t.preventDefault(), (e => {
                                const t = [];
                                let n = e;
                                for (; n.nextElementSibling;) t.push(n.nextElementSibling), n = n.nextElementSibling;
                                return t
                            })(e).forEach((e => {
                                e.style.display = ""
                            })), e.remove()
                        }))
                    }))
                })(".btn__view-all"), Co(".btn-scroll"), ((e, t) => {
                    document.querySelectorAll(e).forEach((e => {
                        const n = document.getElementById(e.dataset.target).querySelectorAll("tr");
                        let i = [],
                            o = !1;
                        n.forEach((e => {
                            e.classList.contains(t) && i.push(e)
                        })), e.addEventListener("click", (n => {
                            n.preventDefault(), e.lastChild.previousSibling.innerText = o ? e.dataset.textOpen : e.dataset.textHide, o = !o, e.classList.toggle("visible__items"), i.length > 0 && i.forEach((e => {
                                e.classList.toggle(t)
                            }))
                        }))
                    }))
                })(".btn__details", "tr__hidden"), ((e, t) => {
                    const n = document.querySelectorAll(e);
                    if (n.length > 0) {
                        const i = document.getElementById(t),
                            o = i.offsetHeight + 26;
                        let s;
                        const r = Array.from(n).map((e => document.getElementById(e.dataset.target)));
                        Co(e, o), window.addEventListener("scroll", (e => {
                            const t = window.pageYOffset + 10 + o;
                            let a = r.filter((e => {
                                if (e.getBoundingClientRect().top + window.scrollY < t) return e
                            }));
                            a = a[a.length - 1];
                            let c = a ? a.id : "";
                            s !== c && (s = c), n.forEach((e => {
                                c && (e.classList.remove("active"), i.querySelector(`[data-target="${c}"]`).classList.add("active"))
                            }))
                        }))
                    }
                })(".btn-pageNav", "pageNav"),
                    function() {
                        if (Io) {
                            const e = Io.dataset.type,
                                t = Io.querySelectorAll(".calc__input");
                            switch (e) {
                                case "creditCalc":
                                    t.forEach((e => {
                                        Ao(e), e.addEventListener("change", (() => Ao(e)))
                                    }));
                                    break;
                                case "cashbackCalc":
                                    t.forEach((e => {
                                        Lo(e), e.addEventListener("change", (() => Lo(e)))
                                    }));
                                    break;
                                case "loanCalc":
                                    t.forEach((e => {
                                        xo(e), e.addEventListener("change", (() => xo(e)))
                                    }));
                                    break;
                                case "mortgageCalc":
                                    break;
                                default:
                                    console.error("Не определен тип калькулятора")
                            }
                        }
                    }(), (e => {
                    document.querySelectorAll(e).forEach((t => {
                        const n = t.querySelector("button"),
                            i = t.querySelectorAll(`${e}__item-checkbox`),
                            o = n.querySelector(`${e}__btn-count`);
                        i.forEach((n => {
                            n.addEventListener("change", (() => {
                                let n = t.querySelectorAll(`${e}__item-checkbox:checked`).length;
                                0 == !n ? (o.classList.add(".selected"), o.innerText = n) : (o.classList.remove(".selected"), o.innerText = "")
                            }))
                        }))
                    }))
                })(".multipleSelect"), (e => {
                    const t = document.getElementById(e);
                    t && t.addEventListener("click", (e => {
                        e.preventDefault(), window.scroll({
                            behavior: "smooth",
                            left: 0,
                            top: 0
                        })
                    }))
                })("btnScrollUp"), (() => {
                    const e = document.body;
                    let t = document.querySelector(".header").offsetHeight;

                    function n() {
                        window.addEventListener("scroll", (() => {
                            const n = window.pageYOffset;
                            n <= 0 ? e.classList.remove("scroll-up") : (n > t && !e.classList.contains("scroll-down") ? (e.classList.remove("scroll-up"), e.classList.add("scroll-down")) : n < t && e.classList.contains("scroll-down") && (e.classList.remove("scroll-down"), e.classList.add("scroll-up")), t = n)
                        }))
                    }
                    // 768
                    window.innerWidth < 7768 && n(), window.addEventListener("resize", (() => {
                        window.innerWidth < 7768 && n()
                    }))
                })(), [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map((e => new Xi(e)))
            }))
        }()
}();