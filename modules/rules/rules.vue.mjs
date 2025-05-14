/** @type {Record<string, any>} */
export const vueRules = {
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/no-child-content': ['error'],
    'vue/slot-name-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/component-options-name-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
            registeredComponentsOnly: false,
        },
    ],
};
