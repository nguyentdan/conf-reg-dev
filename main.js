(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*********************************************!*\
  !*** multi ./projects/conf-reg/src/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Learning\101\angular\sp-ws\projects\conf-reg\src\main.ts */"rxEq");


/***/ }),

/***/ "34Sh":
/*!****************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/item/add.ts ***!
  \****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "f1S/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../context.service */ "8H4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AddComponent_list_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "list-item", 1);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx_r0.item)("operations", ctx_r0.operations);
} }
var AddComponent = /** @class */ (function () {
    function AddComponent(ctx) {
        this.ctx = ctx;
        this.operations = {};
        this.ctx.docTitle('New Request');
        this.item = {
            value: {},
            fields: this.ctx.metadata.fields
        };
        this.operations[_item__WEBPACK_IMPORTED_MODULE_0__["Operator"].Add] = { caption: 'Submit', disabled: true, color: 'primary' };
    }
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_2__["ContextService"])); };
    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["add-item"]], decls: 1, vars: 1, consts: [[3, "item", "operations", 4, "ngIf"], [3, "item", "operations"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddComponent_list_item_0_Template, 1, 2, "list-item", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _item__WEBPACK_IMPORTED_MODULE_0__["ItemComponent"]], encapsulation: 2 });
    return AddComponent;
}());



/***/ }),

/***/ "3XsA":
/*!*******************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/recycle-bin.ts ***!
  \*******************************************************/
/*! exports provided: RecycleBinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecycleBinComponent", function() { return RecycleBinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context.service */ "8H4g");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sp */ "T44+");



var RecycleBinComponent = /** @class */ (function () {
    function RecycleBinComponent(ctx) {
        this.ctx = ctx;
        this.url = ctx.config.url.web;
        ctx.current.page$.next('Recycle Bin');
    }
    RecycleBinComponent.ɵfac = function RecycleBinComponent_Factory(t) { return new (t || RecycleBinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"])); };
    RecycleBinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecycleBinComponent, selectors: [["app-recycle-bin"]], decls: 3, vars: 1, consts: [[3, "url"], [1, "info"]], template: function RecycleBinComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-recycle-bin", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click on the \"Title\" of the item to restore it.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.url);
        } }, directives: [sp__WEBPACK_IMPORTED_MODULE_2__["RecycleBinComponent"]], encapsulation: 2 });
    return RecycleBinComponent;
}());



/***/ }),

/***/ "4w5X":
/*!************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/list.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context.service */ "8H4g");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-view */ "Tq53");







function ListComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var opt_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r2);
} }
function ListComponent_app_list_view_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-view", 10);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r1.list);
} }
var ListComponent = /** @class */ (function () {
    function ListComponent(sp) {
        this.sp = sp;
        this.stage = 'In progress'; /// load items 'In progress' by default
        this.stages = Object.values(sp.config.Map.Stage);
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        /// copy 'query' if any
        var qry = JSON.parse(JSON.stringify((_a = this.sp.metadata) === null || _a === void 0 ? void 0 : _a.query)) || {};
        if (this.stage) {
            qry.filter = (this.stage === 'In progress')
                ? "Stage ne '" + this.sp.ENUM.Stage.End + "'"
                : "Stage eq '" + this.stage + "'";
        }
        else {
            qry.filter = '';
        }
        this.sp.data.query(qry).subscribe(function (items) {
            /// generate { items<any[], fields:<any[]>, displays:<string[]>, cssKey:<string }
            _this.list = {
                items: items,
                fields: _this.sp.metadata.fields,
                displays: _this.sp.metadata.displays
                    || _this.sp.metadata.fields.map(function (field) { return field.EntityPropertyName; }).slice(0, 5),
                cssKey: 'Stage'
            };
        });
        this.sp.docTitle('List View');
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"])); };
    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 14, vars: 4, consts: [[1, "row", "center"], ["appearance", "fill"], [3, "value", "valueChange", "selectionChange"], ["value", ""], ["value", "In progress"], [3, "value", 4, "ngFor", "ngForOf"], [1, "spacer"], [1, "font-16"], [3, "list", 4, "ngIf"], [3, "value"], [3, "list"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter by stage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ListComponent_Template_mat_select_valueChange_4_listener($event) { return ctx.stage = $event; })("selectionChange", function ListComponent_Template_mat_select_selectionChange_4_listener() { return ctx.ngOnInit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "None/Clear");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_app_list_view_13_Template, 1, 1, "app-list-view", 8);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.stage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Count: ", ctx.list == null ? null : ctx.list.items == null ? null : ctx.list.items.length, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _list_view__WEBPACK_IMPORTED_MODULE_6__["ListViewComponent"]], encapsulation: 2 });
    return ListComponent;
}());



/***/ }),

/***/ "6td9":
/*!*************************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/dashboard/dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sp */ "T44+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../list-view */ "Tq53");










function DashboardComponent_div_0_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var key_r4 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", key_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.display[key_r4] || key_r4);
} }
function DashboardComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sum_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sum_r5.key + ": " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, sum_r5.value, "1.2"), " ");
} }
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2211");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Group by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DashboardComponent_div_0_Template_mat_select_selectionChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.rollup($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_0_mat_option_10_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_0_span_13_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "lib-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectEvent", function DashboardComponent_div_0_Template_lib_list_selectEvent_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectGroup($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.keys.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.keys.toGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Count: ", ctx_r0.list.calc.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, ctx_r0.list.calc.sum));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r0.list);
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uD83D\uDD03 Reload Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-list-view", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.sublist.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r1.sublist);
} }
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(svc) {
        this.svc = svc;
    }
    /// out: { key-1: total-1, ..., key-N: total-N }
    DashboardComponent.prototype._sum = function (list, keys) {
        var total = {};
        keys.forEach(function (k) { return total[k] = 0; });
        if ((list === null || list === void 0 ? void 0 : list.length) && (keys === null || keys === void 0 ? void 0 : keys.length)) {
            list.forEach(function (item) {
                keys.forEach(function (k) { return total[k] += (item[k] || 0); });
            });
            return total;
        }
        return;
    };
    /// generate meta-list
    /// ==> list: { fields<any[], dispalys<string[] }
    DashboardComponent.prototype._generateMetalist = function (key, sumKeys) {
        var _this = this;
        if (key === void 0) { key = this.keys.selected; }
        if (sumKeys === void 0) { sumKeys = this.keys.toSum; }
        var list = {};
        /// list.fields: [ group_field, count_field, sum_fields]
        var groupField = this.svc.metadata.fields.find(function (field) { return field.EntityPropertyName === key; });
        if (!groupField) {
            groupField = {
                EntityPropertyName: key, Title: key, FieldTypeKind: 2
            };
        }
        var countField = { EntityPropertyName: 'Count', Title: 'Count', FieldTypeKind: 1 };
        list.fields = [groupField, countField].concat(sumKeys.map(function (key) { return _this.svc.metadata.fields.find(function (field) { return field.EntityPropertyName === key; }); }));
        /// list.displays
        list.displays = list.fields.map(function (field) { return field === null || field === void 0 ? void 0 : field.EntityPropertyName; });
        return list;
    };
    /// rollup by 'groupKey'
    /// ==> groups with count, and sum for each key in 'sumKeys'
    DashboardComponent.prototype._rollup = function (items, groupKey, sumKeys) {
        if ((items === null || items === void 0 ? void 0 : items.length) && groupKey && (sumKeys === null || sumKeys === void 0 ? void 0 : sumKeys.length)) {
            var groups_1 = [], idx_1 = -1;
            var val_1;
            items.forEach(function (item) {
                try {
                    val_1 = eval("item." + groupKey);
                }
                catch (err) {
                    val_1 = 'UNDEFINED';
                }
                // val = eval(`item?.${groupKey}`) || 'UNDEFINED';
                idx_1 = groups_1.findIndex(function (g) { return g[groupKey] === val_1; });
                if (idx_1 < 0) {
                    /// group is not existed yet
                    /// create new group add item and initialize it
                    var group_1 = {};
                    group_1[groupKey] = val_1;
                    group_1.items = [item];
                    group_1.Count = 1;
                    sumKeys.forEach(function (k) { return group_1[k] = (item[k] || 0); });
                    groups_1.push(group_1);
                }
                else {
                    /// add item to group, increase count, calc sums
                    groups_1[idx_1].items.push(item);
                    groups_1[idx_1].Count++;
                    sumKeys.forEach(function (k) { return groups_1[idx_1][k] += (item[k] || 0); });
                }
            });
            return groups_1;
        }
        return undefined;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svc.data.get().subscribe(function (items) {
            _this.items = items;
            _this.keys = _this.svc.config.data.dashboard.keys;
            /// used to map 'PropertyEntityName' to title/display
            _this.display = _this.svc.config.Map.toString;
            /// group items by selected key
            _this.rollup(_this.keys.selected || _this.keys.toGroup[0]);
            /// set document.title
            _this.svc.current.page$.next('Dashboard');
        });
    };
    ///
    DashboardComponent.prototype.rollup = function (key, sumKeys, items) {
        if (sumKeys === void 0) { sumKeys = this.keys.toSum; }
        if (items === void 0) { items = this.items; }
        this.svc.current.busy$.next(true);
        this.sublist = null; /// reset
        if ((items === null || items === void 0 ? void 0 : items.length) && key) {
            this.keys.selected = key;
            this.list = this._generateMetalist(key, sumKeys);
            this.list.items = this._rollup(this.items, key, sumKeys);
            if (!this.list.calc) {
                this.list.calc = {
                    sum: this._sum(this.list.items, this.keys.toSum),
                    count: this.items.length
                };
            }
        }
        this.svc.current.busy$.next(false);
    };
    ///
    DashboardComponent.prototype.selectGroup = function (group) {
        this.sublist = {
            items: group.payload.items,
            fields: this.svc.metadata.fields,
            displays: this.svc.metadata.displays
                || this.svc.metadata.fields
                    .slice(0, 5)
                    .map(function (field) { return field.EntityPropertyName; }),
            cssKey: 'Stage',
            name: group.payload[this.keys.selected]
        };
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [2, "margin-top", "32px"], [1, "summary-card"], [1, "flex"], [2, "width", "20%"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "list", "selectEvent"], [3, "value"], [1, "row", 2, "align-items", "center"], [1, "spacer"], ["mat-button", "", 3, "click"], [3, "list"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 17, 7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 8, 2, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list == null ? null : ctx.list.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sublist);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], sp__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _list_view__WEBPACK_IMPORTED_MODULE_9__["ListViewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".flex[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 16px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n\n.card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  width: 256px;\n  margin: 32px 8px 16px;\n  padding: 16px;\n}\n\n.summary-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.summary-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  margin-top: -32px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: #ddd;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(240, 240, 240, 0.4);\n  font-size: 18px;\n}\n\n.summary-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  margin-left: -16px;\n}\n\n.summary-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.summary-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUg7O0FBRUE7RUFDRyx1QkFBQTtBQUNIOztBQUNBO0VBQ0csZUFBQTtBQUVIOztBQUNBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRUg7O0FBQ0c7RUFDRyxtQkFBQTtFQUNBLHVCQUFBO0FBRU47O0FBQUc7RUFDRyxpQkFBQTtFQUFtQixpQkFBQTtFQUNuQixrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0ZBQUE7RUFDQSxlQUFBO0FBR047O0FBRk07RUFDRyxrQkFBQTtBQUlUOztBQURHO0VBQ0csZ0JBQUE7QUFHTjs7QUFERztFQUNHLFdBQUE7QUFHTiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZsZXgsIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgbWF0LWNhcmQge1xyXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgIHdpZHRoOiAyNTZweDtcclxuICAgbWFyZ2luOiAzMnB4IDhweCAxNnB4O1xyXG4gICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5zdW1tYXJ5LWNhcmQge1xyXG4gICAqIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIH1cclxuICAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zMnB4OyBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyNDAsMjQwLDI0MCwuNCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICB9XHJcbiAgIC5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });
    return DashboardComponent;
}());



/***/ }),

/***/ "8H4g":
/*!******************************************************!*\
  !*** ./projects/conf-reg/src/app/context.service.ts ***!
  \******************************************************/
/*! exports provided: ContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextService", function() { return ContextService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sp */ "T44+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");









var ContextService = /** @class */ (function () {
    function ContextService(Init, Svc, lis, jsonPipe, snackBar, dialog) {
        var _this = this;
        this.Init = Init;
        this.Svc = Svc;
        this.lis = lis;
        this.jsonPipe = jsonPipe;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.current = {
            item$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            busy$: sp__WEBPACK_IMPORTED_MODULE_1__["Busy$"],
            page$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            error$: sp__WEBPACK_IMPORTED_MODULE_1__["Error$"]
        };
        this.cssClass = function (s) {
            switch (s) {
                case _this.ENUM.Stage.Start:
                    return 'pending';
                case _this.ENUM.Stage.End:
                    return 'completed';
                default:
                    return 'in-progress';
            }
        };
        this.current.item$.subscribe({ next: function (val) { return val; } });
        this.current.page$.subscribe(function (title) { return _this.docTitle(title); });
        sp__WEBPACK_IMPORTED_MODULE_1__["Error$"].subscribe(function (err) { return _this.error(err); });
        this.initLogger();
    }
    Object.defineProperty(ContextService.prototype, "user", {
        get: function () { return this.Init.user; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "config", {
        get: function () { return this.Init.config; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "metadata", {
        get: function () {
            var _a, _b;
            if ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.stores) {
                var index = this.config.data.default || 0;
                return this.config.data.stores[index];
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "ENUM", {
        get: function () { return this.config.Map; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "devMode", {
        get: function () { return this.Init.setting.mode.toLowerCase() === 'dev'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "testing", {
        get: function () { return this.devMode || this.config.troubleshooting; },
        enumerable: false,
        configurable: true
    });
    ;
    ContextService.prototype.docTitle = function (title) {
        document.title = title ? this.config.name + "/" + title : this.config.name;
    };
    ///
    ContextService.prototype.metalist = function (name) {
        /// list info { title<string>, url<string>, query<any> }
        return this.config.lists[name];
    };
    ContextService.prototype.listItems = function (name) {
        /// SpListService.items
        var metalist = this.metalist(name);
        if (metalist) {
            this.lis.set(metalist);
            return this.lis;
        }
        return;
    };
    Object.defineProperty(ContextService.prototype, "data", {
        get: function () {
            try {
                this.lis.set(this.metadata);
                return this.lis;
            }
            catch (err) {
                sp__WEBPACK_IMPORTED_MODULE_1__["Error$"].next({
                    'Data List': 'Data configuration error',
                    Detail: err
                });
                return;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "workflow", {
        get: function () { return this.listItems('Workflow'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextService.prototype, "log", {
        get: function () { return this.listItems('AppLogs'); },
        enumerable: false,
        configurable: true
    });
    ContextService.prototype.wfMessages = function (key, value) {
        var _a;
        var qry = {};
        if (key && value) {
            if ((_a = this.metalist('Workflow')) === null || _a === void 0 ? void 0 : _a.query) {
                Object.assign(qry, this.metalist('Workflow').query);
                qry.filter = qry.filter
                    ? qry.filter + " and " + key + " eq '" + value + "'"
                    : key + " eq '" + value + "'";
            }
        }
        return this.workflow.query(qry);
    };
    ContextService.prototype.getApprovers = function (column, val) {
        var _this = this;
        /// find 'Department' field choices, then find dept from choices
        var field = this.metadata.fields
            .find(function (f) { return f.EntityPropertyName === column; });
        var approval = field.Choices
            .find(function (c) { return c[field.LookupList.value] === val; });
        var approvers = [];
        Object.keys(this.ENUM.ApprovalTitle).forEach(function (key) {
            var members = (key === 'CS') /// 'CS': Cert Submission
                ? val.Author
                    ? [val.Author]
                    : [{
                            Title: _this.user.Title,
                            Name: _this.user.LoginName,
                            Email: _this.findEmail(_this.user)
                        }]
                : approval[key];
            if (members)
                approvers.push({
                    title: _this.ENUM.ApprovalTitle[key],
                    members: members
                });
        });
        return approvers;
    };
    ContextService.prototype.notify = function (msg1, msg2, duration) {
        if (msg2 === void 0) { msg2 = 'OK'; }
        if (duration === void 0) { duration = 1000; }
        this.snackBar.open(msg1, msg2, {
            duration: duration,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
    };
    /// expect approval: { key<string>, title<string>, chain:<any[]>, departmentId:<number> }
    ContextService.prototype.getApprovalMembers = function (request, stage) {
        var _a, _b;
        if (!stage)
            stage = request.Stage;
        // current user
        if (stage === 'Confirmation') {
            return [this.user];
        }
        // author
        if (stage === this.ENUM.Stage.Start
            || stage === this.ENUM.Stage.CS
            || stage === this.ENUM.Stage.End) {
            return [request.Author];
        }
        // find approval members at 'stage'
        if (request.Approvers) {
            var approvalChain = JSON.parse(request.Approvers);
            /// get approval route (from available routes)
            /// return members of that route 
            if (approvalChain) {
                var approval = approvalChain.find(function (stage) { return stage.title === stage; });
                if ((_a = approval === null || approval === void 0 ? void 0 : approval.members) === null || _a === void 0 ? void 0 : _a.length)
                    return approval.members;
            }
        }
        /// get department (from department choices), 
        /// then return department[staff.key] ==> staff members
        if (!request.DepartmentId) {
            this.alert("Failed to get approval (" + stage + ") members in Department ID " + request.DepartmentId + ".", 'Error caught in "GetMembersByDepartmentId()"', 'error');
            return;
        }
        var deptField = this.metadata.fields
            .find(function (field) { return field.EntityPropertyName === 'DepartmentId'; });
        if (!((_b = deptField === null || deptField === void 0 ? void 0 : deptField.Choices) === null || _b === void 0 ? void 0 : _b.length)) {
            this.alert('Failed to find the "DepartmentId" field[Choices] in configuration.', 'Error caught in "GetMembersByDepartmentId()"', 'error');
            return;
        }
        var dept = deptField.Choices
            .find(function (choice) { return choice.ID === request.DepartmentId; });
        if (!dept) {
            this.alert(deptField.Choices, "Failed to find the Department ID " + request.DepartmentId + " field.", 'error');
            return;
        }
        var approvalKey = Object(sp__WEBPACK_IMPORTED_MODULE_1__["findObjectKeyByValue"])(this.ENUM.ApprovalTitle, stage);
        return dept[approvalKey];
    };
    ContextService.prototype.email = function (message) {
        try {
            var data = {
                properties: {
                    __metadata: { type: 'SP.Utilities.EmailProperties' },
                    To: { results: message.To },
                    From: this.findEmail(this.user),
                    Subject: message.Subject,
                    Body: message.Body
                }
            };
            /// email URI - REST API endpoint
            var uri = this.config.url.web + "/_api/SP.Utilities.Utility.SendEmail";
            /// add 'CC' property if message.CC has email addresses
            if (message.CC)
                data.properties.CC = { results: message.CC };
            if (this.config.troubleshooting)
                console.log('Email:', data);
            return (!this.devMode)
                ? this.Svc.post(uri, JSON.stringify(data), 'add', sp__WEBPACK_IMPORTED_MODULE_1__["Odata"].Verbose)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data);
        }
        catch (err) {
            var error = {
                Email: 'Invalid Email Message - email aborted.',
                Detail: err
            };
            sp__WEBPACK_IMPORTED_MODULE_1__["Error$"].next(error);
            // return of(error);
        }
    };
    ContextService.prototype.emailTo = function (request, stage) {
        var _this = this;
        if (!stage)
            stage = request.Stage;
        return this.wfMessages('Stage', stage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (msgs) {
            if (msgs[0]) {
                // staff members
                var members = _this.getApprovalMembers(request, stage);
                if (!(members === null || members === void 0 ? void 0 : members.length)) {
                    sp__WEBPACK_IMPORTED_MODULE_1__["Error$"].next('Could not find approval staff members. Email has been aborted.');
                    return sp__WEBPACK_IMPORTED_MODULE_1__["Error$"];
                }
                var url = "" + _this.ENUM.Url.detail + request.ID;
                msgs[0].To = _this.mapToEmailAddresses(members);
                msgs[0].Body = msgs[0].Body + "<br>" + url + "<br>" + msgs[0].Footer;
                if (msgs[0].CC) {
                    /// convert <string> to <array>
                    try {
                        msgs[0].CC = _this.stringToArray(msgs[0].CC);
                    }
                    catch (err) {
                        _this.alert(err, 'Failed to convert string to array');
                    }
                }
                return _this.email(msgs[0]);
            }
            else {
                var error = {
                    'ContextService.emailTo': "Route info at " + stage + " was not found.",
                    Detail: msgs
                };
                sp__WEBPACK_IMPORTED_MODULE_1__["Error$"].next(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
            }
        }));
    };
    ContextService.prototype.findEmail = function (user) {
        return (user === null || user === void 0 ? void 0 : user.Email) || (user === null || user === void 0 ? void 0 : user.EMail) || (user === null || user === void 0 ? void 0 : user.LoginName) || (user === null || user === void 0 ? void 0 : user.Name);
    };
    ContextService.prototype.mapToEmailAddresses = function (users) {
        if (users === null || users === void 0 ? void 0 : users.length) {
            return users.map(function (user) { return (user === null || user === void 0 ? void 0 : user.Email) || (user === null || user === void 0 ? void 0 : user.EMail) || (user === null || user === void 0 ? void 0 : user.LoginName) || (user === null || user === void 0 ? void 0 : user.Name); });
        }
        return;
    };
    ContextService.prototype.getGroupUsers = function (groupId) {
        return this.Svc.get(this.config.url.web + "/_api/web/SiteGroups(" + groupId + ")/Users");
    };
    ContextService.prototype.queryUsers = function (groupId, key, value) {
        if (value === void 0) { value = ''; }
        var expr = (key && value)
            ? "?$filter=substringof('" + value + "'," + key + ") or substringof('" + value + "',Title)"
            : (value) ? "?$substringof('" + value + "',Title)" : '';
        return this.Svc.get(this.config.url.web + "/_api/web/SiteGroups(" + groupId + ")/Users" + expr);
    };
    ///
    ContextService.prototype.reportError = function (err) {
        sp__WEBPACK_IMPORTED_MODULE_1__["Error$"].next(err);
    };
    ContextService.prototype.alert = function (err, title, cat) {
        if (cat === void 0) { cat = 'error'; }
        if (cat === 'error' || cat === 'warn')
            console[cat](cat + ":\n", err);
        this.dialog
            .open(sp__WEBPACK_IMPORTED_MODULE_1__["GeneralDialog"], {
            data: {
                Title: title,
                Cat: cat,
                Detail: err,
                Type: typeof (err),
            },
            disableClose: true
        })
            .afterClosed()
            .subscribe();
    };
    ContextService.prototype.confirm = function (err, title, cat) {
        if (cat === void 0) { cat = 'warn'; }
        if (cat === 'error' || cat === 'warn')
            console[cat](cat + ":\n", err);
        return this.dialog
            .open(sp__WEBPACK_IMPORTED_MODULE_1__["GeneralDialog"], {
            data: {
                Title: title,
                Cat: cat,
                Detail: err,
                Type: typeof (err),
                Operations: [
                    { name: 'Yes', value: true, class: cat + '-bg', focused: true },
                    { name: 'No', value: false },
                ]
            },
            disableClose: true
        })
            .afterClosed();
    };
    ContextService.prototype.logHeader = function (message, title) {
        var _title = title ? "(" + title + ")" : '';
        return this.user.Title + " " + _title + ", " + new Date().toLocaleString() + ":\n" + (message || 'Updated.');
    };
    ContextService.prototype.error = function (err, requestId, msg) {
        if (this.logger) {
            var logItem = {
                Title: this.config.name,
                RequestId: requestId || (err === null || err === void 0 ? void 0 : err.RequestId),
                Cat: 'Error',
                Action: this.logHeader(this.jsonPipe.transform(err))
            };
            this.logger.write(logItem);
            this.alert(err, err.message || logItem.Title);
        }
        else {
            alert('Error\n' + msg + JSON.stringify(err));
            console.error('Error\n', msg, err);
        }
    };
    /// ---
    ContextService.prototype.initLogger = function () {
        if (this.metalist('AppLogs'))
            this.logger = new Logger(this.config.name, this.lis, this.metalist('AppLogs'));
    };
    ContextService.prototype.stringToArray = function (s, separator) {
        if (s) {
            var ar = void 0;
            if (separator)
                ar = s.split(separator);
            else if (s.includes(','))
                ar = s.split(',');
            else if (s.includes(';'))
                ar = s.split(';');
            else
                ar = [s];
            return ar.map(function (s) { return s.trim(); });
        }
        return;
    };
    ContextService.ɵfac = function ContextService_Factory(t) { return new (t || ContextService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](sp__WEBPACK_IMPORTED_MODULE_1__["SpAppInitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](sp__WEBPACK_IMPORTED_MODULE_1__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](sp__WEBPACK_IMPORTED_MODULE_1__["ListItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
    ContextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ContextService, factory: ContextService.ɵfac, providedIn: 'root' });
    return ContextService;
}());

var Logger = /** @class */ (function () {
    function Logger(app, lis, metalist) {
        this.app = app;
        this.operator = lis;
        this.metalist = metalist;
    }
    Object.defineProperty(Logger.prototype, "op", {
        get: function () {
            this.operator.set(this.metalist);
            return this.operator;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.read = function (requestId, cat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var qry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                qry = { filter: "Title eq '" + this.app + "'" };
                if (!isNaN(requestId)) {
                    qry.filter += " and RequestId eq " + requestId
                        + (!!cat ? " and Cat eq '" + cat + "'" : '');
                }
                return [2 /*return*/, this.op.queryAsync(qry)];
            });
        });
    };
    Logger.prototype.write = function (data, field) {
        if (field === void 0) { field = 'Action'; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!isNaN(data.RequestId)) {
                    return [2 /*return*/, this.read(data.RequestId, data.Cat)
                            .then(function (res) {
                            if ((res === null || res === void 0 ? void 0 : res.length) > 0) {
                                data.ID = res[0].ID;
                                data[field] = res[0][field] + "\n\n" + data[field];
                                return _this.op.updateAsync(data);
                            }
                            return _this.op.addAsync(data);
                        })];
                }
                return [2 /*return*/, this.op.addAsync(data)];
            });
        });
    };
    Logger.prototype.append = function (action, requestId, cat, title) {
        if (cat === void 0) { cat = 'info'; }
        if (title === void 0) { title = this.app; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.write({
                        Title: title,
                        Action: action,
                        RequestId: requestId,
                        Cat: cat
                    })];
            });
        });
    };
    return Logger;
}());


/***/ }),

/***/ "Bd0Q":
/*!*******************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/logger/logger.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerComponent", function() { return LoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sp */ "T44+");




function LoggerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectEvent", function LoggerComponent_div_0_Template_lib_list_selectEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.detail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("logs ", ctx_r0.log.items.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r0.log);
} }
var LoggerComponent = /** @class */ (function () {
    function LoggerComponent(ctx) {
        this.ctx = ctx;
        this.log = {};
    }
    LoggerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.read().then((resp:any[]) => {
        this.ctx.logger.read().then(function (resp) {
            _this.log.items = resp;
            _this.log.fields = [
                // { Title: 'App', EntityPropertyName: 'Title', FieldTypeKind: 2,  Required: true, CssClass: 'col-4' },
                { Title: 'Request ID', EntityPropertyName: 'RequestId', FieldTypeKind: 1, Required: true, CssClass: 'col-1' },
                { Title: 'Cat', EntityPropertyName: 'Cat', FieldTypeKind: 6, Required: true, CssClass: 'col-1' },
                { Title: 'Action', EntityPropertyName: 'Action', FieldTypeKind: 3, Required: true, CssClass: 'col-6' },
                { Title: 'Modified', EntityPropertyName: 'Modified', FieldTypeKind: 4, Required: true, CssClass: 'col-3' }
            ];
            _this.log.displays = ['RequestId', 'Cat', 'Action', 'Modified'];
            _this.ctx.current.page$.next('App Log');
        });
    };
    // read()  {
    //   return this.ctx.logger.read();
    // }
    LoggerComponent.prototype.detail = function (ev) {
        this.ctx.alert(ev.payload.Action, ev.payload.Title + " Request " + ev.payload.RequestId, ev.payload.Cat ? ev.payload.Cat.toLowerCase() : 'info');
    };
    LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"])); };
    LoggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggerComponent, selectors: [["app-logger"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "list", "selectEvent"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoggerComponent_div_0_Template, 4, 2, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.log == null ? null : ctx.log.items);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], sp__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]], encapsulation: 2 });
    return LoggerComponent;
}());



/***/ }),

