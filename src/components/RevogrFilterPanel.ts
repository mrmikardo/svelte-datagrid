/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrFilterPanelProps {
  
  /**  */
  uuid?: Components.RevogrFilterPanel["uuid"]
  
  /**  */
  filterTypes?: Components.RevogrFilterPanel["filterTypes"]
  
  /**  */
  filterNames?: Components.RevogrFilterPanel["filterNames"]
  
  /**  */
  filterEntities?: Components.RevogrFilterPanel["filterEntities"]
}

interface RevogrFilterPanelEvents {
  
  /**  */
  filterChange: Parameters<JSX.RevogrFilterPanel["onFilterChange"]>[0]
}

interface RevogrFilterPanelSlots {
  default: any
}
  
/* generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let revogr_filter_panel;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			revogr_filter_panel = element("revogr-filter-panel");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_filter_panel, "uuid", /*uuid*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, revogr_filter_panel, anchor);

			if (default_slot) {
				default_slot.m(revogr_filter_panel, null);
			}

			/*revogr_filter_panel_binding*/ ctx[12](revogr_filter_panel);
			current = true;

			if (!mounted) {
				dispose = listen(revogr_filter_panel, "filterChange", /*onEvent*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1024) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			if (!current || dirty & /*uuid*/ 1) {
				set_custom_element_data(revogr_filter_panel, "uuid", /*uuid*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(revogr_filter_panel);
			if (default_slot) default_slot.d(detaching);
			/*revogr_filter_panel_binding*/ ctx[12](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { uuid = undefined } = $$props;
	let { filterTypes = undefined } = $$props;
	let { filterNames = undefined } = $$props;
	let { filterEntities = undefined } = $$props;
	const show = (...args) => __ref.show(...args);
	const getChanges = (...args) => __ref.getChanges(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(9, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_filter_panel_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("uuid" in $$props) $$invalidate(0, uuid = $$props.uuid);
		if ("filterTypes" in $$props) $$invalidate(3, filterTypes = $$props.filterTypes);
		if ("filterNames" in $$props) $$invalidate(4, filterNames = $$props.filterNames);
		if ("filterEntities" in $$props) $$invalidate(5, filterEntities = $$props.filterEntities);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, filterTypes*/ 520) {
			$: if (__mounted) setProp("filterTypes", filterTypes);
		}

		if ($$self.$$.dirty & /*__mounted, filterNames*/ 528) {
			$: if (__mounted) setProp("filterNames", filterNames);
		}

		if ($$self.$$.dirty & /*__mounted, filterEntities*/ 544) {
			$: if (__mounted) setProp("filterEntities", filterEntities);
		}
	};

	return [
		uuid,
		__ref,
		onEvent,
		filterTypes,
		filterNames,
		filterEntities,
		show,
		getChanges,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_filter_panel_binding
	];
}

class RevogrFilterPanel extends SvelteComponent {
  $$prop_def: RevogrFilterPanelProps;
  $$events_def: RevogrFilterPanelEvents;
  $$slot_def: RevogrFilterPanelSlots;

  $on<K extends keyof RevogrFilterPanelEvents>(type: K, callback: (e: RevogrFilterPanelEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrFilterPanelProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			uuid: 0,
			filterTypes: 3,
			filterNames: 4,
			filterEntities: 5,
			show: 6,
			getChanges: 7,
			getWebComponent: 8
		});
	}

	
  /**  */
 get show(): Components.RevogrFilterPanel["show"] {
		return this.$$.ctx[6];
	}

	
  /**  */
 get getChanges(): Components.RevogrFilterPanel["getChanges"] {
		return this.$$.ctx[7];
	}

	get getWebComponent(): HTMLRevogrFilterPanelElement | undefined {
		return this.$$.ctx[8];
	}
}

export default RevogrFilterPanel;