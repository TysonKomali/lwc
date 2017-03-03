import assert from "../assert.js";
import { renderComponent } from "../component.js";

function rerender(oldVnode: VNode, vnode: ComponentVNode) {
    const { vm } = vnode;
    if (!vm) {
        return;
    }
    const { children } = vnode;
    // if diffing is against an inserted VM, it means the element is already
    // in the DOM and we can compute its body.
    if (vm.wasInserted && vm.isDirty) {
        assert.invariant(oldVnode.children !== children, `If component is dirty, the children collections must be different. In theory this should never happen.`);
        renderComponent(vm);
    }
    // replacing the vnodes in the children array without replacing the array itself
    // because the engine has a hard reference to the original array object.
    children.splice(0, children.length).push.apply(children, vm.fragment);
}

export default {
    create: rerender,
    update: rerender,
};