/***/ "FPsY":
/*!*********************************************************!*\
  !*** ./projects/conf-reg/src/app/app-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comp_item_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp/item/add */ "34Sh");
/* harmony import */ var _comp_item_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp/item/edit */ "VjzG");
/* harmony import */ var _comp_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp/list */ "4w5X");
/* harmony import */ var _comp_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp/dashboard/dashboard.component */ "6td9");
/* harmony import */ var _comp_email_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/email/email.component */ "YTyg");
/* harmony import */ var _comp_logger_logger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp/logger/logger.component */ "Bd0Q");
/* harmony import */ var _comp_recycle_bin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/recycle-bin */ "3XsA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










var routes = [
    { name: 'New Request', path: 'new', component: _comp_item_add__WEBPACK_IMPORTED_MODULE_1__["AddComponent"] },
    { name: 'View Requests', path: 'list', component: _comp_list__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { name: '', path: 'list/:id', component: _comp_item_edit__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { name: 'Summary', path: 'dashboard', component: _comp_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { name: 'Email', path: 'email', component: _comp_email_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"] },
    { name: 'Log', path: 'log', component: _comp_logger_logger_component__WEBPACK_IMPORTED_MODULE_6__["LoggerComponent"] },
    { name: 'Recycle Bin', path: 'recycle', component: _comp_recycle_bin__WEBPACK_IMPORTED_MODULE_7__["RecycleBinComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Igk1":
/*!***********************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/approver/approver.component.ts ***!
  \***********************************************************************/
/*! exports provided: ApproverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverComponent", function() { return ApproverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../members/members.component */ "w4O2");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function ApproverComponent_div_0_mat_chip_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r4.Title, " ");
} }
function ApproverComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproverComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproverComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove this staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Members: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ApproverComponent_div_0_mat_chip_19_Template, 2, 1, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.staff.title, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.staff.title == ctx_r0.enum.Stage.CS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.staff.members);
} }
function ApproverComponent_div_1_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var title_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", title_r9.value, " ");
} }
function ApproverComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Staff Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApproverComponent_div_1_Template_mat_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.staff.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApproverComponent_div_1_mat_option_7_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-members", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemsChange", function ApproverComponent_div_1_Template_app_members_itemsChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.staff.members = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-atcion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproverComponent_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApproverComponent_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.staff.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r1.enum.ApprovalTitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupId", ctx_r1.roles[ctx_r1.staff.title])("field", ctx_r1.metafield)("items", ctx_r1.staff.members)("done", ctx_r1.finishedSearch);
} }
var ApproverComponent = /** @class */ (function () {
    function ApproverComponent(ctx) {
        this.ctx = ctx;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editing = false;
        this.metafield = {
            key: 'Title',
            label: 'Staff members',
            placeholder: 'Type name(s), then select from dropdown',
            appearance: 'outline',
            floatLabel: 'always',
            editing: true
        };
        this.enum = this.ctx.ENUM;
        this.roles = this.ctx.config.roles;
    }
    ApproverComponent.prototype.ngOnChanges = function () {
        if (this.operator) {
            if (this.operator.toLowerCase() === 'edit') {
                this.copy = JSON.stringify(this.staff);
            }
            this.setEditing(true);
        }
    };
    ApproverComponent.prototype.onEdit = function () {
        this.copy = JSON.stringify(this.staff);
        this.operator = 'edit';
        this.setEditing(true);
    };
    ApproverComponent.prototype.save = function (operator) {
        if (operator === void 0) { operator = this.operator; }
        this.emitAction(operator, true, this.staff);
        this.setEditing(false);
    };
    ApproverComponent.prototype.remove = function () {
        this.emitAction('delete', true, this.staff);
    };
    ApproverComponent.prototype.cancel = function () {
        /// edit: restore to the original
        if (this.operator.toLowerCase() === 'edit')
            this.staff = JSON.parse(this.copy);
        this.emitAction(this.operator, false, this.staff);
        this.setEditing(false);
    };
    ///--- private ---
    // private reset() {
    //   this.finishedSearch = true;
    //   this.editing = false;
    //   this.editingChange.emit(this.editing);
    // }
    ApproverComponent.prototype.setEditing = function (editing) {
        this.finishedSearch = !editing;
        this.editing = editing;
    };
    ApproverComponent.prototype.emitAction = function (op, committed, data) {
        this.execute.emit({
            operator: op,
            committed: committed,
            data: data
        });
    };
    ApproverComponent.ɵfac = function ApproverComponent_Factory(t) { return new (t || ApproverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"])); };
    ApproverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApproverComponent, selectors: [["app-approver"]], inputs: { staff: "staff", operator: "operator" }, outputs: { execute: "execute" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "row", 4, "ngIf"], ["class", "inline-edit", 4, "ngIf"], [1, "row"], [1, "col-3"], ["title", "More actions", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"], ["mat-menu-item", "", 3, "click"], [1, "col-9"], ["style", "margin-left:8px;", 4, "ngFor", "ngForOf"], [2, "margin-left", "8px"], [1, "inline-edit"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "groupId", "field", "items", "done", "itemsChange"], [2, "display", "flex"], [1, "spacer"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [3, "value"]], template: function ApproverComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApproverComponent_div_0_Template, 20, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApproverComponent_div_1_Template, 17, 8, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _members_members_component__WEBPACK_IMPORTED_MODULE_9__["MembersComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], encapsulation: 2 });
    return ApproverComponent;
}());



/***/ }),

/***/ "NSLA":
/*!*************************************************!*\
  !*** ./projects/conf-reg/src/app/app.module.ts ***!
  \*************************************************/
/*! exports provided: AppErrorHandler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "FPsY");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sp */ "T44+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "jhKC");
/* harmony import */ var _comp_item_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/item/item */ "f1S/");
/* harmony import */ var _comp_item_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp/item/add */ "34Sh");
/* harmony import */ var _comp_item_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp/item/edit */ "VjzG");
/* harmony import */ var _comp_list_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp/list-view */ "Tq53");
/* harmony import */ var _comp_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp/list */ "4w5X");
/* harmony import */ var _comp_members_members_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comp/members/members.component */ "w4O2");
/* harmony import */ var _comp_approval_steps_approval_steps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comp/approval-steps/approval-steps.component */ "aHqP");
/* harmony import */ var _comp_approver_approver_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comp/approver/approver.component */ "Igk1");
/* harmony import */ var _comp_approval_action_approval_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comp/approval-action/approval-action.component */ "rlX/");
/* harmony import */ var _comp_approval_route_approval_route_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comp/approval-route/approval-route.component */ "doE5");
/* harmony import */ var _comp_recycle_bin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comp/recycle-bin */ "3XsA");
/* harmony import */ var _comp_logger_logger_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comp/logger/logger.component */ "Bd0Q");
/* harmony import */ var _comp_email_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comp/email/email.component */ "YTyg");
/* harmony import */ var _comp_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comp/dashboard/dashboard.component */ "6td9");




/// cust module









// import { ProcessComponent } from './comp/process/process.component';
// import { ApprovalChainComponent } from './comp/approval-chain/approval-chain.component';









var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        if (Error)
            alert(error);
    };
    return AppErrorHandler;
}());

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: sp__WEBPACK_IMPORTED_MODULE_4__["appInit"], deps: [sp__WEBPACK_IMPORTED_MODULE_4__["SpAppInitService"]], multi: true },
            { provide: AppErrorHandler, useClass: AppErrorHandler, multi: true }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                sp__WEBPACK_IMPORTED_MODULE_4__["SpModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _comp_item_item__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"], _comp_item_add__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _comp_item_edit__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _comp_item_edit__WEBPACK_IMPORTED_MODULE_9__["EditDialog"],
        _comp_list__WEBPACK_IMPORTED_MODULE_11__["ListComponent"],
        _comp_list_view__WEBPACK_IMPORTED_MODULE_10__["ListViewComponent"],
        _comp_members_members_component__WEBPACK_IMPORTED_MODULE_12__["MembersComponent"],
        // ProcessComponent,
        // ApprovalChainComponent,
        _comp_recycle_bin__WEBPACK_IMPORTED_MODULE_17__["RecycleBinComponent"],
        _comp_logger_logger_component__WEBPACK_IMPORTED_MODULE_18__["LoggerComponent"],
        _comp_approval_steps_approval_steps_component__WEBPACK_IMPORTED_MODULE_13__["ApprovalStepsComponent"],
        _comp_approver_approver_component__WEBPACK_IMPORTED_MODULE_14__["ApproverComponent"],
        _comp_approval_action_approval_action_component__WEBPACK_IMPORTED_MODULE_15__["ApprovalActionComponent"],
        _comp_approval_route_approval_route_component__WEBPACK_IMPORTED_MODULE_16__["ApprovalRouteComponent"],
        _comp_email_email_component__WEBPACK_IMPORTED_MODULE_19__["EmailComponent"],
        _comp_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        sp__WEBPACK_IMPORTED_MODULE_4__["SpModule"]] }); })();


/***/ }),

/***/ "T44+":
/*!********************************!*\
  !*** ./dist/sp/fesm2015/sp.js ***!
  \********************************/
/*! exports provided: AnnouncementComponent, BaseService, Busy$, Error$, FileInputComponent, FormDialogComponent, FormDigest, GeneralDialog, LibItem, ListComponent, ListFieldService, ListFieldsComponent, ListItemService, MaterialModule, NoSanitizePipe, ObjectFormComponent, Odata, RecycleBinComponent, ResponseType, RxFormComponent, SpAppInitService, SpDataType, SpFileService, SpListService, SpModule, appInit, buildQuery, extractData, fileRead, findDistinct, findDuplicates, findObjectKeyByValue, getHttpOption, httpAsync, merge, recycleBinAsync, removeByItemKey, removeByKeyValue, removeDuplicates, replace, replaceOrAdd, restoreAsync, spUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function() { return AnnouncementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Busy$", function() { return Busy$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error$", function() { return Error$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDigest", function() { return FormDigest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDialog", function() { return GeneralDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibItem", function() { return LibItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFieldService", function() { return ListFieldService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFieldsComponent", function() { return ListFieldsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemService", function() { return ListItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSanitizePipe", function() { return NoSanitizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFormComponent", function() { return ObjectFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Odata", function() { return Odata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecycleBinComponent", function() { return RecycleBinComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormComponent", function() { return RxFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpAppInitService", function() { return SpAppInitService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpDataType", function() { return SpDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpFileService", function() { return SpFileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpListService", function() { return SpListService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpModule", function() { return SpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInit", function() { return appInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQuery", function() { return buildQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractData", function() { return extractData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileRead", function() { return fileRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDistinct", function() { return findDistinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDuplicates", function() { return findDuplicates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findObjectKeyByValue", function() { return findObjectKeyByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpOption", function() { return getHttpOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpAsync", function() { return httpAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recycleBinAsync", function() { return recycleBinAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeByItemKey", function() { return removeByItemKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeByKeyValue", function() { return removeByKeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicates", function() { return removeDuplicates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceOrAdd", function() { return replaceOrAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreAsync", function() { return restoreAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spUser", function() { return spUser; });
/* harmony import */ var E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
























































/**
 * @param file, return-type
 * @returns array buffer, binary string, data url, or text (default)
 */

function fileRead(file, as) {
  var reader = new FileReader();

  switch (as) {
    case 'array-buffer':
      reader.readAsArrayBuffer(file);
      break;

    case 'binary-string':
      reader.readAsBinaryString(file);
      break;

    case 'data-url':
      reader.readAsDataURL(file);
      break;

    default:
      reader.readAsText(file);
  }

  return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
    reader.onload = function (evt) {
      subscriber.next(evt.target.result);
      subscriber.complete();
    };

    reader.onerror = function (evt) {
      return subscriber.error(evt.target.error);
    };
  });
}
/**
 * @param array1:any[]
 * @param key1:string
 * @param array2:any[]
 * @param key2:string
 * @returns number[], indeces of duplicated items in array1
 */


function findDuplicates(a1, k1, a2, k2) {
  if ((a1 === null || a1 === void 0 ? void 0 : a1.length) > 0 && (a2 === null || a2 === void 0 ? void 0 : a2.length) > 0 && (k1 === null || k1 === void 0 ? void 0 : k1.length) > 0) {
    if (!k2) k2 = k1;
    var duplicates = [];

    var _loop = function _loop(i) {
      if (a2.find(function (item) {
        return item[k2].localeCompare(a1[i][k1]) === 0;
      })) duplicates.push(i);
    };

    for (var i = 0; i < a1.length; i++) {
      _loop(i);
    }

    return duplicates;
  }

  return;
}

function removeByItemKey(a, item, key) {
  if ((a === null || a === void 0 ? void 0 : a.length) > 0 && item && key) {
    var idx = a.findIndex(function (i) {
      return i[key] === item[key];
    });
    if (idx > -1) a.splice(idx, 1);
  }
}

function removeByKeyValue(a, key, value) {
  if ((a === null || a === void 0 ? void 0 : a.length) > 0 && key) {
    var idx = a.findIndex(function (i) {
      return i[key] === value;
    });
    if (idx > -1) a.splice(idx, 1);
  }
}

function replace(a, item, key) {
  if ((a === null || a === void 0 ? void 0 : a.length) > 0 && item) {
    var idx = (key === null || key === void 0 ? void 0 : key.length) > 0 ? a.findIndex(function (i) {
      return i[key] === item[key];
    }) : a.indexOf(item);

    if (idx > -1) {
      a[idx] = item;
      return true;
    }
  }

  return false;
}

function replaceOrAdd(a, item, key) {
  if (!a) a = [];
  if (!replace(a, item, key)) a.push(item);
}

function merge(a1, a2, key, datatype) {
  var caseSensitive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if ((a1 === null || a1 === void 0 ? void 0 : a1.length) === 0) return a2;

  if ((a1 === null || a1 === void 0 ? void 0 : a1.length) > 0 && (a2 === null || a2 === void 0 ? void 0 : a2.length) > 0 && (key === null || key === void 0 ? void 0 : key.length) > 0) {
    var distinct = [];
    a2.forEach(function (item) {
      var found = datatype.localeCompare('string') === 0 && !caseSensitive ? a1.find(function (i) {
        return i[key].localeCompare(item[key]) === 0;
      }) : a1.find(function (i) {
        return i[key] === item[key];
      });
      if (!found) distinct.push(item);
    });
    return a1.concat(distinct);
  }

  return;
}

function findDistinct(a, key) {
  if ((a === null || a === void 0 ? void 0 : a.length) > 0) {
    try {
      var o = {},
          existed,
          prop;
      a.forEach(function (item) {
        prop = (key === null || key === void 0 ? void 0 : key.length) ? item[key] : item;
        existed = prop in o;
        if (!existed) o[prop] = item;
      });
      return Object.values(o);
    } catch (err) {
      console.error('Error ocurred in "findDistinct()" function.');
      throw err;
    }
  }
}

function removeDuplicates(a, key) {
  if ((a === null || a === void 0 ? void 0 : a.length) > 0) {
    try {
      var o = {},
          prop,
          len = a.length;

      for (var i = 0; i < len; i++) {
        prop = (key === null || key === void 0 ? void 0 : key.length) > 0 ? a[i][key] : a[i];

        if (o[prop]) {
          a.splice(i, 1);
          len = a.length;
          i--;
        } else o[prop] = true;
      }
    } catch (err) {
      console.error('Error ocurred in "removeDuplicates()" function.');
      throw err;
    }
  }
}

function findObjectKeyByValue(o, value) {
  for (var key in o) {
    if (o[key] === value) {
      console.log('found:', key, value);
      return key;
    }
  }

  return;
} // export const Log = {
//   limit: 10,
//   keys: ['requests', 'responses', 'errors'],    /// default keys
//   readAllKeys: () => Log.keys = Object.keys(localStorage),
//   alert: (msg:string, err?:any) => {
//     let detail = (typeof err === 'object')
//       ? `Status: ${err.status} - ${err.statusText}\nURL: ${err.url}\nMessage: ${err.message}\nError: ${err.error['odata.error']?.message?.value}`
//       : err;
//     alert(`${msg}\n\n${detail}`);;
//     console.error(msg, '\n', err);
//   },
//   read: (key:string) => {
//     if (!!localStorage[key]) {
//       try { return JSON.parse(localStorage[key]); }
//       catch(err) {
//         return localStorage[key];
//       }
//     }
//     return;
//   },
//   write: (key:string, value:any) => {
//     if (Log.keys.indexOf(key) < 0) Log.keys.push(key);
//     let errors = Log.read(key) || [];
//     errors.push(value);
//     if (errors.length > Log.limit) errors.shift();
//     localStorage[key] = JSON.stringify(errors);
//   },
//   error: (msg:string, err?:any) => {
//     Log.write('errors', {
//       date: new Date().toLocaleString(),
//       message: msg,
//       error: err
//     });
//     Log.alert(msg, err);
//   },
//   clear: (key:string) => localStorage.removeItem(key),
//   clearAll: () => localStorage.clear(),
//   resize: (size:number) => {
//     if (size > 0) {
//       if (size < Log.limit) {
//         /// resize the array length if any
//         for (let key in Log.keys) {
//           let ar = Log.read(key);
//           if (ar.length > size) {
//             ar.splice(0, ar.length - size);
//             Log.write(key, ar);
//           }
//         }
//       }
//       Log.limit = size;
//     }
//   }
// }


var SpDataType;

(function (SpDataType) {
  SpDataType[SpDataType["Integer"] = 1] = "Integer";
  SpDataType[SpDataType["Text"] = 2] = "Text";
  SpDataType[SpDataType["Note"] = 3] = "Note";
  SpDataType[SpDataType["DateTime"] = 4] = "DateTime";
  SpDataType[SpDataType["Choice"] = 6] = "Choice";
  SpDataType[SpDataType["Lookup"] = 7] = "Lookup";
  SpDataType[SpDataType["Boolean"] = 8] = "Boolean";
  SpDataType[SpDataType["Number"] = 9] = "Number";
  SpDataType[SpDataType["Attachments"] = 19] = "Attachments";
  SpDataType[SpDataType["User"] = 20] = "User";
})(SpDataType || (SpDataType = {}));

var Odata;

(function (Odata) {
  Odata["None"] = "nometadata";
  Odata["Mini"] = "minmetadata";
  Odata["Verbose"] = "verbose";
})(Odata || (Odata = {})); /// ---  ---


function buildQuery(query) {
  /// build query string
  var qString = '';

  if (query) {
    if (query.select) qString += "".concat(qString.includes('?$') ? '&$' : '?$', "select=").concat(query.select);
    if (query.filter) qString += "".concat(qString.includes('?$') ? '&$' : '?$', "filter=").concat(query.filter);
    if (query.orderby) qString += "".concat(qString.includes('?$') ? '&$' : '?$', "orderby=").concat(query.orderby);
    if (query.expand) qString += "".concat(qString.includes('?$') ? '&$' : '?$', "expand=").concat(query.expand);
    if (query.top) qString += "".concat(qString.includes('?$') ? '&$' : '?$', "top=").concat(query.top);
    if (query.skip) qString += "".concat(qString.includes('?$') ? '&$' : '?$', "skip=").concat(query.skip);
  }

  return qString;
} /// ---  ---


function extractData(obj) {
  var _a;

  return (obj === null || obj === void 0 ? void 0 : obj.value) || ((_a = obj === null || obj === void 0 ? void 0 : obj.d) === null || _a === void 0 ? void 0 : _a.results) || (obj === null || obj === void 0 ? void 0 : obj.d) || obj;
}
/**
 * Sp Form Digest
 */


var FormDigest = /*#__PURE__*/function () {
  function FormDigest() {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FormDigest);
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FormDigest, null, [{
    key: "get",
    value: function get() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FormDigest.url;

      var _a;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var res, fd;
        return E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!!FormDigest.fDigest.value && new Date().getTime() < ((_a = FormDigest.fDigest) === null || _a === void 0 ? void 0 : _a.expires))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", FormDigest.fDigest.value);

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return fetch("".concat(url, "/_api/contextinfo"), {
                  method: 'POST',
                  headers: {
                    'accept': 'application/json;odata=nometadata'
                  }
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                fd = _context.sent;
                FormDigest.fDigest = {
                  value: fd.FormDigestValue,
                  expires: new Date(fd.FormDigestValue.split(',')[1]).getTime() + 1799950 // will expire in (30min - 50ms)

                };
                return _context.abrupt("return", FormDigest.fDigest.value);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 13]]);
      }));
    }
  }]);

  return FormDigest;
}();

FormDigest.url = location.origin;
FormDigest.fDigest = {}; /// --- getHttpOption(args?:any) ---

function getHttpOption(args) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
    var xhm, cnt, opt;
    return E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            xhm = args.xMethod.toUpperCase();
            cnt = "application/".concat(args.type || 'json', ";odata=").concat(args.odata || 'nometadata');
            opt = {
              method: xhm === 'GET' ? 'GET' : 'POST',
              headers: {
                'Accept': cnt
              },
              responseType: (args === null || args === void 0 ? void 0 : args.type) || 'json'
            }; /// GET

            if (!(xhm === 'GET')) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", opt);

          case 5:
            opt.headers['Content-Type'] = cnt;
            _context2.next = 8;
            return FormDigest.get();

          case 8:
            opt.headers['X-RequestDigest'] = _context2.sent;

            if (args === null || args === void 0 ? void 0 : args.data) {
              opt.body = args.type === 'json' ? JSON.stringify(args.data) : args.data;
            } /// POST, ADD


            if (!(xhm === 'POST' || opt.method === 'ADD')) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", opt);

          case 12:
            /// UPDATE (MERGE, PUT), DELETE
            opt.headers['X-HTTP-Method'] = xhm;
            opt.headers['If-Match'] = '*';
            return _context2.abrupt("return", opt);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
} /// --- httpAsync(uri:string, args?:any) ---


function httpAsync(endpoint) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    xMethod: 'get',
    odata: 'nometadata',
    type: 'json'
  };
  return Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
    var opt, res, dat;
    return E_Learning_101_angular_sp_ws_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getHttpOption(args);

          case 2:
            opt = _context3.sent;
            _context3.next = 5;
            return fetch(endpoint, opt);

          case 5:
            res = _context3.sent;

            if (!((res === null || res === void 0 ? void 0 : res.statusText) === 'No Content')) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", extractData(res));

          case 8:
            _context3.prev = 8;
            _context3.next = 11;
            return res[args.type]();

          case 11:
            dat = _context3.sent;
            return _context3.abrupt("return", extractData(dat));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](8);
            console.warn('Failed to convert\n', res, "[".concat(args.type, "]()\nError:"), _context3.t0);
            return _context3.abrupt("return", res);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[8, 15]]);
  }));
} /// --- user ---


function spUser(id, query) {
  var uri = id ? "".concat(location.origin, "/_api/web/GetUserById(").concat(id, ")") : "".concat(location.origin, "/_api/web/currentuser");
  return httpAsync(uri + buildQuery(query));
} /// --- recycle ---


function recycleBinAsync() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.origin;
  return httpAsync("".concat(url, "/_api/web/recyclebin"));
}

function restoreAsync(id) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.origin;
  if (typeof id == 'string') return httpAsync("".concat(url, "/_api/web/recyclebin('").concat(id, "')/restore()"), {
    xMethod: 'post'
  });else if (typeof id == 'number') return httpAsync("".concat(url, "/_api/web/recyclebin(").concat(id, ")/restore()"), {
    xMethod: 'post'
  });else throw 'Error: Invalid ID type';
}

function appInit(svc) {
  return function () {
    return svc.initApp();
  };
}

