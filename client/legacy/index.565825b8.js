import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as space, g as element, t as text, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, u as noop, v as validate_slots } from './client.6a1f9c9f.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0;
  var div1;
  var div0;
  var h2;
  var t1;
  var t2;
  var p0;
  var strong0;
  var t3;
  var t4;
  var strong1;
  var t5;
  var t6;
  var div2;
  var p1;
  var t7;
  var t8;
  var p2;
  var t9;
  var t10;
  var p3;
  var strong2;
  var t11;
  var t12;
  var t13;
  var p4;
  var t14;
  var t15;
  var p5;
  var t16;
  var t17;
  var div3;
  var p6;
  var t18;
  var span0;
  var strong3;
  var t19;
  var t20;
  var div4;
  var p7;
  var t21;
  var span1;
  var strong4;
  var t22;
  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t1 = text("Wellcome To My Blog");
      t2 = space();
      p0 = element("p");
      strong0 = element("strong");
      t3 = text("(work");
      t4 = text("\n\t\t\tin\n\t\t\t");
      strong1 = element("strong");
      t5 = text("progress...)");
      t6 = space();
      div2 = element("div");
      p1 = element("p");
      t7 = text("Sooo happy to mange a blog of my own! Yaaay!");
      t8 = space();
      p2 = element("p");
      t9 = text("I am a big enthusiast of technology.");
      t10 = space();
      p3 = element("p");
      strong2 = element("strong");
      t11 = text("#web #iot #compilers #optimization #automation #clean-code #algo");
      t12 = text("\n\t\tand anything else shiny");
      t13 = space();
      p4 = element("p");
      t14 = text("This blog represents my advanture in techno-world by building, tweaking\n\t\tand testing those shiny stuff 🙂");
      t15 = space();
      p5 = element("p");
      t16 = text("Enjoy!");
      t17 = space();
      div3 = element("div");
      p6 = element("p");
      t18 = text("My areas of interest\n\t\t");
      span0 = element("span");
      strong3 = element("strong");
      t19 = text("#Serverless #Cloud-Native #Go #Nodejs #Rust #AR");
      t20 = space();
      div4 = element("div");
      p7 = element("p");
      t21 = text("implemented with\n\t\t");
      span1 = element("span");
      strong4 = element("strong");
      t22 = text("#Svelte #Sapper #TailwindCSS #gh-pages");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-3b63py\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Wellcome To My Blog");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      strong0 = claim_element(p0_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t3 = claim_text(strong0_nodes, "(work");
      strong0_nodes.forEach(detach_dev);
      t4 = claim_text(p0_nodes, "\n\t\t\tin\n\t\t\t");
      strong1 = claim_element(p0_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t5 = claim_text(strong1_nodes, "progress...)");
      strong1_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p1 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "Sooo happy to mange a blog of my own! Yaaay!");
      p1_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "I am a big enthusiast of technology.");
      p2_nodes.forEach(detach_dev);
      t10 = claim_space(div2_nodes);
      p3 = claim_element(div2_nodes, "P", {});
      var p3_nodes = children(p3);
      strong2 = claim_element(p3_nodes, "STRONG", {});
      var strong2_nodes = children(strong2);
      t11 = claim_text(strong2_nodes, "#web #iot #compilers #optimization #automation #clean-code #algo");
      strong2_nodes.forEach(detach_dev);
      t12 = claim_text(p3_nodes, "\n\t\tand anything else shiny");
      p3_nodes.forEach(detach_dev);
      t13 = claim_space(div2_nodes);
      p4 = claim_element(div2_nodes, "P", {});
      var p4_nodes = children(p4);
      t14 = claim_text(p4_nodes, "This blog represents my advanture in techno-world by building, tweaking\n\t\tand testing those shiny stuff 🙂");
      p4_nodes.forEach(detach_dev);
      t15 = claim_space(div2_nodes);
      p5 = claim_element(div2_nodes, "P", {});
      var p5_nodes = children(p5);
      t16 = claim_text(p5_nodes, "Enjoy!");
      p5_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t17 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p6 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t18 = claim_text(p6_nodes, "My areas of interest\n\t\t");
      span0 = claim_element(p6_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      strong3 = claim_element(span0_nodes, "STRONG", {});
      var strong3_nodes = children(strong3);
      t19 = claim_text(strong3_nodes, "#Serverless #Cloud-Native #Go #Nodejs #Rust #AR");
      strong3_nodes.forEach(detach_dev);
      span0_nodes.forEach(detach_dev);
      p6_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t20 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      p7 = claim_element(div4_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t21 = claim_text(p7_nodes, "implemented with\n\t\t");
      span1 = claim_element(p7_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      strong4 = claim_element(span1_nodes, "STRONG", {});
      var strong4_nodes = children(strong4);
      t22 = claim_text(strong4_nodes, "#Svelte #Sapper #TailwindCSS #gh-pages");
      strong4_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      p7_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "zisy on";
      attr_dev(h2, "class", "text-4xl font-semibold");
      add_location(h2, file, 9, 2, 107);
      add_location(strong0, file, 11, 3, 198);
      add_location(strong1, file, 13, 3, 230);
      attr_dev(p0, "class", "text-2xl mt-2");
      add_location(p0, file, 10, 2, 169);
      add_location(div0, file, 8, 1, 99);
      attr_dev(div1, "class", "space-y-8");
      add_location(div1, file, 7, 0, 74);
      attr_dev(p1, "class", "text-md");
      add_location(p1, file, 19, 1, 313);
      add_location(p2, file, 20, 1, 382);
      add_location(strong2, file, 22, 2, 433);
      add_location(p3, file, 21, 1, 427);
      add_location(p4, file, 27, 1, 555);
      add_location(p5, file, 31, 1, 675);
      attr_dev(div2, "class", "space-y-2 mt-5");
      add_location(div2, file, 18, 0, 283);
      add_location(strong3, file, 37, 4, 781);
      add_location(span0, file, 36, 2, 771);
      attr_dev(p6, "class", "text-lg");
      add_location(p6, file, 34, 1, 726);
      attr_dev(div3, "class", "space-y-4 mt-5");
      add_location(div3, file, 33, 0, 696);
      add_location(strong4, file, 45, 8, 950);
      add_location(span1, file, 45, 2, 944);
      attr_dev(p7, "class", "text-lg");
      add_location(p7, file, 43, 1, 903);
      attr_dev(div4, "class", "space-y-4 mt-5");
      add_location(div4, file, 42, 0, 873);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, h2);
      append_dev(h2, t1);
      append_dev(div0, t2);
      append_dev(div0, p0);
      append_dev(p0, strong0);
      append_dev(strong0, t3);
      append_dev(p0, t4);
      append_dev(p0, strong1);
      append_dev(strong1, t5);
      insert_dev(target, t6, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, p1);
      append_dev(p1, t7);
      append_dev(div2, t8);
      append_dev(div2, p2);
      append_dev(p2, t9);
      append_dev(div2, t10);
      append_dev(div2, p3);
      append_dev(p3, strong2);
      append_dev(strong2, t11);
      append_dev(p3, t12);
      append_dev(div2, t13);
      append_dev(div2, p4);
      append_dev(p4, t14);
      append_dev(div2, t15);
      append_dev(div2, p5);
      append_dev(p5, t16);
      insert_dev(target, t17, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, p6);
      append_dev(p6, t18);
      append_dev(p6, span0);
      append_dev(span0, strong3);
      append_dev(strong3, t19);
      insert_dev(target, t20, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, p7);
      append_dev(p7, t21);
      append_dev(p7, span1);
      append_dev(span1, strong4);
      append_dev(strong4, t22);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(div2);
      if (detaching) detach_dev(t17);
      if (detaching) detach_dev(div3);
      if (detaching) detach_dev(t20);
      if (detaching) detach_dev(div4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
