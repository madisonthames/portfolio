(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n    Set variables\n*/\n/* Brand Colors */\n/* Style Properties */\n/* Padding */\n/* Margin */\n/*\n    Standard SCSS Mixins -- Created by: Ryan Thames\n    Github -- http://www.github.com/rthames62\n*/\n/* Browser Specifit Mixins */\n/* Responsive Mixins */\n/* Pixel to Rem converter. Font size mixin provides px fallback. */\n/* Auto center a blocked element */\n/* Pseudo helper for ::before and ::after */\n/* Opacity mixin for cross browser functionality */\n/* Standard clearfix */\n/* Vendor prefixes for cross browser support  */\n/* Insclusions */\n/*\n    Useful scss functions\n*/\n/*\n    Useful extend classes\n*/\n.flex-all-center {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.grow {\n  transition: 0.2s ease transform; }\n.grow:hover {\n    -webkit-transform: scale(1.06);\n    transform: scale(1.06); }\n.ellipsis_one_line {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 1px;\n  margin-right: -1px; }\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box; }\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Noto Sans HK', sans-serif; }\nh1, h2, h3, h4, h5 {\n  font-weight: 700;\n  color: #FFF;\n  margin-bottom: 5px; }\nh1 {\n  font-size: 40px;\n  margin: 24px 0; }\nh1.large {\n    font-size: 72px; }\n@media (max-width: 767px) {\n      h1.large {\n        font-size: 48px; } }\nh2 {\n  font-size: 28px;\n  line-height: 36px;\n  letter-spacing: -.2px; }\np, a, span {\n  font-size: 14px; }\np {\n  margin-bottom: 10px;\n  color: #FFF;\n  line-height: 18px; }\n.accent {\n  color: #ff6768; }\n.hidden {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRpc29udGhhbWVzL0RvY3VtZW50cy9kZXZtdG4vcG9ydGZvbGlvL3BvcnRmb2xpby9zcmMvc2Fzcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL21hZGlzb250aGFtZXMvRG9jdW1lbnRzL2Rldm10bi9wb3J0Zm9saW8vcG9ydGZvbGlvL3NyYy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvbWFkaXNvbnRoYW1lcy9Eb2N1bWVudHMvZGV2bXRuL3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL3Nhc3MvYWJzdHJhY3RzL19mdW5jdGlvbnMuc2NzcyIsIi9Vc2Vycy9tYWRpc29udGhhbWVzL0RvY3VtZW50cy9kZXZtdG4vcG9ydGZvbGlvL3BvcnRmb2xpby9zcmMvc2Fzcy9hYnN0cmFjdHMvX2V4dGVuZHMuc2NzcyIsIi9Vc2Vycy9tYWRpc29udGhhbWVzL0RvY3VtZW50cy9kZXZtdG4vcG9ydGZvbGlvL3BvcnRmb2xpby9zcmMvc2Fzcy9iYXNlL19yZXNldC5zY3NzIiwiL1VzZXJzL21hZGlzb250aGFtZXMvRG9jdW1lbnRzL2Rldm10bi9wb3J0Zm9saW8vcG9ydGZvbGlvL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0NFQztBREtELGlCQUFBO0FBU0EscUJBQUE7QUFPQSxZQUFBO0FBS0EsV0FBQTtBRTVCQTs7O0NEVUM7QUNERCw0QkFBQTtBQVFBLHNCQUFBO0FBd0NBLGtFQUFBO0FBU0Esa0NBQUE7QUFTQSwyQ0FBQTtBQVFBLGtEQUFBO0FBUUEsc0JBQUE7QUFVQSwrQ0FBQTtBQW9KQSxnQkFBQTtBQ3pQQTs7Q0ZzQkM7QUd0QkQ7O0NIeUJDO0FHckJEO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUd2QjtFRm1JRSwrQkVsSXdDLEVBQUE7QUFEMUM7SUZ5SUUsOEJFcklvQztJRnNJcEMsc0JFdElvQyxFQUFBO0FBSXRDO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FDdkJ0Qjs7O0NKcURDO0FJaEREO0VBQ0Msc0JBQXNCLEVBQUE7QUFHdkI7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBO0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBO0FBRWY7RUFDQyxjQUFjLEVBQUE7QUFFZjtFQUNDLGdCQUFnQixFQUFBO0FBRWpCO0VBQ0MsWUFBWSxFQUFBO0FBRWI7O0VBRUMsV0FBVztFQUNYLGFBQWEsRUFBQTtBQUVkO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0FDL0NsQiw4RUFBQTtBQUtBO0VBQ0UsdUNBQXVDLEVBQUE7QUFHekM7RUFDRSxnQk5JZTtFTUhmLFdOVlU7RU1XVixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7QUFGaEI7SUFLTSxlQUFlLEVBQUE7QUpFYjtNSVBSO1FBUVEsZUFBZSxFQUFBLEVBRXBCO0FBR0g7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsbUJBQW1CO0VBQ25CLFdOdkNVO0VNd0NWLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsY05yQ29CLEVBQUE7QU13Q3RCO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgU2V0IHZhcmlhYmxlc1xuKi9cblxuJHdoaXRlOiAjRkZGO1xuJGJsYWNrOiAjMDAwO1xuXG4vKiBCcmFuZCBDb2xvcnMgKi9cbiRjb2xvci1tYWluOiAjMjYzODU5O1xuJGNvbG9yLW1haW4tZGFyazogIzE3MjIzYjtcbiRjb2xvci1tYWluLWxpZ2h0OiAjNmI3NzhkO1xuJGNvbG9yLWFjY2VudDogI2ZmNjc2ODtcbiRjb2xvci1uZXV0cmFsOiAjQjNCM0IzO1xuJGNvbG9yLWVycm9yOiByZWQ7XG4kY29sb3ItYW5ndWxhcjogI0MzMEUyRDtcblxuLyogU3R5bGUgUHJvcGVydGllcyAqL1xuJHdlaWdodC1ib2xkOiA3MDA7XG4kd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xuJHdlaWdodC1tZWRpdW06IDYwMDtcbiR3ZWlnaHQtcmVndWxhcjogNDAwO1xuJHdlaWdodC1saWdodDogMzAwO1xuXG4vKiBQYWRkaW5nICovXG4kcGFkZGluZy1zbTogcmVtKDVweCk7XG4kcGFkZGluZy1tZDogcmVtKDEwcHgpO1xuJHBhZGRpbmctbGc6IHJlbSgxNXB4KTtcblxuLyogTWFyZ2luICovXG4kbWFyZ2luLXNtOiByZW0oNXB4KTtcbiRtYXJnaW4tbWQ6IHJlbSgxMHB4KTtcbiRtYXJnaW4tbGc6IHJlbSgxNXB4KTtcbiIsIi8qXG4gICAgU2V0IHZhcmlhYmxlc1xuKi9cbi8qIEJyYW5kIENvbG9ycyAqL1xuLyogU3R5bGUgUHJvcGVydGllcyAqL1xuLyogUGFkZGluZyAqL1xuLyogTWFyZ2luICovXG4vKlxuICAgIFN0YW5kYXJkIFNDU1MgTWl4aW5zIC0tIENyZWF0ZWQgYnk6IFJ5YW4gVGhhbWVzXG4gICAgR2l0aHViIC0tIGh0dHA6Ly93d3cuZ2l0aHViLmNvbS9ydGhhbWVzNjJcbiovXG4vKiBCcm93c2VyIFNwZWNpZml0IE1peGlucyAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qIFBpeGVsIHRvIFJlbSBjb252ZXJ0ZXIuIEZvbnQgc2l6ZSBtaXhpbiBwcm92aWRlcyBweCBmYWxsYmFjay4gKi9cbi8qIEF1dG8gY2VudGVyIGEgYmxvY2tlZCBlbGVtZW50ICovXG4vKiBQc2V1ZG8gaGVscGVyIGZvciA6OmJlZm9yZSBhbmQgOjphZnRlciAqL1xuLyogT3BhY2l0eSBtaXhpbiBmb3IgY3Jvc3MgYnJvd3NlciBmdW5jdGlvbmFsaXR5ICovXG4vKiBTdGFuZGFyZCBjbGVhcmZpeCAqL1xuLyogVmVuZG9yIHByZWZpeGVzIGZvciBjcm9zcyBicm93c2VyIHN1cHBvcnQgICovXG4vKiBJbnNjbHVzaW9ucyAqL1xuLypcbiAgICBVc2VmdWwgc2NzcyBmdW5jdGlvbnNcbiovXG4vKlxuICAgIFVzZWZ1bCBleHRlbmQgY2xhc3Nlc1xuKi9cbi5mbGV4LWFsbC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZ3JvdyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgdHJhbnNmb3JtO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycyBlYXNlIHRyYW5zZm9ybTtcbiAgLW8tdHJhbnNpdGlvbjogMC4ycyBlYXNlIHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIHRyYW5zZm9ybTsgfVxuICAuZ3Jvdzpob3ZlciB7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgfVxuXG4uZWxsaXBzaXNfb25lX2xpbmUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7IH1cblxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTsgfVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7IH1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSEsnLCBzYW5zLXNlcmlmOyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbjogMjRweCAwOyB9XG4gIGgxLmxhcmdlIHtcbiAgICBmb250LXNpemU6IDcycHg7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIGgxLmxhcmdlIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4OyB9IH1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLS4ycHg7IH1cblxucCwgYSwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4OyB9XG5cbi5hY2NlbnQge1xuICBjb2xvcjogI2ZmNjc2ODsgfVxuXG4uaGlkZGVuIHtcbiAgb3BhY2l0eTogMDsgfVxuIiwiLypcbiAgICBTdGFuZGFyZCBTQ1NTIE1peGlucyAtLSBDcmVhdGVkIGJ5OiBSeWFuIFRoYW1lc1xuICAgIEdpdGh1YiAtLSBodHRwOi8vd3d3LmdpdGh1Yi5jb20vcnRoYW1lczYyXG4qL1xuXG4vLyBAaW1wb3J0IFwiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vLyBAaW1wb3J0IFwiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG4vLyBAaW1wb3J0IFwiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5cbi8qIEJyb3dzZXIgU3BlY2lmaXQgTWl4aW5zICovXG5cbkBtaXhpbiBzcGVjaWZpYy1icm93c2VyKCRicm93c2VyKSB7XG4gICAgQGlmICRicm93c2VyID09IGllIHtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHsgQGNvbnRlbnQ7fVxuICAgIH1cbn1cblxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cblxuQG1peGluIGJyZWFrcG9pbnQoJGNsYXNzKXtcbiAgICBAaWYgJGNsYXNzID09IHh4cyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7IEBjb250ZW50OyB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJGNsYXNzID09IHhzIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXsgQGNvbnRlbnQ7IH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkY2xhc3MgPT0gc20ge1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkY2xhc3MgPT0gbWQge1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkY2xhc3MgPT0gbGcge1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJGNsYXNzID09IHNtLW9ubHkge1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRjbGFzcyA9PSBtZC1vbmx5IHtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfVxuXG4gICAgQGVsc2Uge1xuICAgICAgICBAd2FybiBcIkJyZWFrcG9pbiBtaXhpbiBzdXBwb3J0czogeHMsIHNtLCBtZCwgbGcsIHNtLW9ubHksIG1kLW9ubHlcIjtcbiAgICB9XG59XG5cbkBtaXhpbiBoZWlnaHQtYnJlYWtwb2ludCgkc2l6ZSkge1xuICAgIEBtZWRpYSAobWF4LWhlaWdodDogJHNpemUpIHsgQGNvbnRlbnQ7IH1cbn1cblxuLyogUGl4ZWwgdG8gUmVtIGNvbnZlcnRlci4gRm9udCBzaXplIG1peGluIHByb3ZpZGVzIHB4IGZhbGxiYWNrLiAqL1xuXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKXtcbiAgICBmb250LXNpemU6ICRzaXplO1xuICAgIGZvbnQtc2l6ZTogcmVtKCRzaXplKTtcbn1cblxuXG5cbi8qIEF1dG8gY2VudGVyIGEgYmxvY2tlZCBlbGVtZW50ICovXG5cbkBtaXhpbiBwdXNoLWF1dG8ge1xuICAgIG1hcmdpbjoge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICB9XG59XG5cbi8qIFBzZXVkbyBoZWxwZXIgZm9yIDo6YmVmb3JlIGFuZCA6OmFmdGVyICovXG5cbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKXtcbiAgICBjb250ZW50OiAkY29udGVudDtcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgICBwb3NpdGlvbjogJHBvcztcbn1cblxuLyogT3BhY2l0eSBtaXhpbiBmb3IgY3Jvc3MgYnJvd3NlciBmdW5jdGlvbmFsaXR5ICovXG5cbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7IC8vSUU4XG59XG5cbi8qIFN0YW5kYXJkIGNsZWFyZml4ICovXG5cbkBtaXhpbiBjbGVhcmZpeCB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLyogVmVuZG9yIHByZWZpeGVzIGZvciBjcm9zcyBicm93c2VyIHN1cHBvcnQgICovXG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbi1uYW1lKSB7XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAjeyRzdHJ9O1xuICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcbiAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcbiAgLW8tYW5pbWF0aW9uOiAjeyRzdHJ9O1xuICBhbmltYXRpb246ICN7JHN0cn07XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJHZhbHVlKXtcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1vLXRyYW5zaXRpb246ICRhcmdzO1xuICB0cmFuc2l0aW9uOiAkYXJncztcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUpIHtcbiAgLW8tdHJhbnNmb3JtOiAkdmFsdWU7XG4gIC1tcy10cmFuc2Zvcm06ICR2YWx1ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWx1ZTtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luICgkdmFsdWUpIHtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR2YWx1ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICYucGxhY2Vob2xkZXIgeyBAY29udGVudDsgfVxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7IEBjb250ZW50OyB9XG4gICAgJjo6LW1vei1wbGFjZWhvbGRlciB7IEBjb250ZW50OyB9XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBAY29udGVudDsgfVxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBAY29udGVudDsgfVxufVxuXG5AbWl4aW4gYm94LXNpemluZygkdmFsdWUuLi4pe1xuICAtd2Via2l0LWJveC1zaXppbmc6ICR2YWx1ZTtcbiAgLW1vei1ib3gtc2l6aW5nOiAkdmFsdWU7XG4gIGJveC1zaXppbmc6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHZhbHVlKXtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkdmFsdWU7XG4gIC1tb3otYm94LXNoYWRvdzogJHZhbHVlO1xuICBib3gtc2hhZG93OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR2YWx1ZSl7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHZhbHVlO1xuICAtd2Via2l0LS1yYWRpdXM6ICR2YWx1ZTtcbiAgYm9yZGVyLXJhZGl1czogJHZhbHVlO1xufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR2YWx1ZSl7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogJHZhbHVlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogJHZhbHVlO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogJHZhbHVlO1xuICBiYWNrZ3JvdW5kLXNpemU6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHgsICR5LCAkeil7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCR4LCAkeSwgJHopO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkeCwgJHksICR6KTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkeCwgJHksICR6KTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkeCwgJHksICR6KTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCR4LCAkeSwgJHopO1xuICB9XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCRncmFkaWVudDEsICRncmFkaWVudDIpIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYWRpZW50MjsgLyogRmFsbGJhY2sgQ29sb3IgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsICRhbmdsZSwgZnJvbSgkZ3JhZGllbnQxKSwgdG8oJGdyYWRpZW50MikpOyAvKiBTYWY0KywgQ2hyb21lICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGdyYWRpZW50MSwgJGdyYWRpZW50Mik7IC8qIENocm9tZSAxMCssIFNhZjUuMSssIGlPUyA1KyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRncmFkaWVudDEsICRncmFkaWVudDIpOyAvKiBGRjMuNiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRncmFkaWVudDEsICRncmFkaWVudDIpOyAvKiBJRTEwICovXG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGdyYWRpZW50MSwgJGdyYWRpZW50Mik7IC8qIE9wZXJhIDExLjEwKyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRncmFkaWVudDEsICRncmFkaWVudDIpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChHcmFkaWVudFR5cGU9JGFuZ2xlLFN0YXJ0Q29sb3JTdHI9JyN7JGdyYWRpZW50MX0nLCBFbmRDb2xvclN0cj0nI3skZ3JhZGllbnQyfScpO1xufVxuXG5AbWl4aW4gZmlsdGVyKCR2YWx1ZSl7XG4gIC1vLWZpbHRlcjogJHZhbHVlO1xuICAtbXMtZmlsdGVyOiAkdmFsdWU7XG4gIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XG4gIC1tb3otZmlsdGVyOiAkdmFsdWU7XG4gIGZpbHRlcjogJHZhbHVlO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSgkdmFsdWUpe1xuICAtbW96LWFwcGVhcmFuY2U6ICR2YWx1ZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkdmFsdWU7XG4gIGFwcGVhcmFuY2U6ICR2YWx1ZTtcbn1cblxuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSl7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogJHZhbHVlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gbWluLWhlaWdodCgkdmFsdWUpe1xuICAgIG1pbi1oZWlnaHQ6ICR2YWx1ZTtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6ICR2YWx1ZTtcbn1cblxuQG1peGluIGxpbmUtY2xhbXAoJHZhbHVlKXtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkdmFsdWU7XG4gIGxpbmUtY2xhbXA6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1vcmllbnQoJHZhbHVlKXtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiAkdmFsdWU7XG4gIGJveC1vcmllbnQ6ICR2YWx1ZTtcbn1cblxuLyogSW5zY2x1c2lvbnMgKi9cblxuQG1peGluIGZsZXgge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBtaXhpbiBkaW0tdGV4dCB7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIG9wYWNpdHk6IC42XG59XG5cbkBtaXhpbiBhY3RpdmUtbGluayB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLThweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1hY2NlbnQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIiwiLypcbiAgICBVc2VmdWwgc2NzcyBmdW5jdGlvbnNcbiovXG5cbkBmdW5jdGlvbiByZW0oJHNpemUpe1xuICAgICRyZW1TaXplOiAkc2l6ZSAvIDE2cHg7XG4gICAgQHJldHVybiAkcmVtU2l6ZSAqIDFyZW07XG4gIH1cbiAgXG4gIEBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcbiAgfVxuICBcbiAgQGZ1bmN0aW9uIGNsYW1wKCR2YWx1ZSwgJG1pbiwgJG1heCkge1xuICAgIEByZXR1cm4gaWYoJHZhbHVlID4gJG1heCwgJG1heCwgaWYoJHZhbHVlIDwgJG1pbiwgJG1pbiwgJHZhbHVlKSk7XG4gIH1cbiAgXG4gIEBmdW5jdGlvbiBjb252ZXJ0LWFuZ2xlKCR2YWx1ZSwgJHVuaXQpIHtcbiAgICAkY29udmVydGFibGUtdW5pdHM6IGRlZyBncmFkIHR1cm4gcmFkO1xuICAgICRjb252ZXJzaW9uLWZhY3RvcnM6IDEgMTBncmFkLzlkZWcgMXR1cm4vMzYwZGVnIDMuMTQxNTkyNnJhZC8xODBkZWc7XG4gICAgQGlmIGluZGV4KCRjb252ZXJ0YWJsZS11bml0cywgdW5pdCgkdmFsdWUpKSBhbmQgaW5kZXgoJGNvbnZlcnRhYmxlLXVuaXRzLCAkdW5pdCkge1xuICAgICAgQHJldHVybiAkdmFsdWUgLyBudGgoJGNvbnZlcnNpb24tZmFjdG9ycywgaW5kZXgoJGNvbnZlcnRhYmxlLXVuaXRzLCB1bml0KCR2YWx1ZSkpKSAqIG50aCgkY29udmVyc2lvbi1mYWN0b3JzLCBpbmRleCgkY29udmVydGFibGUtdW5pdHMsICR1bml0KSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIkNhbm5vdCBjb252ZXJ0ICN7dW5pdCgkdmFsdWUpfSB0byAjeyR1bml0fVwiO1xuICAgIH1cbiAgfSIsIi8qXG4gICAgVXNlZnVsIGV4dGVuZCBjbGFzc2VzXG4qL1xuXG4uZmxleC1hbGwtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ncm93IHtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4ycyBlYXNlIHRyYW5zZm9ybSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlKDEuMDYpKTtcbiAgICB9XG59XG5cbi5lbGxpcHNpc19vbmVfbGluZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG59XG4iLCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufSIsIkBpbXBvcnQgJy4vc2Fzcy9vdXRwdXQuc2Nzcyc7XG5AaW1wb3J0ICcuL3Nhc3MvYmFzZS9yZXNldCc7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9taXhpbnMvZ3JpZC1mcmFtZXdvcmtcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL2dyaWRcIjtcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEhLJywgc2Fucy1zZXJpZjtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQtYm9sZDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAyNHB4IDA7XG5cbiAgJi5sYXJnZSB7XG4gICAgICBmb250LXNpemU6IDcycHg7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoeHMpIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMnB4O1xufVxuXG5wLCBhLCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5hY2NlbnQge1xuICBjb2xvcjogJGNvbG9yLWFjY2VudDtcbn1cblxuLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/madisonthames/Documents/devmtn/portfolio/portfolio/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map