var SpAppInitService = /*#__PURE__*/function () {
  function SpAppInitService() {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SpAppInitService);
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SpAppInitService, [{
    key: "getSettings",
    value: // constructor() {}
    function getSettings() {
      if (window['ndApp']) {
        /// declared in SP page (index.aspx)
        var mode = window['ndApp'].mode;
        return {
          name: '',
          mode: mode,
          env: window['ndApp'].env[mode] /// env: { url<obj>, configFile<obj> }

        };
      }

      alert('No config settings found.');
      return;
    }
  }, {
    key: "getCurrentUserAsync",
    value: function getCurrentUserAsync() {
      var qry = {
        select: 'ID,Title,Email,LoginName,Groups/Title,Groups/Id',
        expand: 'Groups'
      };
      return spUser(null, qry);
    }
  }, {
    key: "getConfigFileAsync",
    value: function getConfigFileAsync() {
      var metafile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.metafile;
      var uri = "".concat(this.metafile.url, "/_api/Web/GetFolderByServerRelativeUrl('").concat(this.metafile.relative, "')/files('").concat(this.metafile.name, "')/$value");
      return httpAsync(uri);
    }
  }, {
    key: "setUserRoles",
    value: function setUserRoles(user, config) {
      if ((user === null || user === void 0 ? void 0 : user.Groups) && (config === null || config === void 0 ? void 0 : config.roles)) {
        var groupIds = user.Groups.map(function (g) {
          return g.Id;
        });
        user.roles = {};

        for (var name in config.roles) {
          user.roles[name] = groupIds.indexOf(config.roles[name]) > -1;

          if (!user.authorized && 'authorizes' in config && user.roles[name]) {
            user.authorized = config.authorizes.includes(name);
          }
        }
      }
    }
  }, {
    key: "init",
    value: function init(config) {
      if ((config === null || config === void 0 ? void 0 : config.length) > 0) {
        this.user = config[0];
        this.config = config[1];
        this.setUserRoles(this.user, this.config);
      }
    }
  }, {
    key: "initApp",
    value: function initApp() {
      var _this = this;

      try {
        return new Promise(function (resolve, reject) {
          _this.setting = _this.getSettings();
          _this.metafile = _this.setting.env.configFile;
          Promise.all([_this.getCurrentUserAsync(), _this.getConfigFileAsync()]).then(function (res) {
            _this.init(res);

            resolve(true);
          }).catch(function (err) {
            alert('Failed to initialize the app.\n' + JSON.stringify(err));
            console.error('Failed to initialize the app.', err);
            reject(err);
          });
        });
      } catch (err) {
        alert('App Init Error:\n' + err);
      }
    }
  }]);

  return SpAppInitService;
}();

SpAppInitService.ɵfac = function SpAppInitService_Factory(t) {
  return new (t || SpAppInitService)();
};

SpAppInitService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  token: SpAppInitService,
  factory: SpAppInitService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(SpAppInitService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

var Error$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
var Busy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();

var BaseService = /*#__PURE__*/function () {
  function BaseService(http) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BaseService);

    this.http = http;
    this._current = {
      request: undefined,
      response: undefined,
      error: undefined
    };
    Busy$.subscribe({
      next: function next(bool) {
        return bool;
      }
    });
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(BaseService, [{
    key: "current",
    get: function get() {
      return this._current;
    }
  }, {
    key: "intercept",
    value: function intercept(req, next) {
      var _this2 = this;

      Busy$.next(true);
      this._current.request = req;
      return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (res) {
        if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpResponse"]) {
          _this2._current.response = res;
          Busy$.next(false);
        }
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (err) {
        Busy$.next(false);
        _this2._current.error = err;
        var error = {
          'caught in': 'HTTP intercept',
          request: _this2.current.request,
          error: err
        };
        Error$.next(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
      }));
    }
  }, {
    key: "fetch",
    value: function fetch(endpoint) {
      var _this3 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.createArg();
      return args.xMethod.localeCompare('get', 'en', {
        sensitivity: 'base'
      }) === 0 || !(args === null || args === void 0 ? void 0 : args.xMethod) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(getHttpOption(args)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (opt) {
        return _this3.http.get(endpoint, opt);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(extractData)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(getHttpOption(args)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (opt) {
        return _this3.http.post(endpoint, args.data, opt);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(extractData));
    }
  }, {
    key: "get",
    value: function get(uri) {
      var odata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'nometadata';
      var respType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var arg = this.createArg('get', odata, respType);
      return this.fetch(uri, arg);
    }
  }, {
    key: "post",
    value: function post(uri, data) {
      var xMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'post';
      var odata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Odata.None;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'json';
      var arg = this.createArg(xMethod, odata, type, data);
      return this.fetch(uri, arg);
    }
  }, {
    key: "delete",
    value: function _delete(uri) {
      return this.fetch(uri, this.createArg('delete'));
    }
  }, {
    key: "recycleBin",
    value: function recycleBin(url) {
      var odata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'nometadata';
      var respType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var uri = "".concat(url, "/_api/web/recyclebin"),
          arg = this.createArg('get', odata, respType);
      return this.fetch(uri, arg);
    }
  }, {
    key: "recycle",
    value: function recycle(uri) {
      return this.fetch("".concat(uri, "/recycle"), this.createArg('delete'));
    }
  }, {
    key: "restore",
    value: function restore(id, url) {
      var uri = "".concat(url, "/_api/web/recyclebin('").concat(id, "')/restore()");
      return this.fetch(uri, this.createArg('post'));
    } ///---

  }, {
    key: "createArg",
    value: function createArg() {
      var xMethod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
      var odata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'nometadata';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var data = arguments.length > 3 ? arguments[3] : undefined;
      return {
        xMethod: xMethod,
        odata: odata,
        type: type,
        data: data
      };
    }
  }]);

  return BaseService;
}();

BaseService.ɵfac = function BaseService_Factory(t) {
  return new (t || BaseService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]));
};

BaseService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  token: BaseService,
  factory: BaseService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(BaseService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
    }];
  }, null);
})();

var SpListService = /*#__PURE__*/function () {
  function SpListService(svc) {
    var _this4 = this;

    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SpListService);

    this.svc = svc;

    this.get = function () {
      var metalist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.metalist;
      return _this4.svc.get(_this4.uri(metalist));
    };

    this.query = function (query) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this4.metalist.url;
      var uri = _this4.uri(metalist) + buildQuery(query);
      return _this4.svc.get(uri);
    };

    this.add = function (data) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this4.metalist;
      var url = typeof metalist === 'string' ? metalist : metalist.url;
      return _this4.svc.post(_this4.uri(url), data);
    };

    this.update = function (data, title) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this4.metalist;

      var ml = _this4.generateMetalist(metalist, title);

      return ml ? _this4.svc.post(_this4.uri(ml), data, 'merge') : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
    };

    this.recycle = function (title) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this4.metalist;

      var ml = _this4.generateMetalist(metalist, title);

      return ml ? _this4.svc.fetch("".concat(_this4.uri(ml), "/recycle"), {
        xMethod: 'deletel'
      }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
    };
  } ///--- return endpoint/uri for SP list(s)


  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SpListService, [{
    key: "uri",
    value: function uri(metalist) {
      var _a, _b;

      if (!metalist) {
        var msg = "Could not create Endpoint for invalid list info.\n        Requires object with 'url' and 'title' or 'guid' properties.";
        alert(msg);
        throw msg;
      }

      var url;

      if (typeof metalist === 'string') {
        url = metalist.toLowerCase().split('/lists/')[0];
        return "".concat(url, "/_api/lists");
      } /// get web url where the list resides


      url = metalist.url.toLowerCase().split('/lists/')[0];

      if ((_a = metalist.title) === null || _a === void 0 ? void 0 : _a.length) {
        return "".concat(url, "/_api/lists/getbytitle('").concat(metalist.title, "')");
      } else if ((_b = metalist.guid) === null || _b === void 0 ? void 0 : _b.length) {
        return "".concat(url, "/_api/lists('").concat(metalist.guid, ")");
      }

      return "".concat(url, "/_api/lists");
    }
  }, {
    key: "generateMetalist",
    value: function generateMetalist(metalist, title) {
      if (typeof metalist === 'string' && (title === null || title === void 0 ? void 0 : title.length)) return {
        url: metalist,
        title: title
      };
      if ((title || metalist.title || metalist.guid) && metalist.url) return {
        title: title || metalist.title,
        guid: metalist.guid,
        url: metalist.url
      };
      Error$.next({
        Title: 'Error',
        Cat: 'Error',
        Action: 'Failed to build URI Invalid meta-list - missing required List Title/URL.',
        Detail: metalist
      });
      return;
    }
  }]);

  return SpListService;
}();

SpListService.ɵfac = function SpListService_Factory(t) {
  return new (t || SpListService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(BaseService));
};

SpListService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  token: SpListService,
  factory: SpListService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(SpListService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BaseService
    }];
  }, null);
})();

var ListItemService = /*#__PURE__*/function () {
  function ListItemService(svc) {
    var _this5 = this;

    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListItemService);

    this.svc = svc;
    this.metafields = ['FileSystemObjectType', 'ContentTypeId', 'OData__UIVersionString', 'GUID', 'Modified', 'Created', 'Author', 'AuthorId', 'Editor', 'EditorId', 'Attachments', 'AttachmentFiles']; ///--- return endpoint/uri for SP list, items, or item

    this.uri = {
      list: function list() {
        var metalist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this5.metalist;

        try {
          var url = metalist.url.toLowerCase().split('/lists')[0];
          var uri = "".concat(url, "/_api/lists");
          if (metalist.title) return "".concat(uri, "/GetByTitle('").concat(metalist.title, "')");
          if (metalist.guid) return "".concat(uri, "('").concat(metalist.guid, "')");
          return uri;
        } catch (err) {
          Error$.next({
            Title: 'Error',
            Cat: 'Error',
            Action: 'Failed to build URI string.',
            Detail: err
          });
          throw err;
        }
      },
      items: function items() {
        var metalist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this5.metalist;
        return "".concat(_this5.uri.list(metalist), "/items");
      },
      item: function item(id) {
        var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;
        return "".concat(_this5.uri.items(metalist), "(").concat(id, ")");
      },
      fields: function fields() {
        var metalist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this5.metalist;
        return "".concat(_this5.uri.list(metalist), "/fields");
      }
    }; /// attach files

    this.attachSingle = function (id, file) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      var filename = file.renamed || file.name;
      var uri = "".concat(_this5.uri.item(id, metalist), "/AttachmentFiles/add(FileName='").concat(filename, "')");
      return fileRead(file, 'array-buffer').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (buffer) {
        return _this5.svc.post(uri, buffer, 'post');
      }));
    };

    this.detach = function (id, filename) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      var uri = "".concat(_this5.uri.item(id, metalist), "/AttachmentFiles('").concat(filename, "')");
      return _this5.svc.delete(uri);
    };

    this.replaceAttachment = function (id, file) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      var filename = file.renamed || file.name;
      return _this5.detach(id, filename, metalist).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (deleted) {
        return _this5.attachSingle(id, file, metalist);
      }));
    }; /// return files attached


    this.attach = function (id, files) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      return id && files.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (file) {
        return file.replaced ? _this5.replaceAttachment(id, file, metalist) : _this5.attachSingle(id, file, metalist);
      })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])();
    }; ///


    this.get = function (id, query) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      var odata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Odata.None;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'json';
      var uri,
          qry = query || metalist.query;

      if (id) {
        var _qry = {
          select: qry === null || qry === void 0 ? void 0 : qry.select,
          expand: qry === null || qry === void 0 ? void 0 : qry.expand
        };
        uri = "".concat(_this5.uri.item(id, metalist)).concat(buildQuery(_qry));
      } else {
        uri = "".concat(_this5.uri.items(metalist)).concat(buildQuery(qry));
      }

      return _this5.svc.get(uri, odata, type);
    };

    this.query = function (query) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;
      return _this5.get(null, query, metalist);
    }; /// return added with attachments


    this.add = function (data, attachments) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      var odata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Odata.None;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'json';

      var uri = _this5.uri.items(metalist);

      var resp$ = _this5.svc.post(uri, data, 'post', odata, type);

      if (!(attachments === null || attachments === void 0 ? void 0 : attachments.length)) return resp$;
      var result = {};
      return resp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (added) {
        result = added;
        return _this5.attach(added.ID, attachments, metalist);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (attached) {
        result.AttachmentFiles ? result.AttachmentFiles.push(attached) : result.AttachmentFiles = [attached];
        return result;
      }));
    };

    this.update = function (data, attachments) {
      var metalist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this5.metalist;
      var odata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Odata.None;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'json';

      var _a;

      var uri = _this5.uri.item(data.ID, metalist);

      var arg = {
        xMethod: 'merge',
        data: data,
        odata: odata,
        type: type
      }; /// remove read-only fields before updating

      var _iterator = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(_this5.metafields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _field = _step.value;
          delete data[_field];
        } /// remove lookup fields

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if ((_a = metalist === null || metalist === void 0 ? void 0 : metalist.query) === null || _a === void 0 ? void 0 : _a.expand) {
        var lookups = metalist.query.expand.split(',');

        var _iterator2 = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(lookups),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var field = _step2.value;
            delete data[field];
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      var response$ = _this5.svc.fetch(uri, arg);

      return (attachments === null || attachments === void 0 ? void 0 : attachments.length) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(response$, _this5.attach(data.ID, attachments, metalist)) : response$;
    };

    this.recycle = function (item) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;

      try {
        var id = (item === null || item === void 0 ? void 0 : item.ID) || item;
        if (!!id && !!metalist) return _this5.svc.recycle(_this5.uri.item(id, metalist));
        alert('Invalid ID.');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])('Invalid ID or metalist.');
      } catch (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
      }
    }; ///


    this.getFieldChoices = function (column) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;
      var uri = "".concat(_this5.uri.fields(metalist), "/getbytitle('").concat(column, "')");
      if (metalist.query) uri += buildQuery(metalist.query); // return this.svc.get(uri);

      return _this5.svc.fetch(uri);
    };

    this.queryAsync = function (query) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;
      var odata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Odata.None;
      var respType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';
      var uri = "".concat(_this5.uri.items(metalist)).concat(buildQuery(query || metalist.query));
      return httpAsync(uri, {
        xMethod: 'get',
        odata: odata,
        type: respType
      });
    };

    this.addAsync = function (data) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;
      var odata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Odata.None;
      var respType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';

      var uri = _this5.uri.items(metalist);

      return httpAsync(uri, {
        xMethod: 'post',
        data: data,
        odata: odata,
        type: respType
      });
    };

    this.updateAsync = function (data) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this5.metalist;
      var odata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Odata.None;
      var respType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';

      var _a;

      var uri = _this5.uri.item(data.ID, metalist); /// remove read-only fields before updating


      var _iterator3 = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(_this5.metafields),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _field2 = _step3.value;
          delete data[_field2];
        } /// remove lookup fields

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if ((_a = metalist === null || metalist === void 0 ? void 0 : metalist.query) === null || _a === void 0 ? void 0 : _a.expand) {
        var lookups = metalist.query.expand.split(',');

        var _iterator4 = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(lookups),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var field = _step4.value;
            delete data[field];
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      return httpAsync(uri, {
        xMethod: 'merge',
        data: data,
        odata: odata,
        type: respType
      });
    };
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListItemService, [{
    key: "set",
    value: function set(metalist) {
      this.metalist = metalist;
    }
  }]);

  return ListItemService;
}();

ListItemService.ɵfac = function ListItemService_Factory(t) {
  return new (t || ListItemService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(BaseService));
};

ListItemService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  token: ListItemService,
  factory: ListItemService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(ListItemService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BaseService
    }];
  }, null);
})();

var ListFieldService = /*#__PURE__*/function () {
  function ListFieldService(svc) {
    var _this6 = this;

    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListFieldService);

    this.svc = svc;
    this.uri = {
      list: function list() {
        var metalist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this6.metalist;

        try {
          var url = metalist.url.toLowerCase().split('/lists')[0];
          var uri = "".concat(url, "/_api/lists");
          if (metalist.title) return "".concat(uri, "/GetByTitle('").concat(metalist.title, "')");
          if (metalist.guid) return "".concat(uri, "('").concat(metalist.guid, "')");
          return uri;
        } catch (err) {
          Error$.next({
            Title: 'Error',
            Cat: 'Error',
            Action: 'Failed to build URI string.',
            Detail: err
          });
          return;
        }
      },
      fields: function fields() {
        var metalist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this6.metalist;
        return "".concat(_this6.uri.list(metalist), "/fields");
      },
      field: function field(title) {
        var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
        return "".concat(_this6.uri.list(metalist), "/fields/getbytitle('").concat(title, "')");
      },
      fieldById: function fieldById(guid) {
        var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
        return "".concat(_this6.uri.list(metalist), "/fields('").concat(guid, "')");
      }
    };

    this.get = function (title) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
      var query = arguments.length > 2 ? arguments[2] : undefined;

      var uri = _this6.uri.field(title, metalist);

      return _this6.svc.get(uri + buildQuery(query || metalist.query));
    };

    this.getByGuid = function (guid) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
      var query = arguments.length > 2 ? arguments[2] : undefined;

      var uri = _this6.uri.fieldById(guid, metalist);

      return _this6.svc.get(uri + buildQuery(query || metalist.query));
    };

    this.query = function (qry) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
      return _this6.get(null, metalist, qry);
    };

    this.update = function (data) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;

      var uri = _this6.uri.fieldById(data.ID, metalist);

      return _this6.svc.post(uri, data, 'merge');
    };

    this.add = function (data) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
      var uri = "".concat(_this6.uri.fields(metalist), "/addfield"); /// sanitize data/field properties

      var spField = {
        parameters: {}
      };

      var _iterator5 = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(_this6.creation),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var prop = _step5.value;

          if (data[prop]) {
            if (prop === 'Choices') spField.parameters[prop] = {
              results: data[prop]
            };else if (prop === 'LookupList') {
              spField.parameters['LookupListId'] = data[prop];
              spField.parameters['LookupFieldName'] = data['LookupFieldName'] || 'Title';
            } else spField.parameters[prop] = data[prop];
          }
        } /// EntityPropertyName !== Title
        /// add field with Title = EntityPropertyName (so both have no white-spaces), then
        /// update Title (may have white-spaces)

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var add$ = _this6.svc.post(uri, spField, 'add', Odata.Verbose);

      if (spField.parameters.Title === data.EntityPropertyName) return add$;else {
        spField.parameters.Title = data.EntityPropertyName; /// add

        return add$ /// update field's Title
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (res) {
          return _this6.update({
            Id: res.ID,
            Title: data.Title
          }, metalist);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function () {
          return _this6.get(data.Title, metalist);
        }));
      }
    };

    this.delete = function (field) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
      var uri = field.ID ? _this6.uri.fieldById(field.ID, metalist) : _this6.uri.field(field.Title, metalist);
      return _this6.svc.delete(uri);
    };

    this.recycle = function (field) {
      var metalist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this6.metalist;
      var uri = field.ID ? _this6.uri.fieldById(field.ID, metalist) : _this6.uri.field(field.Title, metalist);
      return _this6.svc.recycle(uri);
    };
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListFieldService, [{
    key: "set",
    value: function set(metalist) {
      this.metalist = metalist;
    }
  }]);

  return ListFieldService;
}();

ListFieldService.ɵfac = function ListFieldService_Factory(t) {
  return new (t || ListFieldService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(BaseService));
};

ListFieldService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  token: ListFieldService,
  factory: ListFieldService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(ListFieldService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BaseService
    }];
  }, null);
})();

var LibItem;

(function (LibItem) {
  LibItem["File"] = "files";
  LibItem["Folder"] = "folders";
})(LibItem || (LibItem = {}));

var ResponseType;

(function (ResponseType) {
  ResponseType["ArrayBuffer"] = "arrayBuffer";
  ResponseType["Blob"] = "blob";
  ResponseType["Json"] = "json";
  ResponseType["Text"] = "text";
})(ResponseType || (ResponseType = {}));

var SpFileService = /*#__PURE__*/function () {
  function SpFileService(svc) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SpFileService);

    this.svc = svc;
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SpFileService, [{
    key: "endpoint",
    value: function endpoint(path, ftype) {
      return ftype ? "".concat(path.url, "/_api/Web/GetFolderByServerRelativeUrl('").concat(path.relative, "')/").concat(ftype) : "".concat(path.url, "/_api/Web/GetFolderByServerRelativeUrl('").concat(path.relative, "')");
    }
  }, {
    key: "info",
    value: function info() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;
      return path.name ? this.svc.get("".concat(this.endpoint(path), "/files('").concat(path.name, "')")) : this.svc.get(this.endpoint(path));
    }
  }, {
    key: "all",
    value: function all() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;
      var query = arguments.length > 1 ? arguments[1] : undefined;
      var qry = query || {
        select: 'Files/Name,Files/ServerRelativeUrl,Folders/Name,Folders/ServerRelativeUrl',
        expand: 'Files,Folders'
      };
      var uri = this.endpoint(path) + buildQuery(qry);
      return this.svc.get(uri);
    }
  }, {
    key: "get",
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;
      var ftype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LibItem.File;
      return this.svc.get(this.endpoint(path, ftype));
    }
  }, {
    key: "query",
    value: function query(_query) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.path;
      var ftype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LibItem.File;
      var uri = "".concat(this.endpoint(path, ftype)).concat(buildQuery(_query));
      return this.svc.get(uri);
    }
  }, {
    key: "single",
    value: function single() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;
      var ftype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LibItem.File;
      var uri = "".concat(this.endpoint(path, ftype), "('").concat(path.name, "')");
      return this.svc.get(uri);
    }
  }, {
    key: "read",
    value: function read() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;
      var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ResponseType.Json;
      var odata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Odata.None;
      var uri = "".concat(this.endpoint(path, LibItem.File), "('").concat(path.name, "')/$value");
      return this.svc.get(uri, odata, responseType);
    }
  }, {
    key: "add",
    value: function add(content) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.path;
      var ftype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LibItem.File;
      var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var uri = "".concat(this.endpoint(path, ftype), "/add(overwrite=").concat(overwrite, ",url='").concat(path.name, "')");
      return this.svc.post(uri, content);
    }
  }, {
    key: "put",
    value: function put(content) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.path;
      var ftype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LibItem.File;
      var uri = "".concat(this.endpoint(path, ftype), "('").concat(path.name, "')/$value");
      return this.svc.post(uri, content, 'put');
    }
  }, {
    key: "recycle",
    value: function recycle() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;
      var ftype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LibItem.File;
      var uri = "".concat(this.endpoint(path, ftype), "('").concat(path.name, "')/recycle");
      return this.svc.fetch(uri, {
        xMethod: 'delete'
      });
    } /// single upload

  }, {
    key: "singleUpload",
    value: function singleUpload(file) {
      var _this7 = this;

      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.path;
      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      path.name = file.name;
      return fileRead(file, 'array-buffer').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (buffer) {
        return _this7.add(buffer, path, LibItem.File, file.overwrite);
      }));
    }
  }, {
    key: "upload",
    value: function upload(files) {
      var _this8 = this;

      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.path;
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (file) {
        return _this8.singleUpload(file, path, file.overwrite);
      }));
    }
  }]);

  return SpFileService;
}();

SpFileService.ɵfac = function SpFileService_Factory(t) {
  return new (t || SpFileService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(BaseService));
};

SpFileService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  token: SpFileService,
  factory: SpFileService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(SpFileService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: BaseService
    }];
  }, null);
})();

var MaterialModule = function MaterialModule() {
  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MaterialModule);
};

MaterialModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"])({
  type: MaterialModule
});
MaterialModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"])({
  factory: function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  },
  imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_17__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_34__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"])(MaterialModule, {
    exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_17__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_34__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"]]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(MaterialModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_17__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_34__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_35__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"]]
    }]
  }], null, null);
})();

function AnnouncementComponent_mat_tab_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "li");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "a", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var file_r4 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"])("href", file_r4.ServerRelativeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(file_r4.FileName);
  }
}

function AnnouncementComponent_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-tab", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(1, "date");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "div", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("mouseover", function AnnouncementComponent_mat_tab_1_Template_div_mouseover_2_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r6);
      var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r5.play(false);
    })("mouseout", function AnnouncementComponent_mat_tab_1_Template_div_mouseout_2_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r6);
      var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r7.play(true);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "a", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function AnnouncementComponent_mat_tab_1_Template_a_click_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r6);
      var item_r2 = ctx.$implicit;
      var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r8.itemSelect.emit(item_r2);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(5, "p", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(6, "noSanitize");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "ul");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(8, AnnouncementComponent_mat_tab_1_li_8_Template, 3, 2, "li", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(9, "code");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(11, "date");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("label", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(1, 8, item_r2.Created, "yyyy-MM-dd"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"])("height", ctx_r0.config.tabHeight ? ctx_r0.config.tabHeight : "auto");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(item_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("innerHtml", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"])(6, 11, item_r2.Body), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", item_r2.AttachmentFiles);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"])("", item_r2.Author.Title, ", expriration: ", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(11, 13, item_r2.Expires, "yyyy-MM-dd"), "");
  }
}

function AnnouncementComponent_mat_action_row_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-action-row");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "button", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function AnnouncementComponent_mat_action_row_2_Template_button_click_1_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r10.togglePlaying();
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "button", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function AnnouncementComponent_mat_action_row_2_Template_button_click_4_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r12.prev(false);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5, "\u23EA");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "mat-slider", 10, 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("change", function AnnouncementComponent_mat_action_row_2_Template_mat_slider_change_6_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);

      var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(7);

      var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r13.indexChange(_r9.value);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(8, "button", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function AnnouncementComponent_mat_action_row_2_Template_button_click_8_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r14.next(false);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(9, "\u23E9");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(10, "button", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function AnnouncementComponent_mat_action_row_2_Template_button_click_10_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r15.listSelect.emit(ctx_r15.list);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(11, "\uD83D\uDCDD Manage");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"])("color", ctx_r1.autoPlay ? "#ffd740" : "green");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])(" ", ctx_r1.autoPlay ? "\u275A\u275A" : "\u25BA", " ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("max", ctx_r1.items.length - 1)("value", ctx_r1.index)("thumbLabel", ctx_r1.index);
  }
}

var AnnouncementComponent = /*#__PURE__*/function () {
  function AnnouncementComponent(lis) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AnnouncementComponent);

    this.lis = lis;
    this.itemSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.listSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.isPlaying = false;
    this.autoPlay = true;
    this.firstChange = true;
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AnnouncementComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this9 = this;

      if (!this.list.query) {
        this.list.query = {
          select: 'ID,Title,Body,Expires,Created,Modified,Author/Title,AttachmentFiles/FileName,AttachmentFiles/ServerRelativeUrl',
          expand: 'Author,AttachmentFiles',
          orderby: 'ID desc'
        };
      }

      this.lis.query(this.list.query, this.list).subscribe(function (res) {
        if (res === null || res === void 0 ? void 0 : res.length) {
          _this9.items = res;

          _this9.play(true);
        }
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      var auto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.autoPlay;
      this.index = this.index == 0 ? this.items.length - 1 : this.index - 1;
      this.autoPlay = auto;
      if (!auto) this.delay.unsubscribe();
    }
  }, {
    key: "next",
    value: function next() {
      var auto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.autoPlay;
      this.index = (this.index + 1) % this.items.length;
      this.autoPlay = auto;
      if (!auto) this.delay.unsubscribe();
    }
  }, {
    key: "tabChange",
    value: function tabChange(idx) {
      if (!this.firstChange) {
        if (idx != this.index) {
          this.autoPlay = false;
          this.play(false);
        }
      } else {
        this.firstChange = false;
      }

      this.index = idx;
    }
  }, {
    key: "indexChange",
    value: function indexChange(idx) {
      this.tabChange(idx);
    }
  }, {
    key: "play",
    value: function play(bool) {
      var _this10 = this;

      var _a;

      if (this.autoPlay) bool ? this.delay = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(this.config.duration || 4000).subscribe(function () {
        return _this10.next();
      }) : this.delay.unsubscribe();else if (!((_a = this === null || this === void 0 ? void 0 : this.delay) === null || _a === void 0 ? void 0 : _a.isStopped)) this.delay.unsubscribe();
    }
  }, {
    key: "togglePlaying",
    value: function togglePlaying() {
      this.autoPlay = !this.autoPlay;
      this.play(this.autoPlay);
    }
  }]);

  return AnnouncementComponent;
}();

