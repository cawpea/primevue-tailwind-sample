import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const MyDesignSystem = {
  button: {
    root: ({ props: ButtonProps, context: ButtonContext }) => ({
      class: ['px-4 py-2 bg-blue-600 text-white rounded-sm', 'hover:bg-blue-700 active:bg-blue-800']
    })
  },
  inputtext: {
    root: ({ props: InputTextProps, context: InputTextContext }) => ({
      class: [
        'm-0',
        'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
        {
          'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
            !context.disabled,
          'opacity-60 select-none pointer-events-none cursor-default': context.disabled
        },
        {
          'text-lg px-4 py-4': props.size == 'large',
          'text-xs px-2 py-2': props.size == 'small',
          'p-3 text-base': props.size == null
        }
      ]
    })
  },
  panel: {
    header: ({ props: PanelProps }) => ({
      class: [
        'flex items-center justify-between', // flex and alignments
        'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
        'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
        { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
      ]
    }),
    title: {
      class: ['leading-none font-bold']
    },
    toggler: {
      class: [
        'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
        'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
        'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
      ]
    },
    togglerIcon: {
      class: ['inline-block']
    },
    content: {
      class: [
        'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
        'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
      ] // padding, borders, and colors
    }
  }
}

app.use(PrimeVue, { unstyled: true, pt: MyDesignSystem })

app.component('my-button', Button)

app.mount('#app')
