// setup/shiki.ts
import { defineShikiSetup } from '@slidev/types'
import { transformerNotationWordHighlight } from '@shikijs/transformers'

export default defineShikiSetup
(() => {
 return {
   themes
: {
     dark
: 'min-dark',
     light
: 'min-light',
   },
   transformers
: [
     transformerNotationWordHighlight(),  // enable word‐highlight transformer
   ],
 }
})