AnnouncementComponent.ɵfac = function AnnouncementComponent_Factory(t) {
  return new (t || AnnouncementComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(ListItemService));
};

AnnouncementComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: AnnouncementComponent,
  selectors: [["lib-announcement"]],
  inputs: {
    list: "list",
    config: "config"
  },
  outputs: {
    itemSelect: "itemSelect",
    listSelect: "listSelect"
  },
  decls: 4,
  vars: 3,
  consts: [["mat-align-tabs", "center", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "label"], [1, "tab-content", 3, "mouseover", "mouseout"], [1, "link", "font-18", 3, "click"], [3, "innerHtml"], [4, "ngFor", "ngForOf"], ["download", "", 3, "href"], ["mat-icon-button", "", 3, "click"], ["min", "0", "step", "1", 3, "max", "value", "thumbLabel", "change"], ["idx", ""], ["mat-button", "", 2, "font-size", "16px", 3, "click"]],
  template: function AnnouncementComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-tab-group", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("selectedTabChange", function AnnouncementComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) {
        return ctx.tabChange($event.index);
      })("selectedIndexChange", function AnnouncementComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
        return ctx.indexChange($event);
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, AnnouncementComponent_mat_tab_1_Template, 12, 16, "mat-tab", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, AnnouncementComponent_mat_action_row_2_Template, 12, 6, "mat-action-row", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "mat-divider");
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("selectedIndex", ctx.index);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx.items);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.items == null ? null : ctx.items.length);
    }
  },
  directives: function directives() {
    return [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__["MatDivider"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTab"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSlider"]];
  },
  pipes: function pipes() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_52__["DatePipe"], NoSanitizePipe];
  },
  styles: [".link[_ngcontent-%COMP%]:hover{cursor:pointer}.tab-content[_ngcontent-%COMP%]{padding:24px 16px;overflow:hidden;background-color:#fff}.tab-content[_ngcontent-%COMP%]:hover{overflow:auto}.tab-content[_ngcontent-%COMP%]   link[_ngcontent-%COMP%]{cursor:pointer}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:16px}.font-18[_ngcontent-%COMP%]{font-size:18px}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(AnnouncementComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-announcement',
      templateUrl: './announcement.component.html',
      styleUrls: ['./announcement.component.css']
    }]
  }], function () {
    return [{
      type: ListItemService
    }];
  }, {
    list: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    itemSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    listSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();

var NoSanitizePipe = /*#__PURE__*/function () {
  function NoSanitizePipe(domSanitizer) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NoSanitizePipe);

    this.domSanitizer = domSanitizer;
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(NoSanitizePipe, [{
    key: "transform",
    value: function transform(html) {
      return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
  }]);

  return NoSanitizePipe;
}();

NoSanitizePipe.ɵfac = function NoSanitizePipe_Factory(t) {
  return new (t || NoSanitizePipe)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__["DomSanitizer"]));
};

NoSanitizePipe.ɵpipe = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"])({
  name: "noSanitize",
  type: NoSanitizePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(NoSanitizePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Pipe"],
    args: [{
      name: 'noSanitize'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__["DomSanitizer"]
    }];
  }, null);
})();

function FileInputComponent_div_9_mat_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-chip", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function FileInputComponent_div_9_mat_chip_2_Template_mat_chip_click_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r7);
      var file_r4 = ctx.$implicit;
      var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r6.fileSelect(file_r4, "uploading");
    })("removed", function FileInputComponent_div_9_mat_chip_2_Template_mat_chip_removed_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r7);
      var i_r5 = ctx.index;
      var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r8.detachFile(i_r5);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-icon", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4, "\u2718");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var file_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("selectable", true)("removable", true)("disabled", ctx_r3.duplicates.length > 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"])("accent-fg", ctx_r3.duplicated(i_r5));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(file_r4.renamed || file_r4.name);
  }
}

function FileInputComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-chip-list", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, FileInputComponent_div_9_mat_chip_2_Template, 5, 6, "mat-chip", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r0.uploading);
  }
}

function FileInputComponent_div_10_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "mat-radio-group", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("change", function FileInputComponent_div_10_div_6_ng_container_1_Template_mat_radio_group_change_5_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r14);
      var i_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
      var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r12.markReplaced($event.value, i_r10);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "mat-radio-button", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(7, "Yes");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(8, "mat-radio-button", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(9, "No");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var i_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("Replace \"", ctx_r11.uploading[i_r10].renamed, "\"?");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", ctx_r11.uploading[i_r10].overwrite);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", true);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", false);
  }
}

function FileInputComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, FileInputComponent_div_10_div_6_ng_container_1_Template, 10, 4, "ng-container", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var i_r10 = ctx.$implicit;
    var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx_r9.uploading[i_r10]);
  }
}

function FileInputComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "p", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(3, " Duplicated files ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(4, "br");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5, "Files already exist. Would you like to replace them? ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(6, FileInputComponent_div_10_div_6_Template, 2, 1, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("matBadge", ctx_r1.duplicates.length);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r1.duplicates);
  }
}

function FileInputComponent_div_11_mat_chip_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-chip", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function FileInputComponent_div_11_mat_chip_2_Template_mat_chip_click_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r19);
      var file_r17 = ctx.$implicit;
      var ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r18.fileSelect(file_r17, "updated");
    })("removed", function FileInputComponent_div_11_mat_chip_2_Template_mat_chip_removed_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r19);
      var file_r17 = ctx.$implicit;
      var ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r20.deleteEvent.emit(file_r17);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "a", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-icon", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4, "\u2718");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var file_r17 = ctx.$implicit;
    var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("selectable", true)("removable", true)("disabled", (ctx_r16.duplicates == null ? null : ctx_r16.duplicates.length) > 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"])("href", file_r17.ServerRelativeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(file_r17.Name || file_r17.FileName);
  }
}

function FileInputComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-chip-list", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, FileInputComponent_div_11_mat_chip_2_Template, 5, 5, "mat-chip", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r2.uploaded);
  }
}

var _c0 = function _c0(a0) {
  return {
    "hover": a0
  };
};

