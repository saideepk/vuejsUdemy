vuejs practice files from udemy.com

v-on:input or @input = for event binding
v-bind:href or :href = for property binding
v-html = for rendering HTML into DOM
v-once = renders the property which was used before updating
.stop = is a modifier, alternative of stop propagation, other modifiers are (prevent,capture,self,once..)
methods = methods of vue instance
computed = renders only once, dependent properties, not good for async calls
watch object = Executes code upon data changes, watches property, uses in async calls

v-model is used for Two Way Data Binding

\$refs = An object of DOM elements and component instances, registered with ref attributes.(e.g ref="someName" , this.$refs.refName)
\$mount = used to bind vue instance to an el