var FileInputComponent = /*#__PURE__*/function () {
  function FileInputComponent() {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FileInputComponent);

    this.uploadingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.duplicates = []; /// duplicated files
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FileInputComponent, [{
    key: "addProp",
    value: function addProp(file, prop) {
      var expr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /[~`!@#$%\^&*()+=\[\]\\';,/{}|":<>\?]/g;
      file[prop] = file.name.replace(expr, '');
    }
  }, {
    key: "duplicated",
    value: function duplicated(idx) {
      return this.duplicates.includes(idx);
    }
  }, {
    key: "markReplaced",
    value: function markReplaced(replaced, idx) {
      /// remove idx (duplicated file index) from duplicates
      var i = this.duplicates.indexOf(idx);
      this.duplicates.splice(i, 1); /// mark 'replaced' for replacing/overwriting

      if (this.uploading[idx]) this.uploading[idx].replaced = replaced;

      if (this.duplicates.length < 1) {
        this.uploading = this.uploading.filter(function (file) {
          return file.replaced || file.replaced === undefined;
        });
        this.uploadingChange.emit(this.uploading);
      }
    }
  }, {
    key: "upload",
    value: function upload(fileList) {
      var _a, _b, _c;

      if (fileList === null || fileList === void 0 ? void 0 : fileList.length) {
        /// convert file-list to array, add 'renamed' prop without specical characters      
        var files = [];

        for (var i = 0; i < fileList.length; i++) {
          this.addProp(fileList[i], 'renamed');
          files.push(fileList[i]);
        } /// remove duplicates in uploading files


        if (!this.uploading) this.uploading = [];
        this.uploading = merge(this.uploading, files, 'renamed', 'string'); /// confirm to replace if duplicates in uploading/uploaded files

        if (((_a = this.uploaded) === null || _a === void 0 ? void 0 : _a.length) > 0) {
          /// is uploaded an attachment (goes by 'FileName')
          /// OR a file (goes by 'Name') in lib/folder
          var key = 'FileName' in this.uploaded[0] ? 'FileName' : 'Name';
          this.duplicates = findDuplicates(this.uploading, 'renamed', this.uploaded, key);

          if (((_b = this.duplicates) === null || _b === void 0 ? void 0 : _b.length) < 1 && ((_c = this.uploading) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            this.uploadingChange.emit(this.uploading);
          }
        } else this.uploadingChange.emit(this.uploading);
      }
    } ///

  }, {
    key: "onDragOver",
    value: function onDragOver(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.isHovered = true;
    } ///

  }, {
    key: "onDragLeave",
    value: function onDragLeave(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.isHovered = false;
    } /// drop files

  }, {
    key: "onDrop",
    value: function onDrop(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.isHovered = false;
      this.upload(evt.dataTransfer.files);
    } /// remove uploading files

  }, {
    key: "detachFile",
    value: function detachFile(index) {
      var _a;

      this.uploading.splice(index, 1);

      if (((_a = this.duplicates) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        var i = this.duplicates.indexOf(index);
        this.markReplaced(false, i);
      } else this.uploadingChange.emit(this.uploading);
    }
  }, {
    key: "fileSelect",
    value: function fileSelect(file, from) {
      this.selectEvent.emit({
        file: file,
        from: from
      });
    }
  }]);

  return FileInputComponent;
}();

FileInputComponent.ɵfac = function FileInputComponent_Factory(t) {
  return new (t || FileInputComponent)();
};

FileInputComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: FileInputComponent,
  selectors: [["lib-file-input"]],
  hostBindings: function FileInputComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("dragover", function FileInputComponent_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileInputComponent_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      })("drop", function FileInputComponent_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    uploaded: "uploaded",
    uploading: "uploading"
  },
  outputs: {
    uploadingChange: "uploadingChange",
    selectEvent: "selectEvent",
    deleteEvent: "deleteEvent"
  },
  decls: 12,
  vars: 6,
  consts: [[1, "dropzone", 3, "ngClass"], ["mat-raised-button", "", "color", "accent", 1, "browse"], ["type", "file", "multiple", "", 3, "change"], [2, "font-size", "18px", "text-align", "center"], ["style", "margin-top:16px;", 4, "ngIf"], ["class", "accent", 4, "ngIf"], [2, "margin-top", "16px"], ["aria-label", "Upload Files"], [3, "selectable", "removable", "disabled", "click", "removed", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "disabled", "click", "removed"], ["matChipRemove", ""], [1, "accent"], [1, "accent-fg"], ["matBadgeOverlap", "false", "matBadgeColor", "warn", 3, "matBadge"], ["class", "row center", 4, "ngFor", "ngForOf"], [1, "row", "center"], [4, "ngIf"], [1, "col-4"], ["color", "warn", 3, "value", "change"], [3, "value"], ["aria-label", "File selection"], ["target", "_blank", 3, "href"], ["color", "warn", "matChipRemove", ""]],
  template: function FileInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "button", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "input", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("change", function FileInputComponent_Template_input_change_2_listener($event) {
        return ctx.upload($event.target.files);
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "span", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4, " Browse/drop files here... ");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(5, "br");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6, " Please do not upload/attach files containing sensitive data (information).");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(7, "br");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8, " Note: special characters in file name will be removed before attaching/uploading. ");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(9, FileInputComponent_div_9_Template, 4, 1, "div", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(10, FileInputComponent_div_10_Template, 7, 2, "div", 5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(11, FileInputComponent_div_11_Template, 3, 1, "div", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"])(4, _c0, ctx.isHovered));
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(9);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.uploading == null ? null : ctx.uploading.length);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.duplicates == null ? null : ctx.duplicates.length);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.uploaded == null ? null : ctx.uploaded.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipRemove"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadge"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioButton"]],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(FileInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-file-input',
      templateUrl: './file-input.component.html' // styleUrls: ['./file-input.component.css']

    }]
  }], null, {
    uploaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    uploading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    uploadingChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    deleteEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['dragover', ['$event']]
    }],
    onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['dragleave', ['$event']]
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['drop', ['$event']]
    }]
  });
})();

var _c0$1 = ["matTable"];

function ListComponent_mat_checkbox_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-checkbox", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("change", function ListComponent_mat_checkbox_8_Template_mat_checkbox_change_0_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r12);
      var field_r9 = ctx.$implicit;
      var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r11.changeField(field_r9.EntityPropertyName, $event.checked);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r9 = ctx.$implicit;
    var first_r10 = ctx.first;
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", field_r9.EntityPropertyName)("checked", ctx_r0.isDisplayed(field_r9.EntityPropertyName))("disabled", ctx_r0.list.dashboard && first_r10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", field_r9.Title, " ");
  }
}

function ListComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r13 = ctx.$implicit;
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", name_r13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])((ctx_r1.Field[name_r13] == null ? null : ctx_r1.Field[name_r13].Title) || name_r13);
  }
}

function ListComponent_mat_expansion_panel_header_30_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-expansion-panel-header");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-panel-title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "mat-panel-description");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r2.list.fields[0].Title);
  }
}

function ListComponent_ng_container_33_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "th", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    var ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r18.Field[name_r14] == null ? null : ctx_r18.Field[name_r14].Title);
  }
}

function ListComponent_ng_container_33_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "td", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "button", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListComponent_ng_container_33_ng_container_1_td_2_Template_button_click_1_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r23);
      var row_r21 = ctx.$implicit;
      var ctx_r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3);
      return ctx_r22.selectRow(row_r21);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r21 = ctx.$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    var ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(ctx_r19.cssClass ? ctx_r19.cssClass(row_r21[ctx_r19.list.cssKey]) : row_r21[ctx_r19.list.cssKey]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])(" ", row_r21[name_r14], " ");
  }
}

function ListComponent_ng_container_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_1_th_1_Template, 2, 1, "th", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_1_td_2_Template, 3, 3, "td", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "th", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r30.Field[name_r14] == null ? null : ctx_r30.Field[name_r14].Title);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(5, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(6, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var row_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r36 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(2, 4, row_r33[name_r14] / ctx_r36.list.calc.count, "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(5, 7, row_r33[name_r14] / ctx_r36.list.calc.count, "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(row_r33[name_r14]);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(5, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(6, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(9, "number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var row_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r37 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(2, 4, row_r33[name_r14] / ctx_r37.list.calc.sum[name_r14], "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(5, 7, row_r33[name_r14] / ctx_r37.list.calc.sum[name_r14], "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(9, 10, row_r33[name_r14], "1.2-2"));
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_1_ng_container_1_Template, 9, 10, "ng-container", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_1_ng_container_2_Template, 10, 13, "ng-container", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(4).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", name_r14 == "Count");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", name_r14 != "Count");
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(row_r33[name_r14]);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "td", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_1_Template, 3, 2, "div", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_div_2_Template, 2, 1, "div", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx_r31.list.calc);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !ctx_r31.list.calc);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_2_th_1_Template, 2, 1, "th", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_2_td_2_Template, 3, 2, "td", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "th", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r45 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r45.Field[name_r14] == null ? null : ctx_r45.Field[name_r14].Title);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(5, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(6, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var row_r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(2, 4, row_r48[name_r14] / ctx_r51.list.calc.count, "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(5, 7, row_r48[name_r14] / ctx_r51.list.calc.count, "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(row_r48[name_r14]);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 37);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(5, "percent");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(6, "span", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(9, "number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var row_r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(2, 4, row_r48[name_r14] / ctx_r52.list.calc.sum[name_r14], "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(5, 7, row_r48[name_r14] / ctx_r52.list.calc.sum[name_r14], "1.2-2"));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(9, 10, row_r48[name_r14], "1.2-2"));
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_1_ng_container_1_Template, 9, 10, "ng-container", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_1_ng_container_2_Template, 10, 13, "ng-container", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(4).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", name_r14 == "Count");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", name_r14 != "Count");
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 38);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(2, 1, row_r48[name_r14], "1.2-2"));
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "td", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_1_Template, 3, 2, "div", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_div_2_Template, 3, 4, "div", 35);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r46 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx_r46.list.calc);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !ctx_r46.list.calc);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_3_th_1_Template, 2, 1, "th", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_3_td_2_Template, 3, 2, "td", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "th", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r60 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r60.Field[name_r14] == null ? null : ctx_r60.Field[name_r14].Title);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_4_td_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "td", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "date");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r63 = ctx.$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(2, 1, row_r63[name_r14], "yyyy-MM-dd"));
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_4_th_1_Template, 2, 1, "th", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_4_td_2_Template, 3, 4, "td", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_5_th_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "th", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r65 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r65.Field[name_r14] == null ? null : ctx_r65.Field[name_r14].Title);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_5_td_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "td", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r68 = ctx.$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])((row_r68[name_r14] == null ? null : row_r68[name_r14].Title) || row_r68[name_r14]);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_5_th_1_Template, 2, 1, "th", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_5_td_2_Template, 2, 1, "td", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_6_th_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "th", 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    var ctx_r70 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r70.Field[name_r14] == null ? null : ctx_r70.Field[name_r14].Title);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_6_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r73 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(row_r73.Author == null ? null : row_r73.Author.Title);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_6_td_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var row_r73 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(row_r73[name_r14]);
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "td", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_6_td_2_span_1_Template, 2, 1, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_6_td_2_span_2_Template, 2, 1, "span", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(3).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", name_r14 == "Author");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", name_r14 != "Author");
  }
}

function ListComponent_ng_container_33_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_2_ng_container_6_th_1_Template, 2, 1, "th", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_6_td_2_Template, 3, 2, "td", 26);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }
}

function ListComponent_ng_container_33_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(1, 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_ng_container_2_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(3, ListComponent_ng_container_33_ng_container_2_ng_container_3_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, ListComponent_ng_container_33_ng_container_2_ng_container_4_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(5, ListComponent_ng_container_33_ng_container_2_ng_container_5_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(6, ListComponent_ng_container_33_ng_container_2_ng_container_6_Template, 3, 0, "ng-container", 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var name_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitch", ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", (ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind) == 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", (ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind) == 9 ? ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind : "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", (ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind) == 7 || (ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind) == 20 ? ctx_r17.Field[name_r14] == null ? null : ctx_r17.Field[name_r14].FieldTypeKind : "");
  }
}

function ListComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0, 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListComponent_ng_container_33_ng_container_1_Template, 3, 0, "ng-container", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ListComponent_ng_container_33_ng_container_2_Template, 7, 5, "ng-container", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var name_r14 = ctx.$implicit;
    var first_r15 = ctx.first;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"])("matColumnDef", name_r14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", first_r15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !first_r15);
  }
}

function ListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(0, "tr", 39);
  }
}

function ListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    var _r83 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "tr", 40);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("dblclick", function ListComponent_tr_35_Template_tr_dblclick_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r83);
      var row_r81 = ctx.$implicit;
      var ctx_r82 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r82.onDblClick(row_r81);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }
}

function ListComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "tr", 41);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "td", 42);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("No data matching the filter \"", ctx_r7.search.value, "\"");
  }
}

function ListComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 43);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "h2");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2, "No data found.");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }
}

var _c1 = function _c1() {
  return [10, 25, 50];
};

var ListComponent = /*#__PURE__*/function () {
  function ListComponent() {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListComponent);

    /// function: returns css class name
    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.search = {
      key: 'Title',
      value: ''
    };
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableDataSource"]();
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListComponent, [{
    key: "_generateFields",
    value: function _generateFields(obj) {
      var fields = [];

      for (var key in this.list.items[0]) {
        fields.push({
          EntityPropertyName: key,
          Title: key,
          FieldTypeKind: 2,
          CssClass: 'col-3'
        });
      }

      return fields;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      var _this11 = this;

      var _a;

      if (this.list.items) {
        /// fields: array -> object
        if ((_a = this.list) === null || _a === void 0 ? void 0 : _a.fields) {
          this.Field = {};
          this.list.fields.forEach(function (field) {
            return _this11.Field[field.EntityPropertyName] = field;
          });
        } else {
          this.list.fields = this._generateFields(this.list.items[0]);
        } // this.list.displays = (this.list.dashboard)
        //   ? [...this.list.fields] 
        //   : this.list.displays || this.list.fields.map((field:any) => field.EntityPropertyName);


        this.list.displays = this.list.displays || this.list.fields.slice(0, 5).map(function (field) {
          return field.EntityPropertyName;
        });
        this.search.key = this.list.displays[0]; // this.dataSource = new MatTableDataSource<any>(this.list.items);

        this.dataSource.data = this.list.items;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSource.filterPredicate = function (data, value) {
          if (data[_this11.search.key]) {
            var str = data[_this11.search.key].toString().toLowerCase();

            return str.indexOf(value.toLowerCase()) > -1;
          }

          return;
        };

        this.list.cssKey = this.list.cssKey || 'Status';
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {// this.dataSource.paginator = this.paginator;
    }
  }, {
    key: "setKey",
    value: function setKey() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.search.key;
      if (this.search.value) this.applyFilter(val);
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.search.value;
      this.dataSource.filter = val;

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }, {
    key: "selectRow",
    value: function selectRow(row) {
      this.selectEvent.emit({
        payload: row,
        action: 'select'
      });
    }
  }, {
    key: "onDblClick",
    value: function onDblClick(row) {
      this.selectEvent.emit({
        payload: row,
        action: 'double-click'
      });
    }
  }, {
    key: "getPercent",
    value: function getPercent(key, val) {
      if (this.list.calc) return "".concat((val / this.list.calc.sum[key]).toFixed(2), "%");
    }
  }, {
    key: "renderRows",
    value: function renderRows() {
      this.matTable.renderRows();
    }
  }, {
    key: "updateRows",
    value: function updateRows(rows) {
      this.dataSource.data = rows;
    }
  }, {
    key: "sliderLabel",
    value: function sliderLabel(val) {
      return val.toFixed(1) + '%';
    }
  }, {
    key: "changeField",
    value: function changeField(field, checked) {
      this.list.displays = this.list.displays || [];
      if (checked) this.list.displays.push(field);else {
        var idx = this.list.displays.indexOf(field);
        if (idx > -1) this.list.displays.splice(idx, 1);
      }
    }
  }, {
    key: "isDisplayed",
    value: function isDisplayed(field) {
      return this.list.displays.indexOf(field) > -1;
    }
  }]);

  return ListComponent;
}();

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)();
};

ListComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: ListComponent,
  selectors: [["lib-list"]],
  viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginator"], 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSort"], 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"])(_c0$1, 1);
    }

    if (rf & 2) {
      var _t;

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"])()) && (ctx.paginator = _t.first);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"])()) && (ctx.sort = _t.first);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"])()) && (ctx.matTable = _t.first);
    }
  },
  inputs: {
    list: "list",
    cssClass: "cssClass"
  },
  outputs: {
    selectEvent: "selectEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 39,
  vars: 13,
  consts: [["multi", ""], [1, "row"], ["class", "col-2", 3, "value", "checked", "disabled", "change", 4, "ngFor", "ngForOf"], [1, "row", "center"], [1, "col-3"], ["appearance", "fill"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 2, "margin-left", "20px"], ["matInput", "", "type", "search", 3, "ngModel", "input", "ngModelChange"], [1, "spacer"], ["mat-flat-button", "", 3, "click"], [3, "expanded"], [4, "ngIf"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], ["matTable", ""], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "dblclick", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["style", "text-align: center;", 4, "ngIf"], [1, "col-2", 3, "value", "checked", "disabled", "change"], [3, "value"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["mat-header-cell", "", "mat-sort-header", "", "class", "right", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "right"], ["class", "progress-container", 4, "ngIf"], ["style", "text-align: right;", 4, "ngIf"], [1, "progress-container"], [1, "progress-bar"], [2, "text-align", "right"], ["mat-header-row", ""], ["mat-row", "", 3, "dblclick"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [2, "text-align", "center"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-accordion", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-expansion-panel");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "mat-expansion-panel-header");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-panel-title");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4, "Display Columns");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "mat-panel-description");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6, "Show/hide columns");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "div", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(8, ListComponent_mat_checkbox_8_Template, 2, 4, "mat-checkbox", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(9, "mat-expansion-panel");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(10, "mat-expansion-panel-header");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(11, "mat-panel-title");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(12, "Search/filter");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(13, "mat-panel-description");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(14, "div", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(15, "div", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(16, "mat-form-field", 5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(17, "mat-label");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(18, "Key/Column");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(19, "mat-select", 6);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("selectionChange", function ListComponent_Template_mat_select_selectionChange_19_listener() {
        return ctx.setKey();
      })("ngModelChange", function ListComponent_Template_mat_select_ngModelChange_19_listener($event) {
        return ctx.search.key = $event;
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(20, ListComponent_mat_option_20_Template, 2, 2, "mat-option", 7);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(21, "div", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(22, "mat-form-field", 8);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(23, "mat-label");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(24, "Value");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(25, "input", 9);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("input", function ListComponent_Template_input_input_25_listener() {
        return ctx.applyFilter();
      })("ngModelChange", function ListComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.search.value = $event;
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(26, "span", 10);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(27, "button", 11);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListComponent_Template_button_click_27_listener() {
        return ctx.applyFilter(ctx.search.value = "");
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(28, "Clear filter");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(29, "mat-expansion-panel", 12);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(30, ListComponent_mat_expansion_panel_header_30_Template, 4, 1, "mat-expansion-panel-header", 13);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(31, "table", 14, 15);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(33, ListComponent_ng_container_33_Template, 3, 3, "ng-container", 16);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(34, ListComponent_tr_34_Template, 1, 0, "tr", 17);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(35, ListComponent_tr_35_Template, 1, 0, "tr", 18);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(36, ListComponent_tr_36_Template, 3, 1, "tr", 19);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(37, "mat-paginator", 20);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(38, ListComponent_div_38_Template, 3, 0, "div", 21);
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(8);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx.list.fields);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(11);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx.search.key);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx.list.displays);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx.search.value);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("expanded", true);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.list.calc);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("dataSource", ctx.dataSource);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx.list.displays);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("matHeaderRowDef", ctx.list.displays);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("matRowDefColumns", ctx.list.displays);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("pageSizeOptions", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"])(12, _c1));
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !(ctx.dataSource.data == null ? null : ctx.dataSource.data.length));
    }
  },
  directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgModel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchDefault"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatRow"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["DatePipe"]],
  styles: ["", ".mat-checkbox[_ngcontent-%COMP%] {\n   white-space: nowrap;\n   overflow: hidden;\n   text-overflow: ellipsis;\n}\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n   padding: 0 0.25em;\n}\n\n  .right .mat-sort-header-container {\n   justify-content: flex-end;\n   text-align: right;\n}\n\n\n\n.progress-container[_ngcontent-%COMP%] { position: relative; text-align:right; padding:8px 0px; background:#ffe; display:flex; }\n.progress-bar[_ngcontent-%COMP%] { position:absolute; top:0px; height:100%; background-color: rgba(255,160,4,.5); }\n.progress-border[_ngcontent-%COMP%] { position:absolute; top:0px; height:100%; border-top: 2px rgb(255,160,4) solid; }\n.progress-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { padding: 0px 8px; }"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(ListComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-list',
      templateUrl: './list.component.html',
      styleUrls: ['./../style.css']
    }]
  }], function () {
    return [];
  }, {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginator"], {
        static: true
      }]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSort"], {
        static: true
      }]
    }],
    matTable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['matTable']
    }],
    list: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();

function RxFormComponent_form_0_div_2_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "input", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r3.fieldStyle.floatLabel)("appearance", ctx_r3.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"])("min", field_r2.min);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"])("max", field_r2.max);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r3.display(field_r2.EntityPropertyName));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r3.display(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "input", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r4.fieldStyle.floatLabel)("appearance", ctx_r4.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r4.display(field_r2.EntityPropertyName));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r4.display(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "textarea", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r5.fieldStyle.floatLabel)("appearance", ctx_r5.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r5.display(field_r2.EntityPropertyName));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r5.display(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "input", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(4, "mat-datepicker-toggle", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(5, "mat-datepicker", null, 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(9, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(6);

    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r6.fieldStyle.floatLabel)("appearance", ctx_r6.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("matDatepicker", _r15)("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("for", _r15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r6.display(field_r2.EntityPropertyName));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r6.display(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_6_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var option_r19 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", option_r19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])(" ", option_r19, " ");
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "input", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-autocomplete", null, 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(6, RxFormComponent_form_0_div_2_mat_form_field_6_mat_option_6_Template, 2, 2, "mat-option", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(7, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(5);

    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r7.fieldStyle.floatLabel)("appearance", ctx_r7.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName)("matAutocomplete", _r17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"])(7, 6, field_r2.filter$));
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_7_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1, "N/A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_7_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var opt_r23 = ctx.$implicit;
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2).$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", opt_r23[field_r2.LookupList.value]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", opt_r23[field_r2.LookupList.key], " ");
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-select", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, RxFormComponent_form_0_div_2_mat_form_field_7_mat_option_4_Template, 2, 0, "mat-option", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(5, RxFormComponent_form_0_div_2_mat_form_field_7_mat_option_5_Template, 2, 2, "mat-option", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(8, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r8.fieldStyle.floatLabel)("appearance", ctx_r8.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !field_r2.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", field_r2.Choices);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r8.display(field_r2.EntityPropertyName));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r8.display(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_mat_checkbox_8_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-checkbox", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", field_r2.Title, " ");
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(3, "number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(4, "input", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "mat-error");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r10.fieldStyle.floatLabel)("appearance", ctx_r10.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"])("", field_r2.Title, " ", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(3, 7, ctx_r10.form.value[field_r2.EntityPropertyName], "1.2-2"), "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formControlName", field_r2.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r10.display(field_r2.EntityPropertyName));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r10.display(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_mat_form_field_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "textarea", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("blur", function RxFormComponent_form_0_div_2_mat_form_field_10_Template_textarea_blur_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r30);
      var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
      var ctx_r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r28.parse($event.target.value, field_r2.EntityPropertyName);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4, "               ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])().$implicit;
    var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("floatLabel", ctx_r11.fieldStyle.floatLabel)("appearance", ctx_r11.fieldStyle.appearance);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(field_r2.Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", ctx_r11.stringify(field_r2.EntityPropertyName));
  }
}

function RxFormComponent_form_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(1, 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, RxFormComponent_form_0_div_2_mat_form_field_2_Template, 8, 8, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(3, RxFormComponent_form_0_div_2_mat_form_field_3_Template, 8, 6, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, RxFormComponent_form_0_div_2_mat_form_field_4_Template, 8, 6, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(5, RxFormComponent_form_0_div_2_mat_form_field_5_Template, 11, 8, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(6, RxFormComponent_form_0_div_2_mat_form_field_6_Template, 8, 8, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(7, RxFormComponent_form_0_div_2_mat_form_field_7_Template, 10, 8, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(8, RxFormComponent_form_0_div_2_mat_checkbox_8_Template, 2, 2, "mat-checkbox", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(9, RxFormComponent_form_0_div_2_mat_form_field_9_Template, 9, 10, "mat-form-field", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(10, RxFormComponent_form_0_div_2_mat_form_field_10_Template, 5, 4, "mat-form-field", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r2 = ctx.$implicit;
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(field_r2.CssClass);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitch", field_r2.FieldTypeKind);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Integer);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Text);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Note);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.DateTime);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Choice);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Lookup);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Boolean);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx_r1.dtype.Number);
  }
}

function RxFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "form", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, RxFormComponent_form_0_div_2_Template, 11, 11, "div", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("formGroup", ctx_r0.form);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r0.fields);
  }
}

var RxFormComponent = /*#__PURE__*/function () {
  function RxFormComponent(lis, jsonPipe) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RxFormComponent);

    this.lis = lis;
    this.jsonPipe = jsonPipe;
    this.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.dtype = SpDataType;
    this.filter = {};
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RxFormComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this12 = this;

      if (this.item.value && this.item.fields) {
        /// remove 'readonly' fields
        this.fields = this.item.fields.filter(function (field) {
          return !field.readonly && !field.ReadOnlyField;
        });
        this.setupForm(this.fields);
        this.form.valueChanges.subscribe(function () {
          return _this12.itemChange.emit(_this12.form);
        });
      }
    }
  }, {
    key: "setFilter",
    value: function setFilter(field, formCtrl) {
      field.filter$ = formCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
        return field.Choices.filter(function (option) {
          return option.toLowerCase().includes(value.toLowerCase());
        });
      }));
    } ///--- privates ---
    ///

  }, {
    key: "setupForm",
    value: function setupForm(fields) {
      var _this13 = this;

      var _a, _b;

      var group = {},
          ctrlVal;

      var _iterator6 = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(fields),
          _step6;

      try {
        var _loop2 = function _loop2() {
          var field = _step6.value;
          ctrlVal = _this13.item.value[field.EntityPropertyName] || '';
          group[field.EntityPropertyName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormControl"]({
            value: ctrlVal,
            disabled: field.Disabled || field.ReadOnlyField
          }, field.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_53__["Validators"].required : null);

          switch (field.FieldTypeKind) {
            case SpDataType.Choice:
              if (!((_a = field === null || field === void 0 ? void 0 : field.Choices) === null || _a === void 0 ? void 0 : _a.length)) {
                _this13.lis.getFieldChoices(field.EntityPropertyName, field.List).subscribe(function (res) {
                  field.Choices = res.Choices;

                  _this13.setFilter(field, group[field.EntityPropertyName]);
                });
              } else {
                _this13.setFilter(field, group[field.EntityPropertyName]);
              }

              break;

            case SpDataType.Lookup:
              if (!((_b = field === null || field === void 0 ? void 0 : field.Choices) === null || _b === void 0 ? void 0 : _b.length)) {
                _this13.lis.query(field.LookupList.query, field.LookupList).subscribe(function (items) {
                  return field.Choices = items;
                });
              }

              break;
          }
        };

        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormGroup"](group);
      if (this.item.disabled) this.form.disable();else if (this.item.updateOnBlur) this.form._updateOn = 'blur';
      this.itemChange.emit(this.form);
    }
  }, {
    key: "filterChoices",
    value: function filterChoices(field) {
      var val = this.form.value[field.EntityPropertyName];
      this.filter[field.EntityPropertyName] = field.Choices.filter(function (op) {
        op.toLowerCase().includes(val.toLowerCase());
      });
    } /// 

  }, {
    key: "stringify",
    value: function stringify(ctrlName) {
      return this.jsonPipe.transform(this.form.value[ctrlName]);
    } ///

  }, {
    key: "parse",
    value: function parse(value, name) {
      try {
        var o = {};
        o[name] = JSON.parse(value);
        this.form.patchValue(o);
      } catch (err) {
        alert("Failed to parse:\n".concat(value, "\n") + err);
        console.error("Failed to parse:\n".concat(value, "\n") + err);
      }
    }
  }, {
    key: "display",
    value: function display(name) {
      if ((name === null || name === void 0 ? void 0 : name.length) && this.form.controls[name].errors) {
        return Object.keys(this.form.controls[name].errors).toString();
      }

      return undefined;
    }
  }, {
    key: "updateValue",
    value: function updateValue(value) {
      this.form.patchValue(value);
    }
  }]);

  return RxFormComponent;
}();

RxFormComponent.ɵfac = function RxFormComponent_Factory(t) {
  return new (t || RxFormComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(ListItemService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(_angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]));
};

RxFormComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: RxFormComponent,
  selectors: [["lib-rx-form"]],
  inputs: {
    item: "item",
    fieldStyle: "fieldStyle"
  },
  outputs: {
    itemChange: "itemChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "floatLabel", "appearance", 4, "ngSwitchCase"], [3, "formControlName", 4, "ngSwitchCase"], [3, "floatLabel", "appearance", 4, "ngSwitchDefault"], [3, "floatLabel", "appearance"], ["matInput", "", "type", "number", 3, "formControlName", "min", "max"], ["matInput", "", "type", "text", 3, "formControlName"], ["matInput", "", "rows", "2", 3, "formControlName"], ["matInput", "", 3, "matDatepicker", "formControlName"], ["matSuffix", "", 3, "for"], ["dp", ""], ["matInput", "", 3, "formControlName", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "formControlName"], ["value", "N/A", 4, "ngIf"], ["value", "N/A"], ["matInput", "", "type", "number", 3, "formControlName"], ["matInput", "", "rows", "3", 3, "value", "blur"]],
  template: function RxFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(0, RxFormComponent_form_0_Template, 3, 2, "form", 0);
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.form);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchDefault"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatHint"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepicker"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOption"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["DecimalPipe"]],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(RxFormComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-rx-form',
      templateUrl: './rx-form.component.html'
    }]
  }], function () {
    return [{
      type: ListItemService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]
    }];
  }, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    fieldStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    itemChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();

function FieldComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "input", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_1_Template_input_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r10.model = $event;
    })("change", function FieldComponent_mat_form_field_1_Template_input_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r12.modelChange.emit(ctx_r12.model);
    })("focus", function FieldComponent_mat_form_field_1_Template_input_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r13.selectEvent.emit(ctx_r13.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r0.field.Title || ctx_r0.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r0.model)("required", ctx_r0.field.required)("disabled", ctx_r0.field.Disabled);
  }
}

function FieldComponent_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "input", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_2_Template_input_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r15);
      var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r14.model = $event;
    })("change", function FieldComponent_mat_form_field_2_Template_input_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r15);
      var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r16.modelChange.emit(ctx_r16.model);
    })("focus", function FieldComponent_mat_form_field_2_Template_input_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r15);
      var ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r17.selectEvent.emit(ctx_r17.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r1.field.Title || ctx_r1.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.model)("required", ctx_r1.field.required)("disabled", ctx_r1.field.Disabled);
  }
}

function FieldComponent_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "textarea", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_3_Template_textarea_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r19);
      var ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r18.model = $event;
    })("change", function FieldComponent_mat_form_field_3_Template_textarea_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r19);
      var ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r20.modelChange.emit(ctx_r20.model);
    })("focus", function FieldComponent_mat_form_field_3_Template_textarea_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r19);
      var ctx_r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r21.selectEvent.emit(ctx_r21.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r2.field.Title || ctx_r2.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r2.model)("required", ctx_r2.field.required)("disabled", ctx_r2.field.Disabled);
  }
}

function FieldComponent_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "input", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_4_Template_input_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r24);
      var ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r23.model = $event;
    })("change", function FieldComponent_mat_form_field_4_Template_input_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r24);
      var ctx_r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r25.modelChange.emit(ctx_r25.model);
    })("focus", function FieldComponent_mat_form_field_4_Template_input_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r24);
      var ctx_r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r26.selectEvent.emit(ctx_r26.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(4, "mat-datepicker-toggle", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(5, "mat-datepicker", null, 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var _r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(6);

    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r3.field.Title || ctx_r3.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("matDatepicker", _r22)("ngModel", ctx_r3.model)("required", ctx_r3.field.required)("disabled", ctx_r3.field.Disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("for", _r22);
  }
}

function FieldComponent_mat_form_field_5_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1, "N/A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", undefined);
  }
}

function FieldComponent_mat_form_field_5_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var opt_r29 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", opt_r29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(opt_r29);
  }
}

function FieldComponent_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-select", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_5_Template_mat_select_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r31);
      var ctx_r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r30.model = $event;
    })("selectionChange", function FieldComponent_mat_form_field_5_Template_mat_select_selectionChange_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r31);
      var ctx_r32 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r32.modelChange.emit(ctx_r32.model);
    })("focus", function FieldComponent_mat_form_field_5_Template_mat_select_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r31);
      var ctx_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r33.selectEvent.emit(ctx_r33.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, FieldComponent_mat_form_field_5_mat_option_4_Template, 2, 1, "mat-option", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(5, FieldComponent_mat_form_field_5_mat_option_5_Template, 2, 2, "mat-option", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r4.field.Title || ctx_r4.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r4.model)("required", ctx_r4.field.required)("disabled", ctx_r4.field.Disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !ctx_r4.field.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r4.field.Choices);
  }
}

function FieldComponent_mat_form_field_6_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1, "N/A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", undefined);
  }
}

function FieldComponent_mat_form_field_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var opt_r36 = ctx.$implicit;
    var ctx_r35 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", opt_r36[ctx_r35.field.lookup.value] || opt_r36);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])(" ", opt_r36[ctx_r35.field.lookup.key] || opt_r36.Title, " ");
  }
}

function FieldComponent_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r38 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-select", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r38);
      var ctx_r37 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r37.model = $event;
    })("change", function FieldComponent_mat_form_field_6_Template_mat_select_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r38);
      var ctx_r39 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r39.modelChange.emit(ctx_r39.model);
    })("focus", function FieldComponent_mat_form_field_6_Template_mat_select_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r38);
      var ctx_r40 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r40.selectEvent.emit(ctx_r40.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, FieldComponent_mat_form_field_6_mat_option_4_Template, 2, 1, "mat-option", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(5, FieldComponent_mat_form_field_6_mat_option_5_Template, 2, 2, "mat-option", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r5.field.Title || ctx_r5.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r5.model)("required", ctx_r5.field.required)("disabled", ctx_r5.field.Disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !ctx_r5.field.required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r5.field.Choices);
  }
}

function FieldComponent_mat_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r42 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-checkbox", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_checkbox_7_Template_mat_checkbox_ngModelChange_0_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r42);
      var ctx_r41 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r41.model = $event;
    })("change", function FieldComponent_mat_checkbox_7_Template_mat_checkbox_change_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r42);
      var ctx_r43 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r43.modelChange.emit(ctx_r43.model);
    })("focus", function FieldComponent_mat_checkbox_7_Template_mat_checkbox_focus_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r42);
      var ctx_r44 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r44.selectEvent.emit(ctx_r44.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r6.model)("required", ctx_r6.field.required)("disabled", ctx_r6.field.Disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])(" ", ctx_r6.field.Title || ctx_r6.field.EntityPropertyName, " ");
  }
}

function FieldComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r46 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "input", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_8_Template_input_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r46);
      var ctx_r45 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r45.model = $event;
    })("change", function FieldComponent_mat_form_field_8_Template_input_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r46);
      var ctx_r47 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r47.modelChange.emit(ctx_r47.model);
    })("focus", function FieldComponent_mat_form_field_8_Template_input_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r46);
      var ctx_r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r48.selectEvent.emit(ctx_r48.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "b");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(7, "number");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r7.field.Title || ctx_r7.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r7.model)("required", ctx_r7.field.required)("disabled", ctx_r7.field.Disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"])(7, 5, ctx_r7.model, "1.2-2"));
  }
}

function FieldComponent_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r50 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "input", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function FieldComponent_mat_form_field_9_Template_input_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r50);
      var ctx_r49 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r49.model.Title = $event;
    })("change", function FieldComponent_mat_form_field_9_Template_input_change_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r50);
      var ctx_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r51.modelChange.emit(ctx_r51.model);
    })("focus", function FieldComponent_mat_form_field_9_Template_input_focus_3_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r50);
      var ctx_r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r52.selectEvent.emit(ctx_r52.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r8.field.Title || ctx_r8.field.EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r8.model.Title)("required", ctx_r8.field.required)("disabled", ctx_r8.field.Disabled);
  }
}

function FieldComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r54 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "button", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function FieldComponent_div_10_Template_button_click_1_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r54);
      var ctx_r53 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r53.selectEvent.emit(ctx_r53.field);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("color", ctx_r9.idx == ctx_r9.index ? "accent" : "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"])(" ", ctx_r9.field.Title || ctx_r9.field.EntityPropertyName, ": ", ctx_r9.field.FieldTypeKind, "... ");
  }
}

var FieldComponent = function FieldComponent() {
  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FieldComponent);

  this.fieldChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
  this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
  this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
  this.dtype = SpDataType;
};

FieldComponent.ɵfac = function FieldComponent_Factory(t) {
  return new (t || FieldComponent)();
};

FieldComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: FieldComponent,
  selectors: [["lib-field"]],
  inputs: {
    field: "field",
    model: "model"
  },
  outputs: {
    fieldChange: "fieldChange",
    modelChange: "modelChange",
    selectEvent: "selectEvent"
  },
  decls: 11,
  vars: 10,
  consts: [[3, "ngSwitch"], ["appearance", "fill", 4, "ngSwitchCase"], [3, "ngModel", "required", "disabled", "ngModelChange", "change", "focus", 4, "ngSwitchCase"], ["class", "col-content", 4, "ngSwitchDefault"], ["appearance", "fill"], ["matInput", "", "type", "number", 3, "ngModel", "required", "disabled", "ngModelChange", "change", "focus"], ["matInput", "", "type", "text", 3, "ngModel", "required", "disabled", "ngModelChange", "change", "focus"], ["matInput", "", "rows", "2", 3, "ngModel", "required", "disabled", "ngModelChange", "change", "focus"], ["matInput", "", 3, "matDatepicker", "ngModel", "required", "disabled", "ngModelChange", "change", "focus"], ["matSuffix", "", 3, "for"], ["dp", ""], [3, "ngModel", "required", "disabled", "ngModelChange", "selectionChange", "focus"], [3, "value", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngModel", "required", "disabled", "ngModelChange", "change", "focus"], [1, "col-content"], ["mat-button", "", 3, "color", "click"]],
  template: function FieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0, 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, FieldComponent_mat_form_field_1_Template, 4, 4, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, FieldComponent_mat_form_field_2_Template, 4, 4, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(3, FieldComponent_mat_form_field_3_Template, 4, 4, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, FieldComponent_mat_form_field_4_Template, 7, 6, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(5, FieldComponent_mat_form_field_5_Template, 6, 6, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(6, FieldComponent_mat_form_field_6_Template, 6, 6, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(7, FieldComponent_mat_checkbox_7_Template, 2, 4, "mat-checkbox", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(8, FieldComponent_mat_form_field_8_Template, 8, 8, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(9, FieldComponent_mat_form_field_9_Template, 4, 4, "mat-form-field", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(10, FieldComponent_div_10_Template, 3, 3, "div", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitch", ctx.field.FieldTypeKind);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Integer);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Text);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Note);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.DateTime);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Choice);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Lookup);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Boolean);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.Number);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", ctx.dtype.User);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchDefault"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxRequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["DecimalPipe"]],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(FieldComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-field',
      templateUrl: './field.component.html',
      styleUrls: ['./../style.css']
    }]
  }], function () {
    return [];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    fieldChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    modelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();

function ObjectFormComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "lib-field", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("modelChange", function ObjectFormComponent_div_1_div_1_Template_lib_field_modelChange_1_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r7);
      var field_r4 = ctx.$implicit;
      var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r6.object[field_r4.EntityPropertyName] = $event;
    })("selectEvent", function ObjectFormComponent_div_1_div_1_Template_lib_field_selectEvent_1_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r7);
      var idx_r5 = ctx.index;
      var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r8.onSelectField(idx_r5);
    })("modelChange", function ObjectFormComponent_div_1_div_1_Template_lib_field_modelChange_1_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r7);
      var idx_r5 = ctx.index;
      var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r9.onChange($event, idx_r5);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r4 = ctx.$implicit;
    var idx_r5 = ctx.index;
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(field_r4.CssClass || "col-4");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("field", ctx_r3.fields[idx_r5])("model", ctx_r3.object[field_r4.EntityPropertyName]);
  }
}

function ObjectFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ObjectFormComponent_div_1_div_1_Template, 2, 4, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r0.fields);
  }
}

function ObjectFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "lib-field", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("modelChange", function ObjectFormComponent_div_2_Template_lib_field_modelChange_2_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r10.object = $event;
    })("modelChange", function ObjectFormComponent_div_2_Template_lib_field_modelChange_2_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r12.objectChange.emit(ctx_r12.object);
    })("selectEvent", function ObjectFormComponent_div_2_Template_lib_field_selectEvent_2_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r11);
      var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r13.onSelectField(0);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(ctx_r1.fields[0].CssClass || "col-4");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("field", ctx_r1.fields[0])("model", ctx_r1.object);
  }
}

function ObjectFormComponent_div_3_div_1_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var opt_r21 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", opt_r21.value);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(opt_r21.key);
  }
}

function ObjectFormComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-form-field", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5, "Property Name/Key");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "input", 16, 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ObjectFormComponent_div_3_div_1_Template_input_ngModelChange_6_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r23);
      var ctx_r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r22.field[ctx_r22.index].EntityPropertyName = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(8, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(9, "mat-form-field", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(10, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(11, "Property Data-type");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(12, "mat-select", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ObjectFormComponent_div_3_div_1_Template_mat_select_ngModelChange_12_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r23);
      var ctx_r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r24.fields[ctx_r24.index].FieldTypeKind = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(13, ObjectFormComponent_div_3_div_1_mat_option_13_Template, 2, 2, "mat-option", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(14, "keyvalue");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(15, "div", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(16, "mat-form-field", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(17, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(18, "Width");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(19, "input", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ObjectFormComponent_div_3_div_1_Template_input_ngModelChange_19_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r23);
      var ctx_r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r25.object[ctx_r25.fields[ctx_r25.index].CssClass] = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(20, "mat-hint");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(21, "E.g. col-1,... col-12");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(22, "div", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(23, "lib-field", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("modelChange", function ObjectFormComponent_div_3_div_1_Template_lib_field_modelChange_23_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r23);
      var ctx_r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r26.object[ctx_r26.field[ctx_r26.index].EntityPropertyName] = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r14.field[ctx_r14.index].EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r14.fields[ctx_r14.index].FieldTypeKind);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"])(14, 6, ctx_r14.dtypes));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r14.object[ctx_r14.fields[ctx_r14.index].CssClass]);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("field", ctx_r14.fields[ctx_r14.index])("model", ctx_r14.object[ctx_r14.field[ctx_r14.index].EntityPropertyName]);
  }
}

function ObjectFormComponent_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r17.field[ctx_r17.index].EntityPropertyName);
  }
}

function ObjectFormComponent_div_3_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-form-field", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2, "config");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "textarea", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ObjectFormComponent_div_3_mat_form_field_20_Template_textarea_ngModelChange_3_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r28);
      var ctx_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r27.configText = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r18.configText);
  }
}

function ObjectFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ObjectFormComponent_div_3_div_1_Template, 24, 8, "div", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "div", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-checkbox", null, 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(5, "View");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(6, "button", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ObjectFormComponent_div_3_Template_button_click_6_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r30);

      var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(4);

      var ctx_r29 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      ctx_r29.stringify();
      return _r15.checked = true;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(7, "Stringify");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(8, "button", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ObjectFormComponent_div_3_Template_button_click_8_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r30);
      var ctx_r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r31.parse();
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(9, "Parse");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(10, "span", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(11, "mat-checkbox", null, 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(13, "Edit ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(14, ObjectFormComponent_div_3_span_14_Template, 2, 1, "span", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(15, "button", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ObjectFormComponent_div_3_Template_button_click_15_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r30);

      var _r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(12);

      var ctx_r32 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      ctx_r32.newProperty();
      return _r16.value = true;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(16, "Add");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(17, "button", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ObjectFormComponent_div_3_Template_button_click_17_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r30);

      var _r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(12);

      var ctx_r33 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      ctx_r33.deleteProperty();
      return _r16.value = false;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(18, "Delete");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(19, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(20, ObjectFormComponent_div_3_mat_form_field_20_Template, 4, 1, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(4);

    var _r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(12);

    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", -1 < ctx_r2.index && _r16.checked);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("disabled", !ctx_r2.configText);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx_r2.index > -1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("disabled", ctx_r2.index < 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", _r15.checked);
  }
}

var ObjectFormComponent = /*#__PURE__*/function () {
  function ObjectFormComponent(jsonPipe) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ObjectFormComponent);

    this.jsonPipe = jsonPipe;
    this.objectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.index = -1;
    this.dtypes = SpDataType;
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ObjectFormComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this.objectType = typeof this.object;

      if (this.objectType === 'object') {
        this._generateFields(this.object);
      } else {
        this.property = {
          key: this.object
        };

        this._generateFields(this.property);
      }
    }
  }, {
    key: "_generateFields",
    value: function _generateFields(obj) {
      var _a;

      if (!((_a = this.fields) === null || _a === void 0 ? void 0 : _a.length)) {
        this.fields = [];

        for (var key in obj) {
          this.fields.push({
            EntityPropertyName: key,
            FieldTypeKind: this._toSpType(typeof obj[key])
          });
        }
      }
    }
  }, {
    key: "_toSpType",
    value: function _toSpType(type) {
      switch (type) {
        case 'boolean':
          return 8;

        case 'string':
          return 2;

        case 'number':
          return 9;

        default:
          return -1;
      }
    }
  }, {
    key: "selectIndex",
    value: function selectIndex(idx) {
      this.index = idx;
    }
  }, {
    key: "onChange",
    value: function onChange(evt, fieldIdx) {
      this.changeEvent.emit({
        field: this.fields[fieldIdx].EntityPropertyName,
        value: evt,
        object: this.object
      });
    }
  }, {
    key: "onSelectField",
    value: function onSelectField(idx) {
      this.selectEvent.emit({
        key: this.fields[idx].EntityPropertyName,
        value: this.object[this.fields[idx].EntityPropertyName]
      });
      this.index = idx;
    }
  }, {
    key: "deleteProperty",
    value: function deleteProperty() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
      var field = this.fields.splice(idx, 1); /// object as array

      if (this.object.length) {
        var _idx = parseInt(field.EntityPropertyName);

        if (!isNaN(_idx)) this.object.splice(_idx, 1);
      } /// object
      else {
          delete this.object[field.EntityPropertyName];
        }

      this.index = -1;
    }
  }, {
    key: "newProperty",
    value: function newProperty(inputRef) {
      this.fields.push({
        EntityPropertyName: '',
        Title: '',
        FieldTypeKind: 2,
        cssClass: 'col-3',
        required: false
      });
      this.index = this.fields.length - 1;
      this.object[this.fields[this.index].EntityPropertyName] = undefined;
      if (inputRef) inputRef.focus();
    } ///

  }, {
    key: "stringify",
    value: function stringify() {
      this.configText = this.jsonPipe.transform(this.object);
    }
  }, {
    key: "parse",
    value: function parse() {
      try {
        this.object = JSON.parse(this.configText);
        this.ngOnChanges();
        this.objectChange.emit(this.object);
      } catch (err) {
        alert("Parsing error ".concat(err));
        console.error('Parsing error:', err);
      }
    }
  }]);

  return ObjectFormComponent;
}();

ObjectFormComponent.ɵfac = function ObjectFormComponent_Factory(t) {
  return new (t || ObjectFormComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(_angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]));
};

ObjectFormComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: ObjectFormComponent,
  selectors: [["lib-object-form"]],
  inputs: {
    object: "object",
    fields: "fields",
    metadataEditing: "metadataEditing"
  },
  outputs: {
    objectChange: "objectChange",
    changeEvent: "changeEvent",
    selectEvent: "selectEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 3,
  consts: [[3, "ngSwitch"], ["class", "row", 4, "ngSwitchCase"], ["class", "row", 4, "ngSwitchDefault"], [4, "ngIf"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [3, "field", "model", "modelChange", "selectEvent"], [1, "row", 2, "align-items", "center"], ["view", ""], ["mat-button", "", "color", "accent", 3, "click"], ["mat-button", "", "color", "accent", 3, "disabled", "click"], [1, "spacer"], ["edit", ""], ["appearance", "fill", "style", "width:100%;", 4, "ngIf"], [1, "col-2"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["propKey", ""], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-6"], [3, "field", "model", "modelChange"], [3, "value"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "rows", "10", 2, "white-space", "pre-wrap", 3, "ngModel", "ngModelChange"]],
  template: function ObjectFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0, 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ObjectFormComponent_div_1_Template, 2, 1, "div", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(2, ObjectFormComponent_div_2_Template, 3, 4, "div", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(3, ObjectFormComponent_div_3_Template, 21, 5, "div", 3);
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitch", ctx.objectType);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngSwitchCase", "object");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.metadataEditing);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], FieldComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatHint"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOption"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["KeyValuePipe"]],
  styles: ["", ".dim[_ngcontent-%COMP%] { opacity: .7 }\n.highlight[_ngcontent-%COMP%] { opacity: 1 }"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(ObjectFormComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-object-form',
      templateUrl: './object-form.component.html',
      styleUrls: ['./../style.css']
    }]
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]
    }];
  }, {
    object: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    objectChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    fields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    metadataEditing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();

var FormDialogComponent = /*#__PURE__*/function () {
  function FormDialogComponent(dialogRef, data) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FormDialogComponent);

    this.dialogRef = dialogRef;
    this.data = data;
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FormDialogComponent, [{
    key: "close",
    value: function close() {
      this.dialogRef.close();
    }
  }]);

  return FormDialogComponent;
}();

FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
  return new (t || FormDialogComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MAT_DIALOG_DATA"]));
};

FormDialogComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: FormDialogComponent,
  selectors: [["lib-form-dialog"]],
  decls: 7,
  vars: 1,
  consts: [["mat-dialog-title", ""], [3, "object"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
  template: function FormDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "h2", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1, "Detail");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "mat-dialog-content");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(3, "lib-object-form", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-dialog-actions", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "button", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6, "Close");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("object", ctx.data);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogContent"], ObjectFormComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogClose"]],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(FormDialogComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-form-dialog',
      template: "\n    <h2 mat-dialog-title>Detail</h2>\n    <mat-dialog-content>\n      <lib-object-form [object]=\"data\"></lib-object-form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-button mat-dialog-close>Close</button>\n    </mat-dialog-actions>"
    }]
  }], function () {
    return [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MAT_DIALOG_DATA"]]
      }]
    }];
  }, null);
})();

function ListFieldsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "button", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListFieldsComponent_div_1_Template_button_click_2_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r6);
      var idx_r4 = ctx.index;
      var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r5.editField(idx_r4);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var field_r3 = ctx.$implicit;
    var idx_r4 = ctx.index;
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(field_r3.CssClass);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("color", idx_r4 == ctx_r0.index ? "accent" : "");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", idx_r4 + " - " + field_r3.Title, " ");
  }
}

function ListFieldsComponent_div_3_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var dt_r11 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", dt_r11.value);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", dt_r11.key, " ");
  }
}

function ListFieldsComponent_div_3_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "mat-option", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var col_r12 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", col_r12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", col_r12, " ");
  }
}

function ListFieldsComponent_div_3_div_41_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "div", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(4, "Choice Options - separated by comma (,)");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "input", 26, 27);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("change", function ListFieldsComponent_div_3_div_41_Template_input_change_5_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r15);

      var _r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(6);

      var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
      return ctx_r14.fields[ctx_r14.index].Choices = ctx_r14.parseOptions(_r13.value);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", ctx_r10.stringify(ctx_r10.fields[ctx_r10.index].Choices));
  }
}

function ListFieldsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "lib-object-form", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("objectChange", function ListFieldsComponent_div_3_Template_lib_object_form_objectChange_1_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r16.metalist.fields[ctx_r16.index] = $event;
    })("selectEvent", function ListFieldsComponent_div_3_Template_lib_object_form_selectEvent_1_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r18.onFieldSelect($event);
    })("changeEvent", function ListFieldsComponent_div_3_Template_lib_object_form_changeEvent_1_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r19.onFieldChange($event);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "div", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(3, "div", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6, "Label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "input", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ListFieldsComponent_div_3_Template_input_ngModelChange_7_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r20.fields[ctx_r20.index].Title = $event;
    })("change", function ListFieldsComponent_div_3_Template_input_change_7_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r21.generateEntityPropertyName(ctx_r21.fields[ctx_r21.index]);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(8, "div", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(9, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(10, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(11, "Name");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(12, "input", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ListFieldsComponent_div_3_Template_input_ngModelChange_12_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r22.fields[ctx_r22.index].EntityPropertyName = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(13, "div", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(14, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(15, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(16, "Type as string");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(17, "mat-select", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ListFieldsComponent_div_3_Template_mat_select_ngModelChange_17_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r23.fields[ctx_r23.index].FieldTypeKind = $event;
    })("selectionChange", function ListFieldsComponent_div_3_Template_mat_select_selectionChange_17_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r24.checkDType(ctx_r24.fields[ctx_r24.index]);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(18, ListFieldsComponent_div_3_mat_option_18_Template, 2, 2, "mat-option", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(19, "keyvalue");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(20, "div", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(21, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(22, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(23, "CSS Class");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(24, "mat-select", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("valueChange", function ListFieldsComponent_div_3_Template_mat_select_valueChange_24_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r25.fields[ctx_r25.index].cssClass = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(25, ListFieldsComponent_div_3_mat_option_25_Template, 2, 2, "mat-option", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(26, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(27, "mat-form-field", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(28, "mat-label");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(29, "Order");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(30, "input", 20, 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("change", function ListFieldsComponent_div_3_Template_input_change_30_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);

      var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"])(31);

      var ctx_r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r26.arangeFields(ctx_r26.index, _r9.value);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(32, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(33, "mat-checkbox", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ListFieldsComponent_div_3_Template_mat_checkbox_ngModelChange_33_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r27.fields[ctx_r27.index].required = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(34, "Required");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(35, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(36, "mat-checkbox", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ListFieldsComponent_div_3_Template_mat_checkbox_ngModelChange_36_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r28.fields[ctx_r28.index].ReadOnlyField = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(37, "Read-only");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(38, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(39, "mat-checkbox", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("ngModelChange", function ListFieldsComponent_div_3_Template_mat_checkbox_ngModelChange_39_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r17);
      var ctx_r29 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r29.fields[ctx_r29.index].changeToList = $event;
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(40, "Change to list");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(41, ListFieldsComponent_div_3_div_41_Template, 7, 1, "div", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("object", ctx_r1.metalist.fields[ctx_r1.index])("fields", ctx_r1.metafields);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.fields[ctx_r1.index].Title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.fields[ctx_r1.index].EntityPropertyName);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.fields[ctx_r1.index].FieldTypeKind);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"])(19, 14, ctx_r1.dtypes));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("value", ctx_r1.fields[ctx_r1.index].cssClass);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r1.cols);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("max", ctx_r1.fields.length - 1)("value", ctx_r1.index);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.fields[ctx_r1.index].required);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.fields[ctx_r1.index].ReadOnlyField);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngModel", ctx_r1.fields[ctx_r1.index].changeToList);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx_r1.fields[ctx_r1.index].FieldTypeKind == 6);
  }
}

function ListFieldsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "button", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListFieldsComponent_button_9_Template_button_click_0_listener() {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r31);
      var ctx_r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r30.spliceAt(ctx_r30.index);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1, "\u2717 Remove");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }
}

var ListFieldsComponent = /*#__PURE__*/function () {
  function ListFieldsComponent(lfs) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListFieldsComponent);

    this.lfs = lfs;
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.metafields = [/// 0 - Title: string
    {
      Title: 'Title',
      EntityPropertyName: 'Title',
      FieldTypeKind: 2,
      Required: true,
      Order: 1,
      CssClass: 'col-3'
    }, /// 1 - EntityPropertyName: string
    {
      Title: 'Entity Property Name',
      EntityPropertyName: 'EntityPropertyName',
      FieldTypeKind: 2,
      ReadOnlyField: false,
      Order: 2,
      CssClass: 'col-3'
    }, /// 2 - FieldTypeKind: choice
    {
      Title: 'Field Type Kind',
      EntityPropertyName: 'FieldTypeKind',
      FieldTypeKind: 6,
      Required: true,
      Order: 3,
      CssClass: 'col-3',
      Choices: this.range(1, 20, 1)
    }, /// 3 - Order: number
    {
      Title: 'Order',
      EntityPropertyName: 'Order',
      FieldTypeKind: 9,
      Order: 4,
      CssClass: 'col-3'
    }, /// 4 - CssClass: choice
    {
      Title: 'CSS Class',
      EntityPropertyName: 'CssClass',
      FieldTypeKind: 6,
      Order: 5,
      CssClass: 'col-3',
      Choices: ['col-1', 'col-2', 'col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9', 'col-10', 'col-11', 'col-12']
    }, /// 5 - Required: boolean
    {
      Title: 'Required',
      EntityPropertyName: 'Required',
      FieldTypeKind: 8,
      Order: 6,
      CssClass: 'col-3'
    }, /// 6 - Disabled: boolean
    {
      Title: 'Disabled',
      EntityPropertyName: 'Disabled',
      FieldTypeKind: 8,
      Order: 7,
      CssClass: 'col-3'
    }, /// 7 - Choices: note -> array
    {
      Title: 'Choices',
      EntityPropertyName: 'Choices',
      FieldTypeKind: 3,
      Order: 8,
      CssClass: 'col-6',
      Disabled: false
    }, /// 8 - LookupList: text -> array
    {
      Title: 'Lookup List GUID',
      EntityPropertyName: 'LookupList',
      FieldTypeKind: 2,
      Order: 8,
      CssClass: 'col-6',
      Disabled: false
    }];
    this.selected = {};
    this.index = -1;
    this.editing = [];
  } //---------------------------------------------------------
  // PRIVATE
  //---------------------------------------------------------
  /// toggle 'disabled' meta-field 'Choices'


  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListFieldsComponent, [{
    key: "_toggleDisabledField",
    value: function _toggleDisabledField(field) {
      /// Choices
      this.metafields[7].Disabled = !(field.FieldTypeKind === 6); /// Lookup

      this.metafields[8].Disabled = !(field.FieldTypeKind === 7);
    }
  }, {
    key: "_initMetafields",
    value: function _initMetafields(field, index) {
      /// 'Order'
      field.Order = this.index; /// 'Choices' or 'Lookup'

      this._toggleDisabledField(field);
    } /// returns list info

  }, {
    key: "_listInfo",
    value: function _listInfo() {
      try {
        return {
          url: this.metalist.url.toLowerCase().split('/list')[0],
          title: this.metalist.title,
          guid: this.metalist.guid
        };
      } catch (err) {
        var msg = "Failed to setup the list.\nList title: ".concat(JSON.stringify(this.metalist), ".");
        alert(msg);
        throw msg;
      }
    } //--------------------------------------------------------- 
    // PUBLIC
    //---------------------------------------------------------

  }, {
    key: "range",
    value: function range(start, end) {
      var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var len = end - start + 1;

      if (len) {
        var a = new Array(len);
        var idx = 0;
        a[idx++] = start;

        for (; idx < len; idx++) {
          a[idx] = a[idx - 1] + step;
        }

        return a;
      }
    }
  }, {
    key: "onFieldSelect",
    value: function onFieldSelect(field) {
      console.log('field selected:', field);
    }
  }, {
    key: "onFieldChange",
    value: function onFieldChange(evt) {
      /// Title -> remove white-spaces in meta-field 'EntityPropertyName'
      if (evt.field === 'Title') evt.object.EntityPropertyName = evt.value.replace(/ /g, ''); /// FieldTypeKind -> toggle 'disabled' meta-field 'Choices'
      else if (evt.field === 'FieldTypeKind') this._toggleDisabledField(evt.object); /// Order -> reoder fields
        else if (evt.field === 'Order') this.orderFields(evt.object, evt.value); /// Choices -> parse string to array
          else if (evt.field === 'Choices') {
              evt.object.Choices = evt.value.split(',');
            }
    } /// edit field

  }, {
    key: "editField",
    value: function editField(idx) {
      this.index = idx;

      this._initMetafields(this.metalist.fields[idx]);
    } /// new field form

  }, {
    key: "newField",
    value: function newField() {
      this.metalist.fields.push({
        Order: this.metalist.fields.length,
        toAdd: true
      });
      this.index = this.metalist.fields.length - 1;
      this.editing[this.index] = true; // this.fieldsChange.emit(this.metalist.fields);
    } /// add fields to list
    /// emit change

  }, {
    key: "addFields",
    value: function addFields() {
      var _this14 = this;

      var _a;

      var fieldsToAdd = this.metalist.fields.filter(function (f) {
        return f.toAdd;
      });

      if (fieldsToAdd.length && ((_a = this.metalist) === null || _a === void 0 ? void 0 : _a.url)) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(fieldsToAdd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (field) {
          delete field['toAdd'];
          return _this14.lfs.add(field, _this14._listInfo());
        })).subscribe(function (res) {
          console.log("Field ".concat(res.Title, " was added successfully."));

          _this14.changeEvent.emit(_this14.metalist);
        });
      }
    } /// remove field from config
    /// emit change

  }, {
    key: "spliceAt",
    value: function spliceAt() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
      this.metalist.fields.splice(idx, 1);
      this.changeEvent.emit(this.metalist);
    } /// delete field from the list
    /// emit change

  }, {
    key: "deleteField",
    value: function deleteField() {
      var _this15 = this;

      if (this.metalist.fields[this.index]) {
        var field = this.metalist.fields[this.index];

        if (confirm("Are you sure you want to delete the \"".concat(field.Title, "\" field?"))) {
          this.lfs.delete(field.Title, this._listInfo()).subscribe(function (res) {
            _this15.spliceAt(_this15.index);
          });
        }
      }
    } /// (re)order fields with new index/order

  }, {
    key: "orderFields",
    value: function orderFields(field, index) {
      /// 'index' out of range? if so, put it in range
      if (index < 0) field.Order = index = 0;else if (index > this.metalist.fields.length - 1) field.Order = index = this.metalist.fields.length - 1;
      var oldIdx = this.metalist.fields.findIndex(function (f) {
        return f.EntityPropertyName === field.EntityPropertyName;
      });
      var item = this.metalist.fields.splice(oldIdx, 1); /// [0 - index] + item + [index - length]

      this.metalist.fields = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.metalist.fields.slice(0, index).concat(item, this.metalist.fields.slice(index)));
      this.editing[index] = true;
      this.index = index;
      this.changeEvent.emit(this.metalist);
    } ///

  }, {
    key: "swapFields",
    value: function swapFields(i, j) {
      var _ref = [this.metalist.fields[j], this.metalist.fields[i]];
      this.metalist.fields[i] = _ref[0];
      this.metalist.fields[j] = _ref[1];
      this.index = j;
      this.changeEvent.emit(this.metalist);
    } ///

  }, {
    key: "arangeFields",
    value: function arangeFields(oldIdx, newIdx) {
      var item = this.metalist.fields.splice(oldIdx, 1); /// [0 - newIdx] + item + [newIdex - length]

      this.metalist.fields = Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.metalist.fields.slice(0, newIdx).concat(item, this.metalist.fields.slice(newIdx)));
      this.editing[newIdx] = true;
      this.index = newIdx;
      this.changeEvent.emit(this.metalist);
    }
  }, {
    key: "checkDType",
    value: function checkDType(field) {
      field.lookup = field.FieldTypeKind === 7 ? {} : undefined;
    }
  }, {
    key: "stringify",
    value: function stringify(obj) {
      return (obj === null || obj === void 0 ? void 0 : obj.length) ? obj.join() : JSON.stringify(obj);
    }
  }, {
    key: "parseOptions",
    value: function parseOptions(opts) {
      return opts.split(',').map(function (str) {
        return str.trim();
      });
    }
  }, {
    key: "parseQuery",
    value: function parseQuery(query) {
      try {
        return JSON.parse(query);
      } catch (err) {
        alert('Parse error:\n' + err);
        return query;
      }
    }
  }]);

  return ListFieldsComponent;
}();

ListFieldsComponent.ɵfac = function ListFieldsComponent_Factory(t) {
  return new (t || ListFieldsComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(ListFieldService));
};

ListFieldsComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: ListFieldsComponent,
  selectors: [["lib-list-fields"]],
  inputs: {
    metalist: "metalist"
  },
  outputs: {
    changeEvent: "changeEvent"
  },
  decls: 17,
  vars: 3,
  consts: [[1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "align-items", "center"], ["mat-flat-button", "", 3, "click"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "spacer"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"], [1, "col-content"], ["mat-flat-button", "", 3, "color", "click"], [3, "object", "fields", "objectChange", "selectEvent", "changeEvent"], [1, "col-3"], ["appearance", "fill"], ["matInput", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "value", "valueChange"], [1, "col-2"], ["matInput", "", "type", "number", "min", "0", 3, "max", "value", "change"], ["newIdx", ""], [2, "margin-left", "0.25em", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "col-12"], ["matInput", "", 3, "value", "change"], ["opt", ""], ["mat-button", "", 3, "click"]],
  template: function ListFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "div", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, ListFieldsComponent_div_1_Template, 4, 4, "div", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(2, "br");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(3, ListFieldsComponent_div_3_Template, 42, 16, "div", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(4, "mat-action-row", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "span");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(6, "Config");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(7, "button", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListFieldsComponent_Template_button_click_7_listener() {
        return ctx.newField();
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(8, "\u2795 New field");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(9, ListFieldsComponent_button_9_Template, 2, 0, "button", 5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"])(10, "span", 6);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(11, "span");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(12, "List");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(13, "button", 7);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListFieldsComponent_Template_button_click_13_listener() {
        return ctx.deleteField();
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(14, "\u2717 Delete");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(15, "button", 8);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("click", function ListFieldsComponent_Template_button_click_15_listener() {
        return ctx.addFields();
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(16, "\u2795 Add");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx.metalist.fields);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.index > -1 && (ctx.metalist == null ? null : ctx.metalist.fields));
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(6);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.index > -1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], ObjectFormComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOption"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["KeyValuePipe"]],
  styles: ["", ".row[_ngcontent-%COMP%] { align-items: center; }"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(ListFieldsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-list-fields',
      templateUrl: './list-fields.component.html',
      styleUrls: ['./../style.css']
    }]
  }], function () {
    return [{
      type: ListFieldService
    }];
  }, {
    metalist: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }]
  });
})();

var _c0$2 = ["libList"];

function RecycleBinComponent_lib_list_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"])();

    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "lib-list", 1, 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"])("selectEvent", function RecycleBinComponent_lib_list_0_Template_lib_list_selectEvent_0_listener($event) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"])(_r3);
      var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
      return ctx_r2.restore($event);
    });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("list", ctx_r0.list);
  }
}

var RecycleBinComponent = /*#__PURE__*/function () {
  function RecycleBinComponent(sp) {
    Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RecycleBinComponent);

    this.sp = sp;
    this.list = {};
  }

  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RecycleBinComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this16 = this;

      this.sp.recycleBin(this.url).subscribe(function (res) {
        _this16.list.items = res;
        _this16.list.fields = [{
          Title: 'Title',
          EntityPropertyName: 'Title',
          FieldTypeKind: 2
        }, {
          Title: 'Container',
          EntityPropertyName: 'DirName',
          FieldTypeKind: 2
        }, {
          Title: 'Type',
          EntityPropertyName: 'ItemType',
          FieldTypeKind: 1
        }, {
          Title: 'Deleted',
          EntityPropertyName: 'DeletedDate',
          FieldTypeKind: 4
        }];
        _this16.list.displays = ['Title', 'DirName', 'ItemType', 'DeletedDate'];
      });
    }
  }, {
    key: "restore",
    value: function restore(ev) {
      var _this17 = this;

      this.sp.restore(ev.payload.Id, this.url).subscribe(function () {
        removeByItemKey(_this17.list.items, ev.payload, 'Id');

        _this17.libList.updateRows(_this17.list.items);
      });
    }
  }]);

  return RecycleBinComponent;
}();

RecycleBinComponent.ɵfac = function RecycleBinComponent_Factory(t) {
  return new (t || RecycleBinComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(BaseService));
};

RecycleBinComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: RecycleBinComponent,
  selectors: [["lib-recycle-bin"]],
  viewQuery: function RecycleBinComponent_Query(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"])(_c0$2, 1);
    }

    if (rf & 2) {
      var _t;

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"])()) && (ctx.libList = _t.first);
    }
  },
  inputs: {
    url: "url"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "list", "selectEvent", 4, "ngIf"], [3, "list", "selectEvent"], ["libList", ""]],
  template: function RecycleBinComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(0, RecycleBinComponent_lib_list_0_Template, 2, 1, "lib-list", 0);
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.list.items == null ? null : ctx.list.items.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], ListComponent],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(RecycleBinComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'lib-recycle-bin',
      template: '<lib-list *ngIf="list.items?.length" #libList [list]="list" (selectEvent)="restore($event)"></lib-list>'
    }]
  }], function () {
    return [{
      type: BaseService
    }];
  }, {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    libList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['libList']
    }]
  });
})();

function GeneralDialog_pre_3_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "pre");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(ctx_r0.data.Detail);
  }
}

function GeneralDialog_pre_4_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "pre");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"])(2, "json");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"])(2, 1, ctx_r1.data.Detail));
  }
}

function GeneralDialog_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(1, "button", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(2, "Got it!");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(ctx_r2.data.Cat + "-bg");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("mat-dialog-close", true);
  }
}

var _c0$3 = function _c0$3(a0, a1) {
  return {
    action: a0,
    data: a1
  };
};

function GeneralDialog_ng_container_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "button", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
  }

  if (rf & 2) {
    var op_r5 = ctx.$implicit;
    var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(op_r5.class);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("cdkFocusInitial", op_r5.focused)("mat-dialog-close", Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"])(5, _c0$3, op_r5, ctx_r4.data));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"])("", op_r5.name, " ");
  }
}

function GeneralDialog_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(1, GeneralDialog_ng_container_7_button_1_Template, 2, 8, "button", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"])();
  }

  if (rf & 2) {
    var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngForOf", ctx_r3.data.Operations);
  }
}
/**
 * @title Dialog with header, scrollable content and actions
 */


var GeneralDialog = function GeneralDialog(data) {
  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, GeneralDialog);

  this.data = data;
};

GeneralDialog.ɵfac = function GeneralDialog_Factory(t) {
  return new (t || GeneralDialog)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MAT_DIALOG_DATA"]));
};

GeneralDialog.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"])({
  type: GeneralDialog,
  selectors: [["general-dialog"]],
  decls: 8,
  vars: 7,
  consts: [["mat-dialog-title", ""], [4, "ngIf"], ["align", "end"], ["mat-button", "", "cdkFocusInitialmat-dialog-close", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "class", "cdkFocusInitial", "mat-dialog-close", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "cdkFocusInitial", "mat-dialog-close"]],
  template: function GeneralDialog_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(0, "h2", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(2, "mat-dialog-content");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(3, GeneralDialog_pre_3_Template, 2, 1, "pre", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(4, GeneralDialog_pre_4_Template, 3, 3, "pre", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"])(5, "mat-dialog-actions", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(6, GeneralDialog_ng_container_6_Template, 3, 3, "ng-container", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"])(7, GeneralDialog_ng_container_7_Template, 2, 1, "ng-container", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"])(ctx.data.Cat + "-fg");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"])((ctx.data == null ? null : ctx.data.Title) || ctx.data.Cat);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.data.Type == "string");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.data.Type != "string");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", !(ctx.data.Operations == null ? null : ctx.data.Operations.length));
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"])("ngIf", ctx.data.Operations == null ? null : ctx.data.Operations.length);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["NgForOf"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(GeneralDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'general-dialog',
      template: "\n  <h2 mat-dialog-title [class]=\"data.Cat + '-fg'\">{{data?.Title || data.Cat}}</h2>\n  <mat-dialog-content>\n    <pre *ngIf=\"data.Type == 'string'\">{{data.Detail}}</pre>\n    <pre *ngIf=\"data.Type != 'string'\">{{data.Detail|json}}</pre>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <ng-container *ngIf=\"!data.Operations?.length\">\n      <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitialmat-dialog-close \n        [class]=\"data.Cat + '-bg'\">Got it!</button>\n    </ng-container>\n\n    <ng-container *ngIf=\"data.Operations?.length\">\n      <button mat-raised-button *ngFor=\"let op of data.Operations\"\n        [class]=\"op.class\"\n        [cdkFocusInitial]=\"op.focused\"\n        [mat-dialog-close]=\"{ action: op, data: data }\" cdkFocusInitial>{{op.name}}\n      </button>\n    </ng-container>\n  </mat-dialog-actions>"
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MAT_DIALOG_DATA"]]
      }]
    }];
  }, null);
})(); /// modules


var SpModule = function SpModule() {
  Object(E_Learning_101_angular_sp_ws_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SpModule);
};

SpModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"])({
  type: SpModule
});
SpModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"])({
  factory: function SpModule_Factory(t) {
    return new (t || SpModule)();
  },
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
    useClass: BaseService,
    multi: true
  }, _angular_common__WEBPACK_IMPORTED_MODULE_52__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"], // BrowserModule,
  _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["ReactiveFormsModule"], MaterialModule], MaterialModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"])(SpModule, {
    declarations: [FileInputComponent, AnnouncementComponent, NoSanitizePipe, ListComponent, RxFormComponent, ListFieldsComponent, FieldComponent, ObjectFormComponent, FormDialogComponent, RecycleBinComponent, GeneralDialog],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"], // BrowserModule,
    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["ReactiveFormsModule"], MaterialModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"], MaterialModule, FileInputComponent, AnnouncementComponent, ListComponent, RxFormComponent, ListFieldsComponent, ObjectFormComponent, RecycleBinComponent, GeneralDialog]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"])(SpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [FileInputComponent, AnnouncementComponent, NoSanitizePipe, ListComponent, RxFormComponent, ListFieldsComponent, FieldComponent, ObjectFormComponent, FormDialogComponent, RecycleBinComponent, GeneralDialog],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"], // BrowserModule,
      _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_53__["ReactiveFormsModule"], MaterialModule],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"], MaterialModule, FileInputComponent, AnnouncementComponent, ListComponent, RxFormComponent, ListFieldsComponent, ObjectFormComponent, RecycleBinComponent, GeneralDialog],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: BaseService,
        multi: true
      }, _angular_common__WEBPACK_IMPORTED_MODULE_52__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["JsonPipe"]]
    }]
  }], null, null);
})();
/*
 * Public API Surface of sp
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "Tq53":
/*!*****************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/list-view.ts ***!
  \*****************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var _item_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item/edit */ "VjzG");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sp */ "T44+");
/* harmony import */ var _item_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item/item */ "f1S/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context.service */ "8H4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








var _c0 = ["libList"];
var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(sp, router, dialog) {
        this.sp = sp;
        this.router = router;
        this.dialog = dialog;
        this.cssClass = this.sp.cssClass;
    }
    ListViewComponent.prototype.detail = function (row) {
        var _this = this;
        /// open dialog
        if (row.action != 'double-click') {
            var copy = Object.assign({}, row.payload);
            var editing_1;
            this.sp.current.item$.subscribe(function (item) { return editing_1 = item; });
            var dialogRef = this.dialog.open(_item_edit__WEBPACK_IMPORTED_MODULE_0__["EditDialog"], {
                data: {
                    value: copy,
                    fields: this.list.fields
                },
                minWidth: '80vw'
            });
            dialogRef.afterClosed().subscribe(function (res) {
                /// chang page title
                _this.sp.docTitle('List View');
                console.log('after closed:', res); /// test
                if (res) {
                    /// 'recycle'
                    if ((res === null || res === void 0 ? void 0 : res.action) === _item_item__WEBPACK_IMPORTED_MODULE_2__["Operator"].Recycle) {
                        Object(sp__WEBPACK_IMPORTED_MODULE_1__["removeByKeyValue"])(_this.list.items, 'ID', res.item.ID);
                        _this.listComp.updateRows(_this.list.items);
                        // this.sp.current.item$.unsubscribe();
                    }
                    /// 'update'...
                    else {
                        if (editing_1) {
                            Object(sp__WEBPACK_IMPORTED_MODULE_1__["replaceOrAdd"])(_this.list.items, editing_1, 'ID');
                            _this.listComp.updateRows(_this.list.items);
                        }
                    }
                }
            });
        }
        /// navigate to edit component
        else
            this.router.navigate(["list/" + row.payload.ID]);
    };
    ListViewComponent.ɵfac = function ListViewComponent_Factory(t) { return new (t || ListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
    ListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListViewComponent, selectors: [["app-list-view"]], viewQuery: function ListViewComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listComp = _t.first);
        } }, inputs: { list: "list" }, decls: 2, vars: 2, consts: [[3, "list", "cssClass", "selectEvent"], ["libList", ""]], template: function ListViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "lib-list", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectEvent", function ListViewComponent_Template_lib_list_selectEvent_0_listener($event) { return ctx.detail($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.list)("cssClass", ctx.cssClass);
        } }, directives: [sp__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]], encapsulation: 2 });
    return ListViewComponent;
}());



/***/ }),

/***/ "VjzG":
/*!*****************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/item/edit.ts ***!
  \*****************************************************/
/*! exports provided: EditComponent, EditDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function() { return EditDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "f1S/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EditComponent_list_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "detail-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", ctx_r0.item)("operations", ctx_r0.operations)("dialogRef", ctx_r0.dialogRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Request ", ctx_r0.item.value.ID, "");
} }
function EditDialog_edit_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "edit-item", 1);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r0.data)("dialogRef", ctx_r0.dialogRef);
} }
var EditComponent = /** @class */ (function () {
    function EditComponent(route, ctx) {
        this.route = route;
        this.ctx = ctx;
        this.files = {};
        this.operations = {};
        this.ctx.current.busy$.next(true);
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        /// edit in dialog
        var id;
        if ((_a = this === null || this === void 0 ? void 0 : this.data) === null || _a === void 0 ? void 0 : _a.value) {
            id = this.data.value.ID;
            this.set(this.data.value);
        }
        else {
            id = this.route.snapshot.params.id;
            if (id) {
                this.ctx.data.get(id).subscribe(function (res) { return _this.set(res); });
            }
        }
    };
    ///---
    EditComponent.prototype.set = function (value) {
        this.item = {
            value: value,
            fields: this.ctx.metadata.fields,
            updateOnBlur: true
        };
        if (this.item.value.Stage === this.ctx.ENUM.Stage.End)
            this.operations = undefined;
        else {
            this.operations[_item__WEBPACK_IMPORTED_MODULE_1__["Operator"].Update] = { caption: 'Submit', color: 'primary', disabled: false, excepted: value.Stage !== this.ctx.ENUM.Stage.Start };
            /// user is authorized
            if (this.ctx.user.authorized)
                this.operations[_item__WEBPACK_IMPORTED_MODULE_1__["Operator"].Recycle] = { caption: 'Delete', color: 'warn', excepted: true };
        }
        ;
    };
    EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"])); };
    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["edit-item"]], inputs: { dialogRef: "dialogRef", data: "data" }, decls: 1, vars: 1, consts: [[3, "item", "operations", "dialogRef", 4, "ngIf"], [3, "item", "operations", "dialogRef"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditComponent_list_item_0_Template, 3, 4, "list-item", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _item__WEBPACK_IMPORTED_MODULE_1__["ItemComponent"]], encapsulation: 2 });
    return EditComponent;
}());

/**
 * Edit in dialog
 */
var EditDialog = /** @class */ (function () {
    function EditDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditDialog.ɵfac = function EditDialog_Factory(t) { return new (t || EditDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
    EditDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditDialog, selectors: [["edit-item-dialog"]], decls: 1, vars: 1, consts: [[3, "data", "dialogRef", 4, "ngIf"], [3, "data", "dialogRef"]], template: function EditDialog_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditDialog_edit_item_0_Template, 1, 2, "edit-item", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.value);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], EditComponent], encapsulation: 2 });
    return EditDialog;
}());



/***/ }),

/***/ "YTyg":
/*!*****************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/email/email.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sp */ "T44+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function EmailComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dept_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", dept_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", dept_r3.Title, " ");
} }
function EmailComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var route_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", route_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", route_r4.value, " ");
} }
function EmailComponent_mat_form_field_15_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_mat_form_field_15_mat_chip_5_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var email_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.popout(email_r7); })("removed", function EmailComponent_mat_form_field_15_mat_chip_5_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var email_r7 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.remove(email_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var email_r7 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r6.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r7, " ");
} }
function EmailComponent_mat_form_field_15_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-chip-list", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmailComponent_mat_form_field_15_mat_chip_5_Template, 4, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function EmailComponent_mat_form_field_15_Template_input_matChipInputTokenEnd_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.eMessage.To);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r5)("matChipInputSeparatorKeyCodes", ctx_r2.separatorKeysCodes)("matChipInputAddOnBlur", ctx_r2.addOnBlur);
} }
var EmailComponent = /** @class */ (function () {
    function EmailComponent(ctx, lis) {
        this.ctx = ctx;
        this.lis = lis;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SEMICOLON"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]];
        this.eMessage = {};
    }
    EmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a, _b;
        this.ctx.current.page$.next('Email');
        this.metafield = this.ctx.metadata.fields
            .find(function (field) { return field.EntityPropertyName === 'DepartmentId'; });
        if (!this.metafield) {
            this.ctx.alert('Failed to find the config metafield "DepartmentId".', 'error');
        }
        if (!((_b = (_a = this.metafield) === null || _a === void 0 ? void 0 : _a.Choices) === null || _b === void 0 ? void 0 : _b.length)) {
            this.lis.set(this.metafield.LookupList);
            this.lis.get()
                .subscribe(function (res) { return _this.metafield.Choices = res; });
        }
        // approval routes
        this.routes = this.ctx.ENUM.Stage;
    };
    ///
    EmailComponent.prototype.getMembers = function () {
        if (this.department && this.stage) {
            this.members = this.department[this.stage.key];
        }
    };
    EmailComponent.prototype.setEmailAddresses = function () {
        if (this.department && this.stage) {
            var members = this.ctx.getApprovalMembers({ DepartmentId: this.department.Id, Stage: this.stage.value });
            this.eMessage.To = this.ctx.mapToEmailAddresses(members);
        }
    };
    EmailComponent.prototype.popout = function (user) {
        this.ctx.alert(user, 'Contact Email', 'info');
    };
    EmailComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value.trim();
        console.log('event:', event);
        // Add our fruit
        if (value) {
            this.eMessage.To.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    EmailComponent.prototype.remove = function (email) {
        var index = this.eMessage.To.indexOf(email);
        if (index > -1) {
            this.eMessage.To.splice(index, 1);
        }
    };
    EmailComponent.prototype.email = function () {
        var _this = this;
        this.ctx.email(this.eMessage)
            .subscribe(function (emailData) { return _this.ctx.alert(emailData, 'Email Info', 'info'); });
    };
    EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_2__["ContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](sp__WEBPACK_IMPORTED_MODULE_3__["ListItemService"])); };
    EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], decls: 35, vars: 12, consts: [[1, "row"], [1, "col-4"], ["appearance", "outline"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-12"], ["appearance", "outline", 4, "ngIf"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "rows", "3", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], ["aria-label", "Emails"], ["chipList", ""], [3, "selectable", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New email...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "click", "removed"], ["matChipRemove", ""]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select a department");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.department = $event; })("selectionChange", function EmailComponent_Template_mat_select_selectionChange_5_listener() { return ctx.setEmailAddresses(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmailComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select approval staff");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_mat_select_ngModelChange_11_listener($event) { return ctx.stage = $event; })("selectionChange", function EmailComponent_Template_mat_select_selectionChange_11_listener() { return ctx.setEmailAddresses(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EmailComponent_mat_option_12_Template, 2, 2, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmailComponent_mat_form_field_15_Template, 7, 4, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Subject");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_20_listener($event) { return ctx.eMessage.Subject = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "textarea", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_textarea_ngModelChange_25_listener($event) { return ctx.eMessage.Body = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-action-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_27_listener() { return ctx.email(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "eMessage");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "json");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.department);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.metafield.Choices);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, ctx.routes));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.eMessage.To);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.eMessage.Subject);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.eMessage.Body);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 10, ctx.eMessage));
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipRemove"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], encapsulation: 2 });
    return EmailComponent;
}());



/***/ }),

/***/ "aHqP":
/*!***********************************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/approval-steps/approval-steps.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApprovalStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalStepsComponent", function() { return ApprovalStepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _approver_approver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../approver/approver.component */ "Igk1");
/* harmony import */ var _approval_action_approval_action_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../approval-action/approval-action.component */ "rlX/");











function ApprovalStepsComponent_mat_step_35_app_approval_action_3_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-approval-action", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("approverChange", function ApprovalStepsComponent_mat_step_35_app_approval_action_3_Template_app_approval_action_approverChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var idx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r6.approvers[idx_r4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var staff_r3 = ctx_r9.$implicit;
    var idx_r4 = ctx_r9.index;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", staff_r3.title != ctx_r5.currentRoute)("approver", ctx_r5.approvers[idx_r4])("approvers", ctx_r5.approvers);
} }
function ApprovalStepsComponent_mat_step_35_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-approver", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ApprovalStepsComponent_mat_step_35_Template_app_approver_execute_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var idx_r4 = ctx.index; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onCommit($event, idx_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApprovalStepsComponent_mat_step_35_app_approval_action_3_Template, 1, 3, "app-approval-action", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var staff_r3 = ctx.$implicit;
    var idx_r4 = ctx.index;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", staff_r3.title)("color", ctx_r2.stepColor(staff_r3))("completed", staff_r3.concurred);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("staff", staff_r3)("operator", ctx_r2.operators[idx_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showDetail);
} }
var ApprovalStepsComponent = /** @class */ (function () {
    function ApprovalStepsComponent(ctx) {
        this.ctx = ctx;
        this.approversChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = {};
        this.operators = [];
        this.enum = {
            ApprovalOption: this.ctx.ENUM.ApprovalOption,
            ApprovalTitle: this.ctx.ENUM.ApprovalTitle,
            Stage: this.ctx.ENUM.Stage
        };
    }
    ApprovalStepsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected.index = this.approvers
            .findIndex(function (approver) { return approver.title === _this.currentRoute; })
            || 0;
    };
    ApprovalStepsComponent.prototype.onStepChange = function (ev) {
        this.selected.index = ev.selectedIndex;
    };
    ApprovalStepsComponent.prototype.insert = function (index) {
        var _this = this;
        this.approvers = this.approvers || [];
        /// already existed
        if (this.approvers.find(function (a) { return a.Title === _this.approvers[_this.selected.index].title; })) {
            var cfm = confirm("The approver " + this.approvers[this.selected.index].title + " is already existed.\nDo you still want to add this approver?");
            if (!cfm)
                return;
        }
        if (index <= 0) {
            this.approvers.unshift(this.approvers[this.selected.index]);
            this.selected.index = 0;
        }
        else if (isNaN(index) || index > this.approvers.length) {
            this.approvers.push(this.approvers[this.selected.index]);
            this.selected.index = this.approvers.length - 1;
        }
        else {
            /// insert at index
            this.approvers = this.approvers.slice(0, index)
                .concat([this.approvers[this.selected.index]])
                .concat(this.approvers.slice(index));
            this.selected.index = index;
        }
        this.approversChange.emit(this.approvers);
        this.selected.index = -1;
    };
    ApprovalStepsComponent.prototype.spliceAt = function (index, item) {
        var _this = this;
        var _a;
        this.ctx.confirm("Are you sure that you'd to remove " + ((_a = this.approvers[index]) === null || _a === void 0 ? void 0 : _a.title) + "?", 'Confirm removing...', 'warn')
            .subscribe(function (resp) {
            if (resp.action.value) {
                _this.approvers.splice(index, 1);
                _this.approversChange.emit(_this.approvers);
                _this.selected.index = _this.selected.index === 0
                    ? ++_this.selected.index
                    : --_this.selected.index;
            }
        });
    };
    ApprovalStepsComponent.prototype.swap = function (i, j) {
        if (-1 < j && j < this.approvers.length) {
            // [this.approvers[i], this.approvers[j]] = [this.approvers[j], this.approvers[i]];
            var tmp = Object.assign({}, this.approvers[i]);
            Object.assign(this.approvers[i], this.approvers[j]);
            Object.assign(this.approvers[j], tmp);
            this.approversChange.emit(this.approvers);
            this.selected.index = j;
        }
    };
    ApprovalStepsComponent.prototype.upFrom = function (index) {
        if (index > 0) {
            this.swap(index, index - 1);
        }
    };
    ApprovalStepsComponent.prototype.downFrom = function (index) {
        if (index < this.approvers.length - 1) {
            this.swap(index, index + 1);
        }
    };
    ApprovalStepsComponent.prototype.onAdd = function () {
        var _this = this;
        this.approvers.push({ title: '', members: [] });
        setTimeout(function () {
            _this.selected.index = _this.approvers.length - 1;
            _this.operators[_this.selected.index] = 'add';
        }, 0);
    };
    ApprovalStepsComponent.prototype.onEdit = function (idx) {
        this.operators[idx] = 'edit';
    };
    ApprovalStepsComponent.prototype.onCommit = function (ev, idx) {
        if (idx === void 0) { idx = this.selected.index; }
        if (ev.committed) {
            if (ev.operator === 'add') {
                this.approvers[idx] = ev.data;
            }
            else if (ev.operator === 'delete') {
                this.spliceAt(idx);
            }
            else if (ev.operator === 'edit') {
                // already handled by 2-way binding
            }
            else {
                this.ctx.alert(ev, 'Unable to handle UNKNOWN operator.', 'warn');
            }
        }
        else {
            if (ev.operator === 'add')
                this.approvers.pop();
        }
        this.operators[idx] = undefined;
    };
    /// mat-step color
    ApprovalStepsComponent.prototype.stepColor = function (approver) {
        if (approver === null || approver === void 0 ? void 0 : approver.concurred)
            return 'primary';
        if ((approver === null || approver === void 0 ? void 0 : approver.concurred) === false)
            return 'warn';
        // if (approver?.title === this.currentStage)
        return 'accent';
        // return '';
    };
    ApprovalStepsComponent.ɵfac = function ApprovalStepsComponent_Factory(t) { return new (t || ApprovalStepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_2__["ContextService"])); };
    ApprovalStepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalStepsComponent, selectors: [["app-approval-steps"]], inputs: { approvers: "approvers", currentRoute: "currentRoute", showDetail: "showDetail" }, outputs: { approversChange: "approversChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
                }])], decls: 36, vars: 6, consts: [[2, "display", "flex", "margin-bottom", "12px", "align-items", "center"], ["mat-icon-button", "", "aria-label", "Edit Approval Chain", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "disabled", "click"], [1, "spacer"], ["labelPosition", "bottom", 3, "selectedIndex", "selectionChange"], ["stepper", ""], [3, "label", "color", "completed", 4, "ngFor", "ngForOf"], [3, "label", "color", "completed"], [3, "staff", "operator", "execute"], [3, "disabled", "approver", "approvers", "approverChange", 4, "ngIf"], [3, "disabled", "approver", "approvers", "approverChange"]], template: function ApprovalStepsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovalStepsComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add approver");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovalStepsComponent_Template_button_click_11_listener() { return ctx.onEdit(ctx.selected.index); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit approver");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovalStepsComponent_Template_button_click_16_listener() { return ctx.upFrom(ctx.selected.index); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Move up (to the left)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovalStepsComponent_Template_button_click_21_listener() { return ctx.downFrom(ctx.selected.index); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Move down (to the right)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovalStepsComponent_Template_button_click_26_listener() { return ctx.spliceAt(ctx.selected.index); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u2717");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Remove");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-horizontal-stepper", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ApprovalStepsComponent_Template_mat_horizontal_stepper_selectionChange_33_listener($event) { return ctx.onStepChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ApprovalStepsComponent_mat_step_35_Template, 4, 6, "mat-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.index == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.index == ctx.approvers.length - 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" selected: ", ctx.approvers[ctx.selected.index] == null ? null : ctx.approvers[ctx.selected.index].title, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selected.index);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.approvers);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _approver_approver_component__WEBPACK_IMPORTED_MODULE_8__["ApproverComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _approval_action_approval_action_component__WEBPACK_IMPORTED_MODULE_9__["ApprovalActionComponent"]], encapsulation: 2 });
    return ApprovalStepsComponent;
}());



/***/ }),

/***/ "doE5":
/*!***********************************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/approval-route/approval-route.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApprovalRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalRouteComponent", function() { return ApprovalRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







function ApprovalRouteComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var route_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", last_r2)("value", route_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", route_r1, " ");
} }
var ApprovalRouteComponent = /** @class */ (function () {
    function ApprovalRouteComponent() {
    }
    ApprovalRouteComponent.ɵfac = function ApprovalRouteComponent_Factory(t) { return new (t || ApprovalRouteComponent)(); };
    ApprovalRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalRouteComponent, selectors: [["app-approval-route"]], inputs: { routes: "routes", selected: "selected" }, decls: 12, vars: 3, consts: [[1, "row"], [1, "col-3"], ["appearance", "outline", "color", "accent"], [3, "ngModel", "ngModelChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "col-9"], ["matInput", "", "rows", "3", 3, "ngModel", "ngModelChange"], [3, "disabled", "value"]], template: function ApprovalRouteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Route to");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApprovalRouteComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.selected.routing = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApprovalRouteComponent_mat_option_6_Template, 2, 3, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApprovalRouteComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.selected.comment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected.routing);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected.comment);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], encapsulation: 2 });
    return ApprovalRouteComponent;
}());



/***/ }),

/***/ "f1S/":
/*!*****************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/item/item.ts ***!
  \*****************************************************/
/*! exports provided: Operator, ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operator", function() { return Operator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var sp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sp */ "T44+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../context.service */ "8H4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _approval_steps_approval_steps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../approval-steps/approval-steps.component */ "aHqP");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _approval_route_approval_route_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../approval-route/approval-route.component */ "doE5");












var _c0 = ["request"];
var _c1 = ["process"];
function ItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dialogRef ? "Route" : "Request " + ctx_r1.item.value.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.cssClass(ctx_r1.item.value.Stage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.item.value.Stage);
} }
function ItemComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("submitted: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r3.item.value.Created, "yyyy-MM-dd"), "");
} }
function ItemComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var file_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r13.ServerRelativeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", file_r13.Name, " ");
} }
function ItemComponent_mat_expansion_panel_25_app_approval_route_9_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-approval-route", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function ItemComponent_mat_expansion_panel_25_app_approval_route_9_Template_app_approval_route_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.nextRoute = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routes", ctx_r14.approvalRoutes)("selected", ctx_r14.nextRoute);
} }
function ItemComponent_mat_expansion_panel_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Actions required/taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "pre", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItemComponent_mat_expansion_panel_25_app_approval_route_9_Template, 1, 2, "app-approval-route", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx_r6.item.value.Stage == ctx_r6.enum.Stage.Start);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("accent-fg", ctx_r6.item.value.Stage == ctx_r6.enum.Stage.Start);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.item.value.ActionRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.approvalRoutes == null ? null : ctx_r6.approvalRoutes.length);
} }
function ItemComponent_app_approval_route_35_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-approval-route", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function ItemComponent_app_approval_route_35_Template_app_approval_route_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.nextRoute = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routes", ctx_r8.approvalRoutes)("selected", ctx_r8.nextRoute);
} }
function ItemComponent_button_45_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_button_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.view.item = !ctx_r19.view.item; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "view item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemComponent_button_48_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_button_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); var op_r23 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onSubmit(op_r23.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var op_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", op_r23.value.color)("disabled", op_r23.value.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", op_r23.value.caption, " ");
} }
function ItemComponent_pre_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r12.item.value));
} }
var _c2 = [[["detail-title"]]];
var _c3 = function () { return { floatLabel: "always", appearance: "outline" }; };
var _c4 = ["detail-title"];
var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Update"] = "update";
    Operator["Recycle"] = "recycle";
    Operator["Attach"] = "attach";
    Operator["Detach"] = "detach";
})(Operator || (Operator = {}));
;
var ItemComponent = /** @class */ (function () {
    ///---
    function ItemComponent(ctx, File, router) {
        var _this = this;
        this.ctx = ctx;
        this.File = File;
        this.router = router;
        this.nextRoute = {};
        this.cssClass = this.ctx.cssClass;
        ///--- test ---
        this.view = {};
        /// on exec next
        this.onExecNext = {
            attach: function (data, response) { },
            detach: function (data, response) { },
            add: function (data, response) { },
            update: function (data, response) { },
            recycle: function (data, response) { }
        };
        /// on exec complete
        this.onExecComplete = {
            /// submitted 'data' and 'response' execution
            add: function (data, response) {
                _this.ctx.notify("The request has been submitted successfully.", 'OK', 1000);
                /// email confirmation & 1st approver
                _this.ctx.emailTo(response, 'Confirmation').subscribe();
                _this.ctx.emailTo(response).subscribe();
                /// log
                if (_this.ctx.logger) {
                    _this.ctx.logger.append(_this.ctx.logHeader('Submitted new request.'), response.ID);
                }
            },
            update: function (data, response) {
                /// 'response' update, response is 'null'
                _this.ctx.notify("The request has been submitted successfully.", 'OK', 1000);
                _this.ctx.data.get(data.ID)
                    .subscribe(function (item) {
                    _this.ctx.current.item$.next(item);
                    if (item.Stage !== item.PreviousStage) {
                        _this.ctx.emailTo(item).subscribe();
                    }
                });
                /// log
                if (_this.ctx.logger) {
                    var msg = _this.ctx.logHeader('Updated.');
                    _this.ctx.logger.append(msg, data.ID);
                }
            },
            recycle: function (data, response) {
                /// 'response' recycle, response is GUID
                if (!!response) {
                    _this.ctx.notify("The request has been deleted/recycled.", 'OK', 1000);
                    if (_this.ctx.logger) {
                        var msg = _this.ctx.logHeader('Deleted.');
                        _this.ctx.logger.append(msg, data.ID, 'warn');
                    }
                }
            },
            attach: function () {
                _this.ctx.notify("The files has been submitted attached successfully.", 'OK', 1000);
            },
            detatch: function () { }
        };
    }
    ///
    ItemComponent.prototype.ngOnInit = function () {
        var _a, _b;
        this.user = this.ctx.user;
        this.preinit();
        /// get support docs
        this.templates$ = this.File.get(this.ctx.config.supportFileLocation);
        this.ctx.current.page$.next(((_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.ID) ? "Request " + this.item.value.ID : 'New Request');
        var routes = this.approvers.map(function (a) { return a.title; });
        this.approvalRoutes = [this.enum.Stage.Start].concat(routes, this.enum.Stage.End);
    };
    ItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var column = 'DepartmentId', sub;
        this.request.form.controls[column].valueChanges.subscribe(function (changes) {
            if (!_this.item.value.ID) {
                _this.approvers = _this.ctx.getApprovers(column, changes);
            }
            else if (_this.item.value.ID) {
                _this.ctx.confirm('Department has been changed.\n\nWould you like to change and reset the Approal Route as well?', 'Confirm: Change and Reset Approval Route?', 'warn')
                    .subscribe(function (res) {
                    /// res { action: { name, value }, data: any}
                    if (res.action.value) {
                        _this.approvers = _this.ctx.getApprovers(column, changes);
                        if (_this.item.value.ID)
                            _this.appendComment('Approval route was reset.');
                        _this.item.value.Stage = _this.enum.Stage.Start;
                    }
                });
            }
        });
        this.request.form.valueChanges.subscribe(function (status) {
            _this.disableOperations(_this.operations, _this.request.form.invalid);
            if (_this.request.form.valid)
                Object.assign(_this.item.value, _this.request.form.value);
        });
    };
    Object.defineProperty(ItemComponent.prototype, "Admin", {
        get: function () { return this.ctx.user.roles['App Admins']; },
        enumerable: false,
        configurable: true
    });
    ItemComponent.prototype.disableOperations = function (operations, disabled) {
        for (var btn in operations) {
            if (!operations[btn].excepted)
                operations[btn].disabled = disabled;
        }
    };
    ///
    ItemComponent.prototype.onSubmit = function (op) {
        var _this = this;
        var _a;
        if (op === Operator.Recycle) {
            this.ctx.confirm("Are you sure you want to delete item ID \"" + this.item.value.ID + "\"?", 'Confirm deleting...', 'warn')
                .subscribe(function (res) {
                if (res.action.value)
                    _this.exec(op);
            });
        }
        else if (!this.item.value.ID && !((_a = this.files.attaching) === null || _a === void 0 ? void 0 : _a.length)) {
            this.ctx.confirm('Would you still like to submit?', 'Forgot to attach support documents?', 'warn')
                .subscribe(function (res) {
                if (res.action.value) {
                    _this.preupdate(op);
                    _this.exec(op);
                }
            });
        }
        else {
            this.preupdate(op);
            this.ctx.alert(this.item.value, 'Submitting item', 'info');
            this.exec(op);
        }
    };
    /// data operations
    ItemComponent.prototype.exec = function (operator, value, attachments) {
        var _this = this;
        if (value === void 0) { value = this.item.value; }
        if (attachments === void 0) { attachments = this.files.attaching; }
        this.disableOperations(this.operations, true);
        var response;
        (operator === Operator.Recycle
            ? this.ctx.data[operator](value)
            : this.ctx.data[operator](value, attachments))
            .subscribe(
        /// next
        function (res) {
            response = res;
            _this.onExecNext[operator](value, res);
        }, 
        /// error
        function (err) { return sp__WEBPACK_IMPORTED_MODULE_0__["Error$"].next({
            'message': "Failed to perform " + operator + ".",
            'caught-in': 'item::exec',
            'detail': err
        }); }, 
        /// complete
        function () {
            _this.onExecComplete[operator](value, response);
            /// close dialog or redirect
            (!!_this.dialogRef)
                ? (!!value)
                    ? _this.dialogRef.close({ item: value, action: operator })
                    : _this.dialogRef.close()
                : _this.router.navigate(['list']);
        });
    };
    ItemComponent.prototype.attach = function (files) {
        var _this = this;
        if (this.item.value.ID) {
            var attachments_1 = []; /// for logging;
            this.ctx.data.attach(this.item.value.ID, files)
                .subscribe(function (res) {
                attachments_1.push(res);
                Object(sp__WEBPACK_IMPORTED_MODULE_0__["removeByKeyValue"])(_this.files.attaching, 'renamed', res.FileName);
                Object(sp__WEBPACK_IMPORTED_MODULE_0__["replaceOrAdd"])(_this.files.attached, res, 'FileName');
            }, function (err) { return sp__WEBPACK_IMPORTED_MODULE_0__["Error$"].next({
                'message': 'Failed to perform Attaching files.',
                'caught-in': 'item::attach',
                'detail': err
            }); }, function () {
                var _a;
                /// stage == 'Cert Submission' => 'Concurred' = true
                if (_this.item.value.Stage === _this.enum.Stage.CS) {
                    var author = _this.approvers.find(function (approver) { return approver.title === _this.item.value.Stage; });
                    if (author && ((_a = _this.process) === null || _a === void 0 ? void 0 : _a.onConcurred)) {
                        _this.process.onConcurred(author, true, 'Have submitted cert');
                    }
                }
                /// log
                if (_this.ctx.logger) {
                    var files_1 = attachments_1.map(function (atta) { return atta.FileName; }).join(', ');
                    var msg = _this.ctx.logHeader("(Re)Attached " + files_1 + ".");
                    _this.ctx.logger.append(msg, _this.item.value.ID);
                }
            });
        }
    };
    /// detach file from attachments
    ItemComponent.prototype.detach = function (file) {
        var _this = this;
        this.ctx.confirm("Are you sure you want to delete attachment \"" + file.FileName + "\"?", 'Confirm deleting...', 'warn')
            .subscribe(function (res) {
            if (res.action.value) {
                _this.ctx.data.detach(_this.item.value.ID, file.FileName).subscribe(function () {
                    Object(sp__WEBPACK_IMPORTED_MODULE_0__["removeByItemKey"])(_this.files.attached, file, 'FileName');
                    /// log
                    if (_this.ctx.logger) {
                        _this.ctx.logger.append(_this.ctx.logHeader("Detached \"" + file.FileName + "\"."), _this.item.value.ID, 'warn');
                    }
                });
            }
        });
    };
    ///--- PRIVATE ---
    ItemComponent.prototype.stringToObject = function (approval) {
        if ((approval === null || approval === void 0 ? void 0 : approval.length) > 0) {
            try {
                return this.parse(approval);
            }
            catch (err) {
                this.ctx.alert('Failed to parse approval.\nError occurred in "<item::stringToObject>', 'Failed to parse approval string.', 'warn');
            }
        }
        else {
            return [];
        }
    };
    ItemComponent.prototype.preinit = function () {
        var _a, _b;
        this.files = {
            attached: [],
            attaching: []
        };
        if ((_a = this.item.value) === null || _a === void 0 ? void 0 : _a.AttachmentFiles) {
            this.files.attached = this.item.value.AttachmentFiles;
        }
        this.approvers = this.stringToObject((_b = this.item.value) === null || _b === void 0 ? void 0 : _b.Approvers);
        this.enum = {
            ApprovalOption: this.ctx.ENUM.ApprovalOption,
            ApprovalTitle: this.ctx.ENUM.ApprovalTitle,
            Stage: this.ctx.ENUM.Stage
        };
    };
    /// parse string
    ItemComponent.prototype.parse = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (err) {
            this.ctx.alert(err, "Failed to parse " + str + ".", 'Warn');
            return;
        }
    };
    ///
    ItemComponent.prototype.appendComment = function (comment, stage, field) {
        if (stage === void 0) { stage = this.item.value.Stage; }
        if (field === void 0) { field = 'ActionRequired'; }
        var cmt = this.ctx.logHeader(comment, stage);
        this.item.value[field] = (this.item.value[field])
            ? this.item.value[field] + "\n\n---\n" + cmt
            : cmt;
    };
    ItemComponent.prototype.preupdate = function (operator, value, attachments) {
        var _a;
        if (value === void 0) { value = this.item.value; }
        if (attachments === void 0) { attachments = this.files.attaching; }
        var processor = ((_a = this.nextRoute) === null || _a === void 0 ? void 0 : _a.routing)
            ? this.nextRoute
            : this.approvers.find(function (approver) { return approver.title === value.Stage; });
        /// append comment
        var filenames = attachments
            ? (attachments.map(function (file) { return file.Name; })).join(', ')
            : 'None';
        var comment = "Action: " + operator + ", Concurred: " + (processor === null || processor === void 0 ? void 0 : processor.concurred) + ", Attached: " + filenames + "\n    \n" + ((processor === null || processor === void 0 ? void 0 : processor.comment) || '');
        this.appendComment(comment);
        /// update the route/stage
        value.PreviousStage = value.Stage;
        value.Stage = (processor === null || processor === void 0 ? void 0 : processor.routing)
            ? processor.routing
            : (!value.ID)
                ? this.approvers[0].title /// new request
                : value.Stage; /// no change in stage
        value.Approvers = JSON.stringify(this.approvers);
    };
    /// on exec error
    ItemComponent.prototype.onError = function (err, msg, caughtin) {
        sp__WEBPACK_IMPORTED_MODULE_0__["Error$"].next({
            'message': msg,
            'caught-in': caughtin,
            'detail': err
        });
    };
    /// Get Members with Dept ID
    ItemComponent.prototype.getMembers = function (stage) {
        if (stage === void 0) { stage = this.nextRoute.routing; }
        this.members = this.ctx.getApprovalMembers(this.item.value, stage);
    };
    ItemComponent.prototype.email = function () {
        var _this = this;
        this.ctx.emailTo(this.item.value, this.nextRoute.routing)
            .subscribe(function (emailData) { return _this.ctx.alert(emailData, 'Email Info', 'info'); });
    };
    ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_2__["ContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](sp__WEBPACK_IMPORTED_MODULE_0__["SpFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["list-item"]], viewQuery: function ItemComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.request = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.process = _t.first);
        } }, inputs: { item: "item", operations: "operations", dialogRef: "dialogRef" }, ngContentSelectors: _c4, decls: 51, vars: 36, consts: [["class", "mat-dialog-title", 4, "ngIf"], ["multi", "", 1, "detail"], ["expanded", "true"], [4, "ngIf"], [3, "item", "fieldStyle"], ["request", ""], [1, "row", "center"], ["mat-button", "", "download", "", 3, "href", 4, "ngFor", "ngForOf"], [1, "attachment", 3, "uploading", "uploaded", "uploadingChange", "deleteEvent"], [3, "expanded", 4, "ngIf"], [3, "approvers", "currentRoute", "showDetail", "approversChange"], ["process", ""], [2, "margin-bottom", "12px"], [3, "routes", "selected", "selectedChange", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "unk", 3, "click"], [3, "ngClass"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "spacer"], ["mat-flat-button", "", 3, "color", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-dialog-title"], ["mat-button", "", "download", "", 3, "href"], [3, "expanded"], [1, "accent"], [3, "routes", "selected", "selectedChange"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", 3, "color", "disabled", "click"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemComponent_div_0_Template, 3, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-accordion", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ItemComponent_span_6_Template, 6, 4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ItemComponent_span_7_Template, 2, 0, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ItemComponent_span_10_Template, 3, 4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "lib-rx-form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-expansion-panel", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Attachment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Templates:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ItemComponent_a_22_Template, 2, 2, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "lib-file-input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("uploadingChange", function ItemComponent_Template_lib_file_input_uploadingChange_24_listener($event) { return ctx.files.attaching = $event; })("uploadingChange", function ItemComponent_Template_lib_file_input_uploadingChange_24_listener($event) { return ctx.attach($event); })("deleteEvent", function ItemComponent_Template_lib_file_input_deleteEvent_24_listener($event) { return ctx.detach($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ItemComponent_mat_expansion_panel_25_Template, 10, 5, "mat-expansion-panel", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-expansion-panel", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Approval Process ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "app-approval-steps", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("approversChange", function ItemComponent_Template_app_approval_steps_approversChange_32_listener($event) { return ctx.approvers = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-divider", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ItemComponent_app_approval_route_35_Template, 1, 2, "app-approval-route", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_37_listener() { return ctx.getMembers(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Get Members");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_39_listener() { return ctx.email(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "json");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ItemComponent_button_45_Template, 2, 0, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ItemComponent_button_46_Template, 2, 0, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ItemComponent_button_48_Template, 2, 3, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ItemComponent_pre_50_Template, 3, 3, "pre", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogRef);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-dialog-content", ctx.dialogRef);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!(ctx.item == null ? null : ctx.item.value == null ? null : ctx.item.value.ID));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.item == null ? null : ctx.item.value == null ? null : ctx.item.value.ID));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.value == null ? null : ctx.item.value.Author == null ? null : ctx.item.value.Author.Title) || (ctx.user == null ? null : ctx.user.Title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.value == null ? null : ctx.item.value.Created);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.item)("fieldStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.files == null ? null : ctx.files.attached == null ? null : ctx.files.attached.length, " support documents...");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 29, ctx.templates$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("uploading", ctx.files.attaching)("uploaded", ctx.files.attached);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.value == null ? null : ctx.item.value.ActionRequired);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass(ctx.item == null ? null : ctx.item.value == null ? null : ctx.item.value.Stage));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass(ctx.item == null ? null : ctx.item.value == null ? null : ctx.item.value.Stage));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item.value.Stage, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("approvers", ctx.approvers)("currentRoute", ctx.item.value.Stage)("showDetail", ctx.item.value.ID);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.approvalRoutes == null ? null : ctx.approvalRoutes.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 31, ctx.members));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dialogRef ? "mat-dialog-actions" : "mat-action-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Admin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogRef);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 33, ctx.operations));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.item);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], sp__WEBPACK_IMPORTED_MODULE_0__["RxFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], sp__WEBPACK_IMPORTED_MODULE_0__["FileInputComponent"], _approval_steps_approval_steps_component__WEBPACK_IMPORTED_MODULE_7__["ApprovalStepsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _approval_route_approval_route_component__WEBPACK_IMPORTED_MODULE_10__["ApprovalRouteComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], encapsulation: 2 });
    return ItemComponent;
}());



/***/ }),

/***/ "jhKC":
/*!****************************************************!*\
  !*** ./projects/conf-reg/src/app/app.component.ts ***!
  \****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "FPsY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context.service */ "8H4g");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
















function AppComponent_ng_container_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var nav_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/", nav_r5.path, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", nav_r5.name, " ");
} }
function AppComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_ng_container_8_a_1_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var nav_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nav_r5.name);
} }
function AppComponent_ng_container_17_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var nav_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/", nav_r8.path, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", nav_r8.name, " ");
} }
function AppComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_ng_container_17_a_1_Template, 2, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var nav_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nav_r8.name);
} }
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.alert(_r11.value, "success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.alert(_r11.value, "warn"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.alert(_r11.value, "error"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.throw(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r4.app));
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(breakpointObserver, ctx) {
        this.breakpointObserver = breakpointObserver;
        this.ctx = ctx;
        this.app = {};
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.ctx.user;
        this.navs = _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routes"];
        this.ctx.current.busy$.subscribe(function (stt) {
            setTimeout(function () { return _this.app.busy = stt; }), 0;
        });
        this.app.testing = this.ctx.testing;
        window.onerror = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var err = '';
            args.forEach(function (e) { return err += '\n\n' + e; });
            alert(err);
        };
    };
    /// router-outlet:activate
    AppComponent.prototype.onActivate = function (ev) {
        // console.log('onActivate::component title/name:', ev);
    };
    /// report error
    AppComponent.prototype.alert = function (err, cat) {
        this.ctx.alert(err, cat.toUpperCase(), cat);
    };
    AppComponent.prototype.throw = function (any) {
        throw new Error(any);
    };
    AppComponent.prototype.userDetail = function () {
        this.ctx.alert({ Detail: this.user }, this.user.Title, 'info');
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 9, consts: [[1, "page-header"], ["value", "100", 2, "height", "2px", 3, "mode", "color"], [1, "nav", "center"], ["mat-icon-button", "", "aria-label", "Toggle sidenav", 3, "click"], ["aria-label", "nav toggle", 2, "margin-top", "-8px"], ["routerLink", "", 1, "mat-button"], [4, "ngFor", "ngForOf"], [1, "spacer"], ["mat-button", "", 1, "info-fg", 3, "click"], ["mode", "side", "opened", "", 1, "sidenav", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["drawer", "", "sidenav", ""], ["style", "padding:16px;", 4, "ngIf"], [2, "margin", "8px"], [3, "activate"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink"], [2, "padding", "16px"], ["matInput", "", 3, "value"], ["txt", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14); return _r1.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u2630");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\uD83C\uDFE1");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.userDetail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-sidenav-container");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-sidenav", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AppComponent_ng_container_17_Template, 2, 1, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "mat-divider");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AppComponent_div_19_Template, 16, 3, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "router-outlet", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_22_listener($event) { return ctx.onActivate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", ctx.app.busy ? "indeterminate" : "determinate")("color", ctx.app.busy ? "warn" : "primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.navs);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user.Title);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedInViewport", true)("fixedTopGap", 64)("fixedBottomGap", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.navs);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.app.testing);
        } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]], styles: [".page-header[_ngcontent-%COMP%] {\r\n   position: fixed;\r\n   top: 0;\r\n   left: 0;\r\n   right: 0;\r\n } \r\n .mat-sidenav-container[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 64px;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n  } \r\n .sidenav[_ngcontent-%COMP%], .page-sidenav[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   width: 256px;\r\n   background: rgba(248, 248, 248, 0.5);\r\n } \r\n .sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n    background: inherit;\r\n  } \r\n .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n   position: sticky;\r\n   top: 0;\r\n   z-index: 1;\r\n } \r\n .page-footer[_ngcontent-%COMP%] {\r\n   position: fixed;\r\n   bottom: 0;\r\n   left: 0;\r\n   right: 0;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZUFBZTtHQUNmLE1BQU07R0FDTixPQUFPO0dBQ1AsUUFBUTtDQUNWO0NBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtFQUNWO0NBQ0Q7R0FDRSxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osb0NBQW9DO0NBQ3RDO0NBRUM7SUFDRSxtQkFBbUI7RUFDckI7Q0FFRDtHQUNFLGdCQUFnQjtHQUNoQixNQUFNO0dBQ04sVUFBVTtDQUNaO0NBQ0E7R0FDRSxlQUFlO0dBQ2YsU0FBUztHQUNULE9BQU87R0FDUCxRQUFRO0NBQ1YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogMDtcclxuICAgcmlnaHQ6IDA7XHJcbiB9IFxyXG4gLm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuIC5zaWRlbmF2LCAucGFnZS1zaWRlbmF2IHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIHdpZHRoOiAyNTZweDtcclxuICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjUpO1xyXG4gfVxyXG4gIFxyXG4gIC5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgIHRvcDogMDtcclxuICAgei1pbmRleDogMTtcclxuIH1cclxuIC5wYWdlLWZvb3RlciB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgYm90dG9tOiAwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICByaWdodDogMDtcclxuIH1cclxuICJdfQ== */"] });
    return AppComponent;
}());



/***/ }),

/***/ "qZQS":
/*!***********************************************************!*\
  !*** ./projects/conf-reg/src/environments/environment.ts ***!
  \***********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "rlX/":
/*!*************************************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/approval-action/approval-action.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ApprovalActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalActionComponent", function() { return ApprovalActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function ApprovalActionComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovalActionComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.clearConcur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var ApprovalActionComponent = /** @class */ (function () {
    // @Output() onAction = new EventEmitter();
    function ApprovalActionComponent(ctx) {
        this.ctx = ctx;
    }
    ApprovalActionComponent.prototype.ngOnInit = function () {
    };
    ApprovalActionComponent.prototype.nextRoute = function (approvers) {
        if (approvers === void 0) { approvers = this.approvers; }
        var next = approvers.find(function (approver) { return !approver.concurred; });
        return (next) ? next.title : this.ctx.ENUM.Stage.End;
    };
    ApprovalActionComponent.prototype.onConcur = function () {
        this.approver.name = this.ctx.user.Title;
        this.approver.date = new Date();
        this.approver.routing = this.approver.concurred
            ? this.nextRoute()
            : this.ctx.ENUM.Stage.End;
        // this.onAction.emit(this.approver.concurred);
    };
    // onRoute() {
    //   this.approver.name = this.ctx.user.Title;
    //   this.approver.date = new Date();
    // }
    ApprovalActionComponent.prototype.clearConcur = function () {
        this.approver.name = undefined;
        this.approver.date = undefined;
        this.approver.concurred = undefined;
        this.approver.comment = '';
    };
    ApprovalActionComponent.ɵfac = function ApprovalActionComponent_Factory(t) { return new (t || ApprovalActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_1__["ContextService"])); };
    ApprovalActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalActionComponent, selectors: [["app-approval-action"]], inputs: { disabled: "disabled", approver: "approver", approvers: "approvers" }, decls: 22, vars: 12, consts: [[1, "row"], [1, "col-3"], [1, "concur-radio-group", 3, "disabled", "ngModel", "ngModelChange", "change"], ["color", "primary", 3, "value"], ["color", "warn", 3, "value"], ["mat-flat-button", "", 3, "click", 4, "ngIf"], [1, "col-6"], ["appearance", "outline", "floatLabel", "always"], ["matInput", "", 3, "disabled", "ngModel", "ngModelChange"], [1, "col-content"], [1, "sign-date"], ["mat-flat-button", "", 3, "click"]], template: function ApprovalActionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-group", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApprovalActionComponent_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.approver.concurred = $event; })("change", function ApprovalActionComponent_Template_mat_radio_group_change_2_listener() { return ctx.onConcur(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Concurred");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Non-concurred");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApprovalActionComponent_button_7_Template, 2, 0, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApprovalActionComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.approver.comment = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Signed/Dated by");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.approver.concurred);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.approver.comment);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.approver.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, ctx.approver.date, "yyyy-MM-dd @ HH:mm"), " ");
        } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], encapsulation: 2 });
    return ApprovalActionComponent;
}());



/***/ }),

/***/ "rxEq":
/*!***************************************!*\
  !*** ./projects/conf-reg/src/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "NSLA");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "qZQS");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "w4O2":
/*!*********************************************************************!*\
  !*** ./projects/conf-reg/src/app/comp/members/members.component.ts ***!
  \*********************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context.service */ "8H4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













var _c0 = ["itemInput"];
var _c1 = ["auto"];
function MembersComponent_div_1_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-chip", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r3.Title, " ");
} }
function MembersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MembersComponent_div_1_mat_chip_2_Template, 2, 1, "mat-chip", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function MembersComponent_form_2_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function MembersComponent_form_2_mat_chip_6_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); var item_r9 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.remove(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u2717");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r9.Title, "");
} }
function MembersComponent_form_2_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r12 = ctx.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r12[ctx_r8.field.key] || item_r12.Title, " ");
} }
function MembersComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-chip-list", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MembersComponent_form_2_mat_chip_6_Template, 4, 1, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matChipInputTokenEnd", function MembersComponent_form_2_Template_input_matChipInputTokenEnd_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-autocomplete", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function MembersComponent_form_2_Template_mat_autocomplete_optionSelected_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.selected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MembersComponent_form_2_mat_option_11_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.field.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", ctx_r1.field.appearance)("floatLabel", ctx_r1.field.floatLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.field.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r1.field.placeholder)("formControl", ctx_r1.searchText)("matAutocomplete", _r7)("matChipInputFor", _r4)("matChipInputSeparatorKeyCodes", ctx_r1.separatorKeysCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 12, ctx_r1.searchResults$));
} }
var MembersComponent = /** @class */ (function () {
    function MembersComponent(ctx) {
        this.ctx = ctx;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.users = {};
    }
    MembersComponent.prototype.getGroupUsers = function (value, groupId, key) {
        var _this = this;
        if (groupId === void 0) { groupId = this.groupId; }
        if (key === void 0) { key = 'Title'; }
        if (isNaN(groupId)) {
            this.ctx.current.error$.next({
                title: "Invalid User Group ID: " + this.groupId + ".",
                detail: 'Unable to find users in the group.'
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            var _a;
            if ((_a = _this.users[groupId]) === null || _a === void 0 ? void 0 : _a.length) {
                var results = (value === null || value === void 0 ? void 0 : value.length)
                    ? _this.users[groupId].filter(function (user) {
                        return user[key].toLowerCase().indexOf(value.toLowerCase()) > -1;
                    })
                    : _this.users[groupId];
                subscriber.next(results);
            }
            else {
                _this.ctx.getGroupUsers(_this.groupId)
                    .subscribe(function (res) {
                    _this.users[groupId] = res;
                    subscriber.next(_this.users[groupId]);
                });
            }
        });
    };
    ;
    MembersComponent.prototype.ngOnInit = function () { };
    MembersComponent.prototype.ngOnChanges = function () {
        // if (this.itemInput) {
        //   this.itemInput.nativeElement.focus();
        // }
        var _this = this;
        if (!isNaN(this.groupId) && this.groupId > -1) {
            this.searchResults$ = this.searchText.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (value) {
                // return this.sp.queryUsers(this.groupId, this.field.key, value);
                return _this.getGroupUsers(value);
            }));
        }
        if (this.done) {
            this.users[this.groupId] = undefined;
        }
    };
    MembersComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add item
        if ((value || '').trim()) {
            this.items.push(value.trim());
        }
        // Reset the input value
        if (input)
            input.value = '';
        this.searchText.setValue(null);
    };
    MembersComponent.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1)
            this.items.splice(index, 1);
    };
    MembersComponent.prototype.selected = function (event) {
        this.items.push({
            Email: event.option.value.Email || event.option.value.LoginName || event.option.value.Name,
            Title: event.option.value.Title
        });
        this.itemInput.nativeElement.value = '';
        this.searchText.setValue(null);
    };
    MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_context_service__WEBPACK_IMPORTED_MODULE_5__["ContextService"])); };
    MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], viewQuery: function MembersComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.itemInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        } }, inputs: { groupId: "groupId", field: "field", items: "items", done: "done" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["color", "warn", 4, "ngSwitchDefault"], ["style", "margin-left:8px;", 4, "ngFor", "ngForOf"], [2, "margin-left", "8px"], ["color", "warn"], [3, "appearance", "floatLabel"], ["aria-label", "Selection"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], [3, "placeholder", "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["itemInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "removed"], ["matChipRemove", "", 1, "danger"], [3, "value"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MembersComponent_div_1_Template, 3, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MembersComponent_form_2_Template, 13, 14, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.field.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", false);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
    return MembersComponent;
}());



